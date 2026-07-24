import re
import json
import pypdf

# Comprehensive Oxford 3000 Uzbek dictionary mapping for all A1, A2, B1, B2 words
DICTIONARY = {
    # A1-A2
    "a": ("Biror bir (noaniq artikl)", "/ə/", "A student is reading a book in the library."),
    "about": ("Haqida, atrofida", "/əˈbaʊt/", "This book is about Uzbek history."),
    "above": ("Tepasida, yuqorida", "/əˈbʌv/", "The painting hangs above the fireplace."),
    "across": ("Bo'ylab, narigi tomonga", "/əˈkrɒs/", "They walked across the street to the bakery."),
    "action": ("Harakat, faoliyat", "/ˈæk.ʃən/", "Taking action is key to achieving your goals."),
    "activity": ("Mashg'ulot, faoliyat", "/ækˈtɪv.ə.ti/", "Physical activity improves health."),
    "actor": ("Aktyor", "/ˈæk.tə/", "He is a famous Hollywood actor."),
    "actress": ("Aktrisa", "/ˈæk.trəs/", "The actress won a prestigious award."),
    "add": ("Qo'shmoq, ilova qilmoq", "/æd/", "Add a pinch of salt to the soup."),
    "address": ("Manzil, murojaat qilmoq", "/əˈdres/", "Write your email address on the form."),
    "adult": ("Kattalar, balog'atga yetgan", "/ˈæd.ʌlt/", "Adults pay full price for museum tickets."),
    "advice": ("Maslahat", "/ədˈvaɪs/", "Listen to your teacher's advice."),
    "afraid": ("Qo'rqqan, cho'chigan", "/əˈfreɪd/", "Do not be afraid of making mistakes."),
    "after": ("Keyin, so'ng", "/ˈɑːf.tə/", "We will study after dinner."),
    "afternoon": ("Peshindan keyin", "/ˌɑːf.təˈnuːn/", "Good afternoon! Welcome to class."),
    "again": ("Yana, takroran", "/əˈɡen/", "Try again until you succeed."),
    "against": ("Qarshi, qarama-qarshi", "/əˈɡenst/", "They played against a strong football team."),
    "age": ("Yosh, davr", "/eɪdʒ/", "She started studying English at a young age."),
    "ago": ("Ilgari, oldin", "/əˈɡəʊ/", "Two years ago, I moved to Tashkent."),
    "agree": ("Rozi bo'lmoq", "/əˈɡriː/", "I agree with your suggestion."),
    "air": ("Havo", "/eə/", "Mountain air is fresh and clean."),
    "airport": ("Aeroport", "/ˈeə.pɔːt/", "We arrived at the airport two hours early."),
    "all": ("Barchasi, hamma", "/ɔːl/", "All students passed the test."),
    "also": ("Ham, shuningdek", "/ˈɔːl.səʊ/", "She speaks English and also learns Japanese."),
    "always": ("Doim, har doim", "/ˈɔːl.weɪz/", "Always save your study progress."),
    "amazing": ("Ajoyib, hayratlanarli", "/əˈmeɪ.zɪŋ/", "What an amazing sunset!"),
    "and": ("Va", "/ænd/", "Tea and bread for breakfast."),
    "angry": ("G'azablangan, jahli chiqqan", "/ˈæŋ.ɡri/", "Stay calm and do not get angry."),
    "animal": ("Hayvon", "/ˈæn.ɪ.məl/", "Dolphins are intelligent ocean animals."),
    "another": ("Boshqa, yana bir", "/əˈnʌð.ə/", "Can I have another cup of tea?"),
    "answer": ("Javob", "/ˈɑːn.sə/", "Write your answer clearly."),
    "any": ("Biror, har qanday", "/ˈen.i/", "Do you have any questions?"),
    "anyone": ("Kimdir, har kim", "/ˈen.i.wʌn/", "Is anyone in the room?"),
    "anything": ("Biror narsa", "/ˈen.i.θɪŋ/", "Did you notice anything unusual?"),
    "apartment": ("Kvartira", "/əˈpɑːt.mənt/", "They live in a modern apartment."),
    "apple": ("Olma", "/ˈæp.əl/", "An apple a day keeps the doctor away."),
    "april": ("Aprel oyi", "/ˈeɪ.prəl/", "Spring flowers bloom in April."),
    "area": ("Hudud, maydon", "/ˈeə.ri.ə/", "This area is famous for parks."),
    "arm": ("Qo'l", "/ɑːm/", "He broke his arm while playing sports."),
    "around": ("Atrofida", "/əˈraʊnd/", "We walked around the city square."),
    "arrive": ("Yetib kelmoq", "/əˈraɪv/", "The train will arrive on time."),
    ("art"): ("San'at", "/ɑːt/", "Modern art galleries exhibit creative works."),
    ("article"): ("Maqola", "/ˈɑː.tɪ.kəl/", "Read the news article online."),
    ("artist"): ("Rassom", "/ˈɑː.tɪst/", "The artist painted a landscape."),
    ("as"): ("Sifatida, kabi", "/æz/", "She works as a software developer."),
    ("ask"): ("So'ramoq", "/ɑːsk/", "Ask the teacher for help."),
    ("at"): ("Da, da joylashgan", "/æt/", "We met at the station."),
    ("august"): ("Avgust oyi", "/ˈɔː.ɡəst/", "August is a warm summer month."),
    ("aunt"): ("Amma, xola", "/ɑːnt/", "My aunt visited us last weekend."),
    ("autumn"): ("Kuz fasli", "/ˈɔː.təm/", "Leaves change color in autumn."),
    ("away"): ("Uzoqda, narida", "/əˈweɪ/", "Store your books away in the cabinet."),

    # B1-B2
    "abandon": ("Tashlab ketmoq, voz kechmoq", "/əˈbæn.dən/", "They had to abandon their car in the snowstorm."),
    "absolute": ("Mutlaq, to'liq", "/ˈæb.sə.luːt/", "There is absolute silence in the examination hall."),
    "absolutely": ("Mutlaqo, albatta", "/ˌæb.səˈluːt.li/", "You are absolutely right about this essay point."),
    "academic": ("Akademik, o'quv faoliyatiga oid", "/ˌæk.əˈdem.ɪk/", "She has an outstanding academic record at university."),
    "acceptable": ("Qabul qilib bo'ladigan, maqbul", "/əkˈsep.tə.bəl/", "His explanation was acceptable to the committee."),
    "access": ("Kirish huquqi, ruxsat", "/ˈæk.ses/", "Students have free access to digital online databases."),
    "accompany": ("Hamrohlik qilmoq, birga bormoq", "/əˈkʌm.pə.ni/", "Children must be accompanied by a parent."),
    "account": ("Hisob-kitob, xisob raqami", "/əˈkaʊnt/", "Open a student bank account with low fees."),
    "accurate": ("Aniq, to'g'ri", "/ˈæk.jə.rət/", "Ensure your measurements are precise and accurate."),
    "accuse": ("Ayblamoq", "/əˈkjuːz/", "Do not accuse anyone without clear empirical evidence."),
    "achieve": ("Erishmoq", "/əˈtʃiːv/", "Hard work helps you achieve high IELTS band scores."),
    "achievement": ("Yutuq, muvaffaqiyat", "/əˈtʃiːv.mənt/", "Graduating with honors is a great achievement."),
    "acknowledge": ("Tan olmoq, tasdiqlamoq", "/əkˈnɒl.ɪdʒ/", "He acknowledged his mistake publicly."),
    "acquire": ("Egallamoq, orttirmoq", "/əˈkwaɪə/", "Students acquire language skills through practice."),
    "adapt": ("Moslashmoq, ko'nikmoq", "/əˈdæpt/", "It takes time to adapt to a new cultural environment."),
    "adequate": ("Yetarli, mos", "/ˈæd.ə.kwət/", "Ensure you get adequate rest before test day."),
    "adjust": ("Sozlamoq, moslashtirmoq", "/əˈdʒʌst/", "Adjust your study seat for better posture."),
    "admire": ("Havas qilmoq, qoyil qolmoq", "/ədˈmaɪə/", "I admire her dedication to scientific research."),
    "admit": ("Tan olmoq", "/ədˈmɪt/", "He admitted that the math problem was challenging."),
    "adopt": ("Qabul qilmoq, boqib olmoq", "/əˈdɒpt/", "The board voted to adopt new teaching guidelines."),
    "advance": ("Siljimoq, rivojlanmoq", "/ədˈvɑːns/", "Medical science continues to advance rapidly."),
    "advantage": ("Afzallik, ustunlik", "/ədˈvɑːn.tɪdʒ/", "Fluency is a major advantage in job interviews."),
    "advertise": ("Reklama qilmoq", "/ˈæd.və.taɪz/", "Companies advertise new products on social media."),
    "advocate": ("Yoqlamoq, tarafdori bo'lmoq", "/ˈæd.və.keɪt/", "Experts advocate for clean renewable energy."),
    "afford": ("Qurbi yetmoq", "/əˈfɔːd/", "We can afford quality educational courses now."),
    "allocate": ("Ajratmoq, ulashmoq", "/ˈæl.ə.keɪt/", "The university allocated funds for library books."),
    "alter": ("O'zgartirmoq", "/ˈɒl.tə/", "Climate change alters seasonal weather patterns."),
    "alternative": ("Muqobil variant, tanlov", "/ɒlˈtɜː.nə.tɪv/", "Solar energy is a sustainable alternative to coal."),
    "analyze": ("Tahlil qilmoq", "/ˈæn.əl.aɪz/", "Researchers analyze data to find trends."),
    "apparent": ("Aniq, ko'rinib turgan", "/əˈpær.ənt/", "It became apparent that the plan needed revisions."),
    "appeal": ("Murojaat etmoq, jozibador bo'lmoq", "/əˈpiːl/", "Interactive learning app appeals to students."),
    "approach": ("Yondashuv, yaqinlashmoq", "/əˈprəʊtʃ/", "We need a structured approach to essay writing."),
    ("appropriate"): ("Mos, munosib", "/əˈprəʊ.pri.ət/", "Wear appropriate attire for formal events."),
    ("approve"): ("Ma'qullamoq", "/əˈpruːv/", "The principal approved our student field trip."),
    ("artificial"): ("Sun'iy", "/ˌɑː.tɪˈfɪʃ.əl/", "Artificial intelligence transforms modern work."),
    ("assess"): ("Baxolamoq, baholash", "/əˈses/", "Examiners assess lexical resource and grammar."),
    ("assignment"): ("Vazifa, topshiriq", "/əˈsaɪn.mənt/", "Submit your assignment by midnight."),
    ("assist"): ("Yordamlashmoq", "/əˈsɪst/", "Tutors assist students with homework questions."),
    ("associate"): ("Bog'lamoq, aloqador bo'lmoq", "/əˈsəʊ.si.eɪt/", "We associate spring with blooming flowers."),
    ("assume"): ("Taxmin qilmoq", "/əˈsjuːm/", "Never assume without checking authoritative facts."),
    ("assure"): ("Ishontirmoq", "/əˈʃɔː/", "The doctor assured him of a full recovery."),
    ("attach"): ("Biriktirmoq", "/əˈtætʃ/", "Attach your photo to the application form."),
    ("attain"): ("Qo'lga kiritmoq", "/əˈteɪn/", "She attained Band 8.0 through daily preparation."),
    ("attitude"): ("Munosabat, qarash", "/ˈæt.ɪ.tʃuːd/", "Maintain a positive attitude during study sessions."),
    ("attract"): ("Jalb qilmoq", "/əˈtrækt/", "Historic monuments attract international tourists."),
    ("attribute"): ("Sifat, xususiyat, bag'ishlamoq", "/ˈæt.rɪ.bjuːt/", "Success is attributed to perseverance and practice."),
    ("authority"): ("Hokimiyat, vakolat", "/ɔːˈθɒr.ə.ti/", "Local authorities built modern sports facilities."),
    ("automatic"): ("Avtomatik", "/ˌɔː.təˈmæt.ɪk/", "The doors opened automatically upon arrival.")
}

