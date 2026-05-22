'use client';

import useMatchesQuery from '@/hooks/useMatchesQuery';
import { MatchCard } from './shared/match-card';

interface FixturesPageClientProps {
  initialLeague?: number;
  initialSeason?: number;
  initialTeam?: number;
}

export default function FixturesPageClient({
  initialLeague,
  initialSeason,
  initialTeam,
}: FixturesPageClientProps) {
  const {
    data: matches,
    isLoading,
    isError,
  } = useMatchesQuery(initialLeague, initialSeason, initialTeam);

  if (isLoading) {
    return <div className="text-center text-slate-500">Loading matches...</div>;
  }

  if (isError || !matches) {
    return <div className="text-center text-red-600">Unable to load matches.</div>;
  }

  return (
    <section className="space-y-4 max-w-4xl mx-auto">
      <header className="mb-6 flex flex-col gap-3"></header>
      <div className="flex flex-col gap-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}
