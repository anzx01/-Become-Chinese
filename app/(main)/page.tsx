import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 md:px-16 md:py-48 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-6xl">
          {/* Badge */}
          <div className="animate-fade-in opacity-0 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-red-100 ink-shadow">
            <span className="text-3xl">🇨🇳</span>
            <span className="text-sm font-semibold text-red-700 tracking-wide uppercase">Cultural Onboarding</span>
          </div>

          {/* Main Title with Staggered Animation */}
          <h1 className="animate-fade-in-up delay-100 opacity-0 text-6xl md:text-8xl font-display font-black text-center text-gray-900 leading-[1.1] text-balance">
            Thinking About<br />
            <span className="text-gradient-red">Becoming Chinese</span>?
          </h1>

          {/* Subtitle */}
          <div className="animate-fade-in-up delay-200 opacity-0 text-xl md:text-2xl text-center text-gray-700 max-w-3xl leading-relaxed space-y-2">
            <p>Not just visiting China. Not just living in China.</p>
            <p className="font-semibold text-gray-900">
              Actually understanding how Chinese people eat, live, move, think, and survive — in real life.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in delay-300 opacity-0 flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-7 text-lg font-bold rounded-2xl red-glow transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-7 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Social Proof */}
          <p className="animate-fade-in delay-400 opacity-0 text-sm text-gray-500 text-center max-w-2xl">
            Used by <span className="font-bold text-red-600">10,000+</span> curious future Chinese •
            Built with real experiences from locals, expats, and immigrants
          </p>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
      </section>

      {/* Value Props Section */}
      <section className="relative px-6 py-24 md:px-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 text-center text-balance">
              What You'll Master
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500"></div>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              From chopsticks to social etiquette, we've got you covered
            </p>
          </div>

          {/* Module Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard
              icon="🍜"
              title="Food Survival"
              description="Master chopsticks, ordering, and dining etiquette"
              color="from-amber-50 to-orange-50"
              delay="delay-100"
            />
            <ModuleCard
              icon="🏥"
              title="Healthcare"
              description="Navigate hospitals, pharmacies, and medical systems"
              color="from-red-50 to-pink-50"
              delay="delay-200"
            />
            <ModuleCard
              icon="🚇"
              title="Transport"
              description="Navigate metros, taxis, and bike-sharing like a pro"
              color="from-blue-50 to-cyan-50"
              delay="delay-300"
            />
            <ModuleCard
              icon="💬"
              title="Language"
              description="Essential phrases and survival Mandarin"
              color="from-purple-50 to-violet-50"
              delay="delay-100"
            />
            <ModuleCard
              icon="💰"
              title="Money & Apps"
              description="WeChat Pay, Alipay, and digital life essentials"
              color="from-green-50 to-emerald-50"
              delay="delay-200"
            />
            <ModuleCard
              icon="🧠"
              title="Mindset"
              description="Understanding cultural values and thinking patterns"
              color="from-indigo-50 to-blue-50"
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-6 py-32 md:px-16 md:py-40 bg-gradient-to-br from-gray-900 via-red-950 to-black text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight">
            Ready to <span className="text-gradient-gold">Understand</span> China?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Complete your cultural onboarding in 5-10 minutes. No login required.
          </p>
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-16 py-8 text-xl font-bold rounded-2xl red-glow transition-all duration-300 hover:scale-105"
            >
              Begin Your Journey →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ModuleCard({
  icon,
  title,
  description,
  color,
  delay
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay: string;
}) {
  return (
    <div className={`animate-fade-in-up ${delay} opacity-0 group relative bg-gradient-to-br ${color} rounded-3xl p-8 border-2 border-gray-100 hover:border-red-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}>
      <div className="flex flex-col gap-4">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-3xl"></div>
    </div>
  );
}
