import { privateAxios } from '@/lib/api';
import { API_ENDPOINTS } from '@/constants/api';
import {
  mapApiFootballFixturesToMatches,
  mapApiFootballPlayersToSquad,
} from './transform/footballTransform';
import type { Match, Squad } from '@/types';
import { ApiFootballSquadsResponse, PlayerResponse } from './transform/types/players-responseve';

interface FixtureParams {
  league?: number;
  season?: number;
  team?: number;
}

export const footballService = {
  getFixtures: async (params: FixtureParams = {}): Promise<Match[]> => {
    try {
      const response = await privateAxios.get(API_ENDPOINTS.FOOTBALL.FIXTURES, {
        params,
      });

      const fixtures = response.data?.response ?? [];
      return mapApiFootballFixturesToMatches(fixtures);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('footballService.getFixtures error', error);
      return [];
    }
  },

  getStandings: async (league: number, season?: number): Promise<any> => {
    const response = await privateAxios.get(API_ENDPOINTS.FOOTBALL.STANDINGS, {
      params: {
        league,
        season,
      },
    });
    return response.data?.response ?? [];
  },

  getTeams: async (league: number, season?: number): Promise<any> => {
    const response = await privateAxios.get(API_ENDPOINTS.FOOTBALL.TEAMS, {
      params: {
        league,
        season,
      },
    });
    return response.data?.response ?? [];
  },

  getPlayers: async (team: number, season?: number): Promise<Squad[]> => {
    const response = await privateAxios.get(API_ENDPOINTS.FOOTBALL.PLAYERS, {
      params: {
        team,
      },
    });
    const players = response.data?.response[0]?.players ?? [];
    return mapApiFootballPlayersToSquad(players);
  },
};
