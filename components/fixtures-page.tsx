'use server';

import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchMatches } from '../services/matchesService';
import FixturesPageClient from './FixturesPageClient';
import queryKeys from '@/hooks/queryKeys';

export default async function FixturesPage() {
  const defaultLeague = 39;
  const defaultSeason = 2024;
  const defaultTeam = 50;

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: queryKeys.matchesKeys.list(defaultLeague, defaultSeason, defaultTeam),
    queryFn: () => fetchMatches(defaultLeague, defaultSeason, defaultTeam),
  });

  const dehydratedState = dehydrate(qc);

  return (
    <FixturesPageClient
      dehydratedState={dehydratedState}
      initialLeague={defaultLeague}
      initialSeason={defaultSeason}
      initialTeam={defaultTeam}
    />
  );
}
