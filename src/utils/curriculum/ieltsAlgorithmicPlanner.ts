import { IeltsStudyPlanDay } from '../ai/aiIelts';
import {
    getVocabByBand,
    getGrammarByBand,
    IELTS_TOPIC_COLLOCATIONS,
    IeltsVocabItem,
    IeltsGrammarItem
} from './ieltsVocabularyBank';

// ─── Phase structure ──────────────────────────────────────────────────────────
interface Phase {
    name: string;
    startDay: number;
    endDay: number;
    skills: Array<'Writing' | 'Speaking' | 'Reading' | 'Listening' | 'Vocabulary'>;
    emphasis: string;
}

function buildPhases(durationDays: number, weakSkill: string): Phase[] {
    const p1End = Math.floor(durationDays * 0.35);
    const p2End = Math.floor(durationDays * 0.70);
    const p3End = durationDays;

    const weakAsSkill = (['Writing', 'Speaking', 'Reading', 'Listening'].includes(weakSkill)
        ? weakSkill
        : 'Writing') as 'Writing' | 'Speaking' | 'Reading' | 'Listening';

    return [
        {
            name: "Foundation & Vocabulary Building",
            startDay: 1,
            endDay: p1End,
            skills: ['Vocabulary', 'Writing', 'Listening', 'Vocabulary'],
            emphasis: "Poydevor lug'at va grammatika asosi"
        },
        {
            name: "Skill Development & Practice",
            startDay: p1End + 1,
            endDay: p2End,
            skills: ['Reading', 'Speaking', weakAsSkill, 'Vocabulary'],
            emphasis: "Ko'nikmalarni rivojlantirish va amaliyot"
        },
        {
            name: "Exam Simulation & Refinement",
            startDay: p2End + 1,
            endDay: p3End,
            skills: [weakAsSkill, 'Writing', 'Reading', 'Vocabulary'],
            emphasis: "Mock test, tahlil va zaif tomonlarni tuzatish"
        }
    ];
}

function getPhaseForDay(day: number, phases: Phase[]): Phase {
    return phases.find(p => day >= p.startDay && day <= p.endDay) || phases[phases.length - 1];
}

