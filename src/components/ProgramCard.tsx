import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    <Card className="p-6 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-black text-foreground flex-1 uppercase">{title}</h3>
        <div className="flex gap-2 flex-shrink-0">
          {isLive && <Badge className="bg-primary text-white font-black">LIVE</Badge>}
          <Badge className="bg-primary text-white font-black uppercase">{category}</Badge>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4 font-medium">{description}</p>

      <div className="space-y-2 text-sm">
        <p className="text-gray-600">
          <span className="font-black text-foreground">TIME:</span> {broadcastTime}
        </p>
        <p className="text-gray-600">
          <span className="font-black text-foreground">LANGUAGE:</span> {language}
        </p>
      </div>
    </Card>
  );
}
