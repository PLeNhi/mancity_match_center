import { defaultFilter } from '@/store/useSquadFilterStore';
import { SketchyButton } from './sketchy-button';

interface SquadFilterProps {
  searchTerm: string;
  selectedPosition: string;
  positionOptions: string[];
  onSearchTermChange?: (value: string) => void;
  onSelectedPositionChange?: (value: string) => void;
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
        <div className="flex w-full items-center gap-3 bg-white border-hand border-sketch-900 p-3 shadow-sketch">
          <label htmlFor="player-search" className="sr-only">
            Tìm cầu thủ
          </label>
          <input
            id="player-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchTermChange?.(event.target.value)}
            placeholder="Tìm theo tên hoặc vị trí"
            className="w-full bg-transparent text-sm text-sketch-900 rounded-md outline-none placeholder:text-sketch-600"
          />
        </div>

        <div className="flex items-center gap-3 bg-white border-hand border-sketch-900 p-3 shadow-sketch">
          <label htmlFor="position-filter" className="text-sm font-medium text-sketch-900">
            Lọc theo vị trí
          </label>
          <select
            id="position-filter"
            value={selectedPosition}
            onChange={(event) => onSelectedPositionChange?.(event.target.value)}
            className="bg-sketch-50 border-hand border-sketch-900 px-4 py-2 text-sm text-sketch-900 outline-none transition shadow-sketch"
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
          <SketchyButton onClick={onReset} className="px-4 py-2 text-sm">
            Đặt lại
          </SketchyButton>
        </div>
      ) : null}
    </div>
  );
}
