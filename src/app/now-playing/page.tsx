'use client';

import { useEffect, useState } from 'react';
import { Radio, Loader2, Calendar, Info } from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';
import CTAButton from '@/components/CTAButton';
import type { Program } from '@/lib/types';

export default function NowPlaying() {
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/data/programs.json');
        const data = await response.json();
        setPrograms(data);

        // Find live program
        const liveProgram = data.find((p: Program) => p.isLive);
        setCurrentProgram(liveProgram || null);
      } catch (error) {
        console.error('Error loading programs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

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
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              On Air Now
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Now Playing</h1>
            <p className="text-xl text-white/90 font-medium">What's on air right now on O'MARS Radio</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading current programme...</span>
              </div>
            </div>
          ) : currentProgram ? (
            <div className="space-y-8">
              <div>
                <ProgramCard
                  id={currentProgram.id}
                  title={currentProgram.title}
                  description={currentProgram.description}
                  category={currentProgram.category}
                  language={currentProgram.language}
                  broadcastTime={currentProgram.broadcastTime}
                  isLive={true}
                />
              </div>

              <div className="bg-gradient-to-r from-primary via-primary to-primary/90 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-black text-white mb-2 uppercase tracking-wide">Tune In Now</h2>
                    <p className="text-white/80 font-medium">
                      Click below to start listening to {currentProgram.title}
                    </p>
                  </div>
                  <CTAButton href="/listen-live" variant="secondary">Listen Live</CTAButton>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-foreground text-lg uppercase tracking-wide mb-2">About This Programme</h3>
                    <p className="text-gray-600 leading-relaxed">{currentProgram.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2 uppercase">No Live Programme</h3>
              <p className="text-gray-500 mb-8 font-medium">Check our schedule to see what's coming up next</p>
              <CTAButton href="/schedule">Check Schedule</CTAButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
