'use client';

import { useEffect, useState } from 'react';
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Programme Schedule</h1>
          <p className="text-lg text-white/90">Full weekly schedule for O'MARS Radio</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading schedule...</p>
            </div>
          ) : (
            <ScheduleGrid schedule={schedule} programs={programs} showGMT={true} />
          )}

          {/* Legend */}
          <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-4">Schedule Legend</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="inline-block w-4 h-4 bg-primary rounded mr-2" />
                New programme broadcast
              </p>
              <p>
                <span className="inline-block px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs mr-2">
                  Repeat
                </span>
                Previous broadcast
              </p>
              <p className="mt-4">All times shown in local time. Toggle GMT option to see times in Greenwich Mean Time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
