import { beforeEach, describe, expect, it, vi } from 'vitest';
import { clearAll, getData, removeData, storeData } from './storage';


describe('Storage Utils', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('should store data correctly', async () => {
        const data = { id: 1, name: 'Test' };
        await storeData('test-key', data);
        expect(localStorage.setItem).toHaveBeenCalledWith('test-key', JSON.stringify(data));
    });

    it('should retrieve data correctly', async () => {
        const data = { id: 1, name: 'Test' };
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
