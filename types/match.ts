export type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  competition: string;
  status: 'played' | 'upcoming' | 'live';
  homeLogo?: any;
  awayLogo?: any;
};
