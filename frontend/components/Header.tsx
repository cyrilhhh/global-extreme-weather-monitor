import React, { useState } from 'react';
import { Globe, HelpCircle, Navigation, Languages, RefreshCw } from 'lucide-react';
import { Unit, UserLocation } from '../types.ts';
import { convertTemp, formatTemp } from '../utils.ts';
import { languages, t } from '../translations.ts';

interface HeaderProps {
  unit: Unit;
  onToggleUnit: (unit: Unit) => void;
  onRefresh: () => void;
  location: UserLocation;
  language: string;
  onLanguageChange: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ unit, onToggleUnit, onRefresh, location, language, onLanguageChange }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const displayTemp = formatTemp(convertTemp(location.tempC, unit));

  const currentLangName = languages.find(l => l.code === language)?.name || 'English';
  // Keep the search query in the original language (English) for better Google Maps accuracy
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.city + ', ' + location.country)}`;

  return (
    <header className="pt-8 pb-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-text-muted font-mono text-xs tracking-widest uppercase">
          <Globe size={14} />
          <span>{t(language, 'monitor')}</span>
          <div 
            className="relative ml-1 cursor-help"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <HelpCircle size={14} />
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#111] text-white p-4 rounded-md shadow-xl z-50 font-mono text-xs leading-relaxed normal-case tracking-normal">
                {t(language, 'tooltip')}
              </div>
            )}
          </div>
        </div>

        {/* C/F Toggle */}
        <div className="flex items-center bg-[#E8E6DF] rounded-full p-1 font-mono text-xs">
          <button
            onClick={() => onToggleUnit('C')}
            className={`px-4 py-1.5 rounded-full transition-colors ${unit === 'C' ? 'bg-text-main text-bg' : 'text-text-muted hover:text-text-main'}`}
          >
            °C
          </button>
          <button
            onClick={() => onToggleUnit('F')}
            className={`px-4 py-1.5 rounded-full transition-colors ${unit === 'F' ? 'bg-text-main text-bg' : 'text-text-muted hover:text-text-main'}`}
          >
            °F
          </button>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="font-serif italic text-5xl md:text-6xl text-text-main mb-8 tracking-tight">
        {t(language, 'title')}
      </h1>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        
        {/* Location Info */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-text-muted tracking-wider uppercase">
          <div className="flex items-center gap-2 text-text-main">
            <Navigation size={14} className="transform -rotate-45" />
            <a 
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-text-main pb-0.5 font-medium hover:text-accent-hot transition-colors"
              title="View on Google Maps"
            >
              {t(language, location.city)}, {t(language, location.country)}
            </a>
          </div>
          <span className="text-text-light">|</span>
          <span className="text-text-main font-medium">{displayTemp}°{unit}</span>
          <span className="text-text-light">|</span>
          <span className="text-text-main font-medium">{t(language, location.condition)}</span>
          <span className="text-text-light">|</span>
          <span>{location.lat}, {location.lon}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-text-light text-text-main hover:bg-text-light/20 transition-colors"
            >
              <span>{currentLangName.split(' ')[0]}</span>
              <Languages size={14} />
            </button>
            
            {showLangMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowLangMenu(false)}></div>
                <div className="absolute right-0 mt-2 w-48 bg-bg border border-text-light/40 rounded-lg shadow-xl z-50 py-2 max-h-64 overflow-y-auto">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { onLanguageChange(lang.code); setShowLangMenu(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-mono hover:bg-black/5 transition-colors ${language === lang.code ? 'text-text-main font-bold' : 'text-text-muted'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button 
            onClick={onRefresh}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-text-main text-bg hover:bg-text-main/90 transition-colors"
          >
            <RefreshCw size={14} />
            <span>{t(language, 'refresh')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
