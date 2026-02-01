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
      <div className="bg-primary text-white text-center py-1 text-xs font-bold">
        <span className="inline-block px-2">📻 LIVE BROADCAST</span>
      </div>

      <header className="sticky top-0 z-50 bg-secondary border-b-4 border-primary">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-primary">
                <span className="font-black text-primary text-sm">OM</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-lg text-white tracking-tight">O'MARS RADIO</div>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-white hover:bg-primary px-3 py-2 transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2 pb-4 space-y-1 border-t border-primary/20 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-xs font-bold text-white hover:bg-primary/80 rounded transition-colors uppercase"
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
