import { TrophyCard } from './shared/trophy-card';
import { achievementsData } from '../data/achievements';

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
      </div>
    </div>
  );
}
