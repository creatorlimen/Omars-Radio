'use client';

import React from "react"

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  streamUrl?: string;
  title?: string;
  isLive?: boolean;
}

export default function AudioPlayer({ streamUrl = '', title = 'O\'MARS Radio Live', isLive = true }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/95 to-primary/80 p-8 text-white shadow-2xl">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>
      
      {streamUrl ? (
        <audio ref={audioRef} src={streamUrl} crossOrigin="anonymous" />
      ) : (
        <audio ref={audioRef} crossOrigin="anonymous" />
      )}

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {isLive && (
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  LIVE NOW
                </span>
              )}
            </div>
            <h3 className="text-xl font-black text-balance tracking-tight">{title}</h3>
          </div>
          
          {/* Animated sound bars */}
          {isPlaying && (
            <div className="flex items-end gap-1 h-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-white/80 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 40}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.4 + Math.random() * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-14 h-14 rounded-full bg-white text-primary hover:scale-105 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </button>

          <div className="flex-1 flex items-center gap-3">
            <Volume2 className="w-5 h-5 flex-shrink-0 opacity-80" />
            <div className="flex-1 relative">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
                aria-label="Volume control"
              />
            </div>
            <span className="text-sm font-medium min-w-[3rem] text-right opacity-80">{volume}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
