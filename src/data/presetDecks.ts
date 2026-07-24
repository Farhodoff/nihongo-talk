export interface PresetCard {
    front: string;
    back: string;
    phonetic?: string;
    example?: string;
    category?: string;
}

export interface PresetDeck {
    id: string;
    title: string;
    description: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2' | 'IELTS Collocations' | 'IELTS Topics';
    badgeColor: string;
    icon: string;
    isPremiumOnly?: boolean;
    cards: PresetCard[];
}

export const PRESET_DECKS: PresetDeck[] = [
    {
        id: 'deck_starter_a1_a2',
        title: '🌱 A1-A2 Starter Vocabulary (97 Kartochka)',
        description: 'Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so\'zlar.',
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        isPremiumOnly: false,
        cards: [
            {
                        "front": "Linking verbs",
                        "back": "be, appear, seem; become, get, etc",
                        "phonetic": "",
                        "example": "Example sentence with Linking verbs."
            },
            {
                        "front": "Verb complementation",
                        "back": "what follows verbs",
                        "phonetic": "",
                        "example": "Example sentence with Verb complementation."
            },
            {
                        "front": "Giving reasons",
                        "back": "as, because, etc",
                        "phonetic": "",
                        "example": "Example sentence with Giving reasons."
            },
            {
                        "front": "Contrasts",
                        "back": "although and though; even though / if; while, whilst and whereas",
                        "phonetic": "",
                        "example": "Example sentence with Contrasts."
            },
            {
                        "front": "Focusing",
                        "back": "it-clauses and what-clauses",
                        "phonetic": "",
                        "example": "Example sentence with Focusing."
            },
            {
                        "front": "Compare",
                        "back": "I regret that the company will have to be sold",
                        "phonetic": "",
                        "example": "Example sentence with Compare."
            },
            {
                        "front": "Also",
                        "back": "cost, expect, feel, ﬁ t, have,",
                        "phonetic": "",
                        "example": "Example sentence with Also."
            },
            {
                        "front": "Future continuous",
                        "back": "I will be doing",
                        "phonetic": "",
                        "example": "Example sentence with Future continuous."
            },
            {
                        "front": "Rome",
                        "back": "to-Naples railway line is to be reopened today",
                        "phonetic": "",
                        "example": "Example sentence with Rome."
            },
            {
                        "front": "However",
                        "back": "we use have to with frequency adverbs:",
                        "phonetic": "",
                        "example": "Example sentence with However."
            },
            {
                        "front": "Nepal",
                        "back": "it’s a beautiful country",
                        "phonetic": "",
                        "example": "Example sentence with Nepal."
            },
            {
                        "front": "Transitive two",
                        "back": "and three-word verbs (see also Unit 94)",
                        "phonetic": "",
                        "example": "Example sentence with Transitive two."
            },
            {
                        "front": "Commonadjectives",
                        "back": "goodandbadthings(nice,awful)23Commonadjectives:people(happy,horrible)24Wordsandprepositions(waitfor,goodat)25Prefixes(im",
                        "phonetic": "",
                        "example": "Example sentence with Commonadjectives."
            },
            {
                        "front": "Ontheright",
                        "back": "handpagethereareexercisesandotheractivitiestohelpyoupractiseusingthewordsandtohelpyoutorememberthem",
                        "phonetic": "",
                        "example": "Example sentence with Ontheright."
            },
            {
                        "front": "Theright",
                        "back": "handpagesofferavarietyofdifferenttypesofactivities,sometraditionalonessuchasgap-filling,butalsomoreopen-endedonesandpers",
                        "phonetic": "",
                        "example": "Example sentence with Theright."
            },
            {
                        "front": "Onemoretip",
                        "back": "Lookatthewordsyouhavewrittendownagainandagainandagain!EnglishVocabularyinUse(elementary)",
                        "phonetic": "",
                        "example": "Example sentence with Onemoretip."
            },
            {
                        "front": "Goisoftenusedwith",
                        "back": "ingfordifferentactivities",
                        "phonetic": "",
                        "example": "Example sentence with Goisoftenusedwith."
            },
            {
                        "front": "Ineverdothe",
                        "back": "^rde-nin^5*5Correctthemistakesinthisdialogue",
                        "phonetic": "",
                        "example": "Example sentence with Ineverdothe."
            },
            {
                        "front": "Ihaveto",
                        "back": "make-myhomework",
                        "phonetic": "",
                        "example": "Example sentence with Ihaveto."
            },
            {
                        "front": "Comeandgoaredifferent",
                        "back": "HEREgoTHEREHEREcomeTHEREComein/outWesay'Comein!'whensomeoneknocksatthedoorofaroom",
                        "phonetic": "",
                        "example": "Example sentence with Comeandgoaredifferent."
            },
            {
                        "front": "Usefulexpression",
                        "back": "CanItakeaphotographhere?Tip:Makeapageinyournotebookfortakeandputinnewwordsthatgowithitwhenyouseethem(e",
                        "phonetic": "",
                        "example": "Example sentence with Usefulexpression."
            },
            {
                        "front": "Bringandtake\ntake",
                        "back": "fromheretotherebring=fromtheretohereAreyougoingtoschool?Takeyourbooks,(fromheretotheschool)Areyougoingtothekitchen?Canyo",
                        "phonetic": "",
                        "example": "Example sentence with Bringandtake\ntake."
            },
            {
                        "front": "Fillthegap",
                        "back": "Nowyoucanlookatthekeyandtheanswers!EnglishVocabularyinUse(elementary)",
                        "phonetic": "",
                        "example": "Example sentence with Fillthegap."
            },
            {
                        "front": "What",
                        "back": "Mine'dotjoi/i/p?Seven-thirty,usually",
                        "phonetic": "",
                        "example": "Example sentence with What."
            },
            {
                        "front": "Weusetellwithotherwh",
                        "back": "wordstoo(when,how,why,where),e",
                        "phonetic": "",
                        "example": "Example sentence with Weusetellwithotherwh."
            },
            {
                        "front": "Thereare",
                        "back": "365daysinayear12monthsinayear52weeksinayear7daysinaweek2weeksinafortnight24hoursinaday60minutesinanhour",
                        "phonetic": "",
                        "example": "Example sentence with Thereare."
            },
            {
                        "front": "Months",
                        "back": "January,February,March,April,May,June,July,August,September,October,November,December",
                        "phonetic": "",
                        "example": "Example sentence with Months."
            },
            {
                        "front": "Quiz",
                        "back": "Howquicklycanyouanswerthesequestions?1Howmanysecondsinquarterofanhour?7Whatdayisittoday?2Whatisthethirddayoftheweek?8Wha",
                        "phonetic": "",
                        "example": "Example sentence with Quiz."
            },
            {
                        "front": "Youcancountthem",
                        "back": "4apples,2shoes)",
                        "phonetic": "",
                        "example": "Example sentence with Youcancountthem."
            },
            {
                        "front": "Note",
                        "back": "Whenwewanttosayhowmuchwewant,wesay,threeloavesofbread,twolitresofmilk,akiloofapples",
                        "phonetic": "",
                        "example": "Example sentence with Note."
            },
            {
                        "front": "Thenews",
                        "back": "arenotverygoodtoday",
                        "phonetic": "",
                        "example": "Example sentence with Thenews."
            },
            {
                        "front": "Maryisvery",
                        "back": "wonderful',wejustsay'Maryiswonderful'",
                        "phonetic": "",
                        "example": "Example sentence with Maryisvery."
            },
            {
                        "front": "Xfte",
                        "back": "wasn'tv$od-fo^pe-afcin^^fl^i^heVerijda^",
                        "phonetic": "",
                        "example": "Example sentence with Xfte."
            },
            {
                        "front": "Anex",
                        "back": "wifeisawifewhoisnowdivorced",
                        "phonetic": "",
                        "example": "Example sentence with Anex."
            },
            {
                        "front": "Gorbachevisanex",
                        "back": "PresidentofRussia",
                        "phonetic": "",
                        "example": "Example sentence with Gorbachevisanex."
            },
            {
                        "front": "Ahalf",
                        "back": "hourjourneyisajourneyof30minutes",
                        "phonetic": "",
                        "example": "Example sentence with Ahalf."
            },
            {
                        "front": "Anon",
                        "back": "smokingroomisaroomwherepeoplemaynotsmoke",
                        "phonetic": "",
                        "example": "Example sentence with Anon."
            },
            {
                        "front": "Samwantsabicycle",
                        "back": "SAM:Willyoulendmeyourbicycle?(=yougiveittomeforoneday/anhour,etc",
                        "phonetic": "",
                        "example": "Example sentence with Samwantsabicycle."
            },
            {
                        "front": "John",
                        "back": "afterJohn,hisgrandfather",
                        "phonetic": "",
                        "example": "Example sentence with John."
            },
            {
                        "front": "Youcanalsosay",
                        "back": "Naomihas(got)aredcoaton",
                        "phonetic": "",
                        "example": "Example sentence with Youcanalsosay."
            },
            {
                        "front": "Looks",
                        "back": "positive(+)andnegative(-)Mysisterisquitepretty",
                        "phonetic": "",
                        "example": "Example sentence with Looks."
            },
            {
                        "front": "Sara",
                        "back": "thin)Shehasbeenveryill",
                        "phonetic": "",
                        "example": "Example sentence with Sara."
            },
            {
                        "front": "Thenwriteabout",
                        "back": "-theirheight(tall,short,mediumheight)-theirhair(colour,long,short,beard)-theireyes(colour)-theirlooks(ordinary,handsome,",
                        "phonetic": "",
                        "example": "Example sentence with Thenwriteabout."
            },
            {
                        "front": "Igethay",
                        "back": "fevereverysummer,fromflowersandgrass",
                        "phonetic": "",
                        "example": "Example sentence with Igethay."
            },
            {
                        "front": "Haveagooddiet",
                        "back": "eatlotsoffruitandvegetables",
                        "phonetic": "",
                        "example": "Example sentence with Haveagooddiet."
            },
            {
                        "front": "Getsomeexercise",
                        "back": "swimming,jogging,cyclingaregoodforyou",
                        "phonetic": "",
                        "example": "Example sentence with Getsomeexercise."
            },
            {
                        "front": "Whichdoyouprefer",
                        "back": "teaorcoffee?Writeanswersasintheexample",
                        "phonetic": "",
                        "example": "Example sentence with Whichdoyouprefer."
            },
            {
                        "front": "Bangladesh",
                        "back": "Thailand-SingaporenotesadjectiveMostcountryadjectivesendin(i)an",
                        "phonetic": "",
                        "example": "Example sentence with Bangladesh."
            },
            {
                        "front": "Exceptions",
                        "back": "French(fromFrance),Dutch(fromHolland),Swiss(fromSwitzerland),Greek,Iraqi,Thai,Icelandic,Arab,IsraeliLanguagesandpeopleWo",
                        "phonetic": "",
                        "example": "Example sentence with Exceptions."
            },
            {
                        "front": "English",
                        "back": "1thenameofyourcountry",
                        "phonetic": "",
                        "example": "Example sentence with English."
            },
            {
                        "front": "Pronunciation",
                        "back": "Strong and weak forms",
                        "phonetic": "",
                        "example": "Example sentence with Pronunciation."
            },
            {
                        "front": "Score",
                        "back": "CEFR description CEFR code IELTS Band Score",
                        "phonetic": "",
                        "example": "Example sentence with Score."
            },
            {
                        "front": "Intermediate",
                        "back": "Upper Intermediate!",
                        "phonetic": "",
                        "example": "Example sentence with Intermediate."
            },
            {
                        "front": "Listening",
                        "back": "16 out of 40 correct answers: band score 5",
                        "phonetic": "",
                        "example": "Example sentence with Listening."
            },
            {
                        "front": "Writing",
                        "back": "examiners award a band score for each of four areas with equal weighting:",
                        "phonetic": "",
                        "example": "Example sentence with Writing."
            },
            {
                        "front": "Speaking",
                        "back": "examiners award a band score for each of four areas with equal weighting:",
                        "phonetic": "",
                        "example": "Example sentence with Speaking."
            },
            {
                        "front": "Aims",
                        "back": "Describing personality I Talking about relationships",
                        "phonetic": "",
                        "example": "Example sentence with Aims."
            },
            {
                        "front": "Exam technique",
                        "back": "What it means to 'know' a word",
                        "phonetic": "",
                        "example": "Example sentence with Exam technique."
            },
            {
                        "front": "Vocabulary",
                        "back": "Character and personality",
                        "phonetic": "",
                        "example": "Example sentence with Vocabulary."
            },
            {
                        "front": "Example",
                        "back": "I take after my dad - we're both quite careless",
                        "phonetic": "",
                        "example": "Example sentence with Example."
            },
            {
                        "front": "Exam tip",
                        "back": "If you use a character adjective to describe someone in the exam, you should",
                        "phonetic": "",
                        "example": "Example sentence with Exam tip."
            },
            {
                        "front": "Examples",
                        "back": "She s really outgoing and sociable - she s always going out with friends and colleagues",
                        "phonetic": "",
                        "example": "Example sentence with Examples."
            },
            {
                        "front": "Remember",
                        "back": "you can use the vocabulary you",
                        "phonetic": "",
                        "example": "Example sentence with Remember."
            },
            {
                        "front": "Grammar",
                        "back": "Thinking about tenses",
                        "phonetic": "",
                        "example": "Example sentence with Grammar."
            },
            {
                        "front": "Record yourself",
                        "back": "answering the questions",
                        "phonetic": "",
                        "example": "Example sentence with Record yourself."
            },
            {
                        "front": "Scoring",
                        "back": "point, game, set, match",
                        "phonetic": "",
                        "example": "Example sentence with Scoring."
            },
            {
                        "front": "People",
                        "back": "player, umpire,  boll boy/girl, trainer/coach",
                        "phonetic": "",
                        "example": "Example sentence with People."
            },
            {
                        "front": "Useful phrases",
                        "back": "he/She’s  broken his/her  opponentV Serve",
                        "phonetic": "",
                        "example": "Example sentence with Useful phrases."
            },
            {
                        "front": "Dream job",
                        "back": "Mechanical Engineer for UAE Army (good job",
                        "phonetic": "",
                        "example": "Example sentence with Dream job."
            },
            {
                        "front": "Julia",
                        "back": "I'm (1) __________I give art classes, mainly to (2) ___________people",
                        "phonetic": "",
                        "example": "Example sentence with Julia."
            },
            {
                        "front": "Peter",
                        "back": "I'm a water engineer",
                        "phonetic": "",
                        "example": "Example sentence with Peter."
            },
            {
                        "front": "First conditional",
                        "back": "If I study harder, I will get my dream job",
                        "phonetic": "",
                        "example": "Example sentence with First conditional."
            },
            {
                        "front": "Second conditional",
                        "back": "If I studied harder, I would get my dream job",
                        "phonetic": "",
                        "example": "Example sentence with Second conditional."
            },
            {
                        "front": "Third conditional",
                        "back": "If I had studied harder, I would have got my dream job",
                        "phonetic": "",
                        "example": "Example sentence with Third conditional."
            },
            {
                        "front": "Simple sentence",
                        "back": "Torrential rain is the main cause of flooding",
                        "phonetic": "",
                        "example": "Example sentence with Simple sentence."
            },
            {
                        "front": "Cleft sentence",
                        "back": "It is torrential rain that is the main cause of flooding",
                        "phonetic": "",
                        "example": "Example sentence with Cleft sentence."
            },
            {
                        "front": "Examiner",
                        "back": "What do you do when it's cold outside?",
                        "phonetic": "",
                        "example": "Example sentence with Examiner."
            },
            {
                        "front": "Candidate",
                        "back": "What we tend to do is stay in and watch our favourite films",
                        "phonetic": "",
                        "example": "Example sentence with Candidate."
            },
            {
                        "front": "Superlative\none",
                        "back": "syllable adjectives adjective + -er/r the + adjective + - est/st",
                        "phonetic": "",
                        "example": "Example sentence with Superlative\none."
            },
            {
                        "front": "Exam techniques",
                        "back": "Giving yourself time to think",
                        "phonetic": "",
                        "example": "Example sentence with Exam techniques."
            },
            {
                        "front": "Forming adjectives",
                        "back": "Put the noun roots below in the correct gaps to form adjectives",
                        "phonetic": "",
                        "example": "Example sentence with Forming adjectives."
            },
            {
                        "front": "Achieve",
                        "back": "Erishmoq, qo'lga kiritmoq",
                        "phonetic": "/əˈtʃiːv/",
                        "example": "She worked hard to achieve her target IELTS score."
            },
            {
                        "front": "Improve",
                        "back": "Rivojlantirmoq, yaxshilamoq",
                        "phonetic": "/ɪmˈpruːv/",
                        "example": "Daily reading will improve your English vocabulary."
            },
            {
                        "front": "Require",
                        "back": "Talab qilmoq, ehtiyoj sezmoq",
                        "phonetic": "/rɪˈkwaɪə/",
                        "example": "Passing the exam requires dedication and focus."
            },
            {
                        "front": "Benefit",
                        "back": "Foyda, naf, afzallik",
                        "phonetic": "/ˈben.ɪ.fɪt/",
                        "example": "Regular exercise brings many health benefits."
            },
            {
                        "front": "Solution",
                        "back": "Yechim, chora-tadbir",
                        "phonetic": "/səˈluː.ʃən/",
                        "example": "We need to find an effective solution to this problem."
            },
            {
                        "front": "Increase",
                        "back": "Oshirmoq, ko'paytirmoq",
                        "phonetic": "/ɪnˈkriːs/",
                        "example": "The government aims to increase education funding."
            },
            {
                        "front": "Decrease",
                        "back": "Kamaytirmoq, tushirmoq",
                        "phonetic": "/dɪˈkriːs/",
                        "example": "Traffic noise decreases at night."
            },
            {
                        "front": "Provide",
                        "back": "Ta'minlamoq, berish",
                        "phonetic": "/prəˈvaɪd/",
                        "example": "Schools provide students with modern tools."
            },
            {
                        "front": "Support",
                        "back": "Qo'llab-quvvatlamoq",
                        "phonetic": "/səˈpɔːt/",
                        "example": "My family always supports my dreams."
            },
            {
                        "front": "Prepare",
                        "back": "Tayyorgarlik ko'rmoq",
                        "phonetic": "/prɪˈpeə/",
                        "example": "I prepare for my exams every evening."
            },
            {
                        "front": "Develop",
                        "back": "Rivojlantirmoq, shakllantirmoq",
                        "phonetic": "/dɪˈvel.əp/",
                        "example": "Students develop critical thinking skills."
            },
            {
                        "front": "Evaluate",
                        "back": "Baxolamoq, qiymat bermoq",
                        "phonetic": "/ɪˈvæl.ju.eɪt/",
                        "example": "Examiners evaluate your coherence and lexical resource."
            },
            {
                        "front": "Advocate",
                        "back": "Yoqlamoq, tarafdori bo'lmoq",
                        "phonetic": "/ˈæd.və.keɪt/",
                        "example": "Experts advocate for sustainable energy solutions."
            },
            {
                        "front": "Expedite",
                        "back": "Tezlashtirmoq, jadallashtirmoq",
                        "phonetic": "/ˈek.spə.daɪt/",
                        "example": "New technologies expedite the processing of economic data."
            },
            {
                        "front": "Mitigate",
                        "back": "Yumshatmoq, ta'sirini kamaytirmoq",
                        "phonetic": "/ˈmɪt.ɪ.ɡeɪt/",
                        "example": "Planting trees helps mitigate the effects of global warming."
            },
            {
                        "front": "Yield",
                        "back": "Hosil bermoq, sabab bo'lmoq, berish",
                        "phonetic": "/jiːld/",
                        "example": "Research yields valuable insights into cognitive behavior."
            }
]
    },
    {
        id: 'deck_intermediate_b1_b2',
        title: '📈 B1-B2 Pre-IELTS Academic Vocab (122 Kartochka)',
        description: 'Band 5.5-6.5 darajasidagi talabalar uchun akademik so\'zlar va iboralar to\'plami.',
        level: 'B1-B2',
        badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        icon: '📈',
        isPremiumOnly: false,
        cards: [
            {
                        "front": "Contents",
                        "back": "MyGrammarLab\tIntermediate\tB1–B2",
                        "phonetic": "",
                        "example": "Example sentence with Contents."
            },
            {
                        "front": "Future\tperfect",
                        "back": "simple\tand\tcontinuous They will have finished by tomorr ow",
                        "phonetic": "",
                        "example": "Example sentence with Future\tperfect."
            },
            {
                        "front": "Verbs\twith",
                        "back": "ing\tforms\tand\tinfinitives\t Diagnostic test 191",
                        "phonetic": "",
                        "example": "Example sentence with Verbs\twith."
            },
            {
                        "front": "Marlowe",
                        "back": "a private detective invented by the author raymond chandler in",
                        "phonetic": "",
                        "example": "Example sentence with Marlowe."
            },
            {
                        "front": "Holmes",
                        "back": "Holmes is a brilliant detective (3)",
                        "phonetic": "",
                        "example": "Example sentence with Holmes."
            },
            {
                        "front": "Watson",
                        "back": "Watson, a doctor (5)",
                        "phonetic": "",
                        "example": "Example sentence with Watson."
            },
            {
                        "front": "Because non",
                        "back": "defi  ning relative clauses do not identify the subject in the main clause, there",
                        "phonetic": "",
                        "example": "Example sentence with Because non."
            },
            {
                        "front": "Catch",
                        "back": "22’ is a novel about a young American soldier, John Y ossarian",
                        "phonetic": "",
                        "example": "Example sentence with Catch."
            },
            {
                        "front": "Adjectives",
                        "back": "a nice new house, you look tired",
                        "phonetic": "",
                        "example": "Example sentence with Adjectives."
            },
            {
                        "front": "This means",
                        "back": "she is driving ��� � at the time of speaking",
                        "phonetic": "",
                        "example": "Example sentence with This means."
            },
            {
                        "front": "Have",
                        "back": "> Unit 17 Present tenses for the future -» Unit 19",
                        "phonetic": "",
                        "example": "Example sentence with Have."
            },
            {
                        "front": "Present perfect",
                        "back": "» Units 8, 11 Been to — Units 8A, 126B Present perfect continuous -» Units 9-10",
                        "phonetic": "",
                        "example": "Example sentence with Present perfect."
            },
            {
                        "front": "Jane",
                        "back": "(how long / know / Caroline?)",
                        "phonetic": "",
                        "example": "Example sentence with Jane."
            },
            {
                        "front": "Hotidag",
                        "back": "for -fiv e-g ears",
                        "phonetic": "",
                        "example": "Example sentence with Hotidag."
            },
            {
                        "front": "Past simple",
                        "back": "*• Unit 5 Present perfect -» Units 7-8 Present perfect and past 2 -* Unit 14",
                        "phonetic": "",
                        "example": "Example sentence with Past simple."
            },
            {
                        "front": "Will",
                        "back": "» Units 21-22 Present simple after when/if etc",
                        "phonetic": "",
                        "example": "Example sentence with Will."
            },
            {
                        "front": "Contributions",
                        "back": "Deepa Makkar, Indroop Makkar, Ravpreet Singh",
                        "phonetic": "",
                        "example": "Example sentence with Contributions."
            },
            {
                        "front": "Hearing first",
                        "back": "hand accounts of the struggles during India's fight for independence was not",
                        "phonetic": "",
                        "example": "Example sentence with Hearing first."
            },
            {
                        "front": "Sentences",
                        "back": "Technology has greatly improved communication",
                        "phonetic": "",
                        "example": "Example sentence with Sentences."
            },
            {
                        "front": "Compound",
                        "back": "Complex Sentences:",
                        "phonetic": "",
                        "example": "Example sentence with Compound."
            },
            {
                        "front": "Inversion",
                        "back": "Not only did he study diligently, but he also participated actively in class discussions",
                        "phonetic": "",
                        "example": "Example sentence with Inversion."
            },
            {
                        "front": "Structures",
                        "back": "The number of people using smartphones is higher than ever before",
                        "phonetic": "",
                        "example": "Example sentence with Structures."
            },
            {
                        "front": "Voice",
                        "back": "The new policy was implemented to address the issue of income inequality",
                        "phonetic": "",
                        "example": "Example sentence with Voice."
            },
            {
                        "front": "Waste",
                        "back": "has a great meaning even today",
                        "phonetic": "",
                        "example": "Example sentence with Waste."
            },
            {
                        "front": "Synonyms",
                        "back": "Pay close attention to keywords in the question and the",
                        "phonetic": "",
                        "example": "Example sentence with Synonyms."
            },
            {
                        "front": "Example",
                        "back": "Question: \"The passage states that the company achieved record profits last year",
                        "phonetic": "",
                        "example": "Example sentence with Example."
            },
            {
                        "front": "Disadvantage",
                        "back": "Kamchilik, salbiy tomon — Too many tourists can cause damage to the historical attractions",
                        "phonetic": "/ˌdɪs.ədˈvɑːn.tɪdʒ/",
                        "example": "High cost is a major disadvantage of this plan."
            },
            {
                        "front": "What happened",
                        "back": "How you felt about it",
                        "phonetic": "",
                        "example": "Example sentence with What happened."
            },
            {
                        "front": "Point",
                        "back": "Begin your response by directly addressing the question or topic",
                        "phonetic": "",
                        "example": "Example sentence with Point."
            },
            {
                        "front": "Explanation",
                        "back": "Provide details, explanations, or examples to support your point",
                        "phonetic": "",
                        "example": "Example sentence with Explanation."
            },
            {
                        "front": "Link",
                        "back": "Conclude your response by linking back to the question or summarizing your main point",
                        "phonetic": "",
                        "example": "Example sentence with Link."
            },
            {
                        "front": "Question",
                        "back": "\"Do you prefer to travel alone or w ith a group?\"):",
                        "phonetic": "",
                        "example": "Example sentence with Question."
            },
            {
                        "front": "Hindi",
                        "back": "And explain why he can speak Hindi well",
                        "phonetic": "",
                        "example": "Example sentence with Hindi."
            },
            {
                        "front": "Lists",
                        "back": "Create lists of new words and phrases, organized by themes or topics like \"academic,\"",
                        "phonetic": "",
                        "example": "Example sentence with Lists."
            },
            {
                        "front": "Learning",
                        "back": "Understand words in sentences to grasp their meanings and usage nuances",
                        "phonetic": "",
                        "example": "Example sentence with Learning."
            },
            {
                        "front": "Reading",
                        "back": "Read widely in English, from newspapers to books, to encounter diverse vocabulary",
                        "phonetic": "",
                        "example": "Example sentence with Reading."
            },
            {
                        "front": "Practice",
                        "back": "Use new words in your writing and speaking practice to reinforce learning",
                        "phonetic": "",
                        "example": "Example sentence with Practice."
            },
            {
                        "front": "Resources",
                        "back": "Explore vocabulary-building apps and reputable dictionaries for definitions and",
                        "phonetic": "",
                        "example": "Example sentence with Resources."
            },
            {
                        "front": "Review",
                        "back": "Periodically revisit and revise word lists for retention",
                        "phonetic": "",
                        "example": "Example sentence with Review."
            },
            {
                        "front": "English",
                        "back": "• Instead of ‘a big amount’, say ‘a substantial amount’",
                        "phonetic": "",
                        "example": "Example sentence with English."
            },
            {
                        "front": "Topics",
                        "back": "Travel and the environment",
                        "phonetic": "",
                        "example": "Example sentence with Topics."
            },
            {
                        "front": "People",
                        "back": "character and behaviour have a vivid imagination, lose your patience",
                        "phonetic": "",
                        "example": "Example sentence with People."
            },
            {
                        "front": "Work high",
                        "back": "powered job, hand in your notice",
                        "phonetic": "",
                        "example": "Example sentence with Work high."
            },
            {
                        "front": "Edition",
                        "back": "Unit 27, Using the Internet, and Unit 29,",
                        "phonetic": "",
                        "example": "Example sentence with Edition."
            },
            {
                        "front": "Some collocations",
                        "back": "particularly ones that use short, dramatic words – are found mainly in",
                        "phonetic": "",
                        "example": "Example sentence with Some collocations."
            },
            {
                        "front": "Naomi",
                        "back": "The bill says we’ve had three desserts",
                        "phonetic": "",
                        "example": "Example sentence with Naomi."
            },
            {
                        "front": "Stella",
                        "back": "The waiter must have been mistaken",
                        "phonetic": "",
                        "example": "Example sentence with Stella."
            },
            {
                        "front": "Avery",
                        "back": "It’s so diff  icult",
                        "phonetic": "",
                        "example": "Example sentence with Avery."
            },
            {
                        "front": "Owen",
                        "back": "I know it’s diff  icult",
                        "phonetic": "",
                        "example": "Example sentence with Owen."
            },
            {
                        "front": "Grace",
                        "back": "Can you and Ethan come to dinner on Saturday?",
                        "phonetic": "",
                        "example": "Example sentence with Grace."
            },
            {
                        "front": "Lily",
                        "back": "Yes, we’ll have to arrange to get a babysitter, but it should be OK",
                        "phonetic": "",
                        "example": "Example sentence with Lily."
            },
            {
                        "front": "Luke",
                        "back": "Can I have chips and rice with my lunch?",
                        "phonetic": "",
                        "example": "Example sentence with Luke."
            },
            {
                        "front": "Clare",
                        "back": "No, you have to choose, chips or rice, but not both",
                        "phonetic": "",
                        "example": "Example sentence with Clare."
            },
            {
                        "front": "Gavin",
                        "back": "Do you intend to speak at the meeting?",
                        "phonetic": "",
                        "example": "Example sentence with Gavin."
            },
            {
                        "front": "Victoria",
                        "back": "Yes, I hope I can contribute to the debate",
                        "phonetic": "",
                        "example": "Example sentence with Victoria."
            },
            {
                        "front": "Clue",
                        "back": "Think of their hair",
                        "phonetic": "",
                        "example": "Example sentence with Clue."
            },
            {
                        "front": "London",
                        "back": "there are always plenty of jobs",
                        "phonetic": "",
                        "example": "Example sentence with London."
            },
            {
                        "front": "Jason",
                        "back": "I was in floods of tears",
                        "phonetic": "",
                        "example": "Example sentence with Jason."
            },
            {
                        "front": "Madeline",
                        "back": "I didn’t think there’d be much tr",
                        "phonetic": "",
                        "example": "Example sentence with Madeline."
            },
            {
                        "front": "Gale",
                        "back": "force winds3 caused a lot of damage",
                        "phonetic": "",
                        "example": "Example sentence with Gale."
            },
            {
                        "front": "Behaviour",
                        "back": "verb + noun collocationsB",
                        "phonetic": "",
                        "example": "Example sentence with Behaviour."
            },
            {
                        "front": "Newly",
                        "back": "built apartment available soon",
                        "phonetic": "",
                        "example": "Example sentence with Newly."
            },
            {
                        "front": "Lucy",
                        "back": "Yeah, but it’s hard to get them to eat nourishing meals 1",
                        "phonetic": "",
                        "example": "Example sentence with Lucy."
            },
            {
                        "front": "Sergio",
                        "back": "Have you tried the new supermarket yet?",
                        "phonetic": "",
                        "example": "Example sentence with Sergio."
            },
            {
                        "front": "Liam",
                        "back": "I can’t believe food additives 4 are good for our long-term health",
                        "phonetic": "",
                        "example": "Example sentence with Liam."
            },
            {
                        "front": "Ryan",
                        "back": "No, and I think processed foods 5 in general are probably bad for us, not to mention GM foods6!",
                        "phonetic": "",
                        "example": "Example sentence with Ryan."
            },
            {
                        "front": "Logan",
                        "back": "I’ve got some cheese and milk",
                        "phonetic": "",
                        "example": "Example sentence with Logan."
            },
            {
                        "front": "Connor",
                        "back": "I feel so hungry! I can’t belie",
                        "phonetic": "",
                        "example": "Example sentence with Connor."
            },
            {
                        "front": "Layla",
                        "back": "I’ve been sick and my stomach is aching",
                        "phonetic": "",
                        "example": "Example sentence with Layla."
            },
            {
                        "front": "Michael",
                        "back": "No matter how much I e",
                        "phonetic": "",
                        "example": "Example sentence with Michael."
            },
            {
                        "front": "Scarlett",
                        "back": "All these veget",
                        "phonetic": "",
                        "example": "Example sentence with Scarlett."
            },
            {
                        "front": "Bella",
                        "back": "I always enjoy my food and look for",
                        "phonetic": "",
                        "example": "Example sentence with Bella."
            },
            {
                        "front": "Matthew",
                        "back": "Have you downloaded tha",
                        "phonetic": "",
                        "example": "Example sentence with Matthew."
            },
            {
                        "front": "Camilla",
                        "back": "No, I don’t use my e-book re",
                        "phonetic": "",
                        "example": "Example sentence with Camilla."
            },
            {
                        "front": "Bust",
                        "back": "out’s new double album features6 Jola V, a",
                        "phonetic": "",
                        "example": "Example sentence with Bust."
            },
            {
                        "front": "Chicago hip",
                        "back": "hop band Frenzy, but went solo in 2015",
                        "phonetic": "",
                        "example": "Example sentence with Chicago hip."
            },
            {
                        "front": "Some anti",
                        "back": "virus products will also help to",
                        "phonetic": "",
                        "example": "Example sentence with Some anti."
            },
            {
                        "front": "Saleema",
                        "back": "I didn’t want to spend money on it",
                        "phonetic": "",
                        "example": "Example sentence with Saleema."
            },
            {
                        "front": "Helena",
                        "back": "I always keep a copy of all my w",
                        "phonetic": "",
                        "example": "Example sentence with Helena."
            },
            {
                        "front": "Steve",
                        "back": "I was working on my presenta",
                        "phonetic": "",
                        "example": "Example sentence with Steve."
            },
            {
                        "front": "Elise",
                        "back": "I always update the softwar",
                        "phonetic": "",
                        "example": "Example sentence with Elise."
            },
            {
                        "front": "Ethan",
                        "back": "My photos are all online, which means I c",
                        "phonetic": "",
                        "example": "Example sentence with Ethan."
            },
            {
                        "front": "Student",
                        "back": "Do we have to",
                        "phonetic": "",
                        "example": "Example sentence with Student."
            },
            {
                        "front": "Teacher",
                        "back": "If you want to",
                        "phonetic": "",
                        "example": "Example sentence with Teacher."
            },
            {
                        "front": "Group",
                        "back": "Marketing Manager",
                        "phonetic": "",
                        "example": "Example sentence with Group."
            },
            {
                        "front": "Interviewer",
                        "back": "When did you firs t go into business?",
                        "phonetic": "",
                        "example": "Example sentence with Interviewer."
            },
            {
                        "front": "Jeffries",
                        "back": "Well, during the economic rec",
                        "phonetic": "",
                        "example": "Example sentence with Jeffries."
            },
            {
                        "front": "Internet",
                        "back": "based travel companies as most people book travel online",
                        "phonetic": "",
                        "example": "Example sentence with Internet."
            },
            {
                        "front": "Small",
                        "back": "scale robberies remain a significant problem in this area and police are concerned that the",
                        "phonetic": "",
                        "example": "Example sentence with Small."
            },
            {
                        "front": "Prefixes",
                        "back": "changing meaning",
                        "phonetic": "",
                        "example": "Example sentence with Prefixes."
            },
            {
                        "front": "Suffixes",
                        "back": "forming adjectives",
                        "phonetic": "",
                        "example": "Example sentence with Suffixes."
            },
            {
                        "front": "Prepositions",
                        "back": "place and movement",
                        "phonetic": "",
                        "example": "Example sentence with Prepositions."
            },
            {
                        "front": "Swiss",
                        "back": "German, French, Italian",
                        "phonetic": "",
                        "example": "Example sentence with Swiss."
            },
            {
                        "front": "Krubera",
                        "back": "Voronja Cave near the",
                        "phonetic": "",
                        "example": "Example sentence with Krubera."
            },
            {
                        "front": "Beijing",
                        "back": "Hangzhou Grand is the longest in the world",
                        "phonetic": "",
                        "example": "Example sentence with Beijing."
            },
            {
                        "front": "Also",
                        "back": "She’s got long black hair",
                        "phonetic": "",
                        "example": "Example sentence with Also."
            },
            {
                        "front": "Animal",
                        "back": "cow calf [young cow] lamb [young sheep] pig chicken/hen",
                        "phonetic": "",
                        "example": "Example sentence with Animal."
            },
            {
                        "front": "Meat",
                        "back": "beef veal lamb pork chicken",
                        "phonetic": "",
                        "example": "Example sentence with Meat."
            },
            {
                        "front": "Opportunity",
                        "back": "Imkoniyat, qulay vaziyat",
                        "phonetic": "/ˌɒp.əˈtʃuː.nə.ti/",
                        "example": "Studying abroad is a great life opportunity."
            },
            {
                        "front": "Environment",
                        "back": "Atrof-muhit, ekologiya",
                        "phonetic": "/ɪnˈvaɪ.rən.mənt/",
                        "example": "We must protect our natural environment."
            },
            {
                        "front": "Essential",
                        "back": "Zarur, o'ta muhim",
                        "phonetic": "/ɪˈsen.ʃəl/",
                        "example": "Water is essential for human health."
            },
            {
                        "front": "Challenge",
                        "back": "Qiyinchilik, sinov, chaqiriq",
                        "phonetic": "/ˈtʃæl.ɪndʒ/",
                        "example": "Learning a new language is a rewarding challenge."
            },
            {
                        "front": "Advantage",
                        "back": "Afzallik, ustunlik",
                        "phonetic": "/ədˈvɑːn.tɪdʒ/",
                        "example": "Speed is the main advantage of online communication."
            },
            {
                        "front": "Disadvantage",
                        "back": "Kamchilik, salbiy tomon",
                        "phonetic": "/ˌdɪs.ədˈvɑːn.tɪdʒ/",
                        "example": "High cost is a major disadvantage of this plan."
            },
            {
                        "front": "Knowledge",
                        "back": "Bilim, tushuncha",
                        "phonetic": "/ˈnɒl.ɪdʒ/",
                        "example": "Books are an endless source of knowledge."
            },
            {
                        "front": "Experience",
                        "back": "Tajriba, amaliyot",
                        "phonetic": "/ɪkˈspɪə.ri.əns/",
                        "example": "She has ten years of teaching experience."
            },
            {
                        "front": "Encourage",
                        "back": "Rag'batlantirmoq, ruhlantirmoq",
                        "phonetic": "/ɪnˈkʌr.ɪdʒ/",
                        "example": "Teachers encourage students to ask questions."
            },
            {
                        "front": "Accumulate",
                        "back": "To'plamoq, yig'moq",
                        "phonetic": "/əˈkjuː.mjə.leɪt/",
                        "example": "Evidence continues to accumulate regarding climate change."
            },
            {
                        "front": "Substantial",
                        "back": "Sezilarli, salmoqli",
                        "phonetic": "/səbˈstæn.ʃəl/",
                        "example": "There has been a substantial increase in international trade."
            },
            {
                        "front": "Consequence",
                        "back": "Oqibat, natija",
                        "phonetic": "/ˈkɒn.sɪ.kwəns/",
                        "example": "Environmental pollution has serious consequences for future generations."
            },
            {
                        "front": "Fundamental",
                        "back": "Asosiy, tubiy, poydevor",
                        "phonetic": "/ˌfʌn.dəˈmen.təl/",
                        "example": "Free speech is a fundamental human right."
            },
            {
                        "front": "Inevitable",
                        "back": "Muqarrar, qutulib bo'lmaydigan",
                        "phonetic": "/ɪnˈev.ɪ.tə.bəl/",
                        "example": "Change is an inevitable part of technological progress."
            },
            {
                        "front": "Predominant",
                        "back": "Ustunlik qiluvchi, asosiy",
                        "phonetic": "/prɪˈdɒm.ɪ.nənt/",
                        "example": "English is the predominant language in global business."
            },
            {
                        "front": "Fluctuate",
                        "back": "O'zgarib turmoq, tebranmoq",
                        "phonetic": "/ˈflʌk.tʃu.eɪt/",
                        "example": "Temperatures fluctuate wildly during the spring season."
            },
            {
                        "front": "Implement",
                        "back": "Amalga oshirmoq, joriy etmoq",
                        "phonetic": "/ˈɪm.plɪ.ment/",
                        "example": "The government plans to implement new education policies."
            },
            {
                        "front": "Comprehensive",
                        "back": "Har tomonlama, batafsil, keng qamrovli",
                        "phonetic": "/ˌkɒm.prɪˈhen.sɪv/",
                        "example": "The report offers a comprehensive analysis of urban growth."
            },
            {
                        "front": "Deteriorate",
                        "back": "Yomonlashmoq, yuz tuban ketmoq",
                        "phonetic": "/dɪˈtɪə.ri.ə.reɪt/",
                        "example": "Air quality continues to deteriorate in heavily populated cities."
            },
            {
                        "front": "Fluctuation",
                        "back": "O'zgarish, tebranish (grafiklarda)",
                        "phonetic": "/ˌflʌk.tʃuˈeɪ.ʃən/",
                        "example": "There was a sharp fluctuation in stock prices last month."
            },
            {
                        "front": "Paramount",
                        "back": "Oliy darajadagi, eng muhim",
                        "phonetic": "/ˈpær.ə.maʊnt/",
                        "example": "Ensuring patient safety is of paramount importance."
            },
            {
                        "front": "Scrutinize",
                        "back": "Sinchkovlik bilan tekshirmoq",
                        "phonetic": "/ˈskruː.tɪ.naɪz/",
                        "example": "Auditors scrutinize financial records very carefully."
            },
            {
                        "front": "Unprecedented",
                        "back": "Pravotsiz, ilgari kuzatilmagan",
                        "phonetic": "/ʌnˈpres.ɪ.den.tɪd/",
                        "example": "The project achieved unprecedented commercial success."
            },
            {
                        "front": "Versatile",
                        "back": "Ko'p qirrali, har tomonlama moslashuvchan",
                        "phonetic": "/ˈvɜː.sə.taɪl/",
                        "example": "Python is a highly versatile programming language."
            }
]
    },
    {
        id: 'deck_advanced_c1_c2',
        title: '📙 C1-C2 Master IELTS Collocations (121 Kartochka)',
        description: 'Band 7.0-9.0 uchun Cambridge PDF darsliklaridan ajratib olingan iboralar.',
        level: 'C1-C2',
        badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        icon: '📙',
        isPremiumOnly: false,
        cards: [
            {
                        "front": "Linking verbs",
                        "back": "be, appear, seem; become, get, etc",
                        "phonetic": "",
                        "example": "Example sentence with Linking verbs."
            },
            {
                        "front": "Verb complementation",
                        "back": "what follows verbs",
                        "phonetic": "",
                        "example": "Example sentence with Verb complementation."
            },
            {
                        "front": "Giving reasons",
                        "back": "as, because, etc",
                        "phonetic": "",
                        "example": "Example sentence with Giving reasons."
            },
            {
                        "front": "Contrasts",
                        "back": "although and though; even though / if; while, whilst and whereas",
                        "phonetic": "",
                        "example": "Example sentence with Contrasts."
            },
            {
                        "front": "Focusing",
                        "back": "it-clauses and what-clauses",
                        "phonetic": "",
                        "example": "Example sentence with Focusing."
            },
            {
                        "front": "Compare",
                        "back": "I regret that the company will have to be sold",
                        "phonetic": "",
                        "example": "Example sentence with Compare."
            },
            {
                        "front": "Also",
                        "back": "cost, expect, feel, ﬁ t, have,",
                        "phonetic": "",
                        "example": "Example sentence with Also."
            },
            {
                        "front": "Future continuous",
                        "back": "I will be doing",
                        "phonetic": "",
                        "example": "Example sentence with Future continuous."
            },
            {
                        "front": "Rome",
                        "back": "to-Naples railway line is to be reopened today",
                        "phonetic": "",
                        "example": "Example sentence with Rome."
            },
            {
                        "front": "However",
                        "back": "we use have to with frequency adverbs:",
                        "phonetic": "",
                        "example": "Example sentence with However."
            },
            {
                        "front": "Nepal",
                        "back": "it’s a beautiful country",
                        "phonetic": "",
                        "example": "Example sentence with Nepal."
            },
            {
                        "front": "Transitive two",
                        "back": "and three-word verbs (see also Unit 94)",
                        "phonetic": "",
                        "example": "Example sentence with Transitive two."
            },
            {
                        "front": "Answering multiple",
                        "back": "choice questions",
                        "phonetic": "",
                        "example": "Example sentence with Answering multiple."
            },
            {
                        "front": "English",
                        "back": "speaking country",
                        "phonetic": "",
                        "example": "Example sentence with English."
            },
            {
                        "front": "Score",
                        "back": "1 CEFR description CEFRcode IELTS Band Score",
                        "phonetic": "",
                        "example": "Example sentence with Score."
            },
            {
                        "front": "Intermediate",
                        "back": "Upper intermediate) B1 4-5",
                        "phonetic": "",
                        "example": "Example sentence with Intermediate."
            },
            {
                        "front": "Listening",
                        "back": "16 out of 40 correct answers: band score 5",
                        "phonetic": "",
                        "example": "Example sentence with Listening."
            },
            {
                        "front": "Writing",
                        "back": "examiners award a band score for each of four areas with equal weighting:",
                        "phonetic": "",
                        "example": "Example sentence with Writing."
            },
            {
                        "front": "Speaking",
                        "back": "examiners award a band score for each of four areas with equal weighting:",
                        "phonetic": "",
                        "example": "Example sentence with Speaking."
            },
            {
                        "front": "Aims",
                        "back": "Predicting answers I Understanding synonyms and paraphrasing",
                        "phonetic": "",
                        "example": "Example sentence with Aims."
            },
            {
                        "front": "Exam tip",
                        "back": "Before you listen, try and predict what the answers will be",
                        "phonetic": "",
                        "example": "Example sentence with Exam tip."
            },
            {
                        "front": "Exam information",
                        "back": "Form completion (1)",
                        "phonetic": "",
                        "example": "Example sentence with Exam information."
            },
            {
                        "front": "Full name",
                        "back": "Telephone number:",
                        "phonetic": "",
                        "example": "Example sentence with Full name."
            },
            {
                        "front": "Arrive",
                        "back": "Departure time:",
                        "phonetic": "",
                        "example": "Example sentence with Arrive."
            },
            {
                        "front": "July twenty",
                        "back": "third____________",
                        "phonetic": "",
                        "example": "Example sentence with July twenty."
            },
            {
                        "front": "Example",
                        "back": "Mr Forsythe: F-O-R-S-Y-T-H-E",
                        "phonetic": "",
                        "example": "Example sentence with Example."
            },
            {
                        "front": "Name",
                        "back": "Telephone number:",
                        "phonetic": "",
                        "example": "Example sentence with Name."
            },
            {
                        "front": "Cost",
                        "back": "Payment method:",
                        "phonetic": "",
                        "example": "Example sentence with Cost."
            },
            {
                        "front": "Tourist",
                        "back": "I'd like to fly out on the twenty-third of July",
                        "phonetic": "",
                        "example": "Example sentence with Tourist."
            },
            {
                        "front": "Travel agent",
                        "back": "No, that's the Saturday",
                        "phonetic": "",
                        "example": "Example sentence with Travel agent."
            },
            {
                        "front": "James",
                        "back": "At the moment I'm studying for my exams, so I'm",
                        "phonetic": "",
                        "example": "Example sentence with James."
            },
            {
                        "front": "Helen",
                        "back": "I love playing sports, and I go to hockey",
                        "phonetic": "",
                        "example": "Example sentence with Helen."
            },
            {
                        "front": "Mike",
                        "back": "I really love computers and spend a lot of my time",
                        "phonetic": "",
                        "example": "Example sentence with Mike."
            },
            {
                        "front": "Useful for",
                        "back": "Playtime Online 4-6 Learning skills for games",
                        "phonetic": "",
                        "example": "Example sentence with Useful for."
            },
            {
                        "front": "Chart",
                        "back": "Listening for IELTS",
                        "phonetic": "",
                        "example": "Example sentence with Chart."
            },
            {
                        "front": "Earth presentation",
                        "back": "Who is doing which tasks?",
                        "phonetic": "",
                        "example": "Example sentence with Earth presentation."
            },
            {
                        "front": "Safety",
                        "back": "Presentation Plan",
                        "phonetic": "",
                        "example": "Example sentence with Safety."
            },
            {
                        "front": "Problem",
                        "back": "Not enough time for 1 ___________",
                        "phonetic": "",
                        "example": "Example sentence with Problem."
            },
            {
                        "front": "Advantage",
                        "back": "Afzallik, ustunlik — Easier to 3 ___________into different sections, more interesting",
                        "phonetic": "/ədˈvɑːn.tɪdʒ/",
                        "example": "Speed is the main advantage of online communication."
            },
            {
                        "front": "Home address",
                        "back": "56, Grove Street, Manchester, U",
                        "phonetic": "",
                        "example": "Example sentence with Home address."
            },
            {
                        "front": "Substituting synonyms",
                        "back": "Helen Davies is the most famous person in this town",
                        "phonetic": "",
                        "example": "Example sentence with Substituting synonyms."
            },
            {
                        "front": "Classifying",
                        "back": "Labelling a diagram I Completing a table",
                        "phonetic": "",
                        "example": "Example sentence with Classifying."
            },
            {
                        "front": "High",
                        "back": "income couples with no children",
                        "phonetic": "",
                        "example": "Example sentence with High."
            },
            {
                        "front": "Jason",
                        "back": "I saw myself in a photograph taken at a friend’s wedding, and I almost didn’t",
                        "phonetic": "",
                        "example": "Example sentence with Jason."
            },
            {
                        "front": "Andrew",
                        "back": "My love of the gym (3) __________from when I was eighteen and at",
                        "phonetic": "",
                        "example": "Example sentence with Andrew."
            },
            {
                        "front": "Suggested workout",
                        "back": "Level 2 workout",
                        "phonetic": "",
                        "example": "Example sentence with Suggested workout."
            },
            {
                        "front": "Email address",
                        "back": "brad07faelemnet",
                        "phonetic": "",
                        "example": "Example sentence with Email address."
            },
            {
                        "front": "Mclachlan",
                        "back": "pp 118,127,141, 188;",
                        "phonetic": "",
                        "example": "Example sentence with Mclachlan."
            },
            {
                        "front": "Sourced cartoons",
                        "back": "CartoonStock: p250 ('l miss the good old days",
                        "phonetic": "",
                        "example": "Example sentence with Sourced cartoons."
            },
            {
                        "front": "Library",
                        "back": "pp14 ('You have a 9o",
                        "phonetic": "",
                        "example": "Example sentence with Library."
            },
            {
                        "front": "Spectator",
                        "back": "pp 6 ('Don't you ever switch off",
                        "phonetic": "",
                        "example": "Example sentence with Spectator."
            },
            {
                        "front": "Woman",
                        "back": "p 2 ('l've spent",
                        "phonetic": "",
                        "example": "Example sentence with Woman."
            },
            {
                        "front": "Henrinq conlraclionr",
                        "back": "prr!*tl pede(lar pas?",
                        "phonetic": "",
                        "example": "Example sentence with Henrinq conlraclionr."
            },
            {
                        "front": "Note",
                        "back": "do and not with negative words Do is possible with a negative for emphasis",
                        "phonetic": "",
                        "example": "Example sentence with Note."
            },
            {
                        "front": "Their fourteen",
                        "back": "year-old child is going out to a party",
                        "phonetic": "",
                        "example": "Example sentence with Their fourteen."
            },
            {
                        "front": "Dont fosie",
                        "back": "she's so boring",
                        "phonetic": "",
                        "example": "Example sentence with Dont fosie."
            },
            {
                        "front": "Correct",
                        "back": "p where youput the newspaper?",
                        "phonetic": "",
                        "example": "Example sentence with Correct."
            },
            {
                        "front": "Questions",
                        "back": "is there, are there etc",
                        "phonetic": "",
                        "example": "Example sentence with Questions."
            },
            {
                        "front": "Look",
                        "back": "Peter's drinking your cofee",
                        "phonetic": "",
                        "example": "Example sentence with Look."
            },
            {
                        "front": "French",
                        "back": "she's from Switzerland",
                        "phonetic": "",
                        "example": "Example sentence with French."
            },
            {
                        "front": "Remember",
                        "back": "some verbs are mostly used in simple tenses even if we mean",
                        "phonetic": "",
                        "example": "Example sentence with Remember."
            },
            {
                        "front": "John",
                        "back": "he's probably going to / he'll probably know the answer",
                        "phonetic": "",
                        "example": "Example sentence with John."
            },
            {
                        "front": "Hlffi",
                        "back": ";f?,:::::?f,li'J3'i,Jii&,'* t",
                        "phonetic": "",
                        "example": "Example sentence with Hlffi."
            },
            {
                        "front": "Past progressive",
                        "back": "longer action or situation",
                        "phonetic": "",
                        "example": "Example sentence with Past progressive."
            },
            {
                        "front": "Simple past",
                        "back": "complete shorter action that happened while the longer action was happening",
                        "phonetic": "",
                        "example": "Example sentence with Simple past."
            },
            {
                        "front": "Essrvn",
                        "back": "I have been working/writing/driving etc",
                        "phonetic": "",
                        "example": "Example sentence with Essrvn."
            },
            {
                        "front": "Jree half",
                        "back": "hour in luly, because we wefe rehearsing non-stop",
                        "phonetic": "",
                        "example": "Example sentence with Jree half."
            },
            {
                        "front": "Jlooded",
                        "back": "it had been raining solidly for three days",
                        "phonetic": "",
                        "example": "Example sentence with Jlooded."
            },
            {
                        "front": "Yiii",
                        "back": "\" \"'in\"ii'Iooked",
                        "phonetic": "",
                        "example": "Example sentence with Yiii."
            },
            {
                        "front": "Certainty",
                        "back": "we can use modal verbs to say for exampie that a situation is certain, probable'",
                        "phonetic": "",
                        "example": "Example sentence with Certainty."
            },
            {
                        "front": "Pare",
                        "back": "I could read when I was four",
                        "phonetic": "",
                        "example": "Example sentence with Pare."
            },
            {
                        "front": "Ogmore",
                        "back": "Pritchard is talking to her two dead husbands, Mr Ogmore and Mr Pritchard",
                        "phonetic": "",
                        "example": "Example sentence with Ogmore."
            },
            {
                        "front": "Thomas",
                        "back": "Under Milk Wood(adapted)",
                        "phonetic": "",
                        "example": "Example sentence with Thomas."
            },
            {
                        "front": "Daniel",
                        "back": "he's in Morocco",
                        "phonetic": "",
                        "example": "Example sentence with Daniel."
            },
            {
                        "front": "Saturday",
                        "back": "they havent got a chance",
                        "phonetic": "",
                        "example": "Example sentence with Saturday."
            },
            {
                        "front": "Teachers",
                        "back": "Avoid delays - if you don't yet have a login for CLMS, register as",
                        "phonetic": "",
                        "example": "Example sentence with Teachers."
            },
            {
                        "front": "System requirements",
                        "back": "O Windows Vista, Windows 7, Windows 8, Windows 8",
                        "phonetic": "",
                        "example": "Example sentence with System requirements."
            },
            {
                        "front": "Please note",
                        "back": "O Once the activation code has been revealed, this book cannot be returned",
                        "phonetic": "",
                        "example": "Example sentence with Please note."
            },
            {
                        "front": "User",
                        "back": "Has fully operational command of the language: appropriate, accurate and",
                        "phonetic": "",
                        "example": "Example sentence with User."
            },
            {
                        "front": "Crop",
                        "back": "growing skyscrapers",
                        "phonetic": "",
                        "example": "Example sentence with Crop."
            },
            {
                        "front": "Celtic double",
                        "back": "headed axe, but also the vast turning",
                        "phonetic": "",
                        "example": "Example sentence with Celtic double."
            },
            {
                        "front": "Wheel",
                        "back": "roughly the same as boiling eight small",
                        "phonetic": "",
                        "example": "Example sentence with Wheel."
            },
            {
                        "front": "Human",
                        "back": "induced climate change",
                        "phonetic": "",
                        "example": "Example sentence with Human."
            },
            {
                        "front": "Languagc",
                        "back": "You should spend about 40 minutes on this task",
                        "phonetic": "",
                        "example": "Example sentence with Languagc."
            },
            {
                        "front": "Discussion topics",
                        "back": "Different types of home",
                        "phonetic": "",
                        "example": "Example sentence with Discussion topics."
            },
            {
                        "front": "Example questions",
                        "back": "You will have to talk about the topic",
                        "phonetic": "",
                        "example": "Example sentence with Example questions."
            },
            {
                        "front": "Occupation",
                        "back": "student and part-time job as a 4",
                        "phonetic": "",
                        "example": "Example sentence with Occupation."
            },
            {
                        "front": "Hobbies",
                        "back": "does a lot of 6",
                        "phonetic": "",
                        "example": "Example sentence with Hobbies."
            },
            {
                        "front": "Rose",
                        "back": "Stages one and two",
                        "phonetic": "",
                        "example": "Example sentence with Rose."
            },
            {
                        "front": "Rapanui people",
                        "back": "descendants of",
                        "phonetic": "",
                        "example": "Example sentence with Rapanui people."
            },
            {
                        "front": "Polynesian settlers",
                        "back": "wrecked their own environment",
                        "phonetic": "",
                        "example": "Example sentence with Polynesian settlers."
            },
            {
                        "front": "Twentieth",
                        "back": "century discoveries",
                        "phonetic": "",
                        "example": "Example sentence with Twentieth."
            },
            {
                        "front": "Hawley",
                        "back": "Dolan's findings indicate that people",
                        "phonetic": "",
                        "example": "Example sentence with Hawley."
            },
            {
                        "front": "Ethnography",
                        "back": "research which explores human cultures",
                        "phonetic": "",
                        "example": "Example sentence with Ethnography."
            },
            {
                        "front": "Topics",
                        "back": "work and study",
                        "phonetic": "",
                        "example": "Example sentence with Topics."
            },
            {
                        "front": "Edition",
                        "back": "Unit 15, Marketing, and Unit 25, Commuting",
                        "phonetic": "",
                        "example": "Example sentence with Edition."
            },
            {
                        "front": "Text",
                        "back": "NI Syndication Limited for the text on p",
                        "phonetic": "",
                        "example": "Example sentence with Text."
            },
            {
                        "front": "Registers",
                        "back": "informal conversation (IC) journalism/news (J) entertainment (E)",
                        "phonetic": "",
                        "example": "Example sentence with Registers."
            },
            {
                        "front": "Doctor",
                        "back": "What can I (1)",
                        "phonetic": "",
                        "example": "Example sentence with Doctor."
            },
            {
                        "front": "Patient",
                        "back": "Well, Doctor, I've been (2)",
                        "phonetic": "",
                        "example": "Example sentence with Patient."
            },
            {
                        "front": "Also available",
                        "back": "ADVANCED INUSE",
                        "phonetic": "",
                        "example": "Example sentence with Also available."
            },
            {
                        "front": "Make a decision",
                        "back": "Qaror qabul qilmoq",
                        "phonetic": "",
                        "example": "It is time to make a decision about your future career."
            },
            {
                        "front": "Play a crucial role",
                        "back": "Halkiluvchi rol o'ynamoq",
                        "phonetic": "",
                        "example": "Education plays a crucial role in modern economic growth."
            },
            {
                        "front": "Take into account",
                        "back": "Hisobga olmoq, inobatga olmoq",
                        "phonetic": "",
                        "example": "We must take into account all potential risks before proceeding."
            },
            {
                        "front": "Raise awareness",
                        "back": "Xabardorlikni oshirmoq",
                        "phonetic": "",
                        "example": "Campaigns help raise awareness about environmental issues."
            },
            {
                        "front": "Conduct research",
                        "back": "Tadqiqot o'tkazmoq",
                        "phonetic": "",
                        "example": "Scientists conduct research on renewable energy technologies."
            },
            {
                        "front": "Bridging the gap",
                        "back": "Tafovutni kamaytirish / Ko'prik bo'lish",
                        "phonetic": "",
                        "example": "Online courses help bridge the gap between education and employment."
            },
            {
                        "front": "Heavy traffic",
                        "back": "Tirbandlik (og'ir yo'l harakati)",
                        "phonetic": "",
                        "example": "Heavy traffic delayed our arrival at the test venue."
            },
            {
                        "front": "Pose a threat",
                        "back": "Xavf tug'dirmoq",
                        "phonetic": "",
                        "example": "Industrial pollution poses a threat to marine life."
            },
            {
                        "front": "Profound effect",
                        "back": "Chukur ta'sir",
                        "phonetic": "",
                        "example": "Technology has had a profound effect on modern society."
            },
            {
                        "front": "Solve a problem",
                        "back": "Muammoni hal qilmoq",
                        "phonetic": "",
                        "example": "Teamwork helps us solve complex problems faster."
            },
            {
                        "front": "Vital role",
                        "back": "Hayotiy muhim rol",
                        "phonetic": "",
                        "example": "Clean water plays a vital role in human longevity."
            },
            {
                        "front": "Adverse effect",
                        "back": "Salbiy ta'sir",
                        "phonetic": "",
                        "example": "Pollution has an adverse effect on public health."
            },
            {
                        "front": "Broaden horizons",
                        "back": "Dunyoni kengaytirmoq, dunyoqarashni oshirmoq",
                        "phonetic": "",
                        "example": "Traveling abroad helps broaden your horizons."
            },
            {
                        "front": "Address an issue",
                        "back": "Muammoni hal qilishga kirishmoq",
                        "phonetic": "",
                        "example": "The government must address the issue of unemployment."
            },
            {
                        "front": "Gain experience",
                        "back": "Tajriba orttirmoq",
                        "phonetic": "",
                        "example": "Internships allow students to gain practical experience."
            },
            {
                        "front": "Maintain balance",
                        "back": "Muvozanatni saqlamoq",
                        "phonetic": "",
                        "example": "Work-life balance is essential for long-term health."
            },
            {
                        "front": "Catalyst for change",
                        "back": "O'zgarishlar turtkisi (katalizator)",
                        "phonetic": "",
                        "example": "Innovation is a catalyst for economic change."
            },
            {
                        "front": "Drastic measure",
                        "back": "Keskin chora-tadbirlar",
                        "phonetic": "",
                        "example": "Authorities took drastic measures to control the outbreak."
            },
            {
                        "front": "Intricate detail",
                        "back": "Murakkab va kichik tafsilotlar",
                        "phonetic": "",
                        "example": "The architect explained every intricate detail of the blueprint."
            },
            {
                        "front": "Lucrative business",
                        "back": "Daromadli, foydali biznes",
                        "phonetic": "",
                        "example": "Software engineering has become a highly lucrative career path."
            }
]
    }
];