// ─── Task templates per skill & phase ─────────────────────────────────────────
function getSkillTasks(
    skill: 'Writing' | 'Speaking' | 'Reading' | 'Listening' | 'Vocabulary',
    phase: number,
    vocab: IeltsVocabItem[],
    grammar: IeltsGrammarItem | undefined,
    _weakSkill: string,
    isZeroLevel: boolean,
    targetBand: number
): string[] {
    const vocabStr = vocab.length > 0
        ? `"${vocab.map(v => v.word).join('", "')}"`
        : 'mavzuга oid so\'zlar';
    const grammarStr = grammar ? `"${grammar.rule}"` : 'grammatika takror';

    if (isZeroLevel) {
        return [
            `📖 Lug'at yodlash (A1-A2 daraja): ${vocabStr} — ma'nosi va talaffuzini o'rganing`,
            `✏️ Grammatika: ${grammarStr} — ${grammar ? grammar.example : 'asosiy gaplar qurilishi'}`,
            `👂 10 daqiqa sodda inglizcha audio (A1 daraja) tinglash va asosiy so'zlarni yozib olish`,
            `🗣️ Yodlangan so'zlardan foydalanib 2-3 ta sodda gap tuzing va ovozga yozib ko'ring`
        ];
    }

    const writingTasks = {
        1: [
            `📖 Lug'at yodlash: ${vocabStr} — ma'no, talaffuz va misol gaplari bilan`,
            `✏️ Task 2 Essay: Kirish (Introduction) va fikr (Body Paragraph 1) yozish, ushbu so'zlardan kamida 3 tasini ishlating`,
            `📝 Grammatika mashqi: ${grammarStr} — 3 ta yangi gap tuzing`,
            `🔄 Kechagi essayни qayta ko'rib, discourse markers (Furthermore, Nevertheless, Consequently) qo'shing`
        ],
        2: [
            `📖 Lug'at yodlash: ${vocabStr} — collocations bilan birga o'rganing`,
            `✏️ Task 2: To'liq essay yozing (250+ so'z, taymer bilan 40 daqiqa)`,
            `📝 Grammatika: ${grammarStr} — essayda kamida 1 marta qo'llang`,
            `🔍 Task 1 grafik tavsifi: overview + 2 ta key feature yozing`
        ],
        3: [
            `📖 Lug'at: ${vocabStr} — band ${targetBand} uchun Academic synonyms toping`,
            `✏️ Band ${targetBand} darajasidagi model essay o'qib, tuzilishni tahlil qiling`,
            `📝 Grammatika: ${grammarStr} — Task 1 yoki Task 2 da amaliyot`,
            `⏱️ Timed Essay: 40 daqiqada Task 2 yozing va AI Coach bilan tekshiring`
        ]
    };
    const speakingTasks = {
        1: [
            `📖 Lug'at yodlash (Speaking uchun): ${vocabStr} — ovoz bilan 5 marta takrorlang`,
            `🗣️ Part 1: Kundalik 5 savolga (Work, Hometown, Hobbies) 2-3 gap bilan javob bering`,
            `✏️ Grammatika: ${grammarStr} — ushbu qurilmani so'zlashuv gaplarida qo'llang`,
            `🎤 Javoblarni yozib oling, so'ng yuqoridagi so'zlarni qanchalik ishlatganingizni tekshiring`
        ],
        2: [
            `📖 Lug'at: ${vocabStr} — Part 2 Cue Card mavzusiga bog'lang`,
            `🗣️ Part 2: 1 daqiqa tayyorlanib, 2 daqiqa gapiring (taymer biling), ushbu so'zlardan foydalaning`,
            `✏️ Grammatika: ${grammarStr} — Shu qoidadan Part 2 nutqida foydalaning`,
            `👂 Band 8 model answer tinglang va iboralari (fillers, connectors) ni yozib oling`
        ],
        3: [
            `📖 Lug'at (Band ${targetBand} Speaking): ${vocabStr} — idiom va collocation bilan birgalikda o'rganing`,
            `🗣️ Part 3 Abstract Discussion: 3 ta murakkab savolga batafsil javob bering`,
            `✏️ Grammatika: ${grammarStr} — murakkab argumentlarda qo'llang`,
            `🎤 AI Coach bilan to'liq 3 qismli mock speaking sessiyasi o'tkazing`
        ]
    };
    const readingTasks = {
        1: [
            `📖 Lug'at yodlash (Reading uchun): ${vocabStr} — ushbu so'zlarni matnda uchratib kontekstni tushunish mashqi`,
            `📰 1 ta qisqa (300-400 so'z) matnni o'qing: True/False/Not Given savollarini ishlang`,
            `✏️ Grammatika: ${grammarStr} — matnda ushbu qurilmani toping va misol oling`,
            `🔎 Noma'lum so'zlarni kontekst orqali taxmin qiling, so'ngra lug'atda tekshiring`
        ],
        2: [
            `📖 Lug'at: ${vocabStr} — Academic matnlarda qanday ishlatilishini ko'ring`,
            `📰 IELTS Academic Reading passage (650-700 so'z): barcha savol turlarini ishlang`,
            `✏️ Grammatika: ${grammarStr} — passagedagi ushbu qurilmani toping`,
            `⏱️ Taymer bilian: 20 daqiqada 1 to'liq passage ishlash mashqi`
        ],
        3: [
            `📖 Lug'at (Academic Band ${targetBand}): ${vocabStr} — passivе boshdan faol vocabulary ga o'tkazing`,
            `📰 IELTS Mock Reading test — 3 passage, 40 savol, 60 daqiqa taymer bilan`,
            `✏️ Grammatika: ${grammarStr} — passagdagi murakkab gaplar tahlili`,
            `📊 Xatolarni tahlil qiling: qaysi savol turi ko'proq xato — diqqat qarating`
        ]
    };
    const listeningTasks = {
        1: [
            `📖 Lug'at yodlash (Listening uchun): ${vocabStr} — tinglab, qanday talaffuz qilinishini o'rganing`,
            `👂 IELTS Section 1-2 (kundalik muloqot) tinglang va bo'sh joylarni to'ldiring`,
            `✏️ Grammatika: ${grammarStr} — audioda ushbu qurilmani eshitganingizda belgilang`,
            `🎤 Dictation mashqi: audio gaplarini bitta-bitta yozib oling`
        ],
        2: [
            `📖 Lug'at: ${vocabStr} — audioda uchraydigan akademik so'zlar sifatida o'rganing`,
            `👂 IELTS Section 3-4 (akademik muhokama, monolog) tinglang`,
            `✏️ Grammatika: ${grammarStr} — tinglatmadagi gaplarda ushbu qurilmani toping`,
            `🔄 Shadowing: audio gaplarni pauza qilib, bir xil intonatsiya bilan qaytaring`
        ],
        3: [
            `📖 Lug'at (Band ${targetBand} Listening): ${vocabStr} — academic synonyms bilan birgalikda`,
            `👂 IELTS Mock Listening test — 4 Section, 40 savol, 30 daqiqa (+ 10 daqiqa ko'chirish)`,
            `✏️ Grammatika: ${grammarStr} — audioda eshitilgan murakkab gaplarni tahlil qiling`,
            `📊 Xatolar tahlili: qaysi section / savol turi qiyin — maxsus mashq bajaring`
        ]
    };
    const vocabTasks = {
        1: [
            `📖 Asosiy Lug'at Bloki: ${vocabStr} — har biri uchun: o'qing, ma'nosini yodlang, misol gapni yozing`,
            `✏️ Grammatika: ${grammarStr} — yodlagan so'zlar bilan 3 ta gap tuzing, shu qoidani qo'llab`,
            `🃏 Flashcard yarating: har bir so'z uchun karta (old: inglizcha so'z, orqa: ma'no + misol)`,
            `🔄 Spaced Repetition: bugungi so'zlarni kechqurun qaytadan tekshiring`
        ],
        2: [
            `📖 Lug'at va Collocations: ${vocabStr} — har biri bilan 1 ta collocation toping (e.g., 'dramatic increase')`,
            `✏️ Grammatika: ${grammarStr} — ushbu qurilmadan foydalanib IELTS style gap yozing`,
            `📝 Synonyms toping: har bir so'z uchun 1-2 ta sinonim va ularning farqini tushuning`,
            `🎤 So'zlarni ovoz bilan 5 marta takrorlang va gapda qo'llang`
        ],
        3: [
            `📖 Advanced Vocabulary: ${vocabStr} — band ${targetBand} uchun ushbu so'zlarni qo'llanilish kontekstida o'rganing`,
            `✏️ Grammatika: ${grammarStr} — band ${targetBand} standard gap yozing`,
            `📝 Word Forms (noun/verb/adjective/adverb): har bir so'zning barcha shakllarini toping`,
            `✍️ Paragraph yozing: yodlagan so'zlardan kamida 4 tasini ishlatib, bir mavzuda 80-100 so'zlik paragraf`
        ]
    };

    const phaseIdx = Math.min(phase - 1, 2);
    if (skill === 'Writing') return writingTasks[phaseIdx + 1 as 1 | 2 | 3];
    if (skill === 'Speaking') return speakingTasks[phaseIdx + 1 as 1 | 2 | 3];
    if (skill === 'Reading') return readingTasks[phaseIdx + 1 as 1 | 2 | 3];
    if (skill === 'Listening') return listeningTasks[phaseIdx + 1 as 1 | 2 | 3];
    return vocabTasks[phaseIdx + 1 as 1 | 2 | 3];
}

