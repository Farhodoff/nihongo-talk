import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { JlptListeningMockPage } from '../JlptListeningMockPage';
import { ListeningAudioSyncService } from '../../services/ListeningAudioSyncService';

// Mock context providers
vi.mock('../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    user: { id: 'test-user-id' },
    awardXP: vi.fn(),
    addSession: vi.fn(),
    addFlashcardsBatch: vi.fn(),
  }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'uz',
  }),
}));

vi.mock('../../hooks/useTTS', () => ({
  fetchTTSAudioBlob: vi
    .fn()
    .mockResolvedValue(new Blob(['dummy-mp3-audio'], { type: 'audio/mpeg' })),
  splitIntoTTSChunks: vi.fn((text: string) => [text]),
}));

vi.mock('../../utils/ai', () => ({
  cleanJapaneseTTS: vi.fn((text: string) => text),
}));

describe('JlptListeningMockPage Component Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders listening mock intro screen with level selection and modes', () => {
    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/JLPT.*聴解.*Practice/i)).toBeInTheDocument();
    expect(screen.getByText(/Haqiqiy Imtihon/i)).toBeInTheDocument();
    expect(screen.getByText(/Audio Sync & Shadowing/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Boshlash/i })).toBeInTheDocument();
  });

  it('switches to Audio Sync & Shadowing mode on intro screen', () => {
    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    const syncModeBtn = screen.getByText(/Audio Sync & Shadowing/i).closest('button');
    expect(syncModeBtn).not.toBeNull();
    if (syncModeBtn) {
      fireEvent.click(syncModeBtn);
    }

    const startBtn = screen.getByRole('button', { name: /Boshlash/i });
    fireEvent.click(startBtn);

    // In Sync mode, script subtitles should be visible by default
    expect(screen.getByText(/Sinxron Subtitrlar/i)).toBeInTheDocument();
  });

  it('starts test, toggles script visibility, and allows clicking a dialogue line', () => {
    const playLineSpy = vi
      .spyOn(ListeningAudioSyncService, 'playLine')
      .mockImplementation(() => null);

    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    const startBtn = screen.getByRole('button', { name: /Boshlash/i });
    fireEvent.click(startBtn);

    expect(screen.getByText(/Savol 1 \//i)).toBeInTheDocument();
    expect(screen.getByText(/Listening Audio Track/i)).toBeInTheDocument();

    // Toggle script on
    const scriptToggleBtn = screen.getByTitle("Audio skriptni ko'rsatish/yashirish");
    fireEvent.click(scriptToggleBtn);

    expect(screen.getByText(/Sinxron Subtitrlar/i)).toBeInTheDocument();

    // Find and click on a dialogue line
    const dialogueLine = screen.getByText(/雨が降ってきましたね/i);
    expect(dialogueLine).toBeInTheDocument();
    fireEvent.click(dialogueLine);

    expect(playLineSpy).toHaveBeenCalled();
  });

  it('allows answering questions and navigating to next question', () => {
    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    const startBtn = screen.getByRole('button', { name: /Boshlash/i });
    fireEvent.click(startBtn);

    // Click on option 2
    const optionBtn = screen.getByText(/女の人の車から傘を持ってきます/i);
    fireEvent.click(optionBtn);

    // Click Next
    const nextBtn = screen.getByRole('button', { name: /Keyingi Savol/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText(/Savol 2 \//i)).toBeInTheDocument();
  });
});