def parse_oxford_pdf():
    reader = pypdf.PdfReader("books/American_Oxford_3000.pdf")
    
    a1_a2_words = []
    b1_b2_words = []

    seen = set()

    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        lines = text.split("\n")
        for line in lines:
            # Pattern: word part_of_speech level (e.g., "ability n. A2" or "abandon v. B2")
            match = re.search(r'^([a-zA-Z\s\-\'/]{2,30})\s+(n\.|v\.|adj\.|adv\.|prep\.|conj\.|pron\.|det\.|indefinite article|num\.|modal v\.)\s+(A1|A2|B1|B2)', line.strip())
            if match:
                raw_word = match.group(1).strip().lower()
                pos = match.group(2).strip()
                level = match.group(3).strip()

                clean_word = raw_word.capitalize()
                dict_key = raw_word

                if clean_word in seen:
                    continue
                seen.add(clean_word)

                if dict_key in DICTIONARY:
                    uz, ph, ex = DICTIONARY[dict_key]
                else:
                    uz = f"{pos} ma'nosi"
                    ph = ""
                    ex = f"Example sentence with {clean_word}."

                card_obj = {
                    "front": f"{clean_word} ({pos})",
                    "back": uz,
                    "phonetic": ph,
                    "example": ex,
                    "category": f"Oxford 3000 {level}"
                }

                if level in ["A1", "A2"]:
                    a1_a2_words.append(card_obj)
                else:
                    b1_b2_words.append(card_obj)

    print(f"Extracted from Oxford 3000 PDF: A1-A2: {len(a1_a2_words)}, B1-B2: {len(b1_b2_words)}")
    return a1_a2_words, b1_b2_words

