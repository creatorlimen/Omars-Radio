'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B5457] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0B5457] font-bold text-xl">O</span>
              </div>
              <span className="font-bold text-xl">Omars</span>
            </div>
            <p className="text-sm text-white/90">
              Promoting Education. Amplifying Voices. Driving Impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="hover:text-white transition-colors">
                  Outreach & Advocacy
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link href="/publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:omarscomandedultd@gmail.com" className="hover:text-white transition-colors">
                  omarscomandedultd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+234</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
            <div className="flex gap-4">
              <a
                href="https://facebook.com/omarseducation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/omarseducation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/omarseducation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-white/80">
              © {currentYear} Omars Communication and Education Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
