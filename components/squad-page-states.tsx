'use client';

import { type ReactNode } from 'react';
import { DehydratedState, HydrationBoundary } from '@tanstack/react-query';

interface SquadPageFrameProps {
  dehydratedState?: DehydratedState;
  children: ReactNode;
}

export function SquadPageFrame({ dehydratedState, children }: SquadPageFrameProps) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="min-h-screen bg-[#E8F0FE] px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
        {children}
      </div>
    </HydrationBoundary>
  );
}

export function SquadPageHeader() {
  return (
    <header className="mb-6">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Đội Hình</p>
      <h1 className="mt-2 text-3xl font-semibold">First Team & Squad</h1>
    </header>
  );
}

export function SquadLoadingSkeleton({ dehydratedState }: { dehydratedState?: DehydratedState }) {
  return (
    <SquadPageFrame dehydratedState={dehydratedState}>
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <div className="h-4 w-32 rounded-full bg-slate-200/70 animate-pulse" />
          <div className="mt-4 h-10 w-80 rounded-full bg-slate-200/70 animate-pulse" />
        </header>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="h-12 rounded-3xl bg-slate-200/70 animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-12 min-w-[220px] flex-1 rounded-full bg-slate-200/70 animate-pulse" />
            <div className="h-12 w-28 rounded-full bg-slate-200/70 animate-pulse" />
          </div>
        </div>

        <section className="space-y-8">
          {[...Array(2)].map((_, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="mb-4 h-6 w-40 rounded-full bg-slate-200/70 animate-pulse" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(4)].map((_, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="overflow-hidden rounded-[28px] bg-white p-5 shadow-sm animate-pulse"
                  >
                    <div className="h-24 rounded-3xl bg-slate-200/70" />
                    <div className="mt-4 h-5 w-2/3 rounded-full bg-slate-200/70" />
                    <div className="mt-2 h-4 w-1/2 rounded-full bg-slate-200/70" />
                    <div className="mt-4 space-y-3">
                      <div className="h-4 rounded-full bg-slate-200/70" />
                      <div className="h-4 rounded-full bg-slate-200/70" />
                      <div className="h-4 w-3/4 rounded-full bg-slate-200/70" />
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

        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700 shadow-sm">
          <p className="text-lg font-semibold">Không thể tải danh sách đội hình</p>
          <p className="mt-2 text-sm text-red-600">Vui lòng thử lại hoặc kiểm tra kết nối mạng.</p>
          <button
            type="button"
            onClick={onRetry}
            className="mt-6 inline-flex rounded-full bg-[#1C2C5B] px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Thử lại
          </button>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Không tìm thấy cầu thủ phù hợp</p>
      <p className="mt-2 text-sm text-slate-500">
        Hãy thử điều chỉnh bộ lọc hoặc đặt lại tìm kiếm để xem nhiều hơn.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex rounded-full bg-[#1C2C5B] px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Đặt lại bộ lọc
      </button>
    </div>
  );
}
