export interface Card {
  value: string;
  x: number;
  y: number;
  status: 'covered' | 'flipped' | 'matched';
}

export interface XY {
  x: number;
  y: number;
}