'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOTIVATIONS } from '@/lib/progress/constants';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { Button } from '@/components/ui/button';

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (motivationId: string) => {
    setSelected(motivationId);
    progressTracker.saveProgress({ selectedMotivation: motivationId });
    setTimeout(() => {
      router.push('/city');
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24 md:px-32">
      <div className="flex flex-col items-center gap-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center">
          Why Are You Here?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center">
          Choose your motivation to personalize your journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {MOTIVATIONS.map((motivation) => (
          <button
            key={motivation.id}
            onClick={() => handleSelect(motivation.id)}
            className={`bg-gray-50 border-2 rounded-3xl p-10 flex flex-col gap-5 text-left transition-all hover:border-red-600 hover:shadow-lg ${
              selected === motivation.id ? 'border-red-600 shadow-lg' : 'border-gray-200'
            }`}
          >
            <span className="text-6xl">{motivation.icon}</span>
            <h3 className="text-3xl font-bold text-gray-900">{motivation.label}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{motivation.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
