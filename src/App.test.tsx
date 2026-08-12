import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { StudyPlannerProvider } from './context/StudyPlannerContext';

describe('App', () => {
    it('renders loading state initially and renders landing view when unauthenticated', async () => {
        render(
            <StudyPlannerProvider>
                <App />
            </StudyPlannerProvider>
        );

        // Verify initial loading indicator element
        expect(screen.getByText(/Yuklanmoqda.../i)).toBeInTheDocument();

        // Verify transition to unauthenticated LandingPage header ("Kirish" action button) after session check
        const elements = await screen.findAllByText(/Kirish/i);
        expect(elements[0]).toBeInTheDocument();
    });
});
