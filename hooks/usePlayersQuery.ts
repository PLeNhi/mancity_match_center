import { useQuery } from '@tanstack/react-query';
import { fetchPlayers } from '@/services/matchesService';
import type { Squad } from '@/types';
import { footballKeys } from '@/hooks/queryKeys';

export function usePlayersQuery(team?: number, season?: number, initialPlayers: Squad[] = []) {
  return useQuery({
    queryKey: footballKeys.players(team, season),
    queryFn: async () => {
      return fetchPlayers(team, season);
    },
    initialData: initialPlayers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
    refetchOnReconnect: false,
  });
}

export default usePlayersQuery;
