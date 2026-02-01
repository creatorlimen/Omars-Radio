import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'O\'MARS Radio - Voices. Identity. Perspective.',
  description:
    'A 24-hour digital radio platform broadcasting news, education, culture, music, and social conversations for African and diaspora audiences.',
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-24 md:py-40 overflow-hidden">
        {/* Wave pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance tracking-tight">
              VOICES. IDENTITY. PERSPECTIVE.
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 text-balance font-semibold">
              A 24-hour digital radio platform broadcasting news, education, culture, music, and social conversations for
              local and diaspora audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/listen-live" variant="secondary">
                ▶ Listen Live Now
              </CTAButton>
              <CTAButton href="/now-playing" variant="primary">
                What's On Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AudioPlayer title="O'MARS Radio Live Stream" isLive={true} />
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-12 text-center uppercase tracking-wide">Quick Access</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/listen-live',
                icon: '🎙️',
                title: 'Listen Live',
                description: 'Tune in to the live stream now',
              },
              {
                href: '/now-playing',
                icon: '▶️',
                title: 'Now Playing',
                description: 'See what\'s on air right now',
              },
              {
                href: '/top-shows',
                icon: '⭐',
                title: 'Top Shows',
                description: 'Explore our flagship programmes',
              },
              {
                href: '/schedule',
                icon: '📅',
                title: 'Schedule',
                description: 'View the full weekly schedule',
              },
              {
                href: '/listen-again',
                icon: '⏮️',
                title: 'Listen Again',
                description: 'Browse past programmes',
              },
              {
                href: '/oaps',
                icon: '🎤',
                title: 'Our Presenters',
                description: 'Meet the O\'MARS Radio team',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 font-medium">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-4xl font-black text-foreground mb-6 uppercase tracking-wide">Who We Are</h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              O'MARS Radio is a digital radio dissemination platform created to inform, educate, and connect audiences
              through responsible broadcasting. We exist to give structure and voice to conversations around news,
              education, culture and identity, social issues, and global development, particularly as they affect
              African societies and the diaspora.
            </p>

            <div className="bg-primary border-l-8 border-primary p-6">
              <h3 className="font-black text-white mb-2 uppercase tracking-wide">Our Mission</h3>
              <p className="text-white/95 font-medium">
                To deliver credible information, educational content, and culturally grounded programming that
                strengthens awareness, identity, and informed participation in society.
              </p>
            </div>

            <CTAButton href="/about" className="w-full md:w-auto">
              Learn More About Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-12 text-center uppercase tracking-wide">What We Broadcast</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'News & Current Affairs', description: 'Daily analysis and balanced reporting' },
              { title: 'Education & Learning', description: 'Communication and youth development' },
              { title: 'Culture & Identity', description: 'African narratives and perspectives' },
              { title: 'Social Issues', description: 'Conversations on society and development' },
              { title: 'Music & Entertainment', description: 'Curated content and lifestyle' },
              { title: 'Global Development', description: 'International issues in local context' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="font-black text-foreground mb-2 uppercase text-sm tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white border-b-4 border-primary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-wide">Ready to Listen?</h2>
          <p className="text-lg text-white/95 mb-8 font-semibold">Join thousands of listeners discovering trusted, relevant, and engaging radio content.</p>
          <CTAButton href="/listen-live" variant="secondary">
            ▶ Tune In Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
