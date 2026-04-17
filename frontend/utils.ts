import { Unit } from './types.ts';

export const convertTemp = (tempC: number, unit: Unit): number => {
  if (unit === 'C') return tempC;
  return (tempC * 9) / 5 + 32;
};

export const formatTemp = (temp: number): string => {
  return temp > 0 ? `+${temp.toFixed(1)}` : temp.toFixed(1);
};
