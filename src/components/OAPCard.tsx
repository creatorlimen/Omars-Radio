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
    <Card className="overflow-hidden border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all h-full flex flex-col">
      <div className="relative w-full h-64 bg-gray-300">
        <Image src={photo || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white">
        <h3 className="text-xl font-black text-foreground mb-2 uppercase">{name}</h3>
        <p className="text-sm text-gray-700 mb-4 flex-1 font-medium">{bio}</p>

        <div className="space-y-4 border-t-2 border-gray-200 pt-4">
          {shows.length > 0 && (
            <div>
              <p className="text-xs font-black text-foreground uppercase tracking-wider mb-2">Shows</p>
              <div className="flex flex-wrap gap-2">
                {shows.map((show) => (
                  <span key={show} className="text-xs bg-primary text-white px-2 py-1 font-black uppercase">
                    {show}
                  </span>
                ))}
              </div>
            </div>
          )}

          {focusAreas.length > 0 && (
            <div>
              <p className="text-xs font-black text-foreground uppercase tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span key={area} className="text-xs bg-gray-200 text-foreground px-2 py-1 font-black uppercase">
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
