import React from 'react';

export interface LocalTourStep {
    title: string;
    content: string;
    target?: string;
    placement: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

export interface LocalTourProps {
    steps: LocalTourStep[];
    tourKey: string;
}

export const LocalTour: React.FC<LocalTourProps> = () => {
    // Permanently disabled per user request
    return null;
};
