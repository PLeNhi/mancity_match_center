"use client";

import { MatchCard } from "./shared/MatchCard";
import { matchesData } from "../data/matches";

export default function FixturesPage() {
  return (
    <div className="min-h-screen bg-[#E8F0FE] px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Lịch Thi Đấu</p>
          <h1 className="mt-2 text-3xl font-semibold">Upcoming & Recent Matches</h1>
        </header>

        <section className="space-y-4">
          {matchesData.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </section>
      </div>
    </div>
  );
}
