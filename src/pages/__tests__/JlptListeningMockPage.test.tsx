import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { JlptListeningMockPage } from '../JlptListeningMockPage';

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

  it('renders listening mock intro screen with level selection', () => {
    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/JLPT.*聴解.*Practice/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Boshlash/i })).toBeInTheDocument();
  });

  it('starts test and displays questions and audio track controls', () => {
    render(
      <MemoryRouter initialEntries={['/listening?level=N5']}>
        <JlptListeningMockPage />
      </MemoryRouter>,
    );

    const startBtn = screen.getByRole('button', { name: /Boshlash/i });
    fireEvent.click(startBtn);

    expect(screen.getByText(/Savol 1 \//i)).toBeInTheDocument();
    expect(screen.getByText(/Listening Audio Track/i)).toBeInTheDocument();
  });
});
