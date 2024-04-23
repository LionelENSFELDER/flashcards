import { create } from "zustand";
type Store = {
  maxCards: number;
  updateMaxCards: (max: number) => void;
  score: number;
  incScore: () => void;
  currentTheme: string;
  updateCurrentTheme: (name: string) => void;
};
const useAppStore = create<Store>()((set) => ({
  maxCards: 10,
  updateMaxCards: (maxCards) => {
    set({ maxCards }), set({ score: 0 });
  },
  score: 0,
  incScore: () => set((state) => ({ score: state.score + 1 })),
  currentTheme: "Capitals",
  updateCurrentTheme: (name) => {
    set({ currentTheme: name }), set({ score: 0 });
  },
}));

export default useAppStore;
