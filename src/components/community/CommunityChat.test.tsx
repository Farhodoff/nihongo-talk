import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CommunityChat from './CommunityChat';

// To'g'ridan-to'g'ri Supabase-ni mock qilish (tashqi fayllarga bog'lanmasdan)
vi.mock('../../lib/supabase', () => {
  const mockFrom = vi.fn();
  return {
    supabase: {
      auth: {
        getUser: vi.fn().mockResolvedValue({ 
          data: { user: { id: 'user-1', user_metadata: { full_name: 'Farhodoff' } } } 
        }),
      },
      from: mockFrom,
      channel: vi.fn(() => ({
        on: vi.fn().mockReturnThis(),
        subscribe: vi.fn().mockReturnThis(),
        send: vi.fn().mockResolvedValue(null),
      })),
      removeChannel: vi.fn(),
    }
  };
});

import { supabase } from '../../lib/supabase';

describe('CommunityChat Component (Final Fix)', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('Xabarlarni muvaffaqiyatli yuklab ko\'rsatishi kerak', async () => {
        const mockData = [
            { 
                id: '1', 
                content: 'Salom, bu test xabari!', 
                user_id: 'user-2', 
                created_at: new Date().toISOString(), 
                profiles: { full_name: 'Ali' } 
            }
        ];

        (supabase.from as any).mockReturnValue({
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockReturnThis(),
            limit: vi.fn().mockResolvedValue({ data: mockData, error: null }),
        });

        render(<CommunityChat />);

        // findByText asinxron ravishda element paydo bo'lishini kutadi
        const messageElement = await screen.findByText('Salom, bu test xabari!', {}, { timeout: 3000 });
        expect(messageElement).toBeInTheDocument();
        expect(screen.getByText('Ali')).toBeInTheDocument();
    });

    it('Xabar yuborish funksiyasi ishlayotganini tekshirish', async () => {
        const insertSpy = vi.fn().mockResolvedValue({ error: null });
        
        (supabase.from as any).mockReturnValue({
            select: vi.fn().mockReturnThis(),
            order: vi.fn().mockReturnThis(),
            limit: vi.fn().mockResolvedValue({ data: [], error: null }),
            insert: insertSpy,
        });

        render(<CommunityChat />);

        // Inputni to'ldirish
        const input = await screen.findByPlaceholderText(/Xabar yozing.../i);
        fireEvent.change(input, { target: { value: 'Yangi xabar yuborish' } });

        // Submit tugmasini bosish
        const sendButton = screen.getByRole('button', { name: /Xabarni yuborish/i });
        fireEvent.click(sendButton);

        await waitFor(() => {
            expect(insertSpy).toHaveBeenCalledWith(expect.objectContaining({
                content: 'Yangi xabar yuborish'
            }));
        });
    });
});
