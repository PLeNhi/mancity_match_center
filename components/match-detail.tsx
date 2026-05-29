'use client';
import { useMemo, useState } from 'react';
import type { Match } from '@/types';
import { formatVietnamDateTime } from '@/utils/date';
import { SketchyTabButton } from './sketchy-tab';

interface MatchDetailProps {
  match: Match;
}

type MatchDetails = {
  homeLineup: string[];
  awayLineup: string[];
  stats: Array<{ label: string; home: string; away: string }>;
};

const MATCH_DETAILS: Record<string, MatchDetails> = {
  '1': {
    homeLineup: [
      'Ederson',
      'Walker',
      'Dias',
      'Akanji',
      'Gvardiol',
      'Rodri',
      'Foden',
      'De Bruyne',
      'Bernardo',
      'Haaland',
      'Silva',
    ],
    awayLineup: [
      'Ramsdale',
      'White',
      'Saliba',
      'Gabriel',
      'Tomiyasu',
      'Rice',
      'Partey',
      'Saka',
      'Ødegaard',
      'Martinelli',
      'Havertz',
    ],
    stats: [
      { label: 'Số lần sút', home: '13', away: '5' },
      { label: 'Sút trúng đích', home: '2', away: '0' },
      { label: 'Kiểm soát bóng', home: '62%', away: '38%' },
      { label: 'Lượt chuyền bóng', home: '516', away: '299' },
      { label: 'Tỷ lệ chuyền bóng chính xác', home: '90%', away: '80%' },
      { label: 'Phạm lỗi', home: '7', away: '16' },
      { label: 'Thẻ vàng', home: '1', away: '3' },
      { label: 'Thẻ đỏ', home: '0', away: '0' },
      { label: 'Việt vị', home: '1', away: '0' },
      { label: 'Phạt góc', home: '3', away: '3' },
    ],
  },
  '2': {
    homeLineup: [
      'Ederson',
      'Walker',
      'Dias',
      'Akanji',
      'Gvardiol',
      'Rodri',
      'Foden',
      'Bernardo',
      'Mahrez',
      'Haaland',
      'Grealish',
    ],
    awayLineup: [
      'Sánchez',
      'Estupiñán',
      'Dunk',
      'White',
      'Acuña',
      'Guehi',
      'Bissouma',
      'March',
      'Mac Allister',
      'Gross',
      'Maupay',
    ],
    stats: [
      { label: 'Số lần sút', home: '11', away: '7' },
      { label: 'Sút trúng đích', home: '5', away: '2' },
      { label: 'Kiểm soát bóng', home: '68%', away: '32%' },
      { label: 'Lượt chuyền bóng', home: '528', away: '218' },
      { label: 'Tỷ lệ chuyền bóng chính xác', home: '92%', away: '79%' },
      { label: 'Phạm lỗi', home: '8', away: '12' },
      { label: 'Thẻ vàng', home: '2', away: '4' },
      { label: 'Thẻ đỏ', home: '0', away: '0' },
      { label: 'Việt vị', home: '2', away: '1' },
      { label: 'Phạt góc', home: '5', away: '4' },
    ],
  },
};

const TAB_KEYS = ['lineups', 'statistics'] as const;

type TabKey = (typeof TAB_KEYS)[number];

function formatStatus(status: Match['status']) {
  switch (status) {
    case 'played':
      return 'Kết thúc';
    case 'live':
      return 'Đang diễn ra';
    case 'upcoming':
      return 'Sắp tới';
    default:
      return '';
  }
}

export default function MatchDetail({ match }: MatchDetailProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('lineups');

  const details = useMemo<MatchDetails>(() => {
    return (
      MATCH_DETAILS[match.id] ?? {
        homeLineup: [
          'Ederson',
          'Walker',
          'Dias',
          'Akanji',
          'Rodri',
          'Foden',
          'De Bruyne',
          'Silva',
          'Haaland',
          'Bernardo',
          'Mahrez',
        ],
        awayLineup: [
          'Player 1',
          'Player 2',
          'Player 3',
          'Player 4',
          'Player 5',
          'Player 6',
          'Player 7',
          'Player 8',
          'Player 9',
          'Player 10',
          'Player 11',
        ],
        stats: [
          { label: 'Số lần sút', home: '0', away: '0' },
          { label: 'Sút trúng đích', home: '0', away: '0' },
          { label: 'Kiểm soát bóng', home: '0%', away: '0%' },
          { label: 'Lượt chuyền bóng', home: '0', away: '0' },
          { label: 'Tỷ lệ chuyền bóng chính xác', home: '0%', away: '0%' },
          { label: 'Phạm lỗi', home: '0', away: '0' },
          { label: 'Thẻ vàng', home: '0', away: '0' },
          { label: 'Thẻ đỏ', home: '0', away: '0' },
          { label: 'Việt vị', home: '0', away: '0' },
          { label: 'Phạt góc', home: '0', away: '0' },
        ],
      }
    );
  }, [match.id]);

  return (
    <section className="rounded-[32px] bg-white p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.06)]">
      <div className="mb-6 flex flex-col gap-4 rounded-[24px] bg-[#F4F8FF] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{match.competition}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            {match.homeTeam} {match.homeScore ?? '-'} - {match.awayScore ?? '-'} {match.awayTeam}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{formatVietnamDateTime(match.date)}</p>
        </div>
        <div className="rounded-3xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.04)]">
          {formatStatus(match.status)}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2 rounded-full bg-slate-100 p-1">
        {TAB_KEYS.map((tab) => (
          <SketchyTabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab === 'lineups' ? 'Đội hình' : 'Thống kê'}
          </SketchyTabButton>
        ))}
      </div>

      {activeTab === 'lineups' ? (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#F8FAFF] p-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              {match.homeTeam}
            </h3>
            <ul className="space-y-2">
              {details.homeLineup.map((player) => (
                <li
                  key={player}
                  className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.04)]"
                >
                  {player}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] bg-[#F8FAFF] p-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              {match.awayTeam}
            </h3>
            <ul className="space-y-2">
              {details.awayLineup.map((player) => (
                <li
                  key={player}
                  className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.04)]"
                >
                  {player}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {details.stats.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[max-content_1fr_max-content] items-center gap-4 rounded-[24px] bg-[#F8FAFF] px-4 py-3"
            >
              <span className="text-sm font-semibold text-slate-700">{row.home}</span>
              <span className="text-center text-sm text-slate-500">{row.label}</span>
              <span className="text-sm font-semibold text-slate-700">{row.away}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
