'use server';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchMatches } from '../services/matchesService';
import FixturesPageClient from './fixtures-page-client';
import { matchesKeys } from '@/hooks/queryKeys';

export default async function FixturesPage() {
  const defaultLeague = 39;
  const defaultSeason = 2024;
  const defaultTeam = 50;

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: matchesKeys.list(defaultLeague, defaultSeason, defaultTeam),
    queryFn: () => fetchMatches(defaultLeague, defaultSeason, defaultTeam),
  });

  const dehydratedState = dehydrate(qc);

  return (
    <HydrationBoundary state={dehydratedState}>
      <FixturesPageClient
        initialLeague={defaultLeague}
        initialSeason={defaultSeason}
        initialTeam={defaultTeam}
      />
    </HydrationBoundary>
  );
}
