export const STORAGE_KEYS = {
    GOALS: 'study-planner-goals',
    TASKS: 'study-planner-tasks',
    SUBJECTS: 'study-planner-subjects',
    SESSIONS: 'study-planner-sessions',
    NOTES: 'study-planner-notes',
    FLASHCARDS: 'study-planner-flashcards',
    SETTINGS: 'study-planner-settings',
};

export const storeData = async <T>(key: string, value: T): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(`Error saving data for key ${key}:`, e);
        throw e;
    }
};

export const getData = async <T>(key: string): Promise<T | null> => {
    try {
        const jsonValue = localStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(`Error reading data for key ${key}:`, e);
        throw e;
    }
};

export const removeData = async (key: string): Promise<void> => {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error(`Error removing data for key ${key}:`, e);
        throw e;
    }
};

export const clearAll = async (): Promise<void> => {
    try {
        localStorage.clear();
    } catch (e) {
        console.error('Error clearing storage:', e);
        throw e;
    }
};
