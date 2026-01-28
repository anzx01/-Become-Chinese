'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { MODULES } from '@/lib/progress/constants';
import { UserProgress } from '@/lib/progress/types';

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(progressTracker.getProgress());
  }, []);

  if (!progress) return null;

  const contentModules = MODULES.filter(m => !['onboarding', 'city', 'dashboard', 'status'].includes(m.id));

  const getModuleStatus = (moduleId: string) => {
    if (progress.completedModules.includes(moduleId)) {
      return { label: 'Completed', color: 'bg-green-500 text-white' };
    }
    const moduleIndex = contentModules.findIndex(m => m.id === moduleId);
    const completedCount = contentModules.filter(m => progress.completedModules.includes(m.id)).length;
    if (moduleIndex <= completedCount) {
      return { label: 'In Progress', color: 'bg-yellow-400 text-yellow-900' };
    }
    return { label: 'Locked', color: 'bg-gray-300 text-gray-600' };
  };

  return (
    <div className="min-h-screen px-8 py-20 md:px-32">
      <div className="flex flex-col gap-3 mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Your Journey Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Track your progress and explore modules
        </p>
      </div>

      {/* Skill Levels */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skill Levels</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {Object.entries(progress.skillLevels).map(([category, level]) => (
            <div key={category} className={`rounded-2xl p-6 flex flex-col gap-4 ${
              category === 'food' ? 'bg-amber-100' :
              category === 'living' ? 'bg-blue-100' :
              category === 'transport' ? 'bg-purple-100' :
              'bg-green-100'
            }`}>
              <h3 className={`text-xl font-bold capitalize ${
                category === 'food' ? 'text-amber-900' :
                category === 'living' ? 'text-blue-900' :
                category === 'transport' ? 'text-purple-900' :
                'text-green-900'
              }`}>
                {category}
              </h3>
              <p className={`text-4xl font-extrabold ${
                category === 'food' ? 'text-amber-900' :
                category === 'living' ? 'text-blue-900' :
                category === 'transport' ? 'text-purple-900' :
                'text-green-900'
              }`}>
                Level {Math.floor(level / 20)}
              </p>
              <div className={`w-full h-2 rounded-full ${
                category === 'food' ? 'bg-amber-200' :
                category === 'living' ? 'bg-blue-200' :
                category === 'transport' ? 'bg-purple-200' :
                'bg-green-200'
              }`}>
                <div
                  className={`h-2 rounded-full ${
                    category === 'food' ? 'bg-amber-600' :
                    category === 'living' ? 'bg-blue-600' :
                    category === 'transport' ? 'bg-purple-600' :
                    'bg-green-600'
                  }`}
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Modules */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Modules</h2>
        <div className="flex flex-col gap-4">
          {contentModules.map((module) => {
            const status = getModuleStatus(module.id);
            const isLocked = status.label === 'Locked';

            return (
              <Link
                key={module.id}
                href={isLocked ? '#' : `/${module.slug}`}
                className={`bg-gray-50 rounded-2xl p-6 flex items-center gap-5 transition-all ${
                  isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:bg-gray-100'
                }`}
                onClick={(e) => isLocked && e.preventDefault()}
              >
                <span className="text-5xl">
                  {module.category === 'food' ? '🥢' :
                   module.category === 'living' ? '🏠' :
                   module.category === 'transport' ? '🚇' :
                   '🧠'}
                </span>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${isLocked ? 'text-gray-400' : 'text-gray-900'}`}>
                    {module.title}
                  </h3>
                  <p className={`text-sm ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
                    {module.category.charAt(0).toUpperCase() + module.category.slice(1)} module
                  </p>
                </div>
                <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${status.color}`}>
                  {status.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
