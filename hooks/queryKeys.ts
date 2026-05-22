// Centralized query key definitions for TanStack Query
export const matchesKeys = {
  all: ['matches'] as const,
  list: (league?: number, season?: number, team?: number) =>
    [...matchesKeys.all, league ?? 'all', season ?? 'latest', team ?? 'all'] as const,
  detail: (id: number) => [...matchesKeys.all, 'detail', id] as const,
};

export const footballKeys = {
  all: ['football'] as const,
  fixtures: (league?: number, season?: number, team?: number) =>
    [...footballKeys.all, 'fixtures', league ?? 'all', season ?? 'latest', team ?? 'all'] as const,
  standings: (league?: number, season?: number, team?: number) =>
    [...footballKeys.all, 'standings', league ?? 'all', season ?? 'latest', team ?? 'all'] as const,
  teams: (league?: number, season?: number, team?: number) =>
    [...footballKeys.all, 'teams', league ?? 'all', season ?? 'latest', team ?? 'all'] as const,
  players: (team?: number, season?: number) =>
    [...footballKeys.all, 'players', team ?? 'all', season ?? 'latest'] as const,
};

export default { matchesKeys, footballKeys };
