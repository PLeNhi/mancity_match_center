'use client';

import { useState } from 'react';
import useMatchesQuery from '@/hooks/useMatchesQuery';
import { DehydratedState, HydrationBoundary, HydrationBoundaryProps } from '@tanstack/react-query';
import { MatchCard } from './shared/MatchCard';
import { useGlobalStore } from '../store/useGlobalStore';
import type { Match } from '@/types';
import { LEAGUES, SEASONS } from '@/constants/match.constant';

interface FixturesPageClientProps {
  initialMatches?: Match[];
  initialLeague?: number;
  initialSeason?: number;
  initialTeam?: number;
  dehydratedState?: DehydratedState;
}

export default function FixturesPageClient({
  initialMatches,
  initialLeague,
  initialSeason,
  initialTeam,
  dehydratedState,
}: FixturesPageClientProps) {
  const [league, setLeague] = useState<number | undefined>(initialLeague);
  const [season, setSeason] = useState<number | undefined>(initialSeason);

  const {
    data: matches,
    isLoading,
    isError,
  } = useMatchesQuery(league, season, initialTeam, initialMatches ?? []);

  const selectedMatchId = useGlobalStore((state) => state.selectedMatchId);
  // const setSelectedMatch = useGlobalStore((state) => state.setSelectedMatch);

  if (isLoading) {
    return <div className="text-center text-slate-500">Loading matches...</div>;
  }

  if (isError || !matches) {
    return <div className="text-center text-red-600">Unable to load matches.</div>;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <section className="space-y-4">
        <header className="mb-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-500">League</label>
            <select
              value={league ?? ''}
              onChange={(e) => setLeague(e.target.value ? Number(e.target.value) : undefined)}
              className="rounded px-3 py-2 border"
            >
              <option value="">All</option>
              {LEAGUES.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>

            <label className="text-sm text-slate-500">Season</label>
            <select
              value={season ?? ''}
              onChange={(e) => setSeason(e.target.value ? Number(e.target.value) : undefined)}
              className="rounded px-3 py-2 border"
            >
              <option value="">Latest</option>
              {SEASONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {selectedMatchId ? (
            <p className="text-sm text-slate-600">Đã chọn trận: {selectedMatchId}</p>
          ) : (
            <p className="text-sm text-slate-600">Chọn một trận để xem chi tiết.</p>
          )}
        </header>

        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            // isSelected={selectedMatchId === match.id}
            // onClick={() => setSelectedMatch(match.id)}
          />
        ))}
      </section>
    </HydrationBoundary>
  );
}
