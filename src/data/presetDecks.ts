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
        title: '🌱 A1-A2 Starter Vocabulary (1646 Kartochka)',
        description: 'Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so\'zlar.',
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        isPremiumOnly: false,
        cards: [
                {
                                "front": "Welcome",
                                "back": "Hush kelibsiz",
                                "phonetic": "/ˈwel.kəm/",
                                "example": "Welcome to our English learning community!"
                },
                {
                                "front": "Greetings",
                                "back": "Salomlashish, salomlar",
                                "phonetic": "/ˈɡriː.tɪŋz/",
                                "example": "Send my warm greetings to your family."
                },
                {
                                "front": "Apologize",
                                "back": "Kechirim so'ramoq",
                                "phonetic": "/əˈpɒl.ə.dʒaɪz/",
                                "example": "I apologize for being late to the lesson."
                },
                {
                                "front": "Pleasure",
                                "back": "Mamnuniyat, rohat",
                                "phonetic": "/ˈpleʒ.ə/",
                                "example": "It is a pleasure to meet you today."
                },
                {
                                "front": "Congratulate",
                                "back": "Tabriqlamoq",
                                "phonetic": "/kənˈɡrætʃ.ə.leɪt/",
                                "example": "We congratulate you on passing your exam."
                },
                {
                                "front": "Farewell",
                                "back": "Xayrlashuv",
                                "phonetic": "/ˌfeəˈwel/",
                                "example": "They held a farewell party for their teacher."
                },
                {
                                "front": "Excuse me",
                                "back": "Kechirasiz (murojaatda)",
                                "phonetic": "/ɪkˈskjuːz miː/",
                                "example": "Excuse me, where is the nearest bank?"
                },
                {
                                "front": "Good luck",
                                "back": "Omad yor bo'lsin",
                                "phonetic": "/ɡʊd lʌk/",
                                "example": "Good luck on your IELTS test tomorrow!"
                },
                {
                                "front": "Relative",
                                "back": "Qarindosh, xesh-aqrobo",
                                "phonetic": "/ˈrel.ə.tɪv/",
                                "example": "Many relatives gathered for the family reunion."
                },
                {
                                "front": "Neighbor",
                                "back": "Qo'shni",
                                "phonetic": "/ˈneɪ.bə/",
                                "example": "Our neighbor helped us carry the heavy boxes."
                },
                {
                                "front": "Relationship",
                                "back": "Munosabat, aloqa",
                                "phonetic": "/rɪˈleɪ.ʃən.ʃɪp/",
                                "example": "They maintain a strong, supportive friendship."
                },
                {
                                "front": "Generation",
                                "back": "Avlod, nasl",
                                "phonetic": "/ˌdʒen.əˈreɪ.ʃən/",
                                "example": "Three generations live together in that big house."
                },
                {
                                "front": "Ancestor",
                                "back": "Ajdod, ota-bobo",
                                "phonetic": "/ˈæn.ses.tə/",
                                "example": "Our ancestors built historic monuments in Bukhara."
                },
                {
                                "front": "Sibling",
                                "back": "Aka-uka yoki opa-singil",
                                "phonetic": "/ˈsɪb.lɪŋ/",
                                "example": "Do you have any brothers or sisters as siblings?"
                },
                {
                                "front": "Parent",
                                "back": "Ota-ona",
                                "phonetic": "/ˈpeə.rənt/",
                                "example": "Parents play a crucial role in raising children."
                },
                {
                                "front": "Marriage",
                                "back": "Nikoh, oila qurish",
                                "phonetic": "/ˈmær.ɪdʒ/",
                                "example": "They celebrated twenty years of happy marriage."
                },
                {
                                "front": "Midnight",
                                "back": "Yarim tun",
                                "phonetic": "/ˈmɪd.naɪt/",
                                "example": "The fireworks start exactly at midnight."
                },
                {
                                "front": "Noon",
                                "back": "Peshin vaqti (soat 12:00)",
                                "phonetic": "/nuːn/",
                                "example": "We usually have lunch at noon."
                },
                {
                                "front": "Schedule",
                                "back": "Kun tartibi, dars jadvali",
                                "phonetic": "/ˈʃed.juːl/",
                                "example": "Check your study schedule every morning."
                },
                {
                                "front": "Century",
                                "back": "Asr, yuz yillik",
                                "phonetic": "/ˈsen.tʃər.i/",
                                "example": "The monument was built in the fifteenth century."
                },
                {
                                "front": "Decade",
                                "back": "O'n yillik",
                                "phonetic": "/ˈdek.eɪd/",
                                "example": "Technology has advanced greatly over the past decade."
                },
                {
                                "front": "Fortnight",
                                "back": "Ikki hafta (14 kun)",
                                "phonetic": "/ˈfɔːt.naɪt/",
                                "example": "We are going on holiday for a fortnight."
                },
                {
                                "front": "Annual",
                                "back": "Yillik, har yili bo'ladigan",
                                "phonetic": "/ˈæn.ju.əl/",
                                "example": "The school holds an annual sports competition."
                },
                {
                                "front": "Temporary",
                                "back": "Vaqtinchalik",
                                "phonetic": "/ˈtem.pər.ər.i/",
                                "example": "This is just a temporary solution to the issue."
                },
                {
                                "front": "Quarter",
                                "back": "Chorak, to'rtdan bir",
                                "phonetic": "/ˈkwɔː.tə/",
                                "example": "The class starts at a quarter past nine."
                },
                {
                                "front": "Double",
                                "back": "Ikki baravar, juft",
                                "phonetic": "/ˈdʌb.əl/",
                                "example": "You can double your speed with regular practice."
                },
                {
                                "front": "Amount",
                                "back": "Miqdor, summa",
                                "phonetic": "/əˈmaʊnt/",
                                "example": "A large amount of water is saved by recycling."
                },
                {
                                "front": "Average",
                                "back": "O'rtacha ko'rsatkich",
                                "phonetic": "/ˈæv.ər.ɪdʒ/",
                                "example": "The average score in the test was seventy percent."
                },
                {
                                "front": "Distance",
                                "back": "Masofa, olislik",
                                "phonetic": "/ˈdɪs.təns/",
                                "example": "What is the distance between your home and school?"
                },
                {
                                "front": "Height",
                                "back": "Balandlik, boy",
                                "phonetic": "/haɪt/",
                                "example": "The building reaches a height of fifty meters."
                },
                {
                                "front": "Weight",
                                "back": "Vazn, og'irlik",
                                "phonetic": "/weɪt/",
                                "example": "Regular exercise helps maintain a healthy weight."
                },
                {
                                "front": "Capacity",
                                "back": "Sig'im, hajm",
                                "phonetic": "/kəˈpæs.ə.ti/",
                                "example": "The auditorium has a seating capacity of five hundred."
                },
                {
                                "front": "Delicious",
                                "back": "Lazzatli, shirin",
                                "phonetic": "/dɪˈlɪʃ.əs/",
                                "example": "Plov is a delicious Uzbek traditional dish."
                },
                {
                                "front": "Ingredient",
                                "back": "Tarkibiy masalliq",
                                "phonetic": "/ɪnˈɡriː.di.ənt/",
                                "example": "Fresh vegetables are key ingredients for salad."
                },
                {
                                "front": "Recipe",
                                "back": "Retsept, tayyorlash usuli",
                                "phonetic": "/ˈres.ɪ.pi/",
                                "example": "Follow the baking recipe step by step."
                },
                {
                                "front": "Nutrition",
                                "back": "Oziqlanish, taomlanish",
                                "phonetic": "/njuːˈtrɪʃ.ən/",
                                "example": "Good nutrition gives you energy for studying."
                },
                {
                                "front": "Beverage",
                                "back": "Ichimlik",
                                "phonetic": "/ˈbev.ər.ɪdʒ/",
                                "example": "Hot tea is a popular beverage in cold weather."
                },
                {
                                "front": "Breakfast",
                                "back": "Nonushta",
                                "phonetic": "/ˈbrek.fəst/",
                                "example": "Eating a nutritious breakfast boots morning energy."
                },
                {
                                "front": "Dessert",
                                "back": "Shirinlik, desert",
                                "phonetic": "/dɪˈzɜːt/",
                                "example": "We ordered ice cream for dessert after dinner."
                },
                {
                                "front": "Vegetarian",
                                "back": "Sabzavotli, vegetariancha",
                                "phonetic": "/ˌvedʒ.ɪˈteə.ri.ən/",
                                "example": "She prefers a healthy vegetarian diet."
                },
                {
                                "front": "Apartment",
                                "back": "Kvartira, xonadon",
                                "phonetic": "/əˈpɑːt.mənt/",
                                "example": "They rented a bright apartment in the city center."
                },
                {
                                "front": "Furniture",
                                "back": "Mebel, uy jihozlari",
                                "phonetic": "/ˈfɜː.nɪ.tʃə/",
                                "example": "The living room is furnished with modern furniture."
                },
                {
                                "front": "Appliance",
                                "back": "Maishiy texnika",
                                "phonetic": "/əˈplaɪ.əns/",
                                "example": "A refrigerator is an essential kitchen appliance."
                },
                {
                                "front": "Balcony",
                                "back": "Balkon, ayvon",
                                "phonetic": "/ˈbæl.kə.ni/",
                                "example": "We enjoy drinking morning tea on the balcony."
                },
                {
                                "front": "Basement",
                                "back": "Yerto'la, podval",
                                "phonetic": "/ˈbeɪs.mənt/",
                                "example": "They store old tools and bicycles in the basement."
                },
                {
                                "front": "Blanket",
                                "back": "Adyol, ko'rpa",
                                "phonetic": "/ˈblæŋ.kɪt/",
                                "example": "Put a warm blanket over the bed on cold nights."
                },
                {
                                "front": "Curtain",
                                "back": "Parda",
                                "phonetic": "/ˈkɜː.tən/",
                                "example": "Open the window curtains to let in daylight."
                },
                {
                                "front": "Mirror",
                                "back": "Ko'zgular, oyna",
                                "phonetic": "/ˈmɪr.ə/",
                                "example": "There is a large mirror in the hallway."
                },
                {
                                "front": "Destination",
                                "back": "Manzil, boradigan joy",
                                "phonetic": "/ˌdes.tɪˈneɪ.ʃən/",
                                "example": "Samarkand is a popular tourist destination."
                },
                {
                                "front": "Passenger",
                                "back": "Yo'lovchi",
                                "phonetic": "/ˈpæs.ən.dʒə/",
                                "example": "All passengers must fasten their seatbelts."
                },
                {
                                "front": "Vehicle",
                                "back": "Transport vositasi",
                                "phonetic": "/ˈvɪə.kəl/",
                                "example": "Bicycles and electric cars are eco-friendly vehicles."
                },
                {
                                "front": "Pedestrian",
                                "back": "Piyoda",
                                "phonetic": "/pəˈdes.tri.ən/",
                                "example": "Pedestrians should use the crosswalk to cross the street."
                },
                {
                                "front": "Neighborhood",
                                "back": "Mahalla, atrof-tevarak",
                                "phonetic": "/ˈneɪ.bə.hʊd/",
                                "example": "Our neighborhood is quiet, clean and friendly."
                },
                {
                                "front": "Suburb",
                                "back": "Shahar atrofi",
                                "phonetic": "/ˈsʌb.ɜːb/",
                                "example": "They moved to a peaceful suburb outside Tashkent."
                },
                {
                                "front": "Traffic",
                                "back": "Yo'l harakati, tirbandlik",
                                "phonetic": "/ˈtræf.ɪk/",
                                "example": "Heavy traffic delayed our bus during morning rush hour."
                },
                {
                                "front": "Departure",
                                "back": "Jo'nash, uchib ketish",
                                "phonetic": "/dɪˈpɑː.tʃə/",
                                "example": "Check the departure board for your flight time."
                },
                {
                                "front": "Environment",
                                "back": "Atrof-muhit, ekologiya",
                                "phonetic": "/ɪnˈvaɪ.rən.mənt/",
                                "example": "Protecting the environment is our collective duty."
                },
                {
                                "front": "Landscape",
                                "back": "Manzara, tabiat ko'rinishi",
                                "phonetic": "/ˈlænd.skeɪp/",
                                "example": "The mountain landscape was covered in green trees."
                },
                {
                                "front": "Atmosphere",
                                "back": "Atmosfera, muhit",
                                "phonetic": "/ˈæt.məs.fɪə/",
                                "example": "The warm lighting created a cozy atmosphere."
                },
                {
                                "front": "Forecast",
                                "back": "Ob-havo prognozi",
                                "phonetic": "/ˈfɔː.kɑːst/",
                                "example": "According to the forecast, it will rain tomorrow."
                },
                {
                                "front": "Creature",
                                "back": "Jonzot, tirik mavjudot",
                                "phonetic": "/ˈkriː.tʃə/",
                                "example": "Dolphins are intelligent ocean creatures."
                },
                {
                                "front": "Wildlife",
                                "back": "Yovvoyi tabiat",
                                "phonetic": "/ˈwaɪld.laɪf/",
                                "example": "The national park protects local wildlife species."
                },
                {
                                "front": "Disaster",
                                "back": "Tabiiy kutilmagan kulfat, falokat",
                                "phonetic": "/dɪˈzɑː.stə/",
                                "example": "Earthquakes are unpredictable natural disasters."
                },
                {
                                "front": "Climate",
                                "back": "Iqlim",
                                "phonetic": "/ˈklaɪ.mət/",
                                "example": "Central Asia has a continental climate with warm summers."
                },
                {
                                "front": "Symptom",
                                "back": "Alomat, belgi",
                                "phonetic": "/ˈsɪmp.təm/",
                                "example": "A high fever is a common symptom of flu."
                },
                {
                                "front": "Treatment",
                                "back": "Davolash, muolaja",
                                "phonetic": "/ˈtriːt.mənt/",
                                "example": "The doctor prescribed effective medical treatment."
                },
                {
                                "front": "Prevention",
                                "back": "Oldini olish, profilaktika",
                                "phonetic": "/prɪˈven.ʃən/",
                                "example": "Hand washing is key to disease prevention."
                },
                {
                                "front": "Recovery",
                                "back": "Sog'ayish, tiklanish",
                                "phonetic": "/rɪˈskʌv.ər.i/",
                                "example": "We wish you a full and speedy recovery."
                },
                {
                                "front": "Exercise",
                                "back": "Jismoniy mashq",
                                "phonetic": "/ˈek.sə.saɪz/",
                                "example": "Daily physical exercise boosts your immunity."
                },
                {
                                "front": "Pharmacy",
                                "back": "Dorixona",
                                "phonetic": "/ˈfɑː.mə.si/",
                                "example": "You can buy medicine at the local pharmacy."
                },
                {
                                "front": "Patient",
                                "back": "Bemor, sabrli",
                                "phonetic": "/ˈpeɪ.ʃənt/",
                                "example": "The doctor examined the patient carefully."
                },
                {
                                "front": "Diet",
                                "back": "Parhez, ovqatlanish rejasi",
                                "phonetic": "/ˈdaɪ.ət/",
                                "example": "A balanced diet provides essential vitamins."
                },
                {
                                "front": "Outfit",
                                "back": "Kiyim-kechak jamlanmasi",
                                "phonetic": "/ˈaʊt.fɪt/",
                                "example": "She chose a stylish outfit for the ceremony."
                },
                {
                                "front": "Garment",
                                "back": "Kiyim, ust-bosh",
                                "phonetic": "/ˈɡɑː.mənt/",
                                "example": "Cotton is used to manufacture soft garments."
                },
                {
                                "front": "Footwear",
                                "back": "Poyabzal",
                                "phonetic": "/ˈfʊt.weə/",
                                "example": "Wear comfortable footwear for long walks."
                },
                {
                                "front": "Accessory",
                                "back": "Akkessuar, bezak",
                                "phonetic": "/əkˈses.ər.i/",
                                "example": "A leather belt is a practical fashion accessory."
                },
                {
                                "front": "Uniform",
                                "back": "Forma, maxsus kiyim",
                                "phonetic": "/ˈjuː.nɪ.fɔːm/",
                                "example": "Students wear blue school uniforms every day."
                },
                {
                                "front": "Wardrobe",
                                "back": "Kiyim javoni, garderob",
                                "phonetic": "/ˈwɔː.drəʊb/",
                                "example": "He organized his winter coats in the wardrobe."
                },
                {
                                "front": "Material",
                                "back": "Mato, material",
                                "phonetic": "/məˈtɪə.ri.əl/",
                                "example": "Silk is a soft and luxurious textile material."
                },
                {
                                "front": "Fashionable",
                                "back": "Zamonaga mos, urfdagi",
                                "phonetic": "/ˈfæʃ.ən.ə.bəl/",
                                "example": "She wears fashionable glasses to school."
                },
                {
                                "front": "Profession",
                                "back": "Kasb, mutaxassislik",
                                "phonetic": "/prəˈfeʃ.ən/",
                                "example": "Teaching is a noble and rewarding profession."
                },
                {
                                "front": "Qualification",
                                "back": "Malaka, diplom",
                                "phonetic": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/",
                                "example": "She gained a professional writing qualification."
                },
                {
                                "front": "Employment",
                                "back": "Ish bilan ta'minlanganlik",
                                "phonetic": "/ɪmˈplɔɪ.mənt/",
                                "example": "The government aims to boost youth employment."
                },
                {
                                "front": "Colleague",
                                "back": "Hamkasb",
                                "phonetic": "/ˈkɒl.iːɡ/",
                                "example": "I collaborate closely with my office colleagues."
                },
                {
                                "front": "Salary",
                                "back": "Oylik maosh",
                                "phonetic": "/ˈsæl.ər.i/",
                                "example": "He receives a competitive monthly salary."
                },
                {
                                "front": "Curriculum",
                                "back": "O'quv dasturi",
                                "phonetic": "/kəˈrɪk.jə.ləm/",
                                "example": "The school curriculum includes computer coding."
                },
                {
                                "front": "Assignment",
                                "back": "Vazifa, topshiriq",
                                "phonetic": "/əˈsaɪn.mənt/",
                                "example": "Submit your writing assignment by Friday."
                },
                {
                                "front": "Certificate",
                                "back": "Sertifikat, guvohnoma",
                                "phonetic": "/səˈtɪf.ɪ.kət/",
                                "example": "You will receive an official completion certificate."
                },
                {
                                "front": "Tournament",
                                "back": "Musobaqa, turnir",
                                "phonetic": "/ˈtʊə.nə.mənt/",
                                "example": "Our football team won the regional tournament."
                },
                {
                                "front": "Entertainment",
                                "back": "Ko'ngilochar mashg'ulot",
                                "phonetic": "/ˌen.təˈteɪn.mənt/",
                                "example": "The festival offers music and dance entertainment."
                },
                {
                                "front": "Leisure",
                                "back": "Bo'sh vaqt, hordiq",
                                "phonetic": "/ˈleʒ.ə/",
                                "example": "He enjoys reading novels in his leisure time."
                },
                {
                                "front": "Champion",
                                "back": "Chempion, g'olib",
                                "phonetic": "/ˈtʃæm.pi.ən/",
                                "example": "She became the national chess champion at age sixteen."
                },
                {
                                "front": "Spectator",
                                "back": "Tomoshabin",
                                "phonetic": "/spekˈteɪ.tə/",
                                "example": "Thousands of spectators filled the stadium."
                },
                {
                                "front": "Exhibition",
                                "back": "Ko'rgazma",
                                "phonetic": "/ˌek.sɪˈbɪʃ.ən/",
                                "example": "We visited an art exhibition of modern paintings."
                },
                {
                                "front": "Orchestra",
                                "back": "Orkestr",
                                "phonetic": "/ˈɔː.kɪ.strə/",
                                "example": "The orchestra played beautiful classical music."
                },
                {
                                "front": "Recreation",
                                "back": "Hordiq chiqarish, dam olish",
                                "phonetic": "/ˌrek.riˈeɪ.ʃən/",
                                "example": "Parks provide spaces for public outdoor recreation."
                },
                {
                                "front": "Delighted",
                                "back": "Juda xursand, mamnun",
                                "phonetic": "/dɪˈlaɪ.tɪd/",
                                "example": "She was delighted to hear the good news."
                },
                {
                                "front": "Embarrassed",
                                "back": "Hijolatda qolgan, uyalgan",
                                "phonetic": "/ɪmˈbær.əst/",
                                "example": "He felt embarrassed when he forgot his lines."
                },
                {
                                "front": "Exhausted",
                                "back": "Haddan tashqari charchagan",
                                "phonetic": "/ɪɡˈzɔː.stɪd/",
                                "example": "After the long marathon, the runners were exhausted."
                },
                {
                                "front": "Frightened",
                                "back": "Qo'rqqan, cho'chigan",
                                "phonetic": "/ˈfraɪ.tənd/",
                                "example": "The loud thunder frightened the small puppy."
                },
                {
                                "front": "Jealous",
                                "back": "Rashkchi, hasadg'oy",
                                "phonetic": "/ˈdʒel.əs/",
                                "example": "Avoid being jealous of other people's achievements."
                },
                {
                                "front": "Satisfied",
                                "back": "Qoniqqan, mamnun",
                                "phonetic": "/ˈsæt.ɪs.faɪd/",
                                "example": "We are satisfied with the survey results."
                },
                {
                                "front": "Surprised",
                                "back": "Hayron qolgan",
                                "phonetic": "/səˈpraɪzd/",
                                "example": "She was surprised by the unexpected birthday gift."
                },
                {
                                "front": "Sympathetic",
                                "back": "Hamdard, xayrixoh",
                                "phonetic": "/ˌsɪm.pəˈθet.ɪk/",
                                "example": "The teacher was sympathetic when I felt unwell."
                },
                {
                                "front": "Furthermore",
                                "back": "Bundan tashqari, qolaversa",
                                "phonetic": "/ˌfɜː.ðəˈmɔː/",
                                "example": "The course is free; furthermore, books are provided."
                },
                {
                                "front": "However",
                                "back": "Biroq, lekin",
                                "phonetic": "/haʊˈev.ə/",
                                "example": "The test was hard; however, everyone passed."
                },
                {
                                "front": "Therefore",
                                "back": "Shu sababli, demak",
                                "phonetic": "/ˈðeə.fɔː/",
                                "example": "She practiced daily; therefore, her score improved."
                },
                {
                                "front": "Meanwhile",
                                "back": "Shu asnoda, bu orada",
                                "phonetic": "/ˈmiːn.waɪl/",
                                "example": "Boil the water; meanwhile, chop the vegetables."
                },
                {
                                "front": "Despite",
                                "back": "Qaramasdan, qaramay",
                                "phonetic": "/dɪˈspaɪt/",
                                "example": "They enjoyed the walk despite the rainy weather."
                },
                {
                                "front": "Although",
                                "back": "Garchi, bo'lsada",
                                "phonetic": "/ɔːlˈðəʊ/",
                                "example": "Although it was cold, we went for a swim."
                },
                {
                                "front": "In addition",
                                "back": "Qo'shimcha ravishda",
                                "phonetic": "/ɪn əˈdɪʃ.ən/",
                                "example": "In addition to English, she speaks French fluently."
                },
                {
                                "front": "Otherwise",
                                "back": "Aks holda, bo'lmasa",
                                "phonetic": "/ˈʌð.ə.waɪz/",
                                "example": "Hurry up; otherwise, we will miss the train."
                },
                {
                                "front": "Accept",
                                "back": "Qabul qilmoq, rozi bo'lmoq",
                                "phonetic": "/əkˈsept/",
                                "example": "She accepted the scholarship offer with joy."
                },
                {
                                "front": "Achieve",
                                "back": "Erishmoq, qo'lga kiritmoq",
                                "phonetic": "/əˈtʃiːv/",
                                "example": "Hard work helps you achieve your dreams."
                },
                {
                                "front": "Admire",
                                "back": "Havas qilmoq, qoyil qolmoq",
                                "phonetic": "/ədˈmaɪə/",
                                "example": "I admire her dedication to learning new skills."
                },
                {
                                "front": "Admit",
                                "back": "Tan olmoq",
                                "phonetic": "/ədˈmɪt/",
                                "example": "He admitted making a mistake on the calculation."
                },
                {
                                "front": "Advise",
                                "back": "Maslahat bermoq",
                                "phonetic": "/ədˈvaɪz/",
                                "example": "Tutors advise students to review daily flashcards."
                },
                {
                                "front": "Afford",
                                "back": "Qurbi yetmoq, sotib ola bilmoq",
                                "phonetic": "/əˈfɔːd/",
                                "example": "We can afford to buy a new study desk now."
                },
                {
                                "front": "Agree",
                                "back": "Rozi bo'lmoq, qo'shilmoq",
                                "phonetic": "/əˈɡriː/",
                                "example": "I agree with your suggestion about essay structure."
                },
                {
                                "front": "Allow",
                                "back": "Ruxsat bermoq",
                                "phonetic": "/əˈlaʊ/",
                                "example": "Libraries allow quiet study areas for students."
                },
                {
                                "front": "Announce",
                                "back": "E'lon qilmoq",
                                "phonetic": "/əˈnaʊns/",
                                "example": "The host announced the winner of the competition."
                },
                {
                                "front": "Appear",
                                "back": "Ko'rinmoq, paydo bo'lmoq",
                                "phonetic": "/əˈpɪə/",
                                "example": "New features appear on the app after updating."
                },
                {
                                "front": "Apply",
                                "back": "Hujjat topshirmoq, qo'llamoq",
                                "phonetic": "/əˈplaɪ/",
                                "example": "Apply online before the official deadline."
                },
                {
                                "front": "Appreciate",
                                "back": "Qadrlamoq, minnatdor bo'lmoq",
                                "phonetic": "/əˈpriː.ʃi.eɪt/",
                                "example": "I appreciate your help with my project."
                },
                {
                                "front": "Approve",
                                "back": "Ma'qullamoq, tasdiqlamoq",
                                "phonetic": "/əˈpruːv/",
                                "example": "The board approved the new building design."
                },
                {
                                "front": "Arrange",
                                "back": "Tashkillashtirmoq, tartibga solmoq",
                                "phonetic": "/əˈreɪndʒ/",
                                "example": "Let's arrange our notes in chronological order."
                },
                {
                                "front": "Arrive",
                                "back": "Yetib kelmoq",
                                "phonetic": "/əˈraɪv/",
                                "example": "The express train will arrive in ten minutes."
                },
                {
                                "front": "Assist",
                                "back": "Yordam bermoq, ko'maklashmoq",
                                "phonetic": "/əˈsɪst/",
                                "example": "Lab assistants help students during experiments."
                },
                {
                                "front": "Assume",
                                "back": "Taxmin qilmoq, deb o'ylamoq",
                                "phonetic": "/əˈsjuːm/",
                                "example": "Do not assume the test will be easy without prep."
                },
                {
                                "front": "Attach",
                                "back": "Biriktirmoq, ilova qilmoq",
                                "phonetic": "/əˈtætʃ/",
                                "example": "Please attach your resume to the email."
                },
                {
                                "front": "Attempt",
                                "back": "Harakat qilib ko'rmoq, urinmoq",
                                "phonetic": "/əˈtempt/",
                                "example": "She attempted to solve the puzzle in five minutes."
                },
                {
                                "front": "Attend",
                                "back": "Qatnashmoq, borib turmoq",
                                "phonetic": "/əˈtend/",
                                "example": "Students must attend all laboratory sessions."
                },
                {
                                "front": "Attract",
                                "back": "Jalb etmoq, o'ziga tortmoq",
                                "phonetic": "/əˈtrækt/",
                                "example": "Bright colors attract the attention of children."
                },
                {
                                "front": "Avoid",
                                "back": "Qochmoq, chetlab o'tmoq",
                                "phonetic": "/əˈvɔɪd/",
                                "example": "Avoid spending too much time on social media."
                },
                {
                                "front": "Become",
                                "back": "Bo'lmoq, aylanmoq",
                                "phonetic": "/bɪˈkʌm/",
                                "example": "Practice helps you become a fluent speaker."
                },
                {
                                "front": "Beg",
                                "back": "Yalinmoq, so'ramoq",
                                "phonetic": "/beɡ/",
                                "example": "The child begged for one more story before bed."
                },
                {
                                "front": "Begin",
                                "back": "Boshlamoq",
                                "phonetic": "/bɪˈɡɪn/",
                                "example": "Lessons begin promptly at eight thirty in the morning."
                },
                {
                                "front": "Behave",
                                "back": "O'zini tutmoq, odob saqlamoq",
                                "phonetic": "/bɪˈheɪv/",
                                "example": "Children are taught to behave politely at school."
                },
                {
                                "front": "Believe",
                                "back": "Ishonmoq",
                                "phonetic": "/bɪˈliːv/",
                                "example": "Believe in your ability to master any subject."
                },
                {
                                "front": "Belong",
                                "back": "Tegishli bo'lmoq",
                                "phonetic": "/bɪˈlɒŋ/",
                                "example": "These books belong to the university library."
                },
                {
                                "front": "Borrow",
                                "back": "Qarzga olmoq",
                                "phonetic": "/ˈbɒr.əʊ/",
                                "example": "Can I borrow your ruler for a moment?"
                },
                {
                                "front": "Breathe",
                                "back": "Nafas olmoq",
                                "phonetic": "/briːð/",
                                "example": "Take a deep breath to calm your exam nerves."
                },
                {
                                "front": "Build",
                                "back": "Qurmoq, bino etmoq",
                                "phonetic": "/bɪld/",
                                "example": "Engineers build durable bridges across rivers."
                },
                {
                                "front": "Calculate",
                                "back": "Hisoblamoq",
                                "phonetic": "/ˈkæl.kjə.leɪt/",
                                "example": "Use a calculator to calculate the total budget."
                },
                {
                                "front": "Cancel",
                                "back": "Bekor qilmoq",
                                "phonetic": "/ˈkæn.səl/",
                                "example": "They cancelled the outdoor match due to rain."
                },
                {
                                "front": "Capture",
                                "back": "Ushlamoq, tasvirga olmoq",
                                "phonetic": "/ˈkæp.tʃə/",
                                "example": "The photographer captured the sunset beautifully."
                },
                {
                                "front": "Cause",
                                "back": "Sabab bo'lmoq",
                                "phonetic": "/kɔːz/",
                                "example": "Careless driving can cause traffic accidents."
                },
                {
                                "front": "Celebrate",
                                "back": "Nishonlamoq",
                                "phonetic": "/ˈsel.ə.breɪt/",
                                "example": "We gather to celebrate family birthdays together."
                },
                {
                                "front": "Challenge",
                                "back": "Chaqiriq tashlamoq, sinamoq",
                                "phonetic": "/ˈtʃæl.ɪndʒ/",
                                "example": "New projects challenge our problem-solving skills."
                },
                {
                                "front": "Change",
                                "back": "O'zgartirmoq, o'zgarmoq",
                                "phonetic": "/tʃeɪndʒ/",
                                "example": "Technology changes the way we study and work."
                },
                {
                                "front": "Choose",
                                "back": "Tanlamoq",
                                "phonetic": "/tʃuːz/",
                                "example": "Choose the correct option from the drop-down menu."
                },
                {
                                "front": "Claim",
                                "back": "Da'vo qilmoq, ta'kidlamoq",
                                "phonetic": "/kleɪm/",
                                "example": "The author claims that reading boosts memory."
                },
                {
                                "front": "Collect",
                                "back": "Yig'moq, to'plamoq",
                                "phonetic": "/kəˈlekt/",
                                "example": "Students collect research data for their thesis."
                },
                {
                                "front": "Combine",
                                "back": "Birlashtirmoq, qo'shmoq",
                                "phonetic": "/kəmˈbaɪn/",
                                "example": "Combine exercise with good nutrition for health."
                },
                {
                                "front": "Command",
                                "back": "Buyurmoq, boshqarmoq",
                                "phonetic": "/kəˈmɑːnd/",
                                "example": "The general commanded the troops to halt."
                },
                {
                                "front": "Communicate",
                                "back": "Muloqot qilmoq",
                                "phonetic": "/kəˈmjuː.nɪ.keɪt/",
                                "example": "English helps people communicate across borders."
                },
                {
                                "front": "Compare",
                                "back": "Taqqoslamoq",
                                "phonetic": "/kəmˈpeə/",
                                "example": "Compare the advantages of both study methods."
                },
                {
                                "front": "Compete",
                                "back": "Musobaqalashmoq, bellashmoq",
                                "phonetic": "/kəmˈpiːt/",
                                "example": "Athletes compete for gold medals in the games."
                },
                {
                                "front": "Complain",
                                "back": "Shikoyat qilmoq",
                                "phonetic": "/kəmˈpleɪn/",
                                "example": "Customers complain if service is delayed."
                },
                {
                                "front": "Complete",
                                "back": "Tugatmoq, to'ldirmoq",
                                "phonetic": "/kəmˈpliːt/",
                                "example": "Complete the form with your personal details."
                },
                {
                                "front": "Concentrate",
                                "back": "Diqqatni jamlamoq",
                                "phonetic": "/ˈkɒn.sən.treɪt/",
                                "example": "Quiet environments help you concentrate on reading."
                },
                {
                                "front": "Conclude",
                                "back": "Xulosa qilmoq",
                                "phonetic": "/kənˈkluːd/",
                                "example": "The essay concludes with a summary of key points."
                },
                {
                                "front": "Confirm",
                                "back": "Tasdiqlamoq",
                                "phonetic": "/kənˈfɜːm/",
                                "example": "Confirm your email address by clicking the link."
                },
                {
                                "front": "Connect",
                                "back": "Bog'lamoq, ulamoq",
                                "phonetic": "/kəˈnekt/",
                                "example": "Connect to the Wi-Fi network to access notes."
                },
                {
                                "front": "Consider",
                                "back": "O'ylab ko'rmoq, hisoblamoq",
                                "phonetic": "/kənˈsɪd.ə/",
                                "example": "Consider all options before taking a final decision."
                },
                {
                                "front": "Consist",
                                "back": "Tashkil topmoq, iborat bo'lmoq",
                                "phonetic": "/kənˈsɪst/",
                                "example": "The exam consists of three main modules."
                },
                {
                                "front": "Construct",
                                "back": "Qurmoq, bino qilmoq",
                                "phonetic": "/kənˈstrʌkt/",
                                "example": "Workers construct high-rise modern apartments."
                },
                {
                                "front": "Contain",
                                "back": "O'z ichiga olmoq, saqlamoq",
                                "phonetic": "/kənˈteɪn/",
                                "example": "Fresh fruits contain essential vitamins."
                },
                {
                                "front": "Continue",
                                "back": "Davom ettirmoq",
                                "phonetic": "/kənˈtɪn.juː/",
                                "example": "Continue practicing until you feel comfortable."
                },
                {
                                "front": "Contribute",
                                "back": "Hissa qo'shmoq",
                                "phonetic": "/kənˈtrɪb.juːt/",
                                "example": "Every member contributes to group success."
                },
                {
                                "front": "Control",
                                "back": "Boshqarmoq, nazorat qilmoq",
                                "phonetic": "/kənˈtrəʊl/",
                                "example": "Learn to control your time during tests."
                },
                {
                                "front": "Convert",
                                "back": "O'girmoq, aylantirmoq",
                                "phonetic": "/kənˈvɜːt/",
                                "example": "Convert currencies using online banking apps."
                },
                {
                                "front": "Convince",
                                "back": "Ishontirmoq",
                                "phonetic": "/kənˈvɪns/",
                                "example": "She convinced her parents to let her travel."
                },
                {
                                "front": "Create",
                                "back": "Yaratmoq",
                                "phonetic": "/kriˈeɪt/",
                                "example": "Artists create inspiring paintings."
                },
                {
                                "front": "Damage",
                                "back": "Zarar yetkazmoq",
                                "phonetic": "/ˈdæm.ɪdʒ/",
                                "example": "Storms can damage electric power lines."
                },
                {
                                "front": "Decide",
                                "back": "Qaror qilmoq",
                                "phonetic": "/dɪˈsaɪd/",
                                "example": "Decide on your daily goals every morning."
                },
                {
                                "front": "Declare",
                                "back": "E'lon qilmoq, bildirmoq",
                                "phonetic": "/dɪˈkleər/",
                                "example": "Customs officers ask if you have goods to declare."
                },
                {
                                "front": "Decorate",
                                "back": "Bezatmoq, pardozlamoq",
                                "phonetic": "/ˈdek.ə.reɪt/",
                                "example": "They decorate the house for New Year celebrations."
                },
                {
                                "front": "Decrease",
                                "back": "Kamaytirmoq",
                                "phonetic": "/dɪˈkriːs/",
                                "example": "Noise levels decrease late in the evening."
                },
                {
                                "front": "Define",
                                "back": "Ta'riflamoq, belgilamoq",
                                "phonetic": "/dɪˈfaɪn/",
                                "example": "Dictionaries define the precise meaning of words."
                },
                {
                                "front": "Delay",
                                "back": "Kechiktirmoq",
                                "phonetic": "/dɪˈleɪ/",
                                "example": "Bad weather delayed the takeoff of our flight."
                },
                {
                                "front": "Deliver",
                                "back": "Yetkazib bermoq",
                                "phonetic": "/dɪˈlɪv.ə/",
                                "example": "Couriers deliver packages directly to your door."
                },
                {
                                "front": "Demand",
                                "back": "Talab qilmoq",
                                "phonetic": "/dɪˈmɑːnd/",
                                "example": "Modern jobs demand digital and language skills."
                },
                {
                                "front": "Demonstrate",
                                "back": "Ko'rsatib bermoq, namoyish etmoq",
                                "phonetic": "/ˈdem.ən.streɪt/",
                                "example": "The teacher demonstrated the chemistry experiment."
                },
                {
                                "front": "Depend",
                                "back": "Bog'liq bo'lmoq",
                                "phonetic": "/dɪˈpend/",
                                "example": "Exam scores depend on effort and revision."
                },
                {
                                "front": "Describe",
                                "back": "Tasvirlamoq",
                                "phonetic": "/dɪˈskraɪb/",
                                "example": "Describe your favorite childhood memory."
                },
                {
                                "front": "Design",
                                "back": "Loyihalashtirmoq, yaratmoq",
                                "phonetic": "/dɪˈzaɪn/",
                                "example": "Engineers design safe and modern buildings."
                },
                {
                                "front": "Destroy",
                                "back": "Yo'q qilmoq, vayron etmoq",
                                "phonetic": "/dɪˈstrɔɪ/",
                                "example": "Fires destroy large areas of forest land."
                },
                {
                                "front": "Detail",
                                "back": "Batafsil tushuntirmoq",
                                "phonetic": "/ˈdiː.teɪl/",
                                "example": "The manual details step-by-step instructions."
                },
                {
                                "front": "Develop",
                                "back": "Rivojlantirmoq",
                                "phonetic": "/dɪˈvel.əp/",
                                "example": "Students develop critical thinking in debate club."
                },
                {
                                "front": "Disappear",
                                "back": "Yo'qolmoq, g'oyib bo'lmoq",
                                "phonetic": "/ˌdɪs.əˈpɪə/",
                                "example": "The fog disappeared as the sun rose higher."
                },
                {
                                "front": "Discover",
                                "back": "Kashf etmoq",
                                "phonetic": "/dɪˈskʌv.ə/",
                                "example": "Researchers discover new medical treatments."
                },
                {
                                "front": "Discuss",
                                "back": "Muhokama qilmoq",
                                "phonetic": "/dɪˈskʌs/",
                                "example": "Discuss essay topics in small study groups."
                },
                {
                                "front": "Display",
                                "back": "Namoyish qilmoq, ko'rsatmoq",
                                "phonetic": "/dɪˈspleɪ/",
                                "example": "Screens display real-time arrival information."
                },
                {
                                "front": "Distribute",
                                "back": "Tarqatmoq",
                                "phonetic": "/dɪˈstrɪb.juːt/",
                                "example": "Volunteers distribute warm food to families."
                },
                {
                                "front": "Divide",
                                "back": "Bo'lmoq, ajratmoq",
                                "phonetic": "/dɪˈvaɪd/",
                                "example": "Divide your study time into short focused intervals."
                },
                {
                                "front": "Doubt",
                                "back": "Shubhalanmoq",
                                "phonetic": "/daʊt/",
                                "example": "Never doubt your capacity to learn and grow."
                },
                {
                                "front": "Earn",
                                "back": "Ishlab topmoq, qozonmoq",
                                "phonetic": "/ɜːn/",
                                "example": "Hard work allows you to earn respect and income."
                },
                {
                                "front": "Educate",
                                "back": "Ta'lim bermoq, tarbiyalamoq",
                                "phonetic": "/ˈedʒ.u.keɪt/",
                                "example": "Schools educate young minds for future roles."
                },
                {
                                "front": "Embarrass",
                                "back": "Hijolat qilmoq, uyaltirmoq",
                                "phonetic": "/ɪmˈbær.əs/",
                                "example": "Do not let minor mistakes embarrass you in public."
                },
                {
                                "front": "Emerge",
                                "back": "Namoyon bo'lmoq, chiqmoq",
                                "phonetic": "/ɪˈmɜːdʒ/",
                                "example": "New technologies emerge every single year."
                },
                {
                                "front": "Encourage",
                                "back": "Ruhlantirmoq",
                                "phonetic": "/ɪnˈkʌr.ɪdʒ/",
                                "example": "Parents encourage their children to read books."
                },
                {
                                "front": "Enjoy",
                                "back": "Huzurlanmoq, zavqlanmoq",
                                "phonetic": "/ɪnˈdʒɔɪ/",
                                "example": "I enjoy listening to podcasts while commuting."
                },
                {
                                "front": "Entertain",
                                "back": "Xushnud etmoq, ko'ngil olmoq",
                                "phonetic": "/ˌen.təˈteɪn/",
                                "example": "Comedians entertain the audience with funny acts."
                },
                {
                                "front": "Escape",
                                "back": "Qochib qutulmoq",
                                "phonetic": "/ɪˈskeɪp/",
                                "example": "Birds escape cold climates by flying south."
                },
                {
                                "front": "Establish",
                                "back": "Tashkil etmoq, asos solmoq",
                                "phonetic": "/ɪˈstæb.lɪʃ/",
                                "example": "The university was established in 1920."
                },
                {
                                "front": "Evaluate",
                                "back": "Baho bermoq",
                                "phonetic": "/ɪˈvæl.ju.eɪt/",
                                "example": "Examiners evaluate fluency and coherence."
                },
                {
                                "front": "Examine",
                                "back": "Tekshirmoq, imtihon qilmoq",
                                "phonetic": "/ɪɡˈzæm.ɪn/",
                                "example": "Doctors examine patients to diagnose illnesses."
                },
                {
                                "front": "Exchange",
                                "back": "Almashtirmoq, fikr almashmoq",
                                "phonetic": "/ɪksˈtʃeɪndʒ/",
                                "example": "Students exchange study tips before exams."
                },
                {
                                "front": "Exist",
                                "back": "Mavjud bo'lmoq, yashamoq",
                                "phonetic": "/ɪɡˈzɪst/",
                                "example": "Water is necessary for life to exist on Earth."
                },
                {
                                "front": "Expand",
                                "back": "Kengaytirmoq, kattalashtirmoq",
                                "phonetic": "/ɪkˈspænd/",
                                "example": "Reading helps expand your active vocabulary."
                },
                {
                                "front": "Expect",
                                "back": "Kutmoq, umid qilmoq",
                                "phonetic": "/ɪkˈspekt/",
                                "example": "We expect good news from the exam committee."
                },
                {
                                "front": "Explain",
                                "back": "Tushuntirmoq",
                                "phonetic": "/ɪkˈspleɪn/",
                                "example": "Tutors explain rules with clear visual examples."
                },
                {
                                "front": "Explore",
                                "back": "Tadqiq qilmoq, o'rganib chiqmoq",
                                "phonetic": "/ɪkˈsplɔː/",
                                "example": "Travelers love to explore historic old cities."
                },
                {
                                "front": "Express",
                                "back": "Iroda etmoq, bildirmoq",
                                "phonetic": "/ɪkˈspres/",
                                "example": "Art lets people express their innermost thoughts."
                },
                {
                                "front": "Extend",
                                "back": "Uzaytirmoq, cho'zmoq",
                                "phonetic": "/ɪkˈstend/",
                                "example": "The school decided to extend the project deadline."
                },
                {
                                "front": "Fail",
                                "back": "Muvaffaqiyatsizlikka uchramoq",
                                "phonetic": "/feɪl/",
                                "example": "Failure is just a stepping stone to success."
                },
                {
                                "front": "Fear",
                                "back": "Qo'rqmoq",
                                "phonetic": "/fɪə/",
                                "example": "Do not fear making mistakes when practicing speaking."
                },
                {
                                "front": "Figure out",
                                "back": "Tushunib yetmoq, yechim topmoq",
                                "phonetic": "/ˈfɪɡ.ər aʊt/",
                                "example": "I need to figure out how to solve this equation."
                },
                {
                                "front": "Fill",
                                "back": "To'ldirmoq",
                                "phonetic": "/fɪl/",
                                "example": "Fill the water bottle before starting your workout."
                },
                {
                                "front": "Finish",
                                "back": "Tugatmoq",
                                "phonetic": "/ˈfɪn.ɪʃ/",
                                "example": "Finish your assignment before going out to play."
                },
                {
                                "front": "Focus",
                                "back": "Diqqatni qaratmoq",
                                "phonetic": "/ˈfəʊ.kəs/",
                                "example": "Focus on your goals and avoid distractions."
                },
                {
                                "front": "Follow",
                                "back": "Egasida yurmoq, rioya qilmoq",
                                "phonetic": "/ˈfɒl.əʊ/",
                                "example": "Follow the instructions carefully during the test."
                },
                {
                                "front": "Forgive",
                                "back": "Kechirmoq",
                                "phonetic": "/fəˈɡɪv/",
                                "example": "Forgiving mistakes creates peace in relationships."
                },
                {
                                "front": "Gather",
                                "back": "To'plamoq, yig'ilmoq",
                                "phonetic": "/ˈɡæð.ə/",
                                "example": "Students gather in the hall for the assembly."
                },
                {
                                "front": "Generate",
                                "back": "Yaratmoq, hosil qilmoq",
                                "phonetic": "/ˈdʒen.ə.reɪt/",
                                "example": "Solar panels generate clean electrical energy."
                },
                {
                                "front": "Govern",
                                "back": "Boshqarmoq, idora etmoq",
                                "phonetic": "/ˈɡʌv.ən/",
                                "example": "The council governs local municipal services."
                },
                {
                                "front": "Graduate",
                                "back": "Bitirmoq (o'quv yurti)",
                                "phonetic": "/ˈɡrædʒ.u.eɪt/",
                                "example": "She will graduate from university next summer."
                },
                {
                                "front": "Guarantee",
                                "back": "Kafolatlamoq",
                                "phonetic": "/ˌɡær.ənˈtiː/",
                                "example": "Practice does not guarantee perfection, but builds progress."
                },
                {
                                "front": "Handle",
                                "back": "Uddalamoq, ko'tarmoq",
                                "phonetic": "/ˈhæn.dəl/",
                                "example": "She knows how to handle stress during exam week."
                },
                {
                                "front": "Happen",
                                "back": "Yuz bermoq, sodir bo'lmoq",
                                "phonetic": "/ˈhæp.ən/",
                                "example": "Accidents happen when drivers lose focus."
                },
                {
                                "front": "Help",
                                "back": "Yordam bermoq",
                                "phonetic": "/help/",
                                "example": "Friends help each other during difficult times."
                },
                {
                                "front": "Hesitate",
                                "back": "Ikkilanmoq, shubhalanmoq",
                                "phonetic": "/ˈhez.ɪ.teɪt/",
                                "example": "Do not hesitate to ask questions in class."
                },
                {
                                "front": "Identify",
                                "back": "Aniqlamoq, tanimoq",
                                "phonetic": "/aɪˈden.tɪ.faɪ/",
                                "example": "Identify key keywords in the reading passage."
                },
                {
                                "front": "Ignore",
                                "back": "E'tiborsiz qoldirmoq",
                                "phonetic": "/ɪɡˈnɔː/",
                                "example": "Ignore minor distractions while working."
                },
                {
                                "front": "Illustrate",
                                "back": "Tasvirlamoq, ko'rgazmali tushuntirmoq",
                                "phonetic": "/ˈɪl.ə.streɪt/",
                                "example": "Diagrams illustrate how the heart pumps blood."
                },
                {
                                "front": "Imagine",
                                "back": "Tasavvur qilmoq",
                                "phonetic": "/ɪˈmædʒ.ɪn/",
                                "example": "Imagine living in a historic European city."
                },
                {
                                "front": "Impact",
                                "back": "Ta'sir ko'rsatmoq",
                                "phonetic": "/ˈɪm.pækt/",
                                "example": "Daily study habits directly impact your final score."
                },
                {
                                "front": "Implement",
                                "back": "Joriy etmoq, amalga oshirmoq",
                                "phonetic": "/ˈɪm.plɪ.ment/",
                                "example": "Schools implement new interactive teaching software."
                },
                {
                                "front": "Imply",
                                "back": "Nazarda tutmoq, shama qilmoq",
                                "phonetic": "/ɪmˈplaɪ/",
                                "example": "Her tone implied that she was dissatisfied."
                },
                {
                                "front": "Improve",
                                "back": "Rivojlantirmoq",
                                "phonetic": "/ɪmˈpruːv/",
                                "example": "Reading books will improve your vocabulary."
                },
                {
                                "front": "Include",
                                "back": "O'z ichiga olmoq",
                                "phonetic": "/ɪnˈkluːd/",
                                "example": "The fee includes breakfast and hotel stay."
                },
                {
                                "front": "Increase",
                                "back": "Oshirmoq",
                                "phonetic": "/ɪnˈkriːs/",
                                "example": "The store plans to increase sales next quarter."
                },
                {
                                "front": "Indicate",
                                "back": "Ko'rsatmoq, bildirmoq",
                                "phonetic": "/ˈɪn.dɪ.keɪt/",
                                "example": "Red signs indicate danger or emergency exits."
                },
                {
                                "front": "Inform",
                                "back": "Xabar qilmoq",
                                "phonetic": "/ɪnˈfɔːm/",
                                "example": "Inform the manager if you need extra resources."
                },
                {
                                "front": "Inherit",
                                "back": "Meros qilib olmoq",
                                "phonetic": "/ɪnˈher.ɪt/",
                                "example": "She inherited her grandmother's vintage watch."
                },
                {
                                "front": "Initiate",
                                "back": "Boshlamoq, yo'lga qo'ymoq",
                                "phonetic": "/ɪˈnɪʃ.i.eɪt/",
                                "example": "The city initiated a recycling drive this spring."
                },
                {
                                "front": "Injure",
                                "back": "Jarohatlamoq",
                                "phonetic": "/ˈɪn.dʒə/",
                                "example": "Wear helmets to prevent injuring your head."
                },
                {
                                "front": "Insist",
                                "back": "Taqaza qilmoq, oyog'ini tirab olmoq",
                                "phonetic": "/ɪnˈsɪst/",
                                "example": "He insisted on paying for the coffee."
                },
                {
                                "front": "Inspect",
                                "back": "Tekshirib chiqmoq",
                                "phonetic": "/ɪnˈspekt/",
                                "example": "Engineers inspect safety equipment every month."
                },
                {
                                "front": "Inspire",
                                "back": "Ilhomlantirmoq",
                                "phonetic": "/ɪnˈspaɪə/",
                                "example": "Great teachers inspire students to achieve greatness."
                },
                {
                                "front": "Install",
                                "back": "O'rnatmoq, joylashtirmoq",
                                "phonetic": "/ɪnˈstɔːl/",
                                "example": "Install the latest version of the app for new features."
                },
                {
                                "front": "Instruct",
                                "back": "Ko'rsatma bermoq, o'rgatmoq",
                                "phonetic": "/ɪnˈstrʌkt/",
                                "example": "Flight attendants instruct passengers on safety."
                },
                {
                                "front": "Insult",
                                "back": "Haqorat qilmoq",
                                "phonetic": "/ɪnˈsʌlt/",
                                "example": "Never insult others during debates."
                },
                {
                                "front": "Intend",
                                "back": "Niyat qilmoq",
                                "phonetic": "/ɪnˈtend/",
                                "example": "I intend to complete the course by December."
                },
                {
                                "front": "Interact",
                                "back": "O'zaro muloqot qilmoq",
                                "phonetic": "/ˌɪn.təˈrækt/",
                                "example": "Students interact naturally in group activities."
                },
                {
                                "front": "Interrupt",
                                "back": "Xalaqit bermoq, gapini bo'lmoq",
                                "phonetic": "/ˌɪn.təˈrʌpt/",
                                "example": "Do not interrupt the speaker while they are talking."
                },
                {
                                "front": "Introduce",
                                "back": "Tanishtirmoq",
                                "phonetic": "/ˌɪn.trəˈdjuːs/",
                                "example": "Let me introduce my new classmate to you."
                },
                {
                                "front": "Invent",
                                "back": "Kashf etmoq, o'ylab topmoq",
                                "phonetic": "/ɪnˈvent/",
                                "example": "Edison invented the practical incandescent light bulb."
                },
                {
                                "front": "Invest",
                                "back": "Sarmoya kiritmoq",
                                "phonetic": "/ɪnˈvest/",
                                "example": "Investing in education yields lifelong benefits."
                },
                {
                                "front": "Investigate",
                                "back": "Tadqiq etmoq, surushtirmoq",
                                "phonetic": "/ɪnˈves.tɪ.ɡeɪt/",
                                "example": "Detectives investigate unsolved mystery cases."
                },
                {
                                "front": "Invite",
                                "back": "Taklif qilmoq",
                                "phonetic": "/ɪnˈvaɪt/",
                                "example": "We invited our friends over for dinner."
                },
                {
                                "front": "Involve",
                                "back": "Jalb etmoq, qamrab olmoq",
                                "phonetic": "/ɪnˈvɒlv/",
                                "example": "The project involves creative teamwork."
                },
                {
                                "front": "Issue",
                                "back": "Tarqatmoq, berib yubormoq",
                                "phonetic": "/ˈɪʃ.uː/",
                                "example": "The library issues digital reader cards."
                },
                {
                                "front": "Join",
                                "back": "Qo'shilmoq, a'zo bo'lmoq",
                                "phonetic": "/dʒɔɪn/",
                                "example": "Join our English speaking club on Telegram."
                },
                {
                                "front": "Judge",
                                "back": "Baho bermoq, hukm qilmoq",
                                "phonetic": "/dʒʌdʒ/",
                                "example": "Never judge a book by its cover."
                },
                {
                                "front": "Justify",
                                "back": "Oqlamoq, asoslab bermoq",
                                "phonetic": "/ˈdʒʌs.tɪ.faɪ/",
                                "example": "Justify your answer with evidence from the text."
                },
                {
                                "front": "Keep",
                                "back": "Saqlamoq, ushlab turmoq",
                                "phonetic": "/kiːp/",
                                "example": "Keep your room clean and organized."
                },
                {
                                "front": "Lack",
                                "back": "Yetishmaslik, tanqis bo'lmoq",
                                "phonetic": "/læk/",
                                "example": "Lack of sleep affects concentration levels."
                },
                {
                                "front": "Lead",
                                "back": "Boshlamoq, yetakchilik qilmoq",
                                "phonetic": "/liːd/",
                                "example": "Hard work leads to success."
                },
                {
                                "front": "Learn",
                                "back": "O'rganmoq",
                                "phonetic": "/lɜːn/",
                                "example": "Learn ten new words every day."
                },
                {
                                "front": "Lend",
                                "back": "Qarzga berib turmoq",
                                "phonetic": "/lend/",
                                "example": "Can you lend me your pencil for the exam?"
                },
                {
                                "front": "Limit",
                                "back": "Cheklamoq",
                                "phonetic": "/ˈlɪm.ɪt/",
                                "example": "Limit your screen time before sleep."
                },
                {
                                "front": "Listen",
                                "back": "Tinglamoq, quloq solmoq",
                                "phonetic": "/ˈlɪs.ən/",
                                "example": "Listen to native audio podcasts daily."
                },
                {
                                "front": "Locate",
                                "back": "Joylashtirmoq, topmoq",
                                "phonetic": "/ləʊˈkeɪt/",
                                "example": "Use the map to locate the university hall."
                },
                {
                                "front": "Maintain",
                                "back": "Saqlamoq, ta'minlamoq",
                                "phonetic": "/meɪnˈteɪn/",
                                "example": "Maintain a steady study schedule."
                },
                {
                                "front": "Manage",
                                "back": "Boshqarmoq, uddalamoq",
                                "phonetic": "/ˈmæn.ɪdʒ/",
                                "example": "Manage your study time efficiently."
                },
                {
                                "front": "Manufacture",
                                "back": "Ishlab chiqarmoq",
                                "phonetic": "/ˌmæn.jəˈfæk.tʃə/",
                                "example": "Factories manufacture electronic components."
                },
                {
                                "front": "Measure",
                                "back": "O'lchamoq",
                                "phonetic": "/ˈmeʒ.ə/",
                                "example": "Rulers measure length in centimeters."
                },
                {
                                "front": "Mention",
                                "back": "Eslatib o'tmoq, gapirmoq",
                                "phonetic": "/ˈmen.ʃən/",
                                "example": "Did he mention the exact exam time?"
                },
                {
                                "front": "Mind",
                                "back": "E'tibor bermoq, qarshi bo'lmoq",
                                "phonetic": "/maɪnd/",
                                "example": "Do you mind opening the window?"
                },
                {
                                "front": "Motivate",
                                "back": "Ruhlantirmoq, həvəslendirmek",
                                "phonetic": "/ˈməʊ.tɪ.veɪt/",
                                "example": "Good goals motivate you to work harder."
                },
                {
                                "front": "Navigate",
                                "back": "Yo'l topmoq, harakatlanmoq",
                                "phonetic": "/ˈnæv.ɪ.ɡeɪt/",
                                "example": "GPS apps help drivers navigate city streets."
                },
                {
                                "front": "Negotiate",
                                "back": "Muzokara olib bormoq",
                                "phonetic": "/nəˈɡəʊ.ʃi.eɪt/",
                                "example": "Diplomats negotiate peace treaties."
                },
                {
                                "front": "Notice",
                                "back": "Payqamoq",
                                "phonetic": "/ˈnəʊ.tɪs/",
                                "example": "Did you notice the new noticeboard sign?"
                },
                {
                                "front": "Obey",
                                "back": "Itoat etmoq, boysunmoq",
                                "phonetic": "/əˈbeɪ/",
                                "example": "Drivers must obey traffic regulations."
                },
                {
                                "front": "Obtain",
                                "back": "Qo'lga kiritmoq",
                                "phonetic": "/əbˈteɪn/",
                                "example": "Obtain a passport before traveling overseas."
                },
                {
                                "front": "Occur",
                                "back": "Sodir bo'lmoq",
                                "phonetic": "/əˈkɜː/",
                                "example": "Solar eclipses occur rarely."
                },
                {
                                "front": "Offer",
                                "back": "Taklif qilmoq",
                                "phonetic": "/ˈɒf.ə/",
                                "example": "The company offered him a modern job."
                },
                {
                                "front": "Operate",
                                "back": "Boshqarmoq, ishlamoq",
                                "phonetic": "/ˈɒp.ər.eɪt/",
                                "example": "Technicians operate heavy machinery safely."
                },
                {
                                "front": "Opportunity",
                                "back": "Imkoniyat",
                                "phonetic": "/ˌɒp.əˈtʃuː.nə.ti/",
                                "example": "Education creates life opportunities."
                },
                {
                                "front": "Organize",
                                "back": "Tashkillashtirmoq",
                                "phonetic": "/ˈɔː.ɡən.aɪz/",
                                "example": "Organize your notes into color-coded folders."
                },
                {
                                "front": "Overcome",
                                "back": "Yengib o'tmoq, oshmoq",
                                "phonetic": "/ˌəʊ.vəˈkʌm/",
                                "example": "Practice helps overcome speaking fear."
                },
                {
                                "front": "Participate",
                                "back": "Qatnashmoq",
                                "phonetic": "/pɑːˈtɪs.ɪ.peɪt/",
                                "example": "Participate in group discussions actively."
                },
                {
                                "front": "Perform",
                                "back": "Bajarmoq, ijro etmoq",
                                "phonetic": "/pəˈfɔːm/",
                                "example": "Musicians perform live on stage."
                },
                {
                                "front": "Persuade",
                                "back": "Kondirmoq, ko'ndirmoq",
                                "phonetic": "/pəˈsweɪd/",
                                "example": "She persuaded her friend to join the gym."
                },
                {
                                "front": "Plan",
                                "back": "Rejalashtirmoq",
                                "phonetic": "/plæn/",
                                "example": "Plan your daily study session in advance."
                },
                {
                                "front": "Predict",
                                "back": "Oldindan aytmoq, bashorat qilmoq",
                                "phonetic": "/prɪˈdɪkt/",
                                "example": "Meteorologists predict weekend weather."
                },
                {
                                "front": "Prefer",
                                "back": "Afzal ko'rmoq",
                                "phonetic": "/prɪˈfɜː/",
                                "example": "I prefer tea over coffee in the morning."
                },
                {
                                "front": "Prepare",
                                "back": "Tayyorlanmoq",
                                "phonetic": "/prɪˈpeə/",
                                "example": "Prepare your materials before class begins."
                },
                {
                                "front": "Present",
                                "back": "Taqdim etmoq",
                                "phonetic": "/prɪˈzent/",
                                "example": "Students present their slides to the class."
                },
                {
                                "front": "Prevent",
                                "back": "Oldini olmoq",
                                "phonetic": "/prɪˈvent/",
                                "example": "Seatbelts prevent injuries in accidents."
                },
                {
                                "front": "Produce",
                                "back": "Ishlab chiqarmoq",
                                "phonetic": "/prəˈdjuːs/",
                                "example": "Solar panels produce clean energy."
                },
                {
                                "front": "Protect",
                                "back": "Himoyalamoq",
                                "phonetic": "/prəˈtekt/",
                                "example": "Protect your skin from sun damage."
                },
                {
                                "front": "Provide",
                                "back": "Ta'minlamoq",
                                "phonetic": "/prəˈvaɪd/",
                                "example": "Libraries provide free digital books."
                },
                {
                                "front": "Publish",
                                "back": "Chop etmoq, nashr qilmoq",
                                "phonetic": "/ˈpʌb.lɪʃ/",
                                "example": "The journal published new research findings."
                },
                {
                                "front": "Punish",
                                "back": "Jazolamoq",
                                "phonetic": "/ˈpʌn.ɪʃ/",
                                "example": "Break the rules and you may face penalties."
                },
                {
                                "front": "Pursue",
                                "back": "Quvmoq, intilmoq",
                                "phonetic": "/pəˈsjuː/",
                                "example": "Pursue your academic goals with passion."
                },
                {
                                "front": "React",
                                "back": "Munosabat bildirmoq",
                                "phonetic": "/riˈækt/",
                                "example": "Stay calm and react sensibly to problems."
                },
                {
                                "front": "Receive",
                                "back": "Qabul qilmoq, olmoq",
                                "phonetic": "/rɪˈsiːv/",
                                "example": "You will receive an email confirmation."
                },
                {
                                "front": "Recommend",
                                "back": "Tavsiya etmoq",
                                "phonetic": "/ˌrek.əˈmend/",
                                "example": "Teachers recommend daily revision."
                },
                {
                                "front": "Reduce",
                                "back": "Qisqartirmoq",
                                "phonetic": "/rɪˈdjuːs/",
                                "example": "Recycling helps reduce waste."
                },
                {
                                "front": "Refer",
                                "back": "Havola qilmoq, qaramoq",
                                "phonetic": "/rɪˈfɜː/",
                                "example": "Refer to the textbook dictionary for meanings."
                },
                {
                                "front": "Reflect",
                                "back": "Aks ettirmoq, fikr yuritmoq",
                                "phonetic": "/rɪˈflekt/",
                                "example": "Mirrors reflect daylight into the corridor."
                },
                {
                                "front": "Refuse",
                                "back": "Rad etmoq",
                                "phonetic": "/rɪˈfjuːz/",
                                "example": "He refused to give up on his dreams."
                },
                {
                                "front": "Regret",
                                "back": "Afsuslanmoq",
                                "phonetic": "/rɪˈɡret/",
                                "example": "Do not regret mistakes; learn from them."
                },
                {
                                "front": "Relax",
                                "back": "Hordiq chiqarmoq, tinchlanmoq",
                                "phonetic": "/rɪˈlæks/",
                                "example": "Listen to soft music to relax after work."
                },
                {
                                "front": "Release",
                                "back": "Chiqarmoq, qo'yib yubormoq",
                                "phonetic": "/rɪˈliːs/",
                                "example": "The band released a new music album."
                },
                {
                                "front": "Rely",
                                "back": "Suyanmoq, ishonmoq",
                                "phonetic": "/rɪˈlaɪ/",
                                "example": "You can rely on reliable friends."
                },
                {
                                "front": "Remember",
                                "back": "Eslamoq",
                                "phonetic": "/rɪˈmem.bə/",
                                "example": "Remember to save your progress."
                },
                {
                                "front": "Remind",
                                "back": "Eslatmoq",
                                "phonetic": "/rɪˈmaɪnd/",
                                "example": "Remind me to call the tutor tomorrow."
                },
                {
                                "front": "Remove",
                                "back": "Olib tashlamoq",
                                "phonetic": "/rɪˈmuːv/",
                                "example": "Remove dust from the computer screen."
                },
                {
                                "front": "Repair",
                                "back": "Tuzatmoq",
                                "phonetic": "/rɪˈpeə/",
                                "example": "Technicians repair faulty machinery."
                },
                {
                                "front": "Repeat",
                                "back": "Takrorlamoq",
                                "phonetic": "/rɪˈpiːt/",
                                "example": "Repeat new words aloud to improve accent."
                },
                {
                                "front": "Replace",
                                "back": "Almashtirmoq",
                                "phonetic": "/rɪˈpleɪs/",
                                "example": "Replace old bulbs with energy-saving LEDs."
                },
                {
                                "front": "Reply",
                                "back": "Javob qaytarmoq",
                                "phonetic": "/rɪˈplaɪ/",
                                "example": "Reply to the invitation email promptly."
                },
                {
                                "front": "Report",
                                "back": "Hisobot bermoq, ma'lum qilmoq",
                                "phonetic": "/rɪˈpɔːt/",
                                "example": "Reporters report news from around the world."
                },
                {
                                "front": "Represent",
                                "back": "Vakillik qilmoq, namoyon etmoq",
                                "phonetic": "/ˌrep.rɪˈzent/",
                                "example": "Diplomats represent their countries abroad."
                },
                {
                                "front": "Request",
                                "back": "Iltimos qilmoq",
                                "phonetic": "/rɪˈkwest/",
                                "example": "Submit a written request for additional time."
                },
                {
                                "front": "Require",
                                "back": "Talab etmoq",
                                "phonetic": "/rɪˈkwaɪə/",
                                "example": "Learning requires dedication."
                },
                {
                                "front": "Research",
                                "back": "Tadqiqot o'tkazmoq",
                                "phonetic": "/rɪˈsɜːtʃ/",
                                "example": "Scientists research renewable fuel sources."
                },
                {
                                "front": "Resist",
                                "back": "Qarshilik ko'rsatmoq",
                                "phonetic": "/rɪˈzɪst/",
                                "example": "Resist the urge to check social media during study."
                },
                {
                                "front": "Resolve",
                                "back": "Hal qilmoq, yechim topmoq",
                                "phonetic": "/rɪˈzɒlv/",
                                "example": "Mediation helps resolve neighbor conflicts."
                },
                {
                                "front": "Respect",
                                "back": "Hurmat qilmoq",
                                "phonetic": "/rɪˈspekt/",
                                "example": "Respect teachers and fellow students."
                },
                {
                                "front": "Respond",
                                "back": "Javob bermoq",
                                "phonetic": "/rɪˈspɒnd/",
                                "example": "Respond clearly to examiner questions."
                },
                {
                                "front": "Restrict",
                                "back": "Cheklamoq",
                                "phonetic": "/rɪˈstrɪkt/",
                                "example": "Park rules restrict parking near gates."
                },
                {
                                "front": "Result",
                                "back": "Natijaga erishmoq",
                                "phonetic": "/rɪˈzʌlt/",
                                "example": "Hard work results in higher scores."
                },
                {
                                "front": "Retain",
                                "back": "Saqlab qolmoq",
                                "phonetic": "/rɪˈteɪn/",
                                "example": "Flashcards help retain vocabulary long term."
                },
                {
                                "front": "Review",
                                "back": "Qayta ko'rib chiqmoq, takrorlamoq",
                                "phonetic": "/rɪˈvjuː/",
                                "example": "Review your flashcards every evening."
                },
                {
                                "front": "Revise",
                                "back": "Takrorlamoq (imtihon oldi)",
                                "phonetic": "/rɪˈvaɪz/",
                                "example": "Revise key grammar points before the test."
                },
                {
                                "front": "Reward",
                                "back": "Mukofotlamoq",
                                "phonetic": "/rɪˈwɔːd/",
                                "example": "Hard work rewards you with great success."
                },
                {
                                "front": "Satisfy",
                                "back": "Qoniqtirmoq",
                                "phonetic": "/ˈsæt.ɪs.faɪ/",
                                "example": "Good service satisfies customers."
                },
                {
                                "front": "Save",
                                "back": "Saqlamoq, tejamoq",
                                "phonetic": "/seɪv/",
                                "example": "Save money for future university fees."
                },
                {
                                "front": "Search",
                                "back": "Qidirmoq",
                                "phonetic": "/sɜːtʃ/",
                                "example": "Search online for sample essay topics."
                },
                {
                                "front": "Select",
                                "back": "Tanlamoq",
                                "phonetic": "/sɪˈlekt/",
                                "example": "Select the best answer from options."
                },
                {
                                "front": "Separate",
                                "back": "Ajratmoq",
                                "phonetic": "/ˈsep.ər.eɪt/",
                                "example": "Separate recycling from household trash."
                },
                {
                                "front": "Serve",
                                "back": "Xizmat ko'rsatmoq, tortmoq",
                                "phonetic": "/sɜːv/",
                                "example": "Restaurants serve traditional Uzbek meals."
                },
                {
                                "front": "Share",
                                "back": "Ulashmoq, baham ko'rmoq",
                                "phonetic": "/ʃeə/",
                                "example": "Share your study notes with classmates."
                },
                {
                                "front": "Solve",
                                "back": "Yechmoq, hal etmoq",
                                "phonetic": "/sɒlv/",
                                "example": "Puzzles help train your logic to solve problems."
                },
                {
                                "front": "Specify",
                                "back": "Aniq ko'rsatmoq",
                                "phonetic": "/ˈspes.ɪ.faɪ/",
                                "example": "Specify your preferred test center location."
                },
                {
                                "front": "Spend",
                                "back": "Sarflamoq (vaqt, pul)",
                                "phonetic": "/spend/",
                                "example": "Spend thirty minutes reading every day."
                },
                {
                                "front": "Statement",
                                "back": "Bayanot, da'vo",
                                "phonetic": "/ˈsteɪt.mənt/",
                                "example": "Read the problem statement carefully."
                },
                {
                                "front": "Suggest",
                                "back": "Taklif etmoq",
                                "phonetic": "/səˈdʒest/",
                                "example": "I suggest making a weekly revision timetable."
                },
                {
                                "front": "Summarize",
                                "back": "Xulosa qilmoq",
                                "phonetic": "/ˈsʌm.ər.aɪz/",
                                "example": "Summarize the reading passage in three sentences."
                },
                {
                                "front": "Support",
                                "back": "Qo'llab-quvvatlamoq",
                                "phonetic": "/səˈpɔːt/",
                                "example": "Families support student learning."
                },
                {
                                "front": "Surround",
                                "back": "O'rab olmoq",
                                "phonetic": "/səˈraʊnd/",
                                "example": "Beautiful gardens surround the historic palace."
                },
                {
                                "front": "Survive",
                                "back": "Yashab qolmoq",
                                "phonetic": "/səˈvaɪv/",
                                "example": "Plants survive drought by storing water."
                },
                {
                                "front": "Suspect",
                                "back": "Shubhalanmoq",
                                "phonetic": "/səˈspekt/",
                                "example": "Detectives suspect the evidence was altered."
                },
                {
                                "front": "Transform",
                                "back": "Tubdan o'zgartirmoq",
                                "phonetic": "/trænsˈfɔːm/",
                                "example": "Education transforms lives and communities."
                },
                {
                                "front": "Translate",
                                "back": "Tarjima qilmoq",
                                "phonetic": "/trænsˈleɪt/",
                                "example": "Translate words into your native language."
                },
                {
                                "front": "Understand",
                                "back": "Tushunmoq",
                                "phonetic": "/ˌʌn.dəˈstænd/",
                                "example": "Do you understand the main thesis?"
                },
                {
                                "front": "Value",
                                "back": "Qadrlamoq",
                                "phonetic": "/ˈvæl.juː/",
                                "example": "Value your time and stay focused."
                },
                {
                                "front": "Vary",
                                "back": "O'zgarib turmoq",
                                "phonetic": "/ˈveə.ri/",
                                "example": "Prices vary depending on the season."
                },
                {
                                "front": "View",
                                "back": "Qaramoq, kuzatmoq",
                                "phonetic": "/vjuː/",
                                "example": "View sample answers on the portal."
                },
                {
                                "front": "Visit",
                                "back": "Tashrif buyurmoq",
                                "phonetic": "/ˈvɪz.ɪt/",
                                "example": "Visit historic museums in Samarkand."
                },
                {
                                "front": "Warn",
                                "back": "Ogohlantirmoq",
                                "phonetic": "/wɔːn/",
                                "example": "Signs warn drivers of slippery roads."
                },
                {
                                "front": "Waste",
                                "back": "Isrof qilmoq",
                                "phonetic": "/weɪst/",
                                "example": "Do not waste precious study hours on games."
                },
                {
                                "front": "Wonder",
                                "back": "Hayron bo'lmoq, ajablanmoq",
                                "phonetic": "/ˈwʌn.də/",
                                "example": "I wonder what the test questions will be."
                },
                {
                                "front": "Worry",
                                "back": "Tashvishlanmoq",
                                "phonetic": "/ˈwʌr.i/",
                                "example": "Do not worry; practice builds confidence."
                },
                {
                                "front": "Animal",
                                "back": "Hayvon, jonzot",
                                "phonetic": "/ˈæn.ɪ.məl/",
                                "example": "The zoo is home to many rare animals."
                },
                {
                                "front": "Apple",
                                "back": "Olma",
                                "phonetic": "/ˈæp.əl/",
                                "example": "I eat a fresh green apple every morning."
                },
                {
                                "front": "Artist",
                                "back": "Rassom, san'atkor",
                                "phonetic": "/ˈɑː.tɪst/",
                                "example": "The artist painted a beautiful mountain portrait."
                },
                {
                                "front": "Backpack",
                                "back": "Rukzak, orqa sumka",
                                "phonetic": "/ˈbæk.pæk/",
                                "example": "Pack your books and water bottle in your backpack."
                },
                {
                                "front": "Baker",
                                "back": "Novvoy, pishiriqchi",
                                "phonetic": "/ˈbeɪ.kə/",
                                "example": "The local baker bakes hot fresh bread every morning."
                },
                {
                                "front": "Ball",
                                "back": "Koptok, to'p",
                                "phonetic": "/bɔːl/",
                                "example": "Children love playing with a soccer ball in the park."
                },
                {
                                "front": "Banker",
                                "back": "Bank xodimi",
                                "phonetic": "/ˈbæŋ.kə/",
                                "example": "She consults a banker about opening a savings account."
                },
                {
                                "front": "Barber",
                                "back": "Sartosh, erkaklar sartoshi",
                                "phonetic": "/ˈbɑː.bə/",
                                "example": "He gets a haircut at the barber shop every month."
                },
                {
                                "front": "Beach",
                                "back": "Plyaj, dengiz bo'yi",
                                "phonetic": "/biːtʃ/",
                                "example": "We spent a sunny day relaxing at the sandy beach."
                },
                {
                                "front": "Bear",
                                "back": "Aiq, ayiq",
                                "phonetic": "/beə/",
                                "example": "Brown bears live in mountain forests."
                },
                {
                                "front": "Bed",
                                "back": "Krovat, o'rin-joy",
                                "phonetic": "/bed/",
                                "example": "Make your bed right after waking up in the morning."
                },
                {
                                "front": "Bell",
                                "back": "Qo'ng'iroq",
                                "phonetic": "/bel/",
                                "example": "The school bell rings at eight in the morning."
                },
                {
                                "front": "Bird",
                                "back": "Qush",
                                "phonetic": "/bɜːd/",
                                "example": "Early morning birds sing in the trees."
                },
                {
                                "front": "Bookstore",
                                "back": "Kitob do'koni",
                                "phonetic": "/ˈbʊk.stɔː/",
                                "example": "We bought dictionary references at the bookstore."
                },
                {
                                "front": "Bottle",
                                "back": "Idish, shisha, baklashka",
                                "phonetic": "/ˈbɒt.əl/",
                                "example": "Always carry a reusable water bottle to class."
                },
                {
                                "front": "Bread",
                                "back": "Non",
                                "phonetic": "/bred/",
                                "example": "Fresh Uzbek non bread goes great with warm tea."
                },
                {
                                "front": "Bridge",
                                "back": "Ko'prik",
                                "phonetic": "/brɪdʒ/",
                                "example": "Vehicles cross the wide river over the concrete bridge."
                },
                {
                                "front": "Broom",
                                "back": "Supurgi",
                                "phonetic": "/bruːm/",
                                "example": "Use the broom to sweep the kitchen floor."
                },
                {
                                "front": "Brother",
                                "back": "Aka, uka",
                                "phonetic": "/ˈbrʌð.ə/",
                                "example": "My elder brother is an electrical engineer."
                },
                {
                                "front": "Brush",
                                "back": "Cho'tka, tish cho'tkasi",
                                "phonetic": "/brʌʃ/",
                                "example": "Brush your teeth twice a day for good health."
                },
                {
                                "front": "Building",
                                "back": "Bino, imorat",
                                "phonetic": "/ˈbɪl.dɪŋ/",
                                "example": "The university library is an impressive modern building."
                },
                {
                                "front": "Bus stop",
                                "back": "Avtobus bekat",
                                "phonetic": "/ˈbʌs stɒp/",
                                "example": "Wait for the morning bus at the bus stop."
                },
                {
                                "front": "Butter",
                                "back": "Sariq yog'",
                                "phonetic": "/ˈbʌt.ə/",
                                "example": "Spread butter on toast for breakfast."
                },
                {
                                "front": "Cake",
                                "back": "Tort, pirog",
                                "phonetic": "/keɪk/",
                                "example": "They baked a chocolate cake for her birthday."
                },
                {
                                "front": "Camera",
                                "back": "Fotoaparat, kamera",
                                "phonetic": "/ˈkæm.rə/",
                                "example": "Take photos of historic places with a digital camera."
                },
                {
                                "front": "Candle",
                                "back": "Sham",
                                "phonetic": "/ˈkæn.dəl/",
                                "example": "Lighting candles created a peaceful mood."
                },
                {
                                "front": "Capital",
                                "back": "Poytaxt",
                                "phonetic": "/ˈkæp.ɪ.təl/",
                                "example": "Tashkent is the capital city of Uzbekistan."
                },
                {
                                "front": "Car",
                                "back": "Avtomobil, mashina",
                                "phonetic": "/kɑː/",
                                "example": "Electric cars emit zero pollution in cities."
                },
                {
                                "front": "Carpet",
                                "back": "Gilam",
                                "phonetic": "/ˈkɑː.pɪt/",
                                "example": "Uzbek handmade carpets have intricate patterns."
                },
                {
                                "front": "Carrot",
                                "back": "Sabzi",
                                "phonetic": "/ˈkær.ət/",
                                "example": "Carrots are rich in vitamins for good vision."
                },
                {
                                "front": "Cat",
                                "back": "Mushuk",
                                "phonetic": "/kæt/",
                                "example": "The furry cat slept peacefully near the window."
                },
                {
                                "front": "Chair",
                                "back": "Stul, o'rindiq",
                                "phonetic": "/tʃeə/",
                                "example": "Sit comfortably on the ergonomic study chair."
                },
                {
                                "front": "Cheese",
                                "back": "Plo'r, pishloq",
                                "phonetic": "/tʃiːz/",
                                "example": "Add cheese to your sandwich for lunch."
                },
                {
                                "front": "Chef",
                                "back": "Oshpaz",
                                "phonetic": "/ʃef/",
                                "example": "The chef prepared a special meal for hotel guests."
                },
                {
                                "front": "Chicken",
                                "back": "Tovuq go'shti",
                                "phonetic": "/ˈtʃɪk.ɪn/",
                                "example": "Grilled chicken salad is a nutritious dinner option."
                },
                {
                                "front": "Child",
                                "back": "Bola",
                                "phonetic": "/tʃaɪld/",
                                "example": "Every child deserves quality primary education."
                },
                {
                                "front": "Church",
                                "back": "Cherkov",
                                "phonetic": "/tʃɜːtʃ/",
                                "example": "Historic churches display majestic architecture."
                },
                {
                                "front": "Cinema",
                                "back": "Kinoteatr",
                                "phonetic": "/ˈsɪn.ə.mɑː/",
                                "example": "We watched an action movie at the local cinema."
                },
                {
                                "front": "Circle",
                                "back": "Doira, aylana",
                                "phonetic": "/ˈsɜː.kəl/",
                                "example": "Students stood in a wide circle during physical education."
                },
                {
                                "front": "Clock",
                                "back": "Soat (devor soati)",
                                "phonetic": "/klɒk/",
                                "example": "The wall clock showed ten minutes to nine."
                },
                {
                                "front": "Coat",
                                "back": "Palto, ustki kiyim",
                                "phonetic": "/kəʊt/",
                                "example": "Put on a thick coat before going out in snow."
                },
                {
                                "front": "Coffee",
                                "back": "Kofe",
                                "phonetic": "/ˈkɒf.i/",
                                "example": "A cup of hot coffee helps stay awake while studying."
                },
                {
                                "front": "Coin",
                                "back": "Tanga, pul",
                                "phonetic": "/kɔɪn/",
                                "example": "Insert a coin into the vending machine to buy water."
                },
                {
                                "front": "Cold",
                                "back": "Sovuq",
                                "phonetic": "/kəʊld/",
                                "example": "Drink warm herbal tea when the weather turns cold."
                },
                {
                                "front": "Cook",
                                "back": "Oshpazlik qilmoq, taom pishirmoq",
                                "phonetic": "/kʊk/",
                                "example": "My mother cooks delicious meals for our family."
                },
                {
                                "front": "Corner",
                                "back": "Burchak, burilish",
                                "phonetic": "/ˈkɔː.nə/",
                                "example": "The bakery is located right on the street corner."
                },
                {
                                "front": "Country",
                                "back": "Mamlakat, yurt",
                                "phonetic": "/ˈkʌn.tri/",
                                "example": "Uzbekistan is a beautiful Central Asian country."
                },
                {
                                "front": "Cow",
                                "back": "Sigir",
                                "phonetic": "/kaʊ/",
                                "example": "Farmers collect fresh milk from dairy cows."
                },
                {
                                "front": "Cup",
                                "back": "Piyola, finjon",
                                "phonetic": "/kʌp/",
                                "example": "Pour hot tea into a ceramic cup."
                },
                {
                                "front": "Daughter",
                                "back": "Qiz farzand",
                                "phonetic": "/ˈdɔː.tə/",
                                "example": "Their daughter studies law at the university."
                },
                {
                                "front": "Desk",
                                "back": "Yozuv stoli, parta",
                                "phonetic": "/desk/",
                                "example": "Keep your study desk organized and tidy."
                },
                {
                                "front": "Doctor",
                                "back": "Shifokor, doktor",
                                "phonetic": "/ˈdɒk.tə/",
                                "example": "The doctor examined the patient thoroughly."
                },
                {
                                "front": "Dog",
                                "back": "It",
                                "phonetic": "/dɒɡ/",
                                "example": "The loyal dog guarded the house at night."
                },
                {
                                "front": "Door",
                                "back": "Eshik",
                                "phonetic": "/dɔː/",
                                "example": "Remember to lock the front door when leaving."
                },
                {
                                "front": "Dress",
                                "back": "Ko'ylak (ayollar kiyimi)",
                                "phonetic": "/dres/",
                                "example": "She wore an elegant dress to the graduation evening."
                },
                {
                                "front": "Driver",
                                "back": "Haydovchi",
                                "phonetic": "/ˈdraɪ.və/",
                                "example": "The bus driver drove safely through rain."
                },
                {
                                "front": "Ear",
                                "back": "Quloq",
                                "phonetic": "/ɪə/",
                                "example": "Wear headphones to listen to English podcasts clearly."
                },
                {
                                "front": "Earth",
                                "back": "Yer shar, zamin",
                                "phonetic": "/ɜːθ/",
                                "example": "The Earth revolves around the Sun in space."
                },
                {
                                "front": "Egg",
                                "back": "Tuxum",
                                "phonetic": "/eɡ/",
                                "example": "Boiled eggs provide healthy protein for breakfast."
                },
                {
                                "front": "Elephant",
                                "back": "Fil",
                                "phonetic": "/ˈel.ɪ.fənt/",
                                "example": "Elephants are the largest living land animals."
                },
                {
                                "front": "Engineer",
                                "back": "Muhandis, inzhener",
                                "phonetic": "/ˌen.dʒɪˈnɪə/",
                                "example": "The software engineer created an innovative application."
                },
                {
                                "front": "Eye",
                                "back": "Ko'z",
                                "phonetic": "/aɪ/",
                                "example": "Protect your eyes when working long hours at screens."
                },
                {
                                "front": "Face",
                                "back": "Yuz, bashara",
                                "phonetic": "/feɪs/",
                                "example": "Wash your face with cold water to refresh yourself."
                },
                {
                                "front": "Family",
                                "back": "Oila",
                                "phonetic": "/ˈfæm.əl.i/",
                                "example": "Family support is a foundation for personal growth."
                },
                {
                                "front": "Farm",
                                "back": "Fermer xo'jaligi, ferma",
                                "phonetic": "/fɑːm/",
                                "example": "The farm produces organic fresh vegetables."
                },
                {
                                "front": "Father",
                                "back": "Ota",
                                "phonetic": "/ˈfɑː.ðə/",
                                "example": "My father taught me the importance of hard work."
                },
                {
                                "front": "Finger",
                                "back": "Barmoq (qo'l barmog'i)",
                                "phonetic": "/ˈfɪŋ.ɡə/",
                                "example": "Point with your index finger to select options."
                },
                {
                                "front": "Fire",
                                "back": "Olov, yong'in",
                                "phonetic": "/faɪə/",
                                "example": "Firefighters extinguished the fire quickly."
                },
                {
                                "front": "Fish",
                                "back": "Baliq",
                                "phonetic": "/fɪʃ/",
                                "example": "Fresh fish contains omega-3 fatty acids."
                },
                {
                                "front": "Flag",
                                "back": "Bayroq",
                                "phonetic": "/flæɡ/",
                                "example": "The national flag floated proudly in the breeze."
                },
                {
                                "front": "Flower",
                                "back": "Gul",
                                "phonetic": "/ˈflaʊ.ə/",
                                "example": "Spring flowers bloom brightly in public parks."
                },
                {
                                "front": "Food",
                                "back": "Taom, ovqat",
                                "phonetic": "/fuːd/",
                                "example": "Healthy food gives you stamina for learning."
                },
                {
                                "front": "Foot",
                                "back": "Oyoq (kaft qismi)",
                                "phonetic": "/fʊt/",
                                "example": "We walked to school on foot every morning."
                },
                {
                                "front": "Forest",
                                "back": "O'rmon",
                                "phonetic": "/ˈfɒr.ɪst/",
                                "example": "Dense pine forests cover the mountain slope."
                },
                {
                                "front": "Fork",
                                "back": "Sanchqi, vilka",
                                "phonetic": "/fɔːk/",
                                "example": "Use a fork and knife when eating dinner."
                },
                {
                                "front": "Friend",
                                "back": "Do'st, o'rtoq",
                                "phonetic": "/frend/",
                                "example": "True friends encourage each other's dreams."
                },
                {
                                "front": "Fruit",
                                "back": "Meva",
                                "phonetic": "/fruːt/",
                                "example": "Eat fresh seasonal fruit for vitamins."
                },
                {
                                "front": "Garden",
                                "back": "Bog', hovli",
                                "phonetic": "/ˈɡɑː.dən/",
                                "example": "They plant roses and tulips in their garden."
                },
                {
                                "front": "Glass",
                                "back": "Stakan, oyna",
                                "phonetic": "/ɡlɑːs/",
                                "example": "Drink a full glass of water every morning."
                },
                {
                                "front": "Glasses",
                                "back": "Ko'zoynak",
                                "phonetic": "/ˈɡlɑːs.ɪz/",
                                "example": "He wears reading glasses to study textbooks."
                },
                {
                                "front": "Glove",
                                "back": "Qo'lqop",
                                "phonetic": "/ɡlʌv/",
                                "example": "Wear warm gloves in snowy winter weather."
                },
                {
                                "front": "Goat",
                                "back": "Echki",
                                "phonetic": "/ɡəʊt/",
                                "example": "Mountain goats climb steep rocky cliffs effortlessly."
                },
                {
                                "front": "Grass",
                                "back": "O't, maysazor",
                                "phonetic": "/ɡrɑːs/",
                                "example": "Children love playing on the green park grass."
                },
                {
                                "front": "Hair",
                                "back": "Soch",
                                "phonetic": "/heə/",
                                "example": "She combed her long brown hair before leaving."
                },
                {
                                "front": "Hand",
                                "back": "Qo'l (kaft)",
                                "phonetic": "/hænd/",
                                "example": "Raise your hand if you know the correct answer."
                },
                {
                                "front": "Hat",
                                "back": "Shapka, qalpoq",
                                "phonetic": "/hæt/",
                                "example": "Wear a sun hat when walking outdoors in summer."
                },
                {
                                "front": "Head",
                                "back": "Bosh, kalla",
                                "phonetic": "/hed/",
                                "example": "Tilt your head slightly when focusing on listening."
                },
                {
                                "front": "Heart",
                                "back": "Yurak",
                                "phonetic": "/hɑːt/",
                                "example": "Regular cardio exercise keeps your heart healthy."
                },
                {
                                "front": "Horse",
                                "back": "Ot",
                                "phonetic": "/hɔːs/",
                                "example": "Riding horses is a popular traditional activity."
                },
                {
                                "front": "Hospital",
                                "back": "Kasalxona",
                                "phonetic": "/ˈhɒs.pɪ.təl/",
                                "example": "The modern city hospital treats emergency patients."
                },
                {
                                "front": "Hotel",
                                "back": "Mehmonxona",
                                "phonetic": "/həʊˈtel/",
                                "example": "Tourists booked rooms at a comfortable hotel."
                },
                {
                                "front": "House",
                                "back": "Uy, hovli",
                                "phonetic": "/haʊs/",
                                "example": "They built a spacious house near the river."
                },
                {
                                "front": "Husband",
                                "back": "Turmush o'rtoq, er",
                                "phonetic": "/ˈhʌz.bənd/",
                                "example": "Her husband works as an architectural designer."
                },
                {
                                "front": "Ice",
                                "back": "Muz",
                                "phonetic": "/aɪs/",
                                "example": "Put ice cubes in your lemonade to cool down."
                },
                {
                                "front": "Ice cream",
                                "back": "Muzqaymoq",
                                "phonetic": "/ˌaɪs ˈkriːm/",
                                "example": "Children enjoy vanilla ice cream in summer."
                },
                {
                                "front": "Island",
                                "back": "Orol",
                                "phonetic": "/ˈaɪ.lənd/",
                                "example": "Tropical islands are famous for palm trees and beaches."
                },
                {
                                "front": "Jacket",
                                "back": "Kurtka, nimcha",
                                "phonetic": "/ˈdʒæk.ɪt/",
                                "example": "Wear a leather jacket on chilly autumn days."
                },
                {
                                "front": "Job",
                                "back": "Ish, mehnat",
                                "phonetic": "/dʒɒb/",
                                "example": "Finding a rewarding job requires skills and practice."
                },
                {
                                "front": "Juice",
                                "back": "Sharbat, sroq",
                                "phonetic": "/dʒuːs/",
                                "example": "Fresh orange juice is rich in vitamin C."
                },
                {
                                "front": "Key",
                                "back": "Kalit",
                                "phonetic": "/kiː/",
                                "example": "Keep your house keys in a safe pocket."
                },
                {
                                "front": "Kitchen",
                                "back": "Oshxona",
                                "phonetic": "/ˈkɪtʃ.ən/",
                                "example": "The kitchen is equipped with a modern oven."
                },
                {
                                "front": "Knife",
                                "back": "Pichoq",
                                "phonetic": "/naɪf/",
                                "example": "Be careful when using a sharp knife to cut vegetables."
                },
                {
                                "front": "Lake",
                                "back": "Ko'l",
                                "phonetic": "/leɪk/",
                                "example": "People go boating on the serene mountain lake."
                },
                {
                                "front": "Lamp",
                                "back": "Lampa, chiroq",
                                "phonetic": "/læmp/",
                                "example": "Turn on the desk lamp when studying at night."
                },
                {
                                "front": "Leg",
                                "back": "Oyoq",
                                "phonetic": "/leɡ/",
                                "example": "Stretch your legs after sitting for forty minutes."
                },
                {
                                "front": "Library",
                                "back": "Kutubxona",
                                "phonetic": "/ˈlaɪ.brər.i/",
                                "example": "Students read quietly in the university library."
                },
                {
                                "front": "Light",
                                "back": "Yorug'lik, yengil",
                                "phonetic": "/laɪt/",
                                "example": "Natural daylight flows through the wide windows."
                },
                {
                                "front": "Lion",
                                "back": "Sher, arslon",
                                "phonetic": "/ˈlaɪ.ən/",
                                "example": "Lions are majestic wild cats living in African savannas."
                },
                {
                                "front": "Lunch",
                                "back": "Tushlik, tushlik taom",
                                "phonetic": "/lʌntʃ/",
                                "example": "We meet at the canteen for lunch at one PM."
                },
                {
                                "front": "Market",
                                "back": "Bozor",
                                "phonetic": "/ˈmɑː.kɪt/",
                                "example": "Chorsu Bazaar is a famous historic market in Tashkent."
                },
                {
                                "front": "Meat",
                                "back": "Go'sht",
                                "phonetic": "/miːt/",
                                "example": "Uzbek cuisine features grilled meat skewers called shashlik."
                },
                {
                                "front": "Milk",
                                "back": "Sut",
                                "phonetic": "/mɪlk/",
                                "example": "Drink a warm glass of milk before bedtime."
                },
                {
                                "front": "Money",
                                "back": "Pul",
                                "phonetic": "/ˈmʌn.i/",
                                "example": "Manage your monthly pocket money wisely."
                },
                {
                                "front": "Monkey",
                                "back": "Maymun",
                                "phonetic": "/ˈmʌŋ.ki/",
                                "example": "Monkeys swing agilely through jungle trees."
                },
                {
                                "front": "Moon",
                                "back": "Oy (tungi)",
                                "phonetic": "/muːn/",
                                "example": "The full moon shines brightly in the clear night sky."
                },
                {
                                "front": "Mother",
                                "back": "Ona",
                                "phonetic": "/ˈmʌð.ə/",
                                "example": "My mother prepares delicious home-cooked meals."
                },
                {
                                "front": "Mountain",
                                "back": "Tog'",
                                "phonetic": "/ˈmaʊn.tɪn/",
                                "example": "Tian Shan mountains offer breathtaking scenic views."
                },
                {
                                "front": "Mouth",
                                "back": "Og'iz",
                                "phonetic": "/maʊθ/",
                                "example": "Open your mouth clearly when pronouncing vowels."
                },
                {
                                "front": "Museum",
                                "back": "Muzey",
                                "phonetic": "/mjuːˈziː.əm/",
                                "example": "State history museums exhibit ancient Uzbek gold items."
                },
                {
                                "front": "Music",
                                "back": "Musiqa",
                                "phonetic": "/ˈmjuː.zɪk/",
                                "example": "Listening to classical music enhances study concentration."
                },
                {
                                "front": "Neck",
                                "back": "Bo'yin",
                                "phonetic": "/nek/",
                                "example": "Wear a wool scarf around your neck in winter."
                },
                {
                                "front": "Needle",
                                "back": "Igna",
                                "phonetic": "/ˈniː.dəl/",
                                "example": "Tailors use a fine needle and thread to sew clothes."
                },
                {
                                "front": "Net",
                                "back": "To'r, setka",
                                "phonetic": "/net/",
                                "example": "Fishermen throw woven nets into the river."
                },
                {
                                "front": "Newspaper",
                                "back": "Gazeta",
                                "phonetic": "/ˈnjuːzˌpeɪ.pə/",
                                "example": "He reads the morning newspaper during breakfast."
                },
                {
                                "front": "Night",
                                "back": "Tun, kecha",
                                "phonetic": "/naɪt/",
                                "example": "The stars twinkle brightly at night."
                },
                {
                                "front": "Nose",
                                "back": "Burun",
                                "phonetic": "/nəʊz/",
                                "example": "Breathe in deeply through your nose."
                },
                {
                                "front": "Nurse",
                                "back": "Hamshira, tibbiy hamshira",
                                "phonetic": "/nɜːs/",
                                "example": "The caring nurse measured the patient's temperature."
                },
                {
                                "front": "Ocean",
                                "back": "Okean",
                                "phonetic": "/ˈəʊ.ʃən/",
                                "example": "The Pacific Ocean covers a massive surface area."
                },
                {
                                "front": "Office",
                                "back": "Ofis, idora",
                                "phonetic": "/ˈɒf.ɪs/",
                                "example": "She works in a spacious modern downtown office."
                },
                {
                                "front": "Oil",
                                "back": "Yog', moy",
                                "phonetic": "/ɔɪl/",
                                "example": "Use olive oil for cooking healthy fresh salads."
                },
                {
                                "front": "Orange",
                                "back": "Apelsin, apelsin rang",
                                "phonetic": "/ˈɒr.ɪndʒ/",
                                "example": "Oranges are sweet, juicy, and rich in vitamin C."
                },
                {
                                "front": "Paper",
                                "back": "Qog'oz",
                                "phonetic": "/ˈpeɪ.pə/",
                                "example": "Write your daily ideas on a clean sheet of paper."
                },
                {
                                "front": "Park",
                                "back": "Xiyobon, park",
                                "phonetic": "/pɑːk/",
                                "example": "Families take evening walks in the green park."
                },
                {
                                "front": "Pen",
                                "back": "Ruchka",
                                "phonetic": "/pen/",
                                "example": "Always carry a blue ballpoint pen to exams."
                },
                {
                                "front": "Pencil",
                                "back": "Qalam",
                                "phonetic": "/ˈpen.səl/",
                                "example": "Use a graphite pencil to sketch design outlines."
                },
                {
                                "front": "Person",
                                "back": "Inson, kishi",
                                "phonetic": "/ˈpɜː.sən/",
                                "example": "Every person has unique talents and perspectives."
                },
                {
                                "front": "Pet",
                                "back": "Uy hayvoni",
                                "phonetic": "/pet/",
                                "example": "Cats and dogs are popular household pets."
                },
                {
                                "front": "Phone",
                                "back": "Telefon",
                                "phonetic": "/fəʊn/",
                                "example": "Silence your mobile phone during class lectures."
                },
                {
                                "front": "Photo",
                                "back": "Fotosurat, rasm",
                                "phonetic": "/ˈfəʊ.təʊ/",
                                "example": "They took a memorable group photo at graduation."
                },
                {
                                "front": "Picture",
                                "back": "Rasm, tasvir",
                                "phonetic": "/ˈpɪk.tʃə/",
                                "example": "Hang a landscape picture on the living room wall."
                },
                {
                                "front": "Pilot",
                                "back": "Uchuvchi, pilot",
                                "phonetic": "/ˈpaɪ.lət/",
                                "example": "The skilled pilot landed the aircraft safely."
                },
                {
                                "front": "Plate",
                                "back": "Tarelka, idish",
                                "phonetic": "/pleɪt/",
                                "example": "Serve warm plov on a large decorated ceramic plate."
                },
                {
                                "front": "Police",
                                "back": "Militsiya, politsiya",
                                "phonetic": "/pəˈliːs/",
                                "example": "Police officers maintain safety in the city."
                },
                {
                                "front": "Rain",
                                "back": "Yog'garachilik, yomg'ir",
                                "phonetic": "/reɪn/",
                                "example": "Spring rain freshens the city air."
                },
                {
                                "front": "River",
                                "back": "Daryo",
                                "phonetic": "/ˈrɪv.ə/",
                                "example": "The Syr Darya river flows through Central Asia."
                },
                {
                                "front": "Road",
                                "back": "Yo'l, ko'cha",
                                "phonetic": "/rəʊd/",
                                "example": "Drive carefully on wet asphalt roads."
                },
                {
                                "front": "Roof",
                                "back": "Tosh, tom, tami",
                                "phonetic": "/ruːf/",
                                "example": "Snow covered the roofs of houses in winter."
                },
                {
                                "front": "Room",
                                "back": "Xona",
                                "phonetic": "/ruːm/",
                                "example": "My study room is quiet and well-lit."
                },
                {
                                "front": "Rose",
                                "back": "Atirgul",
                                "phonetic": "/rəʊz/",
                                "example": "Red roses bloom in the flower garden."
                },
                {
                                "front": "Salt",
                                "back": "Tuz",
                                "phonetic": "/sɒlt/",
                                "example": "Add a pinch of salt to season the soup."
                },
                {
                                "front": "Sandwich",
                                "back": "Buterbrod, sendvich",
                                "phonetic": "/ˈsæn.wɪdʒ/",
                                "example": "He packed a cheese sandwich for lunch."
                },
                {
                                "front": "School",
                                "back": "Maktab",
                                "phonetic": "/skuːl/",
                                "example": "Children attend primary school for basic education."
                },
                {
                                "front": "Sea",
                                "back": "Dengiz",
                                "phonetic": "/siː/",
                                "example": "Ships sail across the Mediterranean Sea."
                },
                {
                                "front": "Shoe",
                                "back": "Poyabzal, tufli",
                                "phonetic": "/ʃuː/",
                                "example": "Tie your shoe laces securely before running."
                },
                {
                                "front": "Shop",
                                "back": "Do'kon",
                                "phonetic": "/ʃɒp/",
                                "example": "Buy fresh bread at the neighborhood bakery shop."
                },
                {
                                "front": "Sister",
                                "back": "Opa, singil",
                                "phonetic": "/ˈsɪs.tə/",
                                "example": "My younger sister studies medicine at university."
                },
                {
                                "front": "Sky",
                                "back": "Osmon, falak",
                                "phonetic": "/skaɪ/",
                                "example": "The blue sky was clear with no clouds."
                },
                {
                                "front": "Snow",
                                "back": "Qor",
                                "phonetic": "/snəʊ/",
                                "example": "Children build snowmen when it snows in winter."
                },
                {
                                "front": "Sofa",
                                "back": "Divan",
                                "phonetic": "/ˈsəʊ.fə/",
                                "example": "Relax on the soft sofa after a long day."
                },
                {
                                "front": "Son",
                                "back": "O'g'il farzand",
                                "phonetic": "/sʌn/",
                                "example": "Their son won the school math olympiad."
                },
                {
                                "front": "Soup",
                                "back": "Sho'rva, moshxo'rda",
                                "phonetic": "/suːp/",
                                "example": "Hot vegetable soup is comforting on cold days."
                },
                {
                                "front": "Spoon",
                                "back": "Qoshiq",
                                "phonetic": "/spuːn/",
                                "example": "Use a soup spoon to eat hot noodle soup."
                },
                {
                                "front": "Star",
                                "back": "Yulduz",
                                "phonetic": "/stɑː/",
                                "example": "Millions of stars illuminate the desert sky."
                },
                {
                                "front": "Station",
                                "back": "Bekat, stantsiya",
                                "phonetic": "/ˈsteɪ.ʃən/",
                                "example": "The train departs from Tashkent Central Station."
                },
                {
                                "front": "Street",
                                "back": "Ko'cha",
                                "phonetic": "/striːt/",
                                "example": "Trees line both sides of the quiet residential street."
                },
                {
                                "front": "Student",
                                "back": "Talaba, o'quvchi",
                                "phonetic": "/ˈstjuː.dənt/",
                                "example": "Every student strives for academic progress."
                },
                {
                                "front": "Sugar",
                                "back": "Shakar",
                                "phonetic": "/ˈʃʊɡ.ə/",
                                "example": "Do you take sugar in your morning black tea?"
                },
                {
                                "front": "Sun",
                                "back": "Quyosh",
                                "phonetic": "/sʌn/",
                                "example": "The sun rises in the east every morning."
                },
                {
                                "front": "Table",
                                "back": "Stol",
                                "phonetic": "/ˈteɪ.bəl/",
                                "example": "Place your study textbooks neatly on the table."
                },
                {
                                "front": "Taxi",
                                "back": "Taksi",
                                "phonetic": "/ˈtæk.si/",
                                "example": "Take a taxi to reach the airport quickly."
                },
                {
                                "front": "Tea",
                                "back": "Choy",
                                "phonetic": "/tiː/",
                                "example": "Uzbek green tea is served in traditional piala cups."
                },
                {
                                "front": "Teacher",
                                "back": "O'qituvchi, ustoz",
                                "phonetic": "/ˈtiː.tʃə/",
                                "example": "Our English teacher explains complex topics clearly."
                },
                {
                                "front": "Telephone",
                                "back": "Telefon",
                                "phonetic": "/ˈtel.ɪ.fəʊn/",
                                "example": "Answer the telephone when it rings."
                },
                {
                                "front": "Time",
                                "back": "Vaqt",
                                "phonetic": "/taɪm/",
                                "example": "Manage your study time effectively every day."
                },
                {
                                "front": "Town",
                                "back": "Shahar, shaharcha",
                                "phonetic": "/taʊn/",
                                "example": "Khiva is a historic Uzbek town with ancient walls."
                },
                {
                                "front": "Tree",
                                "back": "Daraxt",
                                "phonetic": "/triː/",
                                "example": "Fruit trees bloom with white flowers in spring."
                },
                {
                                "front": "Trousers",
                                "back": "Shalvar, shim",
                                "phonetic": "/ˈtraʊ.zəz/",
                                "example": "He wore dark trousers and a crisp white shirt."
                },
                {
                                "front": "Uncle",
                                "back": "Toga, amaki",
                                "phonetic": "/ˈʌŋ.kəl/",
                                "example": "My uncle lives in a quiet mountain village."
                },
                {
                                "front": "University",
                                "back": "Universitet, oliygoh",
                                "phonetic": "/ˌjuː.nɪˈvɜː.sə.ti/",
                                "example": "She plans to study engineering at university."
                },
                {
                                "front": "Vegetable",
                                "back": "Sabzavot",
                                "phonetic": "/ˈvedʒ.tə.bəl/",
                                "example": "Fresh vegetables form the basis of a healthy diet."
                },
                {
                                "front": "Village",
                                "back": "Qishloq, qishloq joy",
                                "phonetic": "/ˈvɪl.ɪdʒ/",
                                "example": "Fresh air and quiet surroundings characterize the village."
                },
                {
                                "front": "Wall",
                                "back": "Devor",
                                "phonetic": "/wɔːl/",
                                "example": "Paint the bedroom walls with light calm colors."
                },
                {
                                "front": "Watch",
                                "back": "Qo'l soati, tomosha qilmoq",
                                "phonetic": "/wɒtʃ/",
                                "example": "Check your wrist watch for test timing."
                },
                {
                                "front": "Water",
                                "back": "Suv",
                                "phonetic": "/ˈwɔː.tə/",
                                "example": "Drinking clean water is essential for your body."
                },
                {
                                "front": "Weather",
                                "back": "Ob-havo",
                                "phonetic": "/ˈweð.ə/",
                                "example": "Spring weather in Tashkent is warm and pleasant."
                },
                {
                                "front": "Wife",
                                "back": "Xotin, rafiqa",
                                "phonetic": "/waɪf/",
                                "example": "His wife is a doctor at the children's hospital."
                },
                {
                                "front": "Window",
                                "back": "Oyna, rom",
                                "phonetic": "/ˈwɪn.dəʊ/",
                                "example": "Open the window to let fresh air into the room."
                },
                {
                                "front": "Winter",
                                "back": "Qish fasli",
                                "phonetic": "/ˈwɪn.tə/",
                                "example": "Snow covers mountain peaks during winter."
                },
                {
                                "front": "Woman",
                                "back": "Ayol, xotin-qiz",
                                "phonetic": "/ˈwʊm.ən/",
                                "example": "The inspiring woman led an international project."
                },
                {
                                "front": "Writer",
                                "back": "Yozuvchi, adib",
                                "phonetic": "/ˈraɪ.tə/",
                                "example": "The famous writer published a novel about Uzbekistan."
                },
                {
                                "front": "Year",
                                "back": "Yil",
                                "phonetic": "/jɪə/",
                                "example": "A new academic year starts in September."
                },
                {
                                "front": "Ability (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ability.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Able (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Able.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Accident (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Accident.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "According to (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with According to.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Act (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Act.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Action (n.)",
                                "back": "Harakat, faoliyat",
                                "phonetic": "/ˈæk.ʃən/",
                                "example": "Taking action is key to achieving your goals.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Active (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Active.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Activity (n.)",
                                "back": "Mashg'ulot, faoliyat",
                                "phonetic": "/ækˈtɪv.ə.ti/",
                                "example": "Physical activity improves health.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Actor (n.)",
                                "back": "Aktyor",
                                "phonetic": "/ˈæk.tə/",
                                "example": "He is a famous Hollywood actor.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Actress (n.)",
                                "back": "Aktrisa",
                                "phonetic": "/ˈæk.trəs/",
                                "example": "The actress won a prestigious award.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Actually (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Actually.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Add (v.)",
                                "back": "Qo'shmoq, ilova qilmoq",
                                "phonetic": "/æd/",
                                "example": "Add a pinch of salt to the soup.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Address (n.)",
                                "back": "Manzil, murojaat qilmoq",
                                "phonetic": "/əˈdres/",
                                "example": "Write your email address on the form.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Adult (n.)",
                                "back": "Kattalar, balog'atga yetgan",
                                "phonetic": "/ˈæd.ʌlt/",
                                "example": "Adults pay full price for museum tickets.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Advantage (n.)",
                                "back": "Afzallik, ustunlik",
                                "phonetic": "/ədˈvɑːn.tɪdʒ/",
                                "example": "Fluency is a major advantage in job interviews.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Adventure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Adventure.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Advertise (v.)",
                                "back": "Reklama qilmoq",
                                "phonetic": "/ˈæd.və.taɪz/",
                                "example": "Companies advertise new products on social media.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Advertisement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Advertisement.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Advertising (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Advertising.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Advice (n.)",
                                "back": "Maslahat",
                                "phonetic": "/ədˈvaɪs/",
                                "example": "Listen to your teacher's advice.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Affect (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Affect.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Afraid (adj.)",
                                "back": "Qo'rqqan, cho'chigan",
                                "phonetic": "/əˈfreɪd/",
                                "example": "Do not be afraid of making mistakes.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "After (prep.)",
                                "back": "Keyin, so'ng",
                                "phonetic": "/ˈɑːf.tə/",
                                "example": "We will study after dinner.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Afternoon (n.)",
                                "back": "Peshindan keyin",
                                "phonetic": "/ˌɑːf.təˈnuːn/",
                                "example": "Good afternoon! Welcome to class.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Again (adv.)",
                                "back": "Yana, takroran",
                                "phonetic": "/əˈɡen/",
                                "example": "Try again until you succeed.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Against (prep.)",
                                "back": "Qarshi, qarama-qarshi",
                                "phonetic": "/əˈɡenst/",
                                "example": "They played against a strong football team.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Age (n.)",
                                "back": "Yosh, davr",
                                "phonetic": "/eɪdʒ/",
                                "example": "She started studying English at a young age.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ago (adv.)",
                                "back": "Ilgari, oldin",
                                "phonetic": "/əˈɡəʊ/",
                                "example": "Two years ago, I moved to Tashkent.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Air (n.)",
                                "back": "Havo",
                                "phonetic": "/eə/",
                                "example": "Mountain air is fresh and clean.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Airline (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Airline.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Airport (n.)",
                                "back": "Aeroport",
                                "phonetic": "/ˈeə.pɔːt/",
                                "example": "We arrived at the airport two hours early.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Alive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Alive.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Almost (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Almost.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Already (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Already.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Also (adv.)",
                                "back": "Ham, shuningdek",
                                "phonetic": "/ˈɔːl.səʊ/",
                                "example": "She speaks English and also learns Japanese.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Alternative (n.)",
                                "back": "Muqobil variant, tanlov",
                                "phonetic": "/ɒlˈtɜː.nə.tɪv/",
                                "example": "Solar energy is a sustainable alternative to coal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Always (adv.)",
                                "back": "Doim, har doim",
                                "phonetic": "/ˈɔːl.weɪz/",
                                "example": "Always save your study progress.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Amazing (adj.)",
                                "back": "Ajoyib, hayratlanarli",
                                "phonetic": "/əˈmeɪ.zɪŋ/",
                                "example": "What an amazing sunset!",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Among (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Among.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Analyze (v.)",
                                "back": "Tahlil qilmoq",
                                "phonetic": "/ˈæn.əl.aɪz/",
                                "example": "Researchers analyze data to find trends.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Ancient (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ancient.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "And (conj.)",
                                "back": "Va",
                                "phonetic": "/ænd/",
                                "example": "Tea and bread for breakfast.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Angry (adj.)",
                                "back": "G'azablangan, jahli chiqqan",
                                "phonetic": "/ˈæŋ.ɡri/",
                                "example": "Stay calm and do not get angry.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ankle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ankle.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Anybody (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anybody.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Anymore (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anymore.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Anyone (pron.)",
                                "back": "Kimdir, har kim",
                                "phonetic": "/ˈen.i.wʌn/",
                                "example": "Is anyone in the room?",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Anything (pron.)",
                                "back": "Biror narsa",
                                "phonetic": "/ˈen.i.θɪŋ/",
                                "example": "Did you notice anything unusual?",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Anyway (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anyway.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "App (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with App.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Appearance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Appearance.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "April (n.)",
                                "back": "Aprel oyi",
                                "phonetic": "/ˈeɪ.prəl/",
                                "example": "Spring flowers bloom in April.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Architect (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Architect.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Architecture (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Architecture.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Area (n.)",
                                "back": "Hudud, maydon",
                                "phonetic": "/ˈeə.ri.ə/",
                                "example": "This area is famous for parks.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Argue (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Argue.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Argument (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Argument.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Arm (n.)",
                                "back": "Qo'l",
                                "phonetic": "/ɑːm/",
                                "example": "He broke his arm while playing sports.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Army (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Army.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Arrangement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Arrangement.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Art (n.)",
                                "back": "San'at",
                                "phonetic": "/ɑːt/",
                                "example": "Modern art galleries exhibit creative works.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Article (n.)",
                                "back": "Maqola",
                                "phonetic": "/ˈɑː.tɪ.kəl/",
                                "example": "Read the news article online.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "As (prep.)",
                                "back": "Sifatida, kabi",
                                "phonetic": "/æz/",
                                "example": "She works as a software developer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ask (v.)",
                                "back": "So'ramoq",
                                "phonetic": "/ɑːsk/",
                                "example": "Ask the teacher for help.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Asleep (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Asleep.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "At (prep.)",
                                "back": "Da, da joylashgan",
                                "phonetic": "/æt/",
                                "example": "We met at the station.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Athlete (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Athlete.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Attention (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Attention.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Attractive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Attractive.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Audience (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Audience.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "August (n.)",
                                "back": "Avgust oyi",
                                "phonetic": "/ˈɔː.ɡəst/",
                                "example": "August is a warm summer month.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Aunt (n.)",
                                "back": "Amma, xola",
                                "phonetic": "/ɑːnt/",
                                "example": "My aunt visited us last weekend.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Author (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Author.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Available (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Available.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Award (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Award.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Away (adv.)",
                                "back": "Uzoqda, narida",
                                "phonetic": "/əˈweɪ/",
                                "example": "Store your books away in the cabinet.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Awesome (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Awesome.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Awful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Awful.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Baby (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Baby.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Background (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Background.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bad (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bad.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Badly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Badly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bag (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bag.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Banana (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Banana.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Band (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Band.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bar (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bar.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Baseball (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Baseball.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Based (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Based.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Basketball (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Basketball.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bath (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bath.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bathroom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bathroom.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bean (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bean.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Beat (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beat.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Beautiful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beautiful.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Because (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Because.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bedroom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bedroom.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Beef (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beef.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Beer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Before (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Before.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Beginning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beginning.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Behavior (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Behavior.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Belt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Belt.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Benefit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Benefit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Best (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Best.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Better (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Better.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Between (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Between.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bicycle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bicycle.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Big (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Big.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bike (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bike.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bill (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bill.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Biology (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Biology.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Birth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Birth.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Birthday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Birthday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Block (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Block.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Blog (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Blog.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Blond (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Blond.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Blood (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Blood.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Blow (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Blow.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Board (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Board.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Boat (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boat.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Body (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Body.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boil (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boil.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bone (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bone.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Book (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Book.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boot.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Bored (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bored.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boring (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boring.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Born (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Born.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boss (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boss.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bowl (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bowl.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Box (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Box.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Boyfriend (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Boyfriend.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Brain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Brain.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bright (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bright.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Brilliant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Brilliant.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bring (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bring.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Broken (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Broken.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Burn (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Burn.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Bus (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bus.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Business (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Business.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Businessman (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Businessman.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Busy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Busy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "But (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with But.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Button (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Button.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Buy (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Buy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "By (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with By.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cafe (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cafe.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Camping (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Camping.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Campus (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Campus.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Candy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Candy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cannot (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cannot.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Card (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Card.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Career (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Career.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Careful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Careful.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Carefully (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Carefully.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Carry (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Carry.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cartoon (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cartoon.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Case (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Case.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cash (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cash.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Catch (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Catch.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cd (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cd.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Celebrity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Celebrity.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cell (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cell.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cent.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Center (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Center.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Certain (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Certain.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Certainly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Certainly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Chance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chance.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Character (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Character.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Charity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Charity.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Chart (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chart.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cheap (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cheap.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Check (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Check.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Chemistry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chemistry.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Chip (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chip.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Chocolate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chocolate.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Choice (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Choice.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cigarette (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cigarette.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "City (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with City.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Class (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Class.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Classical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Classical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Classroom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Classroom.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Clear (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clear.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Clearly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clearly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Clerk (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clerk.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Climb (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Climb.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Closed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Closed.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Closet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Closet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Clothes (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clothes.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Clothing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clothing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cloud (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cloud.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Club (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Club.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Coach (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Coach.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Coast (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Coast.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Code (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Code.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "College (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with College.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Color (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Color.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Column (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Column.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Come (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Come.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Comedy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Comedy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Comfortable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Comfortable.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Comment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Comment.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Common (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Common.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Community (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Community.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Company (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Company.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Competition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Competition.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Completely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Completely.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Computer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Computer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Concert (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Concert.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Condition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Condition.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Conference (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Conference.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Connected (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Connected.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Context (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Context.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Continent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Continent.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Conversation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Conversation.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cookie (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cookie.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cooking (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cooking.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cool (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cool.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Correctly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Correctly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Could modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Could modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Count (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Count.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Couple (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Couple.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Course (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Course.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cousin (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cousin.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cover (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cover.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Crazy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crazy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cream (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cream.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Creative (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Creative.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Credit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Credit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Crime (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crime.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Criminal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Criminal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Crowd (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crowd.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Crowded (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crowded.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Cry (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cry.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Culture (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Culture.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Curly (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Curly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Customer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Customer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Cut (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cut.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Dad (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dad.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Daily (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Daily.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dancer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dancer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Dancing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dancing.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Danger (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Danger.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dangerous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dangerous.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Dark (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dark.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Data (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Data.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Date (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Date.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Day (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Day.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Dead (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dead.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Deal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dear (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dear.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Death (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Death.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "December (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with December.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Decision (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Decision.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Deep (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deep.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Definitely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Definitely.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Degree (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Degree.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dentist (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dentist.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Department (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Department.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Description (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Description.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Desert (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Desert.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Designer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Designer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Detective (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Detective.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Device (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Device.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dialogue (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dialogue.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Diary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Diary.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dictionary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dictionary.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Die (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Die.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Difference (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Difference.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Different (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Different.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Differently (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Differently.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Difficult (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Difficult.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Digital (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Digital.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dinner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dinner.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Direct (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Direct.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Direction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Direction.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Director (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Director.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dirty (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dirty.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Disagree (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Disagree.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Discovery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Discovery.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Discussion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Discussion.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Disease (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Disease.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dish (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dish.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Divorced (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Divorced.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Document (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Document.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Dollar (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dollar.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Downstairs (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Downstairs.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Drama (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drama.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Draw (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Draw.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Drawing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drawing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Drive (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drive.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Driving (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Driving.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Drop (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drop.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Drug (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drug.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "During (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with During.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Dvd (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dvd.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Easily (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Easily.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Easy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Easy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Eat (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Eat.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Education (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Education.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Effect (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Effect.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Electric (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Electric.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Electrical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Electrical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Electricity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Electricity.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Electronic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Electronic.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Elevator (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Elevator.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Else (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Else.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Employ (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Employ.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Employee (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Employee.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Employer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Employer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Empty (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Empty.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Ending (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ending.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Energy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Energy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Engine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Engine.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Enormous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enormous.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Enter (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enter.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Equipment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Equipment.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Error (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Error.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Especially (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Especially.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Essay (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Essay.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Euro (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Euro.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Even (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Even.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Evening (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Evening.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Event (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Event.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ever (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ever.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Every (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Every.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Everybody (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Everybody.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Everyday (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Everyday.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Everyone (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Everyone.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Everything (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Everything.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Everywhere (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Everywhere.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Evidence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Evidence.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Exact (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exact.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Exactly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exactly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Exam (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exam.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Example (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Example.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Excellent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Excellent.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Except (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Except.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Excited (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Excited.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Exciting (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exciting.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Expensive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expensive.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Experience (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Experience.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Experiment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Experiment.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Explanation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Explanation.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Expression (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expression.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Extra (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extra.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Extreme (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extreme.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Extremely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extremely.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fact (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fact.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Factor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Factor.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Factory (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Factory.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fair (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fair.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "False (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with False.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Famous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Famous.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fan (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fan.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fantastic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fantastic.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Far (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Far.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Farmer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Farmer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Farming (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Farming.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fashion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fashion.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fat (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fat.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Feature (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feature.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "February (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with February.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Feed (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feed.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Feel (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feel.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Feeling (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feeling.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Festival (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Festival.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fever (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fever.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fiction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fiction.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Field (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Field.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Figure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Figure.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Final (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Final.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Finally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Finally.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Find (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Find.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fine (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fine.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fishing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fishing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fix (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fix.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Flat (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flat.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Flight (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flight.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Floor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Floor.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Flu (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flu.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fly (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fly.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Following (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Following.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Football (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Football.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "For (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with For.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Foreign (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Foreign.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Forget (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Forget.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Formal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Formal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Fortunately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fortunately.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Forward (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Forward.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Free (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Free.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fresh (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fresh.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Friday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Friday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Friendly (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Friendly.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Frog (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frog.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "From (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with From.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Full (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Full.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Fun (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fun.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Funny (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Funny.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Further (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Further.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Future (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Future.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Gallery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gallery.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Game (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Game.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Gap (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gap.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Garbage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Garbage.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Gas (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gas.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Gate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gate.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "General (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with General.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Geography (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Geography.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Get (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Get.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Gift (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gift.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Girl (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Girl.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Girlfriend (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Girlfriend.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Give (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Give.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Go (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Go.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Goal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Goal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "God (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with God.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Golf (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Golf.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Good (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Good.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Government (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Government.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Grandfather (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grandfather.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Grandmother (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grandmother.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Grandparent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grandparent.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Great (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Great.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Greet (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Greet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Grocery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grocery.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Ground (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ground.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Group (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Group.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Grow (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grow.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Guest (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Guest.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Guitar (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Guitar.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Gun (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gun.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Guy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Guy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Gym (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gym.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Habit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Habit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hall (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hall.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Happily (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Happily.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Happy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Happy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hate.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Have (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Have.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Have to modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Have to modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "He (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with He.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Headache (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Headache.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Health (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Health.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Healthy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Healthy.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hear (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hear.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Heavy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Heavy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Helpful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Helpful.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Here (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Here.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hero (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hero.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hers (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hers.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Herself (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Herself.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hide (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hide.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "High (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with High.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hill (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hill.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Him (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Him.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Himself (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Himself.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "His (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with His.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "History (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with History.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hobby (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hobby.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hockey (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hockey.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hold (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hold.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hole (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hole.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Holiday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Holiday.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Homework (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Homework.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hope (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hope.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hot (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hot.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Hour (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hour.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "How (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with How.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Huge (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Huge.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Hungry (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hungry.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Idea (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Idea.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ideal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ideal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "If (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with If.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ill (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ill.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Illness (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Illness.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Image (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Image.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Immediately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Immediately.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Important (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Important.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Impossible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impossible.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Included (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Included.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Including (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Including.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Incredible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Incredible.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Independent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Independent.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Industry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Industry.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Informal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Informal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Information (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Information.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Injury (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Injury.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Insect (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Insect.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Instead (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Instead.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Instruction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Instruction.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Instructor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Instructor.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Instrument (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Instrument.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Intelligent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intelligent.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Interested (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Interested.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Interesting (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Interesting.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "International (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with International.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Internet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Internet.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Into (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Into.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Introduction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Introduction.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Invention (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Invention.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Invitation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Invitation.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Item (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Item.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Its (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Its.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Itself (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Itself.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Jam (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Jam.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "January (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with January.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Jazz (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Jazz.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Jeans (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Jeans.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Jewelry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Jewelry.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Journalist (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Journalist.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "July (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with July.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "June (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with June.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Just (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Just.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Kid (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Kid.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Kill (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Kill.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Kilometer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Kilometer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "King (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with King.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Knee (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Knee.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Knock (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Knock.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Know (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Know.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Knowledge (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Knowledge.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lab (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lab.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lady (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lady.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Land (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Land.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Language (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Language.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Laptop (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Laptop.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Large (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Large.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Later (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Later.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Laughter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Laughter.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Law (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Law.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lawyer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lawyer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lazy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lazy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Leader (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leader.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Learning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Learning.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Leave (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leave.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Lemon (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lemon.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lesson (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lesson.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Let (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Let.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Letter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Letter.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Level (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Level.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Life (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Life.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Lifestyle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lifestyle.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lift (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lift.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Likely (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Likely.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Line (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Line.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Listener (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Listener.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Local (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Local.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Look (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Look.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Lose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lose.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Lost (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lost.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Loudly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Loudly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Luck (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Luck.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Lucky (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lucky.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Machine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Machine.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Magazine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Magazine.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Main (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Main.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Major (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Major.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Make (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Make.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Mall (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mall.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Man (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Man.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Manager (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Manager.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Manner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Manner.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Map (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Map.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "March (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with March.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Married (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Married.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Marry (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Marry.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Math (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Math.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Mathematics (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mathematics.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "May (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with May.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "May modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with May modal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Maybe (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Maybe.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Mayor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mayor.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Me (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Me.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Meal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Mean (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mean.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Meaning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meaning.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Media (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Media.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Medical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Medical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Medicine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Medicine.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Meet (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meet.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Meeting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meeting.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Member (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Member.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Memory (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Memory.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Menu (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Menu.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Message (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Message.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Metal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Metal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Meter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meter.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Method (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Method.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Might modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Might modal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Mile (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mile.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Miss (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Miss.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Missing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Missing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Mistake (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mistake.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Model (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Model.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Modern (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Modern.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Mom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mom.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Moment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Moment.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Monday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Monday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Month (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Month.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Morning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Morning.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Mostly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mostly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Motorcycle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Motorcycle.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Mouse (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mouse.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Move (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Move.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Movement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Movement.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Movie (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Movie.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Musical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Musical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Musician (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Musician.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Must modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Must modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "My (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with My.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Myself (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Myself.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Narrow (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Narrow.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "National (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with National.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Natural (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Natural.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nature (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nature.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Nearly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nearly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Necessary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Necessary.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Need (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Need.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Negative (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Negative.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nervous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nervous.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Network (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Network.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Never (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Never.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "New (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with New.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "News (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with News.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Next to (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Next to.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nice (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nice.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "No one (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with No one.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nobody (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nobody.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Noise (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Noise.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Noisy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Noisy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "None (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with None.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Normal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Normal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Normally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Normally.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Not (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Not.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Note (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Note.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nothing (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nothing.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Novel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Novel.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "November (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with November.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Now (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Now.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nowhere (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nowhere.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Number (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Number.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Nut (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nut.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Object (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Object.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "October (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with October.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Of (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Of.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Officer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Officer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Often (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Often.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Old (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Old.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Once (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Once.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Onion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Onion.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Onto (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Onto.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Opinion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Opinion.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Option (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Option.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Or (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Or.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ordinary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ordinary.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Organization (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Organization.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Original (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Original.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Our (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Our.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ourselves (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ourselves.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Outside (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Outside.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Oven (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Oven.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Overseas (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Overseas.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Owner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Owner.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pack (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pack.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Page (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Page.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pain.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Painter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Painter.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Painting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Painting.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pair (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pair.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Palace (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Palace.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pants (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pants.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Paragraph (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Paragraph.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Parking (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Parking.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Part (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Part.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Particular (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Particular.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Partner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Partner.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Party (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Party.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pass (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pass.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Passport (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Passport.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pattern (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pattern.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pay (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pay.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Peace (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Peace.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Penny (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Penny.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "People (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with People.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pepper (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pepper.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Per (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Per.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Perfect (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Perfect.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Perhaps (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Perhaps.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Period (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Period.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Permission (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Permission.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Personal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Personal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Personality (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Personality.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Photograph (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Photograph.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Phrase (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Phrase.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Physical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Physical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Physics (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Physics.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Piano (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Piano.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pick (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pick.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Piece (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Piece.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pig (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pig.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Place (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Place.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Plane (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Plane.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Planet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Planet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Plant (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Plant.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Platform (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Platform.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Player (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Player.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pleased (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pleased.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pocket (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pocket.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Point (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Point.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Policeman (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Policeman.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Polite (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Polite.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pollution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pollution.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pool (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pool.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Poor (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poor.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Popular (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Popular.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Population (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Population.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Position (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Position.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Positive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Positive.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Possession (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Possession.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Possibility (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Possibility.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Possible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Possible.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Poster (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poster.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Potato (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Potato.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pound (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pound.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Power (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Power.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "President (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with President.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Price (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Price.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Print (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Print.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Printer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Printer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Prison (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prison.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Prize (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prize.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Probably (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Probably.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Problem (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Problem.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Process (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Process.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Product (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Product.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Professional (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Professional.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Professor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Professor.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Profile (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Profile.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Program (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Program.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Project (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Project.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Pronounce (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pronounce.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Pull (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pull.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Purpose (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Purpose.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Push (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Push.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Put (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Put.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Quality (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quality.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Quantity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quantity.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Queen (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Queen.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Question (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Question.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Quick (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quick.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Quickly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quickly.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Quiet (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quiet.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Quietly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quietly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Quite (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quite.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Radio (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Radio.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Railroad (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Railroad.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Raise (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Raise.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Rate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rate.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Rather (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rather.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Reach (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reach.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Read (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Read.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Reader (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reader.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Reading (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reading.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ready (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ready.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Real (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Real.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Realize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Realize.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Really (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Really.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Reason (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reason.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Recent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recent.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Recently (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recently.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Reception (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reception.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Recognize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recognize.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Recording (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recording.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Recycle (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recycle.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Refrigerator (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Refrigerator.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Region (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Region.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Regular (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Regular.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Reporter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reporter.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Researcher (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Researcher.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Response (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Response.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Restaurant (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Restaurant.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Rice (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rice.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Rich (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rich.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ride (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ride.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Rise (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rise.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Role (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Role.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Route (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Route.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Routine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Routine.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Rude (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rude.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Rule (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rule.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Run (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Run.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Runner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Runner.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Running (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Running.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sad (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sad.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sadly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sadly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Safe (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Safe.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sail (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sail.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sailing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sailing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Salad (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Salad.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sale (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sale.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Saturday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Saturday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sauce (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sauce.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Say (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Say.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Scared (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scared.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Scary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scary.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Scene (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scene.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Science (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Science.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Scientist (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scientist.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Screen (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Screen.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Season (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Season.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Seat (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Seat.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Secretary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Secretary.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Section (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Section.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "See (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with See.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Seem (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Seem.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sell (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sell.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Send (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Send.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sense (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sense.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sentence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sentence.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "September (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with September.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Series (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Series.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Serious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Serious.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Service (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Service.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Shake (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shake.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Shape (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shape.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "She (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with She.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sheep (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sheep.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sheet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sheet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Ship (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ship.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Shirt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shirt.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Shopping (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shopping.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Short (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Short.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Should modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Should modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Shoulder (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shoulder.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Shower (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shower.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sick (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sick.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Side (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Side.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Similar (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Similar.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Simple (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Simple.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sing (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sing.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Singer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Singer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Singing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Singing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sir (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sir.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sit (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sit.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Site (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Site.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Situation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Situation.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Size (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Size.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Skiing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Skiing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Skill (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Skill.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Skin (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Skin.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Skirt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Skirt.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sleep (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sleep.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Slow (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slow.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Slowly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slowly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Small (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Small.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Smart (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Smart.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Smartphone (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Smartphone.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Smoking (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Smoking.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Snake (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Snake.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sneaker (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sneaker.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Soap (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soap.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Soccer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soccer.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Social (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Social.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Society (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Society.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sock (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sock.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Soft (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soft.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Soldier (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soldier.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Solution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Solution.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Somebody (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Somebody.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Someone (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Someone.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Something (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Something.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sometimes (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sometimes.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Song (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Song.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Soon (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soon.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sort (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sort.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Source (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Source.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Space (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Space.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Speak (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Speak.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Speaker (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Speaker.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Special (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Special.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Specific (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Specific.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Speech (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Speech.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Speed (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Speed.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Spell (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spell.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Spelling (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spelling.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Spider (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spider.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sport (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sport.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Spring (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spring.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Stage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stage.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stair (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stair.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stamp (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stamp.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stand (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stand.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Start (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Start.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "State (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with State.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stay (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stay.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Steal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Steal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Step (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Step.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Still (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Still.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Stomach (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stomach.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stone (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stone.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Store (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Store.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Storm (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Storm.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Story (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Story.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Stove (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stove.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Strange (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strange.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Strategy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strategy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Strong (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strong.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Structure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Structure.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Stupid (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stupid.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Style (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Style.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Subject (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Subject.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Subway (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Subway.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Succeed (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Succeed.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Success (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Success.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Successful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Successful.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Suddenly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suddenly.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Suggestion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suggestion.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Suit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Summer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Summer.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sunday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sunday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Supermarket (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Supermarket.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Suppose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suppose.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sure (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sure.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Surprising (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surprising.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Survey (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Survey.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Sweater (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sweater.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Sweet (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sweet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Swim (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Swim.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Swimming (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Swimming.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Symbol (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Symbol.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "System (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with System.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tablet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tablet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Take (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Take.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Talk (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Talk.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tall (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tall.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Target (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Target.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Task (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Task.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Teach (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Teach.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Teaching (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Teaching.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Team (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Team.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Technology (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Technology.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Teenage (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Teenage.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Teenager (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Teenager.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Television (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Television.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tell (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tell.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Temperature (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Temperature.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tennis (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tennis.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Term (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Term.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Terrible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Terrible.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Text (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Text.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Than (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Than.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Thank (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thank.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Theater (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Theater.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Their (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Their.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Them (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Them.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Themselves (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Themselves.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Then (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Then.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "There (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with There.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "They (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with They.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Thick (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thick.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Thief (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thief.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Thin (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thin.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Thing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thing.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Think (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Think.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Thinking (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thinking.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Thirsty (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thirsty.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Thought (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thought.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Throw (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Throw.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Thursday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thursday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Ticket (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ticket.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tip (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tip.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tired (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tired.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Title (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Title.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Together (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Together.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Toilet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Toilet.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tomato (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tomato.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Too (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Too.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tool (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tool.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tooth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tooth.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Topic (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Topic.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Touch (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Touch.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tour (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tour.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tourism (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tourism.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tourist (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tourist.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Toward (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Toward.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Towel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Towel.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tower (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tower.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Track (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Track.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Tradition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tradition.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Traditional (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Traditional.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Train (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Train.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Training (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Training.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Transportation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Transportation.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Trash (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trash.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Traveler (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Traveler.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Trip (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trip.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Trouble (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trouble.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Truck (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Truck.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "True (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with True.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Try (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Try.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "T-shirt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with T-shirt.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tuesday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tuesday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Tv (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tv.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Twice (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Twice.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Type (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Type.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Typical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Typical.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Umbrella (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Umbrella.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Understanding (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Understanding.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Unfortunately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unfortunately.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Unhappy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unhappy.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Unit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unit.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "United (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with United.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Unusual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unusual.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Upstairs (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Upstairs.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Us (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Us.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Use (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Use.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Used to modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Used to modal.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Useful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Useful.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "User (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with User.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Usual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Usual.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Usually (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Usually.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Vacation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vacation.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Valley (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Valley.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Variety (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Variety.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Very (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Very.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Video (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Video.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Virus (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Virus.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Visitor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Visitor.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Voice (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Voice.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wait (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wait.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Waiter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Waiter.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wake (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wake.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Want (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Want.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "War (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with War.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Warm (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Warm.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wash (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wash.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Washing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Washing.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wave (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wave.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Way (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Way.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "We (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with We.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Weak (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Weak.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wear (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wear.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Web (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Web.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Website (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Website.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wedding (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wedding.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wednesday (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wednesday.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Week (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Week.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Weekend (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Weekend.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wet (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wheel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wheel.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "While (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with While.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Who (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Who.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Whole (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Whole.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Why (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Why.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wide (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wide.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wild (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wild.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Will modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Will modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Win (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Win.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wine (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wine.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Winner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Winner.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "With (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with With.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Without (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Without.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wonderful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wonderful.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wood (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wood.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Wooden (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wooden.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Word (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Word.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Worker (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Worker.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Working (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Working.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "World (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with World.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Worried (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Worried.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Worse (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Worse.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Worst (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Worst.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Would modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Would modal.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Write (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Write.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Writing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Writing.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Wrong (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wrong.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Yard (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Yard.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Yet (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Yet.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "You (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with You.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Young (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Young.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Your (det.)",
                                "back": "det. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Your.",
                                "category": "Oxford 3000 A1"
                },
                {
                                "front": "Yours (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Yours.",
                                "category": "Oxford 3000 A2"
                },
                {
                                "front": "Yourself (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Yourself.",
                                "category": "Oxford 3000 A1"
                }
]
    },
    {
        id: 'deck_intermediate_b1_b2',
        title: '📈 B1-B2 Pre-IELTS Academic Vocab (1201 Kartochka)',
        description: 'Band 5.5-6.5 darajasidagi talabalar uchun akademik so\'zlar va iboralar to\'plami.',
        level: 'B1-B2',
        badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        icon: '📈',
        isPremiumOnly: false,
        cards: [
                {
                                "front": "Contents",
                                "back": "MyGrammarLab	Intermediate	B1–B2",
                                "phonetic": "",
                                "example": "Example sentence with Contents."
                },
                {
                                "front": "Future	perfect",
                                "back": "simple	and	continuous They will have finished by tomorr ow",
                                "phonetic": "",
                                "example": "Example sentence with Future	perfect."
                },
                {
                                "front": "Verbs	with",
                                "back": "ing	forms	and	infinitives	 Diagnostic test 191",
                                "phonetic": "",
                                "example": "Example sentence with Verbs	with."
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
                },
                {
                                "front": "Abandon (v.)",
                                "back": "Tashlab ketmoq, voz kechmoq",
                                "phonetic": "/əˈbæn.dən/",
                                "example": "They had to abandon their car in the snowstorm.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Abroad (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Abroad.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Absolute (adj.)",
                                "back": "Mutlaq, to'liq",
                                "phonetic": "/ˈæb.sə.luːt/",
                                "example": "There is absolute silence in the examination hall.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Absolutely (adv.)",
                                "back": "Mutlaqo, albatta",
                                "phonetic": "/ˌæb.səˈluːt.li/",
                                "example": "You are absolutely right about this essay point.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Acceptable (adj.)",
                                "back": "Qabul qilib bo'ladigan, maqbul",
                                "phonetic": "/əkˈsep.tə.bəl/",
                                "example": "His explanation was acceptable to the committee.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Accompany (v.)",
                                "back": "Hamrohlik qilmoq, birga bormoq",
                                "phonetic": "/əˈkʌm.pə.ni/",
                                "example": "Children must be accompanied by a parent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Account (n.)",
                                "back": "Hisob-kitob, xisob raqami",
                                "phonetic": "/əˈkaʊnt/",
                                "example": "Open a student bank account with low fees.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Accurate (adj.)",
                                "back": "Aniq, to'g'ri",
                                "phonetic": "/ˈæk.jə.rət/",
                                "example": "Ensure your measurements are precise and accurate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Accuse (v.)",
                                "back": "Ayblamoq",
                                "phonetic": "/əˈkjuːz/",
                                "example": "Do not accuse anyone without clear empirical evidence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Achievement (n.)",
                                "back": "Yutuq, muvaffaqiyat",
                                "phonetic": "/əˈtʃiːv.mənt/",
                                "example": "Graduating with honors is a great achievement.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Acknowledge (v.)",
                                "back": "Tan olmoq, tasdiqlamoq",
                                "phonetic": "/əkˈnɒl.ɪdʒ/",
                                "example": "He acknowledged his mistake publicly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Acquire (v.)",
                                "back": "Egallamoq, orttirmoq",
                                "phonetic": "/əˈkwaɪə/",
                                "example": "Students acquire language skills through practice.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Actual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Actual.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ad (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ad.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Adapt (v.)",
                                "back": "Moslashmoq, ko'nikmoq",
                                "phonetic": "/əˈdæpt/",
                                "example": "It takes time to adapt to a new cultural environment.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Addition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Addition.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Additional (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Additional.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Administration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Administration.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Admire (v.)",
                                "back": "Havas qilmoq, qoyil qolmoq",
                                "phonetic": "/ədˈmaɪə/",
                                "example": "I admire her dedication to scientific research.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Admit (v.)",
                                "back": "Tan olmoq",
                                "phonetic": "/ədˈmɪt/",
                                "example": "He admitted that the math problem was challenging.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Adopt (v.)",
                                "back": "Qabul qilmoq, boqib olmoq",
                                "phonetic": "/əˈdɒpt/",
                                "example": "The board voted to adopt new teaching guidelines.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Advanced (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Advanced.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Advise (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Advise.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Affair (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Affair.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Afford (v.)",
                                "back": "Qurbi yetmoq",
                                "phonetic": "/əˈfɔːd/",
                                "example": "We can afford quality educational courses now.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Afterward (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Afterward.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Agency (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Agency.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Agenda (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Agenda.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Agent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Agent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Aggressive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Aggressive.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Agreement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Agreement.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ahead (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ahead.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Aircraft (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Aircraft.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Alarm (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Alarm.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Album (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Album.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Alcohol (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Alcohol.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Alcoholic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Alcoholic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Alter (v.)",
                                "back": "O'zgartirmoq",
                                "phonetic": "/ˈɒl.tə/",
                                "example": "Climate change alters seasonal weather patterns.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Amazed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Amazed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ambition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ambition.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Analysis (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Analysis.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Anger (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anger.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Angle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Angle.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Anniversary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anniversary.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Announce (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Announce.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Announcement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Announcement.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Annoy (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Annoy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Annoyed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Annoyed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Annoying (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Annoying.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Annual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Annual.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Anxious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Anxious.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Apart (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Apart.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Apologize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Apologize.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Apparent (adj.)",
                                "back": "Aniq, ko'rinib turgan",
                                "phonetic": "/əˈpær.ənt/",
                                "example": "It became apparent that the plan needed revisions.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Apparently (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Apparently.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Application (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Application.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Appointment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Appointment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Appreciate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Appreciate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Appropriate (adj.)",
                                "back": "Mos, munosib",
                                "phonetic": "/əˈprəʊ.pri.ət/",
                                "example": "Wear appropriate attire for formal events.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Approval (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Approval.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Approve (v.)",
                                "back": "Ma'qullamoq",
                                "phonetic": "/əˈpruːv/",
                                "example": "The principal approved our student field trip.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Approximately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Approximately.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Arise (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Arise.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Armed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Armed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Arms (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Arms.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Arrival (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Arrival.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Artificial (adj.)",
                                "back": "Sun'iy",
                                "phonetic": "/ˌɑː.tɪˈfɪʃ.əl/",
                                "example": "Artificial intelligence transforms modern work.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Artistic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Artistic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ashamed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ashamed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Aside (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Aside.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Aspect (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Aspect.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Assess (v.)",
                                "back": "Baxolamoq, baholash",
                                "phonetic": "/əˈses/",
                                "example": "Examiners assess lexical resource and grammar.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Assessment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Assessment.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Assignment (n.)",
                                "back": "Vazifa, topshiriq",
                                "phonetic": "/əˈsaɪn.mənt/",
                                "example": "Submit your assignment by midnight.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Assist (v.)",
                                "back": "Yordamlashmoq",
                                "phonetic": "/əˈsɪst/",
                                "example": "Tutors assist students with homework questions.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Associate (v.)",
                                "back": "Bog'lamoq, aloqador bo'lmoq",
                                "phonetic": "/əˈsəʊ.si.eɪt/",
                                "example": "We associate spring with blooming flowers.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Associated (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Associated.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Association (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Association.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Assume (v.)",
                                "back": "Taxmin qilmoq",
                                "phonetic": "/əˈsjuːm/",
                                "example": "Never assume without checking authoritative facts.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Atmosphere (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Atmosphere.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Attach (v.)",
                                "back": "Biriktirmoq",
                                "phonetic": "/əˈtætʃ/",
                                "example": "Attach your photo to the application form.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Attitude (n.)",
                                "back": "Munosabat, qarash",
                                "phonetic": "/ˈæt.ɪ.tʃuːd/",
                                "example": "Maintain a positive attitude during study sessions.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Attorney (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Attorney.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Attract (v.)",
                                "back": "Jalb qilmoq",
                                "phonetic": "/əˈtrækt/",
                                "example": "Historic monuments attract international tourists.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Attraction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Attraction.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Authority (n.)",
                                "back": "Hokimiyat, vakolat",
                                "phonetic": "/ɔːˈθɒr.ə.ti/",
                                "example": "Local authorities built modern sports facilities.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Automatic (adj.)",
                                "back": "Avtomatik",
                                "phonetic": "/ˌɔː.təˈmæt.ɪk/",
                                "example": "The doors opened automatically upon arrival.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Automatically (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Automatically.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Aware (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Aware.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Backward (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Backward.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bacteria (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bacteria.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bake (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bake.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Barrier (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Barrier.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Basic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Basic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Basically (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Basically.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Basis (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Basis.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Battery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Battery.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Battle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Battle.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Beauty (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beauty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bee (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bee.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Beg (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Beg.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Being (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Being.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Belief (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Belief.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bell (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bell.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bitter (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bitter.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Blind (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Blind.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bond (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bond.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Border (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Border.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bother (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bother.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Branch (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Branch.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Brave (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Brave.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Breast (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Breast.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Breath (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Breath.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Breathe (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Breathe.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Breathing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Breathing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bride (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bride.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Brief (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Brief.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Broad (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Broad.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bubble (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bubble.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Budget (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Budget.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bullet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bullet.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bunch (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bunch.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Bury (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bury.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Bush (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Bush.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cable (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Calculate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Calculate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cancel (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cancel.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cancer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cancer.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Candidate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Candidate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Cap (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cap.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Capable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Capable.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Capacity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Capacity.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Captain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Captain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Careless (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Careless.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Category (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Category.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ceiling (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ceiling.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Celebration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Celebration.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Central (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Central.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ceremony (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ceremony.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Chain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Chairman (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chairman.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Champion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Champion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Channel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Channel.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Chapter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chapter.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Cheerful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cheerful.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Chest (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Chest.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Childhood (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Childhood.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Circumstance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Circumstance.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cite (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cite.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Citizen (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Citizen.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Civil (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Civil.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Clause (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clause.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Clever (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Clever.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Client (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Client.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Closely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Closely.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cloth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cloth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Coal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Coal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Coin (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Coin.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Collection (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Collection.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Colored (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Colored.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Combination (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Combination.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Combine (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Combine.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Commit (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Commit.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Commitment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Commitment.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Committee (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Committee.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Commonly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Commonly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Communication (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Communication.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Comparison (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Comparison.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Competitive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Competitive.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Competitor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Competitor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Complaint (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Complaint.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Complex (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Complex.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Complicated (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Complicated.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Component (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Component.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Concentrate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Concentrate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Concentration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Concentration.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Concept (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Concept.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Concerned (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Concerned.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Conclude (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Conclude.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Conclusion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Conclusion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Confidence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confidence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Confident (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confident.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Confirm (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confirm.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Confuse (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confuse.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Confused (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confused.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Confusing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Confusing.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Congress (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Congress.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Connection (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Connection.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Conscious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Conscious.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Consideration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Consideration.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Consist (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Consist.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Consistent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Consistent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Constant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Constant.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Constantly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Constantly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Construct (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Construct.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Construction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Construction.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Consume (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Consume.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Consumer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Consumer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Container (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Container.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Contemporary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Contemporary.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Continuous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Continuous.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Contribute (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Contribute.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Contribution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Contribution.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Convenient (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Convenient.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Convert (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Convert.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Convince (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Convince.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Convinced (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Convinced.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Corn (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Corn.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Corporate (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Corporate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Costume (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Costume.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Cotton (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cotton.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Council (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Council.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Countryside (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Countryside.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "County (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with County.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Courage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Courage.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Court (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Court.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Covered (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Covered.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Creation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Creation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Creature (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Creature.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Crew (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crew.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Crisis (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crisis.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Criterion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Criterion.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Critic (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Critic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Critical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Critical.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Criticism (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Criticism.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Criticize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Criticize.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Crop (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crop.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Crucial (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Crucial.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Cruel (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cruel.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Cultural (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cultural.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Cupboard (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Cupboard.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Currency (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Currency.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Current (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Current.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Currently (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Currently.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Curtain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Curtain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Curved (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Curved.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Custom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Custom.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Debt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Debt.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Decade (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Decade.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Decent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Decent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Declare (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Declare.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Decorate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Decorate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Decoration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Decoration.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Deeply (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deeply.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Defend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Defend.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Defense (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Defense.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Define (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Define.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Definite (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Definite.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Definition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Definition.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Deliberate (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deliberate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Deliberately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deliberately.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Deliver (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deliver.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Delivery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Delivery.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Demonstrate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Demonstrate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Deny (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deny.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Departure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Departure.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Depressed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Depressed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Depressing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Depressing.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Depth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Depth.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Deserve (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Deserve.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Desperate (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Desperate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Despite (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Despite.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Destination (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Destination.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Detailed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Detailed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Detect (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Detect.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Determine (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Determine.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Determined (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Determined.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Development (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Development.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Diagram (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Diagram.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Diamond (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Diamond.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Difficulty (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Difficulty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Dig (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dig.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Directly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Directly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Dirt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dirt.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Disappointed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Disappointed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Disappointing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Disappointing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Discipline (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Discipline.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Discount (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Discount.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Dishonest (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dishonest.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Disk (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Disk.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Dismiss (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dismiss.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Distribute (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Distribute.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Distribution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Distribution.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "District (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with District.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Divide (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Divide.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Division (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Division.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Documentary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Documentary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Domestic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Domestic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Dominate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dominate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Donate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Donate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Drag (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drag.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Dramatic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dramatic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Dressed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dressed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Drum (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drum.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Drunk (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Drunk.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Due (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Due.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Dust (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Dust.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Duty (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Duty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Earthquake (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Earthquake.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Eastern (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Eastern.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Economic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Economic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Economy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Economy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Edge (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Edge.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Edit (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Edit.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Editor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Editor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Educate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Educate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Educated (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Educated.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Educational (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Educational.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Effective (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Effective.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Effectively (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Effectively.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Efficient (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Efficient.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Effort (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Effort.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Elderly (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Elderly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Elect (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Elect.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Election (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Election.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Element (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Element.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Elsewhere (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Elsewhere.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Embarrassed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Embarrassed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Embarrassing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Embarrassing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Emerge (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emerge.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Emergency (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emergency.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Emotion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emotion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Emotional (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emotional.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Emphasis (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emphasis.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Emphasize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Emphasize.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Employment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Employment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Enable (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enable.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Enemy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enemy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Engage (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Engage.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Engaged (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Engaged.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Engineering (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Engineering.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Enhance (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enhance.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ensure (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ensure.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Entertain (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entertain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Entertainment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entertainment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Enthusiasm (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enthusiasm.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Enthusiastic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Enthusiastic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Entire (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entire.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Entirely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entirely.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Entrance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entrance.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Entry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Entry.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Environmental (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Environmental.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Episode (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Episode.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Equally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Equally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Establish (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Establish.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Estate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Estate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ethical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ethical.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Evaluate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Evaluate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Eventually (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Eventually.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Examination (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Examination.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Examine (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Examine.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Excitement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Excitement.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Exhibition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exhibition.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Existence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Existence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Exit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exit.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Expand (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expand.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Expectation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expectation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Expected (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expected.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Expense (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expense.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Experienced (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Experienced.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Explode (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Explode.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Exploration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Exploration.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Explore (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Explore.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Explosion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Explosion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Expose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Expose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Extend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extend.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Extent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "External (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with External.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Extraordinary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Extraordinary.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Facility (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Facility.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Failure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Failure.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fairly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fairly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Faith (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Faith.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Familiar (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Familiar.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fancy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fancy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fascinating (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fascinating.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fashionable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fashionable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fasten (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fasten.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fault (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fault.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Favor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Favor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Feather (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feather.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Federal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Federal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fee (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fee.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Feedback (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Feedback.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fellow (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fellow.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fence.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fighting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fighting.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "File (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with File.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Financial (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Financial.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Finding (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Finding.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Firm (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Firm.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fitness (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fitness.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fixed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fixed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Flag (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flag.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Flame (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flame.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Flexible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flexible.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Float (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Float.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Flour (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Flour.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fold (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fold.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Folding (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Folding.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Forever (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Forever.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Forgive (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Forgive.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Former (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Former.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fortune (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fortune.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Found (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Found.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Freedom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Freedom.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Freeze (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Freeze.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Frequency (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frequency.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Frequently (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frequently.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Friendship (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Friendship.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Frighten (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frighten.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Frightened (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frightened.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Frightening (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frightening.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Frozen (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Frozen.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fry (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fry.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fuel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fuel.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Fully (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fully.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Function (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Function.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Funding (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Funding.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Fur (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Fur.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Furthermore (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Furthermore.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Gang (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gang.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Garage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Garage.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Gather (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gather.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Generally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Generally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Generate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Generate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Generation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Generation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Generous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Generous.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Genre (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Genre.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Gentle (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gentle.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Gentleman (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gentleman.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ghost (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ghost.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Glad (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Glad.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Global (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Global.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Glove (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Glove.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Goods (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Goods.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Govern (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Govern.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Governor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Governor.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Grab (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grab.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Grade (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grade.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Gradually (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Gradually.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Grain (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Grand (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grand.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Grateful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Grateful.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Growth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Growth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Guilty (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Guilty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hang (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hang.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Happiness (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Happiness.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hardly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hardly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Harmful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Harmful.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Headline (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Headline.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hearing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hearing.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Heating (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Heating.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Heaven (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Heaven.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Heavily (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Heavily.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Heel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Heel.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Helicopter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Helicopter.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hell (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hell.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Hesitate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hesitate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Highly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Highly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Highway (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Highway.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hire (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hire.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Historic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Historic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Historical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Historical.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hollow (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hollow.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Holy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Holy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Honest (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Honest.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Horrible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Horrible.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Horror (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Horror.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Host (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Host.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Household (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Household.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Housing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Housing.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Humor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Humor.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Humorous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Humorous.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Hunt (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hunt.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Hunting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hunting.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Hurricane (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Hurricane.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Identity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Identity.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ignore (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ignore.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Illegal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Illegal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Illustrate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Illustrate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Illustration (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Illustration.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Imaginary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Imaginary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Imagination (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Imagination.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Immediate (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Immediate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Immigrant (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Immigrant.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Impatient (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impatient.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Imply (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Imply.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Importance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Importance.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Impose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Impress (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impress.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Impressed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impressed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Impression (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impression.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Impressive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Impressive.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Improvement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Improvement.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Inch (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Inch.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Incident (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Incident.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Income (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Income.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Increasingly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Increasingly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Incredibly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Incredibly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Indeed (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Indeed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Indicate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Indicate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Indirect (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Indirect.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Indoor (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Indoor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Indoors (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Indoors.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Industrial (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Industrial.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Infection (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Infection.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Inform (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Inform.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ingredient (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ingredient.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Initial (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Initial.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Initially (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Initially.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Initiative (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Initiative.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Injure (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Injure.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Injured (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Injured.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Inner (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Inner.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Innocent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Innocent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Inquiry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Inquiry.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Insight (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Insight.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Insist (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Insist.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Inspire (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Inspire.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Install (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Install.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Instance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Instance.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Institute (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Institute.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Institution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Institution.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Insurance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Insurance.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Intelligence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intelligence.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Intend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intend.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Intended (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intended.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Intense (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intense.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Intention (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Intention.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Internal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Internal.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Interpret (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Interpret.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Interrupt (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Interrupt.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Invest (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Invest.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Investigate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Investigate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Investigation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Investigation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Investment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Investment.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Involved (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Involved.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Issue (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Issue.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "It (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with It.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Journal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Journal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Journey (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Journey.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Joy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Joy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Judgment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Judgment.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Junior (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Junior.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Justice (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Justice.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Justify (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Justify.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Keyboard (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Keyboard.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Killing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Killing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Labor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Labor.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Laboratory (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Laboratory.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Landscape (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Landscape.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Largely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Largely.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Latest (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Latest.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Lay (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lay.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Layer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Layer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Leadership (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leadership.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Leading (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leading.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Leaf (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leaf.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "League (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with League.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Lean (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lean.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Leather (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leather.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Legal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Legal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Leisure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Leisure.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Length (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Length.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "License (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with License.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Limited (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Limited.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Lip (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lip.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Literature (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Literature.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Lively (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lively.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Loan (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Loan.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Locate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Locate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Located (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Located.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Location (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Location.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Logical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Logical.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Lonely (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lonely.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Loose (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Loose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Lord (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lord.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Loss (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Loss.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Lower (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lower.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Lung (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Lung.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Luxury (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Luxury.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mad (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mad.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mainly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mainly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Maintain (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Maintain.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Majority (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Majority.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Management (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Management.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Marketing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Marketing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Marriage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Marriage.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Massive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Massive.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Matching (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Matching.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Means (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Means.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Meanwhile (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Meanwhile.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Measurement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Measurement.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Medium (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Medium.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Melt (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Melt.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mental (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mental.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mild (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mild.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mineral (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mineral.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Minister (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Minister.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Minor (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Minor.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Minority (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Minority.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mission (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mission.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mixed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mixed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mixture (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mixture.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Modify (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Modify.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mood (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mood.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mount (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mount.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mud (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mud.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Multiple (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Multiple.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Multiply (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Multiply.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Muscle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Muscle.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Mysterious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mysterious.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Mystery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Mystery.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Nail (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nail.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Nation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Naturally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Naturally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Neat (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Neat.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Necessarily (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Necessarily.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Needle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Needle.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Nerve (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nerve.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Net (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Net.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Nevertheless (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nevertheless.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Nightmare (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nightmare.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Northern (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Northern.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Notion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Notion.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Nuclear (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Nuclear.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Numerous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Numerous.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Obey (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Obey.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Obligation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Obligation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Observation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Observation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Observe (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Observe.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Obtain (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Obtain.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Obvious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Obvious.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Obviously (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Obviously.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Occasion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Occasion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Occasionally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Occasionally.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Occur (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Occur.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Odd (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Odd.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Offend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Offend.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Offense (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Offense.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Offensive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Offensive.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Official (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Official.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Old-fashioned (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Old-fashioned.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Opening (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Opening.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Operate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Operate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Operation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Operation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Opponent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Opponent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Oppose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Oppose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Opposed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Opposed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Opposition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Opposition.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Organ (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Organ.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Organized (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Organized.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Organizer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Organizer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Origin (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Origin.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Originally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Originally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Otherwise (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Otherwise.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Ought modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ought modal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ours (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ours.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Outcome (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Outcome.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Outdoor (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Outdoor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Outdoors (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Outdoors.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Outer (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Outer.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Owe (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Owe.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Package (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Package.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Painful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Painful.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pale (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pale.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pan (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pan.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Panel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Panel.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Participant (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Participant.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Participate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Participate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Particularly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Particularly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Partly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Partly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Passage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Passage.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Passion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Passion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Path (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Path.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Payment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Payment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Peaceful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Peaceful.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Percentage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Percentage.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Perfectly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Perfectly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Performance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Performance.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Permanent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Permanent.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Personally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Personally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Perspective (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Perspective.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Persuade (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Persuade.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Phase (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Phase.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Phenomenon (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Phenomenon.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Philosophy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Philosophy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Photographer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Photographer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Photography (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Photography.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pipe (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pipe.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pitch (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pitch.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Plain (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Plain.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Planning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Planning.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pleasant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pleasant.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pleasure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pleasure.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Plenty (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Plenty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Plot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Plot.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Poem (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poem.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Poet (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poet.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Poetry (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poetry.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pointed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pointed.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Poisonous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poisonous.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Policy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Policy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Political (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Political.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Politician (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Politician.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Politics (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Politics.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Popularity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Popularity.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Port (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Port.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Portrait (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Portrait.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Possess (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Possess.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Possibly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Possibly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pot.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pour (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pour.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Poverty (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Poverty.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Powder (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Powder.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Powerful (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Powerful.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Practical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Practical.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pray (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pray.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Prayer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prayer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Prediction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prediction.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pregnant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pregnant.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Preparation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Preparation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Prepared (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prepared.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Presence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Presence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Presentation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Presentation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Preserve (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Preserve.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Pressure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pressure.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pretend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pretend.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Previous (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Previous.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Previously (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Previously.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Priest (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Priest.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Primary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Primary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Prime (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prime.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Prince (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prince.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Princess (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Princess.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Principal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Principal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Principle (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Principle.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Printing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Printing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Priority (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Priority.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Prisoner (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prisoner.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Privacy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Privacy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Private (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Private.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Procedure (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Procedure.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Producer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Producer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Production (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Production.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Profession (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Profession.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Profit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Profit.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Promote (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Promote.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Proof (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Proof.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Proper (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Proper.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Properly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Properly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Property (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Property.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Proposal (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Proposal.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Propose (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Propose.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Prospect (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prospect.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Protection (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Protection.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Proud (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Proud.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Prove (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Prove.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Psychologist (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Psychologist.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Psychology (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Psychology.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Publication (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Publication.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Punish (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Punish.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Punishment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Punishment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Pure (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pure.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Pursue (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Pursue.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Qualification (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Qualification.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Qualified (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Qualified.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Qualify (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Qualify.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Quit (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quit.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Quotation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Quotation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Racing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Racing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Range (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Range.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Rapid (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rapid.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rapidly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rapidly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rare (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rare.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Rarely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rarely.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Raw (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Raw.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reaction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reaction.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Realistic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Realistic.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reality (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reality.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Reasonable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reasonable.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Recall (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recall.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Receipt (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Receipt.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Recommendation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recommendation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Recover (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Recover.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reduction (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reduction.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reference (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reference.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Reflect (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reflect.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Regional (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Regional.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Regularly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Regularly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Regulation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Regulation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reject (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reject.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Related (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Related.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relatively (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relatively.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Relaxed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relaxed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relaxing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relaxing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relevant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relevant.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reliable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reliable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Relief (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Relief.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Religion (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Religion.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Religious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Religious.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Rely (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rely.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Remain (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Remain.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Remind (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Remind.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Remote (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Remote.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Repeated (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Repeated.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Represent (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Represent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Reputation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reputation.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Require (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Require.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Requirement (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Requirement.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Reservation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reservation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Resist (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Resist.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Resolve (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Resolve.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Resort (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Resort.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Resource (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Resource.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Responsibility (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Responsibility.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Responsible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Responsible.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Retain (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Retain.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Retire (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Retire.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Retired (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Retired.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Reveal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Reveal.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Revise (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Revise.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Revolution (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Revolution.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rhythm (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rhythm.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rid (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rid.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Robot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Robot.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Romantic (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Romantic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Root (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Root.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rope (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rope.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Rough (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rough.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Royal (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Royal.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Rub (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rub.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Rural (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Rural.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Safety (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Safety.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sailor (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sailor.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sample (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sample.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sand (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sand.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Satellite (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Satellite.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Satisfied (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Satisfied.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Satisfy (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Satisfy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Saving (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Saving.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Scale (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scale.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Scan (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scan.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Scientific (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Scientific.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Script (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Script.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sculpture (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sculpture.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Secondary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Secondary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sector (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sector.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Security (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Security.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Seed (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Seed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Seek (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Seek.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Select (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Select.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Selection (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Selection.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Self (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Self.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Senate (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Senate.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Senator (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Senator.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Senior (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Senior.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sensible (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sensible.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sensitive (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sensitive.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sequence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sequence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Seriously (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Seriously.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Servant (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Servant.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Session (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Session.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Setting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Setting.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Settle (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Settle.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Severe (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Severe.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sex (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sex.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sexual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sexual.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shade (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shade.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shadow (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shadow.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shall modal (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shall modal.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shallow (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shallow.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shame (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shame.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sharp (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sharp.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shelf (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shelf.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shell (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shell.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shift (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shift.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shine (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shine.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shiny (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shiny.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shocked (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shocked.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shoot (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shoot.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Shooting (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shooting.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shot.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Shy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Shy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sight (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sight.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Significant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Significant.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Significantly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Significantly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Silence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Silence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Silent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Silent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Silk (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Silk.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Silly (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Silly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Similarity (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Similarity.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Similarly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Similarly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Simply (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Simply.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sincere (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sincere.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sink (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sink.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Slave (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slave.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Slight (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slight.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Slightly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slightly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Slip (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Slip.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Smooth (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Smooth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Software (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Software.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Soil (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soil.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Solar (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Solar.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Somewhat (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Somewhat.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Soul (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Soul.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Southern (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Southern.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Species (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Species.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Specifically (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Specifically.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spending (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spending.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spicy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spicy.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spirit (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spirit.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spiritual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spiritual.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Spoken (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spoken.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spot (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spot.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Spread (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Spread.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Stable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stable.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Stadium (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stadium.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Staff (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Staff.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Stare (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stare.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Statistic (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Statistic.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Statue (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Statue.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Status (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Status.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Steady (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Steady.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Steel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Steel.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Steep (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Steep.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sticky (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sticky.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Stiff (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stiff.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Stock (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stock.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Stranger (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stranger.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Stream (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stream.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Strength (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strength.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Strict (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strict.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "String (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with String.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Strongly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Strongly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Studio (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Studio.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Stuff (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Stuff.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Submit (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Submit.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Substance (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Substance.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Successfully (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Successfully.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sudden (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sudden.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Suffer (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suffer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Suitable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Suitable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Summarize (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Summarize.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Summary (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Summary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Supporter (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Supporter.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Surely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surely.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Surface (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surface.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Surgery (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surgery.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Surround (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surround.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Surrounding (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Surrounding.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Survive (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Survive.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Swear (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Swear.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Sweep (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sweep.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Switch (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Switch.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Sympathy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Sympathy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Symptom (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Symptom.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tail (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tail.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tale (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tale.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Talent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Talent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Talented (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Talented.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tank (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tank.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tape (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tape.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Technical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Technical.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Technique (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Technique.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Temporary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Temporary.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tend (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tend.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tent (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Theirs (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Theirs.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Theme (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Theme.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Theory (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Theory.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Therapy (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Therapy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Therefore (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Therefore.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Threat (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Threat.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Threaten (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Threaten.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Throat (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Throat.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Thus (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Thus.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tight (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tight.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tiny (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tiny.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tire (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tire.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Toe (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Toe.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ton (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ton.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tone (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tone.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tongue (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tongue.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Totally (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Totally.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tough (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tough.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Trainer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trainer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Transform (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Transform.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Transition (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Transition.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Translate (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Translate.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Translation (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Translation.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Transport (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Transport.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Treat (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Treat.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Treatment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Treatment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Trend (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trend.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Trial (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Trial.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tropical (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tropical.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Truly (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Truly.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Truth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Truth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tube (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tube.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Tune (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tune.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Tunnel (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Tunnel.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Typically (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Typically.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ugly (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ugly.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Ultimately (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Ultimately.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Unable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Uncomfortable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Uncomfortable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unconscious (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unconscious.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Underwear (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Underwear.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unemployed (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unemployed.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unemployment (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unemployment.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unexpected (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unexpected.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Unfair (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unfair.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Union (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Union.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unique (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unique.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Universe (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Universe.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Unknown (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unknown.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Unless (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unless.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unlike (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unlike.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unlikely (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unlikely.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unnecessary (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unnecessary.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Unpleasant (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Unpleasant.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Upon (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Upon.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Upper (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Upper.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Upward (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Upward.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Urban (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Urban.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Urge (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Urge.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Valuable (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Valuable.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Value (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Value.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Van (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Van.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Various (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Various.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Vary (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vary.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Vast (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vast.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Venue (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Venue.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Version (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Version.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Via (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Via.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Victim (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Victim.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Victory (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Victory.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Viewer (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Viewer.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Violence (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Violence.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Violent (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Violent.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Virtual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Virtual.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Vision (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vision.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Visual (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Visual.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Vital (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vital.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Vitamin (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Vitamin.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Volume (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Volume.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wage (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wage.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Warn (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Warn.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Warning (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Warning.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Weakness (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Weakness.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wealth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wealth.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wealthy (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wealthy.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Weapon (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Weapon.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Weigh (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Weigh.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Western (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Western.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Whenever (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Whenever.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Whereas (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Whereas.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wherever (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wherever.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Whether (conj.)",
                                "back": "conj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Whether.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Whom (pron.)",
                                "back": "pron. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Whom.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Widely (adv.)",
                                "back": "adv. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Widely.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wildlife (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wildlife.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Willing (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Willing.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wing (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wing.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Wire (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wire.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Wise (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wise.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Within (prep.)",
                                "back": "prep. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Within.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Wool (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wool.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Worth (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Worth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Wrap (v.)",
                                "back": "v. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Wrap.",
                                "category": "Oxford 3000 B2"
                },
                {
                                "front": "Written (adj.)",
                                "back": "adj. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Written.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Youth (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Youth.",
                                "category": "Oxford 3000 B1"
                },
                {
                                "front": "Zone (n.)",
                                "back": "n. ma'nosi",
                                "phonetic": "",
                                "example": "Example sentence with Zone.",
                                "category": "Oxford 3000 B2"
                }
]
    },
    {
        id: 'deck_advanced_c1_c2',
        title: '📙 C1-C2 Master IELTS Collocations (99 Kartochka)',
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
