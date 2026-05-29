import { create } from 'zustand';

export const defaultFilter = 'Tất cả';

interface SquadFilterState {
  searchTerm: string;
  selectedPosition: string;
  setSearchTerm: (searchTerm: string) => void;
  setSelectedPosition: (selectedPosition: string) => void;
  resetFilters: () => void;
}

export const useSquadFilterStore = create<SquadFilterState>((set) => ({
  searchTerm: '',
  selectedPosition: defaultFilter,
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setSelectedPosition: (selectedPosition) => set({ selectedPosition }),
  resetFilters: () => set({ searchTerm: '', selectedPosition: defaultFilter }),
}));
