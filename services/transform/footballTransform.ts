import type { Match } from '@/types';

export function mapApiFootballFixturesToMatches(fixtures: any[]): Match[] {
  return fixtures.map((fixture) => {
    const home = fixture.teams?.home;
    const away = fixture.teams?.away;
    const goals = fixture.goals ?? fixture.score ?? {};
    const statusShort = fixture.fixture?.status?.short ?? fixture.status?.short;

    let status: Match['status'] = 'upcoming';
    if (['FT', 'AET', 'PEN'].includes(statusShort)) status = 'played';
    else if (['1H', '2H', 'HT', 'LIVE'].includes(statusShort)) status = 'live';

    return {
      id: String(fixture.fixture?.id ?? fixture.id ?? Math.random()),
      homeTeam: home?.name ?? fixture.homeTeam ?? 'Home',
      awayTeam: away?.name ?? fixture.awayTeam ?? 'Away',
      homeScore: typeof goals.home === 'number' ? goals.home : undefined,
      awayScore: typeof goals.away === 'number' ? goals.away : undefined,
      date: fixture.fixture?.date ?? fixture.date ?? '',
      competition: fixture.league?.name ?? fixture.competition?.name ?? '',
      status,
      homeLogo: home?.logo ? home.logo : undefined,
      awayLogo: away?.logo ? away.logo : undefined,
    };
  });
}
