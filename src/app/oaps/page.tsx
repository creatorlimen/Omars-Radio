'use client';

import { useEffect, useState } from 'react';
import OAPCard from '@/components/OAPCard';
import type { OAP } from '@/lib/types';

export default function OAPs() {
  const [oaps, setOaps] = useState<OAP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOAPs = async () => {
      try {
        const response = await fetch('/data/oaps.json');
        const data = await response.json();
        setOaps(data);
      } catch (error) {
        console.error('Error loading OAPs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOAPs();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Presenters</h1>
          <p className="text-lg text-white/90">Meet the voices behind O'MARS Radio</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading presenters...</p>
            </div>
          ) : oaps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oaps.map((oap) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No presenters available</p>
            </div>
          )}

          {/* About Section */}
          <div className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Talent</h2>
            <p className="text-muted-foreground mb-4">
              O'MARS Radio's presenters are experienced broadcasters, journalists, educators, and cultural commentators
              committed to delivering quality content. Each brings unique perspectives and expertise to their programmes.
            </p>
            <p className="text-muted-foreground">
              Our presenters are passionate about informing, educating, and connecting audiences through responsible,
              culturally-grounded broadcasting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
