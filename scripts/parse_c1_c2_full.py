import os
import re
import json
import pypdf

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
    ("ambiguous statement", "Ikki ma'noli, mavhum bayonot", "/æmˈbɪɡ.ju.əs ˈsteɪt.mənt/", "The politician gave an ambiguous statement regarding taxes."),
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
    ("ascertain the facts", "Haqiqatni aniqlamoq", "/ˌæs.əˈteɪn ðə fækts/", "Judges must ascertain the facts before delivering a verdict."),
    ("aspirational goal", "Yuqori orzu-umidli maqsad", "/ˌæs.pɪˈreɪ.ʃən.əl ɡəʊl/", "Achieving carbon neutrality is an aspirational goal."),
    ("assert authority", "Vakolatni ko'rsatmoq, ta'kidlamoq", "/əˈsɜːt ɔːˈθɒr.ə.ti/", "The captain asserted his authority over the crew."),
    ("assess the damage", "Zararni baholamoq", "/əˈses ðə ˈdæm.ɪdʒ/", "Engineers arrived to assess the earthquake damage."),
    ("assign priority", "Ustuvorlik bermoq", "/əˈsaɪn praɪˈɒr.ə.ti/", "Managers assign priority to urgent customer requests."),
    ("assimilate information", "Ma'lumotni o'zlashtirmoq", "/əˈsɪm.ɪ.leɪt ˌɪn.fəˈmeɪ.ʃən/", "Students assimilate information faster using diagrams."),
    ("associated risks", "Bilan bog'liq xavflar", "/əˈsəʊ.si.eɪ.tɪd rɪsks/", "Every investment carries inherent associated risks."),
    ("assume control", "Boshqaruvni o'z qo'liga olmoq", "/əˈsjuːm kənˈtrəʊl/", "The new director will assume control next month."),
    ("astute observer", "Zukko, sinchkov kuzatuvchi", "/əˈstjuːt əbˈzɜː.və/", "Political analysts are astute observers of global trends."),
    ("at a disadvantage", "Nomaqbul, noqulay ahvolda", "/æt ə ˌdɪs.ədˈvɑːn.tɪdʒ/", "Non-native speakers may feel at a disadvantage initially."),
    ("at face value", "Yuzaki, ko'ringanicha qabul qilish", "/æt feɪs ˈvæl.juː/", "Do not take Internet rumors at face value."),
    ("at risk of extinction", "Yo'qolib ketish xavfi ostida", "/æt rɪsk ɒv ɪkˈstɪŋk.ʃən/", "Rare Tigers are at risk of extinction."),
    ("attain a target", "Marhaga yetmoq, maqsadni zabt etmoq", "/əˈteɪn ə ˈtɑː.ɡɪt/", "She worked untiringly to attain a Band 8.5 score."),
    ("attribute success", "Muvaffaqiyatni nimagadir bog'lamoq", "/ˈæt.rɪ.bjuːt səkˈses/", "He attributes his success to continuous revision."),
    ("audible sound", "Eshitilarli ovoz", "/ˈɔː.də.bəl saʊnd/", "A low audible sound vibrated from the speaker."),
    ("augmented reality", "Kengaytirilgan borliq (AR)", "/ɔːɡˈmen.tɪd riˈæl.ə.ti/", "Surgeons use augmented reality during complex operations."),
    ("authentic assessment", "Haqiqiy, amaliy baholash", "/ɔːˈθen.tɪk əˈses.mənt/", "Portfolios offer an authentic assessment of student growth."),
    ("authoritative source", "Ishonchli, nufuzli manba", "/ɔːˈθɒr.ɪ.tə.tɪv sɔːs/", "Cite authoritative sources in academic research papers."),
    ("autonomous learning", "Mustaqil o'rganish", "/ɔːˈtɒn.ə.məs ˈlɜː.nɪŋ/", "Self-study apps foster autonomous learning habits."),
    ("auxiliary power", "Zahira, qo'shimcha quvvat", "/ɔːɡˈzɪl.i.ər.i paʊə/", "Hospitals use auxiliary power generators in blackouts."),
    ("available resources", "Mavjud imkoniyatlar", "/əˈveɪ.lə.bəl rɪˈzɔːsɪz/", "Make optimal use of available library resources."),
    ("avert a crisis", "Inqirozni oldini olmoq", "/əˈvɜːt ə ˈkraɪ.sɪs/", "Quick diplomatic action helped avert a global crisis."),
    ("avid reader", "Qizg'in, kitobxon inson", "/ˈæv.ɪd ˈriː.də/", "She is an avid reader of scientific biographies."),
    ("avoid confusion", "Chalkashlikning oldini olmoq", "/əˈvɔɪd kənˈfjuː.ʒən/", "Use clear headings to avoid confusion in essays."),
    ("backed by evidence", "Dalillar bilan tasdiqlangan", "/bækt baɪ ˈev.ɪ.dəns/", "Scientific claims must be backed by empirical evidence."),
    ("balanced perspective", "Xolis, muvozanatli qarash", "/ˈbæl.ənst pəˈspek.tɪv/", "Journalists should offer a balanced perspective on news."),
    ("barrier to entry", "Bozorga kirish g'ovi, to'sig'i", "/ˈbær.i.ə tuː ˈen.tri/", "High capital cost is a barrier to entry in manufacturing."),
    ("basic premise", "Asosiy faraz, poydevor g'oya", "/ˈbeɪ.sɪk ˈprem.ɪs/", "The basic premise of the theory relies on physics."),
    ("bear fruit", "Meva bermoq, samara bermoq", "/beə fruːt/", "Long-term study efforts eventually bear fruit."),
    ("benchmark standard", "Namlona, etalon standart", "/ˈbentʃ.mɑːk ˈstæn.dəd/", "Cambridge exams are the global benchmark standard."),
    ("beneficial effect", "Foydali ta'sir", "/ˌben.ɪˈfɪʃ.əl ɪˈfekt/", "Regular exercise has a beneficial effect on sleep quality."),
    ("binding agreement", "Yuridik kuchga ega majburiy kelishuv", "/ˈbaɪn.dɪŋ əˈɡriː.mənt/", "Both parties signed a legally binding agreement."),
    ("blatant disregard", "Ochiqchasiga ko'z yumish, mensimaslik", "/ˈbleɪ.tənt ˌdɪs.rɪˈɡɑːd/", "Speeding shows blatant disregard for road safety."),
    ("boast a feature", "G'ururlanib xususiyatini ko'rsatmoq", "/bəʊst ə ˈfiː.tʃə/", "The smartphone boasts a high-resolution camera."),
    ("bolster confidence", "Ishonchni oshirmoq, mustahkamlamoq", "/ˈbəʊl.stə ˈkɒn.fɪ.dəns/", "Praise from mentors bolsters student confidence."),
    ("bond of friendship", "Do'stlik rishtasi", "/bɒnd ɒv ˈfrend.ʃɪp/", "Shared experiences forge a strong bond of friendship."),
    ("boom in tourism", "Turizmning keskin rivojlanishi", "/buːm ɪn ˈtʊə.rɪ.zəm/", "Historic cities experienced a boom in tourism."),
    ("boundless energy", "Tugamas, cheksiz energiya", "/ˈbaʊnd.ləs ˈen.ə.dʒi/", "Young children seem to have boundless energy."),
    ("branch of science", "Fan tarmog'i", "/brɑːntʃ ɒv ˈsaɪ.əns/", "Genetics is a fascinating branch of modern science."),
    ("breach of contract", "Shartnoma shartlarini buzish", "/briːtʃ ɒv ˈkɒn.trækt/", "Failing to pay on time is a breach of contract."),
    ("breadth of knowledge", "Bilimning kengligi, qamrovi", "/bredθ ɒv ˈnɒl.ɪdʒ/", "The professor possessed an incredible breadth of knowledge."),
    ("breakthrough in medicine", "Tibbiyotdagi tub burilish", "/ˈbreɪk.θruː ɪn ˈmed.sən/", "Vaccine discovery was a historic breakthrough in medicine."),
    ("brief overview", "Qisqacha sharh, umumlashma", "/briːf ˈəʊ.və.vjuː/", "The introduction provides a brief overview of the paper."),
    ("bright prospect", "Porloq kelajak, istiqbol", "/braɪt ˈprɒs.pekt/", "Engineering graduates face bright job prospects."),
    ("bring about change", "O'zgarish yasamoq, sabab bo'lmoq", "/brɪŋ əˈbaʊt tʃeɪndʒ/", "Innovation brings about positive economic change."),
    ("broad spectrum", "Keng qamrovli doira", "/brɔːd ˈspek.trəm/", "Antibiotics fight a broad spectrum of bacteria."),
    ("broaden horizons", "Dunyoqarashni kengaytirmoq", "/ˈbrɔː.dən həˈraɪ.zənz/", "International exchange programs broaden student horizons.")
]

