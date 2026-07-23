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
        title: '🌱 A1-A2 Starter Vocabulary',
        description: 'Ingliz tilini noldan boshlayotganlar uchun eng zarur 25 ta tayanch so\'zlar va iboralar.',
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        isPremiumOnly: false,
        cards: [
            { front: 'Achieve', back: 'Erishmoq, qo\'lga kiritmoq', phonetic: '/əˈtʃiːv/', example: 'She worked hard to achieve her target IELTS score.' },
            { front: 'Improve', back: 'Rivojlantirmoq, yaxshilamoq', phonetic: '/ɪmˈpruːv/', example: 'Daily reading will improve your English vocabulary.' },
            { front: 'Require', back: 'Talab qilmoq, ehtiyoj sezmoq', phonetic: '/rɪˈkwaɪə/', example: 'Passing the exam requires dedication and focus.' },
            { front: 'Opportunity', back: 'Imkoniyat', phonetic: '/ˌɒp.əˈtʃuː.nə.ti/', example: 'Studying abroad is a great life opportunity.' },
            { front: 'Environment', back: 'Atrof-muhit', phonetic: '/ɪnˈvaɪ.rən.mənt/', example: 'We must protect our natural environment.' },
            { front: 'Essential', back: 'Zarur, o\'ta muhim', phonetic: '/ɪˈsen.ʃəl/', example: 'Water is essential for human health.' },
            { front: 'Benefit', back: 'Foyda, naf', phonetic: '/ˈben.ɪ.fɪt/', example: 'Regular exercise brings many health benefits.' },
            { front: 'Challenge', back: 'Qiyinchilik, chaqiriq', phonetic: '/ˈtʃæl.ɪndʒ/', example: 'Learning a new language is a rewarding challenge.' },
            { front: 'Solution', back: 'Yechim', phonetic: '/səˈluː.ʃən/', example: 'We need to find an effective solution to this problem.' },
            { front: 'Increase', back: 'Oshirmoq, ko\'paytirmoq', phonetic: '/ɪnˈkriːs/', example: 'The government aims to increase education funding.' },
            { front: 'Decrease', back: 'Kamaytirmoq, tushirmoq', phonetic: '/dɪˈkriːs/', example: 'Traffic noise decreases at night.' },
            { front: 'Advantage', back: 'Afzallik, ustunlik', phonetic: '/ədˈvɑːn.tɪdʒ/', example: 'Speed is the main advantage of online communication.' },
            { front: 'Disadvantage', back: 'Kamchilik, salbiy tomon', phonetic: '/ˌdɪs.ədˈvɑːn.tɪdʒ/', example: 'High cost is a major disadvantage of this plan.' },
            { front: 'Provide', back: 'Ta\'minlamoq, berish', phonetic: '/prəˈvaɪd/', example: 'Schools provide students with modern tools.' },
            { front: 'Support', back: 'Qo\'llab-quvvatlamoq', phonetic: '/səˈpɔːt/', example: 'My family always supports my dreams.' },
            { front: 'Prepare', back: 'Tayyorgarlik ko\'rmoq', phonetic: '/prɪˈpeə/', example: 'I prepare for my exams every evening.' },
            { front: 'Knowledge', back: 'Bilim', phonetic: '/ˈnɒl.ɪdʒ/', example: 'Books are a endless source of knowledge.' },
            { front: 'Experience', back: 'Tajriba', phonetic: '/ɪkˈspɪə.ri.əns/', example: 'She has ten years of teaching experience.' },
            { front: 'Develop', back: 'Rivojlantirmoq, shakllantirmoq', phonetic: '/dɪˈvel.əp/', example: 'Students develop critical thinking skills.' },
            { front: 'Encourage', back: 'Rag\'batlantirmoq, ruhlantirmoq', phonetic: '/ɪnˈkʌr.ɪdʒ/', example: 'Teachers encourage students to ask questions.' }
        ]
    },
    {
        id: 'deck_intermediate_b1_b2',
        title: '📈 B1-B2 Pre-IELTS Academic Vocab',
        description: 'Band 5.5-6.5 darajasidagi talabalar uchun akademik so\'zlar to\'plami.',
        level: 'B1-B2',
        badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        icon: '📈',
        isPremiumOnly: true,
        cards: [
            { front: 'Substantial', back: 'Katta, salmoqli, sezilarli', phonetic: '/səbˈstæn.ʃəl/', example: 'There was a substantial increase in renewable energy production.' },
            { front: 'Fluctuate', back: 'O\'zgarib turmoq, tebranmoq', phonetic: '/ˈflʌk.tʃu.eɪt/', example: 'Temperatures fluctuate wildly during spring.' },
            { front: 'Implement', back: 'Amalga oshirmoq, joriy etmoq', phonetic: '/ˈɪm.plɪ.ment/', example: 'The school implemented new safety measures.' },
            { front: 'Significant', back: 'Muhim, sezilarli darajada', phonetic: '/sɪɡˈnɪf.ɪ.kənt/', example: 'The results showed a significant difference.' },
            { front: 'Consequence', back: 'Oqibat, natija', phonetic: '/ˈkɒn.sɪ.kwəns/', example: 'Pollution has severe consequences for marine life.' },
            { front: 'Promote', back: 'Targ\'ib qilmoq, oshirmoq', phonetic: '/prəˈməʊt/', example: 'Campaigns promote healthy eating habits.' },
            { front: 'Dramatically', back: 'Keskin ravishda, shiddat bilan', phonetic: '/drəˈmæt.ɪ.kəl.i/', example: 'Prices dropped dramatically last month.' },
            { front: 'Predict', back: 'Oldindan aytmoq, bashorat qilmoq', phonetic: '/prɪˈdɪkt/', example: 'Experts predict strong economic growth.' },
            { front: 'Contribute', back: 'Hissa qo\'shmoq', phonetic: '/kənˈtrɪb.juːt/', example: 'Trees contribute significantly to clean air.' },
            { front: 'Establish', back: 'Tashkil etmoq, yo\'lga qo\'ymoq', phonetic: '/ɪˈstæb.lɪʃ/', example: 'The organization established a new clinic.' }
        ]
    },
    {
        id: 'deck_advanced_c1_c2',
        title: '🔥 C1-C2 Band 7.5+ Academic Master',
        description: 'Band 7.5 va undan yuqori natijalar uchun ishlatiladigan oliy darajali so\'zlar.',
        level: 'C1-C2',
        badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        icon: '🔥',
        isPremiumOnly: true,
        cards: [
            { front: 'Exacerbate', back: 'Yomonlashtirmoq, og\'irlashtirmoq', phonetic: '/ɪɡˈzæs.ə.beɪt/', example: 'Deforestation exacerbates global climate change.' },
            { front: 'Ubiquitous', back: 'Hamma joyda uchraydigan, keng tarqalgan', phonetic: '/juːˈbɪk.wɪ.təs/', example: 'Smartphones have become ubiquitous in modern society.' },
            { front: 'Mitigate', back: 'Yumshatmoq, ta\'sirini kamaytirmoq', phonetic: '/ˈmɪt.ɪ.ɡeɪt/', example: 'Planting trees helps mitigate air pollution.' },
            { front: 'Plausible', back: 'Ishonchli, mantiqan to\'g\'ri', phonetic: '/ˈplɔː.zə.bəl/', example: 'The scientist offered a plausible explanation for the phenomenon.' },
            { front: 'Imperative', back: 'O\'ta muhim, kechiktirib bo\'lmaydigan', phonetic: '/ɪmˈper.ə.tɪv/', example: 'It is imperative that we reduce carbon emissions immediately.' },
            { front: 'Detrimental', back: 'Zararli, ziyon keltiradigan', phonetic: '/ˌdet.rɪˈmen.təl/', example: 'Smoking has a detrimental impact on human health.' },
            { front: 'Unprecedented', back: 'Mislisiz, avval kuzatilmagan', phonetic: '/ʌnˈpres.ɪ.den.tɪd/', example: 'The region experienced unprecedented rainfall this summer.' },
            { front: 'Disparity', back: 'Tengsizlik, farq', phonetic: '/dɪˈspær.ə.ti/', example: 'Economic disparity between urban and rural areas remains high.' }
        ]
    },
    {
        id: 'deck_ielts_collocations',
        title: '⚡ IELTS Academic Collocations',
        description: 'IELTS Writing va Speaking\'da Band 7+ olish uchun tayanch so\'z birikmalari.',
        level: 'IELTS Collocations',
        badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        icon: '⚡',
        isPremiumOnly: true,
        cards: [
            { front: 'Pose a threat to', back: 'Xavf tug\'dirmoq', phonetic: '/pəʊz ə θret tuː/', example: 'Global warming poses a severe threat to coastal cities.' },
            { front: 'Play a vital role in', back: 'Muhim rol o\'ynamoq', phonetic: '/pleɪ ə ˈvaɪ.təl rəʊl ɪn/', example: 'Education plays a vital role in national economic growth.' },
            { front: 'Bridge the gap between', back: 'Tafovutni kamaytirmoq, ko\'prik bo\'lmoq', phonetic: '/brɪdʒ ðə ɡæp bɪˈtwiːn/', example: 'Technology can help bridge the gap between rich and poor.' },
            { front: 'Raise awareness about', back: 'Xabardorlikni oshirmoq', phonetic: '/reɪz əˈweə.nəs əˈbaʊt/', example: 'Campaigns aim to raise public awareness about recycling.' },
            { front: 'Have a profound impact on', back: 'Chuqur salmoqli ta\'sir ko\'rsatmoq', phonetic: '/hæv ə prəˈfaʊnd ˈɪm.pækt ɒn/', example: 'Artificial intelligence will have a profound impact on future jobs.' }
        ]
    }
];
