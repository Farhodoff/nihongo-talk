import { create } from 'zustand';
import type { Flashcard } from '../types';

export interface FlashcardState {
  flashcards: Flashcard[];
  setFlashcards: (flashcards: Flashcard[]) => void;
}

export const useFlashcardStore = create<FlashcardState>((set) => ({
  flashcards: [],
  setFlashcards: (flashcards) => set({ flashcards }),
}));
