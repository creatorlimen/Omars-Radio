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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Listen Live</h1>
          <p className="text-lg text-white/90">Tune in to O'MARS Radio 24/7 live streaming</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Player */}
          <div className="mb-12">
            <AudioPlayer title="O'MARS Radio - Live Stream" isLive={true} streamUrl="" />
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">24/7 Broadcasting</h2>
              <p className="text-sm text-muted-foreground">
                O'MARS Radio broadcasts 24 hours a day, 7 days a week. Whether you're starting your day with news or
                winding down with entertainment, we're always here.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Multiple Languages</h2>
              <p className="text-sm text-muted-foreground">
                Our programming is available in English and Nigerian indigenous languages, ensuring accessibility for
                all our audiences.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">High Quality Audio</h2>
              <p className="text-sm text-muted-foreground">
                Enjoy crystal-clear audio quality optimized for both desktop and mobile devices. Works on all platforms.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Reliable Service</h2>
              <p className="text-sm text-muted-foreground">
                Our infrastructure ensures consistent, uninterrupted broadcasting. Stream with confidence, anytime,
                anywhere.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Explore More</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/now-playing">What's Playing Now</CTAButton>
              <CTAButton href="/schedule" variant="outline">
                View Schedule
              </CTAButton>
              <CTAButton href="/listen-again" variant="outline">
                Listen Again
              </CTAButton>
            </div>
          </div>

          {/* Accessibility Info */}
          <div className="mt-12 p-6 bg-background border border-border rounded-lg">
            <h3 className="font-bold text-foreground mb-3">Accessibility</h3>
            <p className="text-sm text-muted-foreground mb-4">
              O'MARS Radio is committed to accessibility. Our player is compatible with:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Desktop browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>✓ Mobile devices (iOS Safari, Android Chrome)</li>
              <li>✓ Screen readers and accessibility tools</li>
              <li>✓ Low bandwidth connections</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
