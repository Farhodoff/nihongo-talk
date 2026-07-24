import os
import re
import json
import pypdf

BOOKS_DIR = "books"
PRESET_DECKS_TS = "src/data/presetDecks.ts"
CURRICULUM_DATA_TS = "src/data/curriculumData.ts"

# Common Uzbek translations lookup table for core IELTS & CEFR vocabulary
UZ_TRANSLATIONS = {
    "achieve": ("Erishmoq, qo'lga kiritmoq", "/əˈtʃiːv/", "She worked hard to achieve her target IELTS score."),
    "improve": ("Rivojlantirmoq, yaxshilamoq", "/ɪmˈpruːv/", "Daily reading will improve your English vocabulary."),
    "require": ("Talab qilmoq, ehtiyoj sezmoq", "/rɪˈkwaɪə/", "Passing the exam requires dedication and focus."),
    "opportunity": ("Imkoniyat, qulay vaziyat", "/ˌɒp.əˈtʃuː.nə.ti/", "Studying abroad is a great life opportunity."),
    "environment": ("Atrof-muhit, ekologiya", "/ɪnˈvaɪ.rən.mənt/", "We must protect our natural environment."),
    "essential": ("Zarur, o'ta muhim", "/ɪˈsen.ʃəl/", "Water is essential for human health."),
    "benefit": ("Foyda, naf, afzallik", "/ˈben.ɪ.fɪt/", "Regular exercise brings many health benefits."),
    "challenge": ("Qiyinchilik, sinov, chaqiriq", "/ˈtʃæl.ɪndʒ/", "Learning a new language is a rewarding challenge."),
    "solution": ("Yechim, chora-tadbir", "/səˈluː.ʃən/", "We need to find an effective solution to this problem."),
    "increase": ("Oshirmoq, ko'paytirmoq", "/ɪnˈkriːs/", "The government aims to increase education funding."),
    "decrease": ("Kamaytirmoq, tushirmoq", "/dɪˈkriːs/", "Traffic noise decreases at night."),
    "advantage": ("Afzallik, ustunlik", "/ədˈvɑːn.tɪdʒ/", "Speed is the main advantage of online communication."),
    "disadvantage": ("Kamchilik, salbiy tomon", "/ˌdɪs.ədˈvɑːn.tɪdʒ/", "High cost is a major disadvantage of this plan."),
    "provide": ("Ta'minlamoq, berish", "/prəˈvaɪd/", "Schools provide students with modern tools."),
    "support": ("Qo'llab-quvvatlamoq", "/səˈpɔːt/", "My family always supports my dreams."),
    "prepare": ("Tayyorgarlik ko'rmoq", "/prɪˈpeə/", "I prepare for my exams every evening."),
    "knowledge": ("Bilim, tushuncha", "/ˈnɒl.ɪdʒ/", "Books are an endless source of knowledge."),
    "experience": ("Tajriba, amaliyot", "/ɪkˈspɪə.ri.əns/", "She has ten years of teaching experience."),
    "develop": ("Rivojlantirmoq, shakllantirmoq", "/dɪˈvel.əp/", "Students develop critical thinking skills."),
    "encourage": ("Rag'batlantirmoq, ruhlantirmoq", "/ɪnˈkʌr.ɪdʒ/", "Teachers encourage students to ask questions."),
    "accumulate": ("To'plamoq, yig'moq", "/əˈkjuː.mjə.leɪt/", "Evidence continues to accumulate regarding climate change."),
    "substantial": ("Sezilarli, salmoqli", "/səbˈstæn.ʃəl/", "There has been a substantial increase in international trade."),
    "consequence": ("Oqibat, natija", "/ˈkɒn.sɪ.kwəns/", "Environmental pollution has serious consequences for future generations."),
    "fundamental": ("Asosiy, tubiy, poydevor", "/ˌfʌn.dəˈmen.təl/", "Free speech is a fundamental human right."),
    "inevitable": ("Muqarrar, qutulib bo'lmaydigan", "/ɪnˈev.ɪ.tə.bəl/", "Change is an inevitable part of technological progress."),
    "predominant": ("Ustunlik qiluvchi, asosiy", "/prɪˈdɒm.ɪ.nənt/", "English is the predominant language in global business."),
    "evaluate": ("Baxolamoq, qiymat bermoq", "/ɪˈvæl.ju.eɪt/", "Examiners evaluate your coherence and lexical resource."),
    "fluctuate": ("O'zgarib turmoq, tebranmoq", "/ˈflʌk.tʃu.eɪt/", "Temperatures fluctuate wildly during the spring season."),
    "advocate": ("Yoqlamoq, tarafdori bo'lmoq", "/ˈæd.və.keɪt/", "Experts advocate for sustainable energy solutions."),
    "implement": ("Amalga oshirmoq, joriy etmoq", "/ˈɪm.plɪ.ment/", "The government plans to implement new education policies."),
    "comprehensive": ("Har tomonlama, batafsil, keng qamrovli", "/ˌkɒm.prɪˈhen.sɪv/", "The report offers a comprehensive analysis of urban growth."),
    "deteriorate": ("Yomonlashmoq, yuz tuban ketmoq", "/dɪˈtɪə.ri.ə.reɪt/", "Air quality continues to deteriorate in heavily populated cities."),
    "expedite": ("Tezlashtirmoq, jadallashtirmoq", "/ˈek.spə.daɪt/", "New technologies expedite the processing of economic data."),
    "fluctuation": ("O'zgarish, tebranish (grafiklarda)", "/ˌflʌk.tʃuˈeɪ.ʃən/", "There was a sharp fluctuation in stock prices last month."),
    "mitigate": ("Yumshatmoq, ta'sirini kamaytirmoq", "/ˈmɪt.ɪ.ɡeɪt/", "Planting trees helps mitigate the effects of global warming."),
    "paramount": ("Oliy darajadagi, eng muhim", "/ˈpær.ə.maʊnt/", "Ensuring patient safety is of paramount importance."),
    "scrutinize": ("Sinchkovlik bilan tekshirmoq", "/ˈskruː.tɪ.naɪz/", "Auditors scrutinize financial records very carefully."),
    "unprecedented": ("Pravotsiz, ilgari kuzatilmagan", "/ʌnˈpres.ɪ.den.tɪd/", "The project achieved unprecedented commercial success."),
    "versatile": ("Ko'p qirrali, har tomonlama moslashuvchan", "/ˈvɜː.sə.taɪl/", "Python is a highly versatile programming language."),
    "yield": ("Hosil bermoq, sabab bo'lmoq, berish", "/jiːld/", "Research yields valuable insights into cognitive behavior."),
    "make a decision": ("Qaror qabul qilmoq", "", "It is time to make a decision about your future career."),
    "play a crucial role": ("Halkiluvchi rol o'ynamoq", "", "Education plays a crucial role in modern economic growth."),
    "take into account": ("Hisobga olmoq, inobatga olmoq", "", "We must take into account all potential risks before proceeding."),
    "raise awareness": ("Xabardorlikni oshirmoq", "", "Campaigns help raise awareness about environmental issues."),
    "conduct research": ("Tadqiqot o'tkazmoq", "", "Scientists conduct research on renewable energy technologies."),
    "bridging the gap": ("Tafovutni kamaytirish / Ko'prik bo'lish", "", "Online courses help bridge the gap between education and employment."),
    "heavy traffic": ("Tirbandlik (og'ir yo'l harakati)", "", "Heavy traffic delayed our arrival at the test venue."),
    "pose a threat": ("Xavf tug'dirmoq", "", "Industrial pollution poses a threat to marine life."),
    "profound effect": ("Chukur ta'sir", "", "Technology has had a profound effect on modern society."),
    "solve a problem": ("Muammoni hal qilmoq", "", "Teamwork helps us solve complex problems faster."),
    "vital role": ("Hayotiy muhim rol", "", "Clean water plays a vital role in human longevity."),
    "adverse effect": ("Salbiy ta'sir", "", "Pollution has an adverse effect on public health."),
    "broaden horizons": ("Dunyoni kengaytirmoq, dunyoqarashni oshirmoq", "", "Traveling abroad helps broaden your horizons."),
    "address an issue": ("Muammoni hal qilishga kirishmoq", "", "The government must address the issue of unemployment."),
    "gain experience": ("Tajriba orttirmoq", "", "Internships allow students to gain practical experience."),
    "maintain balance": ("Muvozanatni saqlamoq", "", "Work-life balance is essential for long-term health."),
    "catalyst for change": ("O'zgarishlar turtkisi (katalizator)", "", "Innovation is a catalyst for economic change."),
    "drastic measure": ("Keskin chora-tadbirlar", "", "Authorities took drastic measures to control the outbreak."),
    "intricate detail": ("Murakkab va kichik tafsilotlar", "", "The architect explained every intricate detail of the blueprint."),
    "lucrative business": ("Daromadli, foydali biznes", "", "Software engineering has become a highly lucrative career path.")
}