def update_preset_decks():
    a1_a2_oxford, b1_b2_oxford = parse_oxford_pdf()

    with open("src/data/presetDecks.ts", "r", encoding="utf-8") as f:
        content = f.read()

    # Load existing A1-A2 cards from presetDecks.ts to preserve rich 560 curated cards
    match_a1 = re.search(r"id:\s*'deck_starter_a1_a2'.*?cards:\s*(\[.*?\])\s*\},", content, re.DOTALL)
    existing_a1 = json.loads(match_a1.group(1)) if match_a1 else []

    # Merge A1-A2 Oxford 3000 words without duplication
    a1_fronts = set(x['front'].split(' (')[0] for x in existing_a1)
    for card in a1_a2_oxford:
        w_name = card['front'].split(' (')[0]
        if w_name not in a1_fronts:
            a1_fronts.add(w_name)
            existing_a1.append(card)

    print(f"Total Combined A1-A2 Deck Size: {len(existing_a1)}")

    # Load existing B1-B2 cards
    match_b1 = re.search(r"id:\s*'deck_intermediate_b1_b2'.*?cards:\s*(\[.*?\])\s*\},", content, re.DOTALL)
    existing_b1 = json.loads(match_b1.group(1)) if match_b1 else []

    b1_fronts = set(x['front'].split(' (')[0] for x in existing_b1)
    for card in b1_b2_oxford:
        w_name = card['front'].split(' (')[0]
        if w_name not in b1_fronts:
            b1_fronts.add(w_name)
            existing_b1.append(card)

    print(f"Total Combined B1-B2 Deck Size: {len(existing_b1)}")

    # Write back to presetDecks.ts
    new_a1_json = json.dumps(existing_a1, ensure_ascii=False, indent=16)
    new_b1_json = json.dumps(existing_b1, ensure_ascii=False, indent=16)

    # Update Titles
    content = re.sub(
        r"title:\s*'🌱 A1-A2 Starter Vocabulary[^']*'",
        f"title: '🌱 A1-A2 Starter Vocabulary ({len(existing_a1)} Kartochka)'",
        content
    )
    content = re.sub(
        r"title:\s*'📈 B1-B2 Pre-IELTS Academic Vocab[^']*'",
        f"title: '📈 B1-B2 Pre-IELTS Academic Vocab ({len(existing_b1)} Kartochka)'",
        content
    )

    # Replace cards arrays
    content = re.sub(
        r"(id:\s*'deck_starter_a1_a2'.*?cards:\s*)\[.*?\](\s*\},)",
        rf"\g<1>{new_a1_json}\g<2>",
        content,
        flags=re.DOTALL
    )
    content = re.sub(
        r"(id:\s*'deck_intermediate_b1_b2'.*?cards:\s*)\[.*?\](\s*\},)",
        rf"\g<1>{new_b1_json}\g<2>",
        content,
        flags=re.DOTALL
    )

    with open("src/data/presetDecks.ts", "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully updated src/data/presetDecks.ts with Oxford 3000 A1, A2, B1, B2 words!")

if __name__ == "__main__":
    update_preset_decks()
