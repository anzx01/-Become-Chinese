import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-8 py-32 md:px-32 md:py-40 gap-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50">
          <span className="text-xl">🇨🇳</span>
          <span className="text-sm font-semibold text-amber-700">Your Cultural Onboarding Starts Here</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 max-w-4xl">
          So You Want to Become Chinese?
        </h1>

        <p className="text-xl md:text-2xl text-center text-gray-600 max-w-3xl leading-relaxed">
          Welcome to the unofficial survival guide for living like a local in China. No fluff. No stereotypes. Just the real deal.
        </p>

        <div className="flex gap-4">
          <Link href="/onboarding">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg font-bold rounded-xl">
              Start Your Journey
            </Button>
          </Link>
          <Button size="lg" variant="secondary" className="px-10 py-6 text-lg font-semibold rounded-xl">
            Learn More
          </Button>
        </div>

        <p className="text-sm text-gray-400">
          No login required • Complete in 5-10 minutes
        </p>
      </section>

      {/* Modules Section */}
      <section className="px-8 py-20 md:px-32 md:py-24 bg-gray-50">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
            What You'll Master
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            From chopsticks to social etiquette, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <ModuleCard icon="🥢" title="Food Survival" description="Master chopsticks, ordering, and dining etiquette" />
          <ModuleCard icon="🚇" title="Transport" description="Navigate metros, taxis, and bike-sharing like a pro" />
          <ModuleCard icon="💬" title="Language" description="Essential phrases and survival Mandarin" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ModuleCard icon="💰" title="Money & Apps" description="WeChat Pay, Alipay, and digital life essentials" />
          <ModuleCard icon="🎭" title="Social Life" description="Making friends, dating, and social norms" />
          <ModuleCard icon="🧠" title="Mindset" description="Understanding cultural values and thinking patterns" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center justify-center px-8 py-24 md:px-32 md:py-32 bg-gray-900 gap-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Ready to Become Chinese?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-center">
          Start your cultural journey now. No signup required.
        </p>
        <Link href="/onboarding">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-lg font-bold rounded-xl">
            Begin Your Journey
          </Button>
        </Link>
      </section>
    </div>
  );
}

function ModuleCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col gap-4">
      <span className="text-5xl">{icon}</span>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
