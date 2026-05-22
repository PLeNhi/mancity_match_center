'use client';

import usePlayersQuery from '@/hooks/usePlayersQuery';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';
import { PlayerCard } from './shared/player-card';
import { SquadFilter } from './squad-filter';
import { useSquadFilter } from '@/hooks/useSquadFilter';
import type { Squad } from '@/types';

interface SquadPageClientProps {
  initialPlayers?: Squad[];
  initialTeam?: number;
  initialSeason?: number;
  dehydratedState?: DehydratedState;
}

const positionColors: Record<string, string> = {
  'Thủ môn': 'from-indigo-400 to-indigo-600',
  'Hậu Vệ': 'from-green-400 to-green-600',
  'Tiền Vệ': 'from-yellow-400 to-amber-600',
  'Tiền Đạo': 'from-red-400 to-red-600',
};

export default function SquadPageClient({
  initialPlayers,
  initialTeam,
  initialSeason,
  dehydratedState,
}: SquadPageClientProps) {
  const {
    data: squad,
    isLoading,
    isError,
  } = usePlayersQuery(initialTeam, initialSeason, initialPlayers ?? []);

  const {
    filteredSquad,
    positionOptions,
    searchTerm,
    selectedPosition,
    setSearchTerm,
    setSelectedPosition,
  } = useSquadFilter(squad);

  if (isLoading) {
    return <div className="text-center text-slate-500">Loading squad...</div>;
  }

  if (isError || !squad) {
    return <div className="text-center text-red-600">Unable to load squad.</div>;
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen bg-[#E8F0FE] px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Đội Hình</p>
            <h1 className="mt-2 text-3xl font-semibold">First Team & Squad</h1>
          </header>

          <SquadFilter
            searchTerm={searchTerm}
            selectedPosition={selectedPosition}
            positionOptions={positionOptions}
            onSearchTermChange={setSearchTerm}
            onSelectedPositionChange={setSelectedPosition}
          />

          <section className="space-y-8">
            {filteredSquad.length > 0 ? (
              filteredSquad.map((group) => (
                <div key={group.position}>
                  <h2 className="mb-4 text-xl font-semibold">{group.position}</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {group.players.map((player) => (
                      <PlayerCard
                        key={player.id}
                        player={player}
                        positionColor={
                          positionColors[group.position] || 'from-blue-400 to-blue-600'
                        }
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
                Không tìm thấy cầu thủ phù hợp. Thử thay đổi từ khóa tìm kiếm hoặc vị trí.
              </div>
            )}
          </section>
        </div>
      </div>
    </HydrationBoundary>
  );
}
