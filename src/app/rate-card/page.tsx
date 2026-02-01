import CTAButton from '@/components/CTAButton';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Rate Card - O\'MARS Radio',
  description: 'Advertising and sponsorship opportunities with O\'MARS Radio. Reach African and diaspora audiences.',
};

export default function RateCard() {
  const offerings = [
    {
      title: 'On-Air Adverts & Jingles',
      description: 'Reach our live audience with targeted audio advertisements and custom jingles.',
      features: ['30-60 second spots', 'Prime time placement', 'Custom production', 'Multiple language options'],
    },
    {
      title: 'Sponsored Programmes',
      description: 'Align your brand with our flagship shows and reach engaged, loyal audiences.',
      features: [
        'Full programme sponsorship',
        'Integrated messaging',
        'Presenter endorsements',
        'Social media amplification',
      ],
    },
    {
      title: 'Campaign-Based Broadcasts',
      description: 'Launch focused campaigns with dedicated airtime and multi-platform promotion.',
      features: ['Custom campaign design', 'Multi-week packages', 'Cross-channel promotion', 'Analytics reporting'],
    },
    {
      title: 'Educational & Development Partnerships',
      description: 'Partner with us on public interest initiatives aligned with our mission.',
      features: [
        'Co-developed content',
        'Community engagement',
        'Educational focus',
        'Impact measurement',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Advertising & Partnerships</h1>
          <p className="text-lg text-white/90">Reach African and diaspora audiences with O'MARS Radio</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-4">
              O'MARS Radio offers targeted advertising and sponsorship opportunities for organisations seeking meaningful
              engagement with African and diaspora audiences.
            </p>
            <p className="text-muted-foreground">
              Whether you're looking to promote products, support educational initiatives, or sponsor programmes, we
              provide flexible solutions tailored to your goals.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {offerings.map((offering, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">{offering.title}</h3>
                <p className="text-muted-foreground mb-6">{offering.description}</p>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Features</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Why Partner With Us */}
          <div className="mb-16 p-8 bg-secondary/30 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Partner With O'MARS Radio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Engaged Audience',
                  description: 'Reach listeners who actively seek educational, cultural, and development content',
                },
                {
                  title: 'Global Reach',
                  description: 'Connect with African and diaspora communities across multiple markets',
                },
                {
                  title: 'Brand Alignment',
                  description: 'Associate with a trusted, public-interest platform known for editorial integrity',
                },
                {
                  title: 'Multiple Touchpoints',
                  description: 'Leverage radio, social media, and online platforms for maximum impact',
                },
                {
                  title: 'Cultural Relevance',
                  description: 'Deliver messages in culturally appropriate and meaningful ways',
                },
                {
                  title: 'Measurable Impact',
                  description: 'Track engagement and reach with detailed reporting and analytics',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rate Info */}
          <div className="mb-16 p-8 bg-primary/10 border-l-4 border-primary rounded">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get Custom Rates & Proposals</h2>
            <p className="text-muted-foreground mb-6">
              All advertising and sponsorship packages are customized based on your target audience, campaign duration,
              and specific goals. Contact us for detailed rate cards and tailored proposals.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Minimum campaign duration: 2 weeks | Multiple language options available
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center py-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Ready to Partner With Us?</h3>
            <p className="text-muted-foreground">
              Let's discuss how O'MARS Radio can help you reach and engage your target audience.
            </p>
            <CTAButton href="/contact">Request Rate Card & Proposal</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
