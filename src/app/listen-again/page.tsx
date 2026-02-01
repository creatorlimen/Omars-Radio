'use client';

import { useEffect, useState } from 'react';
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Listen Again</h1>
          <p className="text-lg text-white/90">Catch up on programmes you might have missed</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
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
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Filter by Language</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading programmes...</p>
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
            <div className="text-center py-12">
              <p className="text-muted-foreground">No programmes match your filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
