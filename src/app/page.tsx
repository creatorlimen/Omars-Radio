'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Radio, Play, Star, Calendar, History, Mic, TrendingUp, TrendingDown, Minus, ArrowRight, Music, Users } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-4 text-center uppercase tracking-wide">Quick Access</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Everything you need, just one click away</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/listen-live',
                icon: Radio,
                title: 'Listen Live',
                description: 'Tune in to the live stream now',
                gradient: 'from-red-500 to-red-600',
              },
              {
                href: '/now-playing',
                icon: Play,
                title: 'Now Playing',
                description: "See what's on air right now",
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                href: '/top-shows',
                icon: Star,
                title: 'Top Shows',
                description: 'Explore our flagship programmes',
                gradient: 'from-amber-500 to-amber-600',
              },
              {
                href: '/schedule',
                icon: Calendar,
                title: 'Schedule',
                description: 'View the full weekly schedule',
                gradient: 'from-emerald-500 to-emerald-600',
              },
              {
                href: '/listen-again',
                icon: History,
                title: 'Listen Again',
                description: 'Browse past programmes',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                href: '/oaps',
                icon: Mic,
                title: 'Our Presenters',
                description: "Meet the O'MARS Radio team",
                gradient: 'from-purple-500 to-purple-600',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                {/* Decorative gradient corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-32 group-hover:h-32`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 font-medium">{item.description}</p>
                <div className="mt-4 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Shows Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-wide">Featured Shows</h2>
            </div>
            <Link href="/top-shows" className="group flex items-center gap-2 text-primary font-bold uppercase text-sm hover:gap-3 transition-all">
              View All Shows
              <ArrowRight className="w-4 h-4" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-wide">Top Music</h2>
            </div>
            <Link href="/top-music" className="group flex items-center gap-2 text-primary font-bold uppercase text-sm hover:gap-3 transition-all">
              Full Chart
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {topMusic.map((track, index) => (
              <div
                key={track.rank}
                className={`flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${
                  index !== topMusic.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-primary w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">{track.rank}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{track.title}</h3>
                    <p className="text-sm text-gray-600">{track.artist}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {track.trend === 'up' && <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-emerald-600" /></div>}
                  {track.trend === 'down' && <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center"><TrendingDown className="w-4 h-4 text-red-600" /></div>}
                  {track.trend === 'steady' && <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><Minus className="w-4 h-4 text-gray-600" /></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-4xl font-black text-foreground mb-6 uppercase tracking-wide text-center">Who We Are</h2>

          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed font-medium text-center">
              O'MARS Radio is a digital radio dissemination platform created to inform, educate, and connect audiences
              through responsible broadcasting. We exist to give structure and voice to conversations around news,
              education, culture and identity, social issues, and global development, particularly as they affect
              African societies and the diaspora.
            </p>

            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 shadow-xl">
              <h3 className="font-black text-white mb-3 uppercase tracking-wide text-lg">Our Mission</h3>
              <p className="text-white/95 font-medium leading-relaxed">
                To deliver credible information, educational content, and culturally grounded programming that
                strengthens awareness, identity, and informed participation in society.
              </p>
            </div>

            <div className="text-center">
              <CTAButton href="/about" variant="outline">
                Learn More About Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-4 text-center uppercase tracking-wide">What We Broadcast</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Diverse content that informs, educates, and entertains</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'News & Current Affairs', description: 'Daily analysis and balanced reporting', icon: '📰' },
              { title: 'Education & Learning', description: 'Communication and youth development', icon: '📚' },
              { title: 'Culture & Identity', description: 'African narratives and perspectives', icon: '🌍' },
              { title: 'Social Issues', description: 'Conversations on society and development', icon: '💬' },
              { title: 'Music & Entertainment', description: 'Curated content and lifestyle', icon: '🎵' },
              { title: 'Global Development', description: 'International issues in local context', icon: '🌐' },
            ].map((item) => (
              <div key={item.title} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-foreground mb-2 uppercase text-sm tracking-wide group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Schedule */}
      {todaySchedule && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-wide">Today's Schedule</h2>
              </div>
              <Link href="/schedule" className="group flex items-center gap-2 text-primary font-bold uppercase text-sm hover:gap-3 transition-all">
                Full Schedule
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-5">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground uppercase tracking-wide">Meet Our Presenters</h2>
            </div>
            <Link href="/oaps" className="group flex items-center gap-2 text-primary font-bold uppercase text-sm hover:gap-3 transition-all">
              View All Presenters
              <ArrowRight className="w-4 h-4" />
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
      <section className="py-24 bg-gradient-to-r from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wide">Ready to Listen?</h2>
          <p className="text-lg text-white/90 mb-10 font-medium">Join thousands of listeners discovering trusted, relevant, and engaging radio content.</p>
          <CTAButton href="/listen-live" variant="secondary">
            ▶ Tune In Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
