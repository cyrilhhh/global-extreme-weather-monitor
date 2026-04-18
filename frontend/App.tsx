import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { WeatherList } from './components/WeatherList.tsx';
import { Unit, CityWeather } from './types.ts';
import { 
  mockUserLocation, 
  getWarmestCities, 
  getColdestCities, 
  getRangeCities 
} from './mockData.ts';
import { t } from './translations.ts';

const App: React.FC = () => {
  const [unit, setUnit] = useState<Unit>('C');
  const [language, setLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(true);
  
  const [warmest, setWarmest] = useState<CityWeather[]>([]);
  const [coldest, setColdest] = useState<CityWeather[]>([]);
  const [range, setRange] = useState<CityWeather[]>([]);

  const loadData = useCallback(() => {
    setIsLoading(true);
    // Simulate network delay to show skeleton state
    setTimeout(() => {
      setWarmest(getWarmestCities());
      setColdest(getColdestCities());
      setRange(getRangeCities());
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleToggleUnit = (newUnit: Unit) => {
    setUnit(newUnit);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12">
        <Header 
          unit={unit} 
          onToggleUnit={handleToggleUnit} 
          onRefresh={loadData}
          location={mockUserLocation}
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Full width separator */}
      <div className="w-full border-t border-text-main mb-12"></div>

      <main className="max-w-[1600px] mx-auto w-full px-6 lg:px-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <WeatherList 
            title={t(language, 'warmest')} 
            data={warmest} 
            unit={unit} 
            type="warmest"
            isLoading={isLoading}
            language={language}
          />
          <WeatherList 
            title={t(language, 'coldest')} 
            data={coldest} 
            unit={unit} 
            type="coldest"
            isLoading={isLoading}
            language={language}
          />
          <WeatherList 
            title={t(language, 'range')} 
            data={range} 
            unit={unit} 
            type="range"
            isLoading={isLoading}
            language={language}
          />
        </div>
      </main>

      <footer className="mt-24 pb-8 text-center font-mono text-[10px] text-text-muted tracking-widest uppercase">
        <p>{t(language, 'footer')} {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
