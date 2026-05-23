'use client';

import { TrophyCard } from './shared/trophy-card';
import { getAchievementsStats, achievementsData } from '../data/achievements';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Thành Tích</p>
          <h1 className="mt-2 text-3xl font-semibold">Trophies & Achievements</h1>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievementsData.map((ach, idx) => (
            <TrophyCard key={idx} achievement={ach} />
          ))}
        </section>

        {/* <section>
          <div className="rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold">Quick Stats</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-[16px] bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#6CABDD]">{stats.totalTrophies}</div>
                <div className="text-xs text-slate-500">Trophies</div>
              </div>
              <div className="rounded-[16px] bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#1C2C5B]">{stats.domesticTrophies}</div>
                <div className="text-xs text-slate-500">Domestic</div>
              </div>
              <div className="rounded-[16px] bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#1C2C5B]">
                  {stats.internationalTrophies}
                </div>
                <div className="text-xs text-slate-500">International</div>
              </div>
              <div className="rounded-[16px] bg-white p-4 text-center">
                <div className="text-2xl font-bold text-[#1C2C5B]">{stats.consecutiveTopTwo}</div>
                <div className="text-xs text-slate-500">Consecutive Top 2</div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