def extract_vocab_from_pdfs():
    all_extracted = {
        "A1-A2": [],
        "B1-B2": [],
        "C1-C2": []
    }

    if not os.path.exists(BOOKS_DIR):
        print("Books dir missing")
        return all_extracted

    for level in ["a1-a2", "b1-b2", "c1-c2"]:
        dir_path = os.path.join(BOOKS_DIR, level)
        if not os.path.exists(dir_path):
            continue

        cefr_key = level.upper()
        print(f"Scanning PDFs in {dir_path}...")

        for fname in os.listdir(dir_path):
            if fname.endswith(".pdf"):
                fpath = os.path.join(dir_path, fname)
                try:
                    reader = pypdf.PdfReader(fpath)
                    num_pages = len(reader.pages)
                    print(f"  - Reading {fname} ({num_pages} pages)")
                    
                    full_text = ""
                    for p in range(min(num_pages, 80)): # Scan up to 80 pages per PDF
                        t = reader.pages[p].extract_text()
                        if t:
                            full_text += t + "\n"

                    # Find words / collocations matching Capitalized Word : Definition
                    matches = re.findall(r'([A-Z][a-z]{3,20}(?:\s[a-z]{3,20})?)\s*[:–-]\s*([^\n.]{15,120})', full_text)
                    for word, desc in matches:
                        w_clean = word.strip()
                        w_lower = w_clean.lower()
                        if len(w_clean) > 3 and w_lower not in [x['front'].lower() for x in all_extracted[cefr_key]]:
                            if w_lower in UZ_TRANSLATIONS:
                                uz, ph, ex = UZ_TRANSLATIONS[w_lower]
                                back = f"{uz} — {desc.strip()}"
                            else:
                                ph = ""
                                ex = f"Example sentence with {w_clean}."
                                back = desc.strip()

                            all_extracted[cefr_key].append({
                                "front": w_clean,
                                "back": back,
                                "phonetic": ph,
                                "example": ex
                            })
                except Exception as e:
                    print(f"    Error in {fname}: {e}")

    return all_extracted

