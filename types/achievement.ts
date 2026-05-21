export type Trophy = {
  name: string;
  count: number;
  year?: string;
};

export type Achievement = {
  title: string;
  trophies: Trophy[];
  color: string;
};
