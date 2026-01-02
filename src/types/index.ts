export interface Goal {
    id: string;
    title: string;
    description?: string;
    deadline: string; // ISO Date
    progress: number; // 0-100
    color?: string; // Optional - default to indigo if not set
    priority?: Priority;
    createdAt?: string;
    completed?: boolean;
}

export type Priority = 'high' | 'medium' | 'low';
export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
    id: string;
    title: string;
    completed: boolean;
    status: TaskStatus;
    priority: Priority;
    goalId?: string; // Optional link to a goal
    subjectId?: string; // Optional link to a subject
    dueDate?: string;
    deadline?: string; // Synonymous with dueDate in some legacy logic, keeping for compat
    startTime?: string;
    endTime?: string;
    createdAt: string;
}

export interface Subject {
    id: string;
    name: string;
    color: string;
    schedule: string[]; // e.g., ["Mon 10:00", "Wed 14:00"]
    goal?: string;
    teacherName?: string;
    roomLocation?: string;
}

export interface StudySession {
    id: string;
    subjectId?: string;
    startTime: string;
    duration: number; // in minutes
    type: 'focus' | 'break';
    completed: boolean;
    moodBefore?: number; // 1-5
    moodAfter?: number; // 1-5
}

export interface Note {
    id: string;
    subjectId: string;
    title: string;
    content: string; // Markdown
    attachments: { name: string; type: 'image' | 'pdf'; url: string }[];
    createdAt: string;
    updatedAt: string;
}

export interface Flashcard {
    id: string;
    subjectId: string;
    front: string;
    back: string;
    // SRS Fields
    nextReviewDate: string; // ISO
    interval: number; // days
    easeFactor: number;
    repetitions: number;
}

export interface UserSettings {
    theme: 'light' | 'dark' | 'system';
    notificationsEnabled: boolean;
    // Gamification
    totalXp: number;
    level: number;
    currentStreak: number;
    lastActivityDate: string | null; // "YYYY-MM-DD"
}

export const PRIORITY_COLORS = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
};

export const TASK_STATUSES: TaskStatus[] = ['todo', 'in_progress', 'done'];
