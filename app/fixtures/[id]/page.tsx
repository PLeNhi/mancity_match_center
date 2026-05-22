'use server';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchMatches } from '@/services/matchesService';
import MatchDetail from '@/components/match-detail';

interface FixtureDetailPageProps {
  params: {
    id: string;
  };
}

export default async function FixtureDetailPage({ params }: FixtureDetailPageProps) {
  const matches = await fetchMatches();
  const match = matches.find((item) => item.id === params.id);

  if (!match) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Chi tiết trận đấu</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            {match.homeTeam} vs {match.awayTeam}
          </h1>
        </div>
        <Link
          href="/fixtures"
          className="rounded-full bg-[#1C2C5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Quay lại danh sách
        </Link>
      </div>

      <MatchDetail match={match} />
    </main>
  );
}
