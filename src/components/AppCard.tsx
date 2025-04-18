'use client';

import Image from 'next/image';
import { Star, ChevronRight, ExternalLink } from 'lucide-react';
import { AppData } from '../interfaces/app';
import PlaceholderImage from './PlaceholderImage';
import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function AppCard({
  id,
  title,
  description,
  image,
  author,
  authorImage,
  category,
  rating,
  releaseDate,
  link,
  authorLink
}: AppData) {
  const [currentRating, setCurrentRating] = useState(rating);
  const [showPopup, setShowPopup] = useState(false);
  const [showAlreadyRatedPopup, setShowAlreadyRatedPopup] = useState(false);

  const handleRatingClick = (newRating: number) => {
    const cookieKey = `rating_${id}`;
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
    <div className="w-full relative">
      {/* Glow effect container */}
      <div className="absolute -inset-[1px] rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
        <div className="absolute inset-0 bg-[#1E1E1E] rounded-xl"></div>
        {/* Purple glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full blur-xl opacity-90"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400 rounded-full blur-lg opacity-80"></div>
        {/* Blue glow */}
        <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-blue-400 rounded-full blur-xl opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-lg opacity-80"></div>
      </div>

      {/* Main content */}
      <div className="relative rounded-xl p-5 bg-[#010101] border border-gray-800/30 transition-all duration-300 hover:border-[#D4AF37]/30 hover:translate-y-[-2px] group">
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          {image.startsWith('/') ? (
            <PlaceholderImage 
              seed={title} 
              className="w-full h-full" 
              text={title}
            />
          ) : (
            <Image src={image} alt={title} fill className="object-cover" priority />
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold leading-tight text-[#F5F5F5]">{title}</h2>

          <p className="text-s text-[#AAAAAA]">{description}</p>

          <div className="flex items-center gap-2">
            <span className="text-s font-medium text-[#F5F5F5]">DEVELOPER:</span>
            {authorLink ? (
              <div className="flex items-center gap-1">
                <a 
                  href={authorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-s text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors"
                >
                  {author}
                </a>
                <ExternalLink size={12} className="text-[#AAAAAA]" />
              </div>
            ) : (
              <span className="text-s text-[#AAAAAA]">{author}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 text-center">
            <div className="flex flex-col items-center relative">
              <span className="text-s text-[#F5F5F5]">Rating</span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < currentRating 
                        ? 'stroke-purple-400 fill-orange-500' 
                        : 'text-[#333333]'}
                      style={i < currentRating ? {
                        fill: 'url(#starGradient)',
                        stroke: 'url(#starGradient)'
                      } : {}}
                      onClick={() => handleRatingClick(i + 1)}
                      role="button"
                      aria-label={`Rate ${i + 1} stars`}
                    />
                  ))}
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
              {showPopup && (
                <div className="absolute top-[-20px] bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                  Rating recorded!
                </div>
              )}
              {showAlreadyRatedPopup && (
                <div className="absolute top-[-40px] bg-red-600 text-white text-xs px-2 py-1 rounded shadow-lg">
                  You have already rated this app.
                </div>
              )}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-s text-[#F5F5F5]">Category</span>
              <span className="text-xs text-[#AAAAAA]">{category}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-[#AAAAAA]">Released: {releaseDate}</div>

            <div className="flex items-center gap-4">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 px-6 py-2 text-s font-medium text-[#F5F5F5] transition-all hover:opacity-90 hover:scale-105 flex items-center gap-2"
              >
                <span>Visit</span>
                <ExternalLink size={14} />
              </a>

              <Link href={`/app/${id}`} className="flex items-center text-xs text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors">
                <span>Details</span>
                <ChevronRight size={14} className="text-gradient-to-r from-purple-400 via-pink-500 to-orange-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}