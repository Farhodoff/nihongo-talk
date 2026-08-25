import { Lesson } from '../../types/lesson';

export const JAPANESE_N1_LESSONS: Lesson[] = [
    {
        "id": "ja-n1-u1-l1",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u1",
        "unitTitle": "Unit 1: Classical & Literary Grammar",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 1,
        "title": "Classical Concessions: 〜であれ / 〜であろうと (No Matter What / Be it)",
        "description": "Mumtoz yapon tili grammatikasining oliy ifodasi: qanday holat bo'lishidan qat'i nazar (De are / Dearou to).",
        "estimatedDurationMinutes": 18,
        "icon": "📜",
        "steps": [
            {
                "id": "ja-n1-u1-l1-s1",
                "title": "〜であれ / 〜であろうと Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Universal Concession (〜であれ / 〜であろうと)",
                    "explanation": "Qadimgi mumtoz bungo (文語) uslubidan saqlanib qolgan yuksak adabiy konstruksiya: \"Kim yoki nima bo'lishidan qat'i nazar, qoida o'zgarmasdir\".",
                    "keyPoints": [
                        "たとえ 国王[こくおう]であれ、法[ほう]の 前[まえ]には 平等[びょうどう]で ある。 (Hatto podshoh bo'lsa ham, qonun oldida tengdir.)",
                        "いかなる 理由[りゆう]であろうと、暴力[ぼうりょく]は 許[ゆる]されない。 (Har qanday vaj yoki sabab bo'lmasin, zo'ravonlik oqlanmaydi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "いかなる",
                            "reading": "Ikanaru",
                            "meaning": "Har qanday / Qanday bo'lmasin (oliy adabiy)",
                            "exampleSentence": "いかなる 困難[こんなん]にも 屈[くっ]しない。",
                            "exampleTranslation": "Har qanday qiyinchilikka bo'ysunmaslik."
                        },
                        {
                            "term": "屈[くっ]する",
                            "reading": "Kussuru",
                            "meaning": "Tiz cho'kmoq / Bo'ysunmoq",
                            "exampleSentence": "圧力[あつりょく]に 屈[くっ]する。",
                            "exampleTranslation": "Bosimga bo'ysunmoq."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Classical Concessions: 〜であれ / 〜であろうと (No Matter What / Be it)",
                            "meaning": "Mumtoz yapon tili grammatikasining oliy ifodasi: qanday holat bo'lishidan qat'i nazar (De are / Dearou to).",
                            "usageNotes": "Qadimgi mumtoz bungo (文語) uslubidan saqlanib qolgan yuksak adabiy konstruksiya: \"Kim yoki nima bo'lishidan qat'i nazar, qoida o'zgarmasdir\".",
                            "examples": [
                                {
                                    "sentence": "いかなる 困難[こんなん]にも 屈[くっ]しない。",
                                    "translation": "Har qanday qiyinchilikka bo'ysunmaslik."
                                },
                                {
                                    "sentence": "圧力[あつりょく]に 屈[くっ]する。",
                                    "translation": "Bosimga bo'ysunmoq."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Oliy adabiy shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u1-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "«Kim bo'lishidan qat'i nazar, barcha fuqarolar soliq to'lashi shart»:",
                            "options": [
                                "富豪[ふごう]です",
                                "いかなる 富豪[ふごう]であれ、納税[のうぜい]の 義務[ぎむ]を 負[お]う",
                                "富豪[ふごう]だから",
                                "富豪[ふごう]なら"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Fugou de are (boy bo'lishidan qat'i nazar)."
                        },
                        {
                            "id": "ja-n1-u1-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「圧力[あつりょく]に 屈[くっ]する。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "散歩[さんぽ]",
                                "屈[くっ]する"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"屈[くっ]する\" (Tiz cho'kmoq / Bo'ysunmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u1-l1-q1",
                            "question": "「たとえ 誰[だれ]であろうと」ning ma'nosi:",
                            "options": [
                                "Hech kim",
                                "Kim bo'lishidan qat'i nazar (No matter who it is)",
                                "Faqat bitta kishi",
                                "O'sha kishi"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "No matter who it is."
                        },
                        {
                            "id": "ja-n1-u1-l1-q2",
                            "question": "「〜であれ〜であれ」qo'shaloq shakli nimani bildiradi?",
                            "options": [
                                "Faqat B",
                                "Hech biri",
                                "A bo'lsin, B bo'lsin (ikkala holatda ham baribir)",
                                "Faqat A"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Whether A or B."
                        },
                        {
                            "id": "ja-n1-u1-l1-q3",
                            "question": "«Qanday sabab bo'lishidan qat'i nazar qotillik jinoyatdir»:",
                            "options": [
                                "理由[りゆう]が あるから",
                                "理由[りゆう]です",
                                "理由[りゆう]なら",
                                "いかなる 理由[りゆう]であれ、殺人[さつじん]は 犯罪[はんざい]で ある"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Ikanaru riyuu de are."
                        },
                        {
                            "id": "ja-n1-u1-l1-q4",
                            "question": "〜であれ konstruksiyasi qaysi uslubga mansub?",
                            "options": [
                                "Bungo / Oliy adabiy-rasmiy yapon tili",
                                "Bolalar tili",
                                "Ko'cha slengi",
                                "SMS tili"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "High literary / Classical register."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u1-l2",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u1",
        "unitTitle": "Unit 1: Classical & Literary Grammar",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 2,
        "title": "Status & Duty: 〜たるもの vs 〜まじき (Fit for a leader vs Unforgivable for)",
        "description": "Sharafli maqomga loyiqlik (tarumono - mavqeiga xos) va mutlaqo yarashmaydigan xatti-harakat (majiki).",
        "estimatedDurationMinutes": 18,
        "icon": "⚖️",
        "steps": [
            {
                "id": "ja-n1-u1-l2-s1",
                "title": "〜たるもの va 〜まじき Qoidasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Status Expectation (〜たるもの) vs Unpardonable Act (〜まじき)",
                    "explanation": "1. 〜たるもの (Ot + taru mono): Boshqaruvchi, olim yoki rahbar kabi yuqori maqom egasi qanday bo'lishi shartligini bildiradi: 医者[いしゃ]たるもの、患者[かんじゃ]の 命[いのち]を 最優先[さいゆうせん]に すべきだ (Shifokor degan zot bemor hayotini eng birinchi o'ringa qo'yishi shart). 2. 〜まじき (Fe'l lug'at shakli + majiki + Ot): Ushbu kasb yoki maqomdagi inson uchun mutlaqo kechirib bo'lmas xato: 政治家[せいじか]として あるまじき 発言[はつげん] (Siyosatchi uchun mutlaqo yarashmaydigan/kechirilmas bayonot).",
                    "vocabulary": [
                        {
                            "term": "発言[はつげん]",
                            "reading": "Hatsugen",
                            "meaning": "Rasmiy bayonot / Fikr bildirish",
                            "exampleSentence": "無責任[むせきにん]な 発言[はつげん]。",
                            "exampleTranslation": "Mas'uliyatsiz bayonot."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Status & Duty: 〜たるもの vs 〜まじき (Fit for a leader vs Unforgivable for)",
                            "meaning": "Sharafli maqomga loyiqlik (tarumono - mavqeiga xos) va mutlaqo yarashmaydigan xatti-harakat (majiki).",
                            "usageNotes": "1. 〜たるもの (Ot + taru mono): Boshqaruvchi, olim yoki rahbar kabi yuqori maqom egasi qanday bo'lishi shartligini bildiradi: 医者[いしゃ]たるもの、患者[かんじゃ]の 命[いのち]を 最優先[さいゆうせん]に すべきだ (Shifokor degan zot bemor hayotini eng birinchi o'ringa qo'yishi shart). 2. 〜まじき (Fe'l lug'at shakli + majiki + Ot): Ushbu kasb yoki maqomdagi inson uchun mutlaqo kechirib bo'lmas xato: 政治家[せいじか]として あるまじき 発言[はつげん] (Siyosatchi uchun mutlaqo yarashmaydigan/kechirilmas bayonot).",
                            "examples": [
                                {
                                    "sentence": "無責任[むせきにん]な 発言[はつげん]。",
                                    "translation": "Mas'uliyatsiz bayonot."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n3-u1-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri maqom ifodasini tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u1-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "«O'qituvchi degan kishi o'quvchilariga namuna bo'lishi shart»:",
                            "options": [
                                "教師[きょうし]なら",
                                "教師[きょうし]だから",
                                "教師[きょうし]たるもの、生徒[せいと]の 模範[もはん]と なるべきだ",
                                "教師[きょうし]です"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Kyoushi taru mono (o'qituvchi degan shaxs)."
                        },
                        {
                            "id": "ja-n1-u1-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。」",
                            "options": [
                                "妥協[だきょう]を許さない",
                                "散歩[さんぽ]",
                                "食事[しょくじ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"妥協[だきょう]を許さない\" (Kelishuvga bormaydigan, murosasiz darajada sifat talabchan)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u1-l2-q1",
                            "question": "「警察官[けいさつかん]にあるまじき 行為[こうい]」ning ma'nosi:",
                            "options": [
                                "Politsiya boshlig'i",
                                "Yaxshi ish",
                                "Politsiyachi uchun mutlaqo yarashmaydigan, nomaqbul xatti-harakat",
                                "Maosh"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Unforgivable/unbecoming conduct for a police officer."
                        },
                        {
                            "id": "ja-n1-u1-l2-q2",
                            "question": "「たるもの」ning grammatik kelib chiqishi qaysi manbaga borib taqaladi?",
                            "options": [
                                "Zamonaviy sleng",
                                "Mumtoz yapon tili bog'lovchi sifati (たり -> たる)",
                                "Xitoycha raqamlar",
                                "Inglizcha o'zlashma"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Classical bungo auxiliary verb tari -> taru."
                        },
                        {
                            "id": "ja-n1-u1-l2-q3",
                            "question": "«Rahbar shaxs har doim sovuqqon bo'lishi kerak»:",
                            "options": [
                                "指導者[しどうしゃ]たるもの、常[つね]に 冷静[れいせい]で あるべきだ",
                                "指導者[しどうしゃ]なら",
                                "指導者[しどうしゃ]です",
                                "指導者[しどうしゃ]だから"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Shidousha taru mono."
                        },
                        {
                            "id": "ja-n1-u1-l2-q4",
                            "question": "「許[ゆる]すまじき 暴挙[ぼうきょ]」nimani anglatadi?",
                            "options": [
                                "Kichik hazil",
                                "Ruxsat berilgan ish",
                                "Bayram tantanasi",
                                "Mutlaqo kechirib bo'lmas vahshiylik / zo'ravonlik"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Unpardonable atrocity / outrageous act."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u1-l3",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u1",
        "unitTitle": "Unit 1: Classical & Literary Grammar",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 3,
        "title": "Uniqueness & Supreme Exclusivity: 〜ならでは vs 〜をおいて他にない",
        "description": "Faqat shu narsaga xos yagona fazilat (naradehawa) va undan o'zga muqobil yo'qligi (o oite hoka ni nai).",
        "estimatedDurationMinutes": 18,
        "icon": "💎",
        "steps": [
            {
                "id": "ja-n1-u1-l3-s1",
                "title": "Noyoblik va Eksklyuzivlik",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Supreme Exclusivity (〜ならでは / 〜をおいて他にない)",
                    "explanation": "1. 〜ならでは (Ot + narade wa): Faqat shu joy, inson yoki san'atga xos takrorlanmas ajoyib xususiyat: 京都[きょうと]ならではの 伝統[でんとう]美[び] (Faqat Kiotoga xos an'anaviy go'zallik). 2. 〜をおいて他[ほか]にない: Bu vazifani bajarishga undan o'zga munosib yo'q: この大役[たいやく]を 果[は]たせるのは、彼[かれ]をおいて他[ほか]にない (Bu ulkan mas'uliyatni uddalay oladigan undan boshqa hech kim yo'q).",
                    "vocabulary": [
                        {
                            "term": "伝統[でんとう]美[び]",
                            "reading": "Dentoubi",
                            "meaning": "An'anaviy go'zallik",
                            "exampleSentence": "日本[にほん]の 伝統[でんとう]美[び]。",
                            "exampleTranslation": "Yaponiyaning an'anaviy go'zalligi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Uniqueness & Supreme Exclusivity: 〜ならでは vs 〜をおいて他にない",
                            "meaning": "Faqat shu narsaga xos yagona fazilat (naradehawa) va undan o'zga muqobil yo'qligi (o oite hoka ni nai).",
                            "usageNotes": "1. 〜ならでは (Ot + narade wa): Faqat shu joy, inson yoki san'atga xos takrorlanmas ajoyib xususiyat: 京都[きょうと]ならではの 伝統[でんとう]美[び] (Faqat Kiotoga xos an'anaviy go'zallik). 2. 〜をおいて他[ほか]にない: Bu vazifani bajarishga undan o'zga munosib yo'q: この大役[たいやく]を 果[は]たせるのは、彼[かれ]をおいて他[ほか]にない (Bu ulkan mas'uliyatni uddalay oladigan undan boshqa hech kim yo'q).",
                            "examples": [
                                {
                                    "sentence": "日本[にほん]の 伝統[でんとう]美[び]。",
                                    "translation": "Yaponiyaning an'anaviy go'zalligi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri eksklyuzivlik iborasini tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u1-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "«Faqat mohir ustaga xos nozik hunarmandchilik»:",
                            "options": [
                                "職人[しょくにん]だから",
                                "職人[しょくにん]です",
                                "職人[しょくにん]なら",
                                "職人[しょくにん]ならではの 繊細[せんさい]な 技[わざ]"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Shokunin narade wa no sensai na waza."
                        },
                        {
                            "id": "ja-n1-u1-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。」",
                            "options": [
                                "散歩[さんぽ]",
                                "運転[うんてん]",
                                "精通[せいつう]している",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"精通[せいつう]している\" (Bir sohani mukammal, ipidan ignasigacha bilmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u1-l3-q1",
                            "question": "«Bu loyihani boshqarishga sizdan boshqa hech kim mos kelmaydi»:",
                            "options": [
                                "あなたなら",
                                "あなたです",
                                "あなただから",
                                "このプロジェクトの リーダーは、あなたをおいて他[ほか]に いません"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Anata o oite hoka ni imasen."
                        },
                        {
                            "id": "ja-n1-u1-l3-q2",
                            "question": "「〜ならでは」ifodasi ko'pincha qanday ma'noda qo'llaniladi?",
                            "options": [
                                "Birovning yoki biror joyning o'ta yuqori ijobiy, tengi yo'q xususiyatini maqtashda",
                                "Kechirim so'rashda",
                                "Salbiy tanqid qilishda",
                                "Vaqtni belgilashda"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Praising unique, irreplaceable positive qualities."
                        },
                        {
                            "id": "ja-n1-u1-l3-q3",
                            "question": "「プロならではの 視点[してん]」ning ma'nosi:",
                            "options": [
                                "Havasmand fikri",
                                "Kitob narxi",
                                "Faqat haqiqiy professionalgagina xos bo'lgan chuqur nuqtai nazar",
                                "Oddiy xato"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Insight unique only to a seasoned professional."
                        },
                        {
                            "id": "ja-n1-u1-l3-q4",
                            "question": "「大役[たいやく]を 果[は]たす」ning ma'nosi:",
                            "options": [
                                "Ulkan mas'uliyatli vazifani muvaffaqiyatli bajarmoq",
                                "Uyga ketmoq",
                                "Kasal bo'lmoq",
                                "Vazifadan qochmoq"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Fulfill a momentous responsibility."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u1-l4",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u1",
        "unitTitle": "Unit 1: Classical & Literary Grammar",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 4,
        "title": "Extreme Completeness: 〜ずくめ vs 〜まみれ vs 〜だらけ",
        "description": "Mutlaqo qamrab olganlik (zukume - faqat shunday hodisalar), kirlanganlik (mamire - qonga/loyga belanish), tartibsizlik (darake).",
        "estimatedDurationMinutes": 18,
        "icon": "✨",
        "steps": [
            {
                "id": "ja-n1-u1-l4-s1",
                "title": "〜ずくめ, 〜まみれ, 〜だらけ Farqlari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Total Immersion & Contamination Nuances",
                    "explanation": "1. 〜ずくめ: Butunlay shu narsalardan iborat (ijobiy yoki qora rang kabi abstrakt hodisalar): 結構[けっこう]ずくめ (Faqat quvonchli xabarlar), 黒[くろ]ずくめの 服[ふく] (Toza qora kiyim). 2. 〜まみれ: Suyuqlik yoki ifloslikka badanning to'liq belanishi (yopishib qolish): 泥[どろ]まみれ (Loyga belangan), 血[ち]まみれ (Qonga belangan). 3. 〜だらけ: Yuzada juda ko'p tarqoq salbiy narsalar bo'lishi: 間違[まちが]いだらけ (Xatolarga to'la), ゴミだらけ (Chiqindiga to'la).",
                    "vocabulary": [
                        {
                            "term": "結構[けっこう]ずくめ",
                            "reading": "Kekkouzukume",
                            "meaning": "Faqat xushxabarlar / Ajoyib voqealar",
                            "exampleSentence": "今年[ことし]は 結構[けっこう]ずくめの 1年[いちねん]だった。",
                            "exampleTranslation": "Bu yil faqat quvonchli voqealarga boy bo'ldi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Extreme Completeness: 〜ずくめ vs 〜まみれ vs 〜だらけ",
                            "meaning": "Mutlaqo qamrab olganlik (zukume - faqat shunday hodisalar), kirlanganlik (mamire - qonga/loyga belanish), tartibsizlik (darake).",
                            "usageNotes": "1. 〜ずくめ: Butunlay shu narsalardan iborat (ijobiy yoki qora rang kabi abstrakt hodisalar): 結構[けっこう]ずくめ (Faqat quvonchli xabarlar), 黒[くろ]ずくめの 服[ふく] (Toza qora kiyim). 2. 〜まみれ: Suyuqlik yoki ifloslikka badanning to'liq belanishi (yopishib qolish): 泥[どろ]まみれ (Loyga belangan), 血[ち]まみれ (Qonga belangan). 3. 〜だらけ: Yuzada juda ko'p tarqoq salbiy narsalar bo'lishi: 間違[まちが]いだらけ (Xatolarga to'la), ゴミだらけ (Chiqindiga to'la).",
                            "examples": [
                                {
                                    "sentence": "今年[ことし]は 結構[けっこう]ずくめの 1年[いちねん]だった。",
                                    "translation": "Bu yil faqat quvonchli voqealarga boy bo'ldi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri qoplanganlik ifodasini tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u1-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "«Futbolchi yiqilib butun vujudi loyga belandi»:",
                            "options": [
                                "泥[どろ]まみれに なった",
                                "泥[どろ]だらけに なった",
                                "泥[どろ]です",
                                "泥[どろ]ずくめに なった"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Doro-mamire (suyuq ifloslikka yopishib belanish)."
                        },
                        {
                            "id": "ja-n1-u1-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "余儀[よぎ]なくされる",
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u1-l4-q1",
                            "question": "«Bu imtihon varaqasi xatolarga to'la»:",
                            "options": [
                                "この答案[とうあん]は 間違[まちが]いだらけだ",
                                "間違[まちが]いずくめだ",
                                "間違[まちが]いです",
                                "間違[まちが]いまみれだ"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Machigai-darake."
                        },
                        {
                            "id": "ja-n1-u1-l4-q2",
                            "question": "「異例[いれい]ずくめの 人事[じんじ]」ning ma'nosi:",
                            "options": [
                                "Oddiy ish",
                                "Kechikkan ish",
                                "Ishdan bo'shatish",
                                "Faqat g'ayrioddiy, kutilmagan qarorlardan iborat bo'lgan tayinlov"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Appointments packed with unprecedented exceptions."
                        },
                        {
                            "id": "ja-n1-u1-l4-q3",
                            "question": "〜まみれ qaysi so'zlar bilan eng ko'p ishlatiladi?",
                            "options": [
                                "血[ち] (qon), 汗[あせ] (ter), 泥[どろ] (loy), 油[あぶら] (moy)",
                                "Quvonch, kulgi",
                                "Kitob, qalam",
                                "Poyezd, mashina"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Blood, sweat, mud, grease contamination."
                        },
                        {
                            "id": "ja-n1-u1-l4-q4",
                            "question": "«Qora kiyingan sirli kishi»:",
                            "options": [
                                "黒[くろ]の 男[おとこ]",
                                "黒[くろ]ずくめの 男[おとこ]",
                                "黒[くろ]まみれの 男[おとこ]",
                                "黒[くろ]だらけの 男[おとこ]"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Kuro-zukume no otoko."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u1-l5",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u1",
        "unitTitle": "Unit 1: Classical & Literary Grammar",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 5,
        "title": "N1 Deep Hermeneutics: Philosophical Treatise on Epistemology & Language",
        "description": "Til falsafasi, Vitgenshteyn va strukturalizm bo'yicha yapon tilidagi chuqur ilmiy traktat mutolaasi.",
        "estimatedDurationMinutes": 20,
        "icon": "🏛️",
        "steps": [
            {
                "id": "ja-n1-u1-l5-s1",
                "title": "Falsafiy Traktat Matni",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Treatise: The Limits of Language and Ontological Reality",
                    "explanation": "言語[げんご]とは 単[たん]に 既存[きぞん]の 客観的[きゃっかんてき] 実在[じつざい]を 模写[もしゃ]する 記号[きごう]体系[たいけい]では なく、むしろ 世界[せかい]そのものを 分節化[ぶんせつか]し、人間[にんげん]の 認識[にんしき]の 地平[ちへい]を 規定[きてい]する 構造的[こうぞうてき] 枠組[わくぐ]みに 他[ほか]ならない。 言語[げんご]の 限界[げんかい]が 思考[しこう]の 限界[げんかい]を 画定[かくてい]するが ゆえに、私[わたし]たちが 自明[じめい]と 見[み]なす 現実[げんじつ]は、常[つね]に 文化的[ぶんかてき] コンテクストに 媒介[ばいかい]された 表象[ひょうしょう]の 集積[しゅうせき]で ある。",
                    "keyPoints": [
                        "Epistemologik xulosa: Til borliqni shunchaki nusxalamaydi, balki inson tafakkur chegaralarini shakllantiradi."
                    ],
                    "vocabulary": [
                        {
                            "term": "分節化[ぶんせつか]",
                            "reading": "Bunsetsuka",
                            "meaning": "Bo'laklarga ajratib anglash (Strukturalizm)",
                            "exampleSentence": "概念[がいねん]を 分節化[ぶんせつか]する。",
                            "exampleTranslation": "Tushunchalarni kategoriyalarga ajratmoq."
                        },
                        {
                            "term": "媒介[ばいかい]",
                            "reading": "Baikai",
                            "meaning": "Vositachilik / Oraliq vosita bo'lish",
                            "exampleSentence": "言葉[ことば]に 媒介[ばいかい]された 認識[にんしき]。",
                            "exampleTranslation": "Til vositasida shakllangan idrok."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Deep Hermeneutics: Philosophical Treatise on Epistemology & Language",
                            "meaning": "Til falsafasi, Vitgenshteyn va strukturalizm bo'yicha yapon tilidagi chuqur ilmiy traktat mutolaasi.",
                            "usageNotes": "言語[げんご]とは 単[たん]に 既存[きぞん]の 客観的[きゃっかんてき] 実在[じつざい]を 模写[もしゃ]する 記号[きごう]体系[たいけい]では なく、むしろ 世界[せかい]そのものを 分節化[ぶんせつか]し、人間[にんげん]の 認識[にんしき]の 地平[ちへい]を 規定[きてい]する 構造的[こうぞうてき] 枠組[わくぐ]みに 他[ほか]ならない。 言語[げんご]の 限界[げんかい]が 思考[しこう]の 限界[げんかい]を 画定[かくてい]するが ゆえに、私[わたし]たちが 自明[じめい]と 見[み]なす 現実[げんじつ]は、常[つね]に 文化的[ぶんかてき] コンテクストに 媒介[ばいかい]された 表象[ひょうしょう]の 集積[しゅうせき]で ある。",
                            "examples": [
                                {
                                    "sentence": "概念[がいねん]を 分節化[ぶんせつか]する。",
                                    "translation": "Tushunchalarni kategoriyalarga ajratmoq."
                                },
                                {
                                    "sentence": "言葉[ことば]に 媒介[ばいかい]された 認識[にんしき]。",
                                    "translation": "Til vositasida shakllangan idrok."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l5-s2",
                "title": "Falsafiy Tahlil Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Matnning ontologik xulosasini tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u1-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "Muallifning fikricha til qanday vazifani bajaradi?",
                            "options": [
                                "Shunchaki harflarni yozish uchun kerak",
                                "Grammatika testlarini yechish uchun",
                                "Insonning butun dunyoni idrok etish chegaralarini belgilab beruvchi strukturaviy qolip vazifasini bajaradi",
                                "Faqat xorijliklar bilan gaplashish vositasi"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Structural framework defining the horizon of human cognitive reality."
                        },
                        {
                            "id": "ja-n1-u1-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「言葉[ことば]に 媒介[ばいかい]された 認識[にんしき]。」",
                            "options": [
                                "散歩[さんぽ]",
                                "運転[うんてん]",
                                "食事[しょくじ]",
                                "媒介[ばいかい]"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"媒介[ばいかい]\" (Vositachilik / Oraliq vosita bo'lish)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u1-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u1-l5-q1",
                            "question": "「〜に他[ほか]ならない」grammatikasi nimani anglatadi?",
                            "options": [
                                "Boshqa narsadir",
                                "Inkor qiladi",
                                "Aynan ... ning o'zidir / ... dan boshqa narsa emasdir (qat'iy falsafiy xulosa)",
                                "O'xshamaydi"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Is nothing other than..."
                        },
                        {
                            "id": "ja-n1-u1-l5-q2",
                            "question": "「自明[じめい]と見なす」so'zining ma'nosi:",
                            "options": [
                                "O'z-o'zidan ravshan, shubhasiz haqiqat deb hisoblamoq",
                                "Eski deb bilmoq",
                                "Kasal deb bilmoq",
                                "Tushunarsiz deb bilmoq"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Regard as self-evident."
                        },
                        {
                            "id": "ja-n1-u1-l5-q3",
                            "question": "「〜がゆえに (Ga yue ni)」nimani bildiradi?",
                            "options": [
                                "... bilan birga",
                                "... qilgach",
                                "... qaramasdan",
                                "... bo'lganligi sababli (oliy adabiy sabab ergash bog'lovchi)"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Because of / On account of (Classical bungo)."
                        },
                        {
                            "id": "ja-n1-u1-l5-q4",
                            "question": "JLPT N1 Dokkai bo'limi kimlar uchun mo'ljallangan?",
                            "options": [
                                "Faqat sayyohlar",
                                "Boshlang'ich talabalar",
                                "Yapon tilida magistratura/doktorantura dissertatsiyalarini va falsafiy adabiyotlarni erkin tahlil qila oluvchilar uchun",
                                "Bolalar"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Doctoral-level academic treatises & high philosophy."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u2-l1",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u2",
        "unitTitle": "Unit 2: Advanced Kanji & Academic Register",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 1,
        "title": "N1 Master Kanji 1: Cognitive Discrepancy & Ambiguity (齟齬, 乖離, 曖昧, 葛藤, 矛盾)",
        "description": "Tafakkurdagi kelishmovchilik, uzilish, noaniqlik va ziddiyatlarni ifodalovchi N1 iyerogliflari.",
        "estimatedDurationMinutes": 18,
        "icon": "🈴",
        "steps": [
            {
                "id": "ja-n1-u2-l1-s1",
                "title": "Ziddiyat va Noaniqlik Kanjilari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "N1 High-Register Kanji",
                    "explanation": "齟齬 (sogo - kelishmovchilik / uzviy ziddiyat), 乖離 (kairi - keskin uzilish / begonalashuv), 曖昧 (aimai - noaniq / mavhum), 矛盾 (mujun - ziddiyat / paradoks), 葛藤 (kattou - ichki ruhiy kurash).",
                    "vocabulary": [
                        {
                            "term": "齟齬[そご]",
                            "reading": "Sogo",
                            "meaning": "Ziddiyat / Mos kelmaslik",
                            "exampleSentence": "両者[りょうしゃ]の 意見[いけん]に 齟齬[そご]が 生[しょう]じる。",
                            "exampleTranslation": "Ikkala tomon fikrida ziddiyat yuzaga keldi."
                        },
                        {
                            "term": "乖離[かいり]",
                            "reading": "Kairi",
                            "meaning": "Keskin uzilish / Bog'liqlik yo'qolishi",
                            "exampleSentence": "理想[りそう]と 現実[げんじつ]の 乖離[かいり]。",
                            "exampleTranslation": "Orzu va haqiqat o'rtasidagi keskin uzilish."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Master Kanji 1: Cognitive Discrepancy & Ambiguity (齟齬, 乖離, 曖昧, 葛藤, 矛盾)",
                            "meaning": "Tafakkurdagi kelishmovchilik, uzilish, noaniqlik va ziddiyatlarni ifodalovchi N1 iyerogliflari.",
                            "usageNotes": "齟齬 (sogo - kelishmovchilik / uzviy ziddiyat), 乖離 (kairi - keskin uzilish / begonalashuv), 曖昧 (aimai - noaniq / mavhum), 矛盾 (mujun - ziddiyat / paradoks), 葛藤 (kattou - ichki ruhiy kurash).",
                            "examples": [
                                {
                                    "sentence": "両者[りょうしゃ]の 意見[いけん]に 齟齬[そご]が 生[しょう]じる。",
                                    "translation": "Ikkala tomon fikrida ziddiyat yuzaga keldi."
                                },
                                {
                                    "sentence": "理想[りそう]と 現実[げんじつ]の 乖離[かいり]。",
                                    "translation": "Orzu va haqiqat o'rtasidagi keskin uzilish."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Iyeroglifni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u2-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "«Nazariya va amaliyot o'rtasidagi keskin uzilish»:",
                            "options": [
                                "理論[りろん]と 実践[じっせん]の 乖離[かいり]",
                                "曖昧[あいまい]",
                                "矛盾[むじゅん]",
                                "齟齬[そご]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "乖離 (Kairi)."
                        },
                        {
                            "id": "ja-n1-u2-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「理想[りそう]と 現実[げんじつ]の 乖離[かいり]。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "乖離[かいり]",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"乖離[かいり]\" (Keskin uzilish / Bog'liqlik yo'qolishi)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u2-l1-q1",
                            "question": "«Fikrlardagi kelishmovchilik / nomuvofiqlik» oliy kanjisi qaysi?",
                            "options": [
                                "齟齬[そご]",
                                "曖昧[あいまい]",
                                "葛藤[かっとう]",
                                "乖離[かいり]"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "齟齬 (Sogo)."
                        },
                        {
                            "id": "ja-n1-u2-l1-q2",
                            "question": "「曖昧[あいまい]な 態度[たいど]」ning ma'nosi:",
                            "options": [
                                "Aniq javob",
                                "Mavhum, noaniq va ikkilangan pozitsiya",
                                "Quvonch",
                                "Qat'iy qaror"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Ambiguous / evasive attitude."
                        },
                        {
                            "id": "ja-n1-u2-l1-q3",
                            "question": "«Paradoks / O'zaro ziddiyat» kanjisi qaysi?",
                            "options": [
                                "乖離[かいり]",
                                "齟齬[そご]",
                                "矛盾[むじゅん]",
                                "葛藤[かっとう]"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "矛盾 (Mujun)."
                        },
                        {
                            "id": "ja-n1-u2-l1-q4",
                            "question": "「自己[じこ]矛盾[むじゅん]」nimani anglatadi?",
                            "options": [
                                "O'zini maqtash",
                                "O'zini yo'qotish",
                                "O'zini sevish",
                                "O'z-o'zini inkor qiluvchi ichki ziddiyat"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Self-contradiction."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u2-l2",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u2",
        "unitTitle": "Unit 2: Advanced Kanji & Academic Register",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 2,
        "title": "N1 Master Kanji 2: Statecraft, Vulnerability & Anxiety (憂慮, 脆弱, 覇権, 諮問, 隠蔽)",
        "description": "Davlat xavfsizligi, chuqur xavotir, zaiflik, gegemoniya va yashirish kanjilari.",
        "estimatedDurationMinutes": 18,
        "icon": "🈴",
        "steps": [
            {
                "id": "ja-n1-u2-l2-s1",
                "title": "Geosiyosat va Xavfsizlik Kanjilari",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "High Statecraft & Epistemic Terms",
                    "explanation": "憂慮 (yuuryo - chuqur tashvish/xavotir), 脆弱 (zeijaku - zaiflik/himoyasizlik), 覇権 (haken - gegemoniya/hukmronlik), 諮問 (shimon - rasmiy konsultatsiya/ekspert maslahati), 隠蔽 (inpei - faktlarni qasddan yashirish).",
                    "vocabulary": [
                        {
                            "term": "憂慮[ゆうりょ]",
                            "reading": "Yuuryo",
                            "meaning": "Chuqur tashvish / Xavotir",
                            "exampleSentence": "事態[じたい]を 深[ふか]く 憂慮[ゆうりょ]する。",
                            "exampleTranslation": "Vaziyatdan chuqur xavotirdamiz."
                        },
                        {
                            "term": "脆弱[ぜいじゃく]性",
                            "reading": "Zeijakusei",
                            "meaning": "Zaiflik / Omonatlik (Vulnerability)",
                            "exampleSentence": "システムの 脆弱[ぜいじゃく]性。",
                            "exampleTranslation": "Tizimning zaif tomoni."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Master Kanji 2: Statecraft, Vulnerability & Anxiety (憂慮, 脆弱, 覇権, 諮問, 隠蔽)",
                            "meaning": "Davlat xavfsizligi, chuqur xavotir, zaiflik, gegemoniya va yashirish kanjilari.",
                            "usageNotes": "憂慮 (yuuryo - chuqur tashvish/xavotir), 脆弱 (zeijaku - zaiflik/himoyasizlik), 覇権 (haken - gegemoniya/hukmronlik), 諮問 (shimon - rasmiy konsultatsiya/ekspert maslahati), 隠蔽 (inpei - faktlarni qasddan yashirish).",
                            "examples": [
                                {
                                    "sentence": "事態[じたい]を 深[ふか]く 憂慮[ゆうりょ]する。",
                                    "translation": "Vaziyatdan chuqur xavotirdamiz."
                                },
                                {
                                    "sentence": "システムの 脆弱[ぜいじゃく]性。",
                                    "translation": "Tizimning zaif tomoni."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Iyeroglifni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u2-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "«Faktlarni atayin yashirish / Berkitish» kanjisi qaysi?",
                            "options": [
                                "憂慮[ゆうりょ]",
                                "覇権[はけん]",
                                "諮問[しもん]",
                                "隠蔽[いんぺい]"
                            ],
                            "correctAnswer": 3,
                            "explanation": "隠蔽 (Inpei)."
                        },
                        {
                            "id": "ja-n1-u2-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「システムの 脆弱[ぜいじゃく]性。」",
                            "options": [
                                "散歩[さんぽ]",
                                "脆弱[ぜいじゃく]性",
                                "運転[うんてん]",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"脆弱[ぜいじゃく]性\" (Zaiflik / Omonatlik (Vulnerability))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u2-l2-q1",
                            "question": "«Dunyo gegemonligi / Siyosiy ustunlik» kanjisi qaysi?",
                            "options": [
                                "隠蔽[いんぺい]",
                                "脆弱[ぜいじゃく]",
                                "諮問[しもん]",
                                "覇権[はけん]"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "覇権 (Haken)."
                        },
                        {
                            "id": "ja-n1-u2-l2-q2",
                            "question": "「諮問[しもん]機関[きかん]」so'zining ma'nosi:",
                            "options": [
                                "Kasalxona",
                                "Maktab",
                                "Maslahat beruvchi ekspert kengashi / Maslahat organi",
                                "Sud binosi"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Advisory council / Consultative body."
                        },
                        {
                            "id": "ja-n1-u2-l2-q3",
                            "question": "«Kiber-xavfsizlikdagi zaiflik»:",
                            "options": [
                                "セキュリティです",
                                "セキュリティの 脆弱[ぜいじゃく]性",
                                "セキュリティの 憂慮[ゆうりょ]",
                                "セキュリティの 覇権[はけん]"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Security vulnerability (Zeijakusei)."
                        },
                        {
                            "id": "ja-n1-u2-l2-q4",
                            "question": "「隠蔽[いんぺい]工作[こうさく]」nimani bildiradi?",
                            "options": [
                                "Dalillarni yashirish va jamoatchilikni chalg'itish harakati",
                                "Yangi qurilish",
                                "Qonun qabul qilish",
                                "Diplomatik uchrashuv"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Cover-up operation."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u2-l3",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u2",
        "unitTitle": "Unit 2: Advanced Kanji & Academic Register",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 3,
        "title": "N1 Choukai: Integrated Lecture Synthesis (統合学術講義)",
        "description": "Universitet professori ma'ruzasidagi ko'p o'lchovli ilmiy sintezni to'liq tushunish.",
        "estimatedDurationMinutes": 18,
        "icon": "🎓",
        "steps": [
            {
                "id": "ja-n1-u2-l3-s1",
                "title": "Akademik Ma'ruza Tinglash",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Doctoral Lecture Synthesis",
                    "explanation": "Choukai bo'limida Kvant fizikasi, neyrobiologiya yoki konstitutsiyaviy huquq bo'yicha 3 daqiqalik ma'ruza tinglanadi. Savollar ma'ruzadagi paradoksal xulosalar va gipotezalarni sinovdan o'tkazadi.",
                    "keyPoints": [
                        "No visual questions on test sheet; everything is processed aurally with rapid note-taking."
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Choukai: Integrated Lecture Synthesis (統合学術講義)",
                            "meaning": "Universitet professori ma'ruzasidagi ko'p o'lchovli ilmiy sintezni to'liq tushunish.",
                            "usageNotes": "Choukai bo'limida Kvant fizikasi, neyrobiologiya yoki konstitutsiyaviy huquq bo'yicha 3 daqiqalik ma'ruza tinglanadi. Savollar ma'ruzadagi paradoksal xulosalar va gipotezalarni sinovdan o'tkazadi.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l3-s2",
                "title": "Ma'ruza Mashqi",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Ilmiy gipotezani aniqlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u2-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "Professor neyrobiologiyadagi yangi kashfiyot bo'yicha qanday xulosa berdi?",
                            "options": [
                                "Xotirani yaxshilash imkonsiz",
                                "Miya 20 yoshda to'liq to'xtaydi",
                                "Inson miyasi qariganda ham neyroplastiklik tufayli yangi aloqalar hosil qila oladi",
                                "Uyqu kerak emas"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Neuroplasticity persists across the human lifespan."
                        },
                        {
                            "id": "ja-n1-u2-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "余儀[よぎ]なくされる",
                                "食事[しょくじ]",
                                "散歩[さんぽ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u2-l3-q1",
                            "question": "N1 Choukai da professor qarama-qarshi nazariyalarni solishtirganda qaysi ko'nikma talab etiladi?",
                            "options": [
                                "Xonadan chiqib ketish",
                                "Faqat birinchi gapni eshitish",
                                "Har bir gipotezaning dalillarini tezda qayd qilib, yakuniy sintezni topish",
                                "Lug'at varaqlash"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Rapid conceptual synthesis & hypothesis contrast."
                        },
                        {
                            "id": "ja-n1-u2-l3-q2",
                            "question": "「仮説[かせつ]を 検証[けんしょう]する」ning ma'nosi:",
                            "options": [
                                "Gipotezadan qochmoq",
                                "Darsdan qochmoq",
                                "Gipotezani o'chirib tashlamoq",
                                "Ilmiy gipotezani amalda tekshirib tasdiqlamoq"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Verify/test a hypothesis."
                        },
                        {
                            "id": "ja-n1-u2-l3-q3",
                            "question": "N1 Choukai testida savol qachon aytiladi?",
                            "options": [
                                "Uzoq ma'ruza matni to'liq tugagandan so'nggina aytiladi",
                                "Hech qachon aytilmaydi",
                                "Matndan oldin aytiladi",
                                "Boshida ekranda yoziladi"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Question is asked ONLY after the full monologue concludes."
                        },
                        {
                            "id": "ja-n1-u2-l3-q4",
                            "question": "«パラダイムシフト (Paradigm Shift)» nimani anglatadi?",
                            "options": [
                                "Kompyuter klaviaturasi",
                                "Yangi poyezd",
                                "Ilmiy tafakkur va asosiy dunyoqarashning tubdan inqilobiy o'zgarishi",
                                "Oddiy xato"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Fundamental paradigm shift."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u2-l4",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u2",
        "unitTitle": "Unit 2: Advanced Kanji & Academic Register",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 4,
        "title": "Ultimate JLPT N1 Full Simulation Exam: Grand Mastery",
        "description": "JLPT N1 oliy darajali to'liq vaqtli imtihon sinovi va xatolar ustida ishlash.",
        "estimatedDurationMinutes": 20,
        "icon": "📝",
        "steps": [
            {
                "id": "ja-n1-u2-l4-s1",
                "title": "N1 Mock Exam Strategy",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "JLPT N1 Grand Blueprint",
                    "explanation": "N1 imtihoni 2000+ kanji, 10,000+ so'z boyligi va 110 daqiqalik intensiv Language Knowledge/Reading bo'limidan iborat.",
                    "keyPoints": [
                        "Moji/Goi/Bunpou: 40 minutes max",
                        "Dokkai (Short, Mid, Long, Comparative, Information Retrieval): 70 minutes"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "Ultimate JLPT N1 Full Simulation Exam: Grand Mastery",
                            "meaning": "JLPT N1 oliy darajali to'liq vaqtli imtihon sinovi va xatolar ustida ishlash.",
                            "usageNotes": "N1 imtihoni 2000+ kanji, 10,000+ so'z boyligi va 110 daqiqalik intensiv Language Knowledge/Reading bo'limidan iborat.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l4-s2",
                "title": "N1 Sinov Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u2-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "「彼[かれ]の 成功[せいこう]は、血[ち]の にじむような 努力[どりょく]の _______。」 (Natijasi / Meva bergan holati)",
                            "options": [
                                "くせに ある",
                                "賜物[たまもの]で ある (Tamamono de aru)",
                                "せいで ある",
                                "あまりで ある"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Tamamono de aru (qimmatbaho mevasidir)."
                        },
                        {
                            "id": "ja-n1-u2-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。」",
                            "options": [
                                "散歩[さんぽ]",
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "拍車[はくしゃ]をかける"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拍車[はくしゃ]をかける\" (Yana-da tezlashtirmoq, kuchaytirmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u2-l4-q1",
                            "question": "「〜の 賜物[たまもの]」nimani anglatadi?",
                            "options": [
                                "Sovg'a qutisi",
                                "Mashaqqatli mehnatning oliy mevasi / Natijasi",
                                "Yomon oqibat",
                                "Tasodif"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Fruit / Blessed outcome of great toil."
                        },
                        {
                            "id": "ja-n1-u2-l4-q2",
                            "question": "「一概[いちがい]に〜とは 言[い]えない」ning ma'nosi:",
                            "options": [
                                "Barchasini bir xil deb umumlashtirib bo'lmaydi",
                                "Albatta shunday",
                                "Hech qachon bo'lmaydi",
                                "To'g'ri gap"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Cannot generalize sweepingly."
                        },
                        {
                            "id": "ja-n1-u2-l4-q3",
                            "question": "«JLPT N1 umumiy sertifikat balining o'tish chegarasi qancha?»",
                            "options": [
                                "50 ball",
                                "180 ball",
                                "90 ball",
                                "100 / 180 ball (har bir bo'limdan kamida 19 ball bilan)"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "100/180 overall with 19/60 sectional minimums."
                        },
                        {
                            "id": "ja-n1-u2-l4-q4",
                            "question": "「余儀[よぎ]なく される」nimani bildiradi?",
                            "options": [
                                "Vaziyat taqozosi bilan majburan shunday yo'l tutishga majbur bo'lmoq (Forced to do)",
                                "Rad etmoq",
                                "Dam olmoq",
                                "Xursand bo'lmoq"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Forced / Constrained inevitably."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u2-l5",
        "courseId": "japanese-n1",
        "unitId": "ja-n1-u2",
        "unitTitle": "Unit 2: Advanced Kanji & Academic Register",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 5,
        "title": "JLPT N1 Pinnacle Capstone: Native-Equivalent Master Certification",
        "description": "Yapon tili bo'yicha dunyo miqyosidagi eng oliy sertifikatlash bitiruv imtihoni (JLPT N1 Grand Pinnacle).",
        "estimatedDurationMinutes": 20,
        "icon": "👑",
        "steps": [
            {
                "id": "ja-n1-u2-l5-s1",
                "title": "JLPT N1 Grand Pinnacle Xulosasi",
                "type": "learn",
                "estimatedMinutes": 5,
                "learnData": {
                    "title": "Pinnacle of Japanese Language Mastery (JLPT N1)",
                    "explanation": "Siz Yapon tilining eng yuksak cho'qqisi — JLPT N1 darajasini to'liq zabt etdingiz! Sizning bilimingiz Yaponiya vazirliklari, Oliy sud, Tokio Universiteti ilmiy kengashlari va xalqaro korporatsiyalarda ona tili darajasidagi tengma-teng ilmiy va kasbiy salohiyat sifatida to'liq e'tirof etiladi.",
                    "keyPoints": [
                        "2000+ Kanji absolute fluency",
                        "Classical Bungo syntax & profound modern philosophy mastery",
                        "JLPT N1 certified peak capability"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "JLPT N1 Pinnacle Capstone: Native-Equivalent Master Certification",
                            "meaning": "Yapon tili bo'yicha dunyo miqyosidagi eng oliy sertifikatlash bitiruv imtihoni (JLPT N1 Grand Pinnacle).",
                            "usageNotes": "Siz Yapon tilining eng yuksak cho'qqisi — JLPT N1 darajasini to'liq zabt etdingiz! Sizning bilimingiz Yaponiya vazirliklari, Oliy sud, Tokio Universiteti ilmiy kengashlari va xalqaro korporatsiyalarda ona tili darajasidagi tengma-teng ilmiy va kasbiy salohiyat sifatida to'liq e'tirof etiladi.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l5-s2",
                "title": "Oliy Bitiruv Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Yakuniy bitiruv savoliga to'g'ri javob bering.",
                    "exercises": [
                        {
                            "id": "ja-n1-u2-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "「いかに 時代[じだい]が 変遷[へんせん]しようと、真理[しんり]は _______。」 (Oliy adabiy yakun)",
                            "options": [
                                "不変[ふへん]で ある (Fuhen de aru)",
                                "でした",
                                "ない",
                                "変[か]わる"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Fuhen de aru (haqiqat o'zgarmasdir)."
                        },
                        {
                            "id": "ja-n1-u2-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。」",
                            "options": [
                                "妥協[だきょう]を許さない",
                                "運転[うんてん]",
                                "食事[しょくじ]",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"妥協[だきょう]を許さない\" (Kelishuvga bormaydigan, murosasiz darajada sifat talabchan)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u2-l5-s3",
                "title": "JLPT N1 Yakuniy Grand Sertifikatsiya Testi",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "JLPT N1 darajasini to'liq tasdiqlash uchun barcha savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u2-l5-q1",
                            "question": "「時代[じだい]の 変遷[へんせん]」dagi 変遷 nimani anglatadi?",
                            "options": [
                                "Davrlarning almashinuvi / Tarixiy evrilish",
                                "Kitob o'qish",
                                "Quyosh chiqishi",
                                "Bitta kun"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Historical vicissitudes / Transitions of eras."
                        },
                        {
                            "id": "ja-n1-u2-l5-q2",
                            "question": "「真理[しんり]は 不変[ふへん]で ある」ning ma'nosi:",
                            "options": [
                                "Haqiqat yo'q",
                                "Haqiqat yangidir",
                                "Haqiqat o'zgarmas va boqiydir",
                                "Haqiqat yolg'ondir"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Truth is immutable."
                        },
                        {
                            "id": "ja-n1-u2-l5-q3",
                            "question": "Yapon tili bo'yicha JLPT tizimidagi eng yuqori oliy daraja qaysi?",
                            "options": [
                                "JLPT N1",
                                "JLPT N5",
                                "JLPT N2",
                                "CEFR B2"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "JLPT N1."
                        },
                        {
                            "id": "ja-n1-u2-l5-q4",
                            "question": "JLPT N1 sertifikati qanday huquqiy va akademik maqom beradi?",
                            "options": [
                                "Faqat muzeyga kirish chiptasi",
                                "Hech qanday imtiyoz bermaydi",
                                "Faqat do'konda chegirma",
                                "Yaponiyada shifokorlik litsenziyasi, oliy davlat xizmati, universitet professori va doimiy rezidentlik ballarida eng yuqori imtiyoz beradi"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Highest legal, medical, academic & immigration status advantages."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u3-l1",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u3",
        "unitTitle": "Unit 3: N1 Classical Grammar & Literary Forms",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 11,
        "title": "〜たる者 (As a person in the position of / Being a...)",
        "description": "Burch va mas'uliyat: \"Ma'lum oliy maqom egasi sifatida...\".",
        "estimatedDurationMinutes": 18,
        "icon": "👑",
        "steps": [
            {
                "id": "ja-n1-u3-l1-s1",
                "title": "〜たる者 Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜たる者 (Taru mono)",
                    "explanation": "Oliy mas'uliyatli shaxs (O'qituvchi, Davlat arbobi, Shifokor) o'z burchiga sodiq bo'lishi kerakligini ta'kidlash.",
                    "keyPoints": [
                        "指導者たる者は、常に冷静でなければならない。 (Etakchi bo'lgan shaxs doim bosiq bo'lishi shart.)",
                        "医者たる者、患者の命を最優先にすべきだ。 (Shifokor bo'lgan inson bemor hayotini birinchi o'ringa qo'yishi kerak.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "指導者[しどうしゃ]",
                            "reading": "Shidousha",
                            "meaning": "Etakchi / Yo'lboshchi",
                            "exampleSentence": "優れた指導者。",
                            "exampleTranslation": "Ajoyib etakchi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜たる者 (As a person in the position of / Being a...)",
                            "meaning": "Burch va mas'uliyat: \"Ma'lum oliy maqom egasi sifatida...\".",
                            "usageNotes": "Oliy mas'uliyatli shaxs (O'qituvchi, Davlat arbobi, Shifokor) o'z burchiga sodiq bo'lishi kerakligini ta'kidlash.",
                            "examples": [
                                {
                                    "sentence": "優れた指導者。",
                                    "translation": "Ajoyib etakchi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l1-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u3-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "「教育者[きょういくしゃ] _______、学生[がくせい]の 模範[もはん]と なれ。」",
                            "options": [
                                "となると",
                                "たる者 (taru mono)",
                                "としろ",
                                "にあって"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Taru mono = ta'lim beruvchi shaxs sifatida."
                        },
                        {
                            "id": "ja-n1-u3-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。」",
                            "options": [
                                "散歩[さんぽ]",
                                "精通[せいつう]している",
                                "運転[うんてん]",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"精通[せいつう]している\" (Bir sohani mukammal, ipidan ignasigacha bilmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u3-l1-q1",
                            "question": "「〜たる者」 grammatik birikmasi nimaga nisbatan qo'llaniladi?",
                            "options": [
                                "Yosh bolalarga",
                                "Ma'lum yuksak mavqe, unvon yoki mas'uliyatli kasb egalariga nisbatan",
                                "Narsalarga",
                                "Hayvonlarga"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Mas'uliyatli va yuksak maqom egalariga."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u3-l2",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u3",
        "unitTitle": "Unit 3: N1 Classical Grammar & Literary Forms",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 12,
        "title": "〜に至る / 〜に至るまで (Reaching the point of / Down to)",
        "description": "Chegara va yakuniy bosqich: \"...darajasigacha yetib borish\".",
        "estimatedDurationMinutes": 18,
        "icon": "📍",
        "steps": [
            {
                "id": "ja-n1-u3-l2-s1",
                "title": "〜に至る Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜に至る (Ni itaru)",
                    "explanation": "Hodisalarning taraqqiyoti natijasida muayyan oliy yoki keskin bosqichga yetib kelishi.",
                    "keyPoints": [
                        "事態がここに至っては、解散せざるを得ない。 (Vaziyat shunday darajaga yetgan ekan, tarqalishga majburmiz.)",
                        "服装から靴に至るまで完璧だった。 (Kiyimidan tortib poyabzaligacha mukammal edi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "事態[じたい]",
                            "reading": "Jitai",
                            "meaning": "Vaziyat / Ahvol",
                            "exampleSentence": "事態が悪化する。",
                            "exampleTranslation": "Vaziyat yomonlashadi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜に至る / 〜に至るまで (Reaching the point of / Down to)",
                            "meaning": "Chegara va yakuniy bosqich: \"...darajasigacha yetib borish\".",
                            "usageNotes": "Hodisalarning taraqqiyoti natijasida muayyan oliy yoki keskin bosqichga yetib kelishi.",
                            "examples": [
                                {
                                    "sentence": "事態が悪化する。",
                                    "translation": "Vaziyat yomonlashadi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u3-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "「問題[もんだい]が 裁判[さいばん]に _______、事態[じたい]は 重大[じゅうだい]化した。」",
                            "options": [
                                "沿う",
                                "従う",
                                "至る (itaru)",
                                "及ぶ"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Ni itaru = sud darajasigacha yetib bordi."
                        },
                        {
                            "id": "ja-n1-u3-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "余儀[よぎ]なくされる",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u3-l2-q1",
                            "question": "「に至るまで」 ning ma'nosi:",
                            "options": [
                                "...siz",
                                "...dan buyon",
                                "...ga qadar / ...darajasigacha qamrab olib",
                                "...dan boshlab"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "...ga qadar (hamma narsani qamrab)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u3-l3",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u3",
        "unitTitle": "Unit 3: N1 Classical Grammar & Literary Forms",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 13,
        "title": "〜を余儀なくされる (To be forced to / Compelled to)",
        "description": "Vaziyat taqozo etgan noiloj majburiyat: \"...majburiyatida qolmoq\".",
        "estimatedDurationMinutes": 18,
        "icon": "⚠️",
        "steps": [
            {
                "id": "ja-n1-u3-l3-s1",
                "title": "〜を余儀なくされる Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜を余儀なくされる (O yoginaku sareru)",
                    "explanation": "Tashqi muqarrar holatlar (tabiiy ofat, urush, inqiroz) tufayli rejadan voz kechishga majbur bo'lish.",
                    "keyPoints": [
                        "台風のため、飛行機は欠航を余儀なくされた。 (Tayfun sababli parvoz bekor qilinishga majbur bo'lindi.)",
                        "資金難により、プロジェクトの変更を余儀なくされた。 (Moliyaviy qiyinchilik sabab loyiha o'zgardi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "欠航[けっこう]",
                            "reading": "Kekkou",
                            "meaning": "Reys/parvozning bekor qilinishi",
                            "exampleSentence": "全便欠航となった。",
                            "exampleTranslation": "Barcha reyslar bekor qilindi."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜を余儀なくされる (To be forced to / Compelled to)",
                            "meaning": "Vaziyat taqozo etgan noiloj majburiyat: \"...majburiyatida qolmoq\".",
                            "usageNotes": "Tashqi muqarrar holatlar (tabiiy ofat, urush, inqiroz) tufayli rejadan voz kechishga majbur bo'lish.",
                            "examples": [
                                {
                                    "sentence": "全便欠航となった。",
                                    "translation": "Barcha reyslar bekor qilindi."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n2-u3-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "「不況[ふきょう]の 影響[えいきょう]で 撤退[てったい]を _______。」",
                            "options": [
                                "余儀なくされた (yoginaku sare ta)",
                                "せざるを得ない",
                                "にほかならない",
                                "極めた"
                            ],
                            "correctAnswer": 0,
                            "explanation": "O yoginaku sare ta = chekinishga majbur qilindi."
                        },
                        {
                            "id": "ja-n1-u3-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "散歩[さんぽ]",
                                "拍車[はくしゃ]をかける"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拍車[はくしゃ]をかける\" (Yana-da tezlashtirmoq, kuchaytirmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u3-l3-q1",
                            "question": "「余儀なくされる」 nima sababdan ishlatiladi?",
                            "options": [
                                "Do'stlar taklifi bilan",
                                "Pul ko'pligidan",
                                "Xursandchilikdan",
                                "Tashqi vaziyat sababli ixtiyorsiz majbur bo'lganda"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Tashqi vaziyat sabab majbur bo'lganda."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u3-l4",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u3",
        "unitTitle": "Unit 3: N1 Classical Grammar & Literary Forms",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 14,
        "title": "〜が早いか (No sooner had... than / As soon as)",
        "description": "Vaqt bo'yicha ketma-ket dalahol sodir bo'lgan shiddatli harakat: \"...bahamanoz / ...bilan birga\".",
        "estimatedDurationMinutes": 18,
        "icon": "⚡",
        "steps": [
            {
                "id": "ja-n1-u3-l4-s1",
                "title": "〜が早いか Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜が早いか (Ga hayai ka)",
                    "explanation": "Birinchi harakat tugashi bilanoq ikkinchisi lahzada yuz berganda.",
                    "keyPoints": [
                        "チャイムが鳴るが早いか、生徒たちは飛び出した。 (Qo'ng'iroq chalinishi bilan o'quvchilar otilib chiqishdi.)",
                        "部屋に入るが早いか、コートを脱ぎ捨てた。 (Xonaga kirishi bilanoq paltosini yechib tashladi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "飛び出す[とびだす]",
                            "reading": "Tobidasu",
                            "meaning": "Otilib chiqmoq",
                            "exampleSentence": "勢いよく飛び出す。",
                            "exampleTranslation": "Shiddat bilan otilib chiqmoq."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜が早いか (No sooner had... than / As soon as)",
                            "meaning": "Vaqt bo'yicha ketma-ket dalahol sodir bo'lgan shiddatli harakat: \"...bahamanoz / ...bilan birga\".",
                            "usageNotes": "Birinchi harakat tugashi bilanoq ikkinchisi lahzada yuz berganda.",
                            "examples": [
                                {
                                    "sentence": "勢いよく飛び出す。",
                                    "translation": "Shiddat bilan otilib chiqmoq."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri grammatik shaklni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u3-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "「ベルが 鳴[な]るが _______、電話[でんわ]に でた。」",
                            "options": [
                                "早いか (hayai ka)",
                                "や否や",
                                "なり",
                                "そばから"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Ga hayai ka = chalinishi bilan."
                        },
                        {
                            "id": "ja-n1-u3-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。」",
                            "options": [
                                "妥協[だきょう]を許さない",
                                "散歩[さんぽ]",
                                "食事[しょくじ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"妥協[だきょう]を許さない\" (Kelishuvga bormaydigan, murosasiz darajada sifat talabchan)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u3-l4-q1",
                            "question": "「〜が早いか」 grammatik shakli fe'lning qaysi ko'rinishiga ulqanadi?",
                            "options": [
                                "Dictionary form (Lug'at shakli) yoki Ta-form",
                                "Te-form",
                                "Nai-form",
                                "Imperative"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Dict-form / Ta-form."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u3-l5",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u3",
        "unitTitle": "Unit 3: N1 Classical Grammar & Literary Forms",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 15,
        "title": "〜まじき (Unforgivable / Must not / Unbecoming)",
        "description": "Ahloqiy va kasbiy nuqtai nazardan aslo yo'l qo'yib bo'lmaydigan harakat.",
        "estimatedDurationMinutes": 18,
        "icon": "🛑",
        "steps": [
            {
                "id": "ja-n1-u3-l5-s1",
                "title": "〜まじき Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜まじき (Majiki)",
                    "explanation": "Muayyan mavqedagi inson qilishi aslo mumkin bo'lmagan nojoiz harakat.",
                    "keyPoints": [
                        "プロとしてあるまじき行為だ。 (Professional odam qilishi aslo mumkin bo'lmagan xatti-harakatdir.)",
                        "警官にあるまじき不正発言。 (Militsionerga aslo to'g'ri kelmaydigan nojoiz bayonot.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "行為[こうい]",
                            "reading": "Koui",
                            "meaning": "Harakat / Qilmish",
                            "exampleSentence": "違法な行為。",
                            "exampleTranslation": "Noqonuniy qilmish."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜まじき (Unforgivable / Must not / Unbecoming)",
                            "meaning": "Ahloqiy va kasbiy nuqtai nazardan aslo yo'l qo'yib bo'lmaydigan harakat.",
                            "usageNotes": "Muayyan mavqedagi inson qilishi aslo mumkin bo'lmagan nojoiz harakat.",
                            "examples": [
                                {
                                    "sentence": "違法な行為。",
                                    "translation": "Noqonuniy qilmish."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l5-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u3-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "「教師[きょうし]として ある _______ 発言[はつげん]だ。」",
                            "options": [
                                "べからざる",
                                "まじ",
                                "まじき (majiki)",
                                "まじく"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Aru majiki = to'g'ri kelmaydigan nojoiz."
                        },
                        {
                            "id": "ja-n1-u3-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。」",
                            "options": [
                                "散歩[さんぽ]",
                                "運転[うんてん]",
                                "精通[せいつう]している",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"精通[せいつう]している\" (Bir sohani mukammal, ipidan ignasigacha bilmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u3-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u3-l5-q1",
                            "question": "「あるまじき」 fe'li yapon adabiyotida nimani anglatadi?",
                            "options": [
                                "Judayam yaxshi ish",
                                "Oddiy gap",
                                "Ma'lum kasb yoki axloq egasiga aslo yarashmaydigan yo'l qo'yilmas harakat",
                                "Tez bajariladigan ish"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Yo'l qo'yilmas axloqsiz harakat."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u4-l1",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u4",
        "unitTitle": "Unit 4: N1 Philosophical & Literary Discourse",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 16,
        "title": "N1 Critical Philosophy Reading (哲学・思想の論説文)",
        "description": "Falsafiy va sotsiologik murakkab N1 matnlarini chuqur tahlil qilish.",
        "estimatedDurationMinutes": 20,
        "icon": "📖",
        "steps": [
            {
                "id": "ja-n1-u4-l1-s1",
                "title": "Falsafiy Matn Tahlili",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "N1 Philosophical Prose Analysis",
                    "explanation": "Inson borlig'i, estetika va sotsiologiyaga oid klassik va zamonaviy yapon esse (Zuihitsu) tahlili.",
                    "keyPoints": [
                        "概念 (Gainen) — tushuncha/konsepsiya",
                        "普遍的 (Fuhenteki) — universal/umumiy"
                    ],
                    "vocabulary": [
                        {
                            "term": "普遍的[ふへんてき]",
                            "reading": "Fuhenteki",
                            "meaning": "Universal / Barcha uchun umumiy",
                            "exampleSentence": "普遍的な真理。",
                            "exampleTranslation": "Universal haqiqat."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Critical Philosophy Reading (哲学・思想の論説文)",
                            "meaning": "Falsafiy va sotsiologik murakkab N1 matnlarini chuqur tahlil qilish.",
                            "usageNotes": "Inson borlig'i, estetika va sotsiologiyaga oid klassik va zamonaviy yapon esse (Zuihitsu) tahlili.",
                            "examples": [
                                {
                                    "sentence": "普遍的な真理。",
                                    "translation": "Universal haqiqat."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l1-s2",
                "title": "Dokkai Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Matn bo'yicha to'g'ri xulosani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u4-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "「普遍的価値」 deganda nima tushuniladi?",
                            "options": [
                                "Zamon va makondan qat'i nazar barcha insoniyat uchun umumiy bo'lgan qadriyat",
                                "Faqat bitta davlatniki",
                                "Vaqtinchalik narsa",
                                "Pul"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Barcha uchun universal qadriyat."
                        },
                        {
                            "id": "ja-n1-u4-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "余儀[よぎ]なくされる",
                                "散歩[さんぽ]",
                                "食事[しょくじ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u4-l1-q1",
                            "question": "N1 Dokkaida muallif pozitsiyasini aniqlovchi kalit ibora:",
                            "options": [
                                "「〜にほかならない」 / 「〜と考えられる」",
                                "「かもしれない」",
                                "「そうです」",
                                "「でしょう」"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Ni hokaranarai / to kangaerareru."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u4-l2",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u4",
        "unitTitle": "Unit 4: N1 Philosophical & Literary Discourse",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 17,
        "title": "〜んがため / 〜んがために (In order to / For the purpose of)",
        "description": "Yuksak maqsad yo'lida harakat qilish: \"...maqsadida / ...ni niyat qilib\".",
        "estimatedDurationMinutes": 18,
        "icon": "🎯",
        "steps": [
            {
                "id": "ja-n1-u4-l2-s1",
                "title": "〜んがため Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜んがため (N ga tame)",
                    "explanation": "Nai-stem + んがため. Yuksak g'oya yoki niyat yo'lida borini berib harakat qilish.",
                    "keyPoints": [
                        "夢を叶えんがため、昼夜を問わず勉強した。 (Orzusini ushalish niyatida tunu kun o'qidi.)",
                        "真相を明らかにせんがため、調査を続けた。 (Haqiqatni oshkor etish niyatida surishtiruvni davom ettirdi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "真相[しんそう]",
                            "reading": "Shinsou",
                            "meaning": "Haqiqat / Asl holat",
                            "exampleSentence": "真相を究明する。",
                            "exampleTranslation": "Haqiqatni aniqlamoq."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜んがため / 〜んがために (In order to / For the purpose of)",
                            "meaning": "Yuksak maqsad yo'lida harakat qilish: \"...maqsadida / ...ni niyat qilib\".",
                            "usageNotes": "Nai-stem + んがため. Yuksak g'oya yoki niyat yo'lida borini berib harakat qilish.",
                            "examples": [
                                {
                                    "sentence": "真相を究明する。",
                                    "translation": "Haqiqatni aniqlamoq."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l2-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri grammatik iborani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u4-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "「身[み]の 清白[せいはく]を 証明[しょうめい]せ _______、最高裁[さいこうさい]に 上訴[じょうそ]した。」",
                            "options": [
                                "ともなく",
                                "ことなしに",
                                "んばかり",
                                "んがため (n ga tame)"
                            ],
                            "correctAnswer": 3,
                            "explanation": "N ga tame = isbotlash niyatida."
                        },
                        {
                            "id": "ja-n1-u4-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "散歩[さんぽ]",
                                "拍車[はくしゃ]をかける"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拍車[はくしゃ]をかける\" (Yana-da tezlashtirmoq, kuchaytirmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u4-l2-q1",
                            "question": "「する」 fe'li 「〜んがため」 bilan birikkanda qanday shaklga o'tadi?",
                            "options": [
                                "しんがため",
                                "さんがため",
                                "すんがため",
                                "「せんがため」 (Sen ga tame)"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Suru -> Sen ga tame."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u4-l3",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u4",
        "unitTitle": "Unit 4: N1 Philosophical & Literary Discourse",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 18,
        "title": "〜をおいて (Apart from / Excluding)",
        "description": "Tengsiz va yagona ekanligini ta'kidlash: \"...dan bo'lak / ...dan o'zga yo'q\".",
        "estimatedDurationMinutes": 18,
        "icon": "🌟",
        "steps": [
            {
                "id": "ja-n1-u4-l3-s1",
                "title": "〜をおいて Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜をおいて (O oite)",
                    "explanation": "Ushbu inson yoki narsadan bo'lak munosibi yo'qligini yuksak baholash.",
                    "keyPoints": [
                        "この仕事を任せられる人は、彼をおいて他にいない。 (Bu ishni topshirsa bo'ladigan inson undan bo'lak yo'q.)",
                        "今をおいて好機はない。 (Hozirgisidan o'zga qulay imkoniyat bo'lmaydi.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "好機[こうき]",
                            "reading": "Kouki",
                            "meaning": "Qulay imkoniyat",
                            "exampleSentence": "絶好の好機。",
                            "exampleTranslation": "Juda qulay imkoniyat."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜をおいて (Apart from / Excluding)",
                            "meaning": "Tengsiz va yagona ekanligini ta'kidlash: \"...dan bo'lak / ...dan o'zga yo'q\".",
                            "usageNotes": "Ushbu inson yoki narsadan bo'lak munosibi yo'qligini yuksak baholash.",
                            "examples": [
                                {
                                    "sentence": "絶好の好機。",
                                    "translation": "Juda qulay imkoniyat."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri iborani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u4-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "「次期[じき] リーダーは 彼女[かのじょ] _______ 他[ほか]に いない。」",
                            "options": [
                                "にして",
                                "をもって",
                                "をおいて (o oite)",
                                "をめぐって"
                            ],
                            "correctAnswer": 2,
                            "explanation": "O oite = undan bo'lak yo'q."
                        },
                        {
                            "id": "ja-n1-u4-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。」",
                            "options": [
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "妥協[だきょう]を許さない",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"妥協[だきょう]を許さない\" (Kelishuvga bormaydigan, murosasiz darajada sifat talabchan)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u4-l3-q1",
                            "question": "「〜をおいて」 iborasidan keyin qanday jumla keladi?",
                            "options": [
                                "Eski uy",
                                "O'quvchi",
                                "「〜他にない」 kabi inkor va yagonalikni ta'kidlovchi ibora",
                                "Katta pul"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "...hoka ni nai (undan bo'lak yo'q)."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u4-l4",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u4",
        "unitTitle": "Unit 4: N1 Philosophical & Literary Discourse",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 19,
        "title": "〜極まる / 〜極まりない (Extremely / In the extreme)",
        "description": "Juda yuqori darajadagi holat yoki hissiyot: \"O'ta ... / Cheksiz ...\".",
        "estimatedDurationMinutes": 18,
        "icon": "🌋",
        "steps": [
            {
                "id": "ja-n1-u4-l4-s1",
                "title": "〜極まる Qoidasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "〜極まる (Kiwamaru) / 〜極まりない (Kiwamarinai)",
                    "explanation": "Salbiy yoki ijobiy holatning chekka va eng cho'qqi darajasini ifodalash.",
                    "keyPoints": [
                        "彼の態度は失礼極まる。 (Mening munosabati o'ta behurmatlikning o'zidir.)",
                        "感概極まりない思いだ。 (Hissiyotlarim chegara bilmayapti.)"
                    ],
                    "vocabulary": [
                        {
                            "term": "失礼[しつれい]",
                            "reading": "Shitsurei",
                            "meaning": "Behurmatlik",
                            "exampleSentence": "失礼な態度。",
                            "exampleTranslation": "Behurmat munosabat."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "〜極まる / 〜極まりない (Extremely / In the extreme)",
                            "meaning": "Juda yuqori darajadagi holat yoki hissiyot: \"O'ta ... / Cheksiz ...\".",
                            "usageNotes": "Salbiy yoki ijobiy holatning chekka va eng cho'qqi darajasini ifodalash.",
                            "examples": [
                                {
                                    "sentence": "失礼な態度。",
                                    "translation": "Behurmat munosabat."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l4-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u4-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "「危険[きけん] _______ 行為[こうい]は 慎[つつし]むべきだ。」",
                            "options": [
                                "にかぎる",
                                "極まる (kiwamaru)",
                                "に及ぶ",
                                "にあたる"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Kiwamaru = o'ta xavfli."
                        },
                        {
                            "id": "ja-n1-u4-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。」",
                            "options": [
                                "散歩[さんぽ]",
                                "精通[せいつう]している",
                                "運転[うんてん]",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"精通[せいつう]している\" (Bir sohani mukammal, ipidan ignasigacha bilmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u4-l4-q1",
                            "question": "「極まりない」 ning sinonimi:",
                            "options": [
                                "Kamgina",
                                "これ以上ないほど〜だ (bunda ortiq bo'lmagan darajada)",
                                "Yo'q",
                                "Biroz"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "O'ta yuqori darajada."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u4-l5",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u4",
        "unitTitle": "Unit 4: N1 Philosophical & Literary Discourse",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 20,
        "title": "N1 Listening Mastery (聴解 - 統合理解 & 主張理解)",
        "description": "JLPT N1 Chokkai tinglab tushunish: Murakkab bir nechta spikerlar bahsi va muallifning yashirin g'oyasi.",
        "estimatedDurationMinutes": 20,
        "icon": "🎧",
        "steps": [
            {
                "id": "ja-n1-u4-l5-s1",
                "title": "N1 Chokkai Strategiyasi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "N1 Tougou Rikai & Shuchou Rikai",
                    "explanation": "N1 tinglab tushunish bo'limidagi 2 ta matnni solishtirish va yashirin g'oyalarni topish.",
                    "keyPoints": [
                        "Tougou rikai — Ikki kishining qarama-qarshi fikrini solishtirish",
                        "Shuchou rikai — Spikerning asl niyati va yashirin ma'nosi"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Listening Mastery (聴解 - 統合理解 & 主張理解)",
                            "meaning": "JLPT N1 Chokkai tinglab tushunish: Murakkab bir nechta spikerlar bahsi va muallifning yashirin g'oyasi.",
                            "usageNotes": "N1 tinglab tushunish bo'limidagi 2 ta matnni solishtirish va yashirin g'oyalarni topish.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l5-s2",
                "title": "Chokkai Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "Tinglangan suhbat bo'yicha to'g'ri xulosani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u4-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "«A: この提案、一見良さそうだがリスクが高すぎるのでは。 B: 確かに。だが挑戦しなければ現状維持すら危うい。» — B ning pozitsiyasi:",
                            "options": [
                                "Xavf bo'lishiga qaramay tavakkal qilib harakat qilish tarafdori",
                                "Qo'rqmoqda",
                                "Qarshi",
                                "Qiziqmaydi"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Tavakkal qilib harakat qilish tarafdori."
                        },
                        {
                            "id": "ja-n1-u4-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "余儀[よぎ]なくされる",
                                "食事[しょくじ]",
                                "散歩[さんぽ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u4-l5-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u4-l5-q1",
                            "question": "N1 Chokkai imtihonida 「現状維持すら危うい」 ning ma'nosi:",
                            "options": [
                                "Hozirgi holatni saqlab qolish ham xavf ostida",
                                "Zo'r",
                                "Juda tinch",
                                "Yo'q"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Hozirgi holatni saqlash ham xavf ostida."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u5-l1",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u5",
        "unitTitle": "Unit 5: N1 Capstone & Graduation",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 21,
        "title": "N1 Super-Advanced Kanji (2000+ Level)",
        "description": "JLPT N1 ning 2000 ta kanji bazasidagi eng murakkab akademik va adabiy kanjilar.",
        "estimatedDurationMinutes": 20,
        "icon": "✒️",
        "steps": [
            {
                "id": "ja-n1-u5-l1-s1",
                "title": "N1 Akademik Kanjilar",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "N1 Advanced Kanji & Compounds",
                    "explanation": "Adabiyot va huquqda qo'llanadigan oliy kanjilar.",
                    "keyPoints": [
                        "概念 (Gainen) — tushuncha",
                        "糾弾 (Kyuudan) — ayblash/qoralash",
                        "変遷 (Hensen) — tarixiy evrilish"
                    ],
                    "vocabulary": [
                        {
                            "term": "糾弾[きゅうだん]",
                            "reading": "Kyuudan",
                            "meaning": "Ayblash / Qoralash",
                            "exampleSentence": "不正を糾弾する。",
                            "exampleTranslation": "Nohaqlikni qoralash."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Super-Advanced Kanji (2000+ Level)",
                            "meaning": "JLPT N1 ning 2000 ta kanji bazasidagi eng murakkab akademik va adabiy kanjilar.",
                            "usageNotes": "Adabiyot va huquqda qo'llanadigan oliy kanjilar.",
                            "examples": [
                                {
                                    "sentence": "不正を糾弾する。",
                                    "translation": "Nohaqlikni qoralash."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l1-s2",
                "title": "Kanji Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "To'g'ri o'qilishni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u5-l1-e1",
                            "type": "multiple-choice",
                            "prompt": "「糾弾」 kanjisining o'qilishi:",
                            "options": [
                                "きゅうたん",
                                "きゅうだん (kyuudan)",
                                "きゅうてん",
                                "きょうだん"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Kyuudan = qoralash."
                        },
                        {
                            "id": "ja-n1-u5-l1-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。」",
                            "options": [
                                "散歩[さんぽ]",
                                "拍車[はくしゃ]をかける",
                                "運転[うんてん]",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拍車[はくしゃ]をかける\" (Yana-da tezlashtirmoq, kuchaytirmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l1-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u5-l1-q1",
                            "question": "「時代[じだい]の 変遷[へんせん]」 ning ma'nosi:",
                            "options": [
                                "Kompaniya ochilishi",
                                "Tarixiy davrlarning almashinuvi va evrilishi",
                                "Kunning botishi",
                                "Yomg'ir yog'ishi"
                            ],
                            "correctAnswerIndex": 1,
                            "explanation": "Tarixiy evrilish."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u5-l2",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u5",
        "unitTitle": "Unit 5: N1 Capstone & Graduation",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 22,
        "title": "N1 Four-Character Idioms (四字熟語 Mastery)",
        "description": "4 ta kanjidan iborat yapon klassik idiomalar: \"Ichi-go ichi-e\", \"Shin-ro ku-kurou\", \"Ki-ten ret-tsu\".",
        "estimatedDurationMinutes": 20,
        "icon": "🀄",
        "steps": [
            {
                "id": "ja-n1-u5-l2-s1",
                "title": "Yojijukugo Idiomalar",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "Classical Four-Character Idioms",
                    "explanation": "N1 nutqi va yozuvini ziynatlovchi 4 kanjili qadimiy donolik iboralari.",
                    "keyPoints": [
                        "一期一会 (Ichigo ichie) — Hayotdagi har bir uchrashuv yagona va takrorlanmasdir",
                        "試行錯誤 (Shikou sakukou) — Sinov va xatolar orqali o'rganish",
                        "切磋琢磨 (Sessa takuma) — Bir-birini ruhiy va bilim jihatdan charxlash"
                    ],
                    "vocabulary": [
                        {
                            "term": "一期一会[いちごいちえ]",
                            "reading": "Ichigo ichie",
                            "meaning": "Takrorlanmas yagona uchrashuv",
                            "exampleSentence": "一期一会の出会いを大切にする。",
                            "exampleTranslation": "Qadrli takrorlanmas uchrashuvni qadrlash."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        }
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Four-Character Idioms (四字熟語 Mastery)",
                            "meaning": "4 ta kanjidan iborat yapon klassik idiomalar: \"Ichi-go ichi-e\", \"Shin-ro ku-kurou\", \"Ki-ten ret-tsu\".",
                            "usageNotes": "N1 nutqi va yozuvini ziynatlovchi 4 kanjili qadimiy donolik iboralari.",
                            "examples": [
                                {
                                    "sentence": "一期一会の出会いを大切にする。",
                                    "translation": "Qadrli takrorlanmas uchrashuvni qadrlash."
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l2-s2",
                "title": "Idioma Mashqi",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "To'g'ri idiomani tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u5-l2-e1",
                            "type": "multiple-choice",
                            "prompt": "「仲間[なかま]と _______ して 技術[ぎじゅつ]を 磨[みが]く。」",
                            "options": [
                                "一期一会",
                                "試行錯誤",
                                "切磋琢磨 (sessa takuma)",
                                "自暴自棄"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Sessa takuma = bir-birini charxlamoq."
                        },
                        {
                            "id": "ja-n1-u5-l2-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。」",
                            "options": [
                                "妥協[だきょう]を許さない",
                                "食事[しょくじ]",
                                "散歩[さんぽ]",
                                "運転[うんてん]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"妥協[だきょう]を許さない\" (Kelishuvga bormaydigan, murosasiz darajada sifat talabchan)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l2-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u5-l2-q1",
                            "question": "「試行錯誤」 so'zining ma'nosi:",
                            "options": [
                                "Kofe ichish",
                                "Juda tez yugurish",
                                "Sinov va xatolar orqali izlanish",
                                "Uxlash"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Trial and error."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u5-l3",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u5",
        "unitTitle": "Unit 5: N1 Capstone & Graduation",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 23,
        "title": "N1 Full Grammar Integration & Exceptions",
        "description": "N1 darajasidagi barcha 100+ grammatik qoidalarning kompleks sinovi.",
        "estimatedDurationMinutes": 20,
        "icon": "📚",
        "steps": [
            {
                "id": "ja-n1-u5-l3-s1",
                "title": "Grammatika Sinovi",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "N1 Master Grammar Review",
                    "explanation": "〜たる者, 〜に至る, 〜を余儀なくされる, 〜んがため, 〜極まる kabi barcha N1 shakllari.",
                    "keyPoints": [
                        "Klassik grammatik qo'shimchalar",
                        "Literary va formal uslubiy istisnolar"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Full Grammar Integration & Exceptions",
                            "meaning": "N1 darajasidagi barcha 100+ grammatik qoidalarning kompleks sinovi.",
                            "usageNotes": "〜たる者, 〜に至る, 〜を余儀なくされる, 〜んがため, 〜極まる kabi barcha N1 shakllari.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        },
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l3-s2",
                "title": "Mashq",
                "type": "practice",
                "estimatedMinutes": 7,
                "practiceData": {
                    "instructions": "To'g'ri javobni tanlang.",
                    "exercises": [
                        {
                            "id": "ja-n1-u5-l3-e1",
                            "type": "multiple-choice",
                            "prompt": "「最高[さいこう] 責任者[せきにんしゃ] _______、決断[けつだん]を くださねばならない。」",
                            "options": [
                                "にあって",
                                "にして",
                                "をもって",
                                "たる者"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Taru mono (mas'uliyatli shaxs sifatida)."
                        },
                        {
                            "id": "ja-n1-u5-l3-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。」",
                            "options": [
                                "散歩[さんぽ]",
                                "食事[しょくじ]",
                                "運転[うんてん]",
                                "精通[せいつう]している"
                            ],
                            "correctAnswer": 3,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"精通[せいつう]している\" (Bir sohani mukammal, ipidan ignasigacha bilmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l3-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 7,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 75,
                    "questions": [
                        {
                            "id": "ja-n1-u5-l3-q1",
                            "question": "「〜を余儀なくされる」 ning ma'nosi:",
                            "options": [
                                "Ruxsat bermoq",
                                "Bekor qilmoq",
                                "Xursand bo'lmoq",
                                "Majburiyatda qolmoq"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "Majburiyatda qolmoq."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u5-l4",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u5",
        "unitTitle": "Unit 5: N1 Capstone & Graduation",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 24,
        "title": "N1 Full Scale Simulation Mock Examination",
        "description": "JLPT N1 Rasmiy Imtihonining to'liq simulyatsiyasi va baholanishi.",
        "estimatedDurationMinutes": 22,
        "icon": "📊",
        "steps": [
            {
                "id": "ja-n1-u5-l4-s1",
                "title": "N1 Sinov Imtihoni",
                "type": "learn",
                "estimatedMinutes": 6,
                "learnData": {
                    "title": "N1 Full Mock Readiness",
                    "explanation": "Yapon tili bo'yicha dunyodagi eng oliy daraja simulyatsiyasi.",
                    "keyPoints": [
                        "Gengo Chishiki + Dokkai + Chokkai integratsiyasi",
                        "Oliy o'zlashtirish ko'rsatkichi (80%+)"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "N1 Full Scale Simulation Mock Examination",
                            "meaning": "JLPT N1 Rasmiy Imtihonining to'liq simulyatsiyasi va baholanishi.",
                            "usageNotes": "Yapon tili bo'yicha dunyodagi eng oliy daraja simulyatsiyasi.",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "精通[せいつう]している",
                            "reading": "Seitsuu shite iru",
                            "meaning": "Bir sohani mukammal, ipidan ignasigacha bilmoq",
                            "exampleSentence": "彼[かれ]は 日本[にほん]の 古典[こてん]文学[ぶんがく]に 精通[せいつう]しています。",
                            "exampleTranslation": "U yapon klassik adabiyotini mukammal darajada biladi."
                        },
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l4-s2",
                "title": "Simulyatsiya Mashqi",
                "type": "practice",
                "estimatedMinutes": 8,
                "practiceData": {
                    "instructions": "N1 simulyatsiya savoliga javob bering.",
                    "exercises": [
                        {
                            "id": "ja-n1-u5-l4-e1",
                            "type": "multiple-choice",
                            "prompt": "「真相[しんそう]を 明[あき]らかに _______、調査[ちょうさ]を 続[つづ]けた。」",
                            "options": [
                                "せんがため",
                                "ともなく",
                                "ことなしに",
                                "んばかり"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Sen ga tame = ochiqlash niyatida."
                        },
                        {
                            "id": "ja-n1-u5-l4-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。」",
                            "options": [
                                "余儀[よぎ]なくされる",
                                "運転[うんてん]",
                                "食事[しょくじ]",
                                "散歩[さんぽ]"
                            ],
                            "correctAnswer": 0,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"余儀[よぎ]なくされる\" (Majbur boʻlib qolmoq (vaziyat taqozosi bilan))."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l4-s3",
                "title": "Test",
                "type": "test",
                "estimatedMinutes": 8,
                "testData": {
                    "instructions": "Savollarga javob bering.",
                    "passingScorePercentage": 80,
                    "questions": [
                        {
                            "id": "ja-n1-u5-l4-q1",
                            "question": "「彼[かれ]を _______ 他[ほか]に この 重職[じゅうしょく]を 果[は]たせる 者[もの]は いない。」",
                            "options": [
                                "をおいて (o oite)",
                                "にして",
                                "をもって",
                                "をめぐって"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "O oite = undan bo'lak yo'q."
                        }
                    ]
                }
            }
        ]
    },
    {
        "id": "ja-n1-u5-l5",
        "courseId": "jlpt-n1",
        "unitId": "ja-n1-u5",
        "unitTitle": "Unit 5: N1 Capstone & Graduation",
        "language": "ja",
        "level": "N1",
        "lessonNumber": 25,
        "title": "JLPT N1 Grand Master Certification & Graduation Exam",
        "description": "JLPT N1 Cho'qqisining to'liq va rasmiy oliy sertifikatlash va bitiruv imtihoni.",
        "estimatedDurationMinutes": 25,
        "icon": "👑",
        "steps": [
            {
                "id": "ja-n1-u5-l5-s1",
                "title": "JLPT N1 Ultimate Crown Summary",
                "type": "learn",
                "estimatedMinutes": 7,
                "learnData": {
                    "title": "JLPT N1 Grand Master Peak",
                    "explanation": "Tabriklaymiz! Siz Yapon tili bo'yicha eng oliy daraja — JLPT N1 ni tamomladingiz!",
                    "keyPoints": [
                        "Native-level academic and professional Japanese mastery",
                        "Complete mastery of 2000+ Kanji, 10,000+ Vocabulary, and Classical Grammar",
                        "Highest legal, academic, and professional accreditation worldwide"
                    ],
                    "grammarRules": [
                        {
                            "pattern": "JLPT N1 Grand Master Certification & Graduation Exam",
                            "meaning": "JLPT N1 Cho'qqisining to'liq va rasmiy oliy sertifikatlash va bitiruv imtihoni.",
                            "usageNotes": "Tabriklaymiz! Siz Yapon tili bo'yicha eng oliy daraja — JLPT N1 ni tamomladingiz!",
                            "examples": [
                                {
                                    "sentence": "日本語[にほんご]を 毎日[まいにち] 勉強[べんきょう]します。",
                                    "translation": "Har kuni yapon tilini o'rganaman."
                                }
                            ]
                        }
                    ],
                    "vocabulary": [
                        {
                            "term": "余儀[よぎ]なくされる",
                            "reading": "Yogi naku sareru",
                            "meaning": "Majbur boʻlib qolmoq (vaziyat taqozosi bilan)",
                            "exampleSentence": "計画[けいかく]の 変更[へんこう]を 余儀[よぎ]なくされました。",
                            "exampleTranslation": "Rejani oʻzgartirishga majbur boʻldik."
                        },
                        {
                            "term": "拍車[はくしゃ]をかける",
                            "reading": "Hakusha o kakeru",
                            "meaning": "Yana-da tezlashtirmoq, kuchaytirmoq",
                            "exampleSentence": "技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。",
                            "exampleTranslation": "Texnologik yangiliklar iqtisodiy oʻsishni yana-da jadallashtirdi."
                        },
                        {
                            "term": "妥協[だきょう]を許さない",
                            "reading": "Dakyou o yurusanai",
                            "meaning": "Kelishuvga bormaydigan, murosasiz darajada sifat talabchan",
                            "exampleSentence": "品質[ひんしつ]に対[たい]して 妥協[だきょう]を 許[ゆる]さない 姿勢[しせい]を 貫[つらぬ]く。",
                            "exampleTranslation": "Sifat masalasida aslo murosaga bormaydigan qatʼiy yondashuvni saqlaydi."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l5-s2",
                "title": "Grand Master Capstone Practice",
                "type": "practice",
                "estimatedMinutes": 8,
                "practiceData": {
                    "instructions": "JLPT N1 Bitiruv savoliga javob bering.",
                    "exercises": [
                        {
                            "id": "ja-n1-u5-l5-e1",
                            "type": "multiple-choice",
                            "prompt": "「いかに 時代[じだい]が 変遷[へんせん]しようと、真理[しんり]は _______。」",
                            "options": [
                                "変[か]わる",
                                "でした",
                                "不変[ふへん]で ある (Fuhen de aru)",
                                "ない"
                            ],
                            "correctAnswer": 2,
                            "explanation": "Fuhen de aru (haqiqat o'zgarmasdir)."
                        },
                        {
                            "id": "ja-n1-u5-l5-ex-2",
                            "type": "multiple-choice",
                            "prompt": "Quyidagi jumlada qoldirilgan to'g'ri so'zni tanlang: 「技術[ぎじゅつ]革新[かくしん]が 経済[けいざい]成長[せいちょう]に 拍車[はくしゃ]をかけました。」",
                            "options": [
                                "運転[うんてん]",
                                "拍車[はくしゃ]をかける",
                                "散歩[さんぽ]",
                                "食事[しょくじ]"
                            ],
                            "correctAnswer": 1,
                            "explanation": "Jumlaga mazmun jihatidan eng to'g'ri keladigan so'z: \"拍車[はくしゃ]をかける\" (Yana-da tezlashtirmoq, kuchaytirmoq)."
                        }
                    ]
                }
            },
            {
                "id": "ja-n1-u5-l5-s3",
                "title": "JLPT N1 Grand Master Promotion Certification Exam",
                "type": "test",
                "estimatedMinutes": 10,
                "testData": {
                    "instructions": "JLPT N1 Oliy Master darajasini tasdiqlash uchun imtihonni kamida 85% bilan topshiring.",
                    "passingScorePercentage": 85,
                    "questions": [
                        {
                            "id": "ja-n1-u5-l5-q1",
                            "question": "「時代[じだい]の 変遷[へんせん]」dagi 変遷 nimani anglatadi?",
                            "options": [
                                "Bitta kun",
                                "Kitob o'qish",
                                "Davrlarning almashinuvi / Tarixiy evrilish",
                                "Quyosh chiqishi"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Historical vicissitudes / Transitions of eras."
                        },
                        {
                            "id": "ja-n1-u5-l5-q2",
                            "question": "「真理[しんり]は 不変[ふへん]で ある」ning ma'nosi:",
                            "options": [
                                "Haqiqat o'zgarmas va boqiydir",
                                "Haqiqat yangidir",
                                "Haqiqat yolg'ondir",
                                "Haqiqat yo'q"
                            ],
                            "correctAnswerIndex": 0,
                            "explanation": "Truth is immutable."
                        },
                        {
                            "id": "ja-n1-u5-l5-q3",
                            "question": "Yapon tili bo'yicha JLPT tizimidagi eng yuqori oliy daraja qaysi?",
                            "options": [
                                "JLPT N5",
                                "CEFR B2",
                                "JLPT N2",
                                "JLPT N1"
                            ],
                            "correctAnswerIndex": 3,
                            "explanation": "JLPT N1."
                        },
                        {
                            "id": "ja-n1-u5-l5-q4",
                            "question": "Tabriklaymiz! Siz Yapon Tili Bo'yicha Barcha O'quv Dasturini Oliy Natija Bilan Bitirdingiz.",
                            "options": [
                                "Bosh Sahifaga Qaytish",
                                "Darslarni Takrorlash",
                                "Sertifikatni Qabul Qilish",
                                "Chiqish"
                            ],
                            "correctAnswerIndex": 2,
                            "explanation": "Grand Master Certificate Awarded."
                        }
                    ]
                }
            }
        ]
    }
];
