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
      <div>
        <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider mb-3">Select Day</h3>
        <div className="flex flex-wrap gap-2">
          {schedule.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                selectedDay === day.day
                  ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-md'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* GMT Toggle */}
      <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input type="checkbox" checked={isGMT} onChange={(e) => setIsGMT(e.target.checked)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm" />
          </div>
          <span className="text-sm font-bold text-gray-700">Show GMT times</span>
        </label>
      </div>

      {/* Schedule Grid */}
      <div className="space-y-3">
        {currentDaySchedule?.slots.map((slot, idx) => {
          const program = programs[slot.programId] || { title: 'TBA', category: 'Programming' };
          const displayTime = isGMT ? convertToGMT(slot.startTime) : slot.startTime;

          return (
            <Card key={idx} className="group p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-l-primary">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-black text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">{program.title}</h4>
                  <p className="text-sm text-gray-600 font-medium mt-1">
                    🕐 {slot.startTime} - {slot.endTime}
                    {isGMT && <span className="text-primary font-bold"> ({convertToGMT(slot.startTime)})</span>}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-3 py-1.5 rounded-full text-xs font-bold">
                    {program.category}
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold">
                    {slot.language}
                  </span>
                  {slot.isRepeat && (
                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-bold">
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
