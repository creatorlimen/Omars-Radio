import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface OAPCardProps {
  id: string;
  name: string;
  photo: string;
  bio: string;
  shows: string[];
  focusAreas: string[];
}

export default function OAPCard({ id, name, photo, bio, shows, focusAreas }: OAPCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
      <div className="relative w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        <Image 
          src={photo || "/placeholder.svg"} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white">
        <h3 className="text-xl font-black text-foreground mb-2 uppercase group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1 font-medium leading-relaxed">{bio}</p>

        <div className="space-y-4 border-t border-gray-100 pt-4">
          {shows.length > 0 && (
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Shows</p>
              <div className="flex flex-wrap gap-2">
                {shows.map((show) => (
                  <span key={show} className="text-xs bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1.5 font-bold uppercase rounded-full shadow-sm">
                    {show}
                  </span>
                ))}
              </div>
            </div>
          )}

          {focusAreas.length > 0 && (
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span key={area} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 font-bold uppercase rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
