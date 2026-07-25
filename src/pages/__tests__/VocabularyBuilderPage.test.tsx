import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { VocabularyBuilderPage } from '../VocabularyBuilderPage';
import { generateAIResponse } from '../../utils/ai/aiCore';

const mockAddFlashcard = vi.fn();

vi.mock('../../context/StudyPlannerContext', () => ({
    useStudyData: () => ({
        subjects: [{ id: 'subj-1', name: 'English C1' }],
        addFlashcard: mockAddFlashcard
    })
}));

vi.mock('../../utils/ai/aiCore', () => ({
    generateAIResponse: vi.fn()
}));

describe('VocabularyBuilderPage Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    it('renders header, search bar, and sample topic buttons', () => {
        render(<VocabularyBuilderPage />);

        expect(screen.getByText(/Smart Vocabulary Builder 🧠/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/So'z kiritib Enter bosing/i)).toBeInTheDocument();
        expect(screen.getByText('paramount (C1)')).toBeInTheDocument();
    });

    it('performs AI search when sample button is clicked', async () => {
        const mockResponse = JSON.stringify({
            word: 'paramount',
            language: 'en',
            phonetic: '/ˈpær.ə.maʊnt/',
            level: 'C1',
            partOfSpeech: 'adjective',
            uzbekTranslation: 'eng muhim, asosiy',
            definition: 'More important than anything else.',
            synonyms: ['supreme', 'chief'],
            collocations: ['paramount importance'],
            examples: [{ sentence: 'Health is of paramount importance.', translation: 'Salomatlik eng muhim ahamiyatga ega.' }]
        });

        vi.mocked(generateAIResponse).mockResolvedValue(mockResponse);

        render(<VocabularyBuilderPage />);

        const sampleBtn = screen.getByText('paramount (C1)');
        fireEvent.click(sampleBtn);

        await waitFor(() => {
            expect(screen.getByText(/eng muhim, asosiy/i)).toBeInTheDocument();
        });

        expect(screen.getByText(/Health is of paramount importance/i)).toBeInTheDocument();
    });

    it('creates flashcard when Fleshkartalarga Qo\'shish button is clicked', async () => {
        const mockResponse = JSON.stringify({
            word: 'resilient',
            language: 'en',
            phonetic: '/rɪˈzɪl.jənt/',
            level: 'B2',
            partOfSpeech: 'adjective',
            uzbekTranslation: 'bosh egmas, chidamli',
            definition: 'Able to withstand difficult conditions.',
            synonyms: ['tough', 'adaptable'],
            collocations: ['resilient economy'],
            examples: [{ sentence: 'He is resilient.', translation: 'U chidamli.' }]
        });

        vi.mocked(generateAIResponse).mockResolvedValue(mockResponse);

        render(<VocabularyBuilderPage />);

        const input = screen.getByPlaceholderText(/So'z kiritib Enter bosing/i);
        fireEvent.change(input, { target: { value: 'resilient' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        await waitFor(() => {
            expect(screen.getByText(/bosh egmas, chidamli/i)).toBeInTheDocument();
        });

        const addFlashcardBtn = screen.getByRole('button', { name: /Fleshkartalarga Qo'shish/i });
        fireEvent.click(addFlashcardBtn);

        expect(mockAddFlashcard).toHaveBeenCalledWith(
            expect.objectContaining({
                subjectId: 'subj-1',
                front: expect.stringContaining('resilient')
            })
        );
    });
});
