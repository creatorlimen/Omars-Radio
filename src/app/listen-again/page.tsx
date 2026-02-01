'use client';

import { useEffect, useState } from 'react';
import { History, Filter, Languages, Loader2 } from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';
import type { Program } from '@/lib/types';

const categories = ['All', 'News', 'Education', 'Culture & Identity', 'Social Issues', 'Global Development', 'Entertainment & Lifestyle', 'Sports'];

export default function ListenAgain() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/data/programs.json');
        const data = await response.json();
        setPrograms(data);
        setFilteredPrograms(data);
      } catch (error) {
        console.error('Error loading programs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  useEffect(() => {
    let filtered = programs;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedLanguage !== 'All') {
      filtered = filtered.filter((p) => p.language === selectedLanguage);
    }

    setFilteredPrograms(filtered);
  }, [selectedCategory, selectedLanguage, programs]);

  const languages = ['All', ...new Set(programs.map((p) => p.language))];

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
              <History className="w-4 h-4" />
              On-Demand Content
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Listen Again</h1>
            <p className="text-xl text-white/90 font-medium">Catch up on programmes you might have missed</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 space-y-8 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-foreground uppercase text-sm tracking-wide">Filter by Category</h3>
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

            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <Languages className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-foreground uppercase text-sm tracking-wide">Filter by Language</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      selectedLanguage === lang
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          {!loading && (
            <div className="mb-8">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-primary font-bold">{filteredPrograms.length}</span> programme{filteredPrograms.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Programs Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading programmes...</span>
              </div>
            </div>
          ) : filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <ProgramCard
                  key={program.id}
                  id={program.id}
                  title={program.title}
                  description={program.description}
                  category={program.category}
                  language={program.language}
                  broadcastTime={program.broadcastTime}
                  isLive={program.isLive}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <History className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No programmes match your filters</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedLanguage('All'); }}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
