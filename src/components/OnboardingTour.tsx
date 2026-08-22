import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface TourStep {
    title: string;
    content: string;
    target?: string;
    placement: 'top' | 'bottom' | 'left' | 'right' | 'center';
    path?: string;
}

const TOUR_STEPS: TourStep[] = [
    {
        title: "Kaizen AI-ga xush kelibsiz! 🎓",
        content: "Salom! Ushbu yo'riqnoma orqali siz loyihaning asosiy va premium imkoniyatlari bilan tezkor tanishib chiqasiz. Keling, boshlaymiz!",
        placement: "center",
        path: "/dashboard"
    },
    {
        title: "Kunningiz va Progressingiz 📊",
        content: "Bu yerda siz bugungi rejadagi vazifalar, kunlik o'quv progressi hamda sun'iy intellekt tomonidan taqdim etiladigan shaxsiy tavsiyalarni ko'rishingiz mumkin.",
        target: "[data-tour=\"nav-dashboard\"]",
        placement: "right",
        path: "/dashboard"
    },
    {
        title: "Shaxsiy O'quv Rejasi va Maqsadlar 🎯",
        content: "O'quv maqsadlaringizni belgilang, muddatlarni ko'rsating va sun'iy intellekt asosida haftalik shaxsiy rejangizni shakllantiring.",
        target: "[data-tour=\"nav-personal-plan\"]",
        placement: "right",
        path: "/personal-plan"
    },
    {
        title: "Vazifalar va To-Do 📝",
        content: "Barcha topshiriqlaringiz va vazifalaringizni fanlar kesimida boshqaring. Ularning muhimlilik darajasini belgilang.",
        target: "[data-tour=\"nav-tasks\"]",
        placement: "right",
        path: "/tasks"
    },
    {
        title: "Fokuslanish va Pomodoro ⏱️",
        content: "Lo-Fi sokin musiqa mikseri va Pomodoro taymeri yordamida chalg'imasdan dars qilish bo'limi. Bu yerda siz premium tajribaga ega bo'lasiz.",
        target: "[data-tour=\"nav-focus\"]",
        placement: "right",
        path: "/focus"
    },
    {
        title: "AI Imtihon va Sinovlar 🧠",
        content: "Konspektlaringiz va fanlaringiz asosida sun'iy intellekt yordamida avtomatik test savollarini yaratib, o'z bilimingizni sinab ko'ring.",
        target: "[data-tour=\"nav-ai-exam\"]",
        placement: "right",
        path: "/ai"
    },
    {
        title: "Guruhdoshlar va Hamkorlik 📹",
        content: "Native WebRTC video aloqa, ekran ulashish va hamkorlikda doskada chizish xonalarini yaratib, jamoaviy dars qiling.",
        target: "[data-tour=\"nav-community\"]",
        placement: "right",
        path: "/community"
    },
    {
        title: "Batafsil Statistika 📈",
        content: "Dars soatlari, kayfiyat tahlili va gamifikatsiya tizimidagi XP darajalaringiz haqidagi to'liq ma'lumotlar shu yerda jamlanadi.",
        target: "[data-tour=\"nav-progress\"]",
        placement: "right",
        path: "/progress"
    },
    {
        title: "Tugatish! 🎉",
        content: "Ajoyib! Siz barcha asosiy bo'limlar bilan tanishdingiz. Endi o'z o'quv rejangizni shakllantirishni boshlashingiz mumkin. Omad yor bo'lsin!",
        placement: "center"
    }
];

