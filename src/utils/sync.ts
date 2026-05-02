import { supabase } from '../lib/supabase';
import { dbOps } from './db';

export const syncOfflineData = async () => {
    if (!navigator.onLine) return;

    const queue = await dbOps.getQueue();
    if (queue.length === 0) return;

    console.log(`Sinxronizatsiya boshlandi: ${queue.length} ta amal...`);

    for (const item of queue) {
        try {
            const { action, storeName, data } = item;
            let success = false;

            if (action === 'CREATE') {
                const { error } = await supabase.from(storeName).insert(data);
                if (!error) success = true;
            } else if (action === 'UPDATE') {
                const { id, updates } = data;
                // Map keys if needed (specific to storeName)
                const { error } = await supabase.from(storeName).update(updates).eq('id', id);
                if (!error) success = true;
            } else if (action === 'DELETE') {
                const { id } = data;
                const { error } = await supabase.from(storeName).delete().eq('id', id);
                if (!error) success = true;
            }

            if (success) {
                await dbOps.removeFromQueue(item.id);
                console.log(`Muvaffaqiyatli sinxronizatsiya: ${action} ${storeName}`);
            }
        } catch (error) {
            console.error('Sinxronizatsiya xatosi:', error);
        }
    }
};
