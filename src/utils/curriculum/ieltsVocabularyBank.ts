/**
 * IELTS Vocabulary & Grammar Bank
 * Band-based curated vocabulary and grammar for the algorithmic IELTS planner.
 * Each word has: word, meaning (Uzbek), example sentence, topic tag
 */

export interface IeltsVocabItem {
    word: string;
    meaning: string;
    example: string;
    topic?: string;
}

export interface IeltsGrammarItem {
    rule: string;
    explanation: string;
    example: string;
    band: number; // minimum band this targets
}

// ─── BAND 4-5 (Foundation) ───────────────────────────────────────────────────
export const IELTS_VOCAB_FOUNDATION: IeltsVocabItem[] = [
    { word: "environment", meaning: "atrof-muhit", example: "We must protect the environment from pollution.", topic: "environment" },
    { word: "pollution", meaning: "ifloslanish", example: "Air pollution is a major problem in big cities.", topic: "environment" },
    { word: "education", meaning: "ta'lim", example: "A good education helps people succeed in life.", topic: "education" },
    { word: "government", meaning: "hukumat", example: "The government should invest more in schools.", topic: "society" },
    { word: "technology", meaning: "texnologiya", example: "Technology has changed the way we communicate.", topic: "technology" },
    { word: "important", meaning: "muhim", example: "It is important to eat healthy food every day.", topic: "general" },
    { word: "problem", meaning: "muammo", example: "Unemployment is a serious problem in many countries.", topic: "society" },
    { word: "solution", meaning: "yechim", example: "Recycling is one solution to the waste problem.", topic: "environment" },
    { word: "community", meaning: "jamoa, mahalla", example: "A strong community makes a city safer.", topic: "society" },
    { word: "benefit", meaning: "foyda, afzallik", example: "Exercise has many benefits for your health.", topic: "health" },
    { word: "increase", meaning: "oshmoq, ko'paymoq", example: "The number of cars has increased over the years.", topic: "general" },
    { word: "decrease", meaning: "kamaymoq, pasaymoq", example: "Crime rates have decreased in recent years.", topic: "society" },
    { word: "develop", meaning: "rivojlanmoq", example: "Countries need to develop better public transport.", topic: "society" },
    { word: "economy", meaning: "iqtisodiyot", example: "A strong economy helps reduce poverty.", topic: "economics" },
    { word: "society", meaning: "jamiyat", example: "Society must deal with the effects of climate change.", topic: "society" },
    { word: "health", meaning: "sog'liq", example: "Good health is more important than wealth.", topic: "health" },
    { word: "research", meaning: "tadqiqot", example: "Research shows that exercise improves mood.", topic: "science" },
    { word: "global", meaning: "global, butun dunyo bo'yicha", example: "Climate change is a global problem.", topic: "environment" },
    { word: "reduce", meaning: "kamaytirmoq", example: "We should reduce our use of plastic.", topic: "environment" },
    { word: "affect", meaning: "ta'sir qilmoq", example: "Stress can negatively affect your performance.", topic: "health" },
    { word: "cause", meaning: "sabab bo'lmoq / sabab", example: "Deforestation causes climate change.", topic: "environment" },
    { word: "provide", meaning: "ta'minlamoq, bermoq", example: "The government must provide free healthcare.", topic: "society" },
    { word: "support", meaning: "qo'llab-quvvatlamoq", example: "Parents should support their children's education.", topic: "education" },
    { word: "access", meaning: "foydalanish imkoni, kirish", example: "Everyone should have access to clean water.", topic: "society" },
    { word: "challenge", meaning: "qiyinchilik, sinov", example: "Poverty is one of the greatest challenges today.", topic: "society" },
    { word: "impact", meaning: "ta'sir", example: "Social media has a big impact on young people.", topic: "technology" },
    { word: "improve", meaning: "yaxshilamoq", example: "Regular reading will improve your vocabulary.", topic: "education" },
    { word: "achieve", meaning: "erishmoq", example: "Hard work helps you achieve your goals.", topic: "general" },
    { word: "opportunity", meaning: "imkoniyat", example: "Higher education offers better job opportunities.", topic: "education" },
    { word: "traditional", meaning: "an'anaviy", example: "Many people prefer traditional ways of living.", topic: "culture" },
];

