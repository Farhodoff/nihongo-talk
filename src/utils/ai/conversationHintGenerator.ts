import { ConversationHintItem } from '../../components/speaking/ConversationHints';
import { ConversationScenario } from '../../components/speaking/scenarioTypes';

export function generateContextualHints(
  coachText: string,
  scenario?: ConversationScenario | null,
): ConversationHintItem[] {
  const clean = coachText.trim();

  // 1. Scenario-specific smart hints
  if (scenario?.id === 'tokyo_train_ticket') {
    return [
      {
        japanese: '新宿駅までの片道切符を一枚ください。',
        romaji: 'Shinjuku-eki made no katamichi kippu o ichimai kudasai.',
        uzbek: 'Shinjuku bekatigacha bir kishilik bir tomonlama chipta bering.',
      },
      {
        japanese: '山手線は何番線から乗ればいいですか？',
        romaji: 'Yamanote-sen wa nanban-sen kara noreba ii desu ka?',
        uzbek: "Yamanote liniyasiga nechanchi yo'ldan (platformadan) chiqsam bo'ladi?",
      },
      {
        japanese: 'Suicaカードにチャージできますか？',
        romaji: 'Suika kaado ni chaaji dekimasu ka?',
        uzbek: "Suica kartasiga pul (balans) to'ldirsa bo'ladimi?",
      },
    ];
  }

  if (scenario?.id === 'konbini_shopping') {
    return [
      {
        japanese: 'はい、お弁当を温めてください。',
        romaji: 'Hai, obentou o atatamete kudasai.',
        uzbek: 'Ha, iltimos, bentoni (ovqatni) isitib bering.',
      },
      {
        japanese: 'レジ袋は大丈夫です。お箸を一つください。',
        romaji: 'Rejibukuro wa daijoubu desu. Ohashi o hitotsu kudasai.',
        uzbek: "Xalta kerak emas. Bitta cho'p (chopstick) bersangiz bo'ldi.",
      },
      {
        japanese: 'クレジットカードで払います。',
        romaji: 'Kurejitto kaado de haraimasu.',
        uzbek: "Bank kartasi bilan to'layman.",
      },
    ];
  }

  if (scenario?.id === 'fudousan_apartment_rental') {
    return [
      {
        japanese: '家賃は月7万円以下で、駅から徒歩10分以内が希望です。',
        romaji: 'Yachin wa tsuki nana-man-en ika de, eki kara toho jippun inai ga kibou desu.',
        uzbek: 'Ijara oylik 70,000 yengacha, bekatdan piyoda 10 daqiqalik joy qidiryapman.',
      },
      {
        japanese: '敷金と礼金はいくらくらいかかりますか？',
        romaji: 'Shikikin to reikin wa ikura kurai kakarimasu ka?',
        uzbek: "Shikikin va reikin (dastlabki to'lovlar) qancha bo'ladi?",
      },
      {
        japanese: 'この部屋を一度内見したいのですが、可能ですか？',
        romaji: 'Kono heya o ichido naiken shitai no desu ga, kanou desu ka?',
        uzbek: "Ushbu xonani borib ko'rishim mumkinmi?",
      },
    ];
  }

  if (scenario?.id === 'baito_job_interview' || scenario?.id === 'mensetsu_it') {
    return [
      {
        japanese: 'はい、週に三日、夕方から勤務可能です。',
        romaji: 'Hai, shuu ni mikka, yuugata kara kinmu kanou desu.',
        uzbek: 'Ha, haftada 3 kun, kechki paytdan ishlay olaman.',
      },
      {
        japanese: '人と話すことと、新しいスキルを学ぶことが得意です。',
        romaji: 'Hito to hanasu koto to, atarashii sukiru o manabu koto ga tokui desu.',
        uzbek: "Odamlar bilan muloqot qilish va yangi ko'nikmalarni tez o'rganish menga yoqadi.",
      },
      {
        japanese: '一生懸命頑張りますので、よろしくお願いいたします。',
        romaji: 'Isshoukenmei gambarimasu node, yoroshiku onegai itashimasu.',
        uzbek: "Bor kuchim bilan harakat qilaman, jamoangizga xizmat qilishdan xursand bo'laman.",
      },
    ];
  }

  // 2. Pattern detection from coach speech
  if (clean.includes('何名') || clean.includes('人数')) {
    return [
      {
        japanese: '一人です。カウンター席でお願いします。',
        romaji: 'Hitori desu. Kauntaa seki de onegai shimasu.',
        uzbek: "Bir kishiman. Peshtaxta (bar) joy bo'lsa yaxshi bo'lardi.",
      },
      {
        japanese: '二人です。テーブル席は空いていますか？',
        romaji: 'Futari desu. Teeburu seki wa aite imasu ka?',
        uzbek: "Ikki kishimiz. Stol joyingiz bo'shmi?",
      },
      {
        japanese: '予約した山田ですが、席はありますか？',
        romaji: 'Yoyaku shita Yamada desu ga, seki wa arimasu ka?',
        uzbek: 'Oldindan band qilgan edim, joyimiz tayyormi?',
      },
    ];
  }

  if (
    clean.includes('どう') ||
    clean.includes('何が') ||
    clean.includes('好き') ||
    clean.includes('趣味')
  ) {
    return [
      {
        japanese: 'とても面白いと思います！',
        romaji: 'Totemo omoshiroi to omoimasu!',
        uzbek: 'Menimcha juda qiziq va ajoyib!',
      },
      {
        japanese: '私は日本のアニメと音楽が一番好きです。',
        romaji: 'Watashi wa Nihon no anime to ongaku ga ichiban suki desu.',
        uzbek: 'Menga eng yoqqani — Yaponiya animelari va musiqasi.',
      },
      {
        japanese: '先生は週末にどんなことをするのが好きですか？',
        romaji: 'Sensei wa shuumatsu ni donna koto o suru no ga suki desu ka?',
        uzbek: "Ustoz, o'zingiz dam olish kunlari nima bilan shug'ullanishni yoqtirasiz?",
      },
    ];
  }

  // 3. Universal natural conversational fallback
  return [
    {
      japanese: 'はい、分かりました！続けてお話ししましょう。',
      romaji: 'Hai, wakarimashita! Tsuzukete ohanashi shimashou.',
      uzbek: 'Ha, tushundim! Suhbatni davom ettiramiz.',
    },
    {
      japanese: 'すみません、もう少しゆっくり話していただけますか？',
      romaji: 'Sumimasen, mou sukoshi yukkuri hanashite itadakemasu ka?',
      uzbek: 'Kechirasiz, biroz sekinroq gapira olasizmi?',
    },
    {
      japanese: 'それは興味深いですね。もっと詳しく教えてください！',
      romaji: 'Sore wa kyoumibukai desu ne. Motto kuwashiku oshiete kudasai!',
      uzbek: 'Bu juda qiziq ekan. Batafsilroq aytib bera olasizmi?',
    },
  ];
}
