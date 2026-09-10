#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_minna_lessons.py
Generates src/data/curriculum/minnaN5Lessons.ts with 25 complete interactive lessons.
"""

import json
import os
import re

DATA_PATH = "src/data/minna_shokyu1_complete.json"
with open(DATA_PATH, "r", encoding="utf-8") as f:
    lessons = json.load(f)

print(f"Generating 25 Minna N5 Lessons from {len(lessons)} parsed lessons...")

CULTURAL_NOTES = {
    1: "Yaponiyada yangi tanishganda ta'zim qilinadi (ojigi). Boshqalar ismiga doimo '～san' qo'shiladi, lekin o'z ismiga hech qachon 'san' qo'shilmaydi.",
    2: "Yaponiyada tashrif qog'ozi (meishi) ikki qo'llab beriladi va ikki qo'llab qabul qilinadi. Sovg'a berishda 'ほんの気持ちです' (arzimagan sovg'a) deyiladi.",
    3: "Yapon do'konlarida xaridor kirganda 'いらっしゃいませ' (Xush kelibsiz) deb kutib olinadi. Pul to'lashda pul patnisga (tsuritray) qo'yiladi.",
    4: "Yaponiyada poyezdlar va avtobuslar daqiqasigacha aniq ishlaydi. Ish vaqti so'ralganda '何時から何時まで' iborasi juda qo'l keladi.",
    5: "Yaponiyada transport tizimi dunyoda eng rivojlanganlardan biri. Shinkansen (tezyurar poyezd) va metro orqali istalgan manzilga tez yetib boriladi.",
    6: "Tushlikka taklif qilganda to'g'ridan-to'g'ri 'birga boraylik' deyish o'rniga, muloyimlik bilan '~ませんか' (bormaysizmi?) iborasi ishlatiladi.",
    7: "Ovqatlanishdan oldin 'いただきます' (itadakimasu) va ovqatlangandan keyin 'ごちそうさまでした' (gochisousama deshita) deb minnatdorchilik bildiriladi.",
    8: "Yaponiyada to'rt fasl (shiki) juda muhim o'rin tutadi. Bahorda sakura gullashi (hanami), kuzda esa qizil barglar (momiji) tomosha qilinadi.",
    9: "Yapon madaniyatida to'g'ridan-to'g'ri 'yo'q' yoki 'yoqtirmayman' deyish noqulay sanaladi. Uning o'rniga 'ちょっと...' (biroz noqulay) iborasi qo'llaniladi.",
    10: "Yapon uylariga kirganda poyafzal yechiladi va maxsus shippak kiyiladi. Tatami xonalarida esa hatto shippak ham yechiladi.",
    11: "Yapon tilida narsalarni sanash uchun maxsus sanoq suffikslari mavjud: odamlar uchun '～にん', ingichka narsalar uchun '～ほん', yassi narsalar uchun '～まい'.",
    12: "Yaponiyada fasllar va festivallar (matsuri) juda mashhur. Kioto shahridagi Gion Matsuri Yaponiyaning eng mashhur festivallaridan biridir.",
    13: "Restoranda ovqatlanganda ko'pincha hisob-kitob alohida qilinadi ('別々にお願いします' - betsu betsu ni onegaishimasu).",
    14: "Birovdan yordam so'rashda yoki taksida manzil aytishda fe'lning Te-shakli + 'ください' qo'llaniladi (masalan: '梅田まで行ってください').",
    15: "Yaponiyada qoidalar va tartibga qat'iy rioya qilinadi. Biron narsa qilishdan oldin ruxsat so'rash uchun '~てもいいですか' ishlatiladi.",
    16: "Yaponiyada bankomatlar (ATM) va jamoat xizmatlaridan foydalanish juda qulay va xavfsiz. O'zbekistondagi kabi navbatga qat'iy rioya qilinadi.",
    17: "Kasal bo'lganda yoki shifokor qabulida alomatlarni aniq aytish va tibbiy retseptga rioya qilish muhimdir.",
    18: "Yaponiyada xobbi (shumi) haqida suhbatlashish yangi do'stlar orttirishning eng yaxshi usulidir.",
    19: "Fuji tog'iga chiqish (Fuji tozan) yaponlar hayotidagi eng esda qolarli tajribalardan biri hisoblanadi. Tajriba haqida '〜たことがあります' orqali so'zlanadi.",
    20: "Tengdoshlar, oila a'zolari va yaqin do'stlar bilan suhbatlashganda oddiy uslub (Futsuugo / 普通形) ishlatiladi.",
    21: "O'z fikrini bildirayotganda yaponlar muloyimlik bilan '〜と思います' (deb o'ylayman) qo'shimchasini qo'shib, o'z fikrini qat'iy hukm qilmasdan ifodalaydilar.",
    22: "Yaponiyada kvartira ijaraga olish (apāto sagashi) madaniyati o'ziga xos bo'lib, xonalar tatami soni bilan o'lchanadi.",
    23: "Yaponiyada ko'chada adashib qolsangiz, 'Koban' (mahalla politsiya xodimlari) doimo xaritadan yo'lni mehribonlik bilan tushuntirib berishadi.",
    24: "Yaponlar birovdan yordam olganda doimo '〜てくれてありがとう' yoki '〜てもらいました' deb alohida minnatdorchilik bildiradilar.",
    25: "Xayrlashuv va yangi bosqichga o'tishda '今まで本当にお世話になりました' (Shu paytgacha ko'rsatgan g'amxo'rligingiz uchun katta rahmat) deb minnatdorchilik aytiladi."
}

UNIT_TITLES = {
    1: "Minna Shokyu 1: 1–5 Darslar (Boshlang'ich Tanishuv va Harakat)",
    2: "Minna Shokyu 1: 6–10 Darslar (Kundalik Hayot, Oila va Mavjudlik)",
    3: "Minna Shokyu 1: 11–15 Darslar (Sanoq, Taqqoslash va Te-shakli)",
    4: "Minna Shokyu 1: 16–20 Darslar (Ketma-ketlik, Nai-shakli va Futsuugo)",
    5: "Minna Shokyu 1: 21–25 Darslar (Fikr, Aniqlovchi gaplar va Shart)"
}

out_code = []
out_code.append("import { Lesson } from '../../types/lesson';\n")
out_code.append("export const MINNA_N5_LESSONS: Lesson[] = [\n")

for les in lessons:
    num = les["lessonNumber"]
    unit_num = (num - 1) // 5 + 1
    unit_id = f"ja-minna-u{unit_num}"
    unit_title = UNIT_TITLES[unit_num]
    lesson_id = f"ja-minna-l{num}"
    title = les["title"]
    
    # Vocabulary (take top 15 key words for the interactive lesson view)
    vocab_list = []
    for v in les.get("vocabulary", [])[:15]:
        kana = v.get("kana", "").strip()
        kanji = v.get("kanji", "").strip()
        meaning = v.get("meaning", "").strip()
        term = f"{kanji} ({kana})" if kanji and kanji != kana else kana
        vocab_list.append({
            "term": term,
            "reading": kana,
            "meaning": meaning,
            "exampleSentence": f"{kana} — {meaning}",
            "exampleTranslation": meaning
        })
        
    # Grammar rules
    grammar_rules = []
    key_points = []
    for g in les.get("grammar", []):
        rule_title = g.get("title", "")
        formula = g.get("formula", "") or rule_title
        key_points.append(f"{rule_title}: {g.get('explanation', '')[:120]}...")
        
        examples = []
        for ex in g.get("examples", [])[:3]:
            if ex.get("ja"):
                examples.append({
                    "sentence": ex["ja"],
                    "translation": ex.get("uz", "")
                })
        if not examples:
            examples.append({
                "sentence": formula,
                "translation": g.get("explanation", "")[:80]
            })
            
        grammar_rules.append({
            "pattern": formula,
            "meaning": g.get("explanation", "")[:200],
            "usageNotes": g.get("explanation", ""),
            "examples": examples
        })

    # Practice exercises (4 interactive questions)
    practice_exercises = []
    # Test questions (4 questions)
    test_questions = []
    
    # Generate exercises using actual grammar examples
    all_examples = []
    for g in les.get("grammar", []):
        for ex in g.get("examples", []):
            if ex.get("ja") and ex.get("uz"):
                all_examples.append(ex)
                
    # Exercise 1: Vocabulary meaning
    v1 = les.get("vocabulary", [])[0] if les.get("vocabulary") else {"kana": "わたし", "meaning": "men"}
    v2 = les.get("vocabulary", [])[1] if len(les.get("vocabulary")) > 1 else {"kana": "あなた", "meaning": "siz"}
    v3 = les.get("vocabulary", [])[2] if len(les.get("vocabulary")) > 2 else {"kana": "せんせい", "meaning": "ustoz"}
    v4 = les.get("vocabulary", [])[3] if len(les.get("vocabulary")) > 3 else {"kana": "がくせい", "meaning": "talaba"}
    
    practice_exercises.append({
        "id": f"{lesson_id}-ex1",
        "type": "multiple-choice",
        "prompt": f"「{v1.get('kanji') or v1.get('kana')}」 so'zining to'g'ri o'zbekcha ma'nosi qaysi?",
        "options": [v1.get("meaning", ""), v2.get("meaning", ""), v3.get("meaning", ""), v4.get("meaning", "")],
        "correctAnswer": 0,
        "explanation": f"To'g'ri javob: {v1.get('meaning')}."
    })
    
    # Exercise 2: Grammar particle / formula
    g1 = les.get("grammar", [])[0] if les.get("grammar") else {"title": "OT1 は OT2 です", "formula": "OT1 は OT2 です"}
    practice_exercises.append({
        "id": f"{lesson_id}-ex2",
        "type": "multiple-choice",
        "prompt": f"{num}-dars grammatik qoidasi: '{g1.get('title')}' bo'yicha qaysi gap grammatik jihatdan to'g'ri tuzilgan?",
        "options": [
            all_examples[0]["ja"] if all_examples else f"わたしは {v1.get('kana')}です。",
            "これ は を です。",
            "だれ が 行きます か でした。",
            "へ 行きません です。"
        ],
        "correctAnswer": 0,
        "explanation": f"To'g'ri javob: {all_examples[0]['ja'] if all_examples else g1.get('title')} ({all_examples[0]['uz'] if all_examples else ''})."
    })
    
    # Exercise 3: Translation
    ex_target = all_examples[1] if len(all_examples) > 1 else (all_examples[0] if all_examples else {"ja": "ありがとうございます", "uz": "Rahmat"})
    practice_exercises.append({
        "id": f"{lesson_id}-ex3",
        "type": "multiple-choice",
        "prompt": f"O'zbek tiliga to'g'ri tarjima qiling: 「{ex_target['ja']}」",
        "options": [
            ex_target["uz"],
            "Ertaga do'stim bilan mehmonga boraman.",
            "Kechirasiz, soat necha bo'ldi?",
            "Iltimos, manzilni ko'rsatib yuboring."
        ],
        "correctAnswer": 0,
        "explanation": f"To'g'ri tarjimasi: {ex_target['uz']}."
    })
    
    # Exercise 4: Context / Dialogue
    diag_line = les.get("dialogue", {}).get("lines", [{}])[0] if les.get("dialogue", {}).get("lines") else {"speaker": "Suhbatdosh", "text": "Salom"}
    practice_exercises.append({
        "id": f"{lesson_id}-ex4",
        "type": "multiple-choice",
        "prompt": f"Ushbu darsdagi suhbatdan kelib chiqib: {diag_line.get('speaker', 'Suhbatdosh')} qanday jumla aytadi?",
        "options": [
            diag_line.get("text", "Tanishganimdan xursandman"),
            "Men hech qayerga bormayman.",
            "Taksida aeroportga haydang.",
            "Iltimos, hisobni alohida to'laymiz."
        ],
        "correctAnswer": 0,
        "explanation": f"To'g'ri ibora: {diag_line.get('text')}."
    })
    
    # Test Questions
    for q_idx in range(4):
        if q_idx < len(all_examples):
            sample_ex = all_examples[q_idx]
            q_prompt = f"Quyidagi yaponcha gapning ma'nosini aniqlang: 「{sample_ex['ja']}」"
            q_ans = sample_ex['uz']
        else:
            v_sample = les.get("vocabulary", [])[q_idx % len(les.get("vocabulary", [{}]))]
            q_prompt = f"「{v_sample.get('kanji') or v_sample.get('kana')}」 so'zining to'g'ri tarjimasi qaysi?"
            q_ans = v_sample.get('meaning', '')
            
        test_questions.append({
            "id": f"{lesson_id}-q{q_idx+1}",
            "question": q_prompt,
            "options": [
                q_ans,
                "Bu kitob do'kondan sotib olindi.",
                "Kecha kechqurun televizor ko'rdim.",
                "Yaponiyada yoz fasli juda issiq bo'ladi."
            ],
            "correctAnswerIndex": 0,
            "explanation": f"To'g'ri javob: {q_ans}."
        })

    lesson_obj = {
        "id": lesson_id,
        "courseId": "japanese-n5",
        "unitId": unit_id,
        "unitTitle": unit_title,
        "language": "ja",
        "level": "N5",
        "lessonNumber": num,
        "title": title,
        "description": f"Minna no Nihongo Shokyu 1: {title}. Darsda {len(les.get('vocabulary', []))} ta yangi so'z va {len(les.get('grammar', []))} ta asosiy grammatik qoida o'rganiladi.",
        "estimatedDurationMinutes": 20,
        "icon": "🌸",
        "steps": [
            {
                "id": f"{lesson_id}-s1",
                "title": "Lug'at va Qoidalar",
                "type": "learn",
                "estimatedMinutes": 8,
                "learnData": {
                    "title": f"{num}-Dars: {title}",
                    "subtitle": les.get("title_ja", "みんなの日本語 初級1"),
                    "explanation": f"{title} bo'yicha to'liq grammatik izohlar va qoidalar to'plami. Har bir qoida Minna no Nihongo darsligining o'zbekcha tarjimasiga moslashtirilgan.",
                    "keyPoints": key_points[:6],
                    "vocabulary": vocab_list,
                    "grammarRules": grammar_rules,
                    "culturalNotes": CULTURAL_NOTES.get(num, "Yapon madaniyati va kundalik muloqot odobiga oid eslatma.")
                }
            },
            {
                "id": f"{lesson_id}-s2",
                "title": "Mustahkamlash Mashqlari",
                "type": "practice",
                "estimatedMinutes": 6,
                "practiceData": {
                    "instructions": "Darsda o'rganilgan yangi so'zlar va grammatik konstruksiyalar bo'yicha mashqlarni bajaring.",
                    "exercises": practice_exercises
                }
            },
            {
                "id": f"{lesson_id}-s3",
                "title": "Sinov Testi",
                "type": "test",
                "estimatedMinutes": 6,
                "testData": {
                    "instructions": "Darsni muvaffaqiyatli yakunlash uchun savollarga to'g'ri javob bering (Kamida 80%).",
                    "passingScorePercentage": 80,
                    "questions": test_questions
                }
            }
        ]
    }
    
    out_code.append(json.dumps(lesson_obj, ensure_ascii=False, indent=2))
    out_code.append(",\n")

out_code.append("];\n")

target_file = "src/data/curriculum/minnaN5Lessons.ts"
with open(target_file, "w", encoding="utf-8") as f:
    f.write("".join(out_code))

print(f"Successfully generated {target_file} with 25 lessons!")
