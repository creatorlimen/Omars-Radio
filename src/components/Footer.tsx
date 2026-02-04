import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/95 text-white mt-20 border-t-4 border-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-primary shadow-lg shadow-primary/20">
                <span className="font-black text-primary text-xs">OM</span>
              </div>
              <h3 className="font-black text-lg uppercase tracking-wide">O'MARS RADIO</h3>
            </div>
            <p className="text-sm font-medium text-white/80 leading-relaxed">
              Voices. Identity. Perspective. A digital radio platform for African and diaspora audiences.
            </p>
            <div className="mt-4 inline-block bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-xs font-bold uppercase tracking-wider">📻 Broadcasting Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black mb-5 uppercase tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/listen-live" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Listen Live
                </Link>
              </li>
              <li>
                <Link href="/top-shows" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Top Shows
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-black mb-5 uppercase tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Programs
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/schedule" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/listen-again" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Listen Again
                </Link>
              </li>
              <li>
                <Link href="/oaps" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Our Presenters
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-white/70 hover:text-primary font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black mb-5 uppercase tracking-wide text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs">✉️</span>
                <a href="mailto:omarscomandedultd@gmail.com" className="text-white/70 hover:text-primary font-medium transition-colors break-all">
                  omarscomandedultd@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs">📞</span>
                <div className="flex flex-col">
                  <span className="text-white/70 font-medium">+234 813 317 4190</span>
                  <span className="text-white/70 font-medium">+234 915 556 4722</span>
                </div>
              </div>
              <div className="flex gap-3 pt-3">
                <a
                  href="https://www.tiktok.com/@whispersnwords_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60 font-medium">
            &copy; {new Date().getFullYear()} O'MARS Communication and Education Promotion Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
