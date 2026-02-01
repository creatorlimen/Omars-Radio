'use client';

import { useEffect, useState } from 'react';
import ShowCard from '@/components/ShowCard';
import type { Show } from '@/lib/types';

const categories = ['All', 'News', 'Education', 'Culture & Identity', 'Social Issues', 'Global Development', 'Entertainment & Lifestyle', 'Sports'];

export default function TopShows() {
  const [shows, setShows] = useState<Show[]>([]);
  const [filteredShows, setFilteredShows] = useState<Show[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('/data/shows.json');
        const data = await response.json();
        setShows(data);
        setFilteredShows(data);
      } catch (error) {
        console.error('Error loading shows:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredShows(shows);
    } else {
      setFilteredShows(shows.filter((show) => show.category === selectedCategory));
    }
  }, [selectedCategory, shows]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Top Shows</h1>
          <p className="text-lg text-white/90">Explore our flagship programmes</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Shows Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading shows...</p>
            </div>
          ) : filteredShows.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShows.map((show) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No shows in this category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
