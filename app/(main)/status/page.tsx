'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { UserProgress } from '@/lib/progress/types';

export default function StatusPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(progressTracker.getProgress());
  }, []);

  const handleReset = () => {
    progressTracker.resetProgress();
    window.location.href = '/';
  };

  if (!progress) return null;

  const completionPercentage = Math.round((progress.completedModules.length / 12) * 100);
  const timeInvested = '8 min'; // Static for MVP

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-8 py-24 md:px-32">
      <div className="flex flex-col items-center gap-12 max-w-4xl">
        {/* Badge */}
        <div className="text-9xl">🎉</div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white text-center">
          Congratulations!
        </h1>

        {/* Subtitle */}
        <p className="text-3xl text-gray-400 text-center">
          You've Completed Your Cultural Onboarding
        </p>

        {/* Stats */}
        <div className="flex gap-10 md:gap-16 justify-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-extrabold text-white">
              {progress.completedModules.length}
            </p>
            <p className="text-base text-gray-400">Modules Completed</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-extrabold text-green-500">
              {completionPercentage}%
            </p>
            <p className="text-base text-gray-400">Journey Progress</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-extrabold text-white">
              {timeInvested}
            </p>
            <p className="text-base text-gray-400">Time Invested</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Button
            onClick={handleReset}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg font-bold rounded-xl"
          >
            Start Over
          </Button>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-6 text-lg font-bold rounded-xl"
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
