import React, { useState } from 'react';
import { useStudyData } from '../../context/StudyPlannerContext';
import { Button } from '../ui/Button';

const DailyGoalSection: React.FC = () => {
    const { settings, updateSettings } = useStudyData();
    const [goalHours, setGoalHours] = useState(Math.floor((settings.dailyStudyGoalMinutes || 240) / 60));

    const handleSave = async () => {
        const minutes = goalHours * 60;
        await updateSettings({ dailyStudyGoalMinutes: minutes });
        alert('Kunlik maqsad saqlandi! ✅');
    };

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-500 dark:text-gray-400 text-sm flex justify-between items-center">
                <span>⏱ KUNLIK MAQSAD VA NAZORAT</span>
            </div>
            
            <div className="p-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Kunlik O'qish Maqsadi (Soatlarda)
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="24"
                        value={goalHours}
                        onChange={(e) => setGoalHours(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        AI Ustoz ushbu maqsadga asosan sizni nazorat qilib boradi. Agar dars qilmasangiz, ogohlantirishlar beradi.
                    </p>
                </div>
                
                <div className="pt-2">
                    <Button onClick={handleSave} className="w-full">
                        O'zgarishlarni Saqlash
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DailyGoalSection;
