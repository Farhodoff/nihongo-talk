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
        title: '🌱 A1-A2 Starter Vocabulary (560 Kartochka)',
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
