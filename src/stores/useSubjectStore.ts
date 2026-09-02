import { create } from 'zustand';
import type { Subject } from '../types';

export interface SubjectState {
  subjects: Subject[];
  setSubjects: (subjects: Subject[]) => void;
}

export const useSubjectStore = create<SubjectState>((set) => ({
  subjects: [],
  setSubjects: (subjects) => set({ subjects }),
}));
