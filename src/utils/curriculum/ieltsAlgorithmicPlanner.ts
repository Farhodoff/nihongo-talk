import { IeltsStudyPlanDay } from '../ai/aiIelts';

export const generateAlgorithmicIeltsPlan = (
    currentBand: number,
    targetBand: number,
    durationDays: number,
    weakSkill: string
): IeltsStudyPlanDay[] => {
    const isZeroLevel = currentBand === 0;
    const isHighTarget = targetBand >= 7.5;

    const academicVocabList = [
        { word: "crucial", meaning: "hal qiluvchi, juda muhim", example: "It is crucial to practice writing daily." },
        { word: "ubiquitous", meaning: "hamma joyda uchraydigan", example: "Digital devices have become ubiquitous in modern education." },
        { word: "detrimental", meaning: "zararli, salbiy ta'sir ko'rsatuvchi", example: "Excessive stress has a detrimental impact on performance." },
        { word: "substantive", meaning: "muhim, jiddiy, asosli", example: "The report provided substantive evidence for the claim." },
        { word: "paramount", meaning: "eng muhim, ustuvor", example: "Safety is of paramount importance during the exam." },
        { word: "imperative", meaning: "juda zarur, kechiktirib bo'lmaydigan", example: "It is imperative to manage time wisely in Reading." },
        { word: "advocate", meaning: "qo'llab-quvvatlamoq, tarafdor bo'lmoq", example: "Many experts advocate for early language learning." },
        { word: "mitigate", meaning: "yumshatmoq, ozaytirmoq", example: "Effective planning can mitigate exam anxiety." },
        { word: "profound", meaning: "chuqur, kuchli ta'sirga ega", example: "Technology has had a profound effect on global communication." },
        { word: "exacerbate", meaning: "og'irlashtirmoq, yomonlashtirmoq", example: "Lack of sleep can exacerbate stress levels." }
    ];

    const beginnerVocabList = [
        { word: "always", meaning: "har doim", example: "I always study in the morning." },
        { word: "frequently", meaning: "tez-tez, tez fursatda", example: "She frequently visits the library." },
        { word: "improve", meaning: "rivojlantirmoq, yaxshilamoq", example: "I want to improve my speaking skills." },
        { word: "essential", meaning: "zaruriy, juda kerakli", example: "Vocabulary is essential for IELTS." },
        { word: "understand", meaning: "tushunmoq", example: "Do you understand this grammar rule?" },
        { word: "practice", meaning: "mashq qilmoq", example: "Practice makes perfect." }
    ];

    const grammarRules = [
        { rule: "Subject-Verb Agreement", explanation: "Ega va kesimning birlik/ko'plikda mos kelishi.", example: "The list of items is ready." },
        { rule: "Complex Sentences (Although/While)", explanation: "Zidlovchi va bog'lovchi ergashgan gaplar.", example: "Although it was difficult, he scored Band 7.5." },
        { rule: "Passive Voice in Task 1", explanation: "Jarayon va ilmiy tasvirlarda majhul nisbat.", example: "The data is processed in three main stages." },
        { rule: "Conditionals (Type 2 & 3)", explanation: "Shart ergash gaplar va taxminiy ssenariylar.", example: "If governments invested more in green energy, pollution would decrease." },
        { rule: "Relative Clauses (Which/Who/Where)", explanation: "Ergashgan aniqlovchi gaplar.", example: "Students who practice daily achieve higher scores." }
    ];

    const weeklyTopics = [
        {
            title: isZeroLevel ? "Foundation: Boshlang'ich Grammatika & Top 50 So'z" : "Writing Task 2 Structure & Essay Outline",
            skill: isZeroLevel ? "Vocabulary" as const : "Writing" as const,
            tasks: isZeroLevel
                ? ["Present & Past Simple gap qurilishini o'rganish", "Top 50 ta tayanch so'zni yodlash", "20 daqiqa tinglash mashqi"]
                : ["Task 2 uchun 3 ta essay outline tuzish", "Academic Collocations o'rganish", "Insho kirish qismini yozish mashqi"]
        },
        {
            title: isZeroLevel ? "Foundation: Eshitib Tushunish va Talaffuz" : "Speaking Part 1 & Part 2 Cue Cards",
            skill: isZeroLevel ? "Listening" as const : "Speaking" as const,
            tasks: isZeroLevel
                ? ["Sodda inglizcha dialogni tinglab tushunish", "A1 so'zlar bo'yicha flashcard mashqi", "AI Coach bilan 10 min suhbat"]
                : ["5 ta Part 1 savoliga javob berish", "1 ta Part 2 Cue Card bo'yicha gapirish", "Ovozni yozib olib tahlil qilish"]
        },
        {
            title: isZeroLevel ? "Pre-IELTS: Gap Paraphrase Qilish Mashqlari" : "Reading Skimming & Scanning Technique",
            skill: isZeroLevel ? "Writing" as const : "Reading" as const,
            tasks: isZeroLevel
                ? ["Sodda gaplarni 3 xil usulda qayta yozish (Paraphrase)", "Top 30 ta sinonim o'rganish"]
                : ["True/False/Not Given savollariga yondashuv", "1 ta Reading matnini 20 daqiqada ishlash", "Noma'lum so'zlarni kontekstdan topish"]
        },
        {
            title: isZeroLevel ? "Pre-IELTS: Matnlarni O'qish va So'z Boyligi" : "Listening Note-Taking & Multiple Choice",
            skill: isZeroLevel ? "Reading" as const : "Listening" as const,
            tasks: isZeroLevel
                ? ["Qisqa inglizcha hikoyalarni o'qib tushunish", "Yangi so'zlarni daftarga qayd qilish"]
                : ["Section 3 & 4 akademik dialogni tinglash", "Multiple choice savollarida chalg'ituvchi kalit so'zlarni ajratish"]
        },
        {
            title: isZeroLevel ? "Intro IELTS: Sodda Insho Tuzilishi" : "Writing Task 1 Process Diagram & Graphs",
            skill: "Writing" as const,
            tasks: isZeroLevel
                ? ["Idea & Supporting sentences shakllantirish", "Oddiy insho strukturasi bilan tanishish"]
                : ["Overview qismini yozish qoidalari", "Data comparison iboralarini ishlatib Task 1 yozish"]
        },
        {
            title: isZeroLevel ? "Intro IELTS: Nutqni Rivojlantirish" : "Speaking Part 3 Abstract Discussion",
            skill: "Speaking" as const,
            tasks: isZeroLevel
                ? ["Erkin mavzuda 2 daqiqa gapirish", "AI Coach bilan muloqot mashqi"]
                : ["Part 3 bahsli savollariga chuqur javob berish", "Opinion & Hypothesis iboralarini qo'llash"]
        },
        {
            title: "Haftalik Mock Test & Zaif Tomlarni Tahlil Qilish",
            skill: weakSkill as any || "Reading",
            tasks: [
                "1 ta to'liq bo'lim mock testini taymer bilan ishlash",
                "Yo'l qo'yilgan xatolarni chuqur tahlil qilish",
                "AI Coach orqali zaif nuqtalarni takrorlash"
            ]
        }
    ];

    const dailyPlan: IeltsStudyPlanDay[] = [];

    for (let day = 1; day <= durationDays; day++) {
        const topicIndex = (day - 1) % weeklyTopics.length;
        const topic = weeklyTopics[topicIndex];

        // Pick vocabulary
        const vocabPool = isZeroLevel ? beginnerVocabList : academicVocabList;
        const vStart = ((day - 1) * 2) % vocabPool.length;
        const dayVocab = vocabPool.slice(vStart, vStart + 3);

        // Pick grammar note
        const gIndex = (day - 1) % grammarRules.length;
        const dayGrammar = [grammarRules[gIndex]];

        let focusSkill = topic.skill;
        if (weakSkill && day % 2 === 1 && (weakSkill === 'Writing' || weakSkill === 'Speaking' || weakSkill === 'Reading' || weakSkill === 'Listening')) {
            focusSkill = weakSkill as any;
        }

        dailyPlan.push({
            day,
            title: `Kun ${day}: ${topic.title}`,
            focusSkill,
            tasks: [
                ...topic.tasks,
                `Bugungi maxsus lug'at yodlash: ${dayVocab.map(v => v.word).join(', ')}`
            ],
            pomodoroTargetMinutes: isHighTarget ? 90 : 60,
            vocabularyList: dayVocab,
            grammarNotes: dayGrammar
        });
    }

    return dailyPlan;
};
