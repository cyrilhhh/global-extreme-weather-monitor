import { CityWeather, UserLocation } from './types.ts';

export const mockUserLocation: UserLocation = {
  city: "BRØNDBY",
  country: "DENMARK",
  tempC: 8,
  condition: "MOSTLY CLOUDY",
  lat: "55.65°N",
  lon: "12.42°E"
};

export const getWarmestCities = (): CityWeather[] => [
  { id: 'w1', rank: 1, city: "N'Djamena", country: 'CHAD', population: '1.6M', tempC: 41, lowC: 31, highC: 41, condition: 'CLOUDY' },
  { id: 'w2', rank: 2, city: 'Niamey', country: 'NIGER', population: '1.4M', tempC: 40, lowC: 26, highC: 40, condition: 'PARTLY SUNNY' },
  { id: 'w3', rank: 3, city: 'Ouagadougou', country: 'BURKINA FASO', population: '2.4M', tempC: 39, lowC: 25, highC: 39, condition: 'SUNNY' },
  { id: 'w4', rank: 4, city: 'Khartoum', country: 'SUDAN', population: '6.3M', tempC: 39, lowC: 23, highC: 39, condition: 'SUNNY' },
  { id: 'w5', rank: 5, city: 'Bamako', country: 'MALI', population: '4.2M', tempC: 38, lowC: 24, highC: 38, condition: 'PARTLY SUNNY' },
];

export const getColdestCities = (): CityWeather[] => [
  { id: 'c1', rank: 1, city: 'Tomsk', country: 'RUSSIA', population: '0.6M', tempC: -9, lowC: -13, highC: -6, condition: 'MOSTLY CLOUDY' },
  { id: 'c2', rank: 2, city: 'Novosibirsk', country: 'RUSSIA', population: '1.6M', tempC: -4, lowC: -8, highC: -2, condition: 'MOSTLY CLOUDY' },
  { id: 'c3', rank: 3, city: 'Yakutsk', country: 'RUSSIA', population: '0.4M', tempC: -3, lowC: -11, highC: 2, condition: 'CLOUDY' },
  { id: 'c4', rank: 4, city: 'Krasnoyarsk', country: 'RUSSIA', population: '1.1M', tempC: -2, lowC: -4, highC: 5, condition: 'CLOUDY' },
  { id: 'c5', rank: 5, city: 'Omsk', country: 'RUSSIA', population: '1.2M', tempC: -1, lowC: -5, highC: 2, condition: 'PARTLY CLOUDY' },
];

export const getRangeCities = (): CityWeather[] => [
  { id: 'r1', rank: 1, city: 'Chihuahua', country: 'MEXICO', population: '0.9M', tempC: 20, lowC: 11, highC: 31, condition: 'CLEAR' },
  { id: 'r2', rank: 2, city: 'Torreón', country: 'MEXICO', population: '0.7M', tempC: 18, lowC: 15, highC: 33, condition: 'CLEAR' },
  { id: 'r3', rank: 3, city: 'Quetta', country: 'PAKISTAN', population: '1.1M', tempC: 17, lowC: 10, highC: 27, condition: 'CLEAR' },
  { id: 'r4', rank: 4, city: 'Albuquerque', country: 'UNITED STATES', population: '0.6M', tempC: 17, lowC: 5, highC: 22, condition: 'CLEAR' },
  { id: 'r5', rank: 5, city: 'El Paso', country: 'UNITED STATES', population: '0.7M', tempC: 17, lowC: 11, highC: 28, condition: 'CLEAR' },
];
