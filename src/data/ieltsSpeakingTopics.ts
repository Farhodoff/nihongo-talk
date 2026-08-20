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
    },
    {
        id: 'makkar_talkative_person',
        category: '🗣️ People & Communication',
        part1: [
            "Do you consider yourself an extroverted or quiet person?",
            "How do you usually communicate with your close friends: texting, calling, or in person?",
            "Is it easy for you to start a conversation with someone you just met?",
            "Do you think listening is as important as speaking in a conversation?"
        ],
        part2: {
            title: "Describe a person you know who likes to talk a lot.",
            bullets: [
                "Who this person is and how you know them",
                "What topics they usually like to talk about",
                "How you feel when you talk with this person",
                "And explain why you think they are so talkative"
            ]
        },
        part3: [
            "What kinds of jobs require strong communication and public speaking skills?",
            "Do you think children are generally more talkative than adults?",
            "How can someone become a better active listener in professional settings?"
        ]
    },
    {
        id: 'makkar_relaxing_place',
        category: '🧘 Relaxation & Wellbeing',
        part1: [
            "What do you usually do to unwind and relax after a busy day?",
            "Do you prefer relaxing at home or going outdoors into nature?",
            "How does listening to music help people alleviate mental stress?",
            "Do you think people today have less leisure time than in the past?"
        ],
        part2: {
            title: "Describe a peaceful place where you would like to go to relax.",
            bullets: [
                "Where this place is located and how you can get there",
                "What it looks like and what atmosphere it has",
                "What activities you would do while you are there",
                "And explain why this place would be so ideal for relaxation"
            ]
        },
        part3: [
            "Why is finding time to relax essential for maintaining mental and physical health?",
            "Do employers have a responsibility to ensure manageable working hours for their staff?",
            "How do green urban parks contribute to the well-being of city dwellers?"
        ]
    },
    {
        id: 'makkar_longterm_goal',
        category: '🎯 Goals & Ambitions',
        part1: [
            "Do you prefer setting short-term daily plans or long-term goals?",
            "How do you motivate yourself when working towards a challenging target?",
            "Have you achieved any important personal goals recently?",
            "Do you share your ambitions with family or keep them private?"
        ],
        part2: {
            title: "Describe a long-term goal you would like to achieve in the future.",
            bullets: [
                "What the goal is and when you first decided to pursue it",
                "What steps and preparation you need to take to achieve it",
                "What difficulties or obstacles you might encounter along the way",
                "And explain why achieving this goal is so meaningful to you"
            ]
        },
        part3: [
            "Why do some people give up on their ambitions before accomplishing them?",
            "How can parents support their children in setting realistic career aspirations?",
            "Is financial wealth a better indicator of success than personal fulfillment?"
        ]
    },
    {
        id: 'makkar_useful_website',
        category: '🌐 Digital Media & Web',
        part1: [
            "How much time do you spend browsing websites or online platforms each day?",
            "What kind of websites do you visit most often for study or entertainment?",
            "Do you prefer purchasing goods online or in physical retail stores?",
            "How do you verify whether information found online is credible?"
        ],
        part2: {
            title: "Describe a website that you find exceptionally useful.",
            bullets: [
                "What the website is and how you first discovered it",
                "What content or services it offers to users",
                "How often you visit it and for what specific purposes",
                "And explain why you consider this website so valuable"
            ]
        },
        part3: [
            "How has the internet revolutionized independent self-directed learning?",
            "What are the main risks of algorithm-driven social media feeds on young users?",
            "Will digital online platforms completely replace printed educational textbooks?"
        ]
    },
    {
        id: 'makkar_important_decision',
        category: '⚖️ Decisions & Choices',
        part1: [
            "Do you usually make decisions quickly or take a long time to think?",
            "Whose advice do you trust most when making a major life decision?",
            "Do you ever regret decisions you made in the past?",
            "What was the last minor decision you made today?"
        ],
        part2: {
            title: "Describe an important decision you made in your life.",
            bullets: [
                "What the decision was and when you had to make it",
                "What options or alternatives were available to you",
                "How you arrived at your final choice",
                "And explain how this decision impacted your life afterwards"
            ]
        },
        part3: [
            "Should teenagers be given complete autonomy in choosing their university majors?",
            "How can individuals avoid decision fatigue in our fast-paced modern world?",
            "What qualities make a leader effective at making tough organizational decisions under pressure?"
        ]
    },
    {
        id: 'makkar_learned_skill_elder',
        category: '💡 Skills & Mentorship',
        part1: [
            "What practical skills do you think every adult should master?",
            "Did you learn any useful practical skills from your grandparents or parents?",
            "Do you prefer learning new skills through video tutorials or hands-on practice?",
            "What new hobby or skill would you love to learn in the future?"
        ],
        part2: {
            title: "Describe a valuable skill that you learned from an older person.",
            bullets: [
                "What the skill was and who taught it to you",
                "How they explained and demonstrated it to you",
                "How difficult it was to learn and practice",
                "And explain why this skill has been so beneficial in your life"
            ]
        },
        part3: [
            "What traditional wisdom or life skills can older generations pass down to youth?",
            "Why is reciprocal mentoring (young teaching tech, elders teaching wisdom) valuable?",
            "How has the perception of aging and elder wisdom changed in industrialized societies?"
        ]
    }
];
