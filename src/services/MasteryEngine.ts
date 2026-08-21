import { SupportedLanguage } from '../types/lesson';
import { MasterySkill, SkillMastery, UserMasteryProfile, MasteryTrend, MasteryStatus } from '../types/mastery';
import {
    LearningEvidence,
    EvidenceCategory,
    resolveCategory,
    computeMasteryImpact
} from '../types/learningEvidence';
import { LearningSignalService } from './LearningSignalService';
import { safeLocalStorage } from '../utils/storage/safeLocalStorage';

/** Phase 19: canonical unified evidence record (alias of LearningEvidence). */
export type EvidenceRecord = LearningEvidence;

/**
 * Phase 19 — Centralized, deterministic mastery configuration.
 * All thresholds are defined here; no magic numbers are scattered in logic.
 */
export const MASTERY_CONFIG = {
    /** score < weakThreshold → weak */
    weakThreshold: 50,
    /** score >= proficientThreshold → proficient (unless mastered) */
    proficientThreshold: 70,
    /** score >= masteredThreshold → mastered */
    masteredThreshold: 85,
    /** mastered additionally requires confidence >= this value */
    masteredMinConfidence: 40,
    /** max evidence records kept per user+language */
    maxEvidenceRecords: 100,
    /** recency decay begins after this many inactive days */
    recencyDecayStartDays: 14,
    /** decay % per day past the start threshold */
    recencyDecayPerDay: 0.5,
    /** maximum recency decay (percentage points) */
    recencyDecayMax: 20,
    /** score floor after penalties/decay */
    minFloorScore: 10,
    /** avg-score difference that marks improving/declining trend */
    trendDelta: 5,
    /** minimum evidence samples required to compute a trend */
    minTrendSamples: 3,
    /** confidence gained per evidence record */
    confidencePerEvidence: 12,
    /** hard confidence ceiling */
    maxConfidence: 100,
    /** mastery score penalty per recorded mistake */
    mistakePenaltyPerMistake: 5,
    /** maximum mistake penalty (percentage points) */
    mistakePenaltyMax: 25
};

/**
 * Map a score (+ confidence) to the canonical mastery status ladder.
 */
export function statusForScore(score: number, confidence: number): MasteryStatus {
    if (score >= MASTERY_CONFIG.masteredThreshold && confidence >= MASTERY_CONFIG.masteredMinConfidence) {
        return 'mastered';
    }
    if (score >= MASTERY_CONFIG.proficientThreshold) return 'proficient';
    if (score >= MASTERY_CONFIG.weakThreshold) return 'developing';
    return 'weak';
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
     * Phase 19 — Return mastery for a single skill (language-isolated).
     */
    getSkillMastery(
        userId: string = 'guest',
        language: SupportedLanguage = 'en',
        skill: MasterySkill
    ): SkillMastery {
        const profile = this.calculateMasteryProfile(userId, language);
        return profile.skills[skill] || {
            skill,
            score: 0,
            confidence: 0,
            evidenceCount: 0,
            trend: 'stable',
            status: 'not_started',
            explanation: ''
        };
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
     * Phase 19 — Canonical evidence entry point.
     * Derives category and mastery impact deterministically, then records.
     */
    recordEvent(
        userId: string = 'guest',
        language: SupportedLanguage,
        event: LearningEvidence
    ): void {
        const category: EvidenceCategory = resolveCategory(event);
        const record: LearningEvidence = {
            ...event,
            userId: event.userId || userId,
            language: event.language || language,
            category,
            masteryImpact: event.masteryImpact ?? computeMasteryImpact(event.activityType, event.score, category),
            type: category === 'completion' ? 'completion' : 'performance'
        };
        this.recordEvidence(userId, language, record);
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
        if (evidence.length < MASTERY_CONFIG.minTrendSamples) {
            return 'stable';
        }

        const mid = Math.floor(evidence.length / 2);
        const firstHalf = evidence.slice(0, mid);
        const secondHalf = evidence.slice(mid);

        const avg1 = firstHalf.reduce((sum, e) => sum + e.score, 0) / firstHalf.length;
        const avg2 = secondHalf.reduce((sum, e) => sum + e.score, 0) / secondHalf.length;

        const diff = avg2 - avg1;
        if (diff >= MASTERY_CONFIG.trendDelta) return 'improving';
        if (diff <= -MASTERY_CONFIG.trendDelta) return 'declining';
        return 'stable';
    },

    /**
     * Apply time-based recency decay if inactive for more than 14 days.
     */
    applyRecencyDecay(baseScore: number, lastUpdatedAt?: string, now: Date = new Date()): number {
        if (!lastUpdatedAt) return baseScore;
        const lastTime = new Date(lastUpdatedAt).getTime();
        const diffDays = Math.floor((now.getTime() - lastTime) / (1000 * 60 * 60 * 24));

        if (diffDays > MASTERY_CONFIG.recencyDecayStartDays) {
            const decay = Math.min(
                MASTERY_CONFIG.recencyDecayMax,
                Math.floor((diffDays - MASTERY_CONFIG.recencyDecayStartDays) * MASTERY_CONFIG.recencyDecayPerDay)
            );
            return Math.max(MASTERY_CONFIG.minFloorScore, baseScore - decay);
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
        const performanceEvidence = evidence.filter(e => resolveCategory(e) !== 'completion');
        const performanceCount = performanceEvidence.length;
        const totalCount = evidence.length;

        if (performanceCount === 0) {
            // Handle cold start with fallback signals if available
            // Phase 8.10: SRS retention seeds Vocabulary AND Kanji (primary JLPT deck skills)
            if ((skill === 'vocabulary' || skill === 'kanji') && typeof supplementary?.srsRetention === 'number' && supplementary.srsRetention > 0) {
                const srsScore = supplementary.srsRetention;
                // Phase 19 thresholds: <50 weak, 50-69 developing, 70-84 proficient, 85+ mastered
                const srsStatus: MasteryStatus = statusForScore(srsScore, MASTERY_CONFIG.maxConfidence);
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
            rawScore = Math.max(MASTERY_CONFIG.minFloorScore, rawScore - Math.min(MASTERY_CONFIG.mistakePenaltyMax, supplementary.mistakeCount * MASTERY_CONFIG.mistakePenaltyPerMistake));
        }

        const lastRecord = performanceEvidence[performanceEvidence.length - 1];
        const finalScore = this.applyRecencyDecay(rawScore, lastRecord?.timestamp);
        const confidence = Math.min(MASTERY_CONFIG.maxConfidence, Math.round(totalCount * MASTERY_CONFIG.confidencePerEvidence)); // All activity builds confidence
        const trend = this.calculateTrend(performanceEvidence);

        // Phase 19 canonical thresholds:
        //   < 50  → weak
        //  50–69  → developing
        //  70–84  → proficient
        //   85+   → mastered (requires confidence >= 40 to prevent premature promotion)
        let status: MasteryStatus = 'not_started';
        status = statusForScore(finalScore, confidence);

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
