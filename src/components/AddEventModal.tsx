import React, { useState } from 'react';
import { X, Calendar, Clock, Bell } from 'lucide-react';
import { useStudyData } from '../context/StudyPlannerContext';
import { EventType, EVENT_TYPE_COLORS, EVENT_TYPE_LABELS } from '../types';
import moment from 'moment';

interface AddEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultDate?: Date;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose, defaultDate }) => {
    const { addEvent } = useStudyData();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [eventType, setEventType] = useState<EventType>('personal');
    const [eventDate, setEventDate] = useState(
        defaultDate ? moment(defaultDate).format('YYYY-MM-DDTHH:mm') : moment().format('YYYY-MM-DDTHH:mm')
    );
    const [notifyBefore, setNotifyBefore] = useState(60); // minutes
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        setLoading(true);
        try {
            await addEvent({
                title: title.trim(),
                description: description.trim() || undefined,
                eventType,
                eventDate: moment(eventDate).toISOString(),
                notifyBeforeMinutes: notifyBefore
            });

            // Reset and close
            setTitle('');
            setDescription('');
            setEventType('personal');
            setEventDate(moment().format('YYYY-MM-DDTHH:mm'));
            setNotifyBefore(60);
            onClose();
        } catch (error) {
            console.error('Error adding event:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Calendar className="text-indigo-600" size={24} />
                        Yangi Tadbir Qo'shish
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tadbir Nomi *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Masalan: JLPT N2 Mock Exam"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Event Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tur
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {(Object.keys(EVENT_TYPE_LABELS) as EventType[]).map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setEventType(type)}
                                    className={`
                                        p-3 rounded-lg border-2 text-sm font-medium transition-all
                                        ${eventType === type
                                            ? 'border-opacity-100 shadow-md'
                                            : 'border-gray-300 dark:border-gray-600 opacity-60'
                                        }
                                    `}
                                    style={{
                                        borderColor: eventType === type ? EVENT_TYPE_COLORS[type] : undefined,
                                        backgroundColor: eventType === type ? `${EVENT_TYPE_COLORS[type]}15` : undefined
                                    }}
                                >
                                    {EVENT_TYPE_LABELS[type]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                            <Clock size={16} />
                            Sana va Vaqt *
                        </label>
                        <input
                            type="datetime-local"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tavsif (Ixtiyoriy)
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Qo'shimcha ma'lumot..."
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        />
                    </div>

                    {/* Notification */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                            <Bell size={16} />
                            Eslatish
                        </label>
                        <select
                            value={notifyBefore}
                            onChange={(e) => setNotifyBefore(Number(e.target.value))}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value={10}>10 daqiqa oldin</option>
                            <option value={30}>30 daqiqa oldin</option>
                            <option value={60}>1 soat oldin</option>
                            <option value={1440}>1 kun oldin</option>
                            <option value={10080}>1 hafta oldin</option>
                        </select>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            Bekor qilish
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !title.trim()}
                            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all disabled:opacity-50"
                        >
                            {loading ? 'Saqlanmoqda...' : 'Saqlash'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEventModal;
