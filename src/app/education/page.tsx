import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Education - O\'MARS Radio',
  description: 'Discover our educational programming focused on communication, youth learning, civic awareness, and global issues.',
};

export default function Education() {
  const educationAreas = [
    {
      title: 'Communication Development',
      description: 'Programmes focused on language skills, literacy, and effective communication across multiple languages.',
      shows: ['Morning Brief', 'Education Today'],
    },
    {
      title: 'Youth Learning',
      description: 'Content designed specifically for students and young learners, supporting education and personal development.',
      shows: ['Education Today', 'Voices of Identity'],
    },
    {
      title: 'Civic Awareness',
      description: 'Understanding governance, rights, responsibilities, and active participation in democratic processes.',
      shows: ['Morning Brief', 'Social Conversations'],
    },
    {
      title: 'Global Development',
      description: 'Translating international development issues into local conversations that matter to our communities.',
      shows: ['Global Perspectives', 'Social Conversations'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Education & Learning</h1>
          <p className="text-lg text-secondary-foreground/90">
            O'MARS Radio's commitment to education and lifelong learning
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Education is Core to Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O'MARS Radio recognizes education as a fundamental pillar for individual and collective development. Our
              programming supports communication skills, youth learning, civic awareness, and public education on social
              and global issues.
            </p>
            <p className="text-muted-foreground">
              Through discussions, interviews, and community-focused learning conversations, we empower our audiences
              with knowledge, context, and critical thinking skills.
            </p>
          </div>

          {/* Education Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {educationAreas.map((area, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                {area.shows.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Related Shows</p>
                    <div className="flex flex-wrap gap-2">
                      {area.shows.map((show) => (
                        <span key={show} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                          {show}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Learning Outcomes */}
          <div className="mb-16 p-8 bg-secondary/30 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Our Audiences Learn</h2>
            <ul className="space-y-4">
              {[
                'Critical thinking and media literacy skills',
                'Understanding of social, cultural, and global issues',
                'Language and communication development',
                'Civic knowledge and democratic participation',
                'Cultural identity and heritage awareness',
                'Global perspective with local relevance',
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

          {/* CTA */}
          <div className="text-center space-y-6 py-8">
            <h3 className="text-2xl font-bold text-foreground">Explore Our Educational Programmes</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/top-shows">Browse All Shows</CTAButton>
              <CTAButton href="/schedule" variant="outline">
                View Schedule
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
