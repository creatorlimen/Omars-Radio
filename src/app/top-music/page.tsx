'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus, Music, Loader2, Check, Info } from 'lucide-react';
import type { MusicTrack } from '@/lib/types';

export default function TopMusic() {
  const [tracks, setTracks] = useState<MusicTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('/data/music-chart.json');
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Error loading music chart:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  const getTrendIcon = (trend: 'up' | 'down' | 'steady') => {
    switch (trend) {
      case 'up':
        return (
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
        );
      case 'down':
        return (
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
        );
      case 'steady':
        return (
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Minus className="w-5 h-5 text-amber-600" />
          </div>
        );
    }
  };

  const getTrendLabel = (trend: 'up' | 'down' | 'steady') => {
    switch (trend) {
      case 'up':
        return 'Rising';
      case 'down':
        return 'Falling';
      case 'steady':
        return 'Steady';
    }
  };

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
              <Music className="w-4 h-4" />
              Trending Now
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Music Chart</h1>
            <p className="text-xl text-white/90 font-medium">Most played and trending music on O'MARS Radio</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading chart...</span>
              </div>
            </div>
          ) : tracks.length > 0 ? (
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div 
                  key={track.rank} 
                  className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Top 3 special styling */}
                  {track.rank <= 3 && (
                    <div className={`absolute top-0 left-0 w-1 h-full ${
                      track.rank === 1 ? 'bg-gradient-to-b from-amber-400 to-amber-500' :
                      track.rank === 2 ? 'bg-gradient-to-b from-gray-300 to-gray-400' :
                      'bg-gradient-to-b from-amber-600 to-amber-700'
                    }`} />
                  )}
                  
                  <div className="flex items-center gap-5">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg ${
                        track.rank === 1 ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white' :
                        track.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                        track.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white' :
                        'bg-gradient-to-br from-primary to-primary/80 text-white'
                      }`}>
                        {track.rank}
                      </div>
                    </div>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-foreground text-lg uppercase tracking-tight group-hover:text-primary transition-colors">{track.title}</h3>
                      <p className="text-gray-600 font-medium">{track.artist}</p>
                    </div>

                    {/* Trend */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                      {getTrendIcon(track.trend)}
                      <span className="text-xs font-bold text-gray-500 hidden sm:block">{getTrendLabel(track.trend)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No tracks available</p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-foreground uppercase tracking-wide mb-1">About Our Music Chart</h3>
                <p className="text-sm text-gray-500">How we curate the best music for you</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Updated regularly based on listener patterns',
                'Reflects music trends across O\'MARS Radio programming',
                'Includes listener favourites and trending tracks',
                'Showcases diverse African and diaspora music',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
