import { fetchMatches } from '@/services/matchesService';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const leagueParam = searchParams.get('league');
    const seasonParam = searchParams.get('season');
    const league = leagueParam ? Number(leagueParam) : undefined;
    const season = seasonParam ? Number(seasonParam) : undefined;

    const matches = await fetchMatches(league, season);
    return NextResponse.json({ response: matches });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('API /api/matches error', err);
    return NextResponse.json({ response: [] }, { status: 500 });
  }
}
