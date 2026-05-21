"use client";

import { PlayerCard } from "./shared/PlayerCard";
import { squadData } from "../data/squad";
import type { Player } from "../types";

const positionColors: Record<string, string> = {
  "Thủ môn": "from-indigo-400 to-indigo-600",
  "Hậu Vệ": "from-green-400 to-green-600",
  "Tiền Vệ": "from-yellow-400 to-amber-600",
  "Tiền Đạo": "from-red-400 to-red-600",
};

export default function SquadPage() {
  return (
    <div className="min-h-screen bg-[#E8F0FE] px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Đội Hình</p>
          <h1 className="mt-2 text-3xl font-semibold">First Team & Squad</h1>
        </header>

        <section className="space-y-8">
          {squadData.map((group) => (
            <div key={group.position}>
              <h2 className="mb-4 text-xl font-semibold">{group.position}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.players.map((p: Player) => (
                  <PlayerCard key={p.id} player={p} positionColor={positionColors[group.position] || "from-blue-400 to-blue-600"} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
