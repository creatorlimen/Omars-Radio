import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'About Us - O\'MARS Radio',
  description: 'Learn about O\'MARS Radio\'s mission, vision, and editorial values.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About O'MARS Radio</h1>
          <p className="text-lg text-secondary-foreground/90">Understanding our purpose and values</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-16">
          {/* Who We Are */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
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

          {/* Mission */}
          <div className="bg-primary/10 border-l-4 border-primary p-8 rounded">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To deliver credible information, educational content, and culturally grounded programming that strengthens
              awareness, identity, and informed participation in society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-primary/10 border-l-4 border-primary p-8 rounded">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To become a trusted African radio platform with long-term relevance for global audiences, contributing to
              informed citizenship, cultural continuity, and global understanding.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">What We Do</h2>
            <ul className="space-y-4">
              {[
                'Broadcast 24-hour programming in English and Nigerian indigenous languages',
                'Disseminate news and public affairs content with context and balance',
                'Promote education, literacy, and lifelong learning',
                'Preserve and promote cultural and identity-based narratives',
                'Translate UN and global development issues into conversations',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Values */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Editorial Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Accuracy and Responsibility',
                  description: 'We commit to factual reporting and ethical journalism practices.',
                },
                {
                  title: 'Education-Driven Content',
                  description: 'Our programming promotes learning, awareness, and informed decision-making.',
                },
                {
                  title: 'Cultural Respect and Inclusion',
                  description: 'We celebrate diversity and respect the cultural backgrounds of our audiences.',
                },
                {
                  title: 'Global Perspective with Local Roots',
                  description: 'We connect international issues to local realities and community concerns.',
                },
              ].map((value, idx) => (
                <div key={idx} className="p-6 bg-secondary/30 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Context */}
          <div className="bg-accent/10 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Institutional Context</h2>
            <p className="text-muted-foreground mb-4">
              O'MARS Radio operates under O'MARS Communication and Education Promotion Ltd., aligning with its broader
              mandate in education, communication, and community development.
            </p>
            <p className="text-sm text-muted-foreground">
              Our institutional framework ensures sustainable operations, professional standards, and commitment to
              public interest broadcasting.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to be part of our community?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/listen-live">Listen Live</CTAButton>
              <CTAButton href="/contact" variant="outline">
                Get in Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
