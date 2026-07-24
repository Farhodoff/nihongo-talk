import os
import re
import json

# Advanced C1-C2 IELTS Collocations & Idioms Database
C1_C2_ADVANCED_DATABASE = [
    ("abandon hope", "Umidni uzmoq", "/əˈbæn.dən həʊp/", "He refused to abandon hope despite initial setbacks."),
    ("abiding interest", "Doimiy, so'nmas qiziqish", "/əˈbaɪ.dɪŋ ˈɪn.trest/", "She has an abiding interest in ancient architecture."),
    ("abject failure", "Sharmandali, to'liq mag'lubiyat", "/ˈæb.dʒekt ˈfeɪ.ljə/", "The movie project turned out to be an abject failure."),
    ("abrupt change", "Keskin, kutilmagan o'zgarish", "/əˈbrʌpt tʃeɪndʒ/", "An abrupt change in government policy surprised investors."),
    ("absolute necessity", "Mutlaq zaro'rat", "/ˈæb.sə.luːt nəˈses.ə.ti/", "Water conservation is an absolute necessity in dry regions."),
    ("absorbed in thought", "Xayolga tolgan, chuqur o'yda", "/əbˈzɔːbd ɪn θɔːt/", "He sat by the window, absorbed in thought."),
    ("abstract concept", "Abstrakt, mavhum tushuncha", "/ˈæb.strækt ˈkɒn.sept/", "Freedom is an abstract concept that varies across cultures."),
    ("abundant supply", "Mo'l-ko'l manba, zaxira", "/əˈbʌn.dənt səˈplaɪ/", "The region enjoys an abundant supply of fresh water."),
    ("academic achievement", "Akademik yutuq", "/ˌæk.əˈdem.ɪk əˈtʃiːv.mənt/", "Scholarships reward high academic achievement."),
    ("academic discourse", "Akademik muloqot, ilmiy bahs", "/ˌæk.əˈdem.ɪk ˈdɪs.kɔːs/", "Clear writing is vital for academic discourse."),
    ("accept responsibility", "Mas'uliyatni o'z zimmasiga olmoq", "/əkˈsept rɪˌspɒn.sɪˈbɪl.ə.ti/", "Leaders must accept responsibility for their decisions."),
    ("accidental discovery", "Kutilmagan, tasodifiy kashfiyot", "/ˌæk.sɪˈden.təl dɪˈskʌv.ər.i/", "Penicillin was an accidental discovery by Alexander Fleming."),
    ("accommodate requests", "Iltimoslarni qondirmoq", "/əˈkɒm.ə.deɪt rɪˈkwests/", "The hotel tries to accommodate special guest requests."),
    ("accomplish a goal", "Maqsadga erishmoq", "/əˈkʌm.plɪʃ ə ɡəʊl/", "Planning helps you accomplish your long-term goals."),
    ("acid rain", "Kislotali yomg'ir", "/ˌæs.ɪd ˈreɪn/", "Industrial emissions contribute to destructive acid rain."),
    ("acquired taste", "Asta-sekin yoqa boshlaydigan narsa", "/əˈkwaɪəd teɪst/", "Opera music is an acquired taste for many young people."),
    ("active participant", "Faol qatnashchi", "/ˈæk.tɪv pɑːˈtɪs.ɪ.pənt/", "She is an active participant in environmental campaigns."),
    ("acute shortage", "O'tkir tanqislik, kamchilik", "/əˈkjuːt ˈʃɔː.tɪdʒ/", "Hospitals faced an acute shortage of medical supplies."),
    ("adapt to climate", "Iqlimga moslashmoq", "/əˈdæpt tuː ˈklaɪ.mət/", "Animals adapt to harsh Arctic climates."),
    ("address a concern", "Xavotirni bartaraf etmoq", "/əˈdres ə kənˈsɜːn/", "The mayor held a conference to address public concerns."),
    ("adequate representation", "Etarlicha vakillik", "/ˈæd.ə.kwət ˌrep.rɪ.zenˈteɪ.ʃən/", "Women demand adequate representation in parliament."),
    ("adhere to rules", "Qoidalarga qat'iy rioya qilmoq", "/ədˈhɪə tuː ruːlz/", "All visitors must adhere to safety rules."),
    ("adverse effects", "Salbiy ta'sirlar", "/ˈæd.vɜːs ɪˈfekts/", "Pollution causes adverse effects on human health."),
    ("advocate change", "O'zgarishni yoqlamoq", "/ˈæd.və.keɪt tʃeɪndʒ/", "Reformers advocate change in the educational framework."),
    ("aesthetic appeal", "Estetik jozibadorlik", "/esˈθet.ɪk əˈpiːl/", "The new architectural design has strong aesthetic appeal."),
    ("afford an opportunity", "Imkoniyat berish", "/əˈfɔːd ən ˌɒp.əˈtʃuː.nə.ti/", "Higher education affords an opportunity for career growth."),
    ("alleviate poverty", "Kambag'allikni yumshatmoq, kamaytirmoq", "/əˈliː.vi.eɪt ˈpɒv.ə.ti/", "Microfinance programs help alleviate rural poverty."),
    ("allocate resources", "Resurslarni taqsimlamoq", "/ˈæl.ə.keɪt rɪˈzɔːsɪz/", "The government allocated resources to healthcare."),
    ("alter perceptions", "Qarashlarni o'zgartirmoq", "/ˈɒl.tə pəˈsep.ʃənz/", "Documentaries can alter public perceptions on nature."),
    ("ambiguous statement", "Ikki ma'noli, mavhum bayonot", "/æmˈbɪɡ.ju.əs ˈsteɪ.mənt/", "The politician gave an ambiguous statement regarding taxes."),
    ("ample evidence", "Etarlicha, mo'l-ko'l dalil", "/ˈæm.pəl ˈev.ɪ.dəns/", "Scientists found ample evidence of ancient civilizations."),
    ("analytical skills", "Analitik, tahliliy ko'nikmalar", "/ˌæn.əlˈɪt.ɪ.kəl skɪlz/", "Data analysis requires sharp analytical skills."),
    ("anchor of hope", "Umid ustuni, poydevori", "/ˈæŋ.kə ɒv həʊp/", "Education remains an anchor of hope for youth."),
    ("anecdotal evidence", "Og'zaki, norasmiy isbotlar", "/ˌæn.ɪkˈdəʊ.təl ˈev.ɪ.dəns/", "Anecdotal evidence is insufficient for medical proof."),
    ("annual review", "Yillik hisobot, ko'rib chiqish", "/ˈæn.ju.əl rɪˈvjuː/", "The company published its annual financial review."),
    ("anomaly in data", "Ma'lumotlardagi anomaliya, og'ish", "/əˈnɒm.ə.li ɪn ˈdeɪ.tə/", "Researchers detected a rare anomaly in the temperature data."),
    ("anticipated outcome", "Kutilgan natija", "/ænˈtɪs.ɪ.peɪ.tɪd ˈaʊt.kʌm/", "Growth was the anticipated outcome of economic reform."),
    ("apparent contradiction", "Ko'rinib turgan qarama-qarshilik", "/əˈpær.ənt ˌkɒn.trəˈdɪk.ʃən/", "There is an apparent contradiction in the candidate's words."),
    ("appeal to reason", "Aqlga murojaat qilmoq", "/əˈpiːl tuː ˈriː.zən/", "The speaker appealed to reason during the debate."),
    ("applicable standard", "Tegishli, mos mezon", "/ˈæp.lɪ.kə.bəl ˈstæn.dəd/", "Ensure safety meets the applicable international standard."),
    ("apply pressure", "Bosim o'tkazmoq", "/əˈplaɪ ˈpreʃ.ə/", "Protesters applied pressure on the government."),
    ("appreciable increase", "Sezilarli o'sish", "/əˈpriː.ʃə.bəl ɪnˈkriːs/", "There was an appreciable increase in student test scores."),
    ("approach a problem", "Muammoga yondashmoq", "/əˈprəʊtʃ ə ˈprɒb.ləm/", "Engineers approach problems with logical solutions."),
    ("appropriate measure", "Munosib, mos chora", "/əˈprəʊ.pri.ət ˈmeʒ.ə/", "The council took appropriate measures to curb traffic."),
    ("arbitrary decision", "O'zboshimchalik bilan qabul qilingan qaror", "/ˈɑː.bɪ.trər.i dɪˈsɪʒ.ən/", "The board rejected the arbitrary decision."),
    ("archaic language", "Eski, qadimiy iboralar", "/ɑːˈkeɪ.ɪk ˈlæŋ.ɡwɪdʒ/", "Legal contracts often contain archaic language."),
    ("arduous task", "Mashaqqatli, o'ta og'ir vazifa", "/ˈɑː.dʒu.əs tɑːsk/", "Climbing Mount Everest is an arduous task."),
    ("arguable point", "Bahsli, munozarali nuqta", "/ˈɑːɡ.ju.ə.bəl pɔɪnt/", "Whether technology helps or harms is an arguable point."),
    ("arouse curiosity", "Qiziqish uyg'otmoq", "/əˈraʊz ˌkjʊə.riˈɒs.ə.ti/", "The mysterious artifact aroused public curiosity."),
    ("articulate an idea", "G'oyani aniq va ravshan ifodalash", "/ɑːˈtɪk.jə.leɪt ən aɪˈdɪə/", "Good speakers articulate ideas effortlessly."),
    ("artificial barrier", "Sun'iy g'ov, to'siq", "/ˌɑː.tɪˈfɪʃ.əl ˈbær.i.ə/", "Tariffs create artificial barriers to global trade."),
    ("artistic expression", "Badiiy ifoda", "/ɑːˈtɪs.tɪk ɪkˈspreʃ.ən/", "Sculpture is a traditional form of artistic expression."),
    ("ascertain the facts", "Haqiqatni aniqlamoq", "/ˌæs.əˈteɪn ðə fækts/", "Judges must ascertain the facts before delivering a verdict.")
]

