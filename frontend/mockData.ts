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
  { id: 'w6', rank: 6, city: 'Kuwait City', country: 'KUWAIT', population: '3.0M', tempC: 37, lowC: 28, highC: 38, condition: 'SUNNY' },
  { id: 'w7', rank: 7, city: 'Baghdad', country: 'IRAQ', population: '7.1M', tempC: 36, lowC: 25, highC: 37, condition: 'CLEAR' },
  { id: 'w8', rank: 8, city: 'Riyadh', country: 'SAUDI ARABIA', population: '7.6M', tempC: 35, lowC: 22, highC: 36, condition: 'CLEAR' },
  { id: 'w9', rank: 9, city: 'Phoenix', country: 'UNITED STATES', population: '1.6M', tempC: 34, lowC: 20, highC: 35, condition: 'SUNNY' },
  { id: 'w10', rank: 10, city: 'Dubai', country: 'UNITED ARAB EMIRATES', population: '3.3M', tempC: 33, lowC: 24, highC: 34, condition: 'SUNNY' },
];

export const getColdestCities = (): CityWeather[] => [
  { id: 'c1', rank: 1, city: 'Tomsk', country: 'RUSSIA', population: '0.6M', tempC: -9, lowC: -13, highC: -6, condition: 'MOSTLY CLOUDY' },
  { id: 'c2', rank: 2, city: 'Novosibirsk', country: 'RUSSIA', population: '1.6M', tempC: -4, lowC: -8, highC: -2, condition: 'MOSTLY CLOUDY' },
  { id: 'c3', rank: 3, city: 'Yakutsk', country: 'RUSSIA', population: '0.4M', tempC: -3, lowC: -11, highC: 2, condition: 'CLOUDY' },
  { id: 'c4', rank: 4, city: 'Krasnoyarsk', country: 'RUSSIA', population: '1.1M', tempC: -2, lowC: -4, highC: 5, condition: 'CLOUDY' },
  { id: 'c5', rank: 5, city: 'Omsk', country: 'RUSSIA', population: '1.2M', tempC: -1, lowC: -5, highC: 2, condition: 'PARTLY CLOUDY' },
  { id: 'c6', rank: 6, city: 'Harbin', country: 'CHINA', population: '5.2M', tempC: 0, lowC: -6, highC: 3, condition: 'CLEAR' },
  { id: 'c7', rank: 7, city: 'Ulaanbaatar', country: 'MONGOLIA', population: '1.4M', tempC: 1, lowC: -5, highC: 4, condition: 'PARTLY CLOUDY' },
  { id: 'c8', rank: 8, city: 'Yellowknife', country: 'CANADA', population: '0.02M', tempC: 2, lowC: -3, highC: 5, condition: 'CLEAR' },
  { id: 'c9', rank: 9, city: 'Astana', country: 'KAZAKHSTAN', population: '1.1M', tempC: 3, lowC: -2, highC: 6, condition: 'CLOUDY' },
  { id: 'c10', rank: 10, city: 'Winnipeg', country: 'CANADA', population: '0.7M', tempC: 4, lowC: -1, highC: 7, condition: 'SNOW' },
];

export const getRangeCities = (): CityWeather[] => [
  { id: 'r1', rank: 1, city: 'Chihuahua', country: 'MEXICO', population: '0.9M', tempC: 20, lowC: 11, highC: 31, condition: 'CLEAR' },
  { id: 'r2', rank: 2, city: 'Torreón', country: 'MEXICO', population: '0.7M', tempC: 18, lowC: 15, highC: 33, condition: 'CLEAR' },
  { id: 'r3', rank: 3, city: 'Quetta', country: 'PAKISTAN', population: '1.1M', tempC: 17, lowC: 10, highC: 27, condition: 'CLEAR' },
  { id: 'r4', rank: 4, city: 'Albuquerque', country: 'UNITED STATES', population: '0.6M', tempC: 17, lowC: 5, highC: 22, condition: 'CLEAR' },
  { id: 'r5', rank: 5, city: 'El Paso', country: 'UNITED STATES', population: '0.7M', tempC: 17, lowC: 11, highC: 28, condition: 'CLEAR' },
  { id: 'r6', rank: 6, city: 'Reno', country: 'UNITED STATES', population: '0.3M', tempC: 16, lowC: 4, highC: 20, condition: 'CLEAR' },
  { id: 'r7', rank: 7, city: 'Kabul', country: 'AFGHANISTAN', population: '4.4M', tempC: 16, lowC: 2, highC: 18, condition: 'SUNNY' },
  { id: 'r8', rank: 8, city: 'Denver', country: 'UNITED STATES', population: '0.7M', tempC: 15, lowC: -2, highC: 13, condition: 'PARTLY CLOUDY' },
  { id: 'r9', rank: 9, city: 'Tehran', country: 'IRAN', population: '8.6M', tempC: 15, lowC: 12, highC: 27, condition: 'CLEAR' },
  { id: 'r10', rank: 10, city: 'Calgary', country: 'CANADA', population: '1.3M', tempC: 14, lowC: -5, highC: 9, condition: 'CLOUDY' },
];
