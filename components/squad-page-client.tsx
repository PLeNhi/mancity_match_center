'use client';

import usePlayersQuery from '@/hooks/usePlayersQuery';
import { DehydratedState } from '@tanstack/react-query';
import { SquadFilter } from './squad-filter';
import { useSquadFilter } from '@/hooks/useSquadFilter';
import {
  SquadEmptyState,
  SquadErrorState,
  SquadPageHeader,
  SquadLoadingSkeleton,
  SquadPageFrame,
} from './squad-page-states';
import { SquadGrid } from './squad-grid';
import type { Squad } from '@/types';

interface SquadPageClientProps {
  initialPlayers?: Squad[];
  initialTeam?: number;
  initialSeason?: number;
  dehydratedState?: DehydratedState;
}

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
    refetch,
  } = usePlayersQuery(initialTeam, initialSeason, initialPlayers ?? []);

  const {
    filteredSquad,
    positionOptions,
    searchTerm,
    selectedPosition,
    setSearchTerm,
    setSelectedPosition,
    resetFilters,
  } = useSquadFilter(squad);

  if (isLoading) {
    return <SquadLoadingSkeleton dehydratedState={dehydratedState} />;
  }

  if (isError || !squad) {
    return <SquadErrorState dehydratedState={dehydratedState} onRetry={() => refetch()} />;
  }

  return (
    <SquadPageFrame dehydratedState={dehydratedState}>
      <div className="mx-auto max-w-7xl">
        <SquadPageHeader />

        <SquadFilter
          searchTerm={searchTerm}
          selectedPosition={selectedPosition}
          positionOptions={positionOptions}
          onSearchTermChange={setSearchTerm}
          onSelectedPositionChange={setSelectedPosition}
          onReset={resetFilters}
        />

        <section className="space-y-8">
          {filteredSquad.length > 0 ? (
            <SquadGrid squads={filteredSquad} />
          ) : (
            <SquadEmptyState onReset={resetFilters} />
          )}
        </section>
      </div>
    </SquadPageFrame>
  );
}
