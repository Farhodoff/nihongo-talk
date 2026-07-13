export const javascriptLessons = [
  {
    id: "js-fundamentals-variables",
    title: "O'zgaruvchilar (Variables)",
    section: "JavaScript Asoslari",
    content: `
# O'zgaruvchilar (Variables)

Aksariyat hollarda, JavaScript dasturi ma'lumotlar bilan ishlashiga to'g'ri keladi. Bunga ikkita misol:

1. **Onlayn do'kon** – ma'lumotlar sotilayotgan tovarlar va xarid savatchasini (shopping cart) o'z ichiga olishi mumkin.
2. **Chat ilovasi** – ma'lumotlar foydalanuvchilar, xabarlar va boshqa ko'p narsalarni o'z ichiga olishi mumkin.

O'zgaruvchilar aynan shu ma'lumotlarni saqlash (xotirada ushlab turish) uchun ishlatiladi.

## O'zgaruvchi nima?

O'zgaruvchini ma'lumotlar uchun **"nomlangan xotira"** deb tushunishimiz mumkin. Biz o'zgaruvchilardan foydalanuvchilar, tovarlar yoki har qanday turdagi ma'lumotlarni saqlash uchun foydalanamiz.

JavaScript-da o'zgaruvchi yaratish uchun \`let\` kalit so'zidan (keyword) foydalaning.

Quyidagi kod "message" (xabar) nomli o'zgaruvchi yaratadi (boshqacha qilib aytganda: e'lon qiladi - *declare*):

\`\`\`javascript
let message;
\`\`\`

Endi biz unga \`=\` (tenglik) operatori yordamida qandaydir ma'lumot solishimiz mumkin:

\`\`\`javascript
let message;

message = 'Salom'; // 'Salom' matnini message nomli o'zgaruvchida saqlaymiz
\`\`\`

Endi bu matn o'zgaruvchi bilan bog'langan xotira maydonida saqlanadi. Biz unga o'zgaruvchining nomi orqali murojaat qilishimiz mumkin:

\`\`\`javascript
let message;
message = 'Salom!';

alert(message); // o'zgaruvchi ichidagi ma'lumotni ekranga chiqaradi
\`\`\`

Qisqa bo'lishi uchun, biz o'zgaruvchini e'lon qilish va unga qiymat berishni bitta qatorda birlashtirishimiz mumkin:

\`\`\`javascript
let message = 'Salom!'; // o'zgaruvchini e'lon qildik va darhol unga qiymat berdik

alert(message); // Salom!
\`\`\`

Shuningdek, biz bitta qatorda bir nechta o'zgaruvchilarni e'lon qilishimiz mumkin:

\`\`\`javascript
let user = 'John', age = 25, message = 'Salom';
\`\`\`

Bu qisqaroq ko'rinishi mumkin, ammo biz uni tavsiya etmaymiz. Yaxshiroq o'qilishi uchun har bir o'zgaruvchini alohida qatorda yozing.

Ko'p qatorli variant biroz uzunroq, lekin o'qish ancha oson:

\`\`\`javascript
let user = 'John';
let age = 25;
let message = 'Salom';
\`\`\`

Texnik jihatdan, bu variantlarning barchasi bir xil ishni bajaradi. Shuning uchun, bu ko'proq shaxsiy did va estetika masalasidir.

## Hayotiy o'xshatish

Agar biz o'zgaruvchini ustiga noyob nomli stiker (yozuv) yopishtirilgan ma'lumotlar uchun **"quti"** sifatida tasavvur qilsak, uning mohiyatini osongina anglab yetamiz.

Masalan, \`message\` o'zgaruvchisini ustiga "message" deb yozilgan va ichida "Salom!" qiymati bor quti deb tasavvur qilish mumkin.

Biz qutiga xohlagan qiymatimizni solishimiz mumkin.
Shuningdek, biz uni xohlagancha o'zgartirishimiz mumkin:

\`\`\`javascript
let message;

message = 'Salom!';
message = 'Dunyo!'; // qiymat o'zgartirildi

alert(message); // Endi 'Dunyo!' chiqadi
\`\`\`

Qiymat o'zgartirilganda, eski ma'lumot o'zgaruvchidan o'chirib tashlanadi (qutidagi eski narsa olinib, yangisi solinadi).

Biz ikkita o'zgaruvchi e'lon qilib, ma'lumotlarni biridan ikkinchisiga nusxalashimiz ham mumkin:

\`\`\`javascript
let hello = 'Salom dunyo!';
let message;

// 'Salom dunyo!' ni hello dan message ga nusxalaymiz
message = hello;

// endi ikkita o'zgaruvchi ham bir xil ma'lumotni ushlab turadi
alert(hello); // Salom dunyo!
alert(message); // Salom dunyo!
\`\`\`

## Ikki marta e'lon qilish xatolikka olib keladi

Bitta o'zgaruvchi faqat bir marta e'lon qilinishi kerak.
Xuddi shu o'zgaruvchini qayta e'lon qilish xatolikdir:

\`\`\`javascript
let message = "Bu";

// 'let' ni qayta ishlatish xatoga olib keladi
let message = "Anavu"; // SyntaxError: 'message' has already been declared (allaqachon e'lon qilingan)
\`\`\`

Shuning uchun biz o'zgaruvchini bir marta (let bilan) e'lon qilishimiz va keyin unga shunchaki \`let\` siz murojaat qilishimiz kerak.

## O'zgaruvchilarni nomlash

JavaScript-da o'zgaruvchilar nomiga ikkita cheklov mavjud:
1. Nom faqat harflar, raqamlar yoki \`$\` va \`_\` belgilaridan iborat bo'lishi mumkin.
2. Birinchi belgi raqam bo'lmasligi kerak.

To'g'ri nomlarga misollar:
\`\`\`javascript
let userName;
let test123;
\`\`\`

Agar ism bir nechta so'zlarni o'z ichiga olsa, odatda **camelCase** ("tuya" uslubi) ishlatiladi. Ya'ni: so'zlar ketma-ket yoziladi va birinchi so'zdan tashqari har bir keyingi so'z bosh harf bilan boshlanadi: \`myVeryLongName\`, \`shoppingCartCount\`.

Qizig'i shundaki, \`$\` (dollar) va \`_\` (pastki chiziq) belgilari ham nomlarda ishlatsa bo'ladi. Ular hech qanday maxsus ma'noga ega bo'lmagan oddiy belgilar hisoblanadi.

Noto'g'ri o'zgaruvchi nomlariga misollar:
\`\`\`javascript
let 1a; // raqam bilan boshlanishi mumkin emas
let my-name; // chiziqcha '-' nomda ishlashiga ruxsat berilmagan
\`\`\`

> [!WARNING]
> **Katta-kichik harflar farq qiladi (Case matters)**
> \`apple\` va \`APPLE\` deb nomlangan o'zgaruvchilar ikkita butunlay boshqa o'zgaruvchilardir.

> [!IMPORTANT]
> **Zaxiralangan nomlar (Reserved names)**
> Tildagi ba'zi so'zlar zaxiralangan bo'lib, ulardan o'zgaruvchi nomi sifatida foydalanib bo'lmaydi, chunki ular tilning o'zida maxsus ma'noga ega.
> Masalan: \`let\`, \`class\`, \`return\` va \`function\`.
> \`let let = 5;\` // Xato! "let" deb nomlab bo'lmaydi.

## Konstantalar (Constants)

O'zgarmaydigan o'zgaruvchini e'lon qilish uchun \`let\` o'rniga \`const\` dan foydalaning:

\`\`\`javascript
const myBirthday = '18.04.1982';
\`\`\`

\`const\` yordamida e'lon qilingan o'zgaruvchilar "konstantalar" deb ataladi. Ular qayta tayinlanishi (qiymati o'zgarishi) mumkin emas. Bunga urinish xatoga olib keladi:

\`\`\`javascript
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // xato, konstantani o'zgartirib bo'lmaydi!
\`\`\`

Dasturchi o'zgaruvchi hech qachon o'zgarmasligiga ishonchi komil bo'lsa, u buni barchaga (kodni o'qiydiganlarga) kafolatlash va bildirish uchun uni \`const\` bilan e'lon qiladi.

### Katta harfli konstantalar (Uppercase constants)

Dastur ishga tushishidan oldin ma'lum bo'lgan, eslab qolish qiyin bo'lgan qiymatlar uchun taxallus (alias) sifatida konstantalardan foydalanish keng tarqalgan amaliyotdir.

Bunday konstantalar **KATTA_HARFLAR_VA_PASTKI_CHIZIQLAR** yordamida nomlanadi.
Masalan, keling, ranglar uchun konstantalar yaratamiz:

\`\`\`javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...qachondir bizga rang kerak bo'lganda
let color = COLOR_ORANGE;
alert(color); // #FF7F00
\`\`\`

Nima uchun bu qulay?
1. \`COLOR_ORANGE\` ni eslab qolish \`"#FF7F00"\` dan ko'ra ancha oson.
2. \`"#FF7F00"\` ni yozishda xato qilish oson, \`COLOR_ORANGE\` ni esa yo'q.
3. Kodni o'qiyotganda, \`COLOR_ORANGE\` \`#FF7F00\` ga qaraganda ancha tushunarli ma'noga ega.

## Narsalarni to'g'ri nomlang

O'zgaruvchilar haqida gapirganda, yana bir o'ta muhim narsa bor.
O'zgaruvchi nomi u saqlaydigan ma'lumotni tavsiflovchi toza va aniq ma'noga ega bo'lishi kerak.

O'zgaruvchilarni nomlash dasturlashdagi eng muhim va murakkab ko'nikmalardan biridir. O'zgaruvchilar nomiga bir qarab, qaysi kodni yangi o'rganuvchi va qaysi kodni tajribali dasturchi yozganini bilib olish mumkin.

Ba'zi yaxshi qoidalar:
- \`userName\` yoki \`shoppingCart\` kabi odam o'qiy oladigan (human-readable) nomlardan foydalaning.
- Nima qilayotganingizni aniq bilmasangiz, \`a\`, \`b\` va \`c\` kabi qisqartmalar yoki qisqa ismlardan uzoqroq turing.
- Nomlarni maksimal darajada tavsiflovchi va qisqa qiling. Noto'g'ri nomlarga misollar - \`data\` (ma'lumot) va \`value\` (qiymat). Bunday nomlar hech narsa demaydi.

Yangi o'zgaruvchi yaratish o'rniga eskisini qayta ishlashga (qayta-qayta har xil ma'lumot tiqishga) urinmang. Yaxshi nomlangan qo'shimcha o'zgaruvchi bu yomon emas, yaxshilikdir!

## Xulosa
- Biz \`let\` yoki \`const\` kalit so'zlari orqali ma'lumotlarni saqlash uchun o'zgaruvchilarni e'lon qilishimiz mumkin.
- \`let\` – zamonaviy o'zgaruvchi e'lon qilish usuli.
- \`const\` – \`let\` ga o'xshaydi, lekin o'zgaruvchining qiymatini o'zgartirib bo'lmaydi.
- O'zgaruvchilar ularning ichida nima borligini osongina tushunishga imkon beradigan tarzda nomlanishi kerak.

## Vazifalar (Tasks)

**1. O'zgaruvchilar bilan ishlash**
1. Ikkita o'zgaruvchi e'lon qiling: \`admin\` va \`name\`.
2. \`name\` o'zgaruvchisiga "Jon" (John) qiymatini bering.
3. Qiymatni \`name\` dan \`admin\` ga nusxalang.
4. \`alert\` (yoki console.log) yordamida \`admin\` qiymatini ko'rsating (ekranga "Jon" chiqishi kerak).

**2. To'g'ri nom berish**
1. Sayyoramizning nomini saqlaydigan o'zgaruvchi yarating. Bunday o'zgaruvchini qanday nomlagan bo'lardingiz?
2. Veb-saytning hozirgi (joriy) tashrif buyuruvchisining ismini saqlash uchun o'zgaruvchi yarating. Ushbu o'zgaruvchini qanday nomlagan bo'lardingiz?
    `,
    tasks: [
      {
        question: "1. admin va name o'zgaruvchilarini yarating...",
        solution: "let name = 'Jon';\nlet admin;\nadmin = name;\nalert(admin);"
      },
      {
        question: "2. Sayyora va mehmon nomlari...",
        solution: "let ourPlanetName = 'Earth';\nlet currentUserName = 'Jon';"
      }
    ]
  }
];
