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
    <Card className="p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all h-full flex flex-col">
      <div className="mb-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-black text-balance text-foreground flex-1 uppercase">{title}</h3>
          <span className="inline-block bg-primary text-white px-3 py-1 text-xs font-black flex-shrink-0 uppercase">
            {category}
          </span>
        </div>
        <p className="text-sm text-gray-700 mb-3 font-medium">{description}</p>
      </div>

      <div className="mt-auto space-y-2 text-sm text-gray-600 border-t-2 border-gray-200 pt-4">
        <p>
          <span className="font-black text-foreground">SCHEDULE:</span> {day} at {time}
        </p>
        <p>
          <span className="font-black text-foreground">LANGUAGE:</span> {language}
        </p>
      </div>
    </Card>
  );
}
