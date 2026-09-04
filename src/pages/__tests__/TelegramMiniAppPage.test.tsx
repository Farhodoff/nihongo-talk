import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { TelegramMiniAppPage } from '../TelegramMiniAppPage';

// Mock hook
vi.mock('../../hooks/useTelegramWebApp', () => ({
  useTelegramWebApp: () => ({
    isTwa: true,
    user: {
      id: 998877,
      first_name: 'Farhod',
      username: 'farhod_test',
    },
    initData: 'query_id=AA&user=%7B%22id%22%3A998877%7D',
    haptics: {
      impact: vi.fn(),
      notification: vi.fn(),
      selection: vi.fn(),
    },
    closeApp: vi.fn(),
    openTelegramLink: vi.fn(),
  }),
}));

describe('TelegramMiniAppPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <TelegramMiniAppPage />
      </BrowserRouter>,
    );
  };

  it('renders Telegram user greeting and gamification header', () => {
    renderComponent();

    expect(screen.getByText('Farhod')).toBeInTheDocument();
    expect(screen.getByText('Telegram')).toBeInTheDocument();
    expect(screen.getByText('Nihon Talk Mini App')).toBeInTheDocument();
  });

  it('allows flipping flashcards and rating cards', () => {
    renderComponent();

    // Default tab is flashcards
    expect(screen.getByText(/Tarjimani ko'rish uchun bosing/i)).toBeInTheDocument();

    // Click on card to flip
    const cardEl = screen.getByText(/こんにちは/i);
    fireEvent.click(cardEl);

    expect(screen.getByText(/O'zbekcha Ma'nosi:/i)).toBeInTheDocument();
    expect(screen.getByText(/Assalomu alaykum/i)).toBeInTheDocument();

    // Click "Oson" button
    const easyBtn = screen.getByRole('button', { name: /🟢 Oson/i });
    fireEvent.click(easyBtn);

    expect(screen.getByText(/Takrorlandi: 1 ta/i)).toBeInTheDocument();
  });

  it('switches to mini-quiz tab and handles quiz answering', () => {
    renderComponent();

    const quizTabBtn = screen.getByText('Mini-Quiz');
    fireEvent.click(quizTabBtn);

    expect(screen.getByText(/毎朝、パン _____ 食べます。/i)).toBeInTheDocument();

    const correctOption = screen.getByRole('button', { name: /を \(o\)/i });
    fireEvent.click(correctOption);

    expect(screen.getByText(/Izoh:/i)).toBeInTheDocument();
    expect(screen.getByText(/Keyingi savol/i)).toBeInTheDocument();
  });

  it('switches to speaking tab and displays scenarios', () => {
    renderComponent();

    const speakingTabBtn = screen.getByText('Speaking');
    fireEvent.click(speakingTabBtn);

    expect(screen.getByText(/Kombinida xarid qilish/i)).toBeInTheDocument();
    expect(screen.getByText(/Tokioda metro chiptasi/i)).toBeInTheDocument();
  });
});
