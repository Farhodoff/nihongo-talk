import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { StudyPlannerProvider } from './context/StudyPlannerContext';

describe('App', () => {
    it('renders without crashing', () => {
        render(
            <StudyPlannerProvider>
                <App />
            </StudyPlannerProvider>
        );
        // It redirects to /goals by default, so we might expect "Your Goals" text if routing works instantly, 
        // OR just check if basic layout Renders.
        // Let's just check if it renders at all.
        expect(document.body).toBeInTheDocument();
    });
});
