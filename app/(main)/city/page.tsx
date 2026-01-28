'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CITIES } from '@/lib/progress/constants';
import { progressTracker } from '@/lib/progress/progress-tracker';

export default function CityPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (cityId: string) => {
    setSelected(cityId);
    progressTracker.saveProgress({ selectedCity: cityId });
    setTimeout(() => {
      router.push('/dashboard');
    }, 300);
  };

  const getDifficultyBadge = (difficulty: string) => {
    const styles = {
      easy: 'bg-green-500 text-white',
      medium: 'bg-yellow-400 text-yellow-900',
      hard: 'bg-red-500 text-white',
    };
    return styles[difficulty as keyof typeof styles] || styles.medium;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24 md:px-32">
      <div className="flex flex-col items-center gap-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center">
          Choose Your City
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center">
          Each city has its own vibe. Pick your base.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 w-full max-w-6xl">
        {CITIES.map((city) => (
          <button
            key={city.id}
            onClick={() => handleSelect(city.id)}
            className={`rounded-2xl p-8 flex flex-col gap-3 justify-end h-72 text-left transition-all hover:scale-105 ${
              selected === city.id ? 'ring-4 ring-white' : ''
            }`}
            style={{ backgroundColor: city.color }}
          >
            <h3 className="text-3xl font-extrabold text-white">{city.name}</h3>
            <p className="text-base text-white/80">{city.description}</p>
            <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold w-fit ${getDifficultyBadge(city.difficulty)}`}>
              {city.difficulty.charAt(0).toUpperCase() + city.difficulty.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
