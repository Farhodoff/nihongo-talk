import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { KanjiCanvasPractice } from '../KanjiCanvasPractice';

const mockAwardXP = vi.fn();

vi.mock('../../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    awardXP: mockAwardXP,
  }),
}));

vi.mock('../../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'uz',
  }),
}));

vi.mock('../../../utils/audioTts', () => ({
  speakText: vi.fn(),
}));

describe('KanjiCanvasPractice Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default N5 active kanji, readings, and meanings', () => {
    render(<KanjiCanvasPractice />);

    expect(screen.getByText(/Interaktiv Kanji Canvas/i)).toBeInTheDocument();
    // Default kanji is '日'
    expect(screen.getByRole('heading', { level: 4, name: '日' })).toBeInTheDocument();
    expect(screen.getByText(/Quyosh/i)).toBeInTheDocument();
    expect(screen.getByText(/音読み/i)).toBeInTheDocument();
    expect(screen.getByText(/訓読み/i)).toBeInTheDocument();
    expect(screen.getByText(/日本/i)).toBeInTheDocument();
  });

  it('switches levels and updates quick kanji chips tray', () => {
    render(<KanjiCanvasPractice />);

    const n4Btn = screen.getByRole('button', { name: 'N4' });
    fireEvent.click(n4Btn);

    // Quick pills should show N4 kanjis like '会'
    const kaiBtn = screen.getByRole('button', { name: '会' });
    expect(kaiBtn).toBeInTheDocument();

    fireEvent.click(kaiBtn);
    expect(screen.getByRole('heading', { level: 4, name: '会' })).toBeInTheDocument();
  });

  it('searches kanjis by character or meaning in the search input', () => {
    render(<KanjiCanvasPractice />);

    const searchInput = screen.getByPlaceholderText(/Kanji, o'qilishi yoki ma'nosi/i);
    fireEvent.change(searchInput, { target: { value: 'oy' } });

    // Should find '月' (Oy / Month)
    const moonBtn = screen.getByRole('button', { name: '月' });
    expect(moonBtn).toBeInTheDocument();

    fireEvent.click(moonBtn);
    expect(screen.getByRole('heading', { level: 4, name: '月' })).toBeInTheDocument();
  });

  it('switches between practice modes: Qolip (Ghost), Xotira (Blind), and Qadam (Step)', () => {
    render(<KanjiCanvasPractice />);

    const blindBtn = screen.getByRole('button', { name: 'Xotira' });
    fireEvent.click(blindBtn);
    expect(blindBtn).toHaveClass('bg-card');

    const stepBtn = screen.getByRole('button', { name: 'Qadam' });
    fireEvent.click(stepBtn);
    expect(stepBtn).toHaveClass('bg-card');

    const ghostBtn = screen.getByRole('button', { name: 'Qolip' });
    fireEvent.click(ghostBtn);
    expect(ghostBtn).toHaveClass('bg-card');
  });

  it('cycles animation speeds and toggles play/pause controls', () => {
    vi.useFakeTimers();
    render(<KanjiCanvasPractice />);

    const speedBtn = screen.getByTitle(/Tezlikni o'zgartirish/i);
    expect(speedBtn).toHaveTextContent('1x');
    fireEvent.click(speedBtn);
    expect(speedBtn).toHaveTextContent('1.5x');
    fireEvent.click(speedBtn);
    expect(speedBtn).toHaveTextContent('0.5x');

    const playBtn = screen.getByRole('button', { name: /Tartib/i });
    fireEvent.click(playBtn);
    expect(screen.getByRole('button', { name: /Pauza/i })).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    vi.useRealTimers();
  });

  it('awards XP and displays completion badge when finishing practice', () => {
    render(<KanjiCanvasPractice />);

    const finishBtn = screen.getByRole('button', { name: /Mashqni Yakunlash/i });
    fireEvent.click(finishBtn);

    expect(mockAwardXP).toHaveBeenCalledWith(15);
    expect(screen.getByText(/Ajoyib! Mashq yakunlandi/i)).toBeInTheDocument();
  });
});
