export interface IeltsGrammarTopic {
    id: string;
    level: 'A1-A2' | 'B1-B2' | 'C1';
    title: string;
    category: string;
    structure: string;
    uzbekMeaning: string;
    explanation: string;
    ieltsRelevance: string;
    academicExamples: {
        sentence: string;
        translation: string;
        context: 'Task 1' | 'Task 2' | 'Speaking';
    }[];
    commonMistakes: {
        incorrect: string;
        correct: string;
        explanation: string;
    }[];
    quizQuestions: {
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
}

export const IELTS_GRAMMAR_DATABASE: IeltsGrammarTopic[] = [
    // =========================================================================
    // LEVEL A1 - A2: FOUNDATIONS
    // =========================================================================
    {
        id: 'ielts_g_01_present_simple_vs_cont',
        level: 'A1-A2',
        title: 'Present Simple vs. Present Continuous',
        category: 'Tenses',
        structure: 'Present Simple: S + V(s/es) | Present Continuous: S + am/is/are + V-ing',
        uzbekMeaning: 'Doimiy odatlar vs. Ayni paytda sodir bo\'layotgan harakatlar',
        explanation: 'Present Simple umumiy haqiqatlar, qonuniyatlar va odatlar uchun ishlatiladi. Present Continuous esa ayni vaqtda sodir bo\'layotgan yoki vaqtinchalik o\'zgarishlarni ifodalaydi.',
        ieltsRelevance: 'Task 1 da doimiy qonuniyatlar va Task 2 da umumiy jamiyat holatini tasvirlashda asosiy poydevor.',
        academicExamples: [
            {
                sentence: 'The chart illustrates the proportion of students who study abroad.',
                translation: 'Grafik chet elda o\'qiydigan talabalar ulushini ko\'rsatadi.',
                context: 'Task 1'
            },
            {
                sentence: 'Global temperatures are rising at an unprecedented rate.',
                translation: 'Global harorat misli ko\'rilmagan darajada ko\'tarilmoqda.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'The diagram is showing the data.',
                correct: 'The diagram shows / illustrates the data.',
                explanation: 'Grafik tasvirlashi umumiy haqiqat bo\'lgani uchun Present Simple ma\'qul.'
            }
        ],
        quizQuestions: [
            {
                question: 'The given bar chart _______ the energy consumption of five countries in 2020.',
                options: ['illustrates', 'is illustrating', 'has illustrated', 'illustrated'],
                correctAnswer: 'illustrates',
                explanation: 'Diagramma yoki grafik kirish qismida fe\'l doim Present Simple da bo\'ladi (The chart illustrates...).'
            }
        ]
    },
    {
        id: 'ielts_g_02_articles_a_an_the',
        level: 'A1-A2',
        title: 'Definite & Indefinite Articles (A, An, The, Zero Article)',
        category: 'Articles & Nouns',
        structure: 'a/an + singular countable | the + specific/unique | Ø + plural/uncountable in general',
        uzbekMeaning: 'Artikllar: Aniq (The), Noaniq (A/An) va Nolinchi artikl',
        explanation: 'IELTS Writing da artikl xatolari eng ko\'p uchraydigan va GRA balini 6.0 dan tushiradigan omildir. Umumiy ma\'nodagi sanalmaydigan otlarga "the" qo\'yilmaydi.',
        ieltsRelevance: 'Writing Task 1 va Task 2 da to\'g\'ri ilmiy til uslubini ta\'minlaydi.',
        academicExamples: [
            {
                sentence: 'Education plays a vital role in the development of a nation.',
                translation: 'Ta\'lim millat rivojlanishida muhim rol o\'ynaydi.',
                context: 'Task 2'
            },
            {
                sentence: 'The number of cars increased dramatically in the UK.',
                translation: 'Buyuk Britaniyada mashinalar soni keskin oshdi.',
                context: 'Task 1'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'The society should invest in the education.',
                correct: 'Society should invest in education.',
                explanation: 'Umumiy ma\'nodagi "society" va "education" artiklsiz ishlatiladi.'
            }
        ],
        quizQuestions: [
            {
                question: 'Government funding is essential for _______ development of renewable energy.',
                options: ['the', 'a', 'an', 'Ø (no article)'],
                correctAnswer: 'the',
                explanation: '"development of renewable energy" aniq bir soha bo\'lgani uchun "the" artikli qo\'yiladi.'
            }
        ]
    },
    {
        id: 'ielts_g_03_comparatives_superlatives',
        level: 'A1-A2',
        title: 'Comparatives & Superlatives (Task 1 Comparison Master)',
        category: 'Adjectives & Comparison',
        structure: 'Comparative: Adj + -er than / more + Adj + than | Superlative: the + Adj + -est / the most + Adj',
        uzbekMeaning: 'Qiyosiy va Orttirma darajalar',
        explanation: 'Task 1 da ma\'lumotlarni solishtirish baholash mezonining asosiy talabidir. "far higher than", "substantially more than", "by far the highest" kabi kuchaytiruvchi iboralarni bilish shart.',
        ieltsRelevance: 'Writing Task 1 da taqqoslashlar (Comparisons) bo\'lmasa, Task Achievement dan 7+ olish mumkin emas.',
        academicExamples: [
            {
                sentence: 'The unemployment rate in Spain was significantly higher than that of Germany.',
                translation: 'Ispaniyadagi ishsizlik darajasi Germaniyanikidan sezilarli darajada yuqori edi.',
                context: 'Task 1'
            },
            {
                sentence: 'Renewable energy became the most cost-effective alternative by 2022.',
                translation: 'Qayta tiklanadigan energiya 2022-yilga kelib eng tejamkor muqobilga aylandi.',
                context: 'Task 1'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'The rate was more higher in 2010.',
                correct: 'The rate was much higher in 2010.',
                explanation: 'Qiyosiy darajadagi qisqa sifatlar oldidan "more" emas, "much/significantly" ishlatiladi.'
            }
        ],
        quizQuestions: [
            {
                question: 'Oil consumption in the US was _______ greater than in any European country.',
                options: ['substantially', 'more', 'very', 'extreme'],
                correctAnswer: 'substantially',
                explanation: 'Qiyosiy darajadagi sifat oldidan kuchaytiruvchi akademik ravish "substantially" (sezilarli darajada) qo\'yiladi.'
            }
        ]
    },

    // =========================================================================
    // LEVEL B1 - B2: INTERMEDIATE (BAND 5.5 - 6.5)
    // =========================================================================
    {
        id: 'ielts_g_04_present_perfect_vs_past',
        level: 'B1-B2',
        title: 'Present Perfect vs. Past Simple',
        category: 'Tenses',
        structure: 'Present Perfect: S + have/has + V3 | Past Simple: S + V2/Ved (with specific past time)',
        uzbekMeaning: 'Hozirgi tugallangan zamon (Natija) vs. O\'tgan oddiy zamon (Aniq vaqt)',
        explanation: 'Agar grafikda o\'tgan yil ko\'rsatilgan bo\'lsa (masalan: in 2010), Past Simple ishlatiladi. Agar o\'tmishdan hozirgacha davom etayotgan bo\'lsa (since 2000, over the last decade), Present Perfect ishlatiladi.',
        ieltsRelevance: 'Task 1 da dinamik trendlarni (ko\'tarilish/tushish) va Task 2 da hozirgi kungacha erishilgan yutuqlarni yozishda muhim.',
        academicExamples: [
            {
                sentence: 'The percentage of internet users has grown considerably over the past ten years.',
                translation: 'Internet foydalanuvchilari ulushi so\'nggi o\'n yil ichida sezilarli darajada o\'sdi.',
                context: 'Task 1'
            },
            {
                sentence: 'In 2005, car ownership reached a peak of 75%.',
                translation: '2005-yilda mashinaga egalik qilish 75% cho\'qqiga yetdi.',
                context: 'Task 1'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'In 2015, the population has increased to 10 million.',
                correct: 'In 2015, the population increased to 10 million.',
                explanation: '"In 2015" aniq o\'tgan vaqt bo\'lgani uchun Past Simple shart.'
            }
        ],
        quizQuestions: [
            {
                question: 'Since the introduction of new environmental policies, carbon emissions _______ by 15%.',
                options: ['have dropped', 'dropped', 'drop', 'had dropped'],
                correctAnswer: 'have dropped',
                explanation: '"Since" bilan boshlangan iboralar o\'tmishdan hozirgacha bo\'lgan natijani ifodalagani uchun Present Perfect talab qiladi.'
            }
        ]
    },
    {
        id: 'ielts_g_05_passive_voice_academic',
        level: 'B1-B2',
        title: 'Passive Voice (Academic & Process Description)',
        category: 'Voice & Impersonal Structures',
        structure: 'Active: Subject + Verb + Object ➔ Passive: Object + be + V3 (by Agent)',
        uzbekMeaning: 'Majhul nisbat (Ilmiy va Rasmiy bayonotlar)',
        explanation: 'Akademik insholarda subyekt (kim qilgani) emas, harakat va natija muhimroq. Shuning uchun Task 1 Process diagrammalarida va Task 2 da majhul nisbat zarur.',
        ieltsRelevance: 'Task 1 Process Diagrammani tasvirlashning 80% majhul nisbatda bo\'ladi.',
        academicExamples: [
            {
                sentence: 'Raw materials are collected, transported to the factory, and then processed into pulp.',
                translation: 'Xomashyo yig\'iladi, zavodga tashiladi va keyin qog\'oz massasiga qayta ishlanadi.',
                context: 'Task 1'
            },
            {
                sentence: 'Stricter regulations should be implemented to combat urban pollution.',
                translation: 'Shahar ifloslanishiga qarshi kurashish uchun qat\'iyroq qoidalar joriy etilishi kerak.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'The water filters through layers of sand.',
                correct: 'The water is filtered through layers of sand.',
                explanation: 'Suv o\'zi filtrlamaydi, u filtrlanadi (Passive Voice).'
            }
        ],
        quizQuestions: [
            {
                question: 'In the final stage of manufacturing, the finished products _______ into boxes and shipped.',
                options: ['are packed', 'pack', 'have packed', 'are packing'],
                correctAnswer: 'are packed',
                explanation: 'Jarayon tasvirida mahsulotlar qadoqlanishi majhul nisbatda (are packed) bo\'ladi.'
            }
        ]
    },
    {
        id: 'ielts_g_06_first_second_conditionals',
        level: 'B1-B2',
        title: 'First & Second Conditionals (Proposals & Hypotheticals)',
        category: 'Conditionals',
        structure: '1st: If + Present Simple, will + V1 | 2nd: If + Past Simple, would + V1',
        uzbekMeaning: '1- va 2-shart mayllari (Haqiqiy va gipotetik takliflar)',
        explanation: 'IELTS Task 2 Problem/Solution va Opinion esselarida yechim berishda: "If governments invest in solar power, emissions will decrease" yoki "If all citizens used public transport, congestion would be alleviated" shaklida ishlatiladi.',
        ieltsRelevance: 'GRA (Grammatical Range) mezonida murakkab shart gaplar 7.0+ ball uchun asosiy ko\'rsatkichdir.',
        academicExamples: [
            {
                sentence: 'If governments subsidize public transit, traffic congestion will decrease significantly.',
                translation: 'Agar hukumatlar jamoat transportiga subsidiya bersa, tirbandlik sezilarli darajada kamayadi.',
                context: 'Task 2'
            },
            {
                sentence: 'If societies prioritized vocational training, youth unemployment would drop.',
                translation: 'Agar jamiyatlar kasb-hunar ta\'limiga ustuvorlik bersa, yoshlar ishsizligi kamaygan bo\'lar edi.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'If governments will raise taxes, people will complain.',
                correct: 'If governments raise taxes, people will complain.',
                explanation: '"If" qismida "will" ishlatilmaydi, Present Simple bo\'ladi.'
            }
        ],
        quizQuestions: [
            {
                question: 'If remote working _______ more widespread, urban commuting times would be reduced.',
                options: ['became', 'will become', 'becomes', 'become'],
                correctAnswer: 'became',
                explanation: 'Asosiy qismda "would be" (2nd conditional) bo\'lgani uchun, If qismida Past Simple (became) bo\'lishi shart.'
            }
        ]
    },
    {
        id: 'ielts_g_07_relative_clauses',
        level: 'B1-B2',
        title: 'Defining & Non-Defining Relative Clauses',
        category: 'Complex Sentence Structure',
        structure: 'Defining: S + who/which/that + V | Non-Defining (with commas): S, which/who + V, ...',
        uzbekMeaning: 'Ergashgan aniqlovchi gaplar (Vergul bilan va vergulsiz)',
        explanation: 'Oddiy qisqa gaplarni bitta murakkab gapga birlashtirish orqali essay ravonligi (Cohesion) va grammatik murakkablik (GRA) oshadi.',
        ieltsRelevance: 'Band 7+ uchun zarur bo\'lgan Compound-Complex sentence turlarining asosi.',
        academicExamples: [
            {
                sentence: 'Individuals who possess digital literacy skills are more competitive in the modern job market.',
                translation: 'Raqamli savodxonlik ko\'nikmalariga ega bo\'lgan shaxslar zamonaviy mehnat bozorida raqobatbardoshroqdir.',
                context: 'Task 2'
            },
            {
                sentence: 'Solar energy, which is completely renewable, has gained immense popularity.',
                translation: 'To\'liq qayta tiklanadigan quyosh energiyasi ulkan mashhurlikka erishdi.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'People which work from home save time.',
                correct: 'People who work from home save time.',
                explanation: 'Odamlar uchun "which" emas, "who" ishlatiladi.'
            }
        ],
        quizQuestions: [
            {
                question: 'Green spaces, _______ provide psychological benefits to urban residents, are rapidly disappearing.',
                options: ['which', 'that', 'who', 'where'],
                correctAnswer: 'which',
                explanation: 'Vergullar orasidagi izohlovchi gapda (Non-defining) "that" emas, "which" ishlatiladi.'
            }
        ]
    },

    // =========================================================================
    // LEVEL C1: ADVANCED (BAND 7.0 - 8.5+ — GRA MASTERY)
    // =========================================================================
    {
        id: 'ielts_g_08_inversion_structures',
        level: 'C1',
        title: 'Inversion for Emphasis (Not only did..., Seldom have...)',
        category: 'Advanced Sentence Variety',
        structure: 'Negative Adverb + Auxiliary Verb + Subject + Main Verb',
        uzbekMeaning: 'Inversiya (Urg\'u berish uchun fe\'l va eganing o\'rnini almashtirish)',
        explanation: 'Band 8.0+ essaylarda urg\'u berish uchun inversiya ishlatiladi. Masalan: "Not only does tourism boost the economy, but it also fosters cultural understanding."',
        ieltsRelevance: 'Examiner darhol sizning C1 grammatikaga egaligingizni payqaydi va GRA balini 8.0+ ga ko\'taradi.',
        academicExamples: [
            {
                sentence: 'Not only does higher education enhance employment prospects, but it also develops critical thinking.',
                translation: 'Oliy ta\'lim nafaqat ishga joylashish imkoniyatlarini oshiradi, balki tanqidiy fikrlashni ham rivojlantiradi.',
                context: 'Task 2'
            },
            {
                sentence: 'Seldom do developing nations possess sufficient capital to fund megaprojects independently.',
                translation: 'Rivojlanayotgan davlatlar kamdan-kam hollarda megloyihalarni mustaqil moliyalashtirish uchun yetarli kapitalga ega bo\'ladi.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'Not only technology improves communication, but it also creates jobs.',
                correct: 'Not only does technology improve communication, but it also creates jobs.',
                explanation: '"Not only" bilan boshlanganda eganing oldiga yordamchi fe\'l (does) o\'tadi.'
            }
        ],
        quizQuestions: [
            {
                question: 'Not only _______ greenhouse gas emissions, but it also reduces reliance on fossil fuels.',
                options: ['does renewable energy decrease', 'renewable energy decreases', 'is renewable energy decreasing', 'decreased renewable energy'],
                correctAnswer: 'does renewable energy decrease',
                explanation: 'Inversiyada: Not only + yordamchi fe\'l (does) + ega (renewable energy) + asosiy fe\'l (decrease).'
            }
        ]
    },
    {
        id: 'ielts_g_09_participle_clauses',
        level: 'C1',
        title: 'Participle Clauses (Active & Passive Reduction)',
        category: 'Advanced Sentence Variety',
        structure: 'Having + V3 (After doing) | V-ing (While doing) | V3 / Being + V3 (Passive cause/result)',
        uzbekMeaning: 'Sifatdoshli qisqartma gaplar (Having analyzed..., Driven by...)',
        explanation: 'Ikkita gapni qisqartirib, bitta akademik ixcham gapga aylantirish: "Because students faced high tuition fees, they took loans" ➔ "Facing exorbitant tuition fees, students resorted to loans."',
        ieltsRelevance: 'IELTS Academic Writing da professional uslub va yuqori lug\'at zichligini ta\'minlaydi.',
        academicExamples: [
            {
                sentence: 'Having analyzed the longitudinal data, researchers identified a direct link between diet and cognition.',
                translation: 'Uzoq muddatli ma\'lumotlarni tahlil qilgach, tadqiqotchilar ovqatlanish va aqliy faoliyat o\'rtasida to\'g\'ridan-to\'g\'ri bog\'liqlikni aniqladilar.',
                context: 'Task 2'
            },
            {
                sentence: 'Exposed to excessive screen time from an early age, children are more susceptible to attention deficits.',
                translation: 'Yoshligidan haddan tashqari ko\'p ekran vaqtiga duchor bo\'lgan bolalar diqqat yetishmovchiligiga ko\'proq moyil bo\'ladilar.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'Having finish the research, the conclusion was clear.',
                correct: 'Having finished the research, scientists reached a clear conclusion.',
                explanation: 'Sifatdosh qisqartmada asosiy eganing harakati mos kelishi kerak (Dangling modifier xatosidan saqlaning).'
            }
        ],
        quizQuestions: [
            {
                question: '_______ by intense market competition, companies are forced to innovate continuously.',
                options: ['Driven', 'Driving', 'Having driven', 'Drive'],
                correctAnswer: 'Driven',
                explanation: 'Kompaniyalar bozor raqobati tomonidan majburlangani (majhul sabab) uchun o\'tgan zamon sifatdoshi "Driven by..." ishlatiladi.'
            }
        ]
    },
    {
        id: 'ielts_g_10_cleft_sentences',
        level: 'C1',
        title: 'Cleft Sentences (What concerns scholars is..., It is X that...)',
        category: 'Advanced Focus & Emphasis',
        structure: 'What + Clause + is/was + Noun/Clause | It is/was + Emphasized Element + that/who + Rest',
        uzbekMeaning: 'Ajratilgan urg\'u gaplar (Olimlarni tashvishga solayotgan narsa bu...)',
        explanation: 'Fikrga chuqur urg\'u berish uchun: "Governments should regulate AI, not tech firms" ➔ "It is governments, rather than tech conglomerates, that must regulate artificial intelligence."',
        ieltsRelevance: 'Task 2 xulosasida yoki asosiy argumentni xarakterlashda Band 8.5 darajali taassurot qoldiradi.',
        academicExamples: [
            {
                sentence: 'What distinguishes successful students is their capacity for self-directed learning.',
                translation: 'Muvaffaqiyatli talabalarni ajratib turadigan narsa — ularning mustaqil o\'rganish qobiliyatidir.',
                context: 'Task 2'
            },
            {
                sentence: 'It was the rapid expansion of industrialization that catalyzed widespread urbanization.',
                translation: 'Aynan sanoatlashuvning tez sur\'atlarda kengayishi keng ko\'lamli urbanizatsiyani tezlashtirdi.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'What is important it is discipline.',
                correct: 'What is important is discipline.',
                explanation: 'What gapidan keyin ortiqcha "it" qo\'yilmaydi.'
            }
        ],
        quizQuestions: [
            {
                question: '_______ requires urgent intervention is the escalating rate of youth unemployment.',
                options: ['What', 'That', 'Which', 'It'],
                correctAnswer: 'What',
                explanation: 'Urg\'u beruvchi "What-cleft" gap: "What requires urgent intervention is..." (Shoshilinch aralashuvni talab qiladigan narsa bu...).'
            }
        ]
    },
    {
        id: 'ielts_g_11_academic_nominalisation',
        level: 'C1',
        title: 'Academic Nominalisation (Transforming Verbs into Academic Nouns)',
        category: 'Academic Style & Tone',
        structure: 'Verb/Adj Phrase ➔ Formal Noun Phrase (e.g. destroy ➔ destruction, poor ➔ poverty)',
        uzbekMeaning: 'Akademik Nominalizatsiya (Fe\'llarni ilmiy otlarga aylantirish)',
        explanation: 'So\'zlashuv tilidagi fe\'llar o\'rniga rasmiy ot birikmalaridan foydalanish: "Factories pollute the rivers and this destroys fish" ➔ "Industrial water contamination leads to the decimation of aquatic life."',
        ieltsRelevance: 'Band 8.0+ Lexical Resource va GRA uchun eng muhim ko\'nikma.',
        academicExamples: [
            {
                sentence: 'The implementation of stricter environmental laws resulted in a measurable reduction of carbon emissions.',
                translation: 'Qat\'iyroq ekologik qonunlarning joriy etilishi uglerod chiqindilarining sezilarli darajada kamayishiga olib keldi.',
                context: 'Task 2'
            },
            {
                sentence: 'The rapid proliferation of smartphones has fundamentally altered interpersonal communication.',
                translation: 'Smartfonlarning tez tarqalishi shaxslararo muloqotni tubdan o\'zgartirdi.',
                context: 'Task 2'
            }
        ],
        commonMistakes: [
            {
                incorrect: 'Because factories pollute water, it is bad.',
                correct: 'Industrial water pollution poses severe ecological hazards.',
                explanation: 'Akademik inshoda oddiy sabab gap o\'rniga nominalizatsiya qilingan ega qo\'llash tavsiya etiladi.'
            }
        ],
        quizQuestions: [
            {
                question: 'The _______ of digital healthcare platforms has streamlined patient consultations.',
                options: ['introduction', 'introduce', 'introducing', 'introductory'],
                correctAnswer: 'introduction',
                explanation: '"The [Noun] of..." strukturasida rasmiy ot shakli "introduction" talab qilinadi.'
            }
        ]
    }
];
