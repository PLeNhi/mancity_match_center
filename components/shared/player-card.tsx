'use client';

import { InnerCard } from './card';
import type { Player } from '@/types';

interface PlayerCardProps {
  player: Player;
  positionColor: string;
}

export function PlayerCard({ player, positionColor }: PlayerCardProps) {
  return (
    <div className="group overflow-hidden bg-white border-hand border-sketch-900 shadow-sketch transition-all hover:shadow-sketch-md">
      <div className="relative h-24 overflow-hidden bg-sketch-100 border-b-hand border-b-sketch-900">
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
          <defs>
            <pattern id="diagonal-hatch" patternUnits="userSpaceOnUse" width="8" height="8">
              <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#2b2b23" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#diagonal-hatch)" />
        </svg>
        <div className="absolute bottom-2 left-4 flex h-12 w-12 items-center justify-center border-hand border-sketch-900 bg-white text-lg font-bold text-sketch-900">
          {player.number}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-sketch-900">{player.name}</h3>
        <p className="mt-1 text-sm text-sketch-700">{player.position}</p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-sketch-700">Quốc tịch</span>
            <span className="font-semibold text-sketch-900">{player.nationality}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sketch-700">Tuổi</span>
            <span className="font-semibold text-sketch-900">{player.age}</span>
          </div>
          {player.appearances !== undefined && (
            <div className="flex justify-between">
              <span className="text-sketch-700">Trận đấu</span>
              <span className="font-semibold text-sketch-900">{player.appearances}</span>
            </div>
          )}
        </div>

        {(player.goals !== undefined || player.assists !== undefined) && (
          <div className="mt-5 grid grid-cols-2 gap-3 border-t-hand border-t-sketch-300 pt-4">
            {player.goals !== undefined && (
              <InnerCard className="text-center">
                <p className="text-2xl font-bold text-sketch-900">{player.goals}</p>
                <p className="text-xs text-sketch-700">Bàn Thắng</p>
              </InnerCard>
            )}
            {player.assists !== undefined && (
              <InnerCard className="text-center">
                <p className="text-2xl font-bold text-sketch-900">{player.assists}</p>
                <p className="text-xs text-sketch-700">Kiến tạo</p>
              </InnerCard>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
