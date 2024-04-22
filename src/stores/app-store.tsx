import { create } from "zustand";
type Store = {
  maxCards: number;
  updateMaxCards: (max: number) => void;
  score: number;
  updateScore: () => void;
  currentTheme: string;
  updateCurrentTheme: (name: string) => void;
};
const useAppStore = create<Store>()((set) => ({
  maxCards: 10,
  updateMaxCards: (maxCards) => set({ maxCards }),
  score: 0,
  updateScore: () => set((state) => ({ score: state.score + 1 })),
  currentTheme: "Capitals",
  updateCurrentTheme: (name) => set({ currentTheme: name }),
}));

export default useAppStore;
