import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Task1GraphGenerator from './Task1GraphGenerator';
import { generateAIResponse } from '../../utils/ai/aiCore';

vi.mock('../../utils/ai/aiCore', async () => {
    const actual = await vi.importActual<any>('../../utils/ai/aiCore');
    return {
        ...actual,
        generateAIResponse: vi.fn()
    };
});

(globalThis as any).ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};

describe('Task1GraphGenerator Component', () => {
    it('renders header and preset topics correctly', () => {
        render(<Task1GraphGenerator />);

        expect(screen.getByText('Task 1 AI Grafik Generator')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Mavzu kiriting (ixtiyoriy)...')).toBeInTheDocument();
        expect(screen.getByText('Internet usage by age group (2010-2023)')).toBeInTheDocument();
    });

    it('generates chart data on button click and calls onPromptGenerated', async () => {
        const mockPromptGenerated = vi.fn();
        const mockJsonResponse = JSON.stringify({
            type: 'bar',
            title: 'Internet usage by age in the UK',
            subtitle: '2010-2020',
            labels: ['16-24', '25-44', '45+'],
            datasets: [{ label: 'Percentage', data: [95, 88, 72] }],
            unit: '%',
            description: 'Summarise the main features of internet usage.'
        });

        vi.mocked(generateAIResponse).mockResolvedValue(mockJsonResponse);

        render(<Task1GraphGenerator onPromptGenerated={mockPromptGenerated} />);

        const generateBtn = screen.getByRole('button', { name: /Yarat/i });
        fireEvent.click(generateBtn);

        await waitFor(() => {
            expect(screen.getByText('Internet usage by age in the UK')).toBeInTheDocument();
        });

        expect(mockPromptGenerated).toHaveBeenCalledWith(
            expect.stringContaining('Internet usage by age in the UK')
        );
    });
});