// ─── MAIN FUNCTION ─────────────────────────────────────────────────────────────
export const generateAlgorithmicIeltsPlan = (
    currentBand: number,
    targetBand: number,
    durationDays: number,
    weakSkill: string
): IeltsStudyPlanDay[] => {
    const isZeroLevel = currentBand === 0;
    const isHighTarget = targetBand >= 7.5;

    // Get vocab + grammar pool based on band
    const vocabPool = getVocabByBand(currentBand, targetBand);
    const grammarPool = getGrammarByBand(currentBand, targetBand);

    // How many vocab items per day (3-5)
    const vocabPerDay = isHighTarget ? 5 : 4;

    // Phase structure
    const phases = buildPhases(durationDays, weakSkill);

    // Topic collocations rotation for advanced
    const topicKeys = Object.keys(IELTS_TOPIC_COLLOCATIONS);

    const dailyPlan: IeltsStudyPlanDay[] = [];

    for (let day = 1; day <= durationDays; day++) {
        const phase = getPhaseForDay(day, phases);
        const phaseNumber = phases.indexOf(phase) + 1;

        // Select skill for today
        let skill: 'Writing' | 'Speaking' | 'Reading' | 'Listening' | 'Vocabulary';
        if (day === 7 || day === 14 || day === 21 || day % 14 === 0) {
            // Mock test days
            skill = weakSkill as any || 'Reading';
        } else {
            const phaseSkills = phase.skills;
            skill = phaseSkills[(day - 1) % phaseSkills.length];
        }

        // Select vocab slice (unique per day, cycling)
        const vStart = ((day - 1) * vocabPerDay) % vocabPool.length;
        const rawSlice = vocabPool.slice(vStart, vStart + vocabPerDay);
        // Wrap around if near end
        const dayVocab: IeltsVocabItem[] = rawSlice.length < vocabPerDay
            ? [...rawSlice, ...vocabPool.slice(0, vocabPerDay - rawSlice.length)]
            : rawSlice;

        // Select grammar rule
        const gIndex = (day - 1) % grammarPool.length;
        const dayGrammar: IeltsGrammarItem = grammarPool[gIndex];

        // Build tasks
        const isMockDay = day === 7 || day === 14 || day === 21 || (day > 21 && day % 14 === 0);
        let tasks: string[];
        let dayTitle: string;

        if (isMockDay) {
            dayTitle = `Kun ${day}: 🎯 Haftalik Mock Test va Tahlil (${phase.name})`;
            const weakSkillLabel = weakSkill || 'Reading';
            tasks = [
                `📖 Lug'at takrorlash: ${dayVocab.slice(0, 3).map(v => v.word).join(', ')} — hafta davomida o'rganilganlarni qayta tekshiring`,
                `✏️ Grammatika: ${dayGrammar.rule} — ushbu qoidadan 2 ta murakkab gap tuzing`,
                `⏱️ ${weakSkillLabel} Mock Test: taymer bilan to'liq section ishlang`,
                `📊 Xatolarni tahlil qiling: noto'g'ri javoblar sababini tushunib, izoh yozing`,
                `🔄 AI Coach orqali Writing yoki Speaking ni tekshiring va ball oling`
            ];
            skill = weakSkill as any || 'Reading';
        } else {
            dayTitle = `Kun ${day}: ${skill} — ${phase.name}`;
            tasks = getSkillTasks(skill, phaseNumber, dayVocab, dayGrammar, weakSkill, isZeroLevel, targetBand);
        }

        // Add collocation bonus for advanced learners (band 6.5+)
        if (targetBand >= 6.5 && !isMockDay) {
            const topicKey = topicKeys[(day - 1) % topicKeys.length];
            const collocations = IELTS_TOPIC_COLLOCATIONS[topicKey];
            if (collocations) {
                const collSlice = collocations.slice(((day - 1) % collocations.length), ((day - 1) % collocations.length) + 3);
                tasks.push(`💡 Mavzuга oid collocations (${topicKey}): "${collSlice.join('", "')}" — kontekstda foydalanib ko'ring`);
            }
        }

        dailyPlan.push({
            day,
            title: dayTitle,
            focusSkill: skill,
            tasks,
            pomodoroTargetMinutes: isHighTarget ? 90 : (isZeroLevel ? 45 : 60),
            vocabularyList: dayVocab.map(v => ({
                word: v.word,
                meaning: v.meaning,
                example: v.example
            })),
            grammarNotes: [{
                rule: dayGrammar.rule,
                explanation: dayGrammar.explanation,
                example: dayGrammar.example
            }]
        });
    }

    return dailyPlan;
};
