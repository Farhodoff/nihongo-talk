export interface ListeningQuestion {
    id: number;
    text: string;
    options?: string[]; // for multiple choice
    correctAnswer: string; // string representation for both fill-in and multiple choice
    type: 'choice' | 'fill';
    explanation: string;
}

export interface ListeningSection {
    sectionNumber: number;
    title: string;
    audioUrl: string;
    script: string;
    instruction: string;
    questions: ListeningQuestion[];
}

export interface ListeningExam {
    id: string;
    title: string;
    sections: ListeningSection[];
}

export const IELTS_LISTENING_EXAMS: ListeningExam[] = [
    {
        id: "cambridge-18-test-1",
        title: "IELTS Listening Academic Practice Test 1",
        sections: [
            {
                sectionNumber: 1,
                title: "Section 1: Customer Order Inquiry",
                audioUrl: "",
                script: "Clerk: Good morning, Office Supplies Depot. How can I help you today?\nCustomer: Hello, I would like to place an urgent order for our design firm.\nClerk: Certainly, sir. May I have your full name please?\nCustomer: Yes, it is Harry Jackson. That is spelled J-A-C-K-S-O-N.\nClerk: Thank you Mr. Jackson. And what is your direct contact number?\nCustomer: My direct number is 07200 453911.\nClerk: Great. When would you like the delivery delivered?\nCustomer: Well, Monday 14th June is too early for our site, and Friday 18th is too late. So could we agree on Wednesday, 16th June?\nClerk: Wednesday the 16th is booked. Thank you!",
                instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                questions: [
                    {
                        id: 1,
                        text: "Name of the customer: Harry ________",
                        correctAnswer: "Jackson",
                        type: "fill",
                        explanation: "The speaker spells out the name: J-A-C-K-S-O-N."
                    },
                    {
                        id: 2,
                        text: "Contact phone number: 07200 ________",
                        correctAnswer: "453911",
                        type: "fill",
                        explanation: "The customer states: 'My direct number is 07200 453911.'"
                    },
                    {
                        id: 3,
                        text: "Item delivery date requested:",
                        options: [
                            "Monday, 14th June",
                            "Wednesday, 16th June",
                            "Friday, 18th June"
                        ],
                        correctAnswer: "1", // Wednesday, 16th June (Index 1)
                        type: "choice",
                        explanation: "He mentions Monday is too early and Friday is too late, so they agree on Wednesday, 16th June."
                    }
                ]
            },
            {
                sectionNumber: 2,
                title: "Section 2: Local Community Museum Guide",
                audioUrl: "",
                script: "Guide: Welcome everybody to the St. Jude Community Museum. Before we start our exhibition walk, let me give you some background. The museum structure was completed in 1885 after five years of planning. We are proud that while adult admission is five dollars, entry remains completely free for school kids under twelve.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 4,
                        text: "When was the museum building originally constructed?",
                        options: [
                            "1840",
                            "1885",
                            "1910"
                        ],
                        correctAnswer: "1", // 1885 (Index 1)
                        type: "choice",
                        explanation: "The guide says: 'The museum structure was completed in 1885 after five years of planning starting in 1840.'"
                    },
                    {
                        id: 5,
                        text: "What is the entry price for school children under 12?",
                        correctAnswer: "Free",
                        type: "fill",
                        explanation: "The guide mentions: 'While adults pay $5, entry remains completely free for school kids under twelve.'"
                    }
                ]
            },
            {
                sectionNumber: 3,
                title: "Section 3: Academic Tutor Consultation on Biology Project",
                audioUrl: "",
                script: "Tutor: Good afternoon Sarah. Let's discuss your coastal ecosystem project.\nStudent: Thanks Professor. I decided to focus our primary field research on sea turtles conservation along the southern reef.\nTutor: Excellent topic. How many distinct species did you observe in the sanctuary?\nStudent: We recorded data on exactly four different species over the three weeks.",
                instruction: "Complete the Biology project overview notes below.",
                questions: [
                    {
                        id: 6,
                        text: "Main research subject: Sea ________ conservation",
                        correctAnswer: "turtles",
                        type: "fill",
                        explanation: "The student says they chose to focus on sea turtles because of their endangered status."
                    },
                    {
                        id: 7,
                        text: "Number of species observed during field research: ________",
                        correctAnswer: "4",
                        type: "fill",
                        explanation: "Tutor asks: 'How many species did you observe?' and the student replies: 'Exactly four.'"
                    }
                ]
            },
            {
                sectionNumber: 4,
                title: "Section 4: Lecture on the History of Urban Architecture",
                audioUrl: "",
                script: "Lecturer: In today's lecture, we examine the evolution of modern metropolitan centers. In the late 19th century, structural steel revolutionized skyscraper construction, allowing builders to construct tall towers safely. Additionally, early urban planners implemented grid systems primarily to facilitate rapid traffic flow and pedestrian mobility.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 8,
                        text: "Which material revolutionized skyscraper construction in the late 19th century?",
                        options: [
                            "Timber frames",
                            "Structural steel",
                            "Reinforced concrete"
                        ],
                        correctAnswer: "1", // Structural steel (Index 1)
                        type: "choice",
                        explanation: "The lecturer explains that structural steel allowed buildings to exceed 10 stories safely."
                    },
                    {
                        id: 9,
                        text: "Urban grids were primarily designed to facilitate ________.",
                        options: [
                            "Traffic flow",
                            "Land speculation",
                            "Rainwater collection"
                        ],
                        correctAnswer: "0", // Traffic flow (Index 0)
                        type: "choice",
                        explanation: "The lecturer mentions: 'Grid systems were primarily optimized for clean traffic flow and cart navigation.'"
                    }
                ]
            }
        ]
    }
];