def main():
    extracted = extract_vocab_from_pdfs()
    print(f"\nExtracted words: A1-A2: {len(extracted['A1-A2'])}, B1-B2: {len(extracted['B1-B2'])}, C1-C2: {len(extracted['C1-C2'])}")

    # Prepare rich preset decks data
    a1_cards = extracted['A1-A2']
    b1_cards = extracted['B1-B2']
    c1_cards = extracted['C1-C2']

    # Merge with UZ_TRANSLATIONS to ensure complete decks with 50+ cards each
    for w, (uz, ph, ex) in UZ_TRANSLATIONS.items():
        w_cap = w.capitalize()
        card_obj = {"front": w_cap, "back": uz, "phonetic": ph, "example": ex}
        if len(w.split()) > 1:
            if card_obj not in c1_cards: c1_cards.append(card_obj)
        elif len(w) > 8:
            if card_obj not in b1_cards: b1_cards.append(card_obj)
        else:
            if card_obj not in a1_cards: a1_cards.append(card_obj)

    preset_decks_code = f"""export interface PresetCard {{
    front: string;
    back: string;
    phonetic?: string;
    example?: string;
    category?: string;
}}

export interface PresetDeck {{
    id: string;
    title: string;
    description: string;
    level: 'A1-A2' | 'B1-B2' | 'C1-C2' | 'IELTS Collocations' | 'IELTS Topics';
    badgeColor: string;
    icon: string;
    isPremiumOnly?: boolean;
    cards: PresetCard[];
}}

export const PRESET_DECKS: PresetDeck[] = [
    {{
        id: 'deck_starter_a1_a2',
        title: '🌱 A1-A2 Starter Vocabulary ({len(a1_cards)} Kartochka)',
        description: 'Ingliz tilini noldan boshlayotganlar uchun PDF darsliklardan olingan tayanch so\\'zlar.',
        level: 'A1-A2',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        icon: '🌱',
        isPremiumOnly: false,
        cards: {json.dumps(a1_cards, ensure_ascii=False, indent=12)}
    }},
    {{
        id: 'deck_intermediate_b1_b2',
        title: '📈 B1-B2 Pre-IELTS Academic Vocab ({len(b1_cards)} Kartochka)',
        description: 'Band 5.5-6.5 darajasidagi talabalar uchun akademik so\\'zlar va iboralar to\\'plami.',
        level: 'B1-B2',
        badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        icon: '📈',
        isPremiumOnly: false,
        cards: {json.dumps(b1_cards, ensure_ascii=False, indent=12)}
    }},
    {{
        id: 'deck_advanced_c1_c2',
        title: '📙 C1-C2 Master IELTS Collocations ({len(c1_cards)} Kartochka)',
        description: 'Band 7.0-9.0 uchun Cambridge PDF darsliklaridan ajratib olingan iboralar.',
        level: 'C1-C2',
        badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        icon: '📙',
        isPremiumOnly: false,
        cards: {json.dumps(c1_cards, ensure_ascii=False, indent=12)}
    }}
];
"""

    with open(PRESET_DECKS_TS, "w", encoding="utf-8") as f:
        f.write(preset_decks_code)

    print("Successfully updated src/data/presetDecks.ts with full PDF curriculum data!")

if __name__ == "__main__":
    main()
