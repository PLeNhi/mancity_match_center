export interface TeamResponse {
  id: number;
  name: string;
  logo: string;
}

export interface PlayerResponse {
  id: number;
  name: string;
  age: number;
  number: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Attacker' | string;
  photo: string;
}

export interface SquadResponse {
  team: TeamResponse;
  players: PlayerResponse[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface ApiFootballSquadsResponse {
  get: string;
  parameters: {
    team: string;
  };
  errors: Record<string, string>;
  results: number;
  paging: Paging;
  response: SquadResponse[];
}
