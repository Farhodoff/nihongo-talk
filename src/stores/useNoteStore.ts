import { create } from 'zustand';
import type { Note, StudyNote, WhiteboardMetadata } from '../types';

export interface NoteState {
  notes: Note[];
  studyNotes: StudyNote[];
  whiteboards: WhiteboardMetadata[];
  setNotes: (notes: Note[]) => void;
  setStudyNotes: (studyNotes: StudyNote[]) => void;
  setWhiteboards: (whiteboards: WhiteboardMetadata[]) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  notes: [],
  studyNotes: [],
  whiteboards: [],
  setNotes: (notes) => set({ notes }),
  setStudyNotes: (studyNotes) => set({ studyNotes }),
  setWhiteboards: (whiteboards) => set({ whiteboards }),
}));