def update_c1_c2_deck():
    with open("src/data/presetDecks.ts", "r", encoding="utf-8") as f:
        content = f.read()

    # Load existing C1-C2 cards
    match_c1 = re.search(r"id:\s*'deck_advanced_c1_c2'.*?cards:\s*(\[.*?\])\s*\},", content, re.DOTALL)
    existing_c1 = json.loads(match_c1.group(1)) if match_c1 else []

    c1_fronts = set(x['front'] for x in existing_c1)
    
    for word, back, phonetic, example in C1_C2_ADVANCED_DATABASE:
        title_word = word.capitalize()
        if title_word not in c1_fronts:
            c1_fronts.add(title_word)
            existing_c1.append({
                "front": title_word,
                "back": back,
                "phonetic": phonetic,
                "example": example,
                "category": "Advanced Collocation"
            })

    print(f"Total C1-C2 Deck Size: {len(existing_c1)}")

    new_c1_json = json.dumps(existing_c1, ensure_ascii=False, indent=16)

    content = re.sub(
        r"title:\s*'📙 C1-C2 Master IELTS Collocations[^']*'",
        f"title: '📙 C1-C2 Master IELTS Collocations ({len(existing_c1)} Kartochka)'",
        content
    )

    content = re.sub(
        r"(id:\s*'deck_advanced_c1_c2'.*?cards:\s*)\[.*?\](\s*\},)",
        rf"\g<1>{new_c1_json}\g<2>",
        content,
        flags=re.DOTALL
    )

    with open("src/data/presetDecks.ts", "w", encoding="utf-8") as f:
        f.write(content)

    print("Successfully updated C1-C2 deck in src/data/presetDecks.ts!")

if __name__ == "__main__":
    update_c1_c2_deck()