// ─── BAND 5.5-6.5 (Intermediate) ─────────────────────────────────────────────
export const IELTS_VOCAB_INTERMEDIATE: IeltsVocabItem[] = [
    { word: "significant", meaning: "muhim, sezilarli", example: "There has been a significant increase in obesity rates.", topic: "health" },
    { word: "contribute", meaning: "hissa qo'shmoq", example: "Everyone can contribute to reducing pollution.", topic: "environment" },
    { word: "consequently", meaning: "natijada, shuning uchun", example: "He missed the deadline; consequently, he lost the contract.", topic: "general" },
    { word: "nevertheless", meaning: "shunga qaramay", example: "The task was difficult; nevertheless, she completed it.", topic: "general" },
    { word: "furthermore", meaning: "bundan tashqari", example: "Furthermore, the government should invest in renewable energy.", topic: "general" },
    { word: "implement", meaning: "amalga oshirmoq", example: "The school plans to implement a new grading system.", topic: "education" },
    { word: "sustainable", meaning: "barqaror, uzoq muddatli", example: "Sustainable energy sources include solar and wind power.", topic: "environment" },
    { word: "inequality", meaning: "tengsizlik", example: "Income inequality is growing in many nations.", topic: "society" },
    { word: "infrastructure", meaning: "infratuzilma", example: "Poor infrastructure slows economic development.", topic: "economics" },
    { word: "controversy", meaning: "tortishuv, bahsli masala", example: "The new policy sparked controversy among citizens.", topic: "society" },
    { word: "perspective", meaning: "nuqtai nazar", example: "It is important to consider different perspectives.", topic: "general" },
    { word: "phenomenon", meaning: "hodisa, fenomen", example: "Social media addiction is a modern phenomenon.", topic: "technology" },
    { word: "legislation", meaning: "qonun hujjatlari", example: "Strict legislation is needed to protect the environment.", topic: "society" },
    { word: "alternative", meaning: "muqobil", example: "Cycling is an alternative to driving.", topic: "environment" },
    { word: "efficient", meaning: "samarali", example: "Electric cars are more efficient than petrol cars.", topic: "technology" },
    { word: "adequate", meaning: "yetarli, to'liq", example: "Students need adequate time to prepare for exams.", topic: "education" },
    { word: "restrict", meaning: "cheklash", example: "The government wants to restrict car usage in city centres.", topic: "society" },
    { word: "subsidize", meaning: "subsidiya bermoq, dotatsiya", example: "The state should subsidize public transport.", topic: "economics" },
    { word: "awareness", meaning: "xabardorlik, ong", example: "Raising awareness about health issues is vital.", topic: "health" },
    { word: "urbanization", meaning: "shaharlanish", example: "Rapid urbanization puts pressure on housing.", topic: "society" },
    { word: "consumption", meaning: "iste'mol", example: "Reducing energy consumption helps fight climate change.", topic: "environment" },
    { word: "disparity", meaning: "farq, nomutanosiblik", example: "There is a large disparity between rich and poor countries.", topic: "economics" },
    { word: "incentive", meaning: "rag'bat, undov", example: "Tax breaks can serve as an incentive to go green.", topic: "economics" },
    { word: "deteriorate", meaning: "yomonlashmoq, pasaymoq", example: "Air quality continues to deteriorate in industrial areas.", topic: "environment" },
    { word: "mandatory", meaning: "majburiy", example: "Wearing a seatbelt is mandatory by law.", topic: "society" },
    { word: "collaborative", meaning: "hamkorlikdagi", example: "A collaborative approach is needed to solve global warming.", topic: "general" },
    { word: "inevitable", meaning: "muqarrar", example: "Technological progress is inevitable in the modern world.", topic: "technology" },
    { word: "allocate", meaning: "ajratmoq, taqsimlash", example: "Governments must allocate more funds to education.", topic: "economics" },
    { word: "regulate", meaning: "tartibga solmoq", example: "The food industry should be regulated more strictly.", topic: "health" },
    { word: "innovation", meaning: "yangilik, ixtiro", example: "Innovation in medicine has saved millions of lives.", topic: "science" },
];

