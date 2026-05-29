import { InnerCard } from './card';
import type { Achievement } from '@/types';

interface TrophyCardProps {
  achievement: Achievement;
}

export function TrophyCard({ achievement }: TrophyCardProps) {
  return (
    <div className="rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)]">
      <h2 className="text-2xl font-semibold">{achievement.title}</h2>
      <p className="mt-2 text-sm text-slate-500">{achievement.trophies.length} danh hiệu</p>

      <div className="mt-6 space-y-2">
        {achievement.trophies.map((trophy, idx) => (
          <InnerCard key={idx}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-[#1C2C5B]">{trophy.name}</p>
                {trophy.year && <p className="text-xs text-slate-500">Năm {trophy.year}</p>}
              </div>
              <span className="text-2xl">🏆</span>
            </div>
          </InnerCard>
        ))}
      </div>
    </div>
  );
}
