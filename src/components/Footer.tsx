'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/30 mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#F5F5F5] font-semibold mb-4">About</h3>
            <p className="text-[#AAAAAA] text-sm">
              Cursor-Built Apps Directory showcases applications built with the Cursor IDE.
              Explore what developers have created with this powerful tool.
            </p>
          </div>
          
          <div>
            <h3 className="text-[#F5F5F5] font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors text-sm">
                  Directory
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors text-sm">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#F5F5F5] font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://www.cursor.so" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors text-sm block"
              >
                Cursor Website
              </a>
              <a 
                href="https://github.com/getcursor/cursor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors text-sm inline-flex items-center gap-2"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/30 text-center">
          <p className="text-[#AAAAAA] text-sm">
            &copy; {new Date().getFullYear()}. Cursor-Built Apps Directory.
          </p>
        </div>
      </div>
    </footer>
  );
}