import { matchesData } from '@/data/matches';
import type { Match } from '@/types';
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
