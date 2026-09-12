import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, MapPin, RefreshCw } from 'lucide-react';
import { fetchWeather } from '../services/api';

export default function WeatherWidget({ compact = false }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchWeather('Seville');
      setWeather(data);
    } catch (e) {
      console.warn('Error loading weather widget:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  const getWeatherIcon = (condition = '') => {
    const c = condition.toLowerCase();
    if (c.includes('lluvia') || c.includes('rain')) return <CloudRain className="w-4 h-4 text-[#00E5FF]" />;
    if (c.includes('nube') || c.includes('cloud') || c.includes('cubierto')) return <Cloud className="w-4 h-4 text-gray-400" />;
    return <Sun className="w-4 h-4 text-[#FFE600] animate-spin-slow" />;
  };

  if (loading && !weather) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 border border-[#222] text-xs text-gray-400 font-mono shadow-sm">
        <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00FF66]" />
        <span>syncing weather...</span>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-[#222] text-xs font-mono text-gray-300 shadow-sm hover:border-[#00FF66]/50 transition">
        <span className="flex items-center text-gray-400 gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#00FF66]" />
          <span>{weather?.city || 'Sevilla, ES'}</span>
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
        <span className="font-bold text-white">{weather?.temp ?? 24}°C</span>
        {getWeatherIcon(weather?.condition)}
      </div>
    );
  }

  return (
    <div className="bg-[#121212]/90 border border-[#222] hover:border-[#00FF66]/40 transition duration-300 rounded-2xl p-4 sm:p-5 shadow-[0_0_20px_rgba(0,0,0,0.5)] font-mono">
      <div className="flex items-center justify-between mb-3 border-b border-[#222] pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-black border border-[#222] flex items-center justify-center text-[#00FF66]">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase">{weather?.city || 'Sevilla, ES'}</h4>
            <span className="text-[10px] text-[#00FF66] opacity-80">// OPENWEATHER_API</span>
          </div>
        </div>
        <button
          onClick={loadWeather}
          className="p-1 rounded-lg hover:bg-black text-gray-400 hover:text-[#00FF66] transition cursor-pointer"
          title="Actualizar clima"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-black border border-[#222]">
            {getWeatherIcon(weather?.condition)}
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono tracking-tight">
              {weather?.temp ?? 24}<span className="text-sm font-normal text-gray-400">°C</span>
            </div>
            <p className="text-xs text-gray-300 capitalize font-mono">{weather?.condition || 'Despejado'}</p>
          </div>
        </div>

        <div className="text-right space-y-1 text-[11px] font-mono text-gray-400">
          <div className="flex items-center justify-end gap-1.5">
            <Droplets className="w-3 h-3 text-[#00E5FF]" />
            <span>Humedad: <strong className="text-white">{weather?.humidity ?? 45}%</strong></span>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <Wind className="w-3 h-3 text-[#00FF66]" />
            <span>Viento: <strong className="text-white">{weather?.windSpeed ?? 12} km/h</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
