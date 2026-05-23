'use client';

import { type ReactNode } from 'react';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';
import { SketchyButton } from './sketchy-button';

interface SquadPageFrameProps {
  dehydratedState?: DehydratedState;
  children: ReactNode;
}

export function SquadPageFrame({ dehydratedState, children }: SquadPageFrameProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen bg-sketch-50 px-4 py-8 text-sketch-900 sm:px-6 lg:px-10">
        {children}
      </div>
    </HydrationBoundary>
  );
}

export function SquadPageHeader() {
  return (
    <header className="mb-6">
      <p className="text-sm uppercase tracking-[0.35em] text-sketch-700">Đội Hình</p>
      <h1 className="mt-2 text-3xl font-semibold text-sketch-900">First Team & Squad</h1>
    </header>
  );
}

export function SquadLoadingSkeleton({ dehydratedState }: { dehydratedState?: DehydratedState }) {
  return (
    <SquadPageFrame dehydratedState={dehydratedState}>
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <div className="h-4 w-32 bg-sketch-300 animate-pulse" />
          <div className="mt-4 h-10 w-80 bg-sketch-300 animate-pulse" />
        </header>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="h-12 bg-sketch-300 animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-12 min-w-[220px] flex-1 bg-sketch-300 animate-pulse" />
            <div className="h-12 w-28 bg-sketch-300 animate-pulse" />
          </div>
        </div>

        <section className="space-y-8">
          {[...Array(2)].map((_, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="mb-4 h-6 w-40 bg-sketch-300 animate-pulse" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="overflow-hidden bg-white border-hand border-sketch-900 p-5 shadow-sketch animate-pulse"
                  >
                    <div className="h-24 bg-sketch-300" />
                    <div className="mt-4 h-5 w-2/3 bg-sketch-300" />
                    <div className="mt-2 h-4 w-1/2 bg-sketch-300" />
                    <div className="mt-4 space-y-3">
                      <div className="h-4 bg-sketch-300" />
                      <div className="h-4 bg-sketch-300" />
                      <div className="h-4 w-3/4 bg-sketch-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </SquadPageFrame>
  );
}

interface SquadErrorStateProps {
  dehydratedState?: DehydratedState;
  onRetry: () => void;
}

export function SquadErrorState({ dehydratedState, onRetry }: SquadErrorStateProps) {
  return (
    <SquadPageFrame dehydratedState={dehydratedState}>
      <div className="mx-auto max-w-7xl">
        <SquadPageHeader />

        <div className="border-hand border-sketch-900 bg-sketch-100 p-8 text-center text-sketch-900 shadow-sketch">
          <p className="text-lg font-semibold">Không thể tải danh sách đội hình</p>
          <p className="mt-2 text-sm text-sketch-700">
            Vui lòng thử lại hoặc kiểm tra kết nối mạng.
          </p>
          <SketchyButton onClick={onRetry} className="mt-6">
            Thử lại
          </SketchyButton>
        </div>
      </div>
    </SquadPageFrame>
  );
}

interface SquadEmptyStateProps {
  onReset: () => void;
}

export function SquadEmptyState({ onReset }: SquadEmptyStateProps) {
  return (
    <div className="border-hand  bg-white p-8 text-center text-sketch-700 shadow-sketch">
      <p className="text-lg font-semibold text-sketch-900">Không tìm thấy cầu thủ phù hợp</p>
      <p className="mt-2 text-sm text-sketch-700">
        Hãy thử điều chỉnh bộ lọc hoặc đặt lại tìm kiếm để xem nhiều hơn.
      </p>
      <SketchyButton onClick={onReset} className="mt-6">
        Đặt lại bộ lọc
      </SketchyButton>
    </div>
  );
}
