# 🧠 Gemini AI Flashcard Generation Integration & Progress Plan

Ushbu hujjat **Google Gemini API** yordamida avtomatik ravishda fanlar va mavzular bo'yicha yuqori sifatli flashcardlarni (Anki-style) yaratish, sifatini tekshirish, saqlash va sinxronizatsiya qilish jarayonining to'liq arxitekturasi va rejasini tasvirlaydi.

---

## 🗺️ 1. Tizim Arxitekturasi (System Sequence)

Quyidagi diagrammada foydalanuvchi interfeysidan tortib Gemini AI API va ma'lumotlar bazasigacha bo'lgan ma'lumotlar oqimi va xabar almashinuvi tasvirlangan:

```mermaid
sequenceDiagram
    autonumber
    actor User as Foydalanuvchi (UI)
    participant Client as Frontend (Vite/React)
    participant DB as Local Cache (IndexedDB)
    participant Edge as Supabase Edge Function
    participant Gemini as Google Gemini API
    participant Postgres as Supabase PostgreSQL

    User->>Client: Mavzu kiritiadi va "Yaratish"ni bosadi
    activate Client
    Client->>Client: So'rov parametrlarini tayyorlaydi (topic, count, level)
    
    alt Internet mavjud (Online)
        Client->>Edge: POST /v1/generate-flashcards (payload)
        activate Edge
        
        Edge->>Gemini: gemini-2.5-flash (Structured JSON Schema call)
        activate Gemini
        Gemini-->>Edge: Sifatli, formatlangan JSON array (Flashcards)
        deactivate Gemini
        
        Edge->>Edge: Sifat va takroriylikni tekshiradi (Quality Validation)
        
        alt Sifat tekshiruvi muvaffaqiyatli
            Edge->>Postgres: Flashcardlarni bazaga saqlaydi (bulk upsert)
            activate Postgres
            Postgres-->>Edge: Saqlangan kartalar ro'yxati (UUIDlar bilan)
            deactivate Postgres
            Edge-->>Client: 200 OK (Muvaffaqiyatli yaratilgan kartalar)
        else Tekshiruvdan o'tmadi (Validation Failed)
            Edge-->>Client: 422 Unprocessable Entity (Sifat yetarli emas)
        end
        deactivate Edge
        
    else Internet yo'q (Offline)
        Client->>DB: So'rovni oflayn navbatga (Sync Queue) qo'shadi
        Client-->>User: "Oflayn rejim: Internet kelganda yaratiladi" xabari
    end

    Client->>DB: Kartalarni mahalliy keshga saqlaydi
    Client-->>User: Yaratilgan flashcardlarni ko'rsatadi va o'rganishni taklif qiladi
    deactivate Client
```

---

## 📊 2. Sifat Nazorati va Qayta Ishlash Oqimi (Validation Flow)

AI tomonidan noto'g'ri, sifatsiz yoki takroriy ma'lumotlar kelishining oldini olish uchun amalga oshiriladigan avtomatik sifat nazorati (Quality Assurance) oqimi:

```mermaid
flowchart TD
    A[Gemini API dan JSON javob keldi] --> B{JSON validmi?}
    B -- Yo'q --> C[Qayta urinish - Retry #1]
    B -- Ha --> D[Kartalar sonini tekshirish]
    
    D -->|Kutilgandan kam| C
    D -->|Kutilganidek| E{Duplicate element bormi?}
    
    E -->|Mavjud| F[Takroriylarni tozalash va to'ldirish]
    E -->|Mavjud emas| G[Har bir kartaning uzunligini tekshirish]
    
    G -->|Savol < 5 yoki Javob < 10 belgi| C
    G -->|Talabga mos| H[Supabase bazasiga saqlash]
    
    C --> I{Urinishlar soni >= 3?}
    I -->|Ha| J[Fallback: Keshdagi andozalardan yuklash]
    I -->|Yo'q| K[Qayta Gemini so'rovini yuborish] --> A
```

---

## 📅 3. Amalga Oshirish Bosqichlari (Implementation Roadmap)

Flashcard yaratish funksiyasini to'liq joriy qilish va progress bosqichlari:

```mermaid
gantt
    title Gemini Flashcard Yaratish - Progress Rejasi
    dateFormat  YYYY-MM-DD
    section 1. Tayyorgarlik
    Ma'lumotlar bazasi sxemasini moslash      :active, des1, 2026-05-19, 1d
    Gemini API kalitlarini sozlash            :active, des2, after des1, 1d
    section 2. Backend (Edge Function)
    generate-flashcards Edge funksiyasini yozish :   des3, after des2, 2d
    Prompt Engineering & Structured Output     :   des4, after des3, 2d
    Validation va Retry mantig'ini qo'shish    :   des5, after des4, 1d
    section 3. Frontend Integration
    Settings va DeckPage UI moslashtirish       :   des6, after des5, 2d
    Oflayn rejim (IndexedDB Queue) ulash        :   des7, after des6, 2d
    Sinov va Oliy sifat nazorati                :   des8, after des7, 1d
```

---

## 🛠️ 4. API So'rovi va Prompt Texnikasi (Prompt Engineering)

Tizimda qo'llaniladigan eng mukammal va xatosiz **Structured Output** API so'rovi formati:

### **Endpoint:** `POST https://<project-ref>.supabase.co/functions/v1/generate-flashcards`

**Headers:**
```http
Authorization: Bearer <user-jwt>
Content-Type: application/json
```

**Payload:**
```json
{
  "topic": "JavaScript Massiv Metodlari",
  "count": 10,
  "difficulty": "intermediate",
  "subject_id": "8fa88c52-87a4-4b53-a747-d5d14e1a0b33"
}
```

### **System Prompt (Gemini API uchun ko'rsatma):**
```
Siz professional o'qituvchi va spaced repetition (takrorlash) tizimi bo'yicha mutaxassissiz.
Foydalanuvchi kiritgan "${topic}" mavzusi bo'yicha aniq ${count} ta yuqori sifatli flashcard yarating.

Talablar:
1. Savol (front) qisqa, aniq va tushunarli bo'lsin.
2. Javob (back) to'g'ri bo'lishi bilan birga qisqa izoh yoki qoidaga ega bo'lsin.
3. Mumkin bo'lsa, o'zbek tilidagi amaliy misol (example) yozing.
4. Javobingizni mutaxassis darajasida va faqat va faqat quyidagi JSON formatida qaytaring:

[
  {
    "front": "Massiv oxiridan element o'chirish uchun qaysi metod ishlatiladi?",
    "back": "pop() metodi massiv oxiridagi elementni o'chiradi va o'chirilgan qiymatni qaytaradi.",
    "example": "const arr = [1, 2]; arr.pop(); // arr endi [1]",
    "category": "Massiv metodlari"
  }
]
```
