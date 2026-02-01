'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import CTAButton from '@/components/CTAButton';
import ShowCard from '@/components/ShowCard';
import OAPCard from '@/components/OAPCard';
import type { Program, Show, MusicTrack, OAP, ScheduleDay } from '@/lib/types';

export default function Home() {
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);
  const [topShows, setTopShows] = useState<Show[]>([]);
  const [topMusic, setTopMusic] = useState<MusicTrack[]>([]);
  const [featuredOAPs, setFeaturedOAPs] = useState<OAP[]>([]);
  const [todaySchedule, setTodaySchedule] = useState<ScheduleDay | null>(null);
  const [programs, setPrograms] = useState<Record<string, { title: string; category: string }>>({});

  useEffect(() => {
    // Fetch all data
    Promise.all([
      fetch('/data/programs.json').then(res => res.json()),
      fetch('/data/shows.json').then(res => res.json()),
      fetch('/data/music-chart.json').then(res => res.json()),
      fetch('/data/oaps.json').then(res => res.json()),
      fetch('/data/schedule.json').then(res => res.json()),
    ]).then(([programs, shows, music, oaps, schedule]) => {
      setCurrentProgram(programs.find((p: Program) => p.isLive) || null);
      setTopShows(shows.slice(0, 3));
      setTopMusic(music.slice(0, 5));
      setFeaturedOAPs(oaps.slice(0, 4));
      
      // Get today's schedule
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = days[new Date().getDay()];
      const todayData = schedule.find((s: ScheduleDay) => s.day === today);
      setTodaySchedule(todayData || null);
      
      // Create programs lookup
      const programsMap: Record<string, { title: string; category: string }> = {};
      programs.forEach((p: Program) => {
        programsMap[p.id] = { title: p.title, category: p.category };
      });
      setPrograms(programsMap);
    }).catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-24 md:py-40 overflow-hidden">
        {/* Wave pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance tracking-tight">
              VOICES. IDENTITY. PERSPECTIVE.
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-10 text-balance font-semibold">
              A 24-hour digital radio platform broadcasting news, education, culture, music, and social conversations for
              local and diaspora audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/listen-live" variant="secondary">
                ▶ Listen Live Now
              </CTAButton>
              <CTAButton href="/now-playing" variant="primary">
                What's On Now
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Player */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AudioPlayer title="O'MARS Radio Live Stream" isLive={true} />
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-12 text-center uppercase tracking-wide">Quick Access</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/listen-live',
                icon: '🎙️',
                title: 'Listen Live',
                description: 'Tune in to the live stream now',
              },
              {
                href: '/now-playing',
                icon: '▶️',
                title: 'Now Playing',
                description: 'See what\'s on air right now',
              },
              {
                href: '/top-shows',
                icon: '⭐',
                title: 'Top Shows',
                description: 'Explore our flagship programmes',
              },
              {
                href: '/schedule',
                icon: '📅',
                title: 'Schedule',
                description: 'View the full weekly schedule',
              },
              {
                href: '/listen-again',
                icon: '⏮️',
                title: 'Listen Again',
                description: 'Browse past programmes',
              },
              {
                href: '/oaps',
                icon: '🎤',
                title: 'Our Presenters',
                description: 'Meet the O\'MARS Radio team',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 font-medium">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Shows Preview */}
      <section className="py-16 bg-gray-50 border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-foreground uppercase tracking-wide">⭐ Featured Shows</h2>
            <Link href="/top-shows" className="text-primary font-bold hover:underline uppercase text-sm">
              View All Shows →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topShows.map((show) => (
              <ShowCard
                key={show.id}
                id={show.id}
                title={show.title}
                description={show.description}
                category={show.category}
                day={show.day}
                time={show.time}
                language={show.language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Music Chart */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-foreground uppercase tracking-wide">🎵 Top Music</h2>
            <Link href="/top-music" className="text-primary font-bold hover:underline uppercase text-sm">
              Full Chart →
            </Link>
          </div>

          <div className="bg-white border-2 border-gray-200 shadow-lg">
            {topMusic.map((track, index) => (
              <div
                key={track.rank}
                className={`flex items-center justify-between p-4 ${
                  index !== topMusic.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-primary w-8">{track.rank}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{track.title}</h3>
                    <p className="text-sm text-gray-600">{track.artist}</p>
                  </div>
                </div>
                <span className="text-2xl">
                  {track.trend === 'up' && '📈'}
                  {track.trend === 'down' && '📉'}
                  {track.trend === 'steady' && '➡️'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-4xl font-black text-foreground mb-6 uppercase tracking-wide">Who We Are</h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              O'MARS Radio is a digital radio dissemination platform created to inform, educate, and connect audiences
              through responsible broadcasting. We exist to give structure and voice to conversations around news,
              education, culture and identity, social issues, and global development, particularly as they affect
              African societies and the diaspora.
            </p>

            <div className="bg-primary border-l-8 border-primary p-6">
              <h3 className="font-black text-white mb-2 uppercase tracking-wide">Our Mission</h3>
              <p className="text-white/95 font-medium">
                To deliver credible information, educational content, and culturally grounded programming that
                strengthens awareness, identity, and informed participation in society.
              </p>
            </div>

            <CTAButton href="/about" className="w-full md:w-auto">
              Learn More About Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-12 text-center uppercase tracking-wide">What We Broadcast</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'News & Current Affairs', description: 'Daily analysis and balanced reporting' },
              { title: 'Education & Learning', description: 'Communication and youth development' },
              { title: 'Culture & Identity', description: 'African narratives and perspectives' },
              { title: 'Social Issues', description: 'Conversations on society and development' },
              { title: 'Music & Entertainment', description: 'Curated content and lifestyle' },
              { title: 'Global Development', description: 'International issues in local context' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="font-black text-foreground mb-2 uppercase text-sm tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Schedule */}
      {todaySchedule && (
        <section className="py-16 bg-gray-50 border-t-4 border-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-wide">📅 Today's Schedule</h2>
              <Link href="/schedule" className="text-primary font-bold hover:underline uppercase text-sm">
                Full Schedule →
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 shadow-lg">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-black uppercase">{todaySchedule.day}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {todaySchedule.slots.map((slot, index) => {
                  const program = programs[slot.programId];
                  return (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-black text-primary text-lg">
                              {slot.startTime} - {slot.endTime}
                            </span>
                            {slot.isRepeat && (
                              <span className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-xs font-bold uppercase">
                                Repeat
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-foreground text-lg">{program?.title || slot.programId}</h4>
                          {program?.category && (
                            <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase">
                              {program.category}
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-bold text-gray-600">🗣️ {slot.language}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Presenters */}
      <section className="py-16 bg-background border-t-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-foreground uppercase tracking-wide">🎤 Meet Our Presenters</h2>
            <Link href="/oaps" className="text-primary font-bold hover:underline uppercase text-sm">
              View All Presenters →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredOAPs.map((oap) => (
              <OAPCard
                key={oap.id}
                id={oap.id}
                name={oap.name}
                photo={oap.photo}
                bio={oap.bio}
                shows={oap.shows}
                focusAreas={oap.focusAreas}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white border-b-4 border-primary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-wide">Ready to Listen?</h2>
          <p className="text-lg text-white/95 mb-8 font-semibold">Join thousands of listeners discovering trusted, relevant, and engaging radio content.</p>
          <CTAButton href="/listen-live" variant="secondary">
            ▶ Tune In Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
