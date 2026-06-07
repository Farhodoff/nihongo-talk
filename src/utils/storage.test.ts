import { beforeEach, describe, expect, it, vi } from 'vitest';
import '../test/mocks'; // Mock supabase client
import { clearAll, getData, removeData, storeData } from './storage';

describe('Storage Utils', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('should store and encrypt data correctly', async () => {
        const data = { id: 1, name: 'Test' };
        await storeData('test-key', data);
        
        // Assert it was saved
        expect(localStorage.setItem).toHaveBeenCalled();
        
        // Assert that what is in localStorage is NOT plaintext
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rawSaved = (localStorage.setItem as any).mock.calls[0][1];
        expect(rawSaved).not.toBe(JSON.stringify(data));
        
        // Assert that getData decrypts it correctly
        const retrieved = await getData('test-key');
        expect(retrieved).toEqual(data);
    });

    it('should fall back to retrieve plaintext data correctly (backwards compatibility)', async () => {
        const data = { id: 1, name: 'Test' };
        // Save as plaintext (old method)
        localStorage.setItem('test-key', JSON.stringify(data));

        const result = await getData('test-key');
        expect(result).toEqual(data);
    });

    it('should remove data', async () => {
        await removeData('test-key');
        expect(localStorage.removeItem).toHaveBeenCalledWith('test-key');
    });

    it('should clear all data', async () => {
        await clearAll();
        expect(localStorage.clear).toHaveBeenCalled();
    });
});

