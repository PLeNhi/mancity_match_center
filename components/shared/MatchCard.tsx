'use client';

import { InnerCard } from './Card';
import type { Match } from '@/types';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'played':
        return 'bg-slate-100 text-slate-700';
      case 'live':
        return 'bg-red-100 text-red-700 animate-pulse';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'played':
        return 'Đã diễn ra';
      case 'live':
        return 'Đang diễn ra';
      case 'upcoming':
        return 'Sắp tới';
      default:
        return '';
    }
  };

  return (
    <InnerCard>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-3xl">{match.homeIcon}</span>
            <span className="font-semibold text-[#1C2C5B]">{match.homeTeam}</span>
          </div>
          <div className="text-center">
            {match.status === 'played' ? (
              <div className="text-2xl font-bold text-[#6CABDD]">
                {match.homeScore} - {match.awayScore}
              </div>
            ) : (
              <div className="text-sm text-slate-500">vs</div>
            )}
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="font-semibold text-[#1C2C5B]">{match.awayTeam}</span>
            <span className="text-3xl">{match.awayIcon}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          <p className="font-medium">
            {match.date} • {match.competition}
          </p>
        </div>
        <span
          className={`inline-block rounded-full px-4 py-2 text-xs font-semibold ${getStatusStyle(
            match.status,
          )}`}
        >
          {getStatusLabel(match.status)}
        </span>
      </div>
    </InnerCard>
  );
}
