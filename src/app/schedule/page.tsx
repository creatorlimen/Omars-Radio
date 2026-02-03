'use client';

import { useEffect, useState } from 'react';
import { Calendar, Loader2, Clock, RefreshCw, Info } from 'lucide-react';
import ScheduleGrid from '@/components/ScheduleGrid';
import type { ScheduleDay, Program } from '@/lib/types';

export default function Schedule() {
  const [schedule, setSchedule] = useState<ScheduleDay[]>([]);
  const [programs, setPrograms] = useState<Record<string, { title: string; category: string }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [scheduleRes, programsRes] = await Promise.all([
          fetch('/data/schedule.json'),
          fetch('/data/programs.json'),
        ]);

        const scheduleData = await scheduleRes.json();
        const programsData: Program[] = await programsRes.json();

        setSchedule(scheduleData);

        // Create programs lookup
        const programsMap: Record<string, { title: string; category: string }> = {};
        programsData.forEach((p) => {
          programsMap[p.id] = { title: p.title, category: p.category };
        });
        setPrograms(programsMap);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Calendar className="w-4 h-4" />
              Weekly Programming
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight break-words">Programme Schedule</h1>
            <p className="text-xl text-white/90 font-medium">Full weekly schedule for O'MARS Radio — your guide to quality programming</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-gray-500">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading schedule...</span>
              </div>
            </div>
          ) : (
            <ScheduleGrid schedule={schedule} programs={programs} showGMT={true} />
          )}

          {/* Legend */}
          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-foreground uppercase tracking-wide mb-1">Schedule Legend</h3>
                <p className="text-sm text-gray-500">Understanding the schedule indicators</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">New Broadcast</p>
                  <p className="text-xs text-gray-500">Fresh programme content</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Repeat</p>
                  <p className="text-xs text-gray-500">Previously aired content</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-gray-600 font-medium">
                💡 All times shown in local time. Toggle GMT option to see times in Greenwich Mean Time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
