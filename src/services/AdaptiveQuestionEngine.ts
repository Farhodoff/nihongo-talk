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
        bank: DiagnosticQuestion[]
    ): DiagnosticResult {
        const isJa = state.language === 'ja';
        const skillStats: Record<string, { total: number; correct: number; levels: string[] }> = {};

        let totalCorrect = 0;

        for (const ans of state.answers) {
            const q = bank.find(item => item.id === ans.questionId);
            const skill = q?.skill || ans.skill;
            const level = q?.level || ans.level;

            if (!skillStats[skill]) {
                skillStats[skill] = { total: 0, correct: 0, levels: [] };
            }

            skillStats[skill].total++;
            if (ans.isCorrect) {
                skillStats[skill].correct++;
                totalCorrect++;
                skillStats[skill].levels.push(level);
            }
        }

        const evaluatedSkills: Partial<Record<MasterySkill, DiagnosticSkillScore>> = {};
        const strengths: string[] = [];
        const weaknesses: string[] = [];

        for (const skillKey of Object.keys(skillStats)) {
            const skill = skillKey as MasterySkill;
            const stat = skillStats[skill];
            const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 50;
            const confidence = Math.min(100, Math.max(50, stat.total * 25));

            let estLevel = isJa ? 'N5' : 'A1';
            if (accuracy >= 80) {
                estLevel = isJa ? 'N3' : 'B2';
            } else if (accuracy >= 60) {
                estLevel = isJa ? 'N4' : 'B1';
            } else if (accuracy >= 40) {
                estLevel = isJa ? 'N5' : 'A2';
            }

            const status = accuracy >= 70 ? 'strength' : accuracy < 60 ? 'weakness' : 'neutral';

            evaluatedSkills[skill] = {
                skill,
                score: accuracy,
                confidence,
                estimatedLevel: estLevel,
                totalQuestions: stat.total,
                correctCount: stat.correct,
                status
            };

            if (status === 'strength') {
                strengths.push(`${skill.toUpperCase()} (${accuracy}%)`);
            } else if (status === 'weakness') {
                weaknesses.push(`${skill.toUpperCase()} (${accuracy}%)`);
                // Emit learning signal for orchestration
                LearningSignalService.recordSignal({
                    id: `diag-sig-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                    userId: state.userId,
                    language: state.language,
                    lessonId: `diag-${skill}`,
                    type: 'incorrect_answer',
                    timestamp: new Date().toISOString(),
                    stepId: `step-diag-${skill}`,
                    questionId: `diag-${skill}-evaluation`,
                    prompt: `Adaptive diagnostic evaluation for ${skill}`,
                    userAnswer: `${accuracy}%`,
                    expectedAnswer: '>=60%',
                    explanation: `Adaptive score below benchmark: ${accuracy}%`,
                    attemptCount: 1
                });
            }
        }

        const overallScore = state.answers.length > 0 ? Math.round((totalCorrect / state.answers.length) * 100) : 50;
        const overallConfidence = Math.min(95, Math.max(50, state.answers.length * 10));

        let recommendedLevel = isJa ? 'N5' : 'A1';
        let firstLessonId = isJa ? 'ja-n5-u1-l1' : 'en-a1-u1-l1';

        if (isJa) {
            if (overallScore >= 80) {
                recommendedLevel = 'N3';
                firstLessonId = 'ja-n3-u1-l1';
            } else if (overallScore >= 55) {
                recommendedLevel = 'N4';
                firstLessonId = 'ja-n4-u1-l1';
            } else {
                recommendedLevel = 'N5';
                firstLessonId = 'ja-n5-u1-l1';
            }
        } else {
            if (overallScore >= 85) {
                recommendedLevel = 'C1';
                firstLessonId = 'en-c1-u1-l1';
            } else if (overallScore >= 70) {
                recommendedLevel = 'B2';
                firstLessonId = 'en-b2-u1-l1';
            } else if (overallScore >= 50) {
                recommendedLevel = 'B1';
                firstLessonId = 'en-b1-u1-l1';
            } else if (overallScore >= 40) {
                recommendedLevel = 'A2';
                firstLessonId = 'en-a2-u1-l1';
            } else {
                recommendedLevel = 'A1';
                firstLessonId = 'en-a1-u1-l1';
            }
        }

        return {
            id: `diag-res-${Date.now()}`,
            userId: state.userId,
            language: state.language,
            mode: state.mode,
            claimedLevel: state.claimedLevel,
            diagnosticLevel: recommendedLevel,
            recommendedStartLevel: recommendedLevel,
            overallConfidence,
            overallScore,
            skills: evaluatedSkills,
            strengths,
            weaknesses,
            recommendedFirstLessonId: firstLessonId,
            completedAt: new Date().toISOString()
        };
    }
};
