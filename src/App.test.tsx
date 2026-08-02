import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { StudyPlannerProvider } from './context/StudyPlannerContext';

describe('App', () => {
    it('renders loading state initially and renders authentication view when unauthenticated', async () => {
        render(
            <StudyPlannerProvider>
                <App />
            </StudyPlannerProvider>
        );

        // Verify initial loading indicator element
        expect(screen.getByText(/Yuklanmoqda.../i)).toBeInTheDocument();

        // Verify transition to unauthenticated AuthPage header after session check
        expect(await screen.findByText(/Xush kelibsiz/i)).toBeInTheDocument();
    });
});

