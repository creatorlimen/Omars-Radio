'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { AppData } from '../interfaces/app';

interface SearchBarProps {
  apps: AppData[];
  onSearchResults: (results: AppData[]) => void;
}

export default function SearchBar({ apps, onSearchResults }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (!searchTerm.trim()) {
      onSearchResults(apps);
      return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const results = apps.filter(app => 
      app.title.toLowerCase().includes(term) || 
      app.description.toLowerCase().includes(term) ||
      app.author.toLowerCase().includes(term) ||
      app.category.toLowerCase().includes(term)
    );
    
    onSearchResults(results);
  }, [searchTerm, apps, onSearchResults]);
  
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search size={18} className="text-[#AAAAAA]" />
      </div>
      <input
        type="text"
        placeholder="Search apps by name, description, or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-full bg-[#222222] text-[#F5F5F5] placeholder:text-[#AAAAAA] 
          border-2 border-transparent focus:border-[#D4AF37] focus:outline-none transition"
      />
    </div>
  );
} 