export const OnboardingTour: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(-1);
    const [spotlightStyle, setSpotlightStyle] = useState<React.CSSProperties>({});
    const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
    const location = useLocation();
    const navigate = useNavigate();
    const tooltipRef = useRef<HTMLDivElement>(null);

    const updatePosition = useCallback(() => {
        if (currentStep < 0 || currentStep >= TOUR_STEPS.length) return;

        const step = TOUR_STEPS[currentStep];
        if (!step.target || step.placement === 'center') {
            // Center placement (welcome or final step)
            setSpotlightStyle({
                display: 'none'
            });
            setTooltipStyle({
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10000,
                maxWidth: '450px',
                width: 'calc(100% - 32px)'
            });
            return;
        }

        const element = document.querySelector(step.target);
        if (!element) {
            // Fallback to center if element is not found (e.g., hidden in mobile hamburger)
            setSpotlightStyle({ display: 'none' });
            setTooltipStyle({
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10000,
                maxWidth: '450px',
                width: 'calc(100% - 32px)'
            });
            return;
        }

        const rect = element.getBoundingClientRect();
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const scrollX = window.scrollX || document.documentElement.scrollLeft;

        // Pad spotlight slightly
        const padding = 6;
        const spotTop = rect.top + scrollY - padding;
        const spotLeft = rect.left + scrollX - padding;
        const spotWidth = rect.width + padding * 2;
        const spotHeight = rect.height + padding * 2;

        setSpotlightStyle({
            display: 'block',
            position: 'absolute',
            top: `${spotTop}px`,
            left: `${spotLeft}px`,
            width: `${spotWidth}px`,
            height: `${spotHeight}px`,
            borderRadius: '12px',
            boxShadow: '0 0 0 9999px rgba(15, 23, 42, 0.75)',
            border: '2px solid rgba(99, 102, 241, 0.8)',
            zIndex: 9998,
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
        });

        // Tooltip placement logic
        const tooltipWidth = tooltipRef.current?.offsetWidth || 340;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 180;
        let toolTop = 0;
        let toolLeft = 0;

        // Check window constraints
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        if (step.placement === 'right') {
            toolLeft = rect.right + 16;
            toolTop = rect.top + rect.height / 2 - tooltipHeight / 2;

            // If overlaps right edge, fallback to top or bottom
            if (toolLeft + tooltipWidth > winWidth) {
                toolLeft = Math.max(16, rect.left + rect.width / 2 - tooltipWidth / 2);
                toolTop = rect.bottom + 16;
            }
        } else if (step.placement === 'bottom') {
            toolLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
            toolTop = rect.bottom + 16;
        } else if (step.placement === 'top') {
            toolLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
            toolTop = rect.top - tooltipHeight - 16;
        } else {
            toolLeft = rect.left - tooltipWidth - 16;
            toolTop = rect.top + rect.height / 2 - tooltipHeight / 2;
        }

        // Clamp to screen edges
        toolLeft = Math.max(16, Math.min(toolLeft, winWidth - tooltipWidth - 16));
        toolTop = Math.max(16, Math.min(toolTop, winHeight - tooltipHeight - 16));

        setTooltipStyle({
            position: 'absolute',
            top: `${toolTop}px`,
            left: `${toolLeft}px`,
            zIndex: 9999,
            width: `${tooltipWidth}px`,
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
        });
    }, [currentStep]);

    // Initial check for first-time login
    useEffect(() => {
        const completed = localStorage.getItem('onboarding_completed');
        if (!completed) {
            // Delay starting the tour slightly to allow the page to mount
            const timer = setTimeout(() => {
                setCurrentStep(0);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Listen for manual restart event
    useEffect(() => {
        const handleRestart = () => {
            setCurrentStep(0);
        };
        window.addEventListener('restart-onboarding-tour', handleRestart);
        return () => window.removeEventListener('restart-onboarding-tour', handleRestart);
    }, []);

    // Run actions (e.g. routing) when changing steps
    useEffect(() => {
        if (currentStep < 0 || currentStep >= TOUR_STEPS.length) {
            setSpotlightStyle({});
            setTooltipStyle({});
            return;
        }

        const step = TOUR_STEPS[currentStep];
        if (step.path && location.pathname !== step.path) {
            navigate(step.path);
            // Give time for layout/DOM to mount and render the new page
            const timer = setTimeout(() => {
                updatePosition();
            }, 300);
            return () => clearTimeout(timer);
        } else {
            updatePosition();
        }
    }, [currentStep, location.pathname, navigate, updatePosition]);

    // Recalculate positioning on resize or scroll
    useEffect(() => {
        if (currentStep >= 0 && currentStep < TOUR_STEPS.length) {
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition, true);
        }
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition, true);
        };
    }, [currentStep, updatePosition]);

    const handleNext = () => {
        if (currentStep < TOUR_STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleComplete();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleComplete = () => {
        localStorage.setItem('onboarding_completed', 'true');
        setCurrentStep(-1);
    };

    if (currentStep < 0 || currentStep >= TOUR_STEPS.length) return null;

    const step = TOUR_STEPS[currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === TOUR_STEPS.length - 1;

    return (
        <div className="fixed inset-0 z-[9990] overflow-hidden pointer-events-none">
            {/* Dark Mask Fallback for center steps */}
            {step.placement === 'center' && (
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] pointer-events-auto" />
            )}

            {/* Spotlight container */}
            <div style={spotlightStyle} className="pointer-events-auto" />

            {/* Floating Tooltip Card */}
            <div
                ref={tooltipRef}
                style={tooltipStyle}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl pointer-events-auto flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-300"
            >
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <Sparkles size={18} className="text-indigo-500 animate-pulse" />
                        <h4 className="text-md font-bold text-slate-900 dark:text-white leading-tight">
                            {step.title}
                        </h4>
                    </div>
                    <button 
                        onClick={handleComplete}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Yo'riqnomani yopish"
                    >
                        <X size={16} />
                    </button>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {step.content}
                </p>

                <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {/* Step progress dots */}
                    <div className="flex gap-1.5">
                        {TOUR_STEPS.map((_, idx) => (
                            <span 
                                key={idx} 
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${idx === currentStep ? 'bg-indigo-500 w-3' : 'bg-slate-200 dark:bg-slate-700'}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        {!isFirst && (
                            <button
                                onClick={handleBack}
                                className="px-3.5 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-705 rounded-xl transition-all active:scale-[0.97] flex items-center gap-1"
                            >
                                <ArrowLeft size={12} /> Orqaga
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all active:scale-[0.97] flex items-center gap-1 shadow-md shadow-indigo-600/10"
                        >
                            {isLast ? "Tugatish" : "Keyingisi"} <ArrowRight size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
