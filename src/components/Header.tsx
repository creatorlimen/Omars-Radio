'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/listen-live', label: 'Listen Live' },
  { href: '/now-playing', label: 'Now Playing' },
  { href: '/top-shows', label: 'Top Shows' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/top-music', label: 'Music Chart' },
  { href: '/listen-again', label: 'Listen Again' },
  { href: '/oaps', label: 'Presenters' },
  { href: '/education', label: 'Education' },
  { href: '/rate-card', label: 'Rate Card' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white text-center py-1.5 text-xs font-bold shadow-sm">
        <span className="inline-flex items-center gap-2 px-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          LIVE BROADCAST
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-gradient-to-r from-secondary via-secondary to-secondary/95 border-b-4 border-primary shadow-lg backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-primary shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-black text-primary text-sm">OM</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-lg text-white tracking-tight group-hover:text-primary/90 transition-colors">O'MARS RADIO</div>
                <div className="text-[10px] text-white/60 font-medium uppercase tracking-widest">Voices • Identity • Perspective</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-white/90 hover:text-white hover:bg-primary/80 px-3 py-2 rounded-lg transition-all duration-200 uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-primary/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 space-y-1 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-xs font-bold text-white hover:bg-primary/80 rounded-lg transition-all duration-200 uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
