import React from 'react';

interface ProgressBarProps {
    progress: number;
    color?: string;
    height?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = '#6366f1', height = 8 }) => {
    return (
        <div
            role="progressbar"
            aria-valuenow={Math.min(100, Math.max(0, progress))}
            aria-valuemin={0}
            aria-valuemax={100}
            className="w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
            style={{ height }}
        >
            <div
                className="h-full transition-all duration-500 ease-out rounded-full"
                style={{
                    width: `${Math.min(100, Math.max(0, progress))}%`,
                    backgroundColor: color
                }}
            />
        </div>
    );
};
