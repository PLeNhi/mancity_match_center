'use client';

import { InnerCard } from './card';
import type { Standing } from '@/types';

interface StandingCardProps {
  standing: Standing;
}

export function StandingCard({ standing }: StandingCardProps) {
  return (
    <InnerCard>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        {standing.competition}
      </p>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-[#6CABDD]">#{standing.position}</p>
          <p className="mt-1 text-xs text-slate-600">
            {standing.points} điểm • {standing.won}W-{standing.drawn}D-{standing.lost}L
          </p>
        </div>
        <div className="text-3xl">🏅</div>
      </div>
    </InnerCard>
  );
}
