'use server';

import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchPlayers } from '../services/matchesService';
import SquadPageClient from './squad-page-client';
import { footballKeys } from '@/hooks/queryKeys';

export default async function SquadPage() {
  const defaultTeam = 50;
  const defaultSeason = 2024;

  const qc = new QueryClient();

  await qc.prefetchQuery({
    queryKey: footballKeys.players(defaultTeam, defaultSeason),
    queryFn: () => fetchPlayers(defaultTeam, defaultSeason),
  });

  const dehydratedState = dehydrate(qc);

  return (
    <SquadPageClient
      dehydratedState={dehydratedState}
      initialTeam={defaultTeam}
      initialSeason={defaultSeason}
    />
  );
}
