'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';
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
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case 'steady':
        return <Minus className="w-5 h-5 text-yellow-500" />;
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Music Chart</h1>
          <p className="text-lg text-white/90">Most played and trending music on O'MARS Radio</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading chart...</p>
            </div>
          ) : tracks.length > 0 ? (
            <div className="space-y-4">
              {tracks.map((track) => (
                <Card key={track.rank} className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                        {track.rank}
                      </div>
                    </div>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground text-balance">{track.title}</h3>
                      <p className="text-sm text-muted-foreground">{track.artist}</p>
                    </div>

                    {/* Trend */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                      {getTrendIcon(track.trend)}
                      <span className="text-xs font-semibold text-muted-foreground">{getTrendLabel(track.trend)}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tracks available</p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-3">About Our Music Chart</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Updated regularly based on listener patterns</li>
              <li>✓ Reflects music trends across O'MARS Radio programming</li>
              <li>✓ Includes listener favourites and trending tracks</li>
              <li>✓ Showcases diverse African and diaspora music</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
