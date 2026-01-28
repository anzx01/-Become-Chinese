'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { progressTracker } from '@/lib/progress/progress-tracker';

export default function BecomingChinesePage() {
  const router = useRouter();

  const handleUnlock = () => {
    progressTracker.markModuleComplete('becoming-chinese');
    router.push('/status');
  };

  const checklistItems = [
    { id: 1, text: 'You complain like a local', icon: '💬' },
    { id: 2, text: 'You use mobile payment instinctively', icon: '📱' },
    { id: 3, text: 'You argue about food regions', icon: '🍜' },
    { id: 4, text: 'You plan long-term', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24 md:px-32">
      <div className="flex flex-col items-center gap-12 max-w-4xl">
        {/* Badge */}
        <div className="text-9xl">🎖️</div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center">
          Are You Ready to Become Chinese?
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 text-center">
          Check if you've mastered the essentials
        </p>

        {/* Checklist */}
        <div className="w-full flex flex-col gap-4">
          {checklistItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex items-center gap-4"
            >
              <span className="text-4xl">{item.icon}</span>
              <p className="text-xl font-semibold text-gray-900">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleUnlock}
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-7 text-xl font-bold rounded-xl"
        >
          🎉 Unlock "Become Chinese" Status
        </Button>
      </div>
    </div>
  );
}
