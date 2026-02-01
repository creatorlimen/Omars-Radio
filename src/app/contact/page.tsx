import Link from 'next/link';
import { Card } from '@/components/ui/card';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Contact Us - O\'MARS Radio',
  description: 'Get in touch with O\'MARS Radio for inquiries, partnerships, and feedback.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              </div>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-foreground mb-3">Email</h3>
                <a href="mailto:omarscomandedultd@gmail.com" className="text-primary hover:underline text-lg">
                  omarscomandedultd@gmail.com
                </a>
                <p className="text-xs text-muted-foreground mt-2">We respond within 24-48 hours</p>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-foreground mb-3">Phone</h3>
                <p className="text-lg text-foreground">+234 (placeholder)</p>
                <p className="text-xs text-muted-foreground mt-2">Available during business hours</p>
              </Card>

              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">TikTok</p>
                    <a
                      href="https://www.tiktok.com/@whispersnwords_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all text-sm"
                    >
                      @whispersnwords_
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Instagram</p>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      @oarsradio
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Purpose Categories */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Reason for Contacting</h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Reach Out Today',
                    description: 'General inquiries and feedback',
                    email: 'omarscomandedultd@gmail.com',
                  },
                  {
                    title: 'Partner With Us',
                    description: 'Advertising, sponsorships, and collaborations',
                    email: 'omarscomandedultd@gmail.com',
                  },
                  {
                    title: 'Join Our Programs',
                    description: 'Apply to be a presenter, contribute content, or participate',
                    email: 'omarscomandedultd@gmail.com',
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${item.email}?subject=${encodeURIComponent(item.title)}`}
                    className="block p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-xs text-primary font-semibold mt-2">Send Email →</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">We typically respond to inquiries within 24-48 hours during business days.</p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">Rate Card Requests</h3>
              <p className="text-sm text-muted-foreground">
                For advertising and partnership rates,{' '}
                <Link href="/rate-card" className="text-primary hover:underline">
                  visit our Rate Card page
                </Link>
                .
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h3 className="font-bold text-foreground mb-2">Office</h3>
              <p className="text-sm text-muted-foreground">O'MARS Communication and Education Promotion Ltd.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-8 space-y-6 p-8 bg-primary/10 rounded-lg border border-primary">
            <h3 className="text-2xl font-bold text-foreground">Ready to Connect?</h3>
            <p className="text-muted-foreground">Choose one of the options above to get started, or call us directly at +234.</p>
            <CTAButton href="mailto:omarscomandedultd@gmail.com">Send Email Now</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
