'use client';

import Image from 'next/image';
import Link from 'next/link';
import { InnerCard } from './card';
import type { Match } from '@/types';
import { formatVietnamDateTime } from '@/utils/date';

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
    <Link href={`/fixtures/${match.id}`} className="w-full text-left">
      <InnerCard className="transition cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2 flex-1">
              {match.homeLogo ? (
                <Image
                  className="text-2xl"
                  src={match.homeLogo}
                  alt={match.homeTeam}
                  width={26}
                  height={26}
                />
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-600">
                  {match.homeTeam.charAt(0)}
                </div>
              )}
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
              {match.awayLogo ? (
                <Image
                  className="text-2xl"
                  src={match.awayLogo}
                  alt={match.awayTeam}
                  width={26}
                  height={26}
                />
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-600">
                  {match.awayTeam.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            <p className="font-medium">
              {formatVietnamDateTime(match.date)} • {match.competition}
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
    </Link>
  );
}
