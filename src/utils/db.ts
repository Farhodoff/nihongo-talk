import { openDB, IDBPDatabase } from 'idb';
import { encrypt, decrypt, getEncryptionKey } from './storage';

const DB_NAME = 'study_planner_db';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase | null = null;

export const initDB = async (): Promise<IDBPDatabase> => {
    if (dbInstance) return dbInstance;
    dbInstance = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            // Ma'lumotlar uchun store'lar
            if (!db.objectStoreNames.contains('tasks')) db.createObjectStore('tasks', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('subjects')) db.createObjectStore('subjects', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('flashcards')) db.createObjectStore('flashcards', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('notes')) db.createObjectStore('notes', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('goals')) db.createObjectStore('goals', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('events')) db.createObjectStore('events', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('study_notes')) db.createObjectStore('study_notes', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('sessions')) db.createObjectStore('sessions', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'id' });

            // Sinxronizatsiya navbati
            if (!db.objectStoreNames.contains('sync_queue')) {
                db.createObjectStore('sync_queue', { keyPath: 'id', autoIncrement: true });
            }
        },
    });
    return dbInstance;
};

const encryptData = async (data: unknown) => {
    const key = await getEncryptionKey();
    const str = JSON.stringify(data);
    return encrypt(str, key);
};

const decryptData = async (encryptedStr: string) => {
    const key = await getEncryptionKey();
    const str = decrypt(encryptedStr, key);
    if (!str) return null;
    try {
        return JSON.parse(str);
    } catch {
        return null;
    }
};

export const dbOps = {
    async getAll(storeName: string) {
        const db = await initDB();
        const raw = await db.getAll(storeName);
        return Promise.all(raw.map(async item => {
            if (item && typeof item === 'object' && item._encrypted) {
                const dec = await decryptData(item.payload);
                return dec ? dec : item;
            }
            return item;
        }));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async put(storeName: string, data: any) {
        const db = await initDB();
        const id = data.id;
        const payload = await encryptData(data);
        return db.put(storeName, { id, payload, _encrypted: true });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async putAll(storeName: string, dataArray: any[]) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readwrite');
        
        const encryptedItems = await Promise.all(dataArray.map(async data => {
            return { id: data.id, payload: await encryptData(data), _encrypted: true };
        }));

        await Promise.all([
            ...encryptedItems.map(item => tx.store.put(item)),
            tx.done
        ]);
    },
    async delete(storeName: string, id: string) {
        const db = await initDB();
        return db.delete(storeName, id);
    },
    async clear(storeName: string) {
        const db = await initDB();
        return db.clear(storeName);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async addToQueue(action: string, storeName: string, data: any) {
        const db = await initDB();
        const payload = await encryptData(data);
        return db.add('sync_queue', {
            action, 
            storeName,
            payload,
            _encrypted: true,
            timestamp: Date.now()
        });
    },
    async getQueue() {
        const db = await initDB();
        const raw = await db.getAll('sync_queue');
        return Promise.all(raw.map(async item => {
            if (item && typeof item === 'object' && item._encrypted) {
                const decData = await decryptData(item.payload);
                return { ...item, data: decData };
            }
            return item;
        }));
    },
    async removeFromQueue(id: number) {
        const db = await initDB();
        return db.delete('sync_queue', id);
    }
};
