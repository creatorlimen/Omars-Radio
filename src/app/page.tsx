import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BookOpen, Users, Megaphone, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Promoting Education. Amplifying Voices. Driving Impact.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 text-balance">
                We create platforms, initiatives, and partnerships that advance learning, empower students, and engage communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/programs">
                  <Button size="lg" className="gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Overview */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Work</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Through education advocacy, student engagement, literacy initiatives, and community projects, we're creating lasting change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advocacy */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Education Advocacy</h3>
                <p className="text-sm text-foreground/70">
                  Raising awareness about education challenges and opportunities
                </p>
              </div>

              {/* Student Engagement */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Student Engagement</h3>
                <p className="text-sm text-foreground/70">
                  Interactive initiatives that inspire learning and confidence
                </p>
              </div>

              {/* Literacy */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Literacy & Expression</h3>
                <p className="text-sm text-foreground/70">
                  Encouraging reading, writing, and creative storytelling
                </p>
              </div>

              {/* Community */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Community Awareness</h3>
                <p className="text-sm text-foreground/70">
                  Involving parents, educators, and communities in education discussions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Spotlight: Whispers and Words */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Flagship Initiative
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                  Whispers and Words
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  Our annual competition celebrating young voices through spoken words, storytelling, and creative expression.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Why It Matters</h3>
                      <p className="text-sm text-foreground/70">
                        Builds confidence, literacy, communication, and creativity while giving students a platform to share their ideas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Who It&apos;s For</h3>
                      <p className="text-sm text-foreground/70">
                        Students in schools and communities in Lagos state looking to express themselves through words.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">How to Participate</h3>
                      <p className="text-sm text-foreground/70">
                        Submit entries online, join workshops, and showcase your work at events.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/programs/whispers-and-words">
                    <Button size="lg" className="gap-2">
                      Learn More <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Submit Your Entry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-lg font-semibold text-primary">Celebrate Young Voices</p>
                  <p className="text-sm text-foreground/70 mt-2">Through words and storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Us in Transforming Education
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Whether you&apos;re a student wanting to participate, an institution looking to collaborate, or a sponsor wanting to make an impact, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  Get in Touch <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
