import { Megaphone, Radio, Briefcase, GraduationCap, Users, Globe, Shield, Layers, Heart, BarChart3, Check, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

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
      icon: Megaphone,
      gradient: 'from-blue-500 to-blue-600',
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
      icon: Radio,
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Campaign-Based Broadcasts',
      description: 'Launch focused campaigns with dedicated airtime and multi-platform promotion.',
      features: ['Custom campaign design', 'Multi-week packages', 'Cross-channel promotion', 'Analytics reporting'],
      icon: Briefcase,
      gradient: 'from-emerald-500 to-emerald-600',
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
      icon: GraduationCap,
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Briefcase className="w-4 h-4" />
              Partner With Us
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight break-words">Advertising & Partnerships</h1>
            <p className="text-xl text-white/90 font-medium">Reach African and diaspora audiences with O'MARS Radio</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Introduction */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-foreground mb-6 uppercase tracking-wide">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              O'MARS Radio offers targeted advertising and sponsorship opportunities for organisations seeking meaningful
              engagement with African and diaspora audiences.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Whether you're looking to promote products, support educational initiatives, or sponsor programmes, we
              provide flexible solutions tailored to your goals.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {offerings.map((offering, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${offering.gradient} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-40 group-hover:h-40`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <offering.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{offering.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{offering.description}</p>
                
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Features</p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-3 text-sm text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Why Partner With Us */}
          <div className="mb-20 p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full" />
            
            <h2 className="text-3xl font-black text-foreground mb-8 uppercase tracking-wide text-center">Why Partner With O'MARS Radio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Engaged Audience',
                  description: 'Reach listeners who actively seek educational, cultural, and development content',
                  icon: Users,
                  gradient: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Global Reach',
                  description: 'Connect with African and diaspora communities across multiple markets',
                  icon: Globe,
                  gradient: 'from-emerald-500 to-emerald-600',
                },
                {
                  title: 'Brand Alignment',
                  description: 'Associate with a trusted, public-interest platform known for editorial integrity',
                  icon: Shield,
                  gradient: 'from-amber-500 to-amber-600',
                },
                {
                  title: 'Multiple Touchpoints',
                  description: 'Leverage radio, social media, and online platforms for maximum impact',
                  icon: Layers,
                  gradient: 'from-purple-500 to-purple-600',
                },
                {
                  title: 'Cultural Relevance',
                  description: 'Deliver messages in culturally appropriate and meaningful ways',
                  icon: Heart,
                  gradient: 'from-rose-500 to-rose-600',
                },
                {
                  title: 'Measurable Impact',
                  description: 'Track engagement and reach with detailed reporting and analytics',
                  icon: BarChart3,
                  gradient: 'from-cyan-500 to-cyan-600',
                },
              ].map((item, idx) => (
                <div key={idx} className="group p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-black text-foreground mb-2 uppercase text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rate Info */}
          <div className="mb-16 bg-gradient-to-r from-primary via-primary to-primary/90 p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">Get Custom Rates & Proposals</h2>
              <p className="text-white/90 mb-6 leading-relaxed max-w-2xl">
                All advertising and sponsorship packages are customized based on your target audience, campaign duration,
                and specific goals. Contact us for detailed rate cards and tailored proposals.
              </p>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Minimum campaign: 2 weeks
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Multiple language options
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Flexible packages
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-black text-foreground mb-4 uppercase">Ready to Partner With Us?</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Let's discuss how O'MARS Radio can help you reach and engage your target audience.
            </p>
            <CTAButton href="/contact">
              Request Rate Card & Proposal
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
