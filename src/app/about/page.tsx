import { Target, Eye, Check, Shield, BookOpen, Heart, Globe, Building2 } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'About Us - O\'MARS Radio',
  description: 'Learn about O\'MARS Radio\'s mission, vision, and editorial values.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">About O'MARS Radio</h1>
            <p className="text-xl text-white/90 font-medium">Understanding our purpose and values</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-20">
          {/* Who We Are */}
          <div className="text-center">
            <h2 className="text-4xl font-black text-foreground mb-8 uppercase tracking-wide">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                O'MARS Radio is a digital radio dissemination platform created to inform, educate, and connect audiences
                through responsible broadcasting. We exist to give structure and voice to conversations around news,
                education, culture and identity, social issues, and global development, particularly as they affect
                African societies and the diaspora.
              </p>
              <p>
                We operate as a public-interest platform, placing emphasis on clarity, context, and cultural relevance
                rather than sensationalism. Our programming is designed to speak both to people on the ground and to
                those who have carried their identities, concerns, and connections beyond national borders.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white mb-4 uppercase">Our Mission</h2>
              <p className="text-white/90 font-medium leading-relaxed">
                To deliver credible information, educational content, and culturally grounded programming that strengthens
                awareness, identity, and informed participation in society.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-gradient-to-br from-secondary to-secondary/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white mb-4 uppercase">Our Vision</h2>
              <p className="text-white/90 font-medium leading-relaxed">
                To become a trusted African radio platform with long-term relevance for global audiences, contributing to
                informed citizenship, cultural continuity, and global understanding.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-4xl font-black text-foreground mb-10 uppercase tracking-wide text-center">What We Do</h2>
            <div className="space-y-4">
              {[
                'Broadcast 24-hour programming in English and Nigerian indigenous languages',
                'Disseminate news and public affairs content with context and balance',
                'Promote education, literacy, and lifelong learning',
                'Preserve and promote cultural and identity-based narratives',
                'Translate UN and global development issues into conversations',
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium self-center">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Values */}
          <div>
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase tracking-wide text-center">Our Editorial Values</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">The principles that guide everything we do</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Accuracy and Responsibility',
                  description: 'We commit to factual reporting and ethical journalism practices.',
                  icon: Shield,
                  gradient: 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Education-Driven Content',
                  description: 'Our programming promotes learning, awareness, and informed decision-making.',
                  icon: BookOpen,
                  gradient: 'from-amber-500 to-amber-600',
                },
                {
                  title: 'Cultural Respect and Inclusion',
                  description: 'We celebrate diversity and respect the cultural backgrounds of our audiences.',
                  icon: Heart,
                  gradient: 'from-rose-500 to-rose-600',
                },
                {
                  title: 'Global Perspective with Local Roots',
                  description: 'We connect international issues to local realities and community concerns.',
                  icon: Globe,
                  gradient: 'from-emerald-500 to-emerald-600',
                },
              ].map((value, idx) => (
                <div key={idx} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-32 group-hover:h-32`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-black text-foreground mb-2 uppercase text-sm tracking-wide group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Context */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 items-center justify-center shadow-xl flex-shrink-0">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-foreground mb-4 uppercase">Institutional Context</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  O'MARS Radio operates under O'MARS Communication and Education Promotion Ltd., aligning with its broader
                  mandate in education, communication, and community development.
                </p>
                <p className="text-sm text-gray-500">
                  Our institutional framework ensures sustainable operations, professional standards, and commitment to
                  public interest broadcasting.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4 uppercase">Ready to be part of our community?</h3>
              <p className="text-white/80 mb-8 font-medium">Join thousands of listeners across Africa and the diaspora</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/listen-live" variant="secondary">Listen Live</CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Get in Touch
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
