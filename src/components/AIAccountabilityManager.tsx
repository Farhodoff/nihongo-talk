import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStudyData } from '../context/StudyPlannerContext';
import AIUstozModal from './AIUstozModal';

const AIAccountabilityManager: React.FC = () => {
    const { settings, sessions } = useStudyData();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Calculate today's studied minutes
    const getStudiedMinutesToday = () => {
        const today = new Date().toDateString();
        return sessions
            .filter(s => new Date(s.startTime).toDateString() === today && s.completed)
            .reduce((acc, curr) => acc + (curr.duration || 0), 0);
    };

    useEffect(() => {
        const goalMinutes = settings.dailyStudyGoalMinutes || 240;
        
        // 1. Agar foydalanuvchi allaqachon maqsadga yetgan bo'lsa hech narsa qilmaymiz
        if (getStudiedMinutesToday() >= goalMinutes) return;

        // Har 5 daqiqada tekshiramiz
        const interval = setInterval(() => {
            if (location.pathname === '/focus') return;
            
            const currentHour = new Date().getHours();
            if (currentHour < 6 || currentHour > 23) return; // Tunda bezovta qilmaymiz

            if (!isModalOpen) {
                setIsModalOpen(true);
            }
        }, 5 * 60 * 1000); 


        return () => {
            clearInterval(interval);
        };
    }, [location.pathname, settings.dailyStudyGoalMinutes, sessions, isModalOpen]);

    return (
        <AIUstozModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            studiedMinutes={getStudiedMinutesToday()}
            goalMinutes={settings.dailyStudyGoalMinutes || 240}
        />
    );
};

export default AIAccountabilityManager;
