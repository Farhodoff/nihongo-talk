import { create } from 'zustand';
import type { Task, Event } from '../types';

export interface TaskState {
  tasks: Task[];
  events: Event[];
  setTasks: (tasks: Task[]) => void;
  setEvents: (events: Event[]) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  events: [],
  setTasks: (tasks) => set({ tasks }),
  setEvents: (events) => set({ events }),
}));
