import Link from 'next/link';
import Image from 'next/image';
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

          {/* CTA Button */}
          <div className="animate-scale-in delay-300 opacity-0 mt-4">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-7 text-lg font-bold rounded-2xl red-glow transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <p className="animate-fade-in delay-400 opacity-0 text-sm text-gray-500 text-center max-w-2xl">
            A practical orientation guide for newcomers, travelers, students,
            and long-term residents preparing for everyday life in China
          </p>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
      </section>

      {/* Image Showcase Section - Cherry Blossoms */}
      <section className="relative px-6 py-24 md:px-16 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Experience China</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Discover the Beauty of <span className="text-gradient-red">Chinese Culture</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                From breathtaking natural landscapes to ancient traditions, China offers experiences that will transform your understanding of this incredible country. Learn to appreciate the subtle beauty in everyday moments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mt-1">✓</span>
                  <span className="text-gray-700">Understand seasonal festivals and their significance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mt-1">✓</span>
                  <span className="text-gray-700">Navigate cultural customs with confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mt-1">✓</span>
                  <span className="text-gray-700">Connect with locals on a deeper level</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/culture-landscape.svg"
                    alt="Original illustration of spring hills and cultural travel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="relative px-6 py-24 md:px-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 text-center text-balance">
              What You Will Master
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500"></div>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              From chopsticks to social etiquette, this guide covers the essentials
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

      {/* Image Showcase Section - Shanghai Skyline */}
      <section className="relative px-6 py-24 md:px-16 md:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/modern-city.svg"
                    alt="Original illustration of a modern riverside Chinese city"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Modern China</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Navigate <span className="text-gradient-red">Urban Life</span> with Confidence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cities in China are technological marvels where ancient traditions meet cutting-edge innovation. Master the digital ecosystem, transportation networks, and urban lifestyle that define modern Chinese living.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">13+</div>
                  <div className="text-sm text-gray-600">Essential Modules</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Practical Content</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">5-10</div>
                  <div className="text-sm text-gray-600">Minutes to Complete</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-red-600">Free</div>
                  <div className="text-sm text-gray-600">No Login Required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative px-6 py-24 md:px-16 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 text-center text-balance">
              Ways This Guide Helps
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Prepare before arrival with a quick map of daily basics: food, housing, transport, payments, and useful apps."
              author="Move Prep"
              role="Before you land"
              delay="delay-100"
            />
            <TestimonialCard
              quote="Use the modules as a checklist for your first month, from phone setup to hospital registration and metro habits."
              author="First Month"
              role="Getting settled"
              delay="delay-200"
            />
            <TestimonialCard
              quote="Build context for work, social life, dating norms, festivals, and the small etiquette details people rarely explain."
              author="Culture Context"
              role="Longer stays"
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
          <p className="text-sm text-gray-400 mt-4">
            Verify current local rules before making legal, medical, financial, or immigration decisions
          </p>
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

function TestimonialCard({
  quote,
  author,
  role,
  delay
}: {
  quote: string;
  author: string;
  role: string;
  delay: string;
}) {
  return (
    <div className={`animate-fade-in-up ${delay} opacity-0 bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl`}>
      <div className="flex flex-col gap-6">
        {/* Quote Icon */}
        <div className="text-5xl text-red-600 opacity-20" aria-hidden="true">&quot;</div>

        {/* Quote Text */}
        <p className="text-lg text-gray-700 leading-relaxed -mt-8">
          {quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-amber-400 flex items-center justify-center text-white font-bold text-xl">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{author}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
