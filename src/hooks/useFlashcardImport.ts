import { useState } from 'react';

export const useFlashcardImport = (importFlashcards: (subjectId: string, cards: { front: string; back: string; example?: string }[]) => Promise<boolean>) => {
    const [isImporting, setIsImporting] = useState(false);

    const handleImport = async (subjectId: string, file: File) => {
        setIsImporting(true);
        const reader = new FileReader();

        return new Promise<void>((resolve, reject) => {
            reader.onload = async (event) => {
                try {
                    const content = (event.target?.result as string) || '';
                    let cards: { front: string; back: string; example?: string }[] = [];

                    // 1. Try parsing JSON
                    if (file.name.toLowerCase().endsWith('.json') || content.trim().startsWith('[')) {
                        try {
                            const json = JSON.parse(content);
                            if (Array.isArray(json)) {
                                cards = json.map((item: any) => ({
                                    front: item.front || item.term || item.word || item.kanji || '',
                                    back: item.back || item.definition || item.meaning || item.romaji || '',
                                    example: item.example || item.sentence || item.notes || ''
                                })).filter(c => c.front && c.back);
                            }
                        } catch (err) {
                            console.warn("JSON parse attempt failed, trying delimited text:", err);
                        }
                    }

                    // 2. Try CSV / TSV / Anki Text format if JSON parsing gave no cards
                    if (cards.length === 0) {
                        const lines = content.split(/\r?\n/).filter(line => line.trim() && !line.startsWith('#'));
                        for (const line of lines) {
                            // Determine delimiter: tab, semicolon, or comma
                            let delimiter = '\t';
                            if (line.includes('\t')) delimiter = '\t';
                            else if (line.includes(';')) delimiter = ';';
                            else if (line.includes(',')) delimiter = ',';

                            const parts = line.split(delimiter).map(p => p.trim().replace(/^["']|["']$/g, ''));
                            if (parts.length >= 2) {
                                cards.push({
                                    front: parts[0],
                                    back: parts[1],
                                    example: parts[2] || ''
                                });
                            }
                        }
                    }

                    if (cards.length === 0) {
                        throw new Error("Faylda yararoqlik kartochkalar topilmadi. Qatorda kamida 'Front' va 'Back' ustunlari bo'lishi kerak.");
                    }

                    const success = await importFlashcards(subjectId, cards);
                    if (success) {
                        alert(`🎉 Muvaffaqiyatli! ${cards.length} ta kartochka import qilindi.`);
                        resolve();
                    } else {
                        alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
                        reject(new Error("Import failed"));
                    }
                } catch (error: any) {
                    console.error(error);
                    alert(error?.message || "Fayl xato formatda! JSON, CSV yoki Anki text fayllarini yuklang.");
                    reject(error);
                } finally {
                    setIsImporting(false);
                }
            };
            reader.readAsText(file);
        });
    };

    const downloadTemplate = () => {
        const template = [
            {
                "front": "Mizu (水)",
                "back": "Suv",
                "example": "Mizu o nomimasu (Suv ichaman)"
            },
            {
                "front": "Hon (本)",
                "back": "Kitob",
                "example": "Hon o yomimasu (Kitob o'qiyman)"
            }
        ];
        const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flashcards_template.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return { handleImport, downloadTemplate, isImporting };
};
