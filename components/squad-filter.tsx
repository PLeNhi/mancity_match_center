'use client';

import { defaultFilter } from '@/store/useSquadFilterStore';

interface SquadFilterProps {
  searchTerm: string;
  selectedPosition: string;
  positionOptions: string[];
  onSearchTermChange: (value: string) => void;
  onSelectedPositionChange: (value: string) => void;
  onReset?: () => void;
}

export function SquadFilter({
  searchTerm,
  selectedPosition,
  positionOptions,
  onSearchTermChange,
  onSelectedPositionChange,
  onReset,
}: SquadFilterProps) {
  const hasActiveFilters = searchTerm !== '' || selectedPosition !== defaultFilter;

  return (
    <div className="mb-8 space-y-3">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="flex w-full items-center gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <label htmlFor="player-search" className="sr-only">
            Tìm cầu thủ
          </label>
          <input
            id="player-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="Tìm theo tên hoặc vị trí"
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <label htmlFor="position-filter" className="text-sm font-medium text-slate-600">
            Lọc theo vị trí
          </label>
          <select
            id="position-filter"
            value={selectedPosition}
            onChange={(event) => onSelectedPositionChange(event.target.value)}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          >
            {positionOptions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
      </div>
      {hasActiveFilters && onReset ? (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Đặt lại
          </button>
        </div>
      ) : null}
    </div>
  );
}
