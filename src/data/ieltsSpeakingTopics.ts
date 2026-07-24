export interface IeltsSpeakingTopic {
    id: string;
    category: string;
    part1: string[];
    part2: {
        title: string;
        bullets: string[];
    };
    part3: string[];
}

export const CAMBRIDGE_IELTS_TOPICS: IeltsSpeakingTopic[] = [
    {
        id: 'cambridge_travel',
        category: '🌍 Travel & Transport',
        part1: [
            "Tell me about your hometown. What do you like most about it?",
            "Do you prefer traveling by car, train, or plane? Why?",
            "How often do you go on trips with your family or friends?",
            "What kind of places do you like to visit on holiday?"
        ],
        part2: {
            title: "Describe a memorable journey you went on.",
            bullets: [
                "Where you went and who you went with",
                "What happened during the journey",
                "Why it was so memorable for you"
            ]
        },
        part3: [
            "How have transportation methods changed in your country over the past few decades?",
            "Do you think tourism always brings positive economic impacts to a local region?",
            "In the future, do you expect eco-friendly travel to become the dominant form of tourism?"
        ]
    },
    {
        id: 'cambridge_tech',
        category: '💻 Technology & Innovation',
        part1: [
            "What kinds of technology do you use most frequently every day?",
            "Do you think smartphones help people stay more connected or isolated?",
            "What is your favorite mobile application and why?",
            "How did you learn to use computers when you were younger?"
        ],
        part2: {
            title: "Describe a piece of technology that you find extremely useful.",
            bullets: [
                "What it is and when you acquired it",
                "How often you use it in your daily life",
                "Why it is so important and useful to you"
            ]
        },
        part3: [
            "How do you think Artificial Intelligence will impact jobs in the next ten years?",
            "Should schools teach children programming and digital skills from a young age?",
            "Are older generations able to adapt to rapid technological change as easily as young people?"
        ]
    },
    {
        id: 'cambridge_environment',
        category: '🌿 Environment & Nature',
        part1: [
            "Do you enjoy spending time in nature or outdoor parks?",
            "What weather do you prefer: sunny, rainy, or snowy?",
            "Are there any recycling programs in your neighborhood?",
            "What is your favorite season of the year?"
        ],
        part2: {
            title: "Describe a beautiful natural place or park you have visited.",
            bullets: [
                "Where it is located and how you discovered it",
                "What you saw and did while you were there",
                "Why you think this place is special or beautiful"
            ]
        },
        part3: [
            "What measures should governments take to combat global climate change?",
            "Do individual citizens have a responsibility to reduce their carbon footprint?",
            "How can international organizations encourage countries to protect endangered wildlife?"
        ]
    },
    {
        id: 'cambridge_education',
        category: '🎓 Education & Career',
        part1: [
            "What subject did you enjoy studying most at school?",
            "Do you prefer studying alone or in a study group?",
            "How important is learning foreign languages in your country?",
            "What are your future academic or career goals?"
        ],
        part2: {
            title: "Describe a teacher or mentor who influenced you significantly.",
            bullets: [
                "Who this person was and what subject they taught",
                "How they helped or inspired you",
                "Why they made such a lasting impression on your life"
            ]
        },
        part3: [
            "Is traditional university education still essential for modern career success?",
            "How has online learning changed the way students gain knowledge globally?",
            "What skills should schools prioritize to prepare students for the 21st century workplace?"
        ]
    },
    {
        id: 'cambridge_culture',
        category: '🎨 Culture & Traditions',
        part1: [
            "What traditional festivals are celebrated in your country?",
            "Do you enjoy cooking or eating traditional dishes?",
            "Have you ever attended a cultural performance or concert?",
            "How do young people in your country spend their free time?"
        ],
        part2: {
            title: "Describe an interesting traditional event or celebration in your culture.",
            bullets: [
                "What the celebration is and when it takes place",
                "What people usually do and eat during the event",
                "Why this tradition is significant to your community"
            ]
        },
        part3: [
            "Why is it important for societies to preserve their traditional customs and heritage?",
            "How does globalization affect local cultural identities worldwide?",
            "Should governments fund museums and historical landmarks using tax money?"
        ]
    }
];
