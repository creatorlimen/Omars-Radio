import { Radio, Clock, Languages, Headphones, Wifi, Check, Monitor, Smartphone, Accessibility, Signal } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Listen Live - O\'MARS Radio',
  description: 'Stream O\'MARS Radio live 24/7. Listen to news, education, culture, and music.',
};

export default function ListenLive() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Live Now
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Listen Live</h1>
            <p className="text-xl text-white/90 font-medium">Tune in to O'MARS Radio 24/7 live streaming</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Player */}
          <div className="mb-16">
            <AudioPlayer title="O'MARS Radio - Live Stream" isLive={true} streamUrl="" />
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Clock,
                title: '24/7 Broadcasting',
                description: "O'MARS Radio broadcasts 24 hours a day, 7 days a week. Whether you're starting your day with news or winding down with entertainment, we're always here.",
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Languages,
                title: 'Multiple Languages',
                description: 'Our programming is available in English and Nigerian indigenous languages, ensuring accessibility for all our audiences.',
                gradient: 'from-amber-500 to-amber-600',
              },
              {
                icon: Headphones,
                title: 'High Quality Audio',
                description: 'Enjoy crystal-clear audio quality optimized for both desktop and mobile devices. Works on all platforms.',
                gradient: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: Wifi,
                title: 'Reliable Service',
                description: 'Our infrastructure ensures consistent, uninterrupted broadcasting. Stream with confidence, anytime, anywhere.',
                gradient: 'from-purple-500 to-purple-600',
              },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-32 group-hover:h-32`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-lg font-black text-foreground mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center py-12 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl shadow-xl relative overflow-hidden mb-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white mb-2 uppercase">Explore More</h2>
              <p className="text-white/80 mb-8 font-medium">Discover what O'MARS Radio has to offer</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/now-playing" variant="secondary">What's Playing Now</CTAButton>
                <CTAButton href="/schedule" variant="secondary">
                  View Schedule
                </CTAButton>
                <CTAButton href="/listen-again" variant="secondary">
                  Listen Again
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Accessibility Info */}
          <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg flex-shrink-0">
                <Accessibility className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-foreground mb-1 uppercase tracking-wide">Accessibility</h3>
                <p className="text-sm text-gray-600">O'MARS Radio is committed to accessibility. Our player is compatible with:</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Monitor, text: 'Desktop browsers (Chrome, Firefox, Safari, Edge)' },
                { icon: Smartphone, text: 'Mobile devices (iOS Safari, Android Chrome)' },
                { icon: Accessibility, text: 'Screen readers and accessibility tools' },
                { icon: Signal, text: 'Low bandwidth connections' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
