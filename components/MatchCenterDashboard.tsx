'use client';

import { useState } from 'react';
import { formatVietnamDateTime } from '@/utils/date';

type MatchInfo = {
  opponent: string;
  score?: string;
  date: string;
  venue: string;
  highlight: string;
  countdown?: string;
};

type PlayerStat = {
  name: string;
  role: string;
  goals: number;
  assists: number;
  goalPercent: number;
  assistPercent: number;
};

type FormationNode = {
  id: string;
  number: string;
  shortName: string;
  x: string;
  y: string;
};

export default function MatchCenterDashboard() {
  const [matchCenter] = useState<{
    lastMatch: MatchInfo;
    upcomingMatch: MatchInfo;
    topPlayers: PlayerStat[];
    formation: FormationNode[];
  }>({
    lastMatch: {
      opponent: 'Real Madrid',
      score: '3 - 1',
      date: 'Sat, May 24 • 20:00 GMT',
      venue: 'Etihad Stadium',
      highlight: 'Dominant possession and precise finishing',
    },
    upcomingMatch: {
      opponent: 'Arsenal',
      date: 'Tue, May 28 • 19:45 GMT',
      venue: 'Emirates Stadium',
      highlight: 'Countdown to the big London clash',
      countdown: '2d 07h 18m',
    },
    topPlayers: [
      {
        name: 'Erling Haaland',
        role: 'Striker',
        goals: 32,
        assists: 10,
        goalPercent: 95,
        assistPercent: 60,
      },
      {
        name: 'Kevin De Bruyne',
        role: 'Midfield Maestro',
        goals: 12,
        assists: 18,
        goalPercent: 75,
        assistPercent: 92,
      },
      {
        name: 'Phil Foden',
        role: 'Attacking Wing',
        goals: 18,
        assists: 14,
        goalPercent: 85,
        assistPercent: 78,
      },
    ],
    formation: [
      { id: 'cb1', number: '17', shortName: 'Dias', x: '45%', y: '16%' },
      { id: 'cb2', number: '3', shortName: 'Akan', x: '65%', y: '16%' },
      { id: 'cb3', number: '2', shortName: 'Walker', x: '25%', y: '16%' },
      { id: 'dm1', number: '25', shortName: 'GvA', x: '40%', y: '36%' },
      { id: 'dm2', number: '8', shortName: 'Rodri', x: '60%', y: '36%' },
      { id: 'cm1', number: '47', shortName: 'Foden', x: '18%', y: '56%' },
      { id: 'cm2', number: '7', shortName: 'Silva', x: '36%', y: '56%' },
      { id: 'cm3', number: '10', shortName: 'DeBru', x: '52%', y: '56%' },
      { id: 'cm4', number: '26', shortName: 'Mahrez', x: '72%', y: '56%' },
      { id: 'fw', number: '9', shortName: 'Haaland', x: '48%', y: '76%' },
      { id: 'gk', number: '1', shortName: 'Ederson', x: '48%', y: '8%' },
    ],
  });

  return (
    <div className="min-h-screen bg-[#E8F0FE] px-4 py-8 text-[#1C2C5B] sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <header className="flex flex-col gap-6 rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F8FF] shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)]">
              <span className="text-xl font-bold text-[#6CABDD]">MC</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Match Center</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">MCFC Match Center</h1>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-[28px] bg-[#F4F8FF] p-3 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)] md:w-auto md:px-5">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.34em] text-slate-500">
                Welcome back
              </span>
              <span className="mt-1 text-sm font-medium">Pep Guardiola</span>
            </div>
            <div className="h-12 w-12 rounded-full bg-[#6CABDD] p-2 shadow-[inset_4px_4px_15px_rgba(0,0,0,0.08)]">
              <svg viewBox="0 0 24 24" className="h-full w-full text-white">
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.05fr_1.3fr_0.95fr]">
          <article className="rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Match Focus</p>
                <h2 className="mt-2 text-2xl font-semibold">Last Match & Next</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white shadow-[5px_5px_12px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_12px_rgba(255,255,255,0.8)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#6CABDD]">
                  <path
                    fill="currentColor"
                    d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 2a7 7 0 017 7c0 1.9-.84 3.62-2.18 4.82L7.18 7.18A6.975 6.975 0 0112 5zm-5.82 2.18L16.82 18.82A6.975 6.975 0 015 12c0-1.9.84-3.62 2.18-4.82z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="rounded-[32px] bg-[#F4F8FF] p-5 shadow-[5px_5px_10px_rgba(0,0,0,0.04)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Last Match</p>
                    <h3 className="mt-3 text-xl font-semibold">
                      Man City vs {matchCenter.lastMatch.opponent}
                    </h3>
                  </div>
                  <span className="rounded-3xl bg-[#6CABDD] px-4 py-2 text-sm font-semibold text-white shadow-[5px_5px_10px_rgba(0,0,0,0.08)]">
                    {matchCenter.lastMatch.score}
                  </span>
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p>{formatVietnamDateTime(matchCenter.lastMatch.date)}</p>
                  <p>{matchCenter.lastMatch.venue}</p>
                  <p className="text-[#1C2C5B]">{matchCenter.lastMatch.highlight}</p>
                </div>
              </div>

              <div className="rounded-[32px] bg-[#F4F8FF] p-5 shadow-[5px_5px_10px_rgba(0,0,0,0.04)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                      Upcoming Match
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      Man City vs {matchCenter.upcomingMatch.opponent}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-3xl bg-[#E0F0FF] px-4 py-2 text-sm font-semibold text-[#1C2C5B]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#6CABDD]">
                      <path d="M12 8a4 4 0 110 8 4 4 0 010-8zm0-4a8 8 0 100 16 8 8 0 000-16zm1 8.93V6h-2v6.93a2 2 0 11.8 0z" />
                    </svg>
                    {matchCenter.upcomingMatch.countdown}
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p>{formatVietnamDateTime(matchCenter.upcomingMatch.date)}</p>
                  <p>{matchCenter.upcomingMatch.venue}</p>
                  <p className="text-[#1C2C5B]">{matchCenter.upcomingMatch.highlight}</p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Tactical Pitch</p>
                <h2 className="mt-2 text-2xl font-semibold">3-2-4-1 Lineup</h2>
              </div>
              <div className="rounded-3xl bg-white p-3 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#6CABDD]">
                  <path
                    fill="currentColor"
                    d="M12 2C7.59 2 4 5.59 4 10c0 4.86 6 11 8 11s8-6.14 8-11c0-4.41-3.59-8-8-8zm0 17.27C9.01 17.69 6 12.78 6 10c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.78-3.01 7.69-6 9.27z"
                  />
                  <circle fill="currentColor" cx="12" cy="10" r="2.5" />
                </svg>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[32px] bg-[#E8F0FE] p-6 shadow-[inset_5px_5px_12px_rgba(0,0,0,0.04)] shadow-[inset_-5px_-5px_12px_rgba(255,255,255,0.9)]">
              <div className="absolute inset-0 rounded-[32px] border border-white/70" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/80" />
              <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-white/80" />
              <div className="relative h-[420px] sm:h-[440px]">
                {matchCenter.formation.map((player) => (
                  <div
                    key={player.id}
                    className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#F4F8FF] text-center text-xs font-semibold text-[#1C2C5B] shadow-[5px_5px_12px_rgba(0,0,0,0.05)] shadow-[-5px_-5px_12px_rgba(255,255,255,0.9)]"
                    style={{ left: player.x, top: player.y }}
                  >
                    <span className="text-sm">{player.number}</span>
                    <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {player.shortName}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto flex w-full justify-center gap-6 text-[11px] uppercase tracking-[0.32em] text-slate-400 sm:gap-8">
                <span>3 defenders</span>
                <span>2 midfield pivots</span>
                <span>4 attackers</span>
              </div>
            </div>
          </article>

          <article className="rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Top Players</p>
                <h2 className="mt-2 text-2xl font-semibold">Player Impact</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-3xl bg-[#6CABDD] px-4 py-3 text-sm font-semibold text-white shadow-[5px_5px_12px_rgba(0,0,0,0.12)] shadow-[-5px_-5px_12px_rgba(255,255,255,0.8)]">
                <span>View Stats</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path fill="currentColor" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {matchCenter.topPlayers.map((player) => (
                <div
                  key={player.name}
                  className="rounded-[28px] bg-[#F4F8FF] p-5 shadow-[5px_5px_10px_rgba(0,0,0,0.04)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold">{player.name}</p>
                      <p className="text-sm text-slate-500">{player.role}</p>
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#6CABDD] shadow-[inset_2px_2px_8px_rgba(0,0,0,0.04)]">
                      {player.goals}G / {player.assists}A
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div>
                      <div className="flex items-center justify-between">
                        <span>Goals</span>
                        <span className="font-semibold text-[#1C2C5B]">{player.goalPercent}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-[#D8E8F8]">
                        <div
                          className="h-2 rounded-full bg-[#6CABDD]"
                          style={{ width: `${player.goalPercent}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span>Assists</span>
                        <span className="font-semibold text-[#1C2C5B]">
                          {player.assistPercent}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-[#D8E8F8]">
                        <div
                          className="h-2 rounded-full bg-[#1C2C5B]"
                          style={{ width: `${player.assistPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
