import { matchesData } from '@/data/matches';
import { squadData } from '@/data/squad';
import type { Match, Squad } from '@/types';
import { footballService } from './footballService';

export async function fetchMatches(
  league?: number,
  season?: number,
  team?: number,
): Promise<Match[]> {
  if (!process.env.NEXT_PUBLIC_API_FOOTBALL_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return matchesData;
  }

  const fixtures = await footballService.getFixtures({ league, season, team });
  return fixtures.length ? fixtures : matchesData;
}

export async function fetchPlayers(team?: number, season?: number): Promise<Squad[]> {
  if (!process.env.NEXT_PUBLIC_API_FOOTBALL_KEY || !team) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return squadData;
  }

  try {
    const playersData = await footballService.getPlayers(team, season);
    return playersData.length ? playersData : squadData;
  } catch (error) {
    console.error('fetchPlayers error', error);
  }

  return squadData;
}
