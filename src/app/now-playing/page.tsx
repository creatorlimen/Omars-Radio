'use client';

import { useEffect, useState } from 'react';
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Now Playing</h1>
          <p className="text-lg text-white/90">What's on air right now on O'MARS Radio</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading...</p>
            </div>
          ) : currentProgram ? (
            <div>
              <div className="mb-8">
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

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded mb-8">
                <h2 className="font-bold text-foreground mb-2">Tune In Now</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Click below to start listening to {currentProgram.title}
                </p>
                <CTAButton href="/listen-live">Listen Live</CTAButton>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">About This Programme</h3>
                <p className="text-muted-foreground">{currentProgram.description}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">No programme is currently live</p>
              <CTAButton href="/schedule">Check Schedule</CTAButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
