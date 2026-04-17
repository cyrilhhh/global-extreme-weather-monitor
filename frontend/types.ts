export type Unit = 'C' | 'F';

export interface CityWeather {
  id: string;
  rank: number;
  city: string;
  country: string;
  population: string;
  tempC: number;
  lowC: number;
  highC: number;
  condition: 'Sunny' | 'Cloudy' | 'Rain' | 'Snow' | 'Clear' | 'Partly Cloudy';
}

export interface UserLocation {
  city: string;
  country: string;
  tempC: number;
  condition: string;
  lat: string;
  lon: string;
}
