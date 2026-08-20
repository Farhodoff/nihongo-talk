import json

topics = [
    # LEVEL A1 - A2: PRESENT & PAST FOUNDATIONS
    {
        "id": "murphy_u01_present_continuous",
        "level": "A1-A2",
        "title": "Unit 1: Present Continuous (I am doing)",
        "category": "Present Tenses",
        "structure": "S + am/is/are + V-ing | S + am/is/are + not + V-ing | Am/Is/Are + S + V-ing?",
        "uzbekMeaning": "Hozirgi davomli zamon (Ayni paytda sodir bo'layotgan yoki vaqtinchalik harakatlar)",
        "explanation": "Present Continuous ayni gapirilayotgan paytda boshlangan va hali tugallanmagan harakatlar (I am working now) hamda hozirgi davrda ro'y berayotgan vaqtinchalik o'zgarishlar va trendlar (Prices are rising) uchun ishlatiladi.",
        "ieltsRelevance": "Speaking Part 1 da ayni paytdagi mashg'ulotlaringizni aytishda va Writing Task 1/2 da davom etayotgan zamonaviy trendlarni ifodalashda qo'llaniladi.",
        "academicExamples": [
            {"sentence": "Global temperatures are rising at an alarming pace.", "translation": "Global harorat xavotirli sur'atda ko'tarilmoqda.", "context": "Task 2"},
            {"sentence": "At present, I am preparing for the IELTS examination to study overseas.", "translation": "Ayni paytda chet elda o'qish uchun IELTS imtihoniga tayyorlanyapman.", "context": "Speaking"}
        ],
        "commonMistakes": [
            {"incorrect": "Look! The bus comes.", "correct": "Look! The bus is coming.", "explanation": "Ayni paytda ko'z o'ngingizda sodir bo'layotgan harakat uchun Present Continuous ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Please be quiet. I _______ to concentrate on this essay.",
                "options": ["am trying", "try", "have tried", "was trying"],
                "correctAnswer": "am trying",
                "explanation": "Ayni paytda davom etayotgan harakat: 'I am trying' (harakat qilayapman)."
            }
        ]
    },
    {
        "id": "murphy_u02_present_simple",
        "level": "A1-A2",
        "title": "Unit 2: Present Simple (I do / work / like)",
        "category": "Present Tenses",
        "structure": "S + V(s/es) | S + do/does not + V | Do/Does + S + V?",
        "uzbekMeaning": "Hozirgi oddiy zamon (Doimiy odatlar, qonuniyatlar va umumiy haqiqatlar)",
        "explanation": "Present Simple doimiy takrorlanuvchi harakatlar, ilmiy qonuniyatlar, jadvallar va umumiy faktlarni ifodalash uchun ishlatiladi (The sun rises in the east). Uchinchi shaxs birlikda (he/she/it) fe'lga -s/-es qo'shiladi.",
        "ieltsRelevance": "Writing Task 1 diagramma va jadvallarni tanishtirishda (The chart shows...) hamda Task 2 da umumiy hayotiy haqiqatlarni bayon qilishda asosiy vosita.",
        "academicExamples": [
            {"sentence": "The bar chart illustrates the demographic distribution across five regions.", "translation": "Ustunli diagramma beshta mintaqadagi demografik taqsimotni tasvirlaydi.", "context": "Task 1"},
            {"sentence": "Regular physical exercise promotes cardiovascular health.", "translation": "Muntazam jismoniy mashqlar yurak-qon tomir salomatligini yaxshilaydi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The diagram is showing the data for 2020.", "correct": "The diagram shows / illustrates the data for 2020.", "explanation": "Grafikning ma'lumot berishi doimiy fakt bo'lgani uchun Present Simple ma'qul."}
        ],
        "quizQuestions": [
            {
                "question": "The provided table _______ statistical data regarding renewable energy adoption.",
                "options": ["provides", "is providing", "provided", "has provided"],
                "correctAnswer": "provides",
                "explanation": "Akademik Task 1 kirish gaplarida fe'l doim Present Simple da (The table provides...) bo'ladi."
            }
        ]
    },
    {
        "id": "murphy_u03_present_continuous_vs_simple_1",
        "level": "A1-A2",
        "title": "Unit 3: Present Continuous and Present Simple 1",
        "category": "Present Tenses",
        "structure": "Continuous: S + am/is/are + V-ing (Temporary) vs. Simple: S + V(s/es) (Permanent)",
        "uzbekMeaning": "Vaqtinchalik holat (Continuous) va Doimiy qonuniyat (Simple) taqqoslanishi",
        "explanation": "Doimiy haqiqat yoki muntazam odat uchun Present Simple: 'I live in Tashkent'. Vaqtinchalik yoki aynan shu davrda sodir bo'layotgan vaziyat uchun Present Continuous: 'I am living with my friend until I find an apartment'.",
        "ieltsRelevance": "IELTS Speaking va Writingda vaqtinchalik hodisalar bilan doimiy holatlarni to'g'ri farqlash grammatik aniqlik (GRA) balini ta'minlaydi.",
        "academicExamples": [
            {"sentence": "Most citizens pay taxes, but currently many are protesting against the new policy.", "translation": "Ko'pchilik fuqarolar soliq to'laydi, ammo hozirda ko'pchilik yangi siyosatga qarshi norozilik bildirmoqda.", "context": "Task 2"},
            {"sentence": "The river flows into the sea.", "translation": "Daryo dengizga quyiladi (doimiy tabiat qonuni).", "context": "Task 1"}
        ],
        "commonMistakes": [
            {"incorrect": "I am working in a bank every day.", "correct": "I work in a bank every day.", "explanation": "Har kuni takrorlanuvchi doimiy ish faoliyati uchun Present Simple ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "The Earth _______ around the Sun, but today scientists _______ its atmospheric changes.",
                "options": ["revolves / are observing", "is revolving / observe", "revolves / observe", "is revolving / are observing"],
                "correctAnswer": "revolves / are observing",
                "explanation": "Yerning aylanishi doimiy fakt (revolves), bugungi kuzatuv esa ayni paytdagi faoliyat (are observing)."
            }
        ]
    },
    {
        "id": "murphy_u04_stative_verbs",
        "level": "A1-A2",
        "title": "Unit 4: Present Continuous and Simple 2 (Stative Verbs)",
        "category": "Present Tenses",
        "structure": "Stative Verbs (know, believe, understand, belong, consist, depend) ➔ ONLY Simple forms",
        "uzbekMeaning": "Holat fe'llari (Davomli zamonlarda ishlatilmaydigan fe'llar)",
        "explanation": "Fikr, his-tuyg'u, egalik va idrokni ifodalovchi fe'llar (know, understand, believe, love, hate, depend, belong, consist) harakat emas, holatni bildirgani uchun odatda Continuous shaklida ishlatilmaydi.",
        "ieltsRelevance": "Akademik tilda 'I am believing' yoki 'This is depending on' kabi xatolar darhol nomaqbul xato sifatida baholanadi.",
        "academicExamples": [
            {"sentence": "The economic outcome depends heavily on foreign investment.", "translation": "Iqtisodiy natija ko'p jihatdan xorijiy investitsiyalarga bog'liq bo'ladi.", "context": "Task 2"},
            {"sentence": "Educators understand the psychological impact of digital learning.", "translation": "Pedagoglar raqamli ta'limning psixologik ta'sirini tushunadilar.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The success is depending on team cooperation.", "correct": "The success depends on team cooperation.", "explanation": "'Depend' holat fe'li bo'lgani sababli Continuous da ishlatilmaydi."}
        ],
        "quizQuestions": [
            {
                "question": "Modern research _______ that early childhood education has lasting benefits.",
                "options": ["indicates", "is indicating", "are indicating", "indicate"],
                "correctAnswer": "indicates",
                "explanation": "'Indicate' (ko'rsatmoq/anglatmoq) ilmiy xulosalarda Present Simple birlikda keladi."
            }
        ]
    },
    {
        "id": "murphy_u05_past_simple",
        "level": "A1-A2",
        "title": "Unit 5: Past Simple (I did / worked / went)",
        "category": "Past Tenses",
        "structure": "S + V2/V-ed | S + did not + V1 | Did + S + V1?",
        "uzbekMeaning": "O'tgan oddiy zamon (O'tgan zamonda aniq vaqtda sodir bo'lib tugagan harakat)",
        "explanation": "Past Simple o'tmishda sodir bo'lgan va bugungi kunga bog'lanmagan, aniq vaqt ko'rsatkichlari (yesterday, in 2010, two years ago) bilan ishlatiladigan zamondir.",
        "ieltsRelevance": "Writing Task 1 da tarixiy yillar (masalan, 1990–2010 yillar statistikasi) berilganda butun hisobot Past Simple da yoziladi.",
        "academicExamples": [
            {"sentence": "Between 2000 and 2010, the unemployment rate dropped significantly.", "translation": "2000 va 2010 yillar oralig'ida ishsizlik darajasi sezilarli darajada pasaydi.", "context": "Task 1"},
            {"sentence": "The government established the national health service in 1948.", "translation": "Hukumat 1948 yilda milliy sog'liqni saqlash xizmatini tashkil qildi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "In 2015, the population has increased to 5 million.", "correct": "In 2015, the population increased to 5 million.", "explanation": "Aniq o'tgan yil (In 2015) bilan Present Perfect emas, Past Simple ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "In 1995, sales of personal computers _______ by over 40 percent.",
                "options": ["grew", "have grown", "are growing", "grow"],
                "correctAnswer": "grew",
                "explanation": "1995 yil aniq o'tmish davri bo'lgani uchun fe'lning 2-shakli (grew) tanlanadi."
            }
        ]
    },
    {
        "id": "murphy_u06_past_continuous",
        "level": "A1-A2",
        "title": "Unit 6: Past Continuous (I was doing)",
        "category": "Past Tenses",
        "structure": "S + was/were + V-ing | S + was/were + not + V-ing | Was/Were + S + V-ing?",
        "uzbekMeaning": "O'tgan davomli zamon (O'tmishda ma'lum bir vaqt oralig'ida davom etayotgan harakat)",
        "explanation": "Past Continuous o'tgan zamondagi ma'lum bir nuqtada jarayonda bo'lgan harakatlarni yoki bir harakat davom etayotganda boshqa qisqa harakat uni kesib o'tganini (While I was studying, the phone rang) ifodalaydi.",
        "ieltsRelevance": "Speaking Part 2 hikoya qilishda (Storytelling / Past experiences) foni yaratishda juda qo'l keladi.",
        "academicExamples": [
            {"sentence": "While the economy was recovering, inflation remained a persistent threat.", "translation": "Iqtisodiyot tiklanayotgan bir paytda, inflyatsiya doimiy xavf bo'lib qoldi.", "context": "Task 2"},
            {"sentence": "I was working as an intern when I first encountered this methodology.", "translation": "Ushbu metodikaga birinchi marta duch kelganimda amaliyotchi bo'lib ishlayotgan edim.", "context": "Speaking"}
        ],
        "commonMistakes": [
            {"incorrect": "When I arrived, they discussed the budget.", "correct": "When I arrived, they were discussing the budget.", "explanation": "Men yetib borgan paytimda ular byudjetni muhokama qilish jarayonida edilar (davomli harakat)."}
        ],
        "quizQuestions": [
            {
                "question": "While the researchers _______ the clinical trial, an unexpected side effect occurred.",
                "options": ["were conducting", "conducted", "have conducted", "are conducting"],
                "correctAnswer": "were conducting",
                "explanation": "While birikmasi bilan o'tgan zamonda davom etayotgan jarayon: 'were conducting'."
            }
        ]
    },

    # LEVEL B1 - B2: PRESENT PERFECT, MODALS, CONDITIONALS & PASSIVES
    {
        "id": "murphy_u07_present_perfect_1",
        "level": "B1-B2",
        "title": "Unit 7: Present Perfect 1 (I have done)",
        "category": "Present Perfect",
        "structure": "S + have/has + V3/ed | S + have/has not + V3/ed | Have/Has + S + V3/ed?",
        "uzbekMeaning": "Hozirgi tugallangan zamon (Natijasi hozirgi kunda ko'rinib turgan o'tgan harakat)",
        "explanation": "Present Perfect o'tmishda boshlangan yoki sodir bo'lgan, ammo natijasi va ta'siri hozirgi paytda muhim bo'lgan harakatlarni ifodalaydi: 'I have lost my passport' (demak hozir menda pasport yo'q).",
        "ieltsRelevance": "Task 2 muqaddima qismida zamonaviy dunyoda yuz bergan ulkan o'zgarishlarni kiritishda (e.g. Technology has transformed society) juda samarali.",
        "academicExamples": [
            {"sentence": "Technological advancements have transformed the global labour market.", "translation": "Texnologik yutuqlar global mehnat bozorini tubdan o'zgartirdi (natijasi bugun mavjud).", "context": "Task 2"},
            {"sentence": "Several countries have introduced stringent plastic bans.", "translation": "Bir qancha davlatlar qat'iy plastik taqiqlarini joriy qildilar.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "In 2000, scientists have discovered a new cure.", "correct": "In 2000, scientists discovered a new cure.", "explanation": "Aniq o'tgan vaqt (In 2000) bilan Present Perfect ishlatilmaydi."}
        ],
        "quizQuestions": [
            {
                "question": "Urbanization _______ unprecedented environmental challenges in major metropolises.",
                "options": ["has created", "created in 1990", "is creating yesterday", "had create"],
                "correctAnswer": "has created",
                "explanation": "Natijasi bugun ham yaqqol sezilib turgan umumiy o'zgarish uchun Present Perfect: 'has created'."
            }
        ]
    },
    {
        "id": "murphy_u08_present_perfect_2_markers",
        "level": "B1-B2",
        "title": "Unit 8: Present Perfect 2 (just, already, yet, ever, never)",
        "category": "Present Perfect",
        "structure": "have/has + just / already + V3 | haven't/hasn't + V3 + yet | Have you ever + V3?",
        "uzbekMeaning": "Present Perfect vaqt ko'rsatkichlari (Hozirgina, allaqachon, hali, hech qachon)",
        "explanation": "Just (hozirgina), Already (kutilgandan oldinroq, allaqachon), Yet (inkor va so'roqda: hali/haliyam), Ever (hayotiy tajribada: biror marta), Never (hech qachon) signallari bilan ishlatiladi.",
        "ieltsRelevance": "IELTS Speaking Part 1 va Part 3 da shaxsiy hayotiy tajribalarni tushuntirishda xatosiz nutqni ta'minlaydi.",
        "academicExamples": [
            {"sentence": "Many institutions have already adopted automated grading systems.", "translation": "Ko'plab muassasalar allaqachon avtomatlashtirilgan baholash tizimlarini qabul qilib bo'lgan.", "context": "Task 2"},
            {"sentence": "Developing nations have not yet achieved complete vaccine equity.", "translation": "Rivojlanayotgan davlatlar hali to'liq vaksina tengligiga erishgani yo'q.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "I didn't finish my homework yet.", "correct": "I haven't finished my homework yet.", "explanation": "'Yet' signali ingliz grammatikasida Present Perfect ni talab qiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Although policies were enacted, authorities _______ fully resolved the traffic congestion issue.",
                "options": ["have not yet", "did not yet", "are not already", "will not yet"],
                "correctAnswer": "have not yet",
                "explanation": "Hali to'liq hal qilinmagan o'tgan harakat natijasi: 'have not yet'."
            }
        ]
    },
    {
        "id": "murphy_u09_present_perfect_continuous",
        "level": "B1-B2",
        "title": "Unit 9: Present Perfect Continuous (I have been doing)",
        "category": "Present Perfect",
        "structure": "S + have/has been + V-ing | Have/Has + S + been + V-ing?",
        "uzbekMeaning": "Hozirgi tugallangan davomli zamon (O'tmishda boshlanib, hozirgacha davom etayotgan jarayon)",
        "explanation": "Harakat o'tmishda boshlangan va hozirgacha to'xtovsiz davom etmoqda: 'It has been raining for two hours'. Shuningdek, yaqindagina to'xtagan, ammo alomati ko'rinib turgan harakatlar uchun: 'You are out of breath. Have you been running?'.",
        "ieltsRelevance": "Speaking va Writingda o'quv yoki kasbiy faoliyat davomiyligini ko'rsatishda (I have been studying English for 3 years) juda muhim.",
        "academicExamples": [
            {"sentence": "Economists have been debating the impact of artificial intelligence on employment for over a decade.", "translation": "Iqtisodchilar o'n yildan ortiq vaqt davomida sun'iy intellektning bandlikka ta'sirini muhokama qilib kelishmoqda.", "context": "Task 2"},
            {"sentence": "I have been learning Japanese for six months to prepare for the JLPT.", "translation": "JLPT ga tayyorgarlik ko'rish uchun olti oydan beri yapon tilini o'rganib kelyapman.", "context": "Speaking"}
        ],
        "commonMistakes": [
            {"incorrect": "I am studying here since 2020.", "correct": "I have been studying here since 2020.", "explanation": "'Since 2020' kabi vaqt davomiyligi ko'rsatkichlari bilan Present Continuous emas, Present Perfect Continuous ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Scientists _______ climatic fluctuations in the Arctic region for several decades.",
                "options": ["have been monitoring", "are monitoring since", "monitored since", "were monitoring"],
                "correctAnswer": "have been monitoring",
                "explanation": "O'n yillardan beri davom etib kelayotgan ilmiy jarayon: 'have been monitoring'."
            }
        ]
    },
    {
        "id": "murphy_u11_for_and_since",
        "level": "B1-B2",
        "title": "Unit 11: For and Since / When and How Long",
        "category": "Present Perfect",
        "structure": "For + Duration (for 5 years, for 2 hours) | Since + Starting point (since 2010, since Monday)",
        "uzbekMeaning": "For (davomida) va Since (dan beri) qo'llanilishi",
        "explanation": "For vaqt oralig'ini (davomiyligini) bildiradi (for ten years, for a long time). Since esa harakat boshlangan aniq vaqt nuqtasini bildiradi (since 2015, since I was a child).",
        "ieltsRelevance": "Task 1 da dinamik o'zgarishlarni va Speakingda o'z tajribangizni tasvirlashda xatolarga yo'l qo'ymaslikni ta'minlaydi.",
        "academicExamples": [
            {"sentence": "Renewable energy investments have increased steadily since 2005.", "translation": "Qayta tiklanuvchi energiya investitsiyalari 2005 yildan beri barqaror o'sib kelmoqda.", "context": "Task 1"},
            {"sentence": "The policy has been in effect for more than a quarter of a century.", "translation": "Ushbu siyosat chorak asrdan ortiq vaqt davomida amalda bo'lib kelmoqda.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "I have known him since three years.", "correct": "I have known him for three years.", "explanation": "Vaqt davomiyligi (three years) bilan 'for' ishlatiladi. Aniq boshlanish nuqtasi bilan 'since'."}
        ],
        "quizQuestions": [
            {
                "question": "Carbon emissions in the manufacturing sector have surged _______ the onset of the industrial revolution.",
                "options": ["since", "for", "during", "from"],
                "correctAnswer": "since",
                "explanation": "Sanoat inqilobi boshlangan nuqtadan buyon: 'since the onset'."
            }
        ]
    },
    {
        "id": "murphy_u13_past_perfect",
        "level": "B1-B2",
        "title": "Unit 13: Past Perfect (I had done / seen)",
        "category": "Past Tenses",
        "structure": "S + had + V3/ed | S + had not + V3/ed | Had + S + V3/ed?",
        "uzbekMeaning": "O'tgan tugallangan zamon (O'tgan zamondagi boshqa bir harakatdan oldin ro'y bergan harakat)",
        "explanation": "O'tgan zamonda ikkita harakat sodir bo'lganida, birinchi (oldingi) harakat uchun Past Perfect (had done), ikkinchi (keyingi) harakat uchun Past Simple (did) ishlatiladi: 'When we arrived, the train had already left'.",
        "ieltsRelevance": "Tarixiy hodisalar sabab-oqibatini yoki Reading matnlaridagi ketma-ketlikni to'g'ri tahlil qilishda zarur.",
        "academicExamples": [
            {"sentence": "By the time the government intervened, the local currency had depreciated by 30 percent.", "translation": "Hukumat aralashgunga qadar milliy valyuta 30 foizga qadrsizlanib bo'lgan edi.", "context": "Task 2"},
            {"sentence": "Before the pandemic struck, the tourism sector had experienced unprecedented growth.", "translation": "Pandemiya boshlanishidan oldin turizm sohasi misli ko'rilmagan o'sishni boshdan kechirgan edi.", "context": "Task 1"}
        ],
        "commonMistakes": [
            {"incorrect": "When I arrived, the meeting already started.", "correct": "When I arrived, the meeting had already started.", "explanation": "Men kelishimdan oldinroq majlis boshlanib bo'lgani uchun 'had already started' to'g'ri."}
        ],
        "quizQuestions": [
            {
                "question": "By 2010, the company _______ its entire manufacturing infrastructure abroad.",
                "options": ["had relocated", "has relocated", "relocates", "was relocating"],
                "correctAnswer": "had relocated",
                "explanation": "'By 2010' (2010 yilga kelib tugallangan ish) bilan Past Perfect: 'had relocated'."
            }
        ]
    },
    {
        "id": "murphy_u15_used_to",
        "level": "B1-B2",
        "title": "Unit 15: Used to (do)",
        "category": "Past Tenses",
        "structure": "S + used to + V1 | S + didn't use to + V1 | Did + S + use to + V1?",
        "uzbekMeaning": "Ilgari qilardi (O'tmishda doimiy odat bo'lgan, ammo hozir to'xtagan harakatlar)",
        "explanation": "'Used to' o'tmishda muntazam qilingan, lekin hozirgi kunda qilinmaydigan odatlar va o'tmishdagi holatlar uchun ishlatiladi: 'I used to play tennis a lot, but I don't play now'.",
        "ieltsRelevance": "Speaking Part 1/2 da o'tmishdagi bolalik va hozirgi hayotingizni taqqoslashda juda qulay.",
        "academicExamples": [
            {"sentence": "People used to rely on print media for daily news, whereas digital platforms now dominate.", "translation": "Odamlar ilgari kundalik yangiliklar uchun bosma nashrlarga tayanar edilar, holbuki hozirda raqamli platformalar ustunlik qiladi.", "context": "Task 2"},
            {"sentence": "I used to live in a rural village before moving to the capital city.", "translation": "Poytaxtga ko'chib o'tishdan oldin qishloqda yashar edim.", "context": "Speaking"}
        ],
        "commonMistakes": [
            {"incorrect": "I use to go there last year.", "correct": "I used to go there last year.", "explanation": "O'tmish odatlari uchun 'used to' (d harfi bilan) yoziladi."}
        ],
        "quizQuestions": [
            {
                "question": "Centuries ago, societies _______ barter systems rather than monetary currencies.",
                "options": ["used to utilize", "are used to utilize", "use to utilize", "used to utilizing"],
                "correctAnswer": "used to utilize",
                "explanation": "O'tmishdagi doimiy qonuniyat: 'used to utilize' (used to + V1)."
            }
        ]
    },
    {
        "id": "murphy_u18_future_continuous_and_perfect",
        "level": "B1-B2",
        "title": "Unit 18: Future Continuous & Future Perfect",
        "category": "Future Forms",
        "structure": "Future Continuous: will be + V-ing | Future Perfect: will have + V3",
        "uzbekMeaning": "Kelasi davomli (will be doing) va Kelasi tugallangan (will have done) zamonlar",
        "explanation": "Future Continuous kelajakdagi ma'lum bir paytda davom etayotgan harakat (This time tomorrow, I will be flying to London). Future Perfect esa kelajakdagi ma'lum bir muddatgacha tugallanib bo'ladigan natija (By 2030, scientists will have discovered new energy sources).",
        "ieltsRelevance": "Writing Task 1 prognoz grafiklarida (Projections up to 2050) Band 7+ grammatik murakkablikni ko'rsatish uchun eng zo'r konstruksiya.",
        "academicExamples": [
            {"sentence": "By 2050, the global population will have exceeded nine billion people.", "translation": "2050 yilga kelib, yer yuzi aholisi to'qqiz milliard kishidan oshib bo'ladi.", "context": "Task 1"},
            {"sentence": "In the coming decades, most households will be utilizing renewable solar power.", "translation": "Kelgusi o'n yilliklarda aksariyat xonadonlar qayta tiklanuvchi quyosh energiyasidan foydalanayotgan bo'ladi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "By next year, I will finish my master's degree.", "correct": "By next year, I will have finished my master's degree.", "explanation": "'By + kelajak vaqt' bilan Future Perfect (will have finished) ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "According to official projections, the city _______ its carbon neutrality targets by 2040.",
                "options": ["will have achieved", "will be achieve", "has achieved", "would achieve"],
                "correctAnswer": "will have achieved",
                "explanation": "'By 2040' kelasi muddatiga qadar yakunlanadigan natija: 'will have achieved'."
            }
        ]
    },
    {
        "id": "murphy_u20_modals_deduction",
        "level": "B1-B2",
        "title": "Unit 20: Modals of Deduction (Must, Can't, Could, Might)",
        "category": "Modals",
        "structure": "Must + V1 (99% ishonch) | Can't + V1 (99% inkor) | Might/May/Could + V1 (50% ehtimol)",
        "uzbekMeaning": "Mantiqiy xulosa va ehtimollik modal fe'llari",
        "explanation": "Biror holatga qat'iy mantiqiy amin bo'lsangiz: 'He has worked 14 hours today, he must be exhausted'. Mutlaqo imkonsiz deb hisoblasangiz: 'It can't be true'. Ehtimollik bo'lsa: 'It might rain later'.",
        "ieltsRelevance": "IELTS Writing Task 2 da mutlaq fikr bildirmasdan, akademik muloyimlik (Academic Hedging) bilan ehtimollik bildirishda zarur.",
        "academicExamples": [
            {"sentence": "Implementing strict regulations might discourage small enterprise growth.", "translation": "Qat'iy qoidalarni joriy etish kichik biznes o'sishini sekinlashtirishi ehtimoldan xoli emas.", "context": "Task 2"},
            {"sentence": "Given the substantial data, the proposed hypothesis must be valid.", "translation": "Keltirilgan salmoqli dalillarga ko'ra, ilgari surilgan gipoteza to'g'ri bo'lishi aniq.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "It must not be true (imkonsiz ma'nosida).", "correct": "It cannot be true.", "explanation": "Mantiqiy 'imkoni yo'q' xulosasi uchun 'must not' emas, 'can't / cannot' ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Excessive smartphone usage among adolescents _______ lead to diminished academic focus.",
                "options": ["can", "must to", "should to", "is able"],
                "correctAnswer": "can",
                "explanation": "Umumiy ehtimollik va nazariy imkoniyat uchun 'can' modal fe'li to'g'ri."
            }
        ]
    },
    {
        "id": "murphy_u23_conditionals_first_and_second",
        "level": "B1-B2",
        "title": "Unit 23: Conditionals (Real vs. Unreal Hypotheses)",
        "category": "Conditionals",
        "structure": "1st: If + Present Simple, will + V1 | 2nd: If + Past Simple, would + V1",
        "uzbekMeaning": "Shart ergash gaplar: Real (1-shart) va Gipoteza/Noaniq (2-shart)",
        "explanation": "1-shart gap kelajakda amalga oshishi mumkin bo'lgan real shart: 'If taxes increase, consumption will drop'. 2-shart gap esa hozirgi yoki kelajakdagi nohaqiqiy, faraziy vaziyatlar: 'If governments invested more in green tech, pollution would decrease'.",
        "ieltsRelevance": "Taklif qilinayotgan islohotlarning oqibatlarini muhokama qilishda Band 7.5+ murakkab gap strukturasini beradi.",
        "academicExamples": [
            {"sentence": "If governments subsidize public transport, private car dependency will decline.", "translation": "Agar hukumatlar jamoat transportini subsidiyalasa, xususiy mashinalarga qaramlik kamayadi.", "context": "Task 2"},
            {"sentence": "If individuals were more conscious of waste, landfill crises would diminish.", "translation": "Agar fuqarolar chiqindilar bo'yicha ko'proq ongli bo'lganlarida edi, chiqindixonalar inqirozi ancha kamaygan bo'lardi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "If I will have time, I will help you.", "correct": "If I have time, I will help you.", "explanation": "'If' qismida 'will' ishlatilmaydi, Present Simple qo'yiladi."}
        ],
        "quizQuestions": [
            {
                "question": "If authorities _______ stricter penalties for deforestation, biodiversity loss would decelerate.",
                "options": ["imposed", "impose", "will impose", "have imposed"],
                "correctAnswer": "imposed",
                "explanation": "Natija qismida 'would decelerate' (2-shart) bo'lgani uchun If qismida Past Simple ('imposed') keladi."
            }
        ]
    },
    {
        "id": "murphy_u25_third_conditional",
        "level": "B1-B2",
        "title": "Unit 25: Third Conditional (Unreal Past)",
        "category": "Conditionals",
        "structure": "If + had + V3, would have + V3 | Had + S + V3, would have + V3",
        "uzbekMeaning": "3-shart ergash gap (O'tmishda bo'lib o'tgan nohaqiqiy, afsusli vaziyatlar)",
        "explanation": "O'tmishda sodir bo'lmagan shart va uning o'tmishdagi ehtimoliy natijasi: 'If they had taken precautions, the accident would not have occurred'.",
        "ieltsRelevance": "Tarixiy xatolar va ularning oldini olish mumkin bo'lgan natijalarni akademik tahlil qilishda eng yuqori darajali qoida.",
        "academicExamples": [
            {"sentence": "Had early warnings been heeded, the catastrophic flood damage would have been averted.", "translation": "Agar dastlabki ogohlantirishlarga e'tibor qaratilganida edi, falokatli toshqin zararlarining oldi olingan bo'lardi.", "context": "Task 2"},
            {"sentence": "If the team had secured sufficient funding, the clinical study would have continued.", "translation": "Agar jamoa yetarli moliyalashtirishga erishganida edi, klinik tadqiqot davom etgan bo'lardi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "If I would have known, I would have told you.", "correct": "If I had known, I would have told you.", "explanation": "If qismida 'would have' qo'yilmaydi, 'had + V3' ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "If the financial regulators _______ the vulnerability sooner, the banking collapse would have been mitigated.",
                "options": ["had identified", "identified", "would identify", "have identified"],
                "correctAnswer": "had identified",
                "explanation": "3-shart gapning If qismida Past Perfect: 'had identified'."
            }
        ]
    },
    {
        "id": "murphy_u26_passive_voice",
        "level": "B1-B2",
        "title": "Unit 26: Passive Voice (Is done / Was done / Has been done)",
        "category": "Passive Voice",
        "structure": "Object + to be (zamonga mos) + V3 (+ by Agent)",
        "uzbekMeaning": "Majhul nisbat (Harakat kim tomonidan qilingani emas, harakatning o'zi muhim bo'lganda)",
        "explanation": "Akademik va ilmiy yozuvda subyektiv 'I / We / People' o'rniga obyektiv Passivedan foydalaniladi: 'The experiment was conducted under controlled conditions'.",
        "ieltsRelevance": "Writing Task 1 Process diagrammalarida (ishlab chiqarish bosqichlari) va Task 2 ning ilmiy ohangida 100% talab qilinadi.",
        "academicExamples": [
            {"sentence": "In the final stage, the purified water is distributed to residential networks.", "translation": "Yakuniy bosqichda tozalangan suv turar-joy tarmoqlariga taqsimlanadi.", "context": "Task 1"},
            {"sentence": "Significant resources have been allocated to infrastructure modernization.", "translation": "Infratuzilmani modernizatsiya qilish uchun salmoqli resurslar ajratildi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The tea leaves are pick by hand.", "correct": "The tea leaves are picked by hand.", "explanation": "Majhul nisbatda fe'l har doim 3-shaklda (V3/ed) bo'lishi shart."}
        ],
        "quizQuestions": [
            {
                "question": "In the factory, raw materials _______ into intermediate components before final assembly.",
                "options": ["are transformed", "transform", "are transforming", "have transformed"],
                "correctAnswer": "are transformed",
                "explanation": "Jarayon diagrammasida harakat obyekt ustida bajariladi: 'are transformed' (aylantiriladi)."
            }
        ]
    },
    {
        "id": "murphy_u28_reported_speech",
        "level": "B1-B2",
        "title": "Unit 28: Reported Speech (He stated that...)",
        "category": "Clauses & Connectors",
        "structure": "Direct ➔ Reported (Present ➔ Past, Past ➔ Past Perfect, Will ➔ Would)",
        "uzbekMeaning": "O'zlashtirma gap (Boshqalarning fikrini akademik ifodalash)",
        "explanation": "Boshqa manbalar yoki olimlarning fikrlarini keltirishda zamonlar bir pog'ona orqaga suriladi (Backshift): 'He said: I study online' ➔ 'He stated that he studied online'.",
        "ieltsRelevance": "Reading tahlillarida va Writingda tadqiqotchilar fikrini sitata qilishda qo'llaniladi.",
        "academicExamples": [
            {"sentence": "Scholars argued that economic disparity had intensified during the globalization wave.", "translation": "Olimlar globallashuv to'lqinida iqtisodiy tafovut kuchayganini ta'kidladilar.", "context": "Task 2"},
            {"sentence": "Participants reported that flexible working arrangements enhanced their productivity.", "translation": "Ishtirokchilar moslashuvchan ish tartibi ularning mehnat unumdorligini oshirganini ma'lum qildilar.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The researcher said that he will publish the report.", "correct": "The researcher said that he would publish the report.", "explanation": "O'tgan zamondagi 'said' dan keyin 'will' 'would' ga aylanadi."}
        ],
        "quizQuestions": [
            {
                "question": "The survey respondents confirmed that they _______ substantial benefits from remote education.",
                "options": ["had derived", "have derive", "will derive", "are deriving"],
                "correctAnswer": "had derived",
                "explanation": "O'tgan zamon o'zlashtirma gapida zamon orqaga suriladi: 'had derived'."
            }
        ]
    },
    {
        "id": "murphy_u29_relative_clauses",
        "level": "B1-B2",
        "title": "Unit 29: Relative Clauses (Who, Which, That, Whose, Where)",
        "category": "Clauses & Connectors",
        "structure": "Defining: The person who... / The system which... | Non-defining: X, which..., is Y",
        "uzbekMeaning": "Aniqlik kirituvchi bog'lovchili gaplar (Kimki, Qaysiki, Qayerdaki)",
        "explanation": "Oddiy sodda gaplarni birlashtirib, bitta murakkab gap (Complex Sentence) hosil qilish: 'Students study abroad. They gain international perspectives' ➔ 'Students who study abroad gain international perspectives'.",
        "ieltsRelevance": "IELTS GRA mezonida 7.0+ ball olishning eng asosiy talabi murakkab gaplar (Complex sentences) tuzishdir.",
        "academicExamples": [
            {"sentence": "Nations that prioritize research and innovation consistently outperform competitors.", "translation": "Tadqiqot va innovatsiyalarni ustuvor deb biladigan davlatlar doimiy ravishda raqobatchilaridan ustun turadi.", "context": "Task 2"},
            {"sentence": "Solar energy, which is completely inexhaustible, offers a viable alternative to coal.", "translation": "Quyosh energiyasi — butunlay tuganmas manba bo'lib, ko'mirga munosib muqobil hisoblanadi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The students which study hard succeed.", "correct": "The students who / that study hard succeed.", "explanation": "Insonlar uchun 'which' emas, 'who' yoki 'that' ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Individuals _______ possess multilingual capabilities frequently secure competitive career opportunities.",
                "options": ["who", "which", "whose", "whom"],
                "correctAnswer": "who",
                "explanation": "Insonlar (Individuals) uchun ega vazifasidagi bog'lovchi: 'who'."
            }
        ]
    },
    {
        "id": "murphy_u30_articles",
        "level": "B1-B2",
        "title": "Unit 30: Definite & Indefinite Articles (A, An, The, Zero Article)",
        "category": "Articles & Nouns",
        "structure": "a/an + singular countable | the + specific/unique | Ø + plural/uncountable in general",
        "uzbekMeaning": "Artikllar: Aniq (The), Noaniq (A/An) va Nolinchi artikl",
        "explanation": "IELTS Writing da artikl xatolari eng ko'p uchraydigan va GRA balini 6.0 dan tushiradigan omildir. Umumiy ma'nodagi sanalmaydigan otlarga (education, society, pollution) 'the' qo'yilmaydi.",
        "ieltsRelevance": "Writing Task 1 va Task 2 da to'g'ri ilmiy til uslubini ta'minlaydi.",
        "academicExamples": [
            {"sentence": "Education plays a vital role in the socio-economic advancement of society.", "translation": "Ta'lim jamiyatning ijtimoiy-iqtisodiy yuksalishida muhim rol o'ynaydi.", "context": "Task 2"},
            {"sentence": "The proliferation of digital gadgets has altered domestic life.", "translation": "Raqamli qurilmalarning keng tarqalishi maishiy hayotni o'zgartirdi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "The society should invest in the education.", "correct": "Society should invest in education.", "explanation": "Umumiy ma'nodagi 'society' va 'education' artiklsiz ishlatiladi."}
        ],
        "quizQuestions": [
            {
                "question": "Government funding is indispensable for _______ expansion of renewable infrastructure.",
                "options": ["the", "a", "an", "Ø (no article)"],
                "correctAnswer": "the",
                "explanation": "'...of renewable infrastructure' aniqlovchisi borligi uchun 'the expansion' shakli to'g'ri."
            }
        ]
    },
    {
        "id": "murphy_u32_conjunctions_contrast",
        "level": "B1-B2",
        "title": "Unit 32: Conjunctions & Contrast Linkers (Although, Despite, However, Whereas)",
        "category": "Clauses & Connectors",
        "structure": "Although/Even though + Clause | Despite/In spite of + Noun/V-ing | Whereas/While + Clause",
        "uzbekMeaning": "Zidlovchi va bog'lovchi akademik vositalar (Garchi, Shunga qaramay, Holbuki)",
        "explanation": "Ikkita qarama-qarshi fikrni bog'lash: Although + ega + fe'l ('Although electric cars are costly, they reduce emissions'). Despite + ot ('Despite the high cost, electric cars are popular').",
        "ieltsRelevance": "IELTS Coherence & Cohesion (CC) balini 8.0 ga ko'taruvchi eng muhim leksik bog'lamalar.",
        "academicExamples": [
            {"sentence": "Although online education offers unprecedented flexibility, it can diminish face-to-face interaction.", "translation": "Onlayn ta'lim misli ko'rilmagan moslashuvchanlikni taqdim etsa-da, u jonli muloqotni kamaytirishi mumkin.", "context": "Task 2"},
            {"sentence": "Despite substantial investments, the public transport network remained underdeveloped.", "translation": "Salmoqli investitsiyalarga qaramasdan, jamoat transporti tarmog'i yetarlicha rivojlanmay qoldi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "Although it was raining, but we went out.", "correct": "Although it was raining, we went out.", "explanation": "'Although' bor gapda 'but' ortiqcha va xato hisoblanadi."}
        ],
        "quizQuestions": [
            {
                "question": "_______ extensive public awareness campaigns, obesity rates continued an upward trajectory.",
                "options": ["Despite", "Although", "Even though", "Whereas"],
                "correctAnswer": "Despite",
                "explanation": "Ot birikmasi ('extensive public awareness campaigns') oldidan 'Despite' yoki 'In spite of' keladi."
            }
        ]
    },

    # LEVEL C1: ADVANCED ACADEMIC STRUCTURES
    {
        "id": "murphy_u33_inversion_structures",
        "level": "C1",
        "title": "Unit 33: Inversion for Emphasis (Not only did..., Seldom have...)",
        "category": "Advanced Sentence Variety",
        "structure": "Negative Adverb (Not only, Seldom, Rarely, Never) + Auxiliary Verb + Subject + Main Verb",
        "uzbekMeaning": "Inversiya (Urg'u berish uchun fe'l va eganing o'rnini almashtirish)",
        "explanation": "Band 8.0+ essaylarda urg'u berish uchun inversiya ishlatiladi: 'Not only does tourism boost the economy, but it also fosters cultural understanding'.",
        "ieltsRelevance": "Examiner darhol sizning C1 grammatikaga egaligingizni payqaydi va GRA balini 8.0+ ga ko'taradi.",
        "academicExamples": [
            {"sentence": "Not only does higher education enhance employment prospects, but it also develops critical thinking.", "translation": "Oliy ta'lim nafaqat ishga joylashish imkoniyatlarini oshiradi, balki tanqidiy fikrlashni ham rivojlantiradi.", "context": "Task 2"},
            {"sentence": "Seldom do developing nations possess sufficient capital to fund megaprojects independently.", "translation": "Rivojlanayotgan davlatlar kamdan-kam hollarda megloyihalarni mustaqil moliyalashtirish uchun yetarli kapitalga ega bo'ladi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "Not only technology improves communication, but it also creates jobs.", "correct": "Not only does technology improve communication, but it also creates jobs.", "explanation": "'Not only' bilan boshlanganda eganing oldiga yordamchi fe'l (does) o'tadi."}
        ],
        "quizQuestions": [
            {
                "question": "Not only _______ greenhouse gas emissions, but it also reduces reliance on fossil fuels.",
                "options": ["does renewable energy decrease", "renewable energy decreases", "is renewable energy decreasing", "decreased renewable energy"],
                "correctAnswer": "does renewable energy decrease",
                "explanation": "Inversiyada: Not only + yordamchi fe'l (does) + ega (renewable energy) + asosiy fe'l (decrease)."
            }
        ]
    },
    {
        "id": "murphy_u34_participle_clauses",
        "level": "C1",
        "title": "Unit 34: Participle Clauses (Active & Passive Reduction)",
        "category": "Advanced Sentence Variety",
        "structure": "Having + V3 (After doing) | V-ing (While doing) | V3 / Being + V3 (Passive cause/result)",
        "uzbekMeaning": "Sifatdoshli qisqartma gaplar (Having analyzed..., Driven by...)",
        "explanation": "Ikkita gapni qisqartirib, bitta akademik ixcham gapga aylantirish: 'Because students faced high tuition fees, they took loans' ➔ 'Facing exorbitant tuition fees, students resorted to loans'.",
        "ieltsRelevance": "IELTS Academic Writing da professional uslub va yuqori lug'at zichligini ta'minlaydi.",
        "academicExamples": [
            {"sentence": "Having analyzed the longitudinal data, researchers identified a direct link between diet and cognition.", "translation": "Uzoq muddatli ma'lumotlarni tahlil qilgach, tadqiqotchilar ovqatlanish va aqliy faoliyat o'rtasida to'g'ridan-to'g'ri bog'liqlikni aniqladilar.", "context": "Task 2"},
            {"sentence": "Exposed to excessive screen time from an early age, children are more susceptible to attention deficits.", "translation": "Yoshligidan haddan tashqari ko'p ekran vaqtiga duchor bo'lgan bolalar diqqat yetishmovchiligiga ko'proq moyil bo'ladilar.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "Having finish the research, the conclusion was clear.", "correct": "Having finished the research, scientists reached a clear conclusion.", "explanation": "Sifatdosh qisqartmada asosiy eganing harakati mos kelishi kerak (Dangling modifier xatosidan saqlaning)."}
        ],
        "quizQuestions": [
            {
                "question": "_______ by intense market competition, companies are forced to innovate continuously.",
                "options": ["Driven", "Driving", "Having driven", "Drive"],
                "correctAnswer": "Driven",
                "explanation": "Kompaniyalar bozor raqobati tomonidan majburlangani (majhul sabab) uchun o'tgan zamon sifatdoshi 'Driven by...' ishlatiladi."
            }
        ]
    },
    {
        "id": "murphy_u35_cleft_sentences",
        "level": "C1",
        "title": "Unit 35: Cleft Sentences (What concerns scholars is..., It is X that...)",
        "category": "Advanced Focus & Emphasis",
        "structure": "What + Clause + is/was + Noun/Clause | It is/was + Emphasized Element + that/who + Rest",
        "uzbekMeaning": "Ajratilgan urg'u gaplar (Olimlarni tashvishga solayotgan narsa bu...)",
        "explanation": "Fikrga chuqur urg'u berish uchun: 'Governments should regulate AI, not tech firms' ➔ 'It is governments, rather than tech conglomerates, that must regulate artificial intelligence'.",
        "ieltsRelevance": "Task 2 xulosasida yoki asosiy argumentni xarakterlashda Band 8.5 darajali taassurot qoldiradi.",
        "academicExamples": [
            {"sentence": "What distinguishes successful students is their capacity for self-directed learning.", "translation": "Muvaffaqiyatli talabalarni ajratib turadigan narsa — ularning mustaqil o'rganish qobiliyatidir.", "context": "Task 2"},
            {"sentence": "It was the rapid expansion of industrialization that catalyzed widespread urbanization.", "translation": "Aynan sanoatlashuvning tez sur'atlarda kengayishi keng ko'lamli urbanizatsiyani tezlashtirdi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "What is important it is discipline.", "correct": "What is important is discipline.", "explanation": "What gapidan keyin ortiqcha 'it' qo'yilmaydi."}
        ],
        "quizQuestions": [
            {
                "question": "_______ requires urgent intervention is the escalating rate of youth unemployment.",
                "options": ["What", "That", "Which", "It"],
                "correctAnswer": "What",
                "explanation": "Urg'u beruvchi 'What-cleft' gap: 'What requires urgent intervention is...' (Shoshilinch aralashuvni talab qiladigan narsa bu...)."
            }
        ]
    },
    {
        "id": "murphy_u36_academic_nominalisation",
        "level": "C1",
        "title": "Unit 36: Academic Nominalisation (Transforming Verbs into Academic Nouns)",
        "category": "Academic Style & Tone",
        "structure": "Verb/Adj Phrase ➔ Formal Noun Phrase (e.g. destroy ➔ destruction, poor ➔ poverty)",
        "uzbekMeaning": "Akademik Nominalizatsiya (Fe'llarni ilmiy otlarga aylantirish)",
        "explanation": "So'zlashuv tilidagi fe'llar o'rniga rasmiy ot birikmalaridan foydalanish: 'Factories pollute the rivers and this destroys fish' ➔ 'Industrial water contamination leads to the decimation of aquatic life'.",
        "ieltsRelevance": "Band 8.0+ Lexical Resource va GRA uchun eng muhim ko'nikma.",
        "academicExamples": [
            {"sentence": "The implementation of stricter environmental laws resulted in a measurable reduction of carbon emissions.", "translation": "Qat'iyroq ekologik qonunlarning joriy etilishi uglerod chiqindilarining sezilarli darajada kamayishiga olib keldi.", "context": "Task 2"},
            {"sentence": "The rapid proliferation of smartphones has fundamentally altered interpersonal communication.", "translation": "Smartfonlarning tez tarqalishi shaxslararo muloqotni tubdan o'zgartirdi.", "context": "Task 2"}
        ],
        "commonMistakes": [
            {"incorrect": "Because factories pollute water, it is bad.", "correct": "Industrial water pollution poses severe ecological hazards.", "explanation": "Akademik inshoda oddiy sabab gap o'rniga nominalizatsiya qilingan ega qo'llash tavsiya etiladi."}
        ],
        "quizQuestions": [
            {
                "question": "The _______ of digital healthcare platforms has streamlined patient consultations.",
                "options": ["introduction", "introduce", "introducing", "introductory"],
                "correctAnswer": "introduction",
                "explanation": "'The [Noun] of...' strukturasida rasmiy ot shakli 'introduction' talab qilinadi."
            }
        ]
    }
]

ts_content = """export interface IeltsGrammarTopic {
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

export const IELTS_GRAMMAR_DATABASE: IeltsGrammarTopic[] = """ + json.dumps(topics, ensure_ascii=False, indent=4) + """;
"""

with open('/Users/farhod/Documents/github/study_planner/src/data/ielts/ielts_grammar_data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully generated {len(topics)} units into ielts_grammar_data.ts")
