'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { SketchyButton } from './sketchy-button';

const matchListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const matchCardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    rotate: -1.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 20,
    },
  },
};

const matches = [
  {
    id: '1',
    date: 'May 22',
    competition: 'Premier League',
    home: 'Man City',
    away: 'Liverpool',
    score: '2 - 1',
    highlight: 'Foden late winner',
  },
  {
    id: '2',
    date: 'May 18',
    competition: 'Champions League',
    home: 'Man City',
    away: 'Bayern',
    score: '1 - 1',
    highlight: 'De Bruyne free kick',
  },
  {
    id: '3',
    date: 'May 14',
    competition: 'FA Cup',
    home: 'Man City',
    away: 'Arsenal',
    score: '3 - 0',
    highlight: 'Hat-trick from Haaland',
  },
];

function MatchCard({ match }: { match: (typeof matches)[number] }) {
  return (
    <motion.article
      variants={matchCardVariants}
      className="relative overflow-hidden rounded-3xl bg-white px-6 py-5 text-left text-sm text-sketch-900 shadow-sketch border-hand border-sketch-900"
    >
      <motion.svg
        viewBox="0 0 200 24"
        className="absolute left-6 top-4 h-6 w-[calc(100%-4rem)]"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 2 12 L 198 12"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } }}
        />
      </motion.svg>

      <div className="relative space-y-3 pt-2">
        <div className="flex items-center justify-between gap-2 text-xs uppercase text-sketch-700">
          <span>{match.date}</span>
          <span>{match.competition}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold">{match.home}</p>
            <span className="text-base font-bold">{match.score}</span>
            <p className="font-semibold text-right">{match.away}</p>
          </div>
          <p className="text-xs text-sketch-700">{match.highlight}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function MatchList() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={matchListVariants}
      className="space-y-6"
    >
      <div className="rounded-[2rem] border-hand border-sketch-900 bg-white/95 p-6 shadow-sketch">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sketch-700">Latest Matches</p>
            <h2 className="mt-2 text-3xl font-semibold text-sketch-900">Sketchy Match Replay</h2>
          </div>

          <SketchyButton>See Full Fixture List</SketchyButton>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </motion.section>
  );
}
