import React from 'react';
import { MapPin, Users, ArrowUpDown } from 'lucide-react';
import { CityWeather, Unit } from '../types.ts';
import { convertTemp, formatTemp } from '../utils.ts';
import { t } from '../translations.ts';

interface WeatherRowProps {
  data: CityWeather;
  unit: Unit;
  type: 'warmest' | 'coldest' | 'range';
  language: string;
}

export const WeatherRow: React.FC<WeatherRowProps> = ({ data, unit, type, language }) => {
  const currentTemp = convertTemp(data.tempC, unit);
  const lowTemp = convertTemp(data.lowC, unit);
  const highTemp = convertTemp(data.highC, unit);
  
  // For range, the mock data tempC is actually the range value.
  // In a real app, we'd calculate it, but here we use the mock value directly for display.
  const displayMainValue = type === 'range' 
    ? `${Math.round(currentTemp)}°` 
    : `${formatTemp(currentTemp)}°${unit}`;

  let highlightColorClass = '';
  if (type === 'warmest') highlightColorClass = 'text-accent-hot';
  if (type === 'coldest') highlightColorClass = 'text-accent-cold';
  if (type === 'range') highlightColorClass = 'text-accent-range';

  // Keep the search query in the original language (English) for better Google Maps accuracy
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.city + ', ' + data.country)}`;

  return (
    <div className="flex items-center py-5 border-b border-text-light/40 hover:bg-black/5 transition-colors -mx-2 px-2 rounded-sm">
      
      {/* Rank */}
      <div className="w-10 font-mono text-sm text-text-muted">
        {data.rank.toString().padStart(2, '0')}
      </div>

      {/* City & Country */}
      <div className="flex-1 min-w-0 pr-4">
        <div className="font-sans text-lg font-medium text-text-main truncate">
          {t(language, data.city)}
        </div>
        <a 
          href={mapSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-1 text-text-muted font-mono text-[10px] tracking-widest uppercase hover:text-text-main transition-colors cursor-pointer group"
          title="View on Google Maps"
        >
          <MapPin size={10} className="group-hover:scale-110 transition-transform" />
          <span className="truncate group-hover:underline">{t(language, data.country)}</span>
        </a>
      </div>

      {/* Population */}
      <div className="w-24 flex items-center gap-1.5 text-text-muted font-mono text-xs">
        <Users size={12} />
        <span>{data.population}</span>
      </div>

      {/* Temperature Data */}
      <div className="w-28 flex flex-col items-end text-right">
        <div className={`font-mono text-2xl font-bold flex items-center gap-1 ${highlightColorClass}`}>
          {type === 'range' && <ArrowUpDown size={16} strokeWidth={3} />}
          {displayMainValue}
        </div>
        <div className="font-mono text-[10px] text-text-muted mt-1 tracking-wider">
          {Math.round(lowTemp)}° ~ {Math.round(highTemp)}°
        </div>
        <div className="font-mono text-[9px] text-text-muted mt-0.5 uppercase tracking-widest">
          {t(language, data.condition)}
        </div>
      </div>

    </div>
  );
};