def update_c1_c2_deck():
    json_path = "src/data/decks/c1_c2.json"
    c1_cards = []
    
    if os.path.exists(json_path):
        with open(json_path, "r", encoding="utf-8") as f:
            c1_cards = json.load(f)

    existing_fronts = {c["front"].lower() for c in c1_cards}

    for word, back, phonetic, example in C1_C2_ADVANCED_DATABASE:
        title_word = word.capitalize()
        if title_word.lower() not in existing_fronts:
            existing_fronts.add(title_word.lower())
            c1_cards.append({
                "front": title_word,
                "back": back,
                "phonetic": phonetic,
                "example": example,
                "category": "Advanced Collocation"
            })

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(c1_cards, f, ensure_ascii=False, indent=2)

    print(f"Total C1-C2 Deck Size: {len(c1_cards)}")

    preset_path = "src/data/presetDecks.ts"
    with open(preset_path, "r", encoding="utf-8") as f:
        content = f.read()

    content = re.sub(
        r"(id:\s*'deck_master_c1_c2'.*?cardCount:\s*)\d+",
        f"\\g<1>{len(c1_cards)}",
        content,
        flags=re.DOTALL
    )

    with open(preset_path, "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully updated C1-C2 deck in src/data/decks/c1_c2.json and presetDecks.ts!")

if __name__ == "__main__":
    update_c1_c2_deck()
