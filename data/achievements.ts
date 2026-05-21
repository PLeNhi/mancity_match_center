import type { Achievement } from '@/types';

export const achievementsData: Achievement[] = [
  {
    title: 'Premier League',
    trophies: [
      { name: '2023-24', count: 1, year: '2024' },
      { name: '2022-23', count: 1, year: '2023' },
      { name: '2021-22', count: 1, year: '2022' },
      { name: '2020-21', count: 1, year: '2021' },
      { name: '2018-19', count: 1, year: '2019' },
      { name: '2013-14', count: 1, year: '2014' },
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'FA Cup',
    trophies: [
      { name: '2022-23', count: 1, year: '2023' },
      { name: '2018-19', count: 1, year: '2019' },
      { name: '2010-11', count: 1, year: '2011' },
    ],
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'League Cup',
    trophies: [
      { name: '2023-24', count: 1, year: '2024' },
      { name: '2022-23', count: 1, year: '2023' },
      { name: '2021-22', count: 1, year: '2022' },
      { name: '2020-21', count: 1, year: '2021' },
      { name: '2018-19', count: 1, year: '2019' },
      { name: '2013-14', count: 1, year: '2014' },
    ],
    color: 'from-yellow-400 to-amber-600',
  },
  {
    title: 'UEFA Champions League',
    trophies: [{ name: '2022-23', count: 1, year: '2023' }],
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'Community Shield',
    trophies: [
      { name: '2023', count: 1, year: '2023' },
      { name: '2022', count: 1, year: '2022' },
      { name: '2020', count: 1, year: '2020' },
      { name: '2018', count: 1, year: '2018' },
    ],
    color: 'from-green-400 to-green-600',
  },
];

export const getAchievementsStats = () => {
  const totalTrophies = achievementsData.reduce(
    (sum, achievement) => sum + achievement.trophies.length,
    0,
  );

  return {
    totalTrophies,
    domesticTrophies: '35+',
    internationalTrophies: 1,
    consecutiveTopFour: '10+',
    consecutiveTopTwo: 9,
  };
};
