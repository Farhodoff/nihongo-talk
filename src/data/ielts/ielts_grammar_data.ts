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
    // =========================================================================
    // RAYMOND MURPHY: ESSENTIAL GRAMMAR IN USE — COMPLETE A1 ELEMENTARY MASTERY
    // =========================================================================

    // --- SECTION 1: TO BE & ESSENTIAL SENTENCES ---
    {
        id: "murphy_u01_am_is_are",
        level: "A1",
        title: "Unit 1: am / is / are (To Be — Darak Gaplar)",
        category: "Essential To Be (A1)",
        structure: "I am (I'm) | He/She/It is (He's/She's/It's) | We/You/They are (We're/You're/They're)",
        uzbekMeaning: "To Be fe'li — bo'lmoq / hisoblanmoq (Ism, yosh, kasb, millat va sifatlarni aytish)",
        explanation: "Essential Grammar in Use 1-qoidasi: Ingliz tilida har bir to'liq gapda albatta fe'l bo'lishi shart. O'zbek tilida 'Men talabaman' deyilganda harakat sezilmaydi, ammo ingliz tilida 'I am a student' deb 'am' bog'lovchi fe'li qo'yilishi majburiydir. To Be fe'li kishining kasbi (She is a doctor), yoshi (I am 24 years old), his-tuyg'usi (He is very happy), millati (They are Uzbek) va joylashuvini (We are at home) bildirishda qo'llanadi.",
        ieltsRelevance: "Speaking Part 1 da o'zingizni, oilangizni, mutaxassisligingizni va yashash shahringizni tanishtirishning eng asosiy poydevoridir.",
        academicExamples: [
            {
                sentence: "I am a university student majoring in software engineering.",
                translation: "Men dasturiy muhandislik yo'nalishida tahsil olayotgan universitet talabasiman.",
                context: "Speaking"
            },
            {
                sentence: "English is a global language of international communication and science.",
                translation: "Ingliz tili xalqaro muloqot va ilm-fanning global tili hisoblanadi.",
                context: "Task 2"
            },
            {
                sentence: "My hometown is Samarkand, which is famous for its ancient architectural monuments.",
                translation: "Mening ona shahrim Samarqand bo'lib, u o'zining qadimiy me'moriy obidalari bilan mashhurdir.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I student from Uzbekistan.",
                correct: "I am a student from Uzbekistan.",
                explanation: "Ingliz tilida ega va ot o'rtasida 'to be' fe'li (am) hech qachon tushirib qoldirilmaydi."
            },
            {
                incorrect: "He are very tired today.",
                correct: "He is very tired today.",
                explanation: "He, She, It 3-shaxs birlik olmoshlari bilan 'is' ishlatiladi ('are' emas)."
            }
        ],
        quizQuestions: [
            {
                question: "My brother _______ 25 years old and he _______ an architect in London.",
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
        category: "Essential To Be (A1)",
        structure: "Inkor: S + am/is/are + not | Savol: Am/Is/Are + Subject + ...? | Qisqa javob: Yes, I am. / No, he isn't.",
        uzbekMeaning: "To Be da inkor va savol tuzish (Siz talabamisiz? — Ha / Yo'q, men charchamadim)",
        explanation: "Essential Grammar in Use 2-qoidasi: Savol tuzishda 'am/is/are' egadan oldinga o'tadi: 'Is your father a doctor?' / 'Are you tired?'. Maxsus so'roq so'zlari (What, Where, Who, Why, How) gapning eng boshida keladi: 'Where are you from?' / 'How old is your brother?'. Inkor shaklida esa 'not' qo'shiladi: 'I am not interested in politics' / 'The weather isn't cold today'. Qisqa javobda faqat to be ishlatiladi: 'Yes, I am' (NOT Yes, I'm).",
        ieltsRelevance: "Speaking intervyusida imtihon oluvchining savollariga aniq va to'g'ri grammatik javob qaytarish uchun kerak.",
        academicExamples: [
            {
                sentence: "Why is quality education essential for national economic development?",
                translation: "Nima uchun sifatli ta'lim milliy iqtisodiy rivojlanish uchun o'ta muhim hisoblanadi?",
                context: "Task 2"
            },
            {
                sentence: "Are online learning platforms more flexible than traditional classrooms?",
                translation: "Onlayn ta'lim platformalari an'anaviy darsxonalardan ko'ra moslashuvchanroqmi?",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Where you are from?",
                correct: "Where are you from?",
                explanation: "Maxsus savollarda 'Where' dan keyin darhol 'are' yordamchi fe'li egadan oldinga chiqadi."
            },
            {
                incorrect: "No, I'm not agree with this statement.",
                correct: "No, I don't agree with this statement. / I am not ready.",
                explanation: "'Agree' (rozi bo'lmoq) bu harakat fe'li, shuning uchun 'don't agree' deyiladi; sifatlar bilan esa 'I am not' ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ your parents at home right now?",
                options: ["Are", "Is", "Do", "Does"],
                correctAnswer: "Are",
                explanation: "'Your parents' (ota-onangiz) ko'plikda bo'lgani sababli savolda 'Are' oldinga chiqadi."
            },
            {
                question: "'Is it cold outside?' — 'No, _______.'",
                options: ["it isn't", "it not", "it doesn't", "is not"],
                correctAnswer: "it isn't",
                explanation: "To Be so'rog'iga qisqa inkor javobi: 'No, it isn't' yoki 'No, it's not'."
            }
        ]
    },
    {
        id: "murphy_u36_there_is_there_are",
        level: "A1",
        title: "Unit 3: there is / there are (Mavjudlik va Borlik)",
        category: "Essential Sentences (A1)",
        structure: "Birlik: There is a/an + Noun | Ko'plik: There are + Nouns | Inkor: There isn't / There aren't",
        uzbekMeaning: "Biror joyda nimadir borligini aytish (Shaharda katta bog' bor / Maktabda 500 ta o'quvchi bor)",
        explanation: "Essential Grammar in Use 36-qoidasi: 'There is/are' biror joyda biror narsaning borligini yoki mavjudligini birinchi marta aytishda ishlatiladi. Birlikdagi sanaladigan otlar oldidan 'There is a book on the table', ko'plikdagi otlar uchun 'There are many students in the library' deyiladi. Sanalmaydigan otlar (water, money, pollution) bilan doim 'There is' keladi: 'There is too much noise'.",
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
                incorrect: "In my city have many historical monuments.",
                correct: "There are many historical monuments in my city.",
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
    {
        id: "murphy_u38_it_pronoun",
        level: "A1",
        title: "Unit 4: It ... (Vaqt, Ob-havo, Masofa va Holat)",
        category: "Essential Sentences (A1)",
        structure: "It is + Time (It's 10:30) | It is + Weather (It's raining / It's cold) | It is + Distance (It's 5 km to...)",
        uzbekMeaning: "Egasi aniq bo'lmagan gaplarda 'It' dan foydalanish (Soat 10 bo'ldi / Yomg'ir yoqyapti / Uzoq)",
        explanation: "Essential Grammar in Use 38-qoidasi: Ingliz tilida egani bo'sh qoldirish mumkin emas. Shuning uchun vaqtni aytganda (It is 8 o'clock), sanani aytganda (It is Monday), ob-havoni aytganda (It is sunny / It is snowing) va masofani aytganda (It is 10 miles to the airport) 'It' soxta egasi (dummy subject) qo'yiladi.",
        ieltsRelevance: "Writing va Speakingda vaziyat, vaqt va masofani to'g'ri kiritish uchun asosiy sintaksis.",
        academicExamples: [
            {
                sentence: "It is crucial to acknowledge the long-term consequences of deforestation.",
                translation: "O'rmonlarning kesilishi keltirib chiqaradigan uzoq muddatli oqibatlarni tan olish o'ta muhimdir.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Is raining today.",
                correct: "It is raining today.",
                explanation: "Ingliz tilida ob-havo gaplarida 'It' egasi tushirib qoldirilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "_______ late now, and _______ a long way to walk home.",
                options: ["It is / it is", "There is / it is", "It is / there is", "There is / there is"],
                correctAnswer: "It is / it is",
                explanation: "Vaqt (It is late) va masofa (it is a long way) uchun 'It is' ishlatiladi."
            }
        ]
    },

    // --- SECTION 2: PRESENT TENSES (CONTINUOUS & SIMPLE) ---
    {
        id: "murphy_u03_present_continuous",
        level: "A1",
        title: "Unit 5: I am doing (Present Continuous — Hozirgi Davomli Zamon)",
        category: "Present Tenses (A1)",
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
        title: "Unit 6: Are you doing? (Present Continuous Savollari)",
        category: "Present Tenses (A1)",
        structure: "Am/Is/Are + Subject + V-ing? | Question Word (What/Where/Why) + am/is/are + Subject + V-ing?",
        uzbekMeaning: "Hozirgi davomli zamonda savollar (Nima qilyapsan? Qayerga ketyapti?)",
        explanation: "Essential Grammar in Use 4-qoidasi: So'roq shaklida yordamchi fe'l (am/is/are) egadan oldinga o'tadi: 'Are you feeling okay?' / 'What are you reading?'. Qisqa javoblar: 'Yes, I am' / 'No, I am not'. Maxsus so'roq so'zlari eng oldinda keladi: 'Where is she going?'.",
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
        title: "Unit 7: I do / work / like etc. (Present Simple — Hozirgi Oddiy Zamon)",
        category: "Present Tenses (A1)",
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
        title: "Unit 8: I don't ... (Present Simple Inkor Shakli)",
        category: "Present Tenses (A1)",
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
        title: "Unit 9: Do you ... ? (Present Simple Savollari)",
        category: "Present Tenses (A1)",
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
        title: "Unit 10: I am doing and I do (Continuous va Simple Taqqoslash & Statik Fe'llar)",
        category: "Present Tenses (A1)",
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
        title: "Unit 11: I have ... / I've got ... (Egalik Ifodalash)",
        category: "Essential Verbs (A1)",
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

    // --- SECTION 3: PAST TENSES ---
    {
        id: "murphy_u10_was_were",
        level: "A1",
        title: "Unit 12: was / were (To Be ning O'tgan Zamoni)",
        category: "Past Tenses (A1)",
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
        title: "Unit 13: worked / got / went etc. (Past Simple — O'tgan Oddiy Zamon)",
        category: "Past Tenses (A1)",
        structure: "To'g'ri fe'llar: V + -ed (worked, cleaned) | Noto'g'ri fe'llar: V2 (went, saw, bought)",
        uzbekMeaning: "O'tgan zamonda aniq vaqtda sodir bo'lib tugagan harakat",
        explanation: "Essential Grammar in Use 11-qoidasi: Past Simple o'tmishda sodir bo'lgan va butunlay tugagan harakatlar uchun ishlatiladi. To'g'ri fe'llarga -ed qo'shiladi: work -> worked, live -> lived, study -> studied. Noto'g'ri fe'llar maxsus 2-shaklga ega: go -> went, see -> saw, buy -> bought, have -> had, take -> took.",
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
        title: "Unit 14: I didn't ... Did you ... ? (Past Simple Inkor va Savol)",
        category: "Past Tenses (A1)",
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
        title: "Unit 15: I was doing (Past Continuous — O'tgan Davomli Zamon)",
        category: "Past Tenses (A1)",
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
        title: "Unit 16: I was doing and I did (Past Continuous va Past Simple Kesishuvi)",
        category: "Past Tenses (A1)",
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

    // --- SECTION 4: PRESENT PERFECT ---
    {
        id: "murphy_u15_present_perfect_1",
        level: "A1",
        title: "Unit 17: I have done (Present Perfect 1 — Hozirgi Tugallangan Zamon)",
        category: "Present Perfect (A1)",
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
        title: "Unit 18: I've just ... I've already ... I haven't ... yet (Present Perfect 2)",
        category: "Present Perfect (A1)",
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
        title: "Unit 19: Have you ever ... ? (Present Perfect 3 — Hayotiy Tajriba)",
        category: "Present Perfect (A1)",
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
        title: "Unit 20: How long have you ... ? (Present Perfect 4 — Davomiylik)",
        category: "Present Perfect (A1)",
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
        title: "Unit 21: for / since / ago (Vaqt Ko'rsatkichlari Farqi)",
        category: "Time Expressions (A1)",
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
        title: "Unit 22: I have done and I did (Present Perfect va Past Simple Taqqoslash)",
        category: "Tense Contrast (A1)",
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

    // --- SECTION 5: MODALS & BASIC SENTENCE EXPANSION (A1) ---
    {
        id: "murphy_u31_can_could",
        level: "A1",
        title: "Unit 23: can / could (Qobiliyat va Iltimoslar)",
        category: "Modal Verbs (A1)",
        structure: "S + can + V1 (Hozirgi qobiliyat) | S + could + V1 (O'tgan qobiliyat) | Can/Could you + V1? (Iltimos)",
        uzbekMeaning: "Qo'ldan kelmoq, qila olmoq va xushmuomala iltimos qilish",
        explanation: "Essential Grammar in Use 31-qoidasi: Hozirgi qobiliyat: 'I can speak three languages' / 'Can you swim?'. O'tgan zamondagi qobiliyat: 'When I was young, I could run very fast'. Xushmuomalalik bilan iltimos qilish: 'Could you please open the door?'. Inkor shakli: cannot (can't) va couldn't.",
        ieltsRelevance: "Speaking Part 1 va 2 da o'z ko'nikmalaringiz va imkoniyatlaringizni erkin aytish vositasi.",
        academicExamples: [
            {
                sentence: "Advanced technologies can dramatically enhance diagnostic precision in healthcare.",
                translation: "Ilg'or texnologiyalar sog'liqni saqlashda diagnostika aniqligini keskin oshira oladi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I can to play the piano.",
                correct: "I can play the piano.",
                explanation: "'Can' modal fe'lidan keyin 'to' zarrachasi qo'yilmaydi (to'g'ridan-to'g'ri fe'l asosi V1 keladi)."
            }
        ],
        quizQuestions: [
            {
                question: "She _______ speak English fluently now, but three years ago she _______ barely introduce herself.",
                options: ["can / could", "could / can", "can / can", "could / could"],
                correctAnswer: "can / could",
                explanation: "Hozirgi qobiliyatga 'can', 3 yil oldingi o'tmish qobiliyatiga 'could'."
            }
        ]
    },
    {
        id: "murphy_u33_should",
        level: "A1",
        title: "Unit 24: should (Maslahat va Tavsiya)",
        category: "Modal Verbs (A1)",
        structure: "S + should + V1 (Qilish tavsiya etiladi) | S + shouldn't + V1 (Qilmaslik kerak)",
        uzbekMeaning: "...qilishingiz kerak, maslahat beraman (Siz dam olishingiz kerak)",
        explanation: "Essential Grammar in Use 33-qoidasi: Biror narsani qilish to'g'ri, foydali yoki oqilona deb hisoblanganda maslahat berish uchun ishlatiladi: 'You look exhausted. You should go to sleep' / 'You shouldn't eat so much junk food'.",
        ieltsRelevance: "IELTS Writing Task 2 yechimlar qismida davlat va insonlarga tavsiyalar berishda qo'llanadi.",
        academicExamples: [
            {
                sentence: "Governments should allocate more resources to public healthcare and education.",
                translation: "Hukumatlar sog'liqni saqlash va ta'lim sohalariga ko'proq mablag' ajratishlari kerak.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "You should to see a specialist.",
                correct: "You should see a specialist.",
                explanation: "'Should' modal fe'lidan keyin 'to' ishlatilmaydi."
            }
        ],
        quizQuestions: [
            {
                question: "Students _______ review grammar rules regularly to avoid systematic errors.",
                options: ["should", "should to", "ought", "must to"],
                correctAnswer: "should",
                explanation: "Tavsiya bildirishda 'should + V1' to'g'ri formuladir."
            }
        ]
    },
    {
        id: "murphy_u34_have_to",
        level: "A1",
        title: "Unit 25: I have to ... (Majburiyat va Shartlik)",
        category: "Modal Verbs (A1)",
        structure: "I/We/You/They have to + V1 | He/She/It has to + V1 | Inkor: don't/doesn't have to + V1",
        uzbekMeaning: "Majbur bo'lmoq / Shart bo'lmoq (Men erta turishim shart)",
        explanation: "Essential Grammar in Use 34-qoidasi: Qonun-qoidalar yoki tashqi vaziyat taqozosi bilan biror narsani bajarish majburiy bo'lganda: 'I have to get up at 7 AM for work' / 'In Britain, you have to drive on the left'. Inkorida 'don't have to' = 'qilish shart emas, ixtiyoriy' ma'nosini bildiradi.",
        ieltsRelevance: "Speaking va Writingda qonuniy majburiyatlar va shartlarni ifodalash.",
        academicExamples: [
            {
                sentence: "Applicants have to submit certified academic transcripts before enrollment.",
                translation: "Abituriyentlar qabuldan oldin tasdiqlangan akademik diplomlarni topshirishlari shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "She have to work on Saturdays.",
                correct: "She has to work on Saturdays.",
                explanation: "'She' 3-shaxs birlik uchun 'has to' qo'llaniladi."
            }
        ],
        quizQuestions: [
            {
                question: "Tomorrow is Sunday, so I _______ wake up early.",
                options: ["don't have to", "mustn't", "haven't to", "am not having to"],
                correctAnswer: "don't have to",
                explanation: "Ertaga yakshanba, shuning uchun erta turishim shart emas (ixtiyoriy: don't have to)."
            }
        ]
    },
    {
        id: "murphy_u35_would_like",
        level: "A1",
        title: "Unit 26: Would you like ... ? / I'd like ... (Xushmuomala Taklif va Istak)",
        category: "Polite Expressions (A1)",
        structure: "Would you like + Noun / to + V1? | I would like (I'd like) + Noun / to + V1",
        uzbekMeaning: "Xohlarmidingiz? / Istagan bo'lardim (Restoranda, mehmonda va rasmiy muloqotda)",
        explanation: "Essential Grammar in Use 35-qoidasi: 'Do you want...?' ga qaraganda ancha xushmuomala va odobli shakl: 'Would you like some tea?' / 'I'd like a cup of coffee, please' / 'Would you like to come to the party tonight?'.",
        ieltsRelevance: "Speaking Part 1 va Part 2 da kelajakdagi orzu va niyatlaringizni xushmuomala aytish.",
        academicExamples: [
            {
                sentence: "I would like to pursue a postgraduate master's degree in sustainable urban planning.",
                translation: "Men barqaror shaharsozlik yo'nalishida magistratura darajasida o'qishni istagan bo'lardim.",
                context: "Speaking"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I would like go to London.",
                correct: "I would like to go to London.",
                explanation: "'Would like' dan keyin fe'l kelsa 'to' zarrachasi (to go) qo'yiladi."
            }
        ],
        quizQuestions: [
            {
                question: "'_______ a cup of tea?' — 'Yes, please. I'd love one.'",
                options: ["Would you like", "Do you like", "Are you liking", "Will you like"],
                correctAnswer: "Would you like",
                explanation: "Xushmuomala taklif bildirishda 'Would you like...' formulasi qo'llaniladi."
            }
        ]
    },

    // --- SECTION 6: PRONOUNS, NOUNS & ARTICLES (A1) ---
    {
        id: "murphy_u58_pronouns",
        level: "A1",
        title: "Unit 27: I/me, he/him, they/them etc. (Kishilik va To'ldiruvchi Olmoshlar)",
        category: "Pronouns & Nouns (A1)",
        structure: "Ega: I / He / She / It / We / You / They ➔ To'ldiruvchi: me / him / her / it / us / you / them",
        uzbekMeaning: "Meni/Menga (me), Uni/Unga (him/her), Ularni/Ularga (them)",
        explanation: "Essential Grammar in Use 58-qoidasi: Fe'ldan oldin ega olmoshlari (I know Tom), fe'ldan yoki predlogdan keyin to'ldiruvchi olmoshlar (Tom knows me / Listen to him / Look at them) ishlatiladi.",
        ieltsRelevance: "Gapda olmoshlarni chalkashtirmasdan to'g'ri bog'lash va takroriylikni yo'qotish.",
        academicExamples: [
            {
                sentence: "The university offered them comprehensive academic scholarships.",
                translation: "Universitet ularga to'liq akademik stipendiyalarni taqdim etdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Please give the book to I.",
                correct: "Please give the book to me.",
                explanation: "Predlogdan ('to') keyin to'ldiruvchi olmosh 'me' keladi."
            }
        ],
        quizQuestions: [
            {
                question: "Do you know that professor? Yes, I work with _______ on research projects.",
                options: ["him", "he", "his", "himself"],
                correctAnswer: "him",
                explanation: "'with' predlogidan keyin to'ldiruvchi olmosh 'him' qo'yiladi."
            }
        ]
    },
    {
        id: "murphy_u59_possessives",
        level: "A1",
        title: "Unit 28: my/his/their & mine/yours (Egalik Sifatlari va Olmoshlari)",
        category: "Pronouns & Nouns (A1)",
        structure: "Egalik sifati (+ Ot): my car / his book | Mustaqil egalik olmoshi: mine / yours / his / hers / ours / theirs",
        uzbekMeaning: "Mening/Meningki (my/mine), Uning/Uningki (his/hers), Ularning/Ularniki (their/theirs)",
        explanation: "Essential Grammar in Use 59-60 qoidasi: Agar orqasidan ot kelsa: 'This is my bag'. Agar ot aytilmasa: 'This bag is mine' / 'It's not your pen, it's hers'.",
        ieltsRelevance: "Speakingda mulk va shaxsiy munosabatlarni aniq ifodalash.",
        academicExamples: [
            {
                sentence: "Each nation must fulfill its international environmental commitments.",
                translation: "Har bir davlat o'zining xalqaro ekologik majburiyatlarini bajarishi shart.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This laptop is my.",
                correct: "This laptop is mine. / This is my laptop.",
                explanation: "Ot bo'lmaganda 'mine' mustaqil egalik olmoshi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Is this notebook _______ or is it _______?",
                options: ["yours / mine", "your / my", "yours / my", "your / mine"],
                correctAnswer: "yours / mine",
                explanation: "Ot qo'llanilmagani uchun mustaqil 'yours' va 'mine' shakllari tanlanadi."
            }
        ]
    },
    {
        id: "murphy_u64_a_an_the",
        level: "A1",
        title: "Unit 29: a / an va the (Artikllar Asoslari)",
        category: "Articles & Nouns (A1)",
        structure: "A + Undosh tovush (a car, a university) | AN + Unli tovush (an apple, an hour) | THE + Aniq/Yagona narsa (the sun, the world)",
        uzbekMeaning: "Noaniq (a/an) va Aniq (the) artikllarning asosiy qo'llanilishi",
        explanation: "Essential Grammar in Use 64-68 qoidasi: 1) Biror narsa haqida birinchi marta gapirganda yoki u har qanday bittasi bo'lsa: 'I bought a laptop'. 2) Agar suhbatdoshga qaysi biri ekanligi aniq bo'lsa yoki dunyoda yagona bo'lsa: 'The laptop is very fast' / 'The earth revolves around the sun'.",
        ieltsRelevance: "IELTS Writingda eng ko'p ball olib qo'yadigan mayda xatoliklar artikllardan kelib chiqadi.",
        academicExamples: [
            {
                sentence: "The internet has created an unprecedented platform for global knowledge exchange.",
                translation: "Internet global bilim almashinuvi uchun misli ko'rilmagan platforma yaratdi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I waited for a hour at the station.",
                correct: "I waited for an hour at the station.",
                explanation: "'Hour' so'zining 'h' harfi o'qilmaydi, tovush unli (/aʊər/) bo'lgani uchun 'an hour' deyiladi."
            }
        ],
        quizQuestions: [
            {
                question: "She is _______ university student and lives in _______ center of the city.",
                options: ["a / the", "an / the", "a / a", "an / a"],
                correctAnswer: "a / the",
                explanation: "'University' (/juː.../) undosh tovush bilan boshlangani uchun 'a university', shahar markazi aniq bo'lgani uchun 'the center'."
            }
        ]
    },
    {
        id: "murphy_u73_this_that_these_those",
        level: "A1",
        title: "Unit 30: this / that / these / those (Ko'rsatish Olmoshlari)",
        category: "Articles & Nouns (A1)",
        structure: "Yaqin: This (birlik) / These (ko'plik) | Uzoq: That (birlik) / Those (ko'plik)",
        uzbekMeaning: "Bu / Bular (This/These) va Anavi / Anavilar (That/Those)",
        explanation: "Essential Grammar in Use 73-qoidasi: Fazoda yoki vaqtda yaqin bo'lgan birlik narsa uchun 'this picture', ko'plik uchun 'these pictures'. Uzoq bo'lgan birlik uchun 'that car', ko'plik uchun 'those cars' ishlatiladi.",
        ieltsRelevance: "Writing Task 1 da grafik ko'rsatkichlarini taqqoslashda va ko'rsatishda qo'llanadi.",
        academicExamples: [
            {
                sentence: "These statistical figures highlight a clear upward trajectory in clean energy adoption.",
                translation: "Ushbu statistik raqamlar toza energiyani o'zlashtirishdagi aniq o'sish traektoriyasini ko'rsatadi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This people are waiting in line.",
                correct: "These people are waiting in line.",
                explanation: "'People' ko'plik ot bo'lgani sababli 'these' ko'rsatish olmoshi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "Do you remember _______ wonderful summer vacation we had in Italy?",
                options: ["that", "this", "these", "those"],
                correctAnswer: "that",
                explanation: "O'tmishdagi uzoq xotirani ko'rsatishda birlik 'that' to'g'ri keladi."
            }
        ]
    },

    // --- SECTION 7: ADJECTIVES, ADVERBS & PREPOSITIONS (A1) ---
    {
        id: "murphy_u86_comparatives",
        level: "A1",
        title: "Unit 31: old/older, expensive / more expensive (Sifat Darajalari — Qiyosiy)",
        category: "Adjectives & Adverbs (A1)",
        structure: "Qisqa sifat: Adj + -er + THAN (faster than, cheaper than) | Uzun sifat: MORE + Adj + THAN (more expensive than)",
        uzbekMeaning: "...roq, nisbatan ...roq (Bu mashina anavisidan tezroq / Qimmatroq)",
        explanation: "Essential Grammar in Use 86-87 qoidasi: 1-2 bo'g'inli qisqa sifatlarga '-er' qo'shiladi: fast -> faster, cheap -> cheaper, easy -> easier. 3 va undan ko'p bo'g'inli uzun sifatlar oldiga 'more' qo'yiladi: more expensive, more interesting. Noto'g'ri sifatlar: good -> better, bad -> worse, far -> further.",
        ieltsRelevance: "Writing Task 1 grafiklarida ikki yoki undan ortiq ko'rsatkichlarni taqqoslashning 100% zaruriy qoidasi.",
        academicExamples: [
            {
                sentence: "Solar power generation became significantly cheaper than fossil fuels by 2020.",
                translation: "Quyosh energiyasini ishlab chiqarish 2020 yilga kelib qazilma yoqilg'ilardan sezilarli darajada arzonroq bo'ldi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "This method is more easier than the previous one.",
                correct: "This method is easier than the previous one.",
                explanation: "Qisqa sifatlarda bir vaqtning o'zida 'more' va '-er' qo'llanilmaydi (faqat 'easier')."
            }
        ],
        quizQuestions: [
            {
                question: "Living in a rural area is often _______ and _______ than residing in a metropolis.",
                options: ["cheaper / quieter", "more cheap / more quiet", "cheaper / more quiet", "more cheaper / quieter"],
                correctAnswer: "cheaper / quieter",
                explanation: "Qisqa sifatlar 'cheap' va 'quiet' qiyosiy darajada 'cheaper' va 'quieter' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u89_superlatives",
        level: "A1",
        title: "Unit 32: the oldest / the most expensive (Sifat Darajalari — Orttirma)",
        category: "Adjectives & Adverbs (A1)",
        structure: "THE + Adj + -est (the fastest, the cheapest) | THE MOST + Adj (the most expensive, the most popular)",
        uzbekMeaning: "Eng ... (Eng tezi, Eng qimmati, Eng mashhuri)",
        explanation: "Essential Grammar in Use 89-qoidasi: Guruh ichida eng yuqori darajani aytganda orttirma daraja ishlatiladi va doim 'THE' artikli qo'yiladi: the highest, the most significant. Noto'g'ri sifatlar: good -> the best, bad -> the worst.",
        ieltsRelevance: "Writing Task 1 da eng yuqori (peak) nuqtalarni bayon qilishda asosiy vosita.",
        academicExamples: [
            {
                sentence: "The manufacturing sector recorded the highest volume of employment in 2018.",
                translation: "Ishlab chiqarish sektori 2018 yilda bandlikning eng yuqori hajmini qayd etdi.",
                context: "Task 1"
            }
        ],
        commonMistakes: [
            {
                incorrect: "It was most difficult exam of my life.",
                correct: "It was the most difficult exam of my life.",
                explanation: "Orttirma daraja oldidan doim 'the' artikli qo'yilishi shart ('the most difficult')."
            }
        ],
        quizQuestions: [
            {
                question: "What is _______ mountain in the world?",
                options: ["the highest", "highest", "the most high", "the most highest"],
                correctAnswer: "the highest",
                explanation: "'High' qisqa sifati orttirma darajada 'the highest' bo'ladi."
            }
        ]
    },
    {
        id: "murphy_u96_prepositions_time",
        level: "A1",
        title: "Unit 33: at 8 o'clock, on Monday, in April (Vaqt Predloglari: at, on, in)",
        category: "Prepositions (A1)",
        structure: "AT + Aniq soat/bayram (at 5 PM, at midnight, at weekend) | ON + Kunlar/Sanalar (on Monday, on 15th May) | IN + Oylar/Yillar/Fasllar (in 2020, in summer, in April)",
        uzbekMeaning: "...da vaqt predloglarining to'g'ri ishlatilishi",
        explanation: "Essential Grammar in Use 96-qoidasi: 1) 'AT' — aniq soat vaqtlari (at 8:30), tun (at night), dam olish kunlari (at the weekend). 2) 'ON' — haftaning kunlari (on Friday), aniq sanalar (on 1st September). 3) 'IN' — uzun vaqt oraliqlari: oylar (in June), yillar (in 2025), fasllar (in winter), asrlar (in the 21st century).",
        ieltsRelevance: "Task 1 da sanalar va yillarni kiritishda xato qilmaslikning asosi.",
        academicExamples: [
            {
                sentence: "The global initiative was officially inaugurated in 2015 on World Environment Day.",
                translation: "Global tashabbus 2015 yilda (in 2015) Butunjahon atrof-muhit kunida (on World Environment Day) rasman boshlandi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "The conference will start in Monday at 9 AM.",
                correct: "The conference will start on Monday at 9 AM.",
                explanation: "Hafta kunlari uchun 'in' emas, 'on' predlogi ishlatiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The academic semester begins _______ September _______ Monday morning.",
                options: ["in / on", "on / in", "at / on", "in / at"],
                correctAnswer: "in / on",
                explanation: "Oy nomi uchun 'in September', hafta kuni uchun 'on Monday morning'."
            }
        ]
    },
    {
        id: "murphy_u99_prepositions_place",
        level: "A1",
        title: "Unit 34: in / at / on (Joy Predloglari)",
        category: "Prepositions (A1)",
        structure: "IN + Ichida/Shahar/Mamlakat (in a room, in London, in Uzbekistan) | AT + Aniq nuqta/Bino (at the bus stop, at home, at work) | ON + Sirtida/Ko'chada (on the table, on the wall, on Oxford Street)",
        uzbekMeaning: "Joy va makon predloglari (...ichida, ...da, ...ustida)",
        explanation: "Essential Grammar in Use 99-qoidasi: 1) 'IN' — 3D bo'shliq yoki chegaralangan hudud: in a garden, in a box, in France. 2) 'AT' — aniq nuqta yoki faoliyat joyi: at the station, at the door, at school. 3) 'ON' — tekislik ustida: on the floor, on the ceiling, on the left.",
        ieltsRelevance: "Speaking Part 1 da o'z joylashuvingiz va bino-inshootlarni to'g'ri tasvirlash.",
        academicExamples: [
            {
                sentence: "The primary headquarters are located in Geneva on the shores of Lake Geneva.",
                translation: "Asosiy bosh qarorgoh Jenevada (in Geneva) Jeneva ko'li bo'yida (on the shores) joylashgan.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "I am studying in university at Tashkent.",
                correct: "I am studying at university in Tashkent.",
                explanation: "Universitet faoliyat joyi sifatida 'at university', shahar hududi esa 'in Tashkent'."
            }
        ],
        quizQuestions: [
            {
                question: "We arrived _______ the airport and waited _______ the departure lounge.",
                options: ["at / in", "in / on", "on / at", "at / at"],
                correctAnswer: "at / in",
                explanation: "Aeroport nuqtasi 'at the airport', zalning ichi esa 'in the lounge'."
            }
        ]
    },
    {
        id: "murphy_u109_conjunctions",
        level: "A1",
        title: "Unit 35: and, but, or, so, because (Asosiy Bog'lovchilar)",
        category: "Sentence Builders (A1)",
        structure: "AND (qo'shimcha) | BUT (qarama-qarshilik) | OR (tanlov) | SO (natija) | BECAUSE (sabab)",
        uzbekMeaning: "Va (and), Ammo (but), Yoki (or), Shuning uchun (so), Chunki (because)",
        explanation: "Essential Grammar in Use 109-qoidasi: Ikkita oddiy gapni bitta mazmunli qo'shma gapga bog'lash: 'I was tired, so I went to bed early' (Natija) / 'I went to bed early because I was tired' (Sabab) / 'He worked hard, but he failed' (Zidlik).",
        ieltsRelevance: "Oddiy gaplardan qo'shma murakkab gaplar (Compound Sentences) yasashning poydevori.",
        academicExamples: [
            {
                sentence: "Public transit investment is vital because it curtails emissions and reduces traffic jams.",
                translation: "Jamoat transporti investitsiyasi juda muhim, chunki u chiqindilarni kamaytiradi va tirbandliklarni qisqartiradi.",
                context: "Task 2"
            }
        ],
        commonMistakes: [
            {
                incorrect: "Because it was raining, so we stayed inside.",
                correct: "Because it was raining, we stayed inside. / It was raining, so we stayed inside.",
                explanation: "'Because' va 'so' bir gapda birgalikda ishlatilmaydi; faqat bittasi qo'yiladi."
            }
        ],
        quizQuestions: [
            {
                question: "The experiment was complex, _______ the research team persevered _______ they believed in the hypothesis.",
                options: ["but / because", "so / but", "and / so", "because / but"],
                correctAnswer: "but / because",
                explanation: "Birinchi bog'lovchi zidlik (but), ikkinchisi sabab (because)."
            }
        ]
    },

    // =========================================================================
    // UPPER LEVELS: A2, B1, B2 & C1 (BAND 7.5 - 9.0 ACADEMY)
    // =========================================================================
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
        structure: "Verb/Adjective Clause -> Formal Noun Phrase",
        uzbekMeaning: "Akademik nominalizatsiya (Oddiy fe'llarni yuqori ilmiy ot birikmalariga aylantirish)",
        explanation: "Akademik ingliz tilining eng muhim belgisi — otlashuv (Nominalisation). Oddiy so'zlashuv gaplarini rasmiy ilmiy ot birikmalariga aylantirish: 'The rapid contamination of water resources'.",
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
        structure: "Had + S + V3, S + would have + V3 | Were + S + to + V1, S + would + V1",
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
