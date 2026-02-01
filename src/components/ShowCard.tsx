import Link from 'next/link';
import { Card } from '@/components/ui/card';

interface ShowCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  day: string;
  time: string;
  language: string;
}

export default function ShowCard({ id, title, description, category, day, time, language }: ShowCardProps) {
  return (
    <Card className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1 overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
      
      <div className="relative mb-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-black text-balance text-foreground flex-1 uppercase group-hover:text-primary transition-colors">{title}</h3>
          <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 text-xs font-black flex-shrink-0 uppercase rounded-full shadow-sm">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-medium">{description}</p>
      </div>

      <div className="mt-auto space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">📅</span>
          <span><span className="font-bold text-foreground">{day}</span> at {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">🗣️</span>
          <span className="font-medium">{language}</span>
        </div>
      </div>
    </Card>
  );
}
