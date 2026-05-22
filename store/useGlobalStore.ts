import { create } from 'zustand';

interface GlobalState {
  darkMode: boolean;
  selectedMatchId: string | null;
  toggleDarkMode: () => void;
  setSelectedMatch: (matchId: string | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  darkMode: false,
  selectedMatchId: null,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setSelectedMatch: (selectedMatchId) => set({ selectedMatchId }),
}));
