import { SupportedLanguage } from '../types/lesson';
import { MasterySkill, SkillMastery, UserMasteryProfile, MasteryTrend, MasteryStatus } from '../types/mastery';
import { LearningSignalService } from './LearningSignalService';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

export interface EvidenceRecord {
    id?: string;
    eventId?: string;
    skill: MasterySkill;
    score: number; // 0-100
    timestamp: string;
    details?: string;
    type?: 'performance' | 'completion';
}

export const MasteryEngine = {
    /**
     * Get the authoritative list of skills for the specified language.
     */
    getSkillsForLanguage(language: SupportedLanguage): MasterySkill[] {
        if (language === 'ja') {
            return ['vocabulary', 'kanji', 'grammar', 'reading', 'listening', 'speaking'];
        }
        return ['vocabulary', 'grammar', 'reading', 'listening', 'writing', 'speaking'];
    },

    /**
     * Retrieve local evidence history for a user and language.
     */
    getUserEvidence(userId: string = 'guest', language: SupportedLanguage = 'en'): EvidenceRecord[] {
        const key = `study_planner_mastery_evidence_${userId}_${language}`;
        const records = safeLocalStorage.getJSON<EvidenceRecord[]>(key, []);
        return Array.isArray(records) ? records : [];
    },

    /**
     * Record a new piece of skill evidence (e.g. quiz result, SRS review, AI evaluation).
     * Implements deterministic idempotency: if an evidence record with the same ID/eventId already exists, it is skipped.
     */
    recordEvidence(userId: string = 'guest', language: SupportedLanguage, record: EvidenceRecord): void {
        const key = `study_planner_mastery_evidence_${userId}_${language}`;
        const existing = this.getUserEvidence(userId, language);

        const recId = record.id || record.eventId;
        if (recId && existing.some(e => e.id === recId || e.eventId === recId)) {
            return;
        }

        existing.push(record);
        // Keep the last 100 evidence points to keep storage lean
        if (existing.length > 100) {
            existing.splice(0, existing.length - 100);
        }
        safeLocalStorage.setJSON(key, existing);
    },

    /**
     * Record multiple pieces of skill evidence in batch with idempotency deduplication.
     */
    recordEvidenceBatch(userId: string = 'guest', language: SupportedLanguage, records: EvidenceRecord[]): void {
        if (!records || records.length === 0) return;
        const key = `study_planner_mastery_evidence_${userId}_${language}`;
        const existing = this.getUserEvidence(userId, language);
        const existingIds = new Set(existing.map(e => e.id || e.eventId).filter(Boolean));

        for (const rec of records) {
            const recId = rec.id || rec.eventId;
            if (recId && existingIds.has(recId)) {
                continue;
            }
            if (recId) existingIds.add(recId);
            existing.push(rec);
        }

        if (existing.length > 100) {
            existing.splice(0, existing.length - 100);
        }
        safeLocalStorage.setJSON(key, existing);
    },

    /**
     * Calculate trend from chronological evidence scores.
     */
    calculateTrend(evidence: EvidenceRecord[]): MasteryTrend {
        if (evidence.length < 3) {
            return 'stable';
        }

        const mid = Math.floor(evidence.length / 2);
        const firstHalf = evidence.slice(0, mid);
        const secondHalf = evidence.slice(mid);

        const avg1 = firstHalf.reduce((sum, e) => sum + e.score, 0) / firstHalf.length;
        const avg2 = secondHalf.reduce((sum, e) => sum + e.score, 0) / secondHalf.length;

        const diff = avg2 - avg1;
        if (diff >= 5) return 'improving';
        if (diff <= -5) return 'declining';
        return 'stable';
    },

    /**
     * Apply time-based recency decay if inactive for more than 14 days.
     */
    applyRecencyDecay(baseScore: number, lastUpdatedAt?: string, now: Date = new Date()): number {
        if (!lastUpdatedAt) return baseScore;
        const lastTime = new Date(lastUpdatedAt).getTime();
        const diffDays = Math.floor((now.getTime() - lastTime) / (1000 * 60 * 60 * 24));

        if (diffDays > 14) {
            // Decay by ~0.5% per day past 14 days, max decay 20%
            const decay = Math.min(20, Math.floor((diffDays - 14) * 0.5));
            return Math.max(10, baseScore - decay);
        }

        return baseScore;
    },

    /**
     * Compute Mastery for a single skill.
     */
    computeSkillMastery(
        skill: MasterySkill, 
        evidence: EvidenceRecord[], 
        language: SupportedLanguage,
        supplementary?: { srsRetention?: number; mistakeCount?: number }
    ): SkillMastery {
        const isJa = language === 'ja';
        const performanceEvidence = evidence.filter(e => e.type !== 'completion');
        const performanceCount = performanceEvidence.length;
        const totalCount = evidence.length;

        if (performanceCount === 0) {
            // Handle cold start with fallback signals if available
            // Phase 8.10: SRS retention seeds Vocabulary AND Kanji (primary JLPT deck skills)
            if ((skill === 'vocabulary' || skill === 'kanji') && typeof supplementary?.srsRetention === 'number' && supplementary.srsRetention > 0) {
                const srsScore = supplementary.srsRetention;
                // Phase 19 thresholds: <50 weak, 50-69 developing, 70-84 proficient, 85+ mastered
                const srsStatus: MasteryStatus = srsScore >= 85 ? 'mastered' : srsScore >= 70 ? 'proficient' : srsScore >= 50 ? 'developing' : 'weak';
                return {
                    skill,
                    score: srsScore,
                    confidence: 30,
                    evidenceCount: totalCount || 1,
                    trend: 'stable',
                    status: srsStatus,
                    explanation: isJa 
                        ? `SRS fleshkartalarning o'rtacha o'zlashtirish darajasi: ${srsScore}%.` 
                        : `SRS flashcard average retention: ${srsScore}%.`
                };
            }

            return {
                skill,
                score: 0,
                confidence: 0,
                evidenceCount: totalCount,
                trend: 'stable',
                status: 'not_started',
                explanation: isJa 
                    ? `Ushbu ko'nikma bo'yicha hali mashqlar bajarilmagan.` 
                    : `No practice activity recorded for this skill yet.`
            };
        }

        // Weighted Average of Performance Evidence (recent evidence weighted more)
        let totalWeight = 0;
        let weightedSum = 0;
        for (let i = 0; i < performanceEvidence.length; i++) {
            const weight = 1 + (i / performanceEvidence.length); // 1.0 to 2.0
            weightedSum += performanceEvidence[i].score * weight;
            totalWeight += weight;
        }

        let rawScore = Math.round(weightedSum / totalWeight);

        // Account for recent mistakes count penalty
        if (supplementary?.mistakeCount && supplementary.mistakeCount > 0) {
            rawScore = Math.max(10, rawScore - Math.min(25, supplementary.mistakeCount * 5));
        }

        const lastRecord = performanceEvidence[performanceEvidence.length - 1];
        const finalScore = this.applyRecencyDecay(rawScore, lastRecord?.timestamp);
        const confidence = Math.min(100, Math.round(totalCount * 12)); // All activity builds confidence
        const trend = this.calculateTrend(performanceEvidence);

        // Phase 19 canonical thresholds:
        //   < 50  → weak
        //  50–69  → developing
        //  70–84  → proficient
        //   85+   → mastered (requires confidence >= 40 to prevent premature promotion)
        let status: MasteryStatus = 'not_started';
        if (finalScore >= 85 && confidence >= 40) {
            status = 'mastered';
        } else if (finalScore >= 70) {
            status = 'proficient';
        } else if (finalScore >= 50) {
            status = 'developing';
        } else {
            status = 'weak';
        }

        const explanation = isJa
            ? `${totalCount} ta natija asosida hisoblandi. Ko'rsatkich: ${finalScore}%, ishonchlilik: ${confidence}%.`
            : `Computed from ${totalCount} evidence points. Skill score: ${finalScore}%, confidence: ${confidence}%.`;

        return {
            skill,
            score: finalScore,
            confidence,
            evidenceCount: totalCount,
            lastUpdatedAt: lastRecord?.timestamp,
            trend,
            status,
            explanation
        };
    },

    /**
     * Generate the complete UserMasteryProfile.
     */
    calculateMasteryProfile(
        userId: string = 'guest', 
        language: SupportedLanguage = 'en',
        supplementary?: { srsRetention?: number }
    ): UserMasteryProfile {
        const skillsList = this.getSkillsForLanguage(language);
        const allEvidence = this.getUserEvidence(userId, language);
        const allSignals = LearningSignalService.getSignalsForUser(userId);
        const signals = allSignals.filter(s => !s.language || s.language === language);

        // Count mistakes by skill if inferred from signals
        const skillMistakes: Record<string, number> = {};
        for (const sig of signals) {
            if (sig.type === 'incorrect_answer' || sig.type === 'repeated_error') {
                const explicitSkill = (sig as any).skill as string | undefined;
                if (explicitSkill && skillsList.includes(explicitSkill as MasterySkill)) {
                    skillMistakes[explicitSkill] = (skillMistakes[explicitSkill] || 0) + 1;
                } else {
                    const topic = ('prompt' in sig ? (sig.prompt || '') : '').toLowerCase();
                    if (topic.includes('grammar') || topic.includes('inversion') || topic.includes('verb')) {
                        skillMistakes['grammar'] = (skillMistakes['grammar'] || 0) + 1;
                    } else if (topic.includes('kanji')) {
                        skillMistakes['kanji'] = (skillMistakes['kanji'] || 0) + 1;
                    } else if (topic.includes('listening')) {
                        skillMistakes['listening'] = (skillMistakes['listening'] || 0) + 1;
                    } else if (topic.includes('reading')) {
                        skillMistakes['reading'] = (skillMistakes['reading'] || 0) + 1;
                    } else {
                        skillMistakes['vocabulary'] = (skillMistakes['vocabulary'] || 0) + 1;
                    }
                }
            }
        }

        const skills: Record<string, SkillMastery> = {};
        let totalScoreSum = 0;
        let totalConfidenceSum = 0;
        let activeSkillCount = 0;

        for (const skill of skillsList) {
            const skillEvidence = allEvidence.filter(e => e.skill === skill);
            const mastery = this.computeSkillMastery(skill, skillEvidence, language, {
                srsRetention: supplementary?.srsRetention,
                mistakeCount: skillMistakes[skill] || 0
            });
            skills[skill] = mastery;

            if (mastery.evidenceCount > 0) {
                totalScoreSum += mastery.score;
                totalConfidenceSum += mastery.confidence;
                activeSkillCount++;
            }
        }

        const overallMasteryScore = activeSkillCount > 0 ? Math.round(totalScoreSum / activeSkillCount) : 0;
        const overallConfidence = activeSkillCount > 0 ? Math.round(totalConfidenceSum / activeSkillCount) : 0;

        return {
            userId,
            language,
            skills,
            topWeaknesses: [], // Will be populated by WeaknessEngine
            topStrengths: [],  // Will be populated by WeaknessEngine
            overallMasteryScore,
            overallConfidence,
            lastCalculatedAt: new Date().toISOString()
        };
    }
};
