import React from 'react';
import { ThermometerSun, ThermometerSnowflake, ArrowUpDown } from 'lucide-react';
import { CityWeather, Unit } from '../types.ts';
import { WeatherRow } from './WeatherRow.tsx';
import { SkeletonRow } from './SkeletonRow.tsx';
import { t } from '../translations.ts';

interface WeatherListProps {
  title: string;
  data: CityWeather[];
  unit: Unit;
  type: 'warmest' | 'coldest' | 'range';
  isLoading: boolean;
  language: string;
}

export const WeatherList: React.FC<WeatherListProps> = ({ title, data, unit, type, isLoading, language }) => {
  
  const getIcon = () => {
    switch (type) {
      case 'warmest': return <ThermometerSun size={28} className="text-accent-hot" strokeWidth={1.5} />;
      case 'coldest': return <ThermometerSnowflake size={28} className="text-accent-cold" strokeWidth={1.5} />;
      case 'range': return <ArrowUpDown size={28} className="text-accent-range" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Title Area */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-text-main">
        {getIcon()}
        <h2 className="font-serif italic text-3xl text-text-main">
          {title}
        </h2>
      </div>

      {/* Table Header */}
      <div className="flex items-center py-2 font-mono text-[10px] text-text-muted tracking-widest uppercase border-b border-text-light/40">
        <div className="w-10">#</div>
        <div className="flex-1">{t(language, 'cityCountry')}</div>
        <div className="w-24">{t(language, 'pop')}</div>
        <div className="w-28 text-right">{type === 'range' ? t(language, 'deltaRange') : t(language, 'tempRange')}</div>
      </div>

      {/* List Content */}
      <div className="flex flex-col">
        {isLoading ? (
          // Render 10 skeletons
          Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={`skeleton-${i}`} />)
        ) : (
          data.map((city) => (
            <WeatherRow 
              key={city.id} 
              data={city} 
              unit={unit} 
              type={type} 
              language={language}
            />
          ))
        )}
      </div>
    </div>
  );
};
