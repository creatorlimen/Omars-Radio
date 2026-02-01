'use client';

import { useEffect, useState } from 'react';
import { Star, Loader2, Filter, Tv } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4" />
              Featured Programmes
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Top Shows</h1>
            <p className="text-xl text-white/90 font-medium">Explore our flagship programmes and discover quality content</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <Filter className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-black text-foreground uppercase text-sm tracking-wide">Filter by Category</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          {!loading && (
            <div className="mb-8">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-primary font-bold">{filteredShows.length}</span> show{filteredShows.length !== 1 ? 's' : ''}
                {selectedCategory !== 'All' && <span> in <span className="font-bold">{selectedCategory}</span></span>}
              </p>
            </div>
          )}

          {/* Shows Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading shows...</span>
              </div>
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
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No shows in this category</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                View all shows
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