// ─── BAND 7-9 (Advanced / Academic) ─────────────────────────────────────────
export const IELTS_VOCAB_ADVANCED: IeltsVocabItem[] = [
    { word: "ubiquitous", meaning: "hamma joyda uchraydigan", example: "Smartphones have become ubiquitous in modern society.", topic: "technology" },
    { word: "detrimental", meaning: "zararli, salbiy ta'sir etuvchi", example: "Excessive screen time has a detrimental effect on children's eyesight.", topic: "health" },
    { word: "exacerbate", meaning: "og'irlashtirmoq, yomonlashtirmoq", example: "Poor diet can exacerbate the risk of cardiovascular disease.", topic: "health" },
    { word: "mitigate", meaning: "yumshatmoq, kamaytirmoq", example: "Green belts around cities can mitigate the urban heat island effect.", topic: "environment" },
    { word: "paramount", meaning: "eng muhim, ustuvor", example: "The safety of passengers must remain paramount in aviation.", topic: "general" },
    { word: "unprecedented", meaning: "misli ko'rilmagan", example: "The pandemic caused unprecedented disruption to the global economy.", topic: "economics" },
    { word: "perpetuate", meaning: "davom ettirmoq, uzaytirmoq", example: "Poverty can perpetuate social inequality across generations.", topic: "society" },
    { word: "proliferate", meaning: "tez ko'paymoq, tarqalmoq", example: "Fake news has proliferated with the rise of social media.", topic: "technology" },
    { word: "homogeneous", meaning: "bir xil tarkibli, bir jinsli", example: "A homogeneous culture may lack the creativity of diverse societies.", topic: "culture" },
    { word: "circumvent", meaning: "chetlab o'tmoq, aylanib o'tmoq", example: "Some companies try to circumvent environmental regulations.", topic: "society" },
    { word: "arduous", meaning: "mashaqqatli, qiyin", example: "The journey to sustainability is arduous but necessary.", topic: "environment" },
    { word: "commensurate", meaning: "mos, mutanosib", example: "Salary should be commensurate with the level of experience.", topic: "economics" },
    { word: "efficacious", meaning: "samarali (ayniqsa tibbiyotda)", example: "The vaccine proved highly efficacious against new variants.", topic: "health" },
    { word: "ameliorate", meaning: "yaxshilamoq, tuzatmoq", example: "Investment in education can ameliorate social inequality.", topic: "education" },
    { word: "nefarious", meaning: "yaramas, jinoyatkorona", example: "Nefarious corporate practices led to the financial crisis.", topic: "economics" },
    { word: "ostensibly", meaning: "rasmiy ravishda, ko'rinadigan", example: "The policy, ostensibly aimed at reducing crime, targeted minorities.", topic: "society" },
    { word: "inextricably", meaning: "ajralmas tarzda, uzviy", example: "Economic growth is inextricably linked to resource consumption.", topic: "economics" },
    { word: "predicated", meaning: "asoslangan, negizlangan", example: "Her argument is predicated on the assumption that technology is neutral.", topic: "general" },
    { word: "tenuous", meaning: "zaif, ishonchsiz (argument)", example: "The connection between the two events remains tenuous at best.", topic: "general" },
    { word: "propitious", meaning: "qulay, yaxshi (sharoit)", example: "The economic climate is not propitious for new investments.", topic: "economics" },
    { word: "delineate", meaning: "aniq belgilamoq, tasvirlamoq", example: "The report clearly delineates the roles of each department.", topic: "general" },
    { word: "hegemony", meaning: "hukmronlik, g'alaba", example: "Western cultural hegemony has influenced global media.", topic: "culture" },
    { word: "equitable", meaning: "adolatli, teng huquqli", example: "An equitable distribution of resources is key to social stability.", topic: "society" },
    { word: "catalyze", meaning: "tezlashtirmoq, yordam bermoq", example: "The internet catalyzed a revolution in how we share information.", topic: "technology" },
    { word: "burgeoning", meaning: "tez o'sayotgan, rivojlanayotgan", example: "The burgeoning tech industry has created millions of new jobs.", topic: "technology" },
    { word: "polarize", meaning: "ikki qarama-qarshi tomonga bo'lmoq", example: "The immigration debate has polarized public opinion.", topic: "society" },
    { word: "substantiate", meaning: "isbotlamoq, dalil keltirmoq", example: "You must substantiate your claims with concrete evidence.", topic: "general" },
    { word: "cogent", meaning: "ishonchli, mantiqiy mustahkam", example: "She presented a cogent argument for educational reform.", topic: "education" },
    { word: "intractable", meaning: "hal qilib bo'lmas, qiyin", example: "Poverty is one of the most intractable problems of our time.", topic: "society" },
    { word: "nuanced", meaning: "nozik, ko'p qirrali", example: "A nuanced understanding of culture is essential for diplomacy.", topic: "culture" },
];

