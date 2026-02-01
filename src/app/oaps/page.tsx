'use client';

import { useEffect, useState } from 'react';
import { Mic, Loader2, Users, Heart } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Mic className="w-4 h-4" />
              The Voices of O'MARS
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Presenters</h1>
            <p className="text-xl text-white/90 font-medium">Meet the voices behind O'MARS Radio</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          {!loading && oaps.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">{oaps.length}</div>
                <div className="text-gray-600 font-medium uppercase text-sm tracking-wide">Talented Presenters</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">24/7</div>
                <div className="text-gray-600 font-medium uppercase text-sm tracking-wide">On-Air Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">5+</div>
                <div className="text-gray-600 font-medium uppercase text-sm tracking-wide">Languages</div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading presenters...</span>
              </div>
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
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No presenters available</p>
            </div>
          )}

          {/* About Section */}
          <div className="mt-20 p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full" />
            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl flex-shrink-0">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-foreground mb-4 uppercase tracking-wide">Our Talent</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  O'MARS Radio's presenters are experienced broadcasters, journalists, educators, and cultural commentators
                  committed to delivering quality content. Each brings unique perspectives and expertise to their programmes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our presenters are passionate about informing, educating, and connecting audiences through responsible,
                  culturally-grounded broadcasting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
