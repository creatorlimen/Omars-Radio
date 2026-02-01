export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  broadcastTime: string;
  isLive: boolean;
  hostIds: string[];
}

export interface Show {
  id: string;
  title: string;
  description: string;
  category: string;
  day: string;
  time: string;
  language: string;
  hostIds: string[];
}

export interface OAP {
  id: string;
  name: string;
  photo: string;
  bio: string;
  shows: string[];
  focusAreas: string[];
}

export interface ScheduleSlot {
  startTime: string;
  endTime: string;
  programId: string;
  language: string;
  isRepeat: boolean;
}

export interface ScheduleDay {
  day: string;
  slots: ScheduleSlot[];
}

export interface MusicTrack {
  rank: number;
  title: string;
  artist: string;
  trend: 'up' | 'down' | 'steady';
}
