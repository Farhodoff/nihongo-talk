import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { JlptReadingPage } from '../JlptReadingPage';

vi.mock('../../context/StudyPlannerContext', () => ({
  useStudyData: () => ({
    user: { id: 'test-user-123' },
    awardXP: vi.fn(),
    addSession: vi.fn(),
  }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'uz',
  }),
}));

const renderComponent = () => {
  return render(
    <MemoryRouter>
      <JlptReadingPage />
    </MemoryRouter>,
  );
};

describe('JlptReadingPage (Dokkai Speed-Reader & Sokudoku Drill)', () => {
  it('renders Dokkai master header, level switcher, and passage carousel', () => {
    renderComponent();

    expect(screen.getByText(/JLPT Dokkai \(読解\) Speed-Reader/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'N5' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'N4' })).toBeInTheDocument();
    expect(screen.getByText(/Standart Mutolaa/i)).toBeInTheDocument();
    expect(screen.getByText(/Sokudoku & Vaqt Bosimi/i)).toBeInTheDocument();
  });

  it('supports switching to Sokudoku mode and displays speed banner', () => {
    renderComponent();

    const sokudokuBtn = screen.getByText(/Sokudoku & Vaqt Bosimi/i);
    fireEvent.click(sokudokuBtn);

    expect(screen.getByText(/Tezkor O'qish \(速読 - Sokudoku\) Drilli/i)).toBeInTheDocument();
    expect(screen.getByText(/Me'yoriy tezlik/i)).toBeInTheDocument();
    expect(screen.getByText(/Matnni O'qidim ➔ Savollarga O'tish/i)).toBeInTheDocument();
  });

  it('toggles paragraph analysis mode on and off', () => {
    renderComponent();

    const paragraphBtn = screen.getByRole('button', { name: /Xatboshilar/i });
    expect(paragraphBtn).toBeInTheDocument();

    fireEvent.click(paragraphBtn);
    expect(screen.getAllByText(/Xatboshi 1/i).length).toBeGreaterThan(0);
  });

  it('toggles Furigana mode between ON, Hover, and OFF', () => {
    renderComponent();

    const hoverBtn = screen.getByRole('button', { name: /👁️ Hover/i });
    const onBtn = screen.getByRole('button', { name: /振 ON/i });
    const offBtn = screen.getByRole('button', { name: /🚫 OFF/i });

    expect(hoverBtn).toBeInTheDocument();
    expect(onBtn).toBeInTheDocument();
    expect(offBtn).toBeInTheDocument();

    fireEvent.click(onBtn);
    expect(onBtn).toHaveClass('bg-indigo-600');

    fireEvent.click(offBtn);
    expect(offBtn).toHaveClass('bg-slate-700');
  });
});
