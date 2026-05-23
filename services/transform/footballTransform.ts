import type { Match, Squad, Player } from '@/types';
import { ApiFootballSquadsResponse, PlayerResponse } from './types/players-responseve';

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

export function mapApiFootballPlayersToSquad(playersData: PlayerResponse[]): Squad[] {
  // Group players by position
  const groupedByPosition = new Map<string, Player[]>();

  playersData.forEach((playerData) => {
    const player = mapApiPlayerToPlayer(playerData);
    const position = player.position;

    if (!groupedByPosition.has(position)) {
      groupedByPosition.set(position, []);
    }
    groupedByPosition.get(position)!.push(player);
  });

  // Convert Map to Squad array
  const squad: Squad[] = Array.from(groupedByPosition.entries()).map(([position, players]) => ({
    position,
    players: players.sort((a, b) => a.number - b.number),
  }));
  return squad;
}

function mapApiPlayerToPlayer(playerData: PlayerResponse): Player {
  const player = playerData;

  return {
    id: String(player.id ?? Math.random()),
    number: Number(player.number ?? 0),
    name: player.name ?? 'Unknown',
    position: mapPosition(player.position ?? 'Unknown'),
    age: Number(player.age ?? 0),
    photo: player.photo ? player.photo : undefined,
  };
}

function mapPosition(position: string): string {
  const positionMap: Record<string, string> = {
    Goalkeeper: 'Thủ môn',
    G: 'Thủ môn',
    Defender: 'Hậu Vệ',
    D: 'Hậu Vệ',
    Midfielder: 'Tiền Vệ',
    M: 'Tiền Vệ',
    Forward: 'Tiền Đạo',
    F: 'Tiền Đạo',
  };

  return positionMap[position] ?? position;
}
