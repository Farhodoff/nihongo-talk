import { SupportedLanguage } from '../types/lesson';
import { MasterySkill } from '../types/mastery';
import { 
    DiagnosticQuestion, 
    DiagnosticMode, 
    AdaptiveDiagnosticState, 
    DiagnosticResult, 
    DiagnosticSkillScore 
} from '../types/diagnostic';
import { LearningSignalService } from './LearningSignalService';

export const ENGLISH_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
export const JAPANESE_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

export const ENGLISH_SKILLS: MasterySkill[] = ['grammar', 'vocabulary', 'reading', 'listening'];
export const JAPANESE_SKILLS: MasterySkill[] = ['kanji', 'grammar', 'vocabulary', 'reading', 'listening'];

export const DIFFICULTY_LADDER: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];

export const MODE_MAX_QUESTIONS: Record<DiagnosticMode, number> = {
    quick: 6,
    standard: 12,
    deep: 20
};

export const AdaptiveQuestionEngine = {
    /**
     * Get valid level ladder for language
     */
    getLevelsForLanguage(language: SupportedLanguage): string[] {
        return language === 'ja' ? JAPANESE_LEVELS : ENGLISH_LEVELS;
    },

    /**
     * Get skill rotation order for language
     */
    getSkillsForLanguage(language: SupportedLanguage): MasterySkill[] {
        return language === 'ja' ? JAPANESE_SKILLS : ENGLISH_SKILLS;
    },

    /**
     * Clamp level jump to maximum of 1 step up or down
     */
    getNextLevel(currentLevel: string, direction: 'up' | 'down', language: SupportedLanguage): string {
        const levels = this.getLevelsForLanguage(language);
        const idx = levels.indexOf(currentLevel);
        if (idx === -1) return levels[0];

        if (direction === 'up') {
            return idx + 1 < levels.length ? levels[idx + 1] : levels[levels.length - 1];
        } else {
            return idx - 1 >= 0 ? levels[idx - 1] : levels[0];
        }
    },

    /**
     * Initialize an adaptive diagnostic session
     */
    initializeSession(
        userId: string,
        language: SupportedLanguage,
        mode: DiagnosticMode,
        claimedLevel: string,
        bank: DiagnosticQuestion[]
    ): AdaptiveDiagnosticState {
        const levels = this.getLevelsForLanguage(language);
        const skills = this.getSkillsForLanguage(language);

        let startLevel = claimedLevel;
        if (!levels.includes(startLevel)) {
            startLevel = language === 'ja' ? 'N4' : 'B1';
        }

        const startDifficulty: 'easy' | 'medium' | 'hard' = (startLevel === 'A1' || startLevel === 'N5') ? 'easy' : 'medium';
        const startSkill = skills[0];

        const initialQuestion = this.selectNextQuestion(
            language,
            startLevel,
            startDifficulty,
            startSkill,
            [],
            bank
        );

        const initialVisited = initialQuestion ? [initialQuestion.id] : [];

        return {
            userId,
            language,
            mode,
            claimedLevel,
            currentLevel: startLevel,
            currentDifficulty: startDifficulty,
            currentSkillFocus: startSkill,
            consecutiveCorrect: 0,
            consecutiveIncorrect: 0,
            answeredCount: 0,
            maxQuestions: MODE_MAX_QUESTIONS[mode] || 10,
            currentQuestionId: initialQuestion ? initialQuestion.id : null,
            visitedQuestionIds: initialVisited,
            answers: [],
            isCompleted: initialQuestion === null,
            lastUpdated: new Date().toISOString()
        };
    },

    /**
     * Select next candidate question using progressive fallback relaxation
     */
    selectNextQuestion(
        language: SupportedLanguage,
        targetLevel: string,
        targetDifficulty: 'easy' | 'medium' | 'hard',
        targetSkill: MasterySkill,
        visitedIds: string[],
        bank: DiagnosticQuestion[]
    ): DiagnosticQuestion | null {
        const available = bank.filter(q => q.language === language && !visitedIds.includes(q.id));
        if (available.length === 0) return null;

        // 1. Exact match: level + skill + difficulty
        const exact = available.find(q => q.level === targetLevel && q.skill === targetSkill && q.difficulty === targetDifficulty);
        if (exact) return exact;

        // 2. Match: level + skill (any difficulty)
        const matchLevelSkill = available.find(q => q.level === targetLevel && q.skill === targetSkill);
        if (matchLevelSkill) return matchLevelSkill;

        // 3. Match: level + difficulty (any skill)
        const matchLevelDiff = available.find(q => q.level === targetLevel && q.difficulty === targetDifficulty);
        if (matchLevelDiff) return matchLevelDiff;

        // 4. Match: targetLevel (any skill, any difficulty)
        const matchLevel = available.find(q => q.level === targetLevel);
        if (matchLevel) return matchLevel;

        // 5. Match: targetSkill (any level)
        const matchSkill = available.find(q => q.skill === targetSkill);
        if (matchSkill) return matchSkill;

        // 6. Any available question for this language
        return available[0] || null;
    },

    /**
     * Process an answer in the adaptive session and compute next adaptive step
     */
    processAnswer(
        state: AdaptiveDiagnosticState,
        questionId: string,
        selectedOptionIndex: number,
        bank: DiagnosticQuestion[]
    ): AdaptiveDiagnosticState {
        const question = bank.find(q => q.id === questionId);
        if (!question) {
            return state;
        }

        const isCorrect = selectedOptionIndex === question.correctAnswerIndex;
        const answerRecord = {
            questionId,
            selectedOptionIndex,
            isCorrect,
            level: question.level,
            skill: question.skill,
            difficulty: question.difficulty
        };

        const updatedAnswers = [...state.answers, answerRecord];
        const answeredCount = updatedAnswers.length;

        let consecutiveCorrect = isCorrect ? state.consecutiveCorrect + 1 : 0;
        let consecutiveIncorrect = !isCorrect ? state.consecutiveIncorrect + 1 : 0;

        let nextLevel = state.currentLevel;
        let nextDifficulty = state.currentDifficulty;

        // Difficulty & Level Adaptive Step Transitions
        if (consecutiveCorrect >= 2) {
            if (nextDifficulty === 'easy') {
                nextDifficulty = 'medium';
            } else if (nextDifficulty === 'medium') {
                nextDifficulty = 'hard';
            } else if (nextDifficulty === 'hard') {
                // Advance level by 1 and reset difficulty
                nextLevel = this.getNextLevel(state.currentLevel, 'up', state.language);
                nextDifficulty = 'medium';
            }
            consecutiveCorrect = 0;
        } else if (consecutiveIncorrect >= 2) {
            if (nextDifficulty === 'hard') {
                nextDifficulty = 'medium';
            } else if (nextDifficulty === 'medium') {
                nextDifficulty = 'easy';
            } else if (nextDifficulty === 'easy') {
                // Drop level by 1 and reset difficulty
                nextLevel = this.getNextLevel(state.currentLevel, 'down', state.language);
                nextDifficulty = 'medium';
            }
            consecutiveIncorrect = 0;
        }

        // Skill rotation
        const skills = this.getSkillsForLanguage(state.language);
        const currentSkillIdx = skills.indexOf(state.currentSkillFocus);
        const nextSkillFocus = skills[(currentSkillIdx + 1) % skills.length];

        // Check if session reached max questions
        const isCompleted = answeredCount >= state.maxQuestions;

        let nextQuestion: DiagnosticQuestion | null = null;
        let visitedQuestionIds = [...state.visitedQuestionIds];

        if (!isCompleted) {
            nextQuestion = this.selectNextQuestion(
                state.language,
                nextLevel,
                nextDifficulty,
                nextSkillFocus,
                visitedQuestionIds,
                bank
            );

            if (nextQuestion) {
                visitedQuestionIds.push(nextQuestion.id);
            }
        }

        return {
            ...state,
            currentLevel: nextLevel,
            currentDifficulty: nextDifficulty,
            currentSkillFocus: nextSkillFocus,
            consecutiveCorrect,
            consecutiveIncorrect,
            answeredCount,
            currentQuestionId: nextQuestion ? nextQuestion.id : null,
            visitedQuestionIds,
            answers: updatedAnswers,
            isCompleted: isCompleted || nextQuestion === null,
            lastUpdated: new Date().toISOString()
        };
    },

    /**
     * Compute full diagnostic evaluation from adaptive answers
     */
    evaluateAdaptiveSession(
        state: AdaptiveDiagnosticState,
        _bank: DiagnosticQuestion[]
    ): DiagnosticResult {
        const isJa = state.language === 'ja';
        const levels = this.getLevelsForLanguage(state.language);
        const skills = this.getSkillsForLanguage(state.language);

        // Define essential skills based on target goal / settings
        // Default to conversation or standard if not specified
        const goal = state.claimedLevel.includes('IELTS') ? 'IELTS' : 'Conversation';
        
        let essentialSkills: MasterySkill[] = [];
        if (isJa) {
            essentialSkills = ['kanji', 'grammar', 'vocabulary', 'reading', 'listening'];
        } else {
            if (goal === 'IELTS') {
                essentialSkills = ['reading', 'listening', 'vocabulary', 'grammar'];
            } else {
                essentialSkills = ['listening', 'vocabulary', 'grammar'];
            }
        }

        // Group answers by skill to build detailed placement evidence
        const skillAnswers: Record<string, typeof state.answers> = {};
        for (const sk of skills) {
            skillAnswers[sk] = [];
        }
        for (const ans of state.answers) {
            if (skillAnswers[ans.skill]) {
                skillAnswers[ans.skill].push(ans);
            }
        }

        const evaluatedSkills: Partial<Record<MasterySkill, DiagnosticSkillScore>> = {};
        const strengths: string[] = [];
        const weaknesses: string[] = [];

        for (const sk of skills) {
            const answers = skillAnswers[sk] || [];
            const totalQuestions = answers.length;
            const correctCount = answers.filter(a => a.isCorrect).length;
            const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

            // Group by level within skill to construct levelEvidence
            const levelMap: Record<string, { attempts: number; correct: number }> = {};
            for (const lvl of levels) {
                levelMap[lvl] = { attempts: 0, correct: 0 };
            }
            for (const ans of answers) {
                if (levelMap[ans.level]) {
                    levelMap[ans.level].attempts++;
                    if (ans.isCorrect) {
                        levelMap[ans.level].correct++;
                    }
                }
            }

            const levelEvidence = levels.map(lvl => {
                const item = levelMap[lvl];
                return {
                    level: lvl,
                    attempts: item.attempts,
                    correct: item.correct,
                    confidence: Math.min(100, item.attempts * 40)
                };
            });

            // Estimate skill level: find highest level with at least 50% accuracy
            let estimatedLevel = levels[0];
            for (let i = levels.length - 1; i >= 0; i--) {
                const lvl = levels[i];
                const item = levelMap[lvl];
                if (item.attempts > 0 && (item.correct / item.attempts) >= 0.5) {
                    estimatedLevel = lvl;
                    break;
                }
            }

            // Determine skill status & confidence
            let status: 'strong' | 'adequate' | 'weak' | 'insufficient' = 'adequate';
            let confidence = Math.min(100, totalQuestions * 25);
            let reason = '';

            if (totalQuestions < 2) {
                status = 'insufficient';
                confidence = 30;
                reason = isJa 
                    ? "Baholash uchun ma'lumotlar yetarli emas (kamida 2 ta savol kutilgan)." 
                    : "Insufficient evidence to evaluate skill (minimum 2 questions expected).";
            } else if (accuracy >= 70) {
                status = 'strong';
                reason = isJa ? "Ushbu ko'nikma bo'yicha kuchli bilim namoyon etildi." : "Demonstrated high competence in this skill area.";
                strengths.push(`${sk.toUpperCase()} (${accuracy}%)`);
            } else if (accuracy >= 50) {
                status = 'adequate';
                reason = isJa ? "Ko'nikma darajasi yetarli darajada." : "Demonstrated adequate knowledge.";
            } else {
                status = 'weak';
                reason = isJa ? "Ko'nikma ustida ko'proq ishlash tavsiya etiladi." : "Identifies as a potential focus area for study.";
                weaknesses.push(`${sk.toUpperCase()} (${accuracy}%)`);

                // Emit learning signal for weak skill
                LearningSignalService.recordSignal({
                    id: `diag-sig-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                    userId: state.userId,
                    language: state.language,
                    lessonId: `diag-${sk}`,
                    type: 'incorrect_answer',
                    timestamp: new Date().toISOString(),
                    stepId: `step-diag-${sk}`,
                    questionId: `diag-${sk}-evaluation`,
                    prompt: `Adaptive diagnostic evaluation for ${sk}`,
                    userAnswer: `${accuracy}%`,
                    expectedAnswer: '>=50%',
                    explanation: `Skill accuracy below benchmark: ${accuracy}%`,
                    attemptCount: 1
                });
            }

            evaluatedSkills[sk] = {
                skill: sk,
                score: accuracy,
                confidence,
                estimatedLevel,
                totalQuestions,
                correctCount,
                status,
                levelEvidence,
                reason
            };
        }

        // Calculate overall level based on skill average of adequate/strong skills
        let overallLevelIndex = 0;
        let validSkillCount = 0;
        let sumIndices = 0;

        for (const sk of skills) {
            const evalSk = evaluatedSkills[sk];
            if (evalSk && (evalSk.status === 'adequate' || evalSk.status === 'strong')) {
                const idx = levels.indexOf(evalSk.estimatedLevel);
                if (idx !== -1) {
                    sumIndices += idx;
                    validSkillCount++;
                }
            }
        }

        if (validSkillCount > 0) {
            overallLevelIndex = Math.round(sumIndices / validSkillCount);
        } else {
            // Fallback to average of all skills with answers
            let fallbackSum = 0;
            let fallbackCount = 0;
            for (const sk of skills) {
                const evalSk = evaluatedSkills[sk];
                if (evalSk && evalSk.totalQuestions > 0) {
                    const idx = levels.indexOf(evalSk.estimatedLevel);
                    if (idx !== -1) {
                        fallbackSum += idx;
                        fallbackCount++;
                    }
                }
            }
            if (fallbackCount > 0) {
                overallLevelIndex = Math.round(fallbackSum / fallbackCount);
            }
        }
        let diagnosticLevel = levels[overallLevelIndex] || levels[0];
        let recommendedStartLevel = diagnosticLevel;

        // Apply Weak Skill Guard for essential skills
        let weakSkillReason = '';
        for (const sk of essentialSkills) {
            const evalSk = evaluatedSkills[sk];
            if (evalSk && evalSk.status === 'weak') {
                const weakIdx = levels.indexOf(evalSk.estimatedLevel);
                const overallIdx = levels.indexOf(diagnosticLevel);
                if (weakIdx !== -1 && overallIdx !== -1 && weakIdx < overallIdx) {
                    // Cap recommended start level to 1 step below overall level to build a solid foundation
                    const safeIdx = Math.max(0, overallIdx - 1);
                    recommendedStartLevel = levels[safeIdx];
                    weakSkillReason = isJa 
                        ? `Tavsiya: ${sk.toUpperCase()} ko'nikmasi (${evalSk.estimatedLevel}) darajasi pastroq bo'lgani sababli, o'quv yo'li ${recommendedStartLevel} bosqichidan boshlanadi.`
                        : `Note: Your recommended starting point was placed at ${recommendedStartLevel} because your ${sk.toUpperCase()} skill is currently at ${evalSk.estimatedLevel}.`;
                    break;
                }
            }
        }

        // Generate recommendedFirstLessonId based on recommendedStartLevel
        let firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';
        if (isJa) {
            if (recommendedStartLevel === 'N1' || recommendedStartLevel === 'N2') firstLessonId = 'ja-n3-u1-l1'; // Cap to sample content availability
            else if (recommendedStartLevel === 'N3') firstLessonId = 'ja-n3-u1-l1';
            else if (recommendedStartLevel === 'N4') firstLessonId = 'ja-n4-u1-l1';
            else firstLessonId = 'ja-n5-u1-l1';
        } else {
            if (recommendedStartLevel === 'C1' || recommendedStartLevel === 'C2') firstLessonId = 'en-c1-u1-l1';
            else if (recommendedStartLevel === 'B2') firstLessonId = 'en-b2-u1-l1';
            else if (recommendedStartLevel === 'B1') firstLessonId = 'en-b1-u1-l1';
            else if (recommendedStartLevel === 'A2') firstLessonId = 'en-a2-u1-l1';
            else firstLessonId = 'en-a1-u1-l1';
        }

        // Formulate clear explanation
        const detailsUz = `Sizning jami to'g'ri javoblaringiz ${overallLevelIndex + 1}-bosqich (${diagnosticLevel}) atrofida ekanligini ko'rsatmoqda. ${weakSkillReason}`;
        const detailsEn = `Your overall performance suggests you are around ${diagnosticLevel}. ${weakSkillReason}`;
        const explanation = isUz ? detailsUz : detailsEn;

        const totalAnswersCount = state.answers.length;
        const totalCorrectAnswers = state.answers.filter(a => a.isCorrect).length;
        const overallScore = totalAnswersCount > 0 ? Math.round((totalCorrectAnswers / totalAnswersCount) * 100) : 0;
        const overallConfidence = Math.min(95, Math.max(50, totalAnswersCount * 8));

        return {
            id: `diag-res-${Date.now()}`,
            userId: state.userId,
            language: state.language,
            mode: state.mode,
            claimedLevel: state.claimedLevel,
            diagnosticLevel,
            recommendedStartLevel,
            overallConfidence,
            overallScore,
            skills: evaluatedSkills,
            strengths,
            weaknesses,
            recommendedFirstLessonId: firstLessonId,
            explanation,
            completedAt: new Date().toISOString()
        };
    }
};

const isUz = true; // Helper for explanation localization
