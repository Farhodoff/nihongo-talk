export interface IeltsGrammarTopic {
    id: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'A1-A2' | 'B1-B2';
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
    // ==========================================
    // RAYMOND MURPHY: ESSENTIAL GRAMMAR IN USE (A1 FOUNDATION)
    // ==========================================
    {
        id: "murphy_u01_am_is_are",
        level: "A1",
        title: "Unit 1: am / is / are (To Be — Darak Gaplar)",
        category: "Essential To Be (A1 Foundation)",
        structure: "I am (I'm) | He / She / It is (He's / She's / It's) | We / You / They are (We're / You're / They're)",
        uzbekMeaning: "To Be fe'li — bo'lmoq / hisoblanmoq (Ism, yosh, kasb, millat va sifatlarni aytish)",
        explanation: "Essential Grammar in Use 1-qoidasi: Ingliz tilida har bir to'liq gapda albatta fe'l bo'lishi shart. O'zbek tilida 'Men talabaman' deyilganda fe'l sezilmaydi, ammo ingliz tilida 'I am a student' deb 'am' fe'li qo'yilishi shart. To Be fe'li kishining kasbi (She is a doctor), yoshi (I am 24 years old), his-tuyg'usi (He is happy), millati (They are Uzbek) va joylashuvini (We are at home) bildiradi.",
        ieltsRelevance: "Speaking Part 1 da o'zingizni, oilangizni, kasbingizni va yashash joyingizni tanishtirishning eng muhim poydevoridir.",
        academicExamples: [
            {
                sentence: "I am a university student majoring in computer science.",
                translation: "Men axborot texnologiyalari yo'nalishida tahsil olayotgan universitet talabasiman.",
                context: "Speaking"
            },
            {
                sentence: "English is a global language of international communication.",
                translation: "Ingliz tili xalqaro muloqotning global tili hisoblanadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I student from Uzbekistan.",
                correct: "I am a student from Uzbekistan.",
                explanation: "Ingliz tilida ega va ot o'rtasida 'to be' fe'li (am) tushirib qoldirilmaydi."
            },
            {
                incorrect: "He are very tired today.",
                correct: "He is very tired today.",
                explanation: "He, She, It olmoshlari bilan 'is' ishlatiladi ('are' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "My brother _______ 25 years old and he _______ an architect.",
                options: ["is / is", "am / is", "are / is", "is / are"],
                correctAnswer: "is / is",
                explanation: "'My brother' 3-shaxs birlik (he) bo'lgani sababli ikkala o'rinda ham 'is' ishlatiladi."
            },
            {
                question: "Choose the grammatically correct sentence:",
                options: [
                    "They are from London and they are teachers.",
                    "They from London and they teachers.",
                    "They is from London and they are teachers.",
                    "They are from London and they is teachers."
                ],
                correctAnswer: "They are from London and they are teachers.",
                explanation: "'They' ko'plik olmoshi bo'lgani sababli 'are' to'g'ri bog'lovchi hisoblanadi."
            }
        ]
    },
    {
        id: "murphy_u02_am_is_are_questions",
        level: "A1",
        title: "Unit 2: am / is / are (Savollar va Inkor Shakllari)",
        category: "Essential To Be (A1 Foundation)",
        structure: "Inkor: S + am/is/are + not | Savol: Am/Is/Are + Subject + ...? | Qisqa javob: Yes, I am. / No, he isn't.",
        uzbekMeaning: "To Be da inkor va savol tuzish (Siz talabamisiz? — Ha / Yo'q, men charchamadim)",
        explanation: "Essential Grammar in Use 2-qoidasi: Savol tuzishda 'am/is/are' egadan oldinga o'tadi: 'Is your father a doctor?' / 'Are you tired?'. Maxsus so'roq so'zlari (What, Where, Who, Why, How) gapning eng boshida keladi: 'Where are you from?'. Inkor shaklida esa 'not' qo'shiladi: 'I am not interested in politics' / 'The weather isn't cold today'.",
        ieltsRelevance: "Speaking intervyusida imtihon oluvchining savollariga aniq va to'g'ri grammatik javob qaytarish uchun kerak.",
        academicExamples: [
            {
                sentence: "Why is higher education essential in the modern era?",
                translation: "Nima uchun zamonaviy davrda oliy ta'lim muhim hisoblanadi?",
                context: "Task 2"
            },
            {
                sentence: "Are online courses more effective than traditional classrooms?",
                translation: "Onlayn kurslar an'anaviy darsxonalardan samaraliroqmi?",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Where you are from?",
                correct: "Where are you from?",
                explanation: "Maxsus savollarda 'Where' dan keyin darhol 'are' yordamchi fe'li keladi."
            },
            {
                incorrect: "No, I'm not agree.",
                correct: "No, I don't agree. / I am not ready.",
                explanation: "'Agree' (rozi bo'lmoq) bu harakat fe'li, shuning uchun 'don't agree' deyiladi; sifatlar bilan esa 'I am not' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ your parents at home right now?",
                options: ["Are", "Is", "Do", "Does"],
                correctAnswer: "Are",
                explanation: "'Your parents' (ota-onangiz) ko'plikda bo'lgani sababli savolda 'Are' oldinga chiqadi."
            }
        ]
    },
    {
        id: "murphy_u03_present_continuous",
        level: "A1",
        title: "Unit 3: I am doing (Present Continuous — Hozirgi Davomli Zamon)",
        category: "Present Tenses (A1 Foundation)",
        structure: "S + am/is/are + V-ing | S + am/is/are + not + V-ing | Am/Is/Are + S + V-ing?",
        uzbekMeaning: "Ayni paytda sodir bo'layotgan yoki vaqtinchalik harakatlar (Men yozyapman, U ishlayapti)",
        explanation: "Essential Grammar in Use 3-qoidasi: Present Continuous ayni gapirilayotgan paytda boshlangan va hali tugallanmagan harakatlar (I am studying right now) uchun ishlatiladi. Fe'lga -ing qo'shilish qoidalari: run -> running (oxirgi undosh ikkilanadi), write -> writing ('e' tushib qoladi), lie -> lying ('ie' -> 'y').",
        ieltsRelevance: "Speaking Part 1 da ayni paytdagi mashg'ulotlaringizni aytishda va Writing Task 1/2 da davom etayotgan o'zgarishlarni ifodalashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "Global temperatures are rising at an alarming pace.",
                translation: "Global harorat xavotirli sur'atda ko'tarilmoqda.",
                context: "Task 2"
            },
            {
                sentence: "At present, I am preparing for the IELTS examination to study overseas.",
                translation: "Ayni paytda chet elda o'qish uchun IELTS imtihoniga tayyorlanyapman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Look! The bus comes.",
                correct: "Look! The bus is coming.",
                explanation: "Ayni paytda ko'z o'ngingizda sodir bo'layotgan harakat uchun Present Continuous ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Please be quiet. I _______ to concentrate on this essay.",
                options: ["am trying", "try", "have tried", "was trying"],
                correctAnswer: "am trying",
                explanation: "Ayni paytda davom etayotgan harakat: 'I am trying' (harakat qilayapman)."
            }
        ]
    },
    {
        id: "murphy_u04_present_continuous_questions",
        level: "A1",
        title: "Unit 4: Are you doing? (Present Continuous Savollari)",
        category: "Present Tenses (A1 Foundation)",
        structure: "Am/Is/Are + Subject + V-ing? | Question Word (What/Where/Why) + am/is/are + Subject + V-ing?",
        uzbekMeaning: "Hozirgi davomli zamonda savollar (Nima qilyapsan? Qayerga ketyapti?)",
        explanation: "Essential Grammar in Use 4-qoidasi: So'roq shaklida yordamchi fe'l (am/is/are) egadan oldinga o'tadi: 'Are you feeling okay?' / 'What are you reading?'. Qisqa javoblar: 'Yes, I am' / 'No, I am not'.",
        ieltsRelevance: "Speaking muloqotida suhbatdosh bilan savol-javob qilishda muhim.",
        academicExamples: [
            {
                sentence: "What strategies are leading educational institutions currently implementing?",
                translation: "Yetakchi ta'lim muassasalari ayni paytda qanday strategiyalarni amalga oshirmoqda?",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "What you are doing tonight?",
                correct: "What are you doing tonight?",
                explanation: "Savolda 'What' dan keyin 'are' yordamchi fe'li egadan oldinga chiqadi."
            }
        ],
        quizQuestions: [
            {
                question: "Why _______ everyone _______ at that strange painting?",
                options: ["is / looking", "are / look", "do / look", "is / look"],
                correctAnswer: "is / looking",
                explanation: "'Everyone' grammatik jihatdan birlik (is) hisoblanadi: 'Why is everyone looking...'."
            }
        ]
    },
    {
        id: "murphy_u05_present_simple",
        level: "A1",
        title: "Unit 5: I do / work / like etc. (Present Simple — Hozirgi Oddiy Zamon)",
        category: "Present Tenses (A1 Foundation)",
        structure: "I / We / You / They + V1 | He / She / It + V1(s/es)",
        uzbekMeaning: "Doimiy takrorlanuvchi ish-harakatlar, odatlar va umumiy haqiqatlar",
        explanation: "Essential Grammar in Use 5-qoidasi: Present Simple har kuni yoki doimiy ravishda takrorlanadigan ishlar (I drink tea every morning) va umumiy tabiat haqiqatlari (The Earth goes around the Sun) uchun ishlatiladi. He/She/It olmoshlarida fe'lga -s/-es qo'shiladi: pass -> passes, watch -> watches, study -> studies.",
        ieltsRelevance: "Writing Task 1 diagramma va jadvallarni tanishtirishda (The chart shows...) hamda Task 2 da umumiy qonuniyatlarni yozishda asosiy vosita.",
        academicExamples: [
            {
                sentence: "The line graph illustrates fluctuations in consumer spending over a decade.",
                translation: "Chiziqli grafik o'n yil davomida iste'molchilar xarajatlaridagi tebranishlarni tasvirlaydi.",
                context: "Task 1"
            },
            {
                sentence: "Regular physical exercise promotes cardiovascular longevity.",
                translation: "Muntazam jismoniy mashqlar yurak-qon tomir salomatligini yaxshilaydi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "My brother live in London.",
                correct: "My brother lives in London.",
                explanation: "'My brother' (he) bo'lgani uchun fe'lga -s qo'shiladi: 'lives'."
            }
        ],
        quizQuestions: [
            {
                question: "The provided table _______ statistical data regarding renewable energy adoption.",
                options: ["provides", "is providing", "provided", "has provided"],
                correctAnswer: "provides",
                explanation: "Akademik Task 1 kirish gaplarida fe'l doim Present Simple da (The table provides...) bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u06_present_simple_negative",
        level: "A1",
        title: "Unit 6: I don't ... (Present Simple Inkor Shakli)",
        category: "Present Tenses (A1 Foundation)",
        structure: "I / We / You / They + don't (do not) + V1 | He / She / It + doesn't (does not) + V1",
        uzbekMeaning: "Hozirgi oddiy zamonda inkor (Men qilmayman, U yoqtirmaydi)",
        explanation: "Essential Grammar in Use 6-qoidasi: Present Simple inkorida 'don't' yoki 'doesn't' yordamchi fe'llari qo'yiladi. MUHIM: 'doesn't' ishlatilganda asosiy fe'ldan -s/-es qo'shimchasi tushib qoladi (He doesn't like, NOT he doesn't likes).",
        ieltsRelevance: "Speaking va Writingda o'zingiz yoki jamiyat qilmaydigan narsalarni to'g'ri ifodalash uchun.",
        academicExamples: [
            {
                sentence: "Many underdeveloped regions do not possess adequate healthcare facilities.",
                translation: "Ko'plab rivojlanayotgan hududlar yetarli tibbiy muassasalarga ega emas.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "He doesn't works on weekends.",
                correct: "He doesn't work on weekends.",
                explanation: "'doesn't' dan keyin fe'l asosi (work) qo'shimchasiz keladi."
            }
        ],
        quizQuestions: [
            {
                question: "She _______ coffee because it _______ her sleep.",
                options: ["doesn't drink / disrupts", "don't drink / disrupts", "doesn't drinks / disrupt", "doesn't drink / disrupt"],
                correctAnswer: "doesn't drink / disrupts",
                explanation: "Inkorda 'doesn't drink', ikkinchi qismda darak 3-shaxs birlik 'disrupts'."
            }
        ]
    },
    {
        id: "murphy_u07_present_simple_questions",
        level: "A1",
        title: "Unit 7: Do you ... ? (Present Simple Savollari)",
        category: "Present Tenses (A1 Foundation)",
        structure: "Do + I/we/you/they + V1? | Does + he/she/it + V1? | Qisqa javob: Yes, I do. / No, he doesn't.",
        uzbekMeaning: "Hozirgi oddiy zamonda savol berish (Siz inglizcha gapirasizmi? U qayerda yashaydi?)",
        explanation: "Essential Grammar in Use 7-qoidasi: Savol tuzishda gap boshiga 'Do' yoki 'Does' chiqadi: 'Do you play tennis?' / 'Does Sarah speak Spanish?'. Maxsus so'roq so'zlar: 'Where do your parents live?' / 'What does this word mean?'.",
        ieltsRelevance: "Speaking Part 3 da savollarni to'g'ri tushunish va javob berishda kerak.",
        academicExamples: [
            {
                sentence: "How does socioeconomic inequality affect academic attainment?",
                translation: "Ijtimoiy-iqtisodiy tengsizlik akademik muvaffaqiyatga qanday ta'sir qiladi?",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Does he lives in Samarkand?",
                correct: "Does he live in Samarkand?",
                explanation: "'Does' bo'lgani sababli asosiy fe'lda -s qo'shimchasi bo'lmaydi (live)."
            }
        ],
        quizQuestions: [
            {
                question: "What time _______ the morning lecture _______?",
                options: ["does / start", "do / start", "is / start", "does / starts"],
                correctAnswer: "does / start",
                explanation: "'The morning lecture' (it) uchun 'does ... start' to'g'ri bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u08_present_continuous_vs_simple",
        level: "A1",
        title: "Unit 8: I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)",
        category: "Present Tenses (A1 Foundation)",
        structure: "Continuous (am/is/are + V-ing) = Hozir/Vaqtinchalik vs. Simple (V/Vs) = Doimiy/Odat",
        uzbekMeaning: "Hozirgi davomli va Hozirgi oddiy zamon farqi hamda Statik fe'llar",
        explanation: "Essential Grammar in Use 8-qoidasi: Doimiy odat uchun: 'I live in Tashkent' (Men Toshkentda yashayman). Vaqtinchalik holat uchun: 'I am living with my cousin this week'. MUHIM: Statik fe'llar (like, love, hate, want, know, understand, remember, depend, believe) davomli zamonda (-ing) ishlatilmaydi: 'I understand' (NOT I am understanding).",
        ieltsRelevance: "IELTS Speaking va Writingda vaqtinchalik hodisalar bilan doimiy holatlarni to'g'ri farqlash grammatik aniqlik (GRA) balini ta'minlaydi.",
        academicExamples: [
            {
                sentence: "The economic outcome depends heavily on international trade agreements.",
                translation: "Iqtisodiy natija xalqaro savdo bitimlariga jiddiy bog'liq bo'ladi.",
                context: "Task 2"
            },
            {
                sentence: "Water boils at 100 degrees Celsius, but right now the water in this pot is not boiling.",
                translation: "Suv 100 darajada qaynaydi (doimiy qonun), lekin ayni paytda bu qozondagi suv qaynamayapti.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I am knowing the correct answer.",
                correct: "I know the correct answer.",
                explanation: "'Know' statik fe'l bo'lgani uchun continuous da ishlatilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "Listen! Somebody _______ the guitar, but I _______ who it is.",
                options: ["is playing / don't know", "plays / don't know", "is playing / am not knowing", "plays / am not knowing"],
                correctAnswer: "is playing / don't know",
                explanation: "Birinchi harakat ayni paytda (is playing), 'know' esa statik fe'l (don't know)."
            }
        ]
    },
    {
        id: "murphy_u09_have_have_got",
        level: "A1",
        title: "Unit 9: I have ... / I've got ... (Egalik Ifodalash)",
        category: "Essential Verbs (A1 Foundation)",
        structure: "I/We/You/They have got (have) | He/She/It has got (has) | Inkor: haven't got / hasn't got",
        uzbekMeaning: "Menda bor / Unda bor (Mening oilam bor / Uning mashinasi yo'q)",
        explanation: "Essential Grammar in Use 9-qoidasi: Mulk, qarindoshlik va salomatlik holatlarini aytishda: 'I've got a smartphone' / 'She has got two brothers' / 'I've got a headache'. Britaniya inglizchasida 'have got', Amerika inglizchasida 'have' keng qo'llanadi.",
        ieltsRelevance: "Speaking Part 1 da o'z mulkingiz, oilangiz va kundalik holatlaringiz haqida tabiiy gapirish vositasi.",
        academicExamples: [
            {
                sentence: "Governments have an imperative responsibility to safeguard public infrastructure.",
                translation: "Hukumatlar jamoat infratuzilmasini himoya qilish bo'yicha qat'iy mas'uliyatga ega.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "She have got two cars.",
                correct: "She has got two cars. / She has two cars.",
                explanation: "3-shaxs birlik (he/she/it) bilan doim 'has got' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Sarah _______ a new laptop, but she _______ a printer.",
                options: ["has got / hasn't got", "have got / haven't got", "has got / haven't got", "have got / hasn't got"],
                correctAnswer: "has got / hasn't got",
                explanation: "Sarah (She) uchun darak shaklda 'has got', inkorda 'hasn't got' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u10_was_were",
        level: "A1",
        title: "Unit 10: was / were (To Be ning O'tgan Zamoni)",
        category: "Past Tenses (A1 Foundation)",
        structure: "I / He / She / It was | We / You / They were | Inkor: wasn't / weren't | Savol: Was/Were + S + ...?",
        uzbekMeaning: "O'tgan zamonda bo'lgan edi (Kecha men uyda edim / Ular charchagan edilar)",
        explanation: "Essential Grammar in Use 10-qoidasi: 'am/is' ning o'tgan zamoni 'was', 'are' ning o'tgan zamoni 'were'. O'tgan zamondagi holat, sifat, kasb va joylashuvni ifodalaydi: 'Yesterday I was sick' / 'They were at the cinema last night'.",
        ieltsRelevance: "Speaking Part 2 o'tmish xotiralarini aytishda va Writing Task 1 o'tgan yilgi ma'lumotlarni yozishda kerak.",
        academicExamples: [
            {
                sentence: "In 1990, the literacy rate in developing nations was exceptionally low.",
                translation: "1990 yilda rivojlanayotgan mamlakatlarda savodxonlik darajasi favqulodda past edi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "We was very surprised by the announcement.",
                correct: "We were very surprised by the announcement.",
                explanation: "'We' olmoshi bilan 'were' ishlatiladi ('was' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "Where _______ you yesterday at 5 PM? I _______ looking for you.",
                options: ["were / was", "was / were", "were / were", "was / was"],
                correctAnswer: "were / was",
                explanation: "'You' bilan 'were', 'I' bilan 'was' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u11_past_simple_regular_irregular",
        level: "A1",
        title: "Unit 11: worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)",
        category: "Past Tenses (A1 Foundation)",
        structure: "To'g'ri fe'llar: V + -ed (worked, cleaned) | Noto'g'ri fe'llar: V2 (went, saw, bought)",
        uzbekMeaning: "O'tgan zamonda aniq vaqtda sodir bo'lib tugagan harakat",
        explanation: "Essential Grammar in Use 11-qoidasi: Past Simple o'tmishda sodir bo'lgan va butunlay tugagan harakatlar uchun ishlatiladi. To'g'ri fe'llarga -ed qo'shiladi: work -> worked, live -> lived, study -> studied. Noto'g'ri fe'llar maxsus 2-shaklga ega: go -> went, see -> saw, buy -> bought, have -> had.",
        ieltsRelevance: "Writing Task 1 da o'tgan yillardagi grafik o'zgarishlarni yozishning asosi (e.g. Sales increased rapidly in 2010).",
        academicExamples: [
            {
                sentence: "Between 2000 and 2015, renewable energy investments increased significantly.",
                translation: "2000 va 2015 yillar oralig'ida qayta tiklanadigan energiya investitsiyalari sezilarli darajada oshdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Yesterday I goed to the supermarket.",
                correct: "Yesterday I went to the supermarket.",
                explanation: "'Go' noto'g'ri fe'l bo'lgani sababli uning 2-shakli 'went' bo'ladi."
            }
        ],
        quizQuestions: [
            {
                question: "The company _______ its first international branch in 2012.",
                options: ["established", "establishes", "is establishing", "has established"],
                correctAnswer: "established",
                explanation: "2012 yil aniq o'tgan davr bo'lgani sababli fe'lning 2-shakli (established) tanlanadi."
            }
        ]
    },
    {
        id: "murphy_u12_past_simple_negative_questions",
        level: "A1",
        title: "Unit 12: I didn't ... Did you ... ? (Past Simple Inkor va Savol)",
        category: "Past Tenses (A1 Foundation)",
        structure: "Inkor: S + didn't (did not) + V1 | Savol: Did + Subject + V1? | Qisqa javob: Yes, I did. / No, I didn't.",
        uzbekMeaning: "O'tgan oddiy zamonda inkor va savol (Men bormadim / Siz ko'rdingizmi?)",
        explanation: "Essential Grammar in Use 12-qoidasi: Past Simple ning inkori va so'rog'ida 'did / didn't' ishlatiladi. MUHIM: 'did' yoki 'didn't' kelganda asosiy fe'l 1-shaklga (V1) qaytadi: 'I didn't go' (NOT I didn't went) / 'Did you see Sarah?' (NOT Did you saw).",
        ieltsRelevance: "Speaking intervyusida o'tmishdagi voqealar haqida to'g'ri savol-javob qilishda muhim.",
        academicExamples: [
            {
                sentence: "The municipal council did not allocate sufficient funding for suburban transport.",
                translation: "Shahar kengashi shahar atrofi transporti uchun yetarli mablag' ajratmadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Did you went to the conference yesterday?",
                correct: "Did you go to the conference yesterday?",
                explanation: "'Did' yordamchi fe'lidan keyin asosiy fe'lning 1-shakli (go) keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Why _______ you _______ the assignment on time?",
                options: ["didn't / submit", "didn't / submitted", "weren't / submit", "don't / submitted"],
                correctAnswer: "didn't / submit",
                explanation: "'didn't' dan keyin asosiy fe'l asosi (submit) keladi."
            }
        ]
    },
    {
        id: "murphy_u13_past_continuous",
        level: "A1",
        title: "Unit 13: I was doing (Past Continuous — O'tgan Davomli Zamon)",
        category: "Past Tenses (A1 Foundation)",
        structure: "S + was/were + V-ing | S + was/were + not + V-ing | Was/Were + S + V-ing?",
        uzbekMeaning: "O'tmishda ma'lum bir vaqt oralig'ida davom etayotgan jarayon",
        explanation: "Essential Grammar in Use 13-qoidasi: O'tmishdagi aniq bir vaqtda (masalan, kecha soat 4 da) jarayonda bo'lgan harakatlar uchun ishlatiladi: 'At 4 o'clock yesterday, I was playing tennis' (soat 4 dan oldin boshlaganman va hali o'ynayotgan edim).",
        ieltsRelevance: "Speaking Part 2 hikoyalarda foni va vaziyatni tasvirlashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "While the economy was recovering, inflation remained a persistent threat.",
                translation: "Iqtisodiyot tiklanayotgan bir paytda, inflyatsiya doimiy xavf bo'lib qoldi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Yesterday at 8 PM I watched TV.",
                correct: "Yesterday at 8 PM I was watching TV.",
                explanation: "Aniq vaqt nuqtasida jarayonda bo'lgan harakat uchun Past Continuous ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "What _______ you _______ when the earthquake struck?",
                options: ["were / doing", "was / doing", "did / do", "are / doing"],
                correctAnswer: "were / doing",
                explanation: "Zilzila yuz bergan daqiqada nima bilan mashg'ul edingiz (were doing)."
            }
        ]
    },
    {
        id: "murphy_u14_past_continuous_and_simple",
        level: "A1",
        title: "Unit 14: I was doing and I did (Past Continuous va Past Simple Kesishuvi)",
        category: "Past Tenses (A1 Foundation)",
        structure: "Davomli jarayon (was/were + V-ing) + WHEN/WHILE + Qisqa harakat (Past Simple V2)",
        uzbekMeaning: "Bir harakat davom etayotganda ikkinchi to'satdan harakatning ro'y berishi",
        explanation: "Essential Grammar in Use 14-qoidasi: O'tmishda bir uzun jarayon davom etayotgan paytda kutilmaganda boshqa qisqa harakat sodir bo'lsa: 'I was walking home when it began to rain' (Uyga ketayotgan edim, yomg'ir yog'ib ketdi). Uzun fon harakat -> Past Continuous, qisqa kesuvchi harakat -> Past Simple.",
        ieltsRelevance: "Speaking Part 2 da shaxsiy sarguzasht va tajribalarni jonli hikoya qilish vositasi.",
        academicExamples: [
            {
                sentence: "Researchers were conducting field surveys when the unexpected breakthrough occurred.",
                translation: "Tadqiqotchilar dala tadqiqotlarini olib borayotganlarida kutilmagan ilmiy kashfiyot yuz berdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "While I walked down the street, I was meeting an old friend.",
                correct: "While I was walking down the street, I met an old friend.",
                explanation: "Ko'chada yurish uzun jarayon (was walking), do'stni uchratish esa qisqa hodisa (met)."
            }
        ],
        quizQuestions: [
            {
                question: "The phone rang while I _______ a shower.",
                options: ["was taking", "took", "have taken", "am taking"],
                correctAnswer: "was taking",
                explanation: "'While' dan keyin o'tmishdagi davomli jarayon: 'was taking'."
            }
        ]
    },
    {
        id: "murphy_u15_present_perfect_1",
        level: "A1",
        title: "Unit 15: I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)",
        category: "Present Perfect (A1 Foundation)",
        structure: "I / We / You / They + have + V3/ed | He / She / It + has + V3/ed | Inkor: haven't / hasn't + V3",
        uzbekMeaning: "Natijasi hozirgi kunda ko'rinib turgan yoki muhim bo'lgan o'tgan harakat",
        explanation: "Essential Grammar in Use 15-qoidasi: Present Perfect o'tmishda sodir bo'lgan, lekin natijasi ayni hozirgi daqiqada muhim bo'lgan ish-harakatlar uchun ishlatiladi: 'I have lost my key' (= hozir menda kalit yo'q, uyga kirolmayapman). Fe'lning 3-shakli (Past Participle) ishlatiladi: clean -> cleaned, lose -> lost, see -> seen, write -> written.",
        ieltsRelevance: "Writing Task 2 kirish qismida jamiyatdagi yangi o'zgarishlarni kiritishda (e.g. Technology has revolutionized learning).",
        academicExamples: [
            {
                sentence: "Technological advancements have transformed modern communication systems.",
                translation: "Texnologik yutuqlar zamonaviy aloqa tizimlarini tubdan o'zgartirdi (natijasi bugun mavjud).",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have lost my keys yesterday.",
                correct: "I lost my keys yesterday. / I have lost my keys.",
                explanation: "'Yesterday' kabi aniq o'tgan vaqt bilan Present Perfect ishlatilmaydi; u faqat natija hozir muhim bo'lganda qo'llanadi."
            }
        ],
        quizQuestions: [
            {
                question: "Look! Somebody _______ the window. It's wide open.",
                options: ["has broken", "broke", "is breaking", "breaks"],
                correctAnswer: "has broken",
                explanation: "Oyna singan va natijasi hozir ko'rinib turibdi (has broken)."
            }
        ]
    },
    {
        id: "murphy_u16_present_perfect_just_already_yet",
        level: "A1",
        title: "Unit 16: I've just ... I've already ... I haven't ... yet (Present Perfect 2)",
        category: "Present Perfect (A1 Foundation)",
        structure: "Just = hozirgina | Already = allaqachon (have/has va V3 o'rtasida) | Yet = hali (gap oxirida inkor va so'roqda)",
        uzbekMeaning: "Hozirgina, allaqachon va hali so'zlarining Present Perfect dagi o'rni",
        explanation: "Essential Grammar in Use 16-qoidasi: 1) 'just' = qisqa vaqt oldin: 'I've just arrived'. 2) 'already' = kutilgandan erta yoki allaqachon: 'I've already finished my work'. 3) 'yet' = hali/haliyam (inkor va so'roq gaplarning eng oxirida keladi): 'Have you finished yet?' / 'I haven't eaten yet'.",
        ieltsRelevance: "Speaking va Writingda o'z ishlaringizning holatini tabiiy ifodalash.",
        academicExamples: [
            {
                sentence: "Several European nations have already achieved substantial reductions in greenhouse emissions.",
                translation: "Bir qator Yevropa davlatlari issiqxona gazlari emissiyasini qisqartirishda allaqachon salmoqli natijalarga erishdilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I didn't finish my homework yet.",
                correct: "I haven't finished my homework yet.",
                explanation: "'Yet' so'zi bilan Present Perfect (haven't finished) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Don't forget to pay the electricity bill. — I _______ it.",
                options: ["have already paid", "already paid", "have yet paid", "paid already"],
                correctAnswer: "have already paid",
                explanation: "'Alla qachon to'lab bo'ldim' ma'nosida 'have already paid' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u17_present_perfect_have_you_ever",
        level: "A1",
        title: "Unit 17: Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)",
        category: "Present Perfect (A1 Foundation)",
        structure: "Have you ever + V3? | I have never + V3 | Ever = umringizda / biror marta | Never = hech qachon",
        uzbekMeaning: "Hayotiy tajribalar haqida so'rash va aytish (Siz biror marta Londonda bo'lganmisiz?)",
        explanation: "Essential Grammar in Use 17-qoidasi: Insonning butun hayoti davomidagi tajribalari haqida gapirganda: 'Have you ever been to Japan?' (Hayotingizda biror marta Yaponiyada bo'lganmisiz?). Javobda: 'Yes, twice' / 'No, I have never been there'.",
        ieltsRelevance: "Speaking Part 1 ning eng mashhur savollari (Have you ever traveled abroad / played an instrument?).",
        academicExamples: [
            {
                sentence: "I have never witnessed such remarkable academic enthusiasm among students.",
                translation: "Men talabalar orasida hech qachon bunday ajoyib akademik ishtiyoqni ko'rmaganman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Have you ever went to Paris?",
                correct: "Have you ever been to Paris?",
                explanation: "Biror joyga borib kelganlik tajribasi haqida 'been to' ishlatiladi ('went' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ you ever _______ an exotic musical instrument?",
                options: ["Have / played", "Did / play", "Were / playing", "Do / play"],
                correctAnswer: "Have / played",
                explanation: "Hayotiy tajriba haqida so'rash: 'Have you ever played...?'."
            }
        ]
    },
    {
        id: "murphy_u18_present_perfect_how_long",
        level: "A1",
        title: "Unit 18: How long have you ... ? (Present Perfect 4 — Davomiylik)",
        category: "Present Perfect (A1 Foundation)",
        structure: "How long + have/has + Subject + V3/been? | S + have/has lived/worked/been + for/since ...",
        uzbekMeaning: "Qancha vaqtdan beri davom etayotganini so'rash va aytish (Qanchadan beri shu yerda yashaysiz?)",
        explanation: "Essential Grammar in Use 18-qoidasi: O'tmishda boshlanib hozirgacha davom etayotgan holatlar uchun Present Simple emas, balki Present Perfect ishlatiladi: 'I have lived in London for two years' (= Men 2 yildan beri Londonda yashayman, hozir ham u yerdaman).",
        ieltsRelevance: "Speaking Part 1 da 'How long have you been studying English?' savoliga benuqson javob berish kaliti.",
        academicExamples: [
            {
                sentence: "I have been interested in international economics since my high school years.",
                translation: "Men yuqori sinf yillarimdan beri xalqaro iqtisodiyotga qiziqib kelaman.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I know him since 2018.",
                correct: "I have known him since 2018.",
                explanation: "'Since' bilan boshlangan davomiylik uchun Present Perfect (have known) talab qilinadi."
            }
        ],
        quizQuestions: [
            {
                question: "How long _______ you _______ in this academic department?",
                options: ["have / worked", "do / work", "are / working", "did / work"],
                correctAnswer: "have / worked",
                explanation: "'Qanchadan beri ishlayapsiz?' ma'nosida 'How long have you worked' to'g'ri."
            }
        ]
    },
    {
        id: "murphy_u19_for_since_ago",
        level: "A1",
        title: "Unit 19: for / since / ago (Vaqt Ko'rsatkichlari Farqi)",
        category: "Time Expressions (A1 Foundation)",
        structure: "FOR + Vaqt oralig'i (for 3 days, for 5 years) | SINCE + Boshlangan aniq nuqta (since Monday, since 2015) | AGO = oldin (Past Simple bilan)",
        uzbekMeaning: "...davomida (for), ...dan beri (since), ...oldin (ago) so'zlarining to'g'ri ishlatilishi",
        explanation: "Essential Grammar in Use 19-qoidasi: 1) 'FOR' — muddat vaqt oralig'i: for two hours, for ten years. 2) 'SINCE' — ish-harakat boshlangan aniq vaqt nuqtasi: since 9 o'clock, since 2010. 3) 'AGO' — o'tmishda ...oldin (faqat Past Simple bilan): 'He left ten minutes ago'.",
        ieltsRelevance: "Writing Task 1 va Speakingda vaqt ko'rsatkichlarini chalkashtirmasdan aniq qo'llash.",
        academicExamples: [
            {
                sentence: "Global renewable energy capacity has grown exponentially since 2010.",
                translation: "Global qayta tiklanadigan energiya quvvati 2010 yildan beri eksponentsial ravishda o'sdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have lived here since three years.",
                correct: "I have lived here for three years. / ...since 2021.",
                explanation: "'Three years' bu vaqt davomiyligi bo'lgani uchun 'for' ishlatiladi ('since' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "They have been married _______ twenty years, having met thirty years _______.",
                options: ["for / ago", "since / ago", "for / since", "since / for"],
                correctAnswer: "for / ago",
                explanation: "Muddat oralig'iga 'for twenty years', o'tmishdagi nuqtaga 'thirty years ago'."
            }
        ]
    },
    {
        id: "murphy_u20_present_perfect_vs_past_simple",
        level: "A1",
        title: "Unit 20: I have done and I did (Present Perfect va Past Simple Taqqoslash)",
        category: "Tense Contrast (A1 Foundation)",
        structure: "Past Simple: Aniq o'tgan vaqt (yesterday, in 2018, last week) vs. Present Perfect: Noma'lum vaqt / Bugungacha bo'lgan davr (today, recently, this week)",
        uzbekMeaning: "O'tgan oddiy zamon va Hozirgi tugallangan zamonning aniq farqlari",
        explanation: "Essential Grammar in Use 20-qoidasi: Agar vaqt tugagan bo'lsa (yesterday, last year, in 2005) -> Past Simple: 'I finished my essay yesterday'. Agar vaqt davri hali tugamagan bo'lsa (today, this week) yoki natija hozir muhim bo'lsa -> Present Perfect: 'I have written three essays this week'.",
        ieltsRelevance: "IELTS Writing Task 1 va 2 da eng ko'p ball yo'qotiladigan zamonlar to'qnashuvi.",
        academicExamples: [
            {
                sentence: "In 2005, the government launched the initiative, and since then it has benefited millions.",
                translation: "2005 yilda hukumat tashabbusni boshladi (Past Simple) va o'shandan beri u millionlab odamlarga foyda keltirdi (Present Perfect).",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I have seen that movie last night.",
                correct: "I saw that movie last night.",
                explanation: "'Last night' aniq o'tgan vaqt bo'lgani uchun faqat Past Simple (saw) ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Shakespeare _______ many world-famous plays, but contemporary writers _______ new genres.",
                options: ["wrote / have developed", "has written / developed", "wrote / developed", "has written / have developed"],
                correctAnswer: "wrote / have developed",
                explanation: "Shekspir hayoti o'tmishda tugagan (wrote), zamonaviy yozuvchilar esa hozir ham rivojlantirmoqda (have developed)."
            }
        ]
    },
    {
        id: "murphy_u36_there_is_there_are",
        level: "A1",
        title: "Unit 36: there is / there are (Mavjudlik va Borlik)",
        category: "Essential Sentences (A1 Foundation)",
        structure: "Birlik: There is a/an + Noun | Ko'plik: There are + Nouns | Inkor: There isn't / There aren't",
        uzbekMeaning: "Biror joyda nimadir borligini aytish (Shaharda katta bog' bor / Maktabda 500 ta o'quvchi bor)",
        explanation: "Essential Grammar in Use 36-qoidasi: 'There is/are' birinchi marta biror narsaning borligini yoki mavjudligini bildirish uchun ishlatiladi. Birlikdagi sanaladigan otlar oldidan 'There is a book on the table', ko'plikdagi otlar uchun 'There are many students in the library' deyiladi.",
        ieltsRelevance: "Writing Task 1 grafiklarida ('There was a significant increase...') va Task 2 insholarida ('There are several compelling reasons why...') eng ko'p ishlatiladigan struktura.",
        academicExamples: [
            {
                sentence: "There is a striking disparity between urban and rural income levels.",
                translation: "Shahar va qishloq daromadlari darajasi o'rtasida keskin farq bor.",
                context: "Task 1"
            },
            {
                sentence: "There are numerous environmental benefits associated with renewable energy.",
                translation: "Qayta tiklanadigan energiya bilan bog'liq ko'plab ekologik foydalar mavjud.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "In my city have many parks.",
                correct: "There are many parks in my city.",
                explanation: "O'zbek tilidagi '...da bor' iborasini ingliz tilida 'have' bilan emas, 'There is / There are' bilan ifodalanadi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ twenty-four hours in a day, and _______ a lot of work to complete.",
                options: ["There are / there is", "There is / there are", "There are / there are", "There is / there is"],
                correctAnswer: "There are / there is",
                explanation: "'Twenty-four hours' ko'plik (there are), 'work' sanalmaydigan ot (there is)."
            }
        ]
    },

    // ==========================================
    // RAYMOND MURPHY: ESSENTIAL GRAMMAR IN USE (A2 & B1-B2 MASTERY)
    // ==========================================
    {
        id: "murphy_u21_passive_voice_1",
        level: "A2",
        title: "Unit 21: is done / was done (Passive Voice 1 — Majhul Nisbat)",
        category: "Passive Voice (A2-B1)",
        structure: "Present: S + am/is/are + V3 | Past: S + was/were + V3",
        uzbekMeaning: "Majhul nisbat (Ish-harakat kim tomonidan emas, kim/nima ustida bajarilgani muhim bo'lganda)",
        explanation: "Ish-harakatni bajaruvchi shaxs noma'lum, ahamiyatsiz yoki barchaga ma'lum bo'lganda: 'This house was built in 1965' / 'English is spoken all over the world'.",
        ieltsRelevance: "Writing Task 1 jarayonlar (Process diagrams) va ilmiy Task 2 insholarida xolislikni ta'minlaydi.",
        academicExamples: [
            {
                sentence: "Over 500 million tonnes of plastic are manufactured globally each year.",
                translation: "Har yili dunyo bo'ylab 500 million tonnadan ortiq plastik ishlab chiqariladi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The novel wrote in 1920.",
                correct: "The novel was written in 1920.",
                explanation: "Roman o'zi yozmagan, yozilgan (was written)."
            }
        ],
        quizQuestions: [
            {
                question: "The research findings _______ in a prestigious medical journal last month.",
                options: ["were published", "published", "are published", "have published"],
                correctAnswer: "were published",
                explanation: "O'tgan oyda (last month) majhul nisbat: 'were published'."
            }
        ]
    },
    {
        id: "murphy_u25_used_to",
        level: "A2",
        title: "Unit 25: I used to ... (O'tmishdagi Doimiy Odatlar)",
        category: "Modal Structures (A2)",
        structure: "S + used to + V1 | Inkor: S + didn't use to + V1 | Savol: Did + S + use to + V1?",
        uzbekMeaning: "Ilgari qilardim (lekin hozir qilmayman) yoki ilgari shunday edi",
        explanation: "O'tmishda muntazam qilingan, lekin hozir butunlay to'xtagan odatlar va holatlar uchun: 'I used to live in a small village, but now I live in Tashkent'.",
        ieltsRelevance: "Speaking Part 1 va Part 2 da bolalik yoki o'tmishdagi odatlarni hozirgi kun bilan taqqoslashda yuqori baholanadi.",
        academicExamples: [
            {
                sentence: "Urban populations used to rely primarily on local agricultural produce.",
                translation: "Shahar aholisi ilgari asosan mahalliy qishloq xo'jaligi mahsulotlariga tayanar edi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I use to play soccer when I was a child.",
                correct: "I used to play soccer when I was a child.",
                explanation: "O'tgan zamon odati uchun 'used to' (-d bilan) yoziladi."
            }
        ],
        quizQuestions: [
            {
                question: "This metropolitan district _______ very quiet before the industrial expansion.",
                options: ["used to be", "is used to", "use to be", "was used to"],
                correctAnswer: "used to be",
                explanation: "'Ilgari juda sokin bo'lar edi' ma'nosida 'used to be' to'g'ri."
            }
        ]
    },

    {
        id: "murphy_u38_first_second_conditionals",
        level: "B1",
        title: "Unit 25: Conditionals 1 & 2 (If I study..., If I had...)",
        category: "Conditionals (B1 Intermediate)",
        structure: "1st: If + Present Simple, S + will + V1 | 2nd: If + Past Simple, S + would + V1",
        uzbekMeaning: "Haqiqiy kelajak sharti (1-shart) va Tasavvuriy noaniq shart (2-shart)",
        explanation: "1-shart mayli kelajakda amalga oshishi mumkin bo'lgan real imkoniyatlar uchun: 'If it rains, I will stay home'. 2-shart mayli esa hozirgi yoki kelajakdagi real bo'lmagan, tasavvuriy vaziyatlar uchun: 'If I had a million dollars, I would travel the world'.",
        ieltsRelevance: "Speaking Part 3 va Writing Task 2 da turli xil ehtimollik va taxminlarni ifodalashda juda muhim.",
        academicExamples: [
            {
                sentence: "If governments subsidize green transport, urban congestion will decline.",
                translation: "Agar hukumatlar yashil transportni subsidiyalasa, shahar tirbandligi kamayadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If I will win the lottery, I would buy a house.",
                correct: "If I won the lottery, I would buy a house.",
                explanation: "'If' qismida 'will' yoki 'would' ishlatilmaydi; 2-shartda 'If + Past Simple' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "If renewable energy prices continue to fall, more industries _______ clean power.",
                options: ["will adopt", "would adopt", "adopted", "adopt"],
                correctAnswer: "will adopt",
                explanation: "1-shart maylining asosiy qismida 'will + V1' ishlatiladi."
            }
        ]
    },
    {
        id: "murphy_u40_relative_clauses",
        level: "B2",
        title: "Unit 30: Relative Clauses (who, which, that, whose)",
        category: "Complex Clauses (B2 Upper-Intermediate)",
        structure: "Defining: Noun + who/which/that + Clause | Non-defining: Noun, which/who + Clause,",
        uzbekMeaning: "Nisbiy aniqlovchi gaplar (Kimki..., Qaysiki... deb ma'lumot beruvchi bog'lovchilar)",
        explanation: "Odamlar uchun 'who/that', narsa va buyumlar uchun 'which/that', egalik uchun 'whose' qo'llaniladi: 'The woman who lives next door is a doctor'.",
        ieltsRelevance: "Murakkab gaplar tuzishda (Complex Sentence Formation) IELTS Writing GRA mezonida 7.0+ ball kafolati.",
        academicExamples: [
            {
                sentence: "Individuals who maintain active lifestyles exhibit lower rates of chronic disease.",
                translation: "Faol hayot tarzini saqlaydigan insonlar kamroq surunkali kasalliklarga chalinadilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The report who was published yesterday is important.",
                correct: "The report which was published yesterday is important.",
                explanation: "Buyumlar va hisobotlar uchun 'who' emas, 'which' yoki 'that' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Scholars _______ research focuses on environmental sustainability received international awards.",
                options: ["whose", "who", "which", "whom"],
                correctAnswer: "whose",
                explanation: "Egalik ma'nosida (tadqiqoti ekologiyaga qaratilgan olimlar) 'whose' qo'llaniladi."
            }
        ]
    },

    // ==========================================
    // ADVANCED ACADEMIC GRAMMAR (C1 BAND 7.5 - 9.0 ACADEMY)
    // ==========================================
    {
        id: "murphy_u33_inversion_emphasis",
        level: "C1",
        title: "Unit 33: Inversion for Emphasis (Not only did..., Seldom have...)",
        category: "Advanced Inversion (C1 Academy)",
        structure: "Negative Adverbial (Not only / Seldom / Rarely / Under no circumstances) + Auxiliary + Subject + Main Verb",
        uzbekMeaning: "Inversiya orqali urg'u berish (Nafaqat..., balki... / Kamdan-kam hollarda...)",
        explanation: "IELTS Band 8.0+ darajasida akademik inshoning ta'sirchanligini oshirish uchun inkor birikmalari gap boshiga chiqariladi va yordamchi fe'l egadan oldinga o'tadi.",
        ieltsRelevance: "IELTS Writing Task 2 argumentatsiyasida Grammatical Range and Accuracy mezonini maksimal qilish.",
        academicExamples: [
            {
                sentence: "Not only does renewable energy curtail greenhouse emissions, but it also creates sustainable employment.",
                translation: "Qayta tiklanadigan energiya nafaqat issiqxona gazlarini qisqartiradi, balki barqaror ish o'rinlarini ham yaratadi.",
                context: "Task 2"
            },
            {
                sentence: "Seldom have technological breakthroughs disrupted society as rapidly as artificial intelligence.",
                translation: "Kamdan-kam texnologik kashfiyotlar jamiyatni sun'iy intellekt kabi tez o'zgartirgan.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Not only renewable energy reduces pollution, but it also saves costs.",
                correct: "Not only does renewable energy reduce pollution, but it also saves costs.",
                explanation: "'Not only' gap boshida kelganda darhol 'does' yordamchi fe'li egadan oldinga o'tishi shart."
            }
        ],
        quizQuestions: [
            {
                question: "Rarely _______ such rapid transformation in consumer behavior.",
                options: ["have economists observed", "economists have observed", "economists observed", "have observed economists"],
                correctAnswer: "have economists observed",
                explanation: "'Rarely' bilan boshlangan inversiyada 'have' yordamchi fe'li egadan ('economists') oldinga chiqadi."
            }
        ]
    },
    {
        id: "murphy_u34_participle_clauses",
        level: "C1",
        title: "Unit 34: Participle Clauses (Active & Passive Reduction)",
        category: "Complex Sentence Synthesis (C1 Academy)",
        structure: "Active: Having + V3, Subject + Verb | Passive: Driven by / Convinced of + Noun, Subject + Verb",
        uzbekMeaning: "Sifatdoshli gap birikmalari (Qisqartirilgan murakkab ergash gaplar)",
        explanation: "Ikkita gapni bitta ravon akademik gapga birlashtirish: 'Because governments recognized the crisis, they acted' -> 'Recognizing the crisis, governments acted'.",
        ieltsRelevance: "Task 2 insholarining kirish va xulosa qismlarida professional akademik stil yaratadi.",
        academicExamples: [
            {
                sentence: "Having analyzed the statistical discrepancies, economists proposed comprehensive tax reforms.",
                translation: "Statistik tafovutlarni tahlil qilib chiqqach, iqtisodchilar keng qamrovli soliq islohotlarini taklif qildilar.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Walking into the room, the test papers were distributed by the teacher.",
                correct: "Walking into the room, the teacher distributed the test papers.",
                explanation: "Sifatdoshli birikmaning egasi asosiy gapning egasi bilan bir xil bo'lishi shart (Dangling modifier xatosi)."
            }
        ],
        quizQuestions: [
            {
                question: "_______ by escalating fossil fuel costs, automotive corporations accelerated electric vehicle production.",
                options: ["Compelled", "Compelling", "Having compelled", "Compel"],
                correctAnswer: "Compelled",
                explanation: "Majhul sifatdosh (Passiv) 'Compelled by...' (majbur qilingan holda) to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u35_cleft_sentences",
        level: "C1",
        title: "Unit 35: Cleft Sentences (What concerns scholars is..., It is X that...)",
        category: "Focus & Cohesion (C1 Academy)",
        structure: "What + Clause + is/was + Noun/Clause | It is/was + Focus + that + Clause",
        uzbekMeaning: "Ajratuvchi ta'kid gaplar (Olimlarni tashvishga solayotgan narsa bu... / Aynan X sababli...)",
        explanation: "Fikrning eng muhim qismini ajratib ko'rsatish uchun gapni ikkiga bo'lish (clefting): 'It is government intervention that will reverse environmental degradation'.",
        ieltsRelevance: "Task 2 ning asosiy argument nuqtasini ta'kidlashda eng kuchli Band 8.5+ sintaktik qurol.",
        academicExamples: [
            {
                sentence: "What distinguishes successful economies is their continuous investment in human capital.",
                translation: "Muvaffaqiyatli iqtisodiyotlarni ajratib turadigan jihat bu ularning inson kapitaliga doimiy investitsiya kiritishidir.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "What we need it is strict regulation.",
                correct: "What we need is strict regulation.",
                explanation: "'What we need' iborasidan keyin ortiqcha 'it' olmoshi qo'yilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "It is through comprehensive early education _______ long-term social mobility is achieved.",
                options: ["that", "which", "what", "where"],
                correctAnswer: "that",
                explanation: "'It is [Focus] that [Clause]' cleft strukturasida bog'lovchi 'that' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u36_academic_nominalisation",
        level: "C1",
        title: "Unit 36: Academic Nominalisation (Transforming Verbs into Nouns)",
        category: "Academic Register (C1 Academy)",
        structure: "Verb/Adjective Clause -> Formal Noun Phrase (e.g., 'Because populations migrate' -> 'The migration of populations')",
        uzbekMeaning: "Akademik nominalizatsiya (Oddiy fe'llarni yuqori ilmiy ot birikmalariga aylantirish)",
        explanation: "Akademik ingliz tilining eng muhim belgisi — otlashuv (Nominalisation). Oddiy so'zlashuv gaplarini rasmiy ilmiy ot birikmalariga aylantirish: 'Factories pollute water rapidly' -> 'The rapid contamination of water resources by industrial facilities'.",
        ieltsRelevance: "IELTS Writing Task 2 da Lexical Resource va GRA ballarini Band 8.0+ darajaga chiqarishning eng asosiy usuli.",
        academicExamples: [
            {
                sentence: "The rapid proliferation of digital infrastructure has fundamentally transformed commerce.",
                translation: "Raqamli infratuzilmaning tez kengayishi savdo-sotiqni tubdan o'zgartirdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Because people are consuming more energy, climate changes.",
                correct: "The escalating consumption of energy directly exacerbates climate change.",
                explanation: "Oddiy sabab gap o'rniga nominalizatsiya qilingan ega ('The escalating consumption...') qo'llash tavsiya etiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The _______ of digital healthcare platforms has streamlined patient consultations.",
                options: ["introduction", "introduce", "introducing", "introductory"],
                correctAnswer: "introduction",
                explanation: "'The [Noun] of...' strukturasida rasmiy ot shakli 'introduction' talab qilinadi."
            }
        ]
    },
    {
        id: "murphy_u37_inverted_conditionals",
        level: "C1",
        title: "Unit 37: Inverted Conditionals (Had we acted..., Were governments to...)",
        category: "Advanced Conditionals (C1 Academy)",
        structure: "Had + S + V3, S + would have + V3 | Were + S + to + V1, S + would + V1 | Should + S + V1, S + will + V1",
        uzbekMeaning: "Inversiyalashgan shart gaplar ('If' siz yuqori akademik shart tuzilmalari)",
        explanation: "IELTS Band 8.0+ Task 2 essaylarida 'If' so'zini tushirib qoldirib, inversiya orqali fikr ifodalash Grammatical Range and Accuracy (GRA) mezonini maksimal darajaga ko'taradi.",
        ieltsRelevance: "IELTS Writing Task 2 va Speaking Part 3 da gipotetik va o'tmishdagi yechimlarni ifodalashda qo'llaniladi.",
        academicExamples: [
            {
                sentence: "Had policymakers instituted early carbon taxation, global warming trajectories would have been significantly curtailed.",
                translation: "Agar qonun chiqaruvchilar uglerod solig'ini erta joriy qilganlarida, global isish sur'atlari sezilarli darajada qisqargan bo'lardi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "If had we invested more in education, poverty would decrease.",
                correct: "Had we invested more in education, poverty would have decreased.",
                explanation: "Inversiyada 'if' ishlatilmaydi, to'g'ridan-to'g'ri 'Had + Subject + V3' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ the government allocate greater funding to green infrastructure, urban air quality would improve drastically.",
                options: ["Were", "Had", "Should", "If were"],
                correctAnswer: "Were",
                explanation: "2-shart maylining inversiyasida 'Were + Subject + to + Verb' qo'llaniladi."
            }
        ]
    },
    {
        id: "murphy_u38_impersonal_reporting_passives",
        level: "C1",
        title: "Unit 38: Impersonal Reporting Passives (It is contended that..., X is estimated to...)",
        category: "Academic Hedging (C1 Academy)",
        structure: "It is + V3 (argued / maintained / contended / estimated) + that + Clause | Subject + is/are + V3 + to + V1",
        uzbekMeaning: "Xolis ilmiy fikr bildirish (Olimlar tomonidan ta'kidlanishicha..., deb hisoblanadi)",
        explanation: "Akademik inshoda shaxsiy fikrni subyektiv ('I think') emas, balki xolis va ishonchli akademik uslubda ifodalash uchun qo'llaniladi.",
        ieltsRelevance: "IELTS Writing Task 2 muqaddimasida va argumentlarni xolis keltirishda Band 8.0+ darajali vosita.",
        academicExamples: [
            {
                sentence: "It is widely contended that automation will displace low-skilled manual laborers over the coming decade.",
                translation: "Kelgusi o'n yil ichida avtomatlashtirish past malakali ishchilarni siqib chiqarishi keng ta'kidlanadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I think people believe that money brings happiness.",
                correct: "It is widely believed that financial security contributes significantly to overall well-being.",
                explanation: "Akademik inshoda 'I think' o'rniga 'It is widely believed that...' xolis strukturasi ma'qul."
            }
        ],
        quizQuestions: [
            {
                question: "It is widely _______ that early childhood bilingualism strengthens neuroplasticity.",
                options: ["acknowledged", "acknowledge", "acknowledging", "acknowledgement"],
                correctAnswer: "acknowledged",
                explanation: "'It is + V3 (past participle) + that' passiv ifodasida 'acknowledged' to'g'ri keladi."
            }
        ]
    },
    {
        id: "murphy_u39_advanced_concession",
        level: "C1",
        title: "Unit 39: Advanced Concession & Contrast (Notwithstanding..., Albeit...)",
        category: "Complex Argumentation (C1 Academy)",
        structure: "Notwithstanding + Noun Phrase, Clause | Adj + though/as + Subject + is, Clause | Albeit + Adjective",
        uzbekMeaning: "Yuqori darajadagi qarshilik va yon berish birikmalari (Garchi... bo'lsa-da, Shunga qaramay)",
        explanation: "Oddiy 'Although/But' o'rniga 'Notwithstanding', 'Albeit', 'Adjective + though it may be' kabi tuzilmalarni qo'llash insho ravonligini Band 8.5 darajaga olib chiqadi.",
        ieltsRelevance: "IELTS Task 2 da ikki xil qarama-qarshi nuqtai nazarni muhokama qilishda (Discuss both views) hal qiluvchi ahamiyatga ega.",
        academicExamples: [
            {
                sentence: "Notwithstanding the initial capital expenditure, space exploration yields invaluable meteorological advancements.",
                translation: "Dastlabki yirik xarajatlarga qaramay, fazoni o'rganish meteorologiyada bebaho yutuqlarni taqdim etadi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Although despite the high costs, the plan succeeded.",
                correct: "Notwithstanding the high costs, the plan succeeded.",
                explanation: "'Although' va 'despite' birgalikda ishlatilmaydi; uning o'rniga bitta 'Notwithstanding + noun' yetarli."
            }
        ],
        quizQuestions: [
            {
                question: "_______ the substantial economic benefits of tourism, environmental degradation remains a pressing concern.",
                options: ["Notwithstanding", "Although", "Whereas", "While"],
                correctAnswer: "Notwithstanding",
                explanation: "Ot birikmasi ('the substantial economic benefits') oldidan 'Notwithstanding' keladi."
            }
        ]
    },
    {
        id: "murphy_u40_subjunctive_mood",
        level: "C1",
        title: "Unit 40: Subjunctive Mood & Formal Mandates (It is imperative that... be done)",
        category: "Formal Proposals (C1 Academy)",
        structure: "It is essential / imperative / crucial / vital + that + Subject + [Base Verb / be + V3]",
        uzbekMeaning: "Subyuktiv mayl (Rasmiy yechimlar: ...qilinishi o'ta muhim/shart)",
        explanation: "Davlat va jamiyat yechimlarini taklif qilishda grammatik fe'l asosi (base form) o'zgarmaydi: 'It is imperative that the government implement new legislation'.",
        ieltsRelevance: "Task 2 insholarining Problem-Solution yoki Recommendation qismlarida eng nufuzli sintaksis hisoblanadi.",
        academicExamples: [
            {
                sentence: "It is imperative that international organizations mandate stricter environmental auditing protocols.",
                translation: "Xalqaro tashkilotlar qat'iyroq ekologik audit protokollarini majburiy qilib qo'yishi shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It is vital that every citizen pays taxes.",
                correct: "It is vital that every citizen pay taxes.",
                explanation: "Subyuktiv maylda 'that' dan keyingi fe'l 3-shaxsda ham 's' qo'shimchasini olmaydi (Base form: pay)."
            }
        ],
        quizQuestions: [
            {
                question: "It is essential that every applicant _______ the prerequisite qualifications before enrolling.",
                options: ["satisfy", "satisfies", "satisfied", "is satisfying"],
                correctAnswer: "satisfy",
                explanation: "'It is essential that...' subyuktiv formulasida fe'l asosi (satisfy) hech qanday qo'shimchasiz keladi."
            }
        ]
    }
];