// ─── GRAMMAR RULES organized by Band target ─────────────────────────────────
export const IELTS_GRAMMAR_BANK: IeltsGrammarItem[] = [
    // Band 4-5 level grammar
    {
        rule: "Present Simple vs. Present Continuous",
        explanation: "Present Simple - odatiy harakatlar uchun (every day, usually). Present Continuous - hozirgi paytda bo'layotgan harakatlar uchun (right now, at the moment).",
        example: "She studies English every day. (Simple) / She is studying English right now. (Continuous)",
        band: 4
    },
    {
        rule: "Countable & Uncountable Nouns",
        explanation: "Sanaladigan otlar (a book, books) va sanalmaydigan otlar (water, information) farqi. Sanalmaydigan otlar bilan 'much', sanaladigan otlar bilan 'many' ishlatiladi.",
        example: "There is too much noise in the city. / There are many cars on the road.",
        band: 4
    },
    {
        rule: "Subject-Verb Agreement",
        explanation: "Ega va kesim sondagi mosligi: birlik ega - birlik kesim, ko'plik ega - ko'plik kesim. 'The number of...' - birlik; 'A number of...' - ko'plik.",
        example: "The number of students is increasing. / A number of students are absent today.",
        band: 4
    },
    {
        rule: "Conjunctions: and, but, so, because, although",
        explanation: "Bog'lovchi so'zlar: 'and' (va), 'but' (lekin), 'so' (shuning uchun), 'because' (chunki), 'although' (garchi).",
        example: "He studied hard, but he failed the exam. / Although it was expensive, she bought the car.",
        band: 4
    },
    {
        rule: "Articles: a / an / the",
        explanation: "'A/an' - birinchi marta eslatilganda yoki noaniq. 'The' - avval aytilgan yoki hammaga ma'lum narsa uchun. Ba'zi otlar bilan article ishlatilmaydi.",
        example: "I saw a dog in the park. The dog was barking loudly.",
        band: 4
    },
    // Band 5.5-6.5 grammar
    {
        rule: "Passive Voice (Task 1 & Academic Writing)",
        explanation: "Majhul nisbat jarayon, ilmiy yoki rasmiy yozuvlarda keng qo'llaniladi. Tuzilishi: be + V3. IELTS Task 1 grafik tavsifida zarur.",
        example: "The data was collected over a period of ten years. / Oil is extracted and then refined in factories.",
        band: 5
    },
    {
        rule: "Relative Clauses (who, which, where, that)",
        explanation: "Ergashgan aniqlovchi gaplar: who (odam), which (narsa), where (joy), that (ikkalasi uchun). Ajratish vergulga: belgilash = vergulsiz; qo'shimcha ma'lumot = vergul bilan.",
        example: "The scientist who discovered penicillin was Alexander Fleming. / London, which is the capital of the UK, has a population of 9 million.",
        band: 5
    },
    {
        rule: "Conditional Sentences (Type 1, 2, 3)",
        explanation: "Type 1: Haqiqiy shart (if + present, will). Type 2: Taxminiy (if + past, would). Type 3: O'tmish taxmin (if + past perfect, would have).",
        example: "Type 1: If we reduce emissions, global warming will slow. / Type 2: If governments invested more, poverty would decrease. / Type 3: If they had acted sooner, the damage could have been prevented.",
        band: 5
    },
    {
        rule: "Comparison Structures (as...as, more...than, the most)",
        explanation: "Taqqoslash: as + adj + as (teng), more + adj + than (ko'proq), the most + adj (eng). IELTS Task 1 da grafiklar taqqoslashda zarur.",
        example: "The unemployment rate in 2020 was as high as it was in 2008. / The population grew more rapidly in Asia than in Europe.",
        band: 5
    },
    {
        rule: "Linkers of Cause & Effect",
        explanation: "Sabab-natija bog'lovchilari: because of / due to (sababli) + noun; because / since / as (chunki) + clause; therefore / consequently / as a result (natijada) - yangi gapni boshlash.",
        example: "Due to rapid urbanization, traffic congestion has worsened. / Public transport improved; consequently, car use dropped by 20%.",
        band: 5
    },
    // Band 7+ grammar
    {
        rule: "Inversion for Emphasis",
        explanation: "Inversiya - kesimni egadan oldin qo'yish orqali uslubiy ta'kid. 'Not only...but also', 'Rarely...', 'Under no circumstances...', 'Never have I...'",
        example: "Not only does social media affect mental health, but it also distorts reality. / Rarely has such a significant discovery been made.",
        band: 7
    },
    {
        rule: "Cleft Sentences (It is... that / What...is)",
        explanation: "Yorib ajratish gaplari - ma'lum qismga e'tiborni qaratish. 'It is + focus + that...' yoki 'What...is/are + noun'.",
        example: "It is the lack of funding that prevents schools from improving. / What governments need to prioritize is education.",
        band: 7
    },
    {
        rule: "Mixed Conditionals",
        explanation: "Aralash shartli gaplar: o'tmish sabab + hozirgi natija. If + past perfect, would + base verb. Real hayot holatlarini murakkab ifodalash uchun.",
        example: "If she had chosen medicine, she would be a doctor now. / If they had invested in renewables, the country would not be facing an energy crisis.",
        band: 7
    },
    {
        rule: "Nominalization (turning verbs into nouns)",
        explanation: "Fe'llarni otga aylantirish - akademik va rasmiy uslubni ko'taradi. 'decide → decision', 'develop → development', 'investigate → investigation'.",
        example: "Instead of: 'The government decided to invest more.' → Use: 'The government's decision to increase investment has been widely praised.'",
        band: 7
    },
    {
        rule: "Hedging Language (Academic Caution)",
        explanation: "Akademik ehtiyotkorlik ifodasi: 'it appears that', 'this may suggest', 'evidence indicates', 'it is likely that'. IELTS Task 2 Band 7+ uchun zarur.",
        example: "It appears that excessive smartphone use may be linked to reduced academic performance. / The data suggests a correlation, though further research is needed.",
        band: 7
    },
    {
        rule: "Parallel Structures in Lists",
        explanation: "Bir qator elementlar grammatik jihatdan bir xil shaklda bo'lishi kerak. Uyg'unlashtirilmagan ro'yxat xato hisoblanadi.",
        example: "Correct: Education improves literacy, reduces poverty, and increases social mobility. / Incorrect: Education improves literacy, reduces poverty, and social mobility goes up.",
        band: 6
    },
    {
        rule: "Abstract Noun Phrases for Task 2 Arguments",
        explanation: "Mavhum ot iboralari yordamida fikrni kengaytirish: 'a growing concern', 'a matter of considerable importance', 'an alarming trend', 'widespread acceptance'.",
        example: "There is a growing concern that artificial intelligence may displace millions of workers in the coming decades.",
        band: 6
    },
];

