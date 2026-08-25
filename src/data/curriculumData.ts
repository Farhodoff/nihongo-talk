// CURATED CEFR ACADEMIC & IELTS CURRICULUM DATABASE
export interface CurriculumVocabItem {
    front: string;
    back: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}

export interface CurriculumGrammarItem {
    unit: string;
    topic: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}

export interface CurriculumSpeakingItem {
    question: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2';
    source: string;
}

export const EXTRACTED_CURRICULUM = {
  "A1-A2": {
    "vocab": [
      {
        "front": "Look forward to",
        "back": "Intizorlik bilan kutmoq (To feel excited about something in the future)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Make a decision",
        "back": "Bir qarorga kelmoq (To decide on something)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Take a break",
        "back": "Tanaffus qilmoq, dam olmoq (To rest for a short period)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Keep in touch",
        "back": "Aloqada bo'lib turmoq (To maintain contact with someone)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Pay attention",
        "back": "Diqqat qaratmoq, e'tibor bermoq (To watch or listen carefully)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Catch a cold",
        "back": "Shamollab qolmoq (To become infected with a cold)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Make a mistake",
        "back": "Xato qilmoq (To do something wrong)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Do your best",
        "back": "Bor kuchingiz bilan harakat qilmoq (To try as hard as you can)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Have a good time",
        "back": "Vaqtni maroqli o'tkazmoq (To enjoy oneself)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      },
      {
        "front": "Take notes",
        "back": "Qaydlar yozib bormoq (To write down information)",
        "level": "A1-A2",
        "source": "Essential English Collocations"
      }
    ],
    "grammar": [
      {
        "unit": "Unit 1",
        "topic": "Present Simple vs Present Continuous: Facts vs Temporary actions",
        "level": "A1-A2",
        "source": "Essential Grammar in Use"
      },
      {
        "unit": "Unit 2",
        "topic": "Past Simple: Regular and Irregular Verb Patterns",
        "level": "A1-A2",
        "source": "Essential Grammar in Use"
      },
      {
        "unit": "Unit 3",
        "topic": "Present Perfect: Life experiences with ever/never",
        "level": "A1-A2",
        "source": "Essential Grammar in Use"
      },
      {
        "unit": "Unit 4",
        "topic": "Modal Verbs: Can, Could, Must, Should for ability and advice",
        "level": "A1-A2",
        "source": "Essential Grammar in Use"
      }
    ],
    "speaking": [
      {
        "question": "Can you tell me about your daily routine and what you usually do on weekends?",
        "level": "A1-A2",
        "source": "IELTS Speaking Part 1"
      },
      {
        "question": "Where do you live and what do you like most about your hometown?",
        "level": "A1-A2",
        "source": "IELTS Speaking Part 1"
      }
    ]
  },
  "B1-B2": {
    "vocab": [
      {
        "front": "Substantial amount",
        "back": "Katta, salmoqli miqdor (A large or significant quantity)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Vivid imagination",
        "back": "Boy, yorqin tasavvur (Ability to produce powerful mental images)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Crucial role",
        "back": "Hal qiluvchi, o'ta muhim o'rin (Extremely important function)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Pose a threat",
        "back": "Xavf tug'dirmoq (To create a danger or risk)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Draw a conclusion",
        "back": "Xulosa chiqarmoq (To formulate an opinion after consideration)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Conduct research",
        "back": "Ilmiy tadqiqot olib bormoq (To carry out systematic study)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Widespread concern",
        "back": "Keng tarqalgan xavotir (Anxiety shared by many people)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Meet the deadline",
        "back": "Muddatga ulgurmoq (To finish a task before its due time)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Heated debate",
        "back": "Qizg'in bahs-munozara (An intense and passionate argument)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      },
      {
        "front": "Tackle the problem",
        "back": "Muammoni hal qilishga kirishmoq (To deal with a challenge decisively)",
        "level": "B1-B2",
        "source": "English Collocations in Use Intermediate"
      }
    ],
    "grammar": [
      {
        "unit": "Unit 10",
        "topic": "Conditionals: Second & Third Conditional for hypothetical situations",
        "level": "B1-B2",
        "source": "English Grammar in Use"
      },
      {
        "unit": "Unit 11",
        "topic": "Passive Voice in Academic & Formal Reporting",
        "level": "B1-B2",
        "source": "English Grammar in Use"
      },
      {
        "unit": "Unit 12",
        "topic": "Relative Clauses: Defining and Non-defining relative clauses",
        "level": "B1-B2",
        "source": "English Grammar in Use"
      },
      {
        "unit": "Unit 13",
        "topic": "Inversion & Emphasis with negative adverbials (Rarely, Seldom, Not only)",
        "level": "B1-B2",
        "source": "English Grammar in Use"
      }
    ],
    "speaking": [
      {
        "question": "How has technological progress changed the way young people communicate with each other?",
        "level": "B1-B2",
        "source": "IELTS Speaking Part 3"
      },
      {
        "question": "Describe an important life decision you made that changed your personal perspective.",
        "level": "B1-B2",
        "source": "IELTS Speaking Part 2"
      }
    ]
  },
  "C1-C2": {
    "vocab": [
      {
        "front": "Methodological rigor",
        "back": "Metodologik qat'iylik va mukammallik (Strict adherence to scientific standards)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Ubiquitous phenomenon",
        "back": "Hamma joyda uchraydigan hodisa (Something present or found everywhere)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Exacerbate the crisis",
        "back": "Inqirozni yanada chuqurlashtirmoq/kuchaytirmoq (To make a bad situation worse)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Inextricably linked",
        "back": "Ajralmas tarzda bog'langan (Closely joined and impossible to separate)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Paradigm shift",
        "back": "Fundamental qarashlarning tubdan o'zgarishi (A fundamental change in approach)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Empirical evidence",
        "back": "Tajribaviy, amaliy isbot-dalillar (Information acquired by observation or experiment)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Catalyst for change",
        "back": "O'zgarishlar tezlatkichi/turtkisi (An agent that provokes rapid transformation)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Nuanced understanding",
        "back": "Barcha nozik jihatlarini hisobga olgan chuqur tushunish (Grasping subtle distinctions)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Mitigate negative externalities",
        "back": "Salbiy tashqi ta'sirlarni yumshatmoq (To reduce unintended harmful consequences)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      },
      {
        "front": "Precipitate a decline",
        "back": "Keskin pasayishni keltirib chiqarmoq (To cause a rapid downward trend)",
        "level": "C1-C2",
        "source": "Advanced Academic Collocations"
      }
    ],
    "grammar": [
      {
        "unit": "Unit 20",
        "topic": "Cleft Sentences & Discourse Markers in Academic Rhetoric",
        "level": "C1-C2",
        "source": "Advanced Grammar in Use"
      },
      {
        "unit": "Unit 21",
        "topic": "Subjunctive & Hypothetical Formulaic Stances in Formal English",
        "level": "C1-C2",
        "source": "Advanced Grammar in Use"
      },
      {
        "unit": "Unit 22",
        "topic": "Nominalisation: Transforming clause-based ideas into dense academic noun phrases",
        "level": "C1-C2",
        "source": "Advanced Grammar in Use"
      }
    ],
    "speaking": [
      {
        "question": "To what extent do global economic disparities undermine international cooperation on climate change?",
        "level": "C1-C2",
        "source": "IELTS Speaking Part 3 / Cambridge C2 Proficiency"
      },
      {
        "question": "Evaluate the societal implications of autonomous decision-making algorithms in legal jurisprudence.",
        "level": "C1-C2",
        "source": "IELTS Speaking Part 3 / Cambridge C2 Proficiency"
      }
    ]
  }
};
