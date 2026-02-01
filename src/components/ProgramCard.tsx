import { Clock, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  broadcastTime: string;
  isLive?: boolean;
}

export default function ProgramCard({
  id,
  title,
  description,
  category,
  language,
  broadcastTime,
  isLive = false,
}: ProgramCardProps) {
  return (
    <Card className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
      
      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-lg font-black text-foreground flex-1 uppercase group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex gap-2 flex-shrink-0">
            {isLive && (
              <span className="inline-flex items-center gap-1.5 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                LIVE
              </span>
            )}
            <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-xs font-bold shadow-sm uppercase">
              {category}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-5 font-medium leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-4 text-sm border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">{broadcastTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">{language}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
