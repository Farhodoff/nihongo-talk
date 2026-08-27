import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import RoomList from './RoomList';
import { BrowserRouter } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

// Mock Supabase
vi.mock('../../lib/supabase', () => ({
    supabase: {
        from: vi.fn(() => ({
            select: vi.fn(() => ({
                eq: vi.fn(() => ({
                    order: vi.fn(() => Promise.resolve({ data: [], error: null }))
                }))
            })),
            insert: vi.fn(() => Promise.resolve({ error: null })),
            update: vi.fn(() => ({
                eq: vi.fn(() => Promise.resolve({ error: null }))
            }))
        })),
        channel: vi.fn(() => ({
            on: vi.fn().mockReturnThis(),
            subscribe: vi.fn()
        })),
        removeChannel: vi.fn(),
        auth: {
            getUser: vi.fn(() => Promise.resolve({ data: { user: { id: 'test-user' } }, error: null }))
        }
    }
}));

const renderWithRouter = (ui: React.ReactElement) => {
    return render(
        <BrowserRouter>
            {ui}
        </BrowserRouter>
    );
};

describe('RoomList Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Xonalar ro\'yxatini to\'g\'ri ko\'rsatishi kerak', async () => {
        await act(async () => {
            renderWithRouter(<RoomList />);
        });
        
        // Standart xonalar (library, lofi, group-a) borligini tekshirish
        expect(screen.getByText('Jimjit Kutubxona 📚')).toBeInTheDocument();
        expect(screen.getByText('Lofi Zali 🎧')).toBeInTheDocument();
        expect(screen.getByText('Guruhli O\'qish A 🗣')).toBeInTheDocument();
    });

    it('Yangi xona yaratish modalini ochish va yopish', async () => {
        await act(async () => {
            renderWithRouter(<RoomList />);
        });
        
        const createBtn = screen.getByText('Xona Yaratish');
        await act(async () => {
            fireEvent.click(createBtn);
        });
        
        expect(screen.getByText('Yangi Xona Yaratish')).toBeInTheDocument();
        
        // Click bekor qilish tugmasi orqali yopish
        const cancelBtn = screen.getByText('Bekor qilish');
        await act(async () => {
            fireEvent.click(cancelBtn);
        });
        
        await waitFor(() => {
            expect(screen.queryByText('Yangi Xona Yaratish')).not.toBeInTheDocument();
        });
    });

    it('Yangi xona yaratish funksiyasini tekshirish', async () => {
        await act(async () => {
            renderWithRouter(<RoomList />);
        });
        
        await act(async () => {
            fireEvent.click(screen.getByText('Xona Yaratish'));
        });
        
        const nameInput = screen.getByPlaceholderText('Masalan: IELTS Tayyorlov Guruhi');
        const descInput = screen.getByPlaceholderText('Xona maqsadi va qoidalari haqida...');
        
        await act(async () => {
            fireEvent.change(nameInput, { target: { value: 'Test Room' } });
            fireEvent.change(descInput, { target: { value: 'Test Description' } });
        });
        
        const submitBtn = screen.getByText('Yaratish');
        await act(async () => {
            fireEvent.click(submitBtn);
        });
        
        await waitFor(() => {
            expect(supabase.from).toHaveBeenCalledWith('study_rooms');
        });
    });
});
