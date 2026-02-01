'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Outreach & Advocacy', href: '/outreach' },
    { label: 'Programs', href: '/programs' },
    { label: 'Publications', href: '/publications' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-lg text-primary hidden sm:inline">Omars</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: mobile menu button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