// ─── IELTS Task vocabulary by topic (for Writing/Speaking tasks) ─────────────
export const IELTS_TOPIC_COLLOCATIONS: Record<string, string[]> = {
    "environment": [
        "carbon footprint", "greenhouse gases", "renewable energy", "climate change",
        "biodiversity loss", "ecosystem damage", "environmental degradation", "sustainable development",
        "fossil fuels", "deforestation"
    ],
    "education": [
        "academic achievement", "critical thinking skills", "lifelong learning", "distance education",
        "tuition fees", "vocational training", "extracurricular activities", "educational attainment",
        "mixed-ability classes", "standardized testing"
    ],
    "health": [
        "sedentary lifestyle", "mental wellbeing", "preventive medicine", "chronic disease",
        "healthcare system", "nutritional awareness", "physical activity", "life expectancy",
        "obesity epidemic", "health inequality"
    ],
    "technology": [
        "artificial intelligence", "digital literacy", "data privacy", "social media platforms",
        "e-commerce growth", "automation of jobs", "cybersecurity threats", "technological advancement",
        "internet of things", "screen addiction"
    ],
    "society": [
        "social cohesion", "income inequality", "aging population", "rural-urban migration",
        "gender equality", "cultural diversity", "law enforcement", "social welfare",
        "crime prevention", "political participation"
    ]
};

/**
 * Get vocabulary list by band level.
 * Band 0-5 → Foundation, Band 5-6.5 → Intermediate, Band 6.5+ → Advanced
 */
export function getVocabByBand(currentBand: number, targetBand: number): IeltsVocabItem[] {
    if (targetBand >= 7.0 || currentBand >= 6.5) return IELTS_VOCAB_ADVANCED;
    if (targetBand >= 6.0 || currentBand >= 5.0) return IELTS_VOCAB_INTERMEDIATE;
    return IELTS_VOCAB_FOUNDATION;
}

/**
 * Get grammar items by band level.
 */
export function getGrammarByBand(currentBand: number, targetBand: number): IeltsGrammarItem[] {
    const targetMinBand = Math.min(currentBand, targetBand - 0.5);
    if (targetMinBand >= 6.5) return IELTS_GRAMMAR_BANK.filter(g => g.band >= 5);
    if (targetMinBand >= 5.0) return IELTS_GRAMMAR_BANK.filter(g => g.band >= 4 && g.band <= 7);
    return IELTS_GRAMMAR_BANK.filter(g => g.band <= 5);
}
