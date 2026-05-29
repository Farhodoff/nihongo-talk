import { openDB, IDBPDatabase } from 'idb';

const DB_NAME = 'study_planner_db';
const DB_VERSION = 1;

export const initDB = async (): Promise<IDBPDatabase> => {
    return openDB(DB_NAME, DB_VERSION, {
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
};

export const dbOps = {
    async getAll(storeName: string) {
        const db = await initDB();
        return db.getAll(storeName);
    },
    async put(storeName: string, data: unknown) {
        const db = await initDB();
        return db.put(storeName, data);
    },
    async putAll(storeName: string, dataArray: unknown[]) {
        const db = await initDB();
        const tx = db.transaction(storeName, 'readwrite');
        await Promise.all([
            ...dataArray.map(item => tx.store.put(item)),
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
    async addToQueue(action: string, storeName: string, data: unknown) {
        const db = await initDB();
        return db.add('sync_queue', {
            action, // 'CREATE', 'UPDATE', 'DELETE'
            storeName,
            data,
            timestamp: Date.now()
        });
    },
    async getQueue() {
        const db = await initDB();
        return db.getAll('sync_queue');
    },
    async removeFromQueue(id: number) {
        const db = await initDB();
        return db.delete('sync_queue', id);
    }
};
