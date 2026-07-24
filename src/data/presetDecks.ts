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
        title: '🌱 A1-A2 Starter Vocabulary (245 Kartochka)',
        description: 'Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so\'zlar.',
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        isPremiumOnly: false,
        cards: [
                {
                                "front": "Accept",
                                "back": "Qabul qilmoq, rozi bo'lmoq",
                                "phonetic": "/əkˈsept/",
                                "example": "She decided to accept the job offer in Tashkent."
                },
                {
                                "front": "Achieve",
                                "back": "Erishmoq, qo'lga kiritmoq",
                                "phonetic": "/əˈtʃiːv/",
                                "example": "She worked hard to achieve her target IELTS score."
                },
                {
                                "front": "Allow",
                                "back": "Ruxsat bermoq, yo'l qo'ymoq",
                                "phonetic": "/əˈlaʊ/",
                                "example": "The library allows students to borrow five books at a time."
                },
                {
                                "front": "Appear",
                                "back": "Ko'rinmoq, paydo bo'lmoq",
                                "phonetic": "/əˈpɪə/",
                                "example": "A rainbow appeared in the sky after the rain."
                },
                {
                                "front": "Apply",
                                "back": "Hujjat topshirmoq, qo'llamoq",
                                "phonetic": "/əˈplaɪ/",
                                "example": "I plan to apply for a university scholarship next month."
                },
                {
                                "front": "Arrange",
                                "back": "Uushtirmoq, tartibga solmoq",
                                "phonetic": "/əˈreɪndʒ/",
                                "example": "We need to arrange a meeting with the teacher tomorrow."
                },
                {
                                "front": "Arrive",
                                "back": "Yetib kelmoq, kelmoq",
                                "phonetic": "/əˈraɪv/",
                                "example": "The train will arrive at the station at six o'clock."
                },
                {
                                "front": "Avoid",
                                "back": "Qochmoq, saqlanmoq",
                                "phonetic": "/əˈvɔɪd/",
                                "example": "You should avoid eating unhealthy fast food every day."
                },
                {
                                "front": "Become",
                                "back": "Bo'lmoq, aylanmoq",
                                "phonetic": "/bɪˈkʌm/",
                                "example": "He worked hard and became a successful software engineer."
                },
                {
                                "front": "Believe",
                                "back": "Ishoqmoq, ishonch bildirmoq",
                                "phonetic": "/bɪˈliːv/",
                                "example": "I believe that consistent practice is key to success."
                },
                {
                                "front": "Borrow",
                                "back": "Qarzga olmoq (vaqtinchalik)",
                                "phonetic": "/ˈbɒr.əʊ/",
                                "example": "Can I borrow your English dictionary for ten minutes?"
                },
                {
                                "front": "Celebrate",
                                "back": "Nishonlamoq, bayram qilmoq",
                                "phonetic": "/ˈsel.ə.breɪt/",
                                "example": "My family gathers to celebrate Navruz every spring."
                },
                {
                                "front": "Compare",
                                "back": "Taqqoslamoq, solishtirmoq",
                                "phonetic": "/kəmˈpeə/",
                                "example": "Compare your answers with a partner to find mistakes."
                },
                {
                                "front": "Complain",
                                "back": "Shikoyat qilmoq, norozi bo'lmoq",
                                "phonetic": "/kəmˈpleɪn/",
                                "example": "Customers complain when the internet service is slow."
                },
                {
                                "front": "Confirm",
                                "back": "Tasdiqlamoq, aniqlik kiritmoq",
                                "phonetic": "/kənˈfɜːm/",
                                "example": "Please call the hotel to confirm your room reservation."
                },
                {
                                "front": "Continue",
                                "back": "Davom ettirmoq, to'xtamaslik",
                                "phonetic": "/kənˈtɪn.juː/",
                                "example": "We will continue our lesson after a short break."
                },
                {
                                "front": "Create",
                                "back": "Yaratmoq, bino qilmoq",
                                "phonetic": "/kriˈeɪt/",
                                "example": "Designers create innovative solutions for modern problems."
                },
                {
                                "front": "Decide",
                                "back": "Qaror qilmoq, bir toxtamga kelmoq",
                                "phonetic": "/dɪˈsaɪd/",
                                "example": "I must decide which subject to study first today."
                },
                {
                                "front": "Describe",
                                "back": "Tasvirlamoq, ta'riflamoq",
                                "phonetic": "/dɪˈskraɪb/",
                                "example": "Can you describe your hometown in three sentences?"
                },
                {
                                "front": "Destroy",
                                "back": "Vayron qilmoq, yo'q qilmoq",
                                "phonetic": "/dɪˈstrɔɪ/",
                                "example": "Heavy storms can destroy old wooden buildings."
                },
                {
                                "front": "Discover",
                                "back": "Kashf etmoq, topmoq",
                                "phonetic": "/dɪˈskʌv.ə/",
                                "example": "Scientists discover new plant species in tropical forests."
                },
                {
                                "front": "Discuss",
                                "back": "Muhokama qilmoq, maslahatlashmoq",
                                "phonetic": "/dɪˈskʌs/",
                                "example": "Let's discuss the project steps during lunch."
                },
                {
                                "front": "Encourage",
                                "back": "Rag'batlantirmoq, ruhlantirmoq",
                                "phonetic": "/ɪnˈkʌr.ɪdʒ/",
                                "example": "Teachers encourage students to ask creative questions."
                },
                {
                                "front": "Explain",
                                "back": "Tushuntirmoq, izohlamoq",
                                "phonetic": "/ɪkˈspleɪn/",
                                "example": "The tutor explained the grammar rule very clearly."
                },
                {
                                "front": "Improve",
                                "back": "Rivojlantirmoq, yaxshilamoq",
                                "phonetic": "/ɪmˈpruːv/",
                                "example": "Daily reading will improve your English vocabulary."
                },
                {
                                "front": "Include",
                                "back": "O'z ichiga olmoq, kiritmoq",
                                "phonetic": "/ɪnˈkluːd/",
                                "example": "The course fee includes all textbooks and study materials."
                },
                {
                                "front": "Increase",
                                "back": "Oshirmoq, ko'paytirmoq",
                                "phonetic": "/ɪnˈkriːs/",
                                "example": "The company plans to increase production next year."
                },
                {
                                "front": "Inform",
                                "back": "Xabardor qilmoq, bildirmoq",
                                "phonetic": "/ɪnˈfɔːm/",
                                "example": "Please inform us if your address changes."
                },
                {
                                "front": "Invite",
                                "back": "Taklif qilmoq, chaqirmoq",
                                "phonetic": "/ɪnˈvaɪt/",
                                "example": "They invited all their relatives to the wedding."
                },
                {
                                "front": "Manage",
                                "back": "Boshqarmoq, uddalamoq",
                                "phonetic": "/ˈmæn.ɪdʒ/",
                                "example": "She managed to finish the assignment before midnight."
                },
                {
                                "front": "Notice",
                                "back": "Payqamoq, sezib qolmoq",
                                "phonetic": "/ˈnəʊ.tɪs/",
                                "example": "Did you notice any change in his behavior today?"
                },
                {
                                "front": "Obtain",
                                "back": "Qo'lga kiritmoq, olmoq",
                                "phonetic": "/əbˈteɪn/",
                                "example": "You need to obtain a visa before traveling abroad."
                },
                {
                                "front": "Offer",
                                "back": "Taklif etmoq, taqdim qilmoq",
                                "phonetic": "/ˈɒf.ə/",
                                "example": "The company offered him a well-paid manager position."
                },
                {
                                "front": "Perform",
                                "back": "Bajarmoq, ijro etmoq",
                                "phonetic": "/pəˈfɔːm/",
                                "example": "Students perform speaking tests in pairs."
                },
                {
                                "front": "Prepare",
                                "back": "Tayyorgarlik ko'rmoq",
                                "phonetic": "/prɪˈpeə/",
                                "example": "I prepare for my IELTS examination every evening."
                },
                {
                                "front": "Prevent",
                                "back": "Oldini olmoq, yo'l qo'ymaslik",
                                "phonetic": "/prɪˈvent/",
                                "example": "Regular checkups help prevent health complications."
                },
                {
                                "front": "Protect",
                                "back": "Himoya qilmoq, asramoq",
                                "phonetic": "/prəˈtekt/",
                                "example": "We must protect our environment from toxic waste."
                },
                {
                                "front": "Provide",
                                "back": "Ta'minlamoq, berish",
                                "phonetic": "/prəˈvaɪd/",
                                "example": "Schools provide students with modern digital tools."
                },
                {
                                "front": "Receive",
                                "back": "Qabul qilib olmoq, olmoq",
                                "phonetic": "/rɪˈsiːv/",
                                "example": "I received an official acceptance letter this morning."
                },
                {
                                "front": "Recommend",
                                "back": "Tavsiya qilmoq, maslahat bermoq",
                                "phonetic": "/ˌrek.əˈmend/",
                                "example": "Doctors recommend sleeping at least eight hours a night."
                },
                {
                                "front": "Reduce",
                                "back": "Kamaytirmoq, qisqartirmoq",
                                "phonetic": "/rɪˈdjuːs/",
                                "example": "Recycling helps reduce pollution in big cities."
                },
                {
                                "front": "Refuse",
                                "back": "Rad etmoq, ko'nmaslik",
                                "phonetic": "/rɪˈfjuːz/",
                                "example": "He refused to sign the contract without reading it."
                },
                {
                                "front": "Remember",
                                "back": "Eslamoq, yodda tutmoq",
                                "phonetic": "/rɪˈmem.bə/",
                                "example": "Always remember to save your work before closing the window."
                },
                {
                                "front": "Remove",
                                "back": "Olib tashlamoq, yo'qotmoq",
                                "phonetic": "/rɪˈmuːv/",
                                "example": "Please remove your shoes before entering the room."
                },
                {
                                "front": "Repair",
                                "back": "Tuzatmoq, ta'mirlamoq",
                                "phonetic": "/rɪˈpeə/",
                                "example": "The mechanic will repair the car engine by afternoon."
                },
                {
                                "front": "Replace",
                                "back": "Almashtirmoq, o'rnini bosmoq",
                                "phonetic": "/rɪˈpleɪs/",
                                "example": "We need to replace the battery in the remote control."
                },
                {
                                "front": "Require",
                                "back": "Talab qilmoq, ehtiyoj sezmoq",
                                "phonetic": "/rɪˈkwaɪə/",
                                "example": "Passing the examination requires dedication and focus."
                },
                {
                                "front": "Search",
                                "back": "Qidirmoq, izlamoq",
                                "phonetic": "/sɜːtʃ/",
                                "example": "I spent an hour searching for my missing keys."
                },
                {
                                "front": "Suggest",
                                "back": "Taklif bildirmoq, maslahat moq",
                                "phonetic": "/səˈdʒest/",
                                "example": "I suggest revising new words before going to bed."
                },
                {
                                "front": "Support",
                                "back": "Qo'llab-quvvatlamoq",
                                "phonetic": "/səˈpɔːt/",
                                "example": "My family always supports my educational goals."
                },
                {
                                "front": "Travel",
                                "back": "Sayohat qilmoq, yurmoq",
                                "phonetic": "/ˈtræv.əl/",
                                "example": "Many young people love to travel across Central Asia."
                },
                {
                                "front": "Understand",
                                "back": "Tushunmoq, uqmoq",
                                "phonetic": "/ˌʌn.dəˈstænd/",
                                "example": "Do you understand the main idea of this listening track?"
                },
                {
                                "front": "Ability",
                                "back": "Qobiliyat, iqtidor",
                                "phonetic": "/əˈbɪl.ə.ti/",
                                "example": "His ability to solve complex math problems is impressive."
                },
                {
                                "front": "Accommodation",
                                "back": "Turar joy, yashash joyi",
                                "phonetic": "/əˌkɒm.əˈdeɪ.ʃən/",
                                "example": "Finding affordable accommodation in London can be tricky."
                },
                {
                                "front": "Activity",
                                "back": "Faoliyat, mashg'ulot",
                                "phonetic": "/ækˈtɪv.ə.ti/",
                                "example": "Physical activity improves mental focus and wellbeing."
                },
                {
                                "front": "Advantage",
                                "back": "Afzallik, ustunlik",
                                "phonetic": "/ədˈvɑːn.tɪdʒ/",
                                "example": "Speed is the main advantage of rail transport."
                },
                {
                                "front": "Advice",
                                "back": "Maslahat, o'git",
                                "phonetic": "/ədˈvaɪs/",
                                "example": "My teacher gave me useful advice on writing essays."
                },
                {
                                "front": "Agreement",
                                "back": "Kelishuv, shartnoma",
                                "phonetic": "/əˈɡriː.mənt/",
                                "example": "Both countries signed a bilateral trade agreement."
                },
                {
                                "front": "Amount",
                                "back": "Miqdor, summa",
                                "phonetic": "/əˈmaʊnt/",
                                "example": "A large amount of money was raised for charity."
                },
                {
                                "front": "Announcement",
                                "back": "E'lon, bildirishnoma",
                                "phonetic": "/əˈnaʊns.mənt/",
                                "example": "Listen carefully to the flight announcement at the gate."
                },
                {
                                "front": "Appointment",
                                "back": "Uchrashuv vaqti (shifokor, bank)",
                                "phonetic": "/əˈpɔɪnt.mənt/",
                                "example": "I have a dentist appointment tomorrow morning."
                },
                {
                                "front": "Arrangement",
                                "back": "Tashkillashtirish, kelishuv",
                                "phonetic": "/əˈreɪndʒ.mənt/",
                                "example": "Flower arrangements decorated the dinner tables."
                },
                {
                                "front": "Article",
                                "back": "Maqola, matn",
                                "phonetic": "/ˈɑː.tɪ.kəl/",
                                "example": "I read an insightful article about artificial intelligence."
                },
                {
                                "front": "Attention",
                                "back": "E'tibor, diqqat",
                                "phonetic": "/əˈten.ʃən/",
                                "example": "Pay close attention to pronunciation details."
                },
                {
                                "front": "Attitude",
                                "back": "Munosabat, qarash",
                                "phonetic": "/ˈæt.ɪ.tʃuːd/",
                                "example": "A positive attitude helps overcome exam anxiety."
                },
                {
                                "front": "Audience",
                                "back": "Auditoriya, tomoshabinlar",
                                "phonetic": "/ˈɔː.di.əns/",
                                "example": "The speaker captivated the audience with great stories."
                },
                {
                                "front": "Authority",
                                "back": "Vakolat, hokimiyat, nufuz",
                                "phonetic": "/ɔːˈθɒr.ə.ti/",
                                "example": "Local authorities built a new public library."
                },
                {
                                "front": "Average",
                                "back": "O'rtacha ko'rsatkich",
                                "phonetic": "/ˈæv.ər.ɪdʒ/",
                                "example": "The average temperature in summer is thirty degrees."
                },
                {
                                "front": "Behavior",
                                "back": "Xulq-atvor, yurish-turish",
                                "phonetic": "/bɪˈheɪ.vjə/",
                                "example": "Good behavior is rewarded in elementary school."
                },
                {
                                "front": "Benefit",
                                "back": "Foyda, naf, afzallik",
                                "phonetic": "/ˈben.ɪ.fɪt/",
                                "example": "Exercise offers numerous health benefits."
                },
                {
                                "front": "Business",
                                "back": "Biznes, tadbirkorlik",
                                "phonetic": "/ˈbɪz.nɪs/",
                                "example": "She runs a successful online clothing business."
                },
                {
                                "front": "Career",
                                "back": "Karyera, kasbiy yo'l",
                                "phonetic": "/kəˈrɪə/",
                                "example": "He chose a career in software development."
                },
                {
                                "front": "Cause",
                                "back": "Sabab, omil",
                                "phonetic": "/kɔːz/",
                                "example": "Heavy rainfall was the main cause of the flooding."
                },
                {
                                "front": "Celebration",
                                "back": "Bayram, nishonlash",
                                "phonetic": "/ˌsel.əˈbreɪ.ʃən/",
                                "example": "The city organized a fireworks celebration on Independence Day."
                },
                {
                                "front": "Challenge",
                                "back": "Qiyinchilik, chaqiriq",
                                "phonetic": "/ˈtʃæl.ɪndʒ/",
                                "example": "Overcoming language barriers is a rewarding challenge."
                },
                {
                                "front": "Chance",
                                "back": "Imkoniyat, omad",
                                "phonetic": "/tʃɑːns/",
                                "example": "This is your chance to showcase your speaking skills."
                },
                {
                                "front": "Choice",
                                "back": "Tanlov, ihtiyor",
                                "phonetic": "/tʃɔɪs/",
                                "example": "Making the right career choice requires self-reflection."
                },
                {
                                "front": "Community",
                                "back": "Jamiyat, hamjamiyat",
                                "phonetic": "/kəˈmjuː.nə.ti/",
                                "example": "The local community built a neighborhood park."
                },
                {
                                "front": "Company",
                                "back": "Kompaniya, korxona",
                                "phonetic": "/ˈkʌm.pə.ni/",
                                "example": "She works for an international tech company."
                },
                {
                                "front": "Condition",
                                "back": "Sharoit, ahvol",
                                "phonetic": "/kənˈdɪʃ.ən/",
                                "example": "The living conditions in the village improved significantly."
                },
                {
                                "front": "Confidence",
                                "back": "Ishonch, o'ziga ishonch",
                                "phonetic": "/ˈkɒn.fɪ.dəns/",
                                "example": "Public speaking builds personal confidence."
                },
                {
                                "front": "Consequence",
                                "back": "Oqibat, natija",
                                "phonetic": "/ˈkɒn.sɪ.kwəns/",
                                "example": "Skipping classes has serious academic consequences."
                },
                {
                                "front": "Decision",
                                "back": "Qaror",
                                "phonetic": "/dɪˈsɪʒ.ən/",
                                "example": "Making a big life decision takes careful thought."
                },
                {
                                "front": "Department",
                                "back": "Bo'lim, kafedra",
                                "phonetic": "/dɪˈpɑːt.mənt/",
                                "example": "Contact the HR department for employment queries."
                },
                {
                                "front": "Description",
                                "back": "Tavsif, ta'rif",
                                "phonetic": "/dɪˈskrɪp.ʃən/",
                                "example": "Read the job description carefully before applying."
                },
                {
                                "front": "Difference",
                                "back": "Farq, tafovut",
                                "phonetic": "/ˈdɪf.ər.əns/",
                                "example": "There is a clear difference between spoken and written English."
                },
                {
                                "front": "Direction",
                                "back": "Yo'nalish, yo'l-yo'riq",
                                "phonetic": "/daɪˈrek.ʃən/",
                                "example": "Ask the police officer for directions to the museum."
                },
                {
                                "front": "Disadvantage",
                                "back": "Kamchilik, salbiy tomon",
                                "phonetic": "/ˌdɪs.ədˈvɑːn.tɪdʒ/",
                                "example": "Noise is a main disadvantage of living near airports."
                },
                {
                                "front": "Discovery",
                                "back": "Kashfiyot",
                                "phonetic": "/dɪˈskʌv.ər.i/",
                                "example": "The discovery of penicillin revolutionized medicine."
                },
                {
                                "front": "Discussion",
                                "back": "Muhokama, muzokara",
                                "phonetic": "/dɪˈskʌʃ.ən/",
                                "example": "We had a group discussion on climate policy."
                },
                {
                                "front": "Distance",
                                "back": "Masofa, olislik",
                                "phonetic": "/ˈdɪs.təns/",
                                "example": "The distance between Tashkent and Samarkand is 300 km."
                },
                {
                                "front": "Education",
                                "back": "Ta'lim, ma'lumot",
                                "phonetic": "/ˌedʒ.uˈkeɪ.ʃən/",
                                "example": "Quality education unlocks career opportunities."
                },
                {
                                "front": "Effort",
                                "back": "Harakat, urinish",
                                "phonetic": "/ˈef.ət/",
                                "example": "Learning a language requires continuous effort."
                },
                {
                                "front": "Environment",
                                "back": "Atrof-muhit, ekologiya",
                                "phonetic": "/ɪnˈvaɪ.rən.mənt/",
                                "example": "We must protect the natural environment."
                },
                {
                                "front": "Equipment",
                                "back": "Asbob-uskuna, jihozlar",
                                "phonetic": "/ɪˈkwɪp.mənt/",
                                "example": "The laboratory has state-of-the-art scientific equipment."
                },
                {
                                "front": "Evidence",
                                "back": "Dalil, isbot",
                                "phonetic": "/ˈev.ɪ.dəns/",
                                "example": "Police found clear evidence at the scene."
                },
                {
                                "front": "Exercise",
                                "back": "Mashq, jismoniy mashg'ulot",
                                "phonetic": "/ˈek.sə.saɪz/",
                                "example": "Daily physical exercise boosts energy levels."
                },
                {
                                "front": "Experience",
                                "back": "Tajriba, hayotiy ko'nikma",
                                "phonetic": "/ɪkˈspɪə.ri.əns/",
                                "example": "Hands-on work experience is valued by employers."
                },
                {
                                "front": "Facility",
                                "back": "Inshoot, qulaylik, bino",
                                "phonetic": "/fəˈsɪl.ə.ti/",
                                "example": "The university sport facility includes a swimming pool."
                },
                {
                                "front": "Feature",
                                "back": "Xususiyat, ajralib turuvchi belgi",
                                "phonetic": "/ˈfiː.tʃə/",
                                "example": "A touchscreen is a key feature of modern smartphones."
                },
                {
                                "front": "Future",
                                "back": "Kelajak, istiqbol",
                                "phonetic": "/ˈfjuː.tʃə/",
                                "example": "Investing in education secures a brighter future."
                },
                {
                                "front": "Goal",
                                "back": "Maqsad, niyat",
                                "phonetic": "/ɡəʊl/",
                                "example": "My primary goal is to score Band 7.5 in IELTS."
                },
                {
                                "front": "Government",
                                "back": "Hukumat, davlat boshqaruvi",
                                "phonetic": "/ˈɡʌv.ən.mənt/",
                                "example": "The government invested in renewable energy projects."
                },
                {
                                "front": "Habit",
                                "back": "Odat, ko'nikma",
                                "phonetic": "/ˈhæb.ɪt/",
                                "example": "Reading every night is a wonderful habit."
                },
                {
                                "front": "Health",
                                "back": "Sog'liq, salomatlik",
                                "phonetic": "/helθ/",
                                "example": "Good nutrition is crucial for maintain healthy health."
                },
                {
                                "front": "History",
                                "back": "Tarix",
                                "phonetic": "/ˈhɪs.tər.i/",
                                "example": "Ancient Uzbek cities have a rich architectural history."
                },
                {
                                "front": "Hobby",
                                "back": "Qiziqish, xobbi",
                                "phonetic": "/ˈhɒb.i/",
                                "example": "Photography is my favorite creative hobby."
                },
                {
                                "front": "Idea",
                                "back": "G'oya, fikr",
                                "phonetic": "/aɪˈdɪə/",
                                "example": "She proposed a brilliant idea during the team brainstorming."
                },
                {
                                "front": "Impact",
                                "back": "Ta'sir, kuchi",
                                "phonetic": "/ˈɪm.pækt/",
                                "example": "Social media has a major impact on communication."
                },
                {
                                "front": "Improvement",
                                "back": "Yaxshilanish, rivojlanish",
                                "phonetic": "/ɪmˈpruːv.mənt/",
                                "example": "There is a noticeable improvement in your speaking fluency."
                },
                {
                                "front": "Information",
                                "back": "Ma'lumot, axborot",
                                "phonetic": "/ˌɪn.fəˈmeɪ.ʃən/",
                                "example": "The brochure provides useful tourist information."
                },
                {
                                "front": "Instruction",
                                "back": "Yo'riqnoma, ko'rsatma",
                                "phonetic": "/ɪnˈstrʌk.ʃən/",
                                "example": "Follow the assembly instructions step by step."
                },
                {
                                "front": "Intention",
                                "back": "Niyat, maqsad",
                                "phonetic": "/ɪnˈten.ʃən/",
                                "example": "It was not my intention to cause inconvenience."
                },
                {
                                "front": "Interest",
                                "back": "Qiziqish, manfaat",
                                "phonetic": "/ˈɪn.trest/",
                                "example": "She showed a keen interest in environmental science."
                },
                {
                                "front": "Journey",
                                "back": "Sayohat, safar",
                                "phonetic": "/ˈdʒɜː.ni/",
                                "example": "The train journey across the mountains was scenic."
                },
                {
                                "front": "Knowledge",
                                "back": "Bilim, tushuncha",
                                "phonetic": "/ˈnɒl.ɪdʒ/",
                                "example": "Practical knowledge is just as important as theory."
                },
                {
                                "front": "Language",
                                "back": "Til",
                                "phonetic": "/ˈlæŋ.ɡwɪdʒ/",
                                "example": "English is an international language of communication."
                },
                {
                                "front": "Location",
                                "back": "Joylashuv, manzil",
                                "phonetic": "/ləʊˈkeɪ.ʃən/",
                                "example": "The hotel is in an ideal downtown location."
                },
                {
                                "front": "Management",
                                "back": "Boshqaruv, menejment",
                                "phonetic": "/ˈmæn.ɪdʒ.mənt/",
                                "example": "Effective time management reduces study stress."
                },
                {
                                "front": "Material",
                                "back": "Material, xomashyo, o'quv quroli",
                                "phonetic": "/məˈtɪə.ri.əl/",
                                "example": "The course materials are available on the online portal."
                },
                {
                                "front": "Meaning",
                                "back": "Ma'no, mazmun",
                                "phonetic": "/ˈmiː.nɪŋ/",
                                "example": "Look up the meaning of unfamiliar words in a dictionary."
                },
                {
                                "front": "Opportunity",
                                "back": "Imkoniyat",
                                "phonetic": "/ˌɒp.əˈtʃuː.nə.ti/",
                                "example": "Internships offer a great opportunity to gain experience."
                },
                {
                                "front": "Option",
                                "back": "Tanlov, varianti",
                                "phonetic": "/ˈɒp.ʃən/",
                                "example": "You have the option to take the computer-based exam."
                },
                {
                                "front": "Organization",
                                "back": "Tashkilot, tuzilma",
                                "phonetic": "/ˌɔː.ɡən.aɪˈzeɪ.ʃən/",
                                "example": "The charity organization distributes food to families."
                },
                {
                                "front": "Permission",
                                "back": "Ruxsat",
                                "phonetic": "/pəˈmɪʃ.ən/",
                                "example": "Ask for permission before leaving the classroom."
                },
                {
                                "front": "Personality",
                                "back": "Shaxsiyat, fe'l-atvor",
                                "phonetic": "/ˌpɜː.sənˈæl.ə.ti/",
                                "example": "Her friendly personality makes her very popular."
                },
                {
                                "front": "Population",
                                "back": "Aholi, xalq soni",
                                "phonetic": "/ˌpɒp.jəˈleɪ.ʃən/",
                                "example": "The population of Tashkent exceeds three million people."
                },
                {
                                "front": "Possibility",
                                "back": "Ehtimol, imkoniyat",
                                "phonetic": "/ˌpɒs.əˈbɪl.ə.ti/",
                                "example": "There is a strong possibility of rain this weekend."
                },
                {
                                "front": "Practice",
                                "back": "Amaliyot, mashq",
                                "phonetic": "/ˈpræk.tɪs/",
                                "example": "Daily speaking practice is necessary for confidence."
                },
                {
                                "front": "Preference",
                                "back": "Afzallik ko'rish, tanlov",
                                "phonetic": "/ˈpref.ər.əns/",
                                "example": "State your accommodation preference on the registration form."
                },
                {
                                "front": "Preparation",
                                "back": "Tayyorgarlik",
                                "phonetic": "/ˌprep.ərˈeɪ.ʃən/",
                                "example": "Thorough preparation guarantees better test results."
                },
                {
                                "front": "Problem",
                                "back": "Muammo, masala",
                                "phonetic": "/ˈprɒb.ləm/",
                                "example": "Teamwork helps us solve difficult problems faster."
                },
                {
                                "front": "Process",
                                "back": "Jarayon",
                                "phonetic": "/ˈprəʊ.ses/",
                                "example": "Learning a new language is a gradual process."
                },
                {
                                "front": "Product",
                                "back": "Mahsulot",
                                "phonetic": "/ˈprɒd.ʌkt/",
                                "example": "The company launched an innovative tech product."
                },
                {
                                "front": "Progress",
                                "back": "O'sish, ilgarilash",
                                "phonetic": "/ˈprəʊ.ɡres/",
                                "example": "You are making steady progress in your studies."
                },
                {
                                "front": "Purpose",
                                "back": "Maqsad, niyat",
                                "phonetic": "/ˈpɜː.pəs/",
                                "example": "The main purpose of this meeting is to plan the event."
                },
                {
                                "front": "Quality",
                                "back": "Sifat, daraja",
                                "phonetic": "/ˈkwɒl.ə.ti/",
                                "example": "High quality customer service builds brand loyalty."
                },
                {
                                "front": "Reason",
                                "back": "Sabab, vaji",
                                "phonetic": "/ˈriː.zən/",
                                "example": "Explain the main reason for your choice in the essay."
                },
                {
                                "front": "Relationship",
                                "back": "Munosabat, aloqa",
                                "phonetic": "/rɪˈleɪ.ʃən.ʃɪp/",
                                "example": "Clear communication builds strong working relationships."
                },
                {
                                "front": "Request",
                                "back": "Iltimos, so'rov",
                                "phonetic": "/rɪˈkwest/",
                                "example": "Submit your vacation request two weeks in advance."
                },
                {
                                "front": "Research",
                                "back": "Tadqiqot, izlanish",
                                "phonetic": "/rɪˈsɜːtʃ/",
                                "example": "Scientists conduct research to find new cures."
                },
                {
                                "front": "Resource",
                                "back": "Manba, resurs",
                                "phonetic": "/rɪˈzɔːs/",
                                "example": "The library provides excellent online resources."
                },
                {
                                "front": "Respect",
                                "back": "Hurmat, ehtirom",
                                "phonetic": "/rɪˈspekt/",
                                "example": "Treating others with respect creates a positive climate."
                },
                {
                                "front": "Responsibility",
                                "back": "Mas'uliyat, javobgarlik",
                                "phonetic": "/rɪˌspɒn.sɪˈbɪl.ə.ti/",
                                "example": "Taking responsibility for your learning drives success."
                },
                {
                                "front": "Result",
                                "back": "Natija",
                                "phonetic": "/rɪˈzʌlt/",
                                "example": "The exam results will be announced next Monday."
                },
                {
                                "front": "Safety",
                                "back": "Xavfsizlik",
                                "phonetic": "/ˈseɪf.ti/",
                                "example": "Seatbelts are essential for car safety."
                },
                {
                                "front": "Schedule",
                                "back": "Jadval, dars rejasi",
                                "phonetic": "/ˈʃed.juːl/",
                                "example": "Check your daily study schedule on the dashboard."
                },
                {
                                "front": "Science",
                                "back": "Fan, ilm-fan",
                                "phonetic": "/ˈsaɪ.əns/",
                                "example": "Medical science has advanced dramatically over the decades."
                },
                {
                                "front": "Skill",
                                "back": "Ko'nikma, mahorat",
                                "phonetic": "/skɪl/",
                                "example": "Writing and speaking are key language skills."
                },
                {
                                "front": "Society",
                                "back": "Jamiyat",
                                "phonetic": "/səˈsaɪ.ə.ti/",
                                "example": "Education plays a vital role in modern society."
                },
                {
                                "front": "Solution",
                                "back": "Yechim",
                                "phonetic": "/səˈluː.ʃən/",
                                "example": "We found a simple solution to the technical problem."
                },
                {
                                "front": "Source",
                                "back": "Manba, kelib chiqishi",
                                "phonetic": "/sɔːs/",
                                "example": "Clean water is a vital natural resource and source of health."
                },
                {
                                "front": "Strategy",
                                "back": "Strategiya, harakat rejasi",
                                "phonetic": "/ˈstræt.ə.dʒi/",
                                "example": "A good study strategy helps you manage test time."
                },
                {
                                "front": "Structure",
                                "back": "Tuzilma, struktura",
                                "phonetic": "/ˈstrʌk.tʃə/",
                                "example": "Organize your essay with a logical paragraph structure."
                },
                {
                                "front": "Success",
                                "back": "Muvaffaqiyat, yutuq",
                                "phonetic": "/səkˈses/",
                                "example": "Hard work and consistency lead to academic success."
                },
                {
                                "front": "Suggestion",
                                "back": "Taklif, maslahat",
                                "phonetic": "/səˈdʒes.tʃən/",
                                "example": "Thank you for your valuable feedback and suggestions."
                },
                {
                                "front": "System",
                                "back": "Tizim, sistema",
                                "phonetic": "/ˈsɪs.təm/",
                                "example": "Our online learning system updates grades automatically."
                },
                {
                                "front": "Task",
                                "back": "Vazifa, topshiriq",
                                "phonetic": "/tɑːsk/",
                                "example": "Complete your daily homework task before six PM."
                },
                {
                                "front": "Technique",
                                "back": "Usul, texnika",
                                "phonetic": "/tekˈniːk/",
                                "example": "Mind mapping is an effective memory technique."
                },
                {
                                "front": "Technology",
                                "back": "Texnologiya",
                                "phonetic": "/tekˈnɒl.ə.dʒi/",
                                "example": "Modern technology simplifies distance learning."
                },
                {
                                "front": "Topic",
                                "back": "Mavzu, bo'lim",
                                "phonetic": "/ˈtɒp.ɪk/",
                                "example": "Today's speaking topic is environmental conservation."
                },
                {
                                "front": "Understanding",
                                "back": "Tushunish, anglash",
                                "phonetic": "/ˌʌn.dəˈstæn.dɪŋ/",
                                "example": "Clear explanations deepen student understanding."
                },
                {
                                "front": "Value",
                                "back": "Qiymat, qadr-qimmat",
                                "phonetic": "/ˈvæl.juː/",
                                "example": "Education is a lifelong investment of immense value."
                },
                {
                                "front": "Variety",
                                "back": "Xilma-xillik, turli-tumanlik",
                                "phonetic": "/vəˈraɪ.ə.ti/",
                                "example": "The restaurant offers a wide variety of healthy salads."
                },
                {
                                "front": "Accurate",
                                "back": "Aniq, to'g'ri",
                                "phonetic": "/ˈæk.jə.rət/",
                                "example": "Ensure your answers are accurate before submitting."
                },
                {
                                "front": "Active",
                                "back": "Faol, harakatchan",
                                "phonetic": "/ˈæk.tɪv/",
                                "example": "Being active in class discussions improves fluency."
                },
                {
                                "front": "Additional",
                                "back": "Qo'shimcha",
                                "phonetic": "/əˈdɪʃ.ən.əl/",
                                "example": "You can find additional practice exercises online."
                },
                {
                                "front": "Adequate",
                                "back": "Yetarli, mos",
                                "phonetic": "/ˈæd.ə.kwət/",
                                "example": "Make sure you get adequate sleep before the exam."
                },
                {
                                "front": "Advanced",
                                "back": "Ilg'or, yuqori darajadagi",
                                "phonetic": "/ədˈvɑːnst/",
                                "example": "She attends an advanced English writing course."
                },
                {
                                "front": "Amazing",
                                "back": "Ajoyib, hayratlanarli",
                                "phonetic": "/əˈmeɪ.zɪŋ/",
                                "example": "The museum displayed an amazing collection of artifacts."
                },
                {
                                "front": "Ancient",
                                "back": "Qadimiy, ko'xna",
                                "phonetic": "/ˈeɪn.ʃənt/",
                                "example": "Samarkand is famous for its ancient historical monuments."
                },
                {
                                "front": "Anxious",
                                "back": "Xavotirli, bezovta",
                                "phonetic": "/ˈæŋk.ʃəs/",
                                "example": "Feeling anxious before a big test is completely normal."
                },
                {
                                "front": "Appropriate",
                                "back": "Mos, munosib",
                                "phonetic": "/əˈprəʊ.pri.ət/",
                                "example": "Wear appropriate formal clothing for the interview."
                },
                {
                                "front": "Available",
                                "back": "Mavjud, bo'sh",
                                "phonetic": "/əˈveɪ.lə.bəl/",
                                "example": "Study materials are available in the university library."
                },
                {
                                "front": "Basic",
                                "back": "Asosiy, bazaviy",
                                "phonetic": "/ˈbeɪ.sɪk/",
                                "example": "Mastering basic vocabulary is the first step in learning."
                },
                {
                                "front": "Beneficial",
                                "back": "Foydali, manfaatlari",
                                "phonetic": "/ˌben.ɪˈfɪʃ.əl/",
                                "example": "Reading daily is highly beneficial for language growth."
                },
                {
                                "front": "Careful",
                                "back": "Ehtiyotkor, diqqatli",
                                "phonetic": "/ˈkeə.fəl/",
                                "example": "Be careful when spelling complex technical terms."
                },
                {
                                "front": "Certain",
                                "back": "Aniq, ishonchi komil",
                                "phonetic": "/ˈsɜː.tən/",
                                "example": "I am certain that practice leads to improvement."
                },
                {
                                "front": "Challenging",
                                "back": "Murakkab, qiyin lekin qiziq",
                                "phonetic": "/ˈtʃæl.ɪn.dʒɪŋ/",
                                "example": "Solving advanced math logic is a challenging task."
                },
                {
                                "front": "Comfortable",
                                "back": "Qulay, shinam",
                                "phonetic": "/ˈkʌm.fə.tə.bəl/",
                                "example": "The new study chairs are ergonomic and comfortable."
                },
                {
                                "front": "Common",
                                "back": "Keng tarqalgan, odatiy",
                                "phonetic": "/ˈkɒm.ən/",
                                "example": "Spelling mistakes are common among beginner writers."
                },
                {
                                "front": "Complete",
                                "back": "To'liq, mukammal",
                                "phonetic": "/kəmˈpliːt/",
                                "example": "Make sure to give a complete answer to the question."
                },
                {
                                "front": "Complex",
                                "back": "Murakkab, ko'p qirrali",
                                "phonetic": "/ˈkɒm.pleks/",
                                "example": "Grammar structures become more complex at B2 level."
                },
                {
                                "front": "Confident",
                                "back": "O'ziga ishonchi baland",
                                "phonetic": "/ˈkɒn.fɪ.dənt/",
                                "example": "She felt confident during her speaking interview."
                },
                {
                                "front": "Convenient",
                                "back": "Qulay, mos keladigan",
                                "phonetic": "/kənˈviː.ni.ənt/",
                                "example": "Online learning provides a convenient study schedule."
                },
                {
                                "front": "Creative",
                                "back": "Ijodkor, yaratuvchan",
                                "phonetic": "/kriˈeɪ.tɪv/",
                                "example": "Writing essays encourages creative thinking."
                },
                {
                                "front": "Crucial",
                                "back": "Hayotiy muhim, hal qiluvchi",
                                "phonetic": "/ˈkruː.ʃəl/",
                                "example": "Time management is crucial for exam success."
                },
                {
                                "front": "Cultural",
                                "back": "Madaniy, madaniyatga oid",
                                "phonetic": "/ˈkʌl.tʃər.əl/",
                                "example": "Food is an integral part of cultural identity."
                },
                {
                                "front": "Curious",
                                "back": "Qiziquvchan, bilishga intiluvchan",
                                "phonetic": "/ˈkjʊə.ri.əs/",
                                "example": "Curious students learn faster by asking questions."
                },
                {
                                "front": "Current",
                                "back": "Hozirgi, zamonaviy",
                                "phonetic": "/ˈkʌr.ənt/",
                                "example": "Stay updated on current global news topics."
                },
                {
                                "front": "Dangerous",
                                "back": "Xavfli, xatarli",
                                "phonetic": "/ˈdeɪn.dʒər.əs/",
                                "example": "Driving without a seatbelt is extremely dangerous."
                },
                {
                                "front": "Different",
                                "back": "Har xil, turlicha",
                                "phonetic": "/ˈdɪf.ər.ənt/",
                                "example": "People have different learning preferences."
                },
                {
                                "front": "Difficult",
                                "back": "Qiyin, murakkab",
                                "phonetic": "/ˈdɪf.ɪ.kəlt/",
                                "example": "Pronouncing new sounds can be difficult at first."
                },
                {
                                "front": "Disappointed",
                                "back": "Xafalangan, ko'ngli qolgan",
                                "phonetic": "/ˌdɪs.əˈpɔɪn.tɪd/",
                                "example": "He felt disappointed after missing the target score."
                },
                {
                                "front": "Effective",
                                "back": "Samarali, natijali",
                                "phonetic": "/ɪˈfek.tɪv/",
                                "example": "Flashcards are an effective tool for memory building."
                },
                {
                                "front": "Efficient",
                                "back": "Tejamkor, unumdor",
                                "phonetic": "/ɪˈfɪʃ.ənt/",
                                "example": "An efficient study routine saves hours of effort."
                },
                {
                                "front": "Essential",
                                "back": "Zarur, o'ta muhim",
                                "phonetic": "/ɪˈsen.ʃəl/",
                                "example": "Hydration is essential during long study sessions."
                },
                {
                                "front": "Excellent",
                                "back": "A'lo, mukammal",
                                "phonetic": "/ˈek.səl.ənt/",
                                "example": "She scored an excellent result in reading."
                },
                {
                                "front": "Expensive",
                                "back": "Qimmat, qimmatbaho",
                                "phonetic": "/ɪkˈspen.sɪv/",
                                "example": "Studying abroad can be expensive without scholarships."
                },
                {
                                "front": "Famous",
                                "back": "Mashhur, taniqli",
                                "phonetic": "/ˈfeɪ.məs/",
                                "example": "Uzbekistan is famous for its hospitality and architecture."
                },
                {
                                "front": "Fantastic",
                                "back": "Ajoyib, zo'r",
                                "phonetic": "/fænˈtæs.tɪk/",
                                "example": "You did a fantastic job on your presentation!"
                },
                {
                                "front": "Flexible",
                                "back": "Moslashuvchan, qayshqoq",
                                "phonetic": "/ˈflek.sə.bəl/",
                                "example": "A flexible schedule allows working while studying."
                },
                {
                                "front": "Friendly",
                                "back": "Do'stona, samimiy",
                                "phonetic": "/ˈfrend.li/",
                                "example": "The tutors at the center are very warm and friendly."
                },
                {
                                "front": "Generous",
                                "back": "Saxiy, qo'li ochiq",
                                "phonetic": "/ˈdʒen.ər.əs/",
                                "example": "Our host was very generous and welcoming."
                },
                {
                                "front": "Global",
                                "back": "Jahon miqyosidagi, global",
                                "phonetic": "/ˈɡləʊ.bəl/",
                                "example": "Climate change is a urgent global issue."
                },
                {
                                "front": "Grateful",
                                "back": "Minnatdor, tasakkur aytuvchi",
                                "phonetic": "/ˈɡreɪt.fəl/",
                                "example": "I am grateful for the guidance of my mentors."
                },
                {
                                "front": "Healthy",
                                "back": "Sog'lom, foydali",
                                "phonetic": "/ˈhel.θi/",
                                "example": "Eating a healthy breakfast improves morning focus."
                },
                {
                                "front": "Helpful",
                                "back": "Foydali, yordam beruvchi",
                                "phonetic": "/ˈhelp.fəl/",
                                "example": "The textbook includes helpful grammar summaries."
                },
                {
                                "front": "Honest",
                                "back": "Halol, to'g'riso'z",
                                "phonetic": "/ˈɒn.ɪst/",
                                "example": "Honest self-assessment is key to identifying weaknesses."
                },
                {
                                "front": "Huge",
                                "back": "Juda katta, ulkan",
                                "phonetic": "/hjuːdʒ/",
                                "example": "Technology has made a huge difference in education."
                },
                {
                                "front": "Important",
                                "back": "Muhim, ahamiyatli",
                                "phonetic": "/ɪmˈpɔː.tənt/",
                                "example": "Consistency is the most important part of learning."
                },
                {
                                "front": "Impossible",
                                "back": "Imkonsiz, ilojsiz",
                                "phonetic": "/ɪmˈpɒs.ə.bəl/",
                                "example": "Nothing is impossible with dedication and practice."
                },
                {
                                "front": "Independent",
                                "back": "Mustaqil, erkin",
                                "phonetic": "/ˌɪn.dɪˈpen.dənt/",
                                "example": "Autonomous learning builds independent thinking."
                },
                {
                                "front": "Intelligent",
                                "back": "Aqlli, zukkosi",
                                "phonetic": "/ɪnˈtel.ɪ.dʒənt/",
                                "example": "She gave an intelligent analysis of the essay prompt."
                },
                {
                                "front": "International",
                                "back": "Xalqaro",
                                "phonetic": "/ˌɪn.təˈnæʃ.ən.əl/",
                                "example": "IELTS is an international English language test."
                },
                {
                                "front": "Necessary",
                                "back": "Zarur, kerakli",
                                "phonetic": "/ˈnes.ə.ser.i/",
                                "example": "Regular revision is necessary for vocabulary retention."
                },
                {
                                "front": "Obvious",
                                "back": "Aniq, ravshan, ko'rinib turgan",
                                "phonetic": "/ˈɒb.vi.əs/",
                                "example": "There is an obvious link between practice and fluency."
                },
                {
                                "front": "Official",
                                "back": "Rasmiy",
                                "phonetic": "/əˈfɪʃ.əl/",
                                "example": "You will receive an official certificate after completing."
                },
                {
                                "front": "Ordinary",
                                "back": "Oddiy, odatiy",
                                "phonetic": "/ˈɔː.dən.ri/",
                                "example": "It was just an ordinary weekday morning."
                },
                {
                                "front": "Original",
                                "back": "Asl, nusxa emas",
                                "phonetic": "/əˈrɪdʒ.ən.əl/",
                                "example": "Always try to express original ideas in your essays."
                },
                {
                                "front": "Particular",
                                "back": "Aynan bir, maxsus",
                                "phonetic": "/pəˈtɪk.jə.lə/",
                                "example": "Is there any particular topic you want to discuss?"
                },
                {
                                "front": "Patient",
                                "back": "Sabrli, chidamli",
                                "phonetic": "/ˈpeɪ.ʃənt/",
                                "example": "Be patient with yourself when learning a new language."
                },
                {
                                "front": "Polite",
                                "back": "Xushmuomala, odobli",
                                "phonetic": "/pəˈlaɪt/",
                                "example": "Using polite language is important in speaking tests."
                },
                {
                                "front": "Popular",
                                "back": "Ommabop, mashhur",
                                "phonetic": "/ˈpɒp.jə.lə/",
                                "example": "Football is the most popular sport among students."
                },
                {
                                "front": "Positive",
                                "back": "Ijobiy, yaxshi",
                                "phonetic": "/ˈpɒz.ə.tɪv/",
                                "example": "Maintain a positive mindset during exam prep."
                },
                {
                                "front": "Possible",
                                "back": "Imkoni bor, ehtimolli",
                                "phonetic": "/ˈpɒs.ə.bəl/",
                                "example": "It is possible to master vocabulary with daily flashcards."
                },
                {
                                "front": "Practical",
                                "back": "Amaliy, foydali",
                                "phonetic": "/ˈpræk.tɪ.kəl/",
                                "example": "Focus on learning practical words used in daily life."
                },
                {
                                "front": "Precious",
                                "back": "Qimmatbaho, qadrli",
                                "phonetic": "/ˈpreʃ.əs/",
                                "example": "Time is your most precious study resource."
                },
                {
                                "front": "Regular",
                                "back": "Muntazam, doimiy",
                                "phonetic": "/ˈreɡ.jə.lə/",
                                "example": "Establish a regular study routine for best results."
                },
                {
                                "front": "Reliable",
                                "back": "Ishonchli",
                                "phonetic": "/rɪˈlaɪ.ə.bəl/",
                                "example": "This online dictionary is a reliable reference source."
                },
                {
                                "front": "Responsible",
                                "back": "Mas'uliyatli",
                                "phonetic": "/rɪˈspɒn.sə.bəl/",
                                "example": "Students are responsible for tracking their own goals."
                },
                {
                                "front": "Satisfied",
                                "back": "Qoniqqan, mamnun",
                                "phonetic": "/ˈsæt.ɪs.faɪd/",
                                "example": "She felt satisfied with her test score."
                },
                {
                                "front": "Serious",
                                "back": "Jiddiy, muhim",
                                "phonetic": "/ˈsɪə.ri.əs/",
                                "example": "Atmospheric pollution is a serious environmental threat."
                },
                {
                                "front": "Similar",
                                "back": "O'xshash, hamrang",
                                "phonetic": "/ˈsɪm.ɪ.lə/",
                                "example": "Synonyms are words with similar meanings."
                },
                {
                                "front": "Simple",
                                "back": "Oddiy, oson",
                                "phonetic": "/ˈsɪm.pəl/",
                                "example": "Keep your sentence structure clear and simple."
                },
                {
                                "front": "Special",
                                "back": "Maxsus, alohida",
                                "phonetic": "/ˈspeʃ.əl/",
                                "example": "The school organized a special ceremony for graduates."
                },
                {
                                "front": "Specific",
                                "back": "Aniq, tayinli",
                                "phonetic": "/spəˈsɪf.ɪk/",
                                "example": "Give specific examples to support your essay points."
                },
                {
                                "front": "Suitable",
                                "back": "Mos, munosib",
                                "phonetic": "/ˈsuː.tə.bəl/",
                                "example": "Choose a study environment suitable for quiet focus."
                },
                {
                                "front": "Traditional",
                                "back": "An'anaviy, milliy",
                                "phonetic": "/trəˈdɪʃ.ən.əl/",
                                "example": "Plov is a delicious traditional Uzbek dish."
                },
                {
                                "front": "Typical",
                                "back": "Xarakterli, odatiy",
                                "phonetic": "/ˈtɪp.ɪ.kəl/",
                                "example": "A typical study session lasts for forty-five minutes."
                },
                {
                                "front": "Unique",
                                "back": "Yagona, takrorsiz",
                                "phonetic": "/juːˈniːk/",
                                "example": "Every student has a unique learning pace."
                },
                {
                                "front": "Useful",
                                "back": "Foydali, keragiga yaraydigan",
                                "phonetic": "/ˈjuːs.fəl/",
                                "example": "This vocabulary list is extremely useful for beginners."
                },
                {
                                "front": "Valuable",
                                "back": "Qimmatli, g'animat",
                                "phonetic": "/ˈvæl.jə.bəl/",
                                "example": "Mock tests provide valuable practice for the real exam."
                },
                {
                                "front": "Various",
                                "back": "Turli xil, har xil",
                                "phonetic": "/ˈveə.ri.əs/",
                                "example": "The library contains books on various academic subjects."
                },
                {
                                "front": "Vital",
                                "back": "Hayotiy muhim",
                                "phonetic": "/ˈvaɪ.təl/",
                                "example": "Water is vital for maintaining physical health."
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
