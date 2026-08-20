export interface ReadingQuestion {
    id: number;
    text: string;
    options?: string[];
    correctAnswer: string;
    type: 'choice' | 'fill';
    explanation: string;
}

export interface ReadingPassage {
    id: string;
    title: string;
    academicLevel: 'Academic 1' | 'Academic 2' | 'Academic 3';
    text: string;
    questions: ReadingQuestion[];
}

export const IELTS_READING_EXAMS: ReadingPassage[] = [
    {
        id: "cambridge_reading_energy_ai",
        title: "The Future of Renewable Energy & Artificial Intelligence",
        academicLevel: "Academic 1",
        text: `As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.

To mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.

Furthermore, decentralized smart microgrids empowered by deep learning can autonomously redirect surplus energy from residential solar panels to commercial industrial zones during peak consumption hours. This symbiotic integration of green technology and predictive analytics marks a revolutionary milestone in humanity's transition toward global carbon neutrality.`,
        questions: [
            {
                id: 1,
                text: "What is highlighted as a primary challenge for solar and wind energy?",
                options: [
                    "Exorbitant installation expenses",
                    "Intermittent nature and dependence on weather patterns",
                    "A shortage of trained electrical engineers",
                    "High greenhouse gas emissions"
                ],
                correctAnswer: "1",
                type: "choice",
                explanation: "The passage notes: 'However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles.'"
            },
            {
                id: 2,
                text: "How far in advance can predictive AI models forecast solar irradiance?",
                options: [
                    "Up to 12 hours",
                    "Up to 24 hours",
                    "Up to 48 hours",
                    "Up to one week"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "The text states: 'Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance.'"
            },
            {
                id: 3,
                text: "By what proportion can predictive analytics reduce power plant operational overhead?",
                options: [
                    "Up to 15%",
                    "Up to 25%",
                    "Up to 35%",
                    "Up to 50%"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "The text confirms: 'reducing operational overhead by up to 35%.'"
            },
            {
                id: 4,
                text: "Decentralized microgrids can autonomously redirect surplus energy during _______ hours.",
                correctAnswer: "peak consumption",
                type: "fill",
                explanation: "Paragraph 3 explicitly mentions: 'redirect surplus energy... during peak consumption hours.'"
            }
        ]
    },
    {
        id: "cambridge_reading_urban_architecture",
        title: "Biophilic Urbanism: Designing Nature-Centric Cities",
        academicLevel: "Academic 2",
        text: `In the twenty-first century, rapid urban migration has concentrated over half of the global population in concrete metropolises. While urban density enhances economic productivity and logistical efficiency, it has simultaneously contributed to sensory deprivation, elevated cortisol levels, and escalating mental fatigue among inhabitants. In response to this psychological and ecological crisis, contemporary architects and urban planners have spearheaded a paradigm shift known as biophilic urbanism.

Biophilic design posits that human beings possess an innate biological affinity for the natural world—an evolutionary legacy termed the 'biophilia hypothesis' by biologist Edward O. Wilson in 1984. Rather than treating nature as an ornamental afterthought, biophilic architecture systematically integrates living vegetation, natural light, acoustic water features, and organic fractal geometries into the core fabric of buildings and public spaces.

Empirical investigations across hospital recovery wards, university campuses, and corporate headquarters have demonstrated dramatic benefits. Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods. Similarly, office employees in biophilically enhanced environments display a 15% increase in cognitive stamina and a measurable decline in absenteeism. As urban centers confront escalating temperatures from the urban heat island effect, vegetated facades and vertical forests also serve as vital thermal buffers, decreasing building cooling demands by up to 30%.`,
        questions: [
            {
                id: 1,
                text: "What evolutionary concept did Edward O. Wilson introduce in 1984?",
                options: [
                    "The biophilia hypothesis",
                    "Urban sensory deprivation",
                    "The thermal buffer theory",
                    "Fractal architecture"
                ],
                correctAnswer: "0",
                type: "choice",
                explanation: "Paragraph 2 states: 'an evolutionary legacy termed the biophilia hypothesis by biologist Edward O. Wilson in 1984.'"
            },
            {
                id: 2,
                text: "According to empirical studies, hospital patients with views of nature experienced _______ shorter recovery times.",
                options: [
                    "10%",
                    "15%",
                    "20%",
                    "30%"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "Paragraph 3 states: 'Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods.'"
            },
            {
                id: 3,
                text: "Vertical forests and vegetated facades reduce building cooling requirements by up to _______.",
                options: [
                    "15%",
                    "20%",
                    "25%",
                    "30%"
                ],
                correctAnswer: "3",
                type: "choice",
                explanation: "Paragraph 3 states: 'decreasing building cooling demands by up to 30%.'"
            }
        ]
    }
];
