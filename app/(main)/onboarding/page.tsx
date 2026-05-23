'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOTIVATIONS } from '@/lib/progress/constants';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { Button } from '@/components/ui/button';

export default function OnboardingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (motivationId: string) => {
    setSelected(prev =>
      prev.includes(motivationId)
        ? prev.filter(id => id !== motivationId)
        : [...prev, motivationId]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      progressTracker.saveProgress({ selectedMotivation: selected });
      router.push('/city');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-amber-50/30 flex flex-col items-center justify-center px-6 py-24 md:px-16">
      <div className="flex flex-col items-center gap-12 max-w-6xl w-full">
        {/* Header */}
        <div className="animate-fade-in-up opacity-0 flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 border border-red-200">
            <span className="text-sm font-semibold text-red-700 tracking-wide uppercase">Step 1 of 3</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 text-balance leading-tight">
            Why Do You Want to<br />
            <span className="text-gradient-red">Become Chinese</span>?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            There is no right answer. Just be honest.
            <br />
            <span className="text-base text-gray-500 mt-2 block">(Select all that apply)</span>
          </p>
        </div>

        {/* Motivation Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
          {MOTIVATIONS.map((motivation, index) => {
            const isSelected = selected.includes(motivation.id);
            return (
              <button
                key={motivation.id}
                onClick={() => handleToggle(motivation.id)}
                className={`animate-scale-in delay-${(index + 1) * 100} opacity-0 group relative bg-white rounded-3xl p-10 border-2 transition-all duration-300 hover:scale-[1.02] ${
                  isSelected
                    ? 'border-red-600 shadow-2xl red-glow'
                    : 'border-gray-200 hover:border-red-300 hover:shadow-xl'
                }`}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute top-6 right-6 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="flex flex-col gap-5 text-left">
                  <span className={`text-7xl transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {motivation.icon}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-gray-900">
                    {motivation.label}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {motivation.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-tr-3xl transition-opacity duration-300 ${
                  isSelected ? 'opacity-100 bg-gradient-to-tr from-red-500/10 to-transparent' : 'opacity-0'
                }`}></div>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="animate-fade-in delay-500 opacity-0 flex flex-col items-center gap-4">
          <Button
            onClick={handleContinue}
            disabled={selected.length === 0}
            size="lg"
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-16 py-7 text-xl font-bold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 hover:scale-105 red-glow"
          >
            Continue to City Selection →
          </Button>
          {selected.length > 0 && (
            <p className="text-sm text-gray-500">
              {selected.length} {selected.length === 1 ? 'motivation' : 'motivations'} selected
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
