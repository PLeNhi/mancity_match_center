export type Player = {
  id: string;
  number: number;
  name: string;
  position: string;
  nationality: string;
  age: number;
  goals?: number;
  assists?: number;
  appearances?: number;
};

export type Squad = {
  position: string;
  players: Player[];
};
