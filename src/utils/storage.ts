import { supabase } from '../lib/supabase';

export const STORAGE_KEYS = {
    GOALS: 'study-planner-goals',
    TASKS: 'study-planner-tasks',
    SUBJECTS: 'study-planner-subjects',
    SESSIONS: 'study-planner-sessions',
    NOTES: 'study-planner-notes',
    FLASHCARDS: 'study-planner-flashcards',
    SETTINGS: 'study-planner-settings',
};

// Helper to get encryption key (uses current user ID or a fallback key)
const getEncryptionKey = async (): Promise<string> => {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        return user?.id || 'study-planner-fallback-key';
    } catch {
        return 'study-planner-fallback-key';
    }
};

// Simple XOR encryption/decryption + Base64
const encrypt = (txt: string, key: string): string => {
    let result = '';
    for (let i = 0; i < txt.length; i++) {
        const charCode = txt.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return btoa(unescape(encodeURIComponent(result)));
};

const decrypt = (str: string, key: string): string => {
    try {
        const decoded = decodeURIComponent(escape(atob(str)));
        let result = '';
        for (let i = 0; i < decoded.length; i++) {
            const charCode = decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            result += String.fromCharCode(charCode);
        }
        return result;
    } catch {
        return '';
    }
};

export const storeData = async <T>(key: string, value: T): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        const encKey = await getEncryptionKey();
        const encryptedValue = encrypt(jsonValue, encKey);
        localStorage.setItem(key, encryptedValue);
    } catch (e) {
        console.error(`Error saving data for key ${key}:`, e);
        throw e;
    }
};

export const getData = async <T>(key: string): Promise<T | null> => {
    try {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue == null) return null;
        
        const encKey = await getEncryptionKey();
        const decrypted = decrypt(jsonValue, encKey);
        
        if (decrypted) {
            return JSON.parse(decrypted);
        }
        
        // Backwards compatibility fallback (try parsing as plaintext)
        return JSON.parse(jsonValue);
    } catch (e) {
        // Double fallback if decryption throws or JSON.parse on decrypted fails, try direct JSON.parse
        try {
            const rawValue = localStorage.getItem(key);
            return rawValue != null ? JSON.parse(rawValue) : null;
        } catch {
            console.error(`Error reading data for key ${key}:`, e);
            throw e;
        }
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

