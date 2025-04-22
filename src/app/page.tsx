'use client';

import { useState, useCallback } from 'react';
import { apps } from '../data/apps';
import AppGrid from '../components/AppGrid';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { AppData } from '../interfaces/app';
import Link from 'next/link';

export default function Home() {
  const [displayedApps, setDisplayedApps] = useState<AppData[]>(apps);
  const [filteredByCategory, setFilteredByCategory] = useState<AppData[]>(apps);
  const [searchResults, setSearchResults] = useState<AppData[]>(apps);
  
  // Memoize the category filter handler to prevent unnecessary re-renders
  const handleCategoryFilterChange = useCallback((filteredApps: AppData[]) => {
    setFilteredByCategory(filteredApps);
    setDisplayedApps(
      searchResults.filter(app => filteredApps.some(filteredApp => filteredApp.id === app.id))
    );
  }, [searchResults]);
  
  // Memoize the search results handler to prevent unnecessary re-renders
  const handleSearchResults = useCallback((results: AppData[]) => {
    setSearchResults(results);
    setDisplayedApps(
      results.filter(app => filteredByCategory.some(filteredApp => filteredApp.id === app.id))
    );
  }, [filteredByCategory]);
  
  return (
    <div className="space-y-4">
      <header className="space-y-6 text-center py-12">
        <h1 className="text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Directory For Cursor-Built Apps
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-[#F5F5F5]/90 leading-relaxed">
          Discover amazing applications built using the Cursor IDE. <br />From productivity tools to 
          development utilities, explore what the community has created.
        </p><br />
        <p className="mx-auto max-w-2xl text-xl text-[#F5F5F5]/90 leading-relaxed bg-[#1A1A1A] p-4 rounded-xl border border-gray-800/30">
          Disclaimer: This site is not an official part of the Cursor&copy; Company.<br /><br /> I built it as a passion project to showcase the amazing apps built using the equally amazing Platform. <br /><br />
          Any similarities with the official site is just me trying to mirror the company&apos;s vibe. Shoutout to the Cursor Team😊.
        </p>
      </header>

      <SearchBar apps={apps} onSearchResults={handleSearchResults} />
      <CategoryFilter apps={apps} onFilterChange={handleCategoryFilterChange} />
      
      {displayedApps.length > 0 ? (
        <AppGrid apps={displayedApps} />
      ) : (
        <div className="text-center py-10">
          <p className="text-[#AAAAAA] text-lg">No apps found matching your criteria.</p>
          <button 
            onClick={() => {
              setFilteredByCategory(apps);
              setSearchResults(apps);
              setDisplayedApps(apps);
            }}
            className="mt-4 px-6 py-2 bg-[#D4AF37] text-[#121212] rounded-full font-medium hover:bg-[#FFD700] transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
