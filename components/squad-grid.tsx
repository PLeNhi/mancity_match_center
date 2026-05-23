'use client';

import { PlayerCard } from './shared/player-card';
import type { Squad } from '@/types';

const positionColors: Record<string, string> = {
  'Thủ môn': 'from-indigo-400 to-indigo-600',
  'Hậu Vệ': 'from-green-400 to-green-600',
  'Tiền Vệ': 'from-yellow-400 to-amber-600',
  'Tiền Đạo': 'from-red-400 to-red-600',
};

interface SquadGridProps {
  squads: Squad[];
}

export function SquadGrid({ squads }: SquadGridProps) {
  console.log('🚀 ~ SquadGrid ~ squads:', squads);
  return (
    <>
      {squads.map((group) => (
        <div key={group.position}>
          <h2 className="mb-4 text-xl font-semibold">{group.position}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {group.players.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                positionColor={positionColors[group.position] || 'from-blue-400 to-blue-600'}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
