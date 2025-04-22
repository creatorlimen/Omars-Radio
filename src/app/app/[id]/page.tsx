'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ExternalLink, Github } from 'lucide-react';
import { apps } from '../../../data/apps';
import PlaceholderImage from '../../../components/PlaceholderImage';
import { useState } from 'react';
import Cookies from 'js-cookie';

interface AppDetailsPageProps {
  params: {
    id: string;
  };
}

export default function AppDetailsPage({ params }: AppDetailsPageProps) {
  const app = apps.find(app => app.id === params.id);
  
  if (!app) {
    notFound();
  }

  const [currentRating, setCurrentRating] = useState(app.rating);
  const [showPopup, setShowPopup] = useState(false);
  const [showAlreadyRatedPopup, setShowAlreadyRatedPopup] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (newRating: number) => {
    const cookieKey = `rating_${app.id}`;
    if (Cookies.get(cookieKey)) {
      setShowAlreadyRatedPopup(true);
      setTimeout(() => setShowAlreadyRatedPopup(false), 2000);
      return;
    }

    setCurrentRating(newRating);
    Cookies.set(cookieKey, newRating.toString(), { expires: 365 });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  
  return (
    <div className="container mx-auto max-w-6.5xl px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors rounded-full px-4 py-2 hover:bg-[#1A1A1A]"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Directory</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#1A1A1A] border border-gray-800/30">
            {!app.image ? (
              <PlaceholderImage 
                seed={app.title} 
                className="w-full h-full" 
                text={app.title}
              />
            ) : (
              <Image 
                src={app.image} 
                alt={app.title} 
                fill 
                className="object-cover" 
                priority 
              />
            )}
          </div>

          <div className="flex gap-4 mt-4">
            <a 
              href={app.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 px-6 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center gap-2 flex-1"
            >
              <ExternalLink size={16} />
              <span>Visit App</span>
            </a>
            
            {app.githubUrl && (
              <a 
                href={app.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:opacity-90 hover:scale-105 border border-gray-800/30"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
              {app.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[#AAAAAA] text-sm">Released: {app.releaseDate}</span>
            </div>
            <p className="text-[#F5F5F5]/90 text-lg leading-relaxed">{app.description}</p>
          </div>

          <div className="flex items-center p-4 border border-purple-800/50 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 transition-all hover:opacity-90 hover:scale-105">
            <div>
              <p className="text-[#F5F5F5] font-medium">{app.author}</p>
              <p className="text-[#AAAAAA] text-sm">Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-purple-800/50 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 transition-all hover:opacity-90 hover:scale-105">
              <h3 className="text-[#AAAAAA] text-sm mb-2">Category</h3>
              <p className="text-[#F5F5F5]">{app.category}</p>
            </div>
            
            <div className="p-4 border border-purple-800/50 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 transition-all hover:opacity-90 hover:scale-105">
              <h3 className="text-[#AAAAAA] text-sm mb-2">Rating</h3>
              <div className="flex items-center relative">
                <div className="flex mr-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < (hoveredRating || currentRating)
                            ? 'stroke-purple-400 fill-orange-500 cursor-pointer transition-colors'
                            : 'text-[#333333] cursor-pointer transition-colors'
                        }
                        style={i < (hoveredRating || currentRating) ? {
                          fill: 'url(#starGradient)',
                          stroke: 'url(#starGradient)'
                        } : {}}
                        onMouseEnter={() => setHoveredRating(i + 1)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => handleRatingClick(i + 1)}
                        role="button"
                        aria-label={`Rate ${i + 1} stars`}
                      />
                    ))}
                </div>
                <span className="text-[#F5F5F5]">{currentRating}/5</span>
                {showPopup && (
                  <div className="absolute right-0 top-[-30px] bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                    Rating recorded!
                  </div>
                )}
                {showAlreadyRatedPopup && (
                  <div className="absolute right-0 top-[-30px] bg-red-600 text-white text-xs px-2 py-1 rounded shadow-lg">
                    You have already rated this app.
                  </div>
                )}
              </div>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-[#F5F5F5]">Additional Information</h2>
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800/30 space-y-4">
          {app.additionalInfo ? 
            app.additionalInfo.split('<p>').map((text, index) => (
              <p key={index} className="text-[#AAAAAA]">{text}</p>
            ))
            : 
            <p className="text-[#AAAAAA]">No additional information available for this app.</p>
          }
        </div>
      </div>
    </div>
  );
}