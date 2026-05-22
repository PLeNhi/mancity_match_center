import { useQuery } from '@tanstack/react-query';
import { fetchMatches } from '@/services/matchesService';
import type { Match } from '@/types';
import { matchesKeys } from '@/hooks/queryKeys';

export function useMatchesQuery(
  league?: number,
  season?: number,
  team?: number,
  initialMatches: Match[] = [],
) {
  return useQuery({
    queryKey: matchesKeys.list(league, season, team),
    queryFn: async () => {
      return fetchMatches(league, season, team);
    },
    initialData: initialMatches,
    staleTime: 5 * 60 * 1000,
  });
}

export default useMatchesQuery;
