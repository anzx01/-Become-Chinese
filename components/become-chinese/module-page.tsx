'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { ModuleContent } from '@/lib/content/modules';

interface ModulePageProps {
  moduleId: string;
  content: ModuleContent;
}

export default function ModulePage({ moduleId, content }: ModulePageProps) {
  const router = useRouter();

  const handleComplete = () => {
    progressTracker.markModuleComplete(moduleId);
    const nextModule = progressTracker.getNextModule();

    if (nextModule) {
      progressTracker.setCurrentModule(nextModule.id);
      router.push(`/${nextModule.slug}`);
    } else {
      router.push('/status');
    }
  };

  const getCalloutStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-amber-50 border-amber-300 text-amber-900';
      case 'tip':
        return 'bg-blue-50 border-blue-300 text-blue-900';
      case 'fact':
        return 'bg-purple-50 border-purple-300 text-purple-900';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-900';
    }
  };

  return (
    <div className="min-h-screen px-8 py-20 md:px-48">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-5">
            {content.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Lessons */}
        <div className="mb-12 flex flex-col gap-4">
          {content.lessons.map((lesson, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
              <p className="text-lg text-gray-900 leading-relaxed flex-1">
                {lesson}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className={`rounded-2xl border-2 p-8 mb-12 ${getCalloutStyle(content.callout.type)}`}>
          <h3 className="text-xl font-bold mb-3">
            {content.callout.title}
          </h3>
          <p className="text-base leading-relaxed">
            {content.callout.content}
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            onClick={handleComplete}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg font-bold rounded-xl"
          >
            {content.cta} →
          </Button>
        </div>
      </div>
    </div>
  );
}
