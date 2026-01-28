'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { progressTracker } from '@/lib/progress/progress-tracker';
import { ModuleContent, Lesson } from '@/lib/content/modules';

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

  // Check if lessons are structured objects or simple strings
  const isStructuredLesson = (lesson: Lesson | string): lesson is Lesson => {
    return typeof lesson === 'object' && 'title' in lesson;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50/20 px-6 py-20 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="animate-fade-in-up opacity-0 mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 text-balance">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Lessons */}
        <div className="mb-16 flex flex-col gap-8">
          {content.lessons.map((lesson, index) => {
            if (isStructuredLesson(lesson)) {
              // Render structured lesson with details
              return (
                <div
                  key={index}
                  className={`animate-fade-in-up delay-${(index + 1) * 100} opacity-0 bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl`}
                >
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                    {lesson.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {lesson.content}
                  </p>

                  {lesson.steps && lesson.steps.length > 0 && (
                    <div className="mb-6 bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="text-red-600">📋</span> Steps:
                      </h4>
                      <ol className="space-y-3">
                        {lesson.steps.map((step, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed flex-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {lesson.tips && lesson.tips.length > 0 && (
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-xl">
                      <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                        💡 Pro Tips:
                      </h4>
                      <ul className="space-y-2">
                        {lesson.tips.map((tip, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="text-amber-600 flex-shrink-0">•</span>
                            <span className="text-amber-900 leading-relaxed flex-1">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            } else {
              // Render simple string lesson (backward compatibility)
              return (
                <div key={index} className={`animate-fade-in-up delay-${(index + 1) * 100} opacity-0 flex gap-4 items-start bg-white rounded-2xl p-6 border-2 border-gray-100`}>
                  <div className="w-3 h-3 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-900 leading-relaxed flex-1">
                    {lesson}
                  </p>
                </div>
              );
            }
          })}
        </div>

        {/* Callout Box */}
        <div className={`animate-scale-in delay-400 opacity-0 rounded-3xl border-2 p-8 mb-16 ${getCalloutStyle(content.callout.type)}`}>
          <h3 className="text-2xl font-display font-bold mb-4">
            {content.callout.title}
          </h3>
          <p className="text-lg leading-relaxed">
            {content.callout.content}
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in delay-500 opacity-0 flex justify-center">
          <Button
            onClick={handleComplete}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-7 text-xl font-bold rounded-2xl red-glow transition-all duration-300 hover:scale-105"
          >
            {content.cta} →
          </Button>
        </div>
      </div>
    </div>
  );
}
