'use client';

import { useState, useEffect } from 'react';
import { AppData } from '../interfaces/app';

interface CategoryFilterProps {
  apps: AppData[];
  onFilterChange: (filteredApps: AppData[]) => void;
}

export default function CategoryFilter({ apps, onFilterChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Extract unique categories from apps
  const categories = ['All', ...Array.from(new Set(apps.map(app => app.category)))];
  
  useEffect(() => {
    // Filter apps based on selected category
    const filteredApps = selectedCategory === 'All' 
      ? apps 
      : apps.filter(app => app.category === selectedCategory);
    
    onFilterChange(filteredApps);
  }, [selectedCategory, apps, onFilterChange]);
  
  return (
    <div className="flex flex-wrap gap-2 justify-center py-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition 
            ${selectedCategory === category 
              ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-[#121212]' 
              : 'bg-[#111111] text-[#F5F5F5] hover:bg-[#444444]'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}