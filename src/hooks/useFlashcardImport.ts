import { useState } from 'react';

export const useFlashcardImport = (importFlashcards: (subjectId: string, cards: { front: string; back: string; example?: string }[]) => Promise<boolean>) => {
    const [isImporting, setIsImporting] = useState(false);

    const handleImport = async (subjectId: string, file: File) => {
        setIsImporting(true);
        const reader = new FileReader();

        return new Promise<void>((resolve, reject) => {
            reader.onload = async (event) => {
                try {
                    const json = JSON.parse(event.target?.result as string);
                    if (!Array.isArray(json)) throw new Error("JSON must be an array");

                    // Validate structure roughly
                    if (json.length > 0 && (!json[0].front || !json[0].back)) {
                        throw new Error("Invalid JSON structure. Needs 'front' and 'back' fields.");
                    }

                    const success = await importFlashcards(subjectId, json);
                    if (success) {
                        alert("Muvaffaqiyatli yuklandi!");
                        resolve();
                    } else {
                        alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
                        reject(new Error("Import failed"));
                    }
                } catch (error: unknown) {
                    console.error(error);
                    alert("JSON fayl xato formatda! Iltimos, namunani tekshiring.");
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
                "front": "Mizu",
                "back": "Suv",
                "example": "Mizu o nomimasu (Suv ichaman)"
            },
            {
                "front": "Hon",
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
