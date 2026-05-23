export type Player = {
  id: string;
  number: number;
  name: string;
  position: string;
  age: number;
  photo?: any;
};

export type Squad = {
  position: string;
  players: Player[];
};
