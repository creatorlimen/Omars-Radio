import { BookOpen, Users, Building, Globe, Check, Lightbulb, Brain, MessageSquare, Vote, Palette, Eye } from 'lucide-react';
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
      icon: MessageSquare,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Youth Learning',
      description: 'Content designed specifically for students and young learners, supporting education and personal development.',
      shows: ['Education Today', 'Voices of Identity'],
      icon: Users,
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Civic Awareness',
      description: 'Understanding governance, rights, responsibilities, and active participation in democratic processes.',
      shows: ['Morning Brief', 'Social Conversations'],
      icon: Vote,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Global Development',
      description: 'Translating international development issues into local conversations that matter to our communities.',
      shows: ['Global Perspectives', 'Social Conversations'],
      icon: Globe,
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

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
              <BookOpen className="w-4 h-4" />
              Learning That Matters
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Education & Learning</h1>
            <p className="text-xl text-white/90 font-medium">
              O'MARS Radio's commitment to education and lifelong learning
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Introduction */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 shadow-xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-black text-foreground mb-6 uppercase tracking-wide">Education is Core to Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O'MARS Radio recognizes education as a fundamental pillar for individual and collective development. Our
              programming supports communication skills, youth learning, civic awareness, and public education on social
              and global issues.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Through discussions, interviews, and community-focused learning conversations, we empower our audiences
              with knowledge, context, and critical thinking skills.
            </p>
          </div>

          {/* Education Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {educationAreas.map((area, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-40 group-hover:h-40`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-black text-foreground mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{area.description}</p>
                
                {area.shows.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Shows</p>
                    <div className="flex flex-wrap gap-2">
                      {area.shows.map((show) => (
                        <span key={show} className={`text-xs bg-gradient-to-r ${area.gradient} text-white px-4 py-1.5 rounded-full font-bold shadow-sm`}>
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
          <div className="mb-20 p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full" />
            
            <div className="flex items-start gap-6 mb-8">
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 items-center justify-center shadow-xl flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-foreground mb-2 uppercase tracking-wide">What Our Audiences Learn</h2>
                <p className="text-gray-600">Skills and knowledge you'll gain from our programming</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: 'Critical thinking and media literacy skills', icon: Brain },
                { text: 'Understanding of social, cultural, and global issues', icon: Globe },
                { text: 'Language and communication development', icon: MessageSquare },
                { text: 'Civic knowledge and democratic participation', icon: Vote },
                { text: 'Cultural identity and heritage awareness', icon: Palette },
                { text: 'Global perspective with local relevance', icon: Eye },
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium self-center">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4 uppercase">Explore Our Educational Programmes</h3>
              <p className="text-white/80 mb-8 font-medium max-w-md mx-auto">Discover content designed to inform, educate, and inspire</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/top-shows" variant="secondary">Browse All Shows</CTAButton>
                <CTAButton href="/schedule" variant="secondary">
                  View Schedule
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
