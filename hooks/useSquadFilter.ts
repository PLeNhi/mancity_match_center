import { useMemo } from 'react';
import type { Squad } from '@/types';
import { defaultFilter, useSquadFilterStore } from '@/store/useSquadFilterStore';

const normalize = (value: string) => value.trim().toLowerCase();

export function useSquadFilter(squad: Squad[] | undefined) {
  const searchTerm = useSquadFilterStore((state) => state.searchTerm);
  const selectedPosition = useSquadFilterStore((state) => state.selectedPosition);
  const setSearchTerm = useSquadFilterStore((state) => state.setSearchTerm);
  const setSelectedPosition = useSquadFilterStore((state) => state.setSelectedPosition);
  const resetFilters = useSquadFilterStore((state) => state.resetFilters);

  const positionOptions = useMemo(() => {
    if (!squad) return [defaultFilter];
    return [defaultFilter, ...Array.from(new Set(squad.map((group) => group.position)))];
  }, [squad]);

  const filteredSquad = useMemo(() => {
    if (!squad) return [];

    const normalizedSearch = normalize(searchTerm);

    return squad
      .map((group) => ({
        ...group,
        players: group.players.filter((player) => {
          const matchesSearch =
            normalizedSearch === '' ||
            player.name.toLowerCase().includes(normalizedSearch) ||
            player.position.toLowerCase().includes(normalizedSearch);

          const matchesPosition =
            selectedPosition === defaultFilter || group.position === selectedPosition;

          return matchesSearch && matchesPosition;
        }),
      }))
      .filter((group) => group.players.length > 0);
  }, [squad, searchTerm, selectedPosition]);

  return {
    filteredSquad,
    positionOptions,
    searchTerm,
    selectedPosition,
    setSearchTerm,
    setSelectedPosition,
    resetFilters,
  };
}
