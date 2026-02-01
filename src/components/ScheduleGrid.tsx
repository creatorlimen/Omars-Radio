'use client';

import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';

interface ScheduleSlot {
  startTime: string;
  endTime: string;
  programId: string;
  language: string;
  isRepeat: boolean;
}

interface ScheduleData {
  day: string;
  slots: ScheduleSlot[];
}

interface ScheduleGridProps {
  schedule: ScheduleData[];
  programs: Record<string, { title: string; category: string }>;
  showGMT?: boolean;
}

function convertToGMT(timeStr: string): string {
  const [hours] = timeStr.split(':');
  const hoursNum = parseInt(hours);
  const gmtHours = (hoursNum + 1) % 24; // +1 for GMT offset (adjust as needed)
  return `${gmtHours.toString().padStart(2, '0')}:00 GMT`;
}

export default function ScheduleGrid({ schedule, programs, showGMT = false }: ScheduleGridProps) {
  const [selectedDay, setSelectedDay] = useState(schedule[0]?.day || 'Monday');
  const [isGMT, setIsGMT] = useState(showGMT);

  const currentDaySchedule = useMemo(() => {
    return schedule.find((d) => d.day === selectedDay);
  }, [selectedDay, schedule]);

  return (
    <div className="space-y-6">
      {/* Day Selector */}
      <div className="flex flex-wrap gap-2">
        {schedule.map((day) => (
          <button
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedDay === day.day
                ? 'bg-primary text-white'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {day.day}
          </button>
        ))}
      </div>

      {/* GMT Toggle */}
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={isGMT} onChange={(e) => setIsGMT(e.target.checked)} className="w-4 h-4" />
          <span className="text-sm font-medium">Show GMT times</span>
        </label>
      </div>

      {/* Schedule Grid */}
      <div className="space-y-3">
        {currentDaySchedule?.slots.map((slot, idx) => {
          const program = programs[slot.programId] || { title: 'TBA', category: 'Programming' };
          const displayTime = isGMT ? convertToGMT(slot.startTime) : slot.startTime;

          return (
            <Card key={idx} className="p-4 border-l-4 border-l-primary">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">{program.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {slot.startTime} - {slot.endTime}
                    {isGMT && ` (${convertToGMT(slot.startTime)})`}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                    {program.category}
                  </span>
                  <span className="inline-block bg-accent text-foreground px-2 py-1 rounded text-xs font-semibold">
                    {slot.language}
                  </span>
                  {slot.isRepeat && (
                    <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-semibold">
                      Repeat
                    </span>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
