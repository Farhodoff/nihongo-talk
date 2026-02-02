import React from 'react';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    circle?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', width, height, circle }) => {
    return (
        <div
            className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md ${circle ? 'rounded-full' : ''} ${className}`}
            style={{
                width: width,
                height: height
            }}
        />
    );
};

export default Skeleton;
