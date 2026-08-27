import React from 'react';

interface AppLogoProps {
    size?: 'sm' | 'md' | 'lg';
    collapsed?: boolean;
    showText?: boolean;
    className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({
    size = 'md',
    collapsed = false,
    showText = true,
    className = ''
}) => {
    const sizeDimensions = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-14 h-14'
    };

    const logoImgClass = sizeDimensions[size];

    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* 3D Glowing Logo Container */}
            <div className={`relative flex items-center justify-center rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 shadow-lg shadow-indigo-500/25 group transition-transform duration-300 hover:scale-105 ${logoImgClass}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />
                
                {/* Logo Image */}
                <img
                    src="/logo.png"
                    alt="Nihon Talk Logo"
                    className="relative w-full h-full object-cover rounded-xl shadow-inner border border-white/20"
                    onError={(e) => {
                        // Fallback icon if image fails
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                            parent.classList.add('bg-indigo-600', 'flex', 'items-center', 'justify-center');
                        }
                    }}
                />
            </div>

            {/* Brand Title */}
            {showText && !collapsed && (
                <div className="flex items-center gap-1 animate-in fade-in zoom-in duration-300">
                    {/* Japanese torii accent (日) */}
                    <span className="text-accent-red-dark text-2xl font-bold">日</span>
                    <span className="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm font-sans">
                        Nihon <span className="text-indigo-500 dark:text-indigo-400">Talk</span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default AppLogo;
