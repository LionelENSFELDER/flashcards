import { create } from "zustand";

interface StoreState {
  maxCards: number;
  updateMaxCards: (max: number) => void;
  score: number;
  incrementScore: () => void;
  currentTheme: string;
  setCurrentTheme: (name: string) => void;
}

const useAppStore = create<StoreState>()((set) => ({
  maxCards: 10,
  updateMaxCards: (maxCards) => {
    set({ maxCards }), set({ score: 0 });
  },
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  currentTheme: "Capitals",
  setCurrentTheme: (name) => {
    set({ currentTheme: name }), set({ score: 0 });
  },
}));

export default useAppStore;
