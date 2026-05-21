'use client';

import { InnerCard } from './Card';
import { ProgressBar } from './ProgressBar';
import type { Player } from '@/types';

interface PlayerCardProps {
  player: Player;
  positionColor: string;
}

export function PlayerCard({ player, positionColor }: PlayerCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-[#EDF2F7] shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all hover:shadow-[8px_8px_16px_rgba(0,0,0,0.08)]">
      <div className={`relative h-24 overflow-hidden bg-gradient-to-br ${positionColor}`}>
        <div className="absolute right-0 top-0 opacity-20">
          <svg viewBox="0 0 100 100" className="h-32 w-32" fill="currentColor" color="white">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="absolute bottom-2 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-[#1C2C5B]">
          {player.number}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1C2C5B]">{player.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{player.position}</p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-600">Quốc tịch</span>
            <span className="font-semibold text-[#1C2C5B]">{player.nationality}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Tuổi</span>
            <span className="font-semibold text-[#1C2C5B]">{player.age}</span>
          </div>
          {player.appearances !== undefined && (
            <div className="flex justify-between">
              <span className="text-slate-600">Trận đấu</span>
              <span className="font-semibold text-[#1C2C5B]">{player.appearances}</span>
            </div>
          )}
        </div>

        {(player.goals !== undefined || player.assists !== undefined) && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/50 pt-4">
            {player.goals !== undefined && (
              <InnerCard className="text-center">
                <p className="text-2xl font-bold text-[#6CABDD]">{player.goals}</p>
                <p className="text-xs text-slate-600">Bàn Thắng</p>
              </InnerCard>
            )}
            {player.assists !== undefined && (
              <InnerCard className="text-center">
                <p className="text-2xl font-bold text-[#1C2C5B]">{player.assists}</p>
                <p className="text-xs text-slate-600">Kiến tạo</p>
              </InnerCard>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
