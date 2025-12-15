"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type TimeDisplayProps = {
  timeZone: string;
};

// Helper to get initial time (runs on both server and client)
function getInitialTime(timeZone: string) {
  try {
    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);
    return time;
  } catch {
    return "00:00";
  }
}

export function TimeDisplay({ timeZone }: TimeDisplayProps) {
  const [time, setTime] = useState<string>(() => getInitialTime(timeZone));
  const [timeDiff, setTimeDiff] = useState<string>("local time");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Get time in the specified timezone
      const timeInTz = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setTime(timeInTz);

      // Calculate time difference by comparing hours in both timezones
      const tzHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      const localHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          hour12: false,
        }).format(now)
      );

      // Calculate difference (handling day boundary)
      let diffHours = tzHour - localHour;

      // Normalize to -12 to +12 range for edge cases crossing midnight
      if (diffHours > 12) diffHours -= 24;
      if (diffHours < -12) diffHours += 24;

      if (diffHours === 0) {
        setTimeDiff("same time");
      } else if (diffHours > 0) {
        setTimeDiff(`${diffHours}h ahead`);
      } else {
        setTimeDiff(`${Math.abs(diffHours)}h behind`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <span className="inline-flex items-center gap-1.5 text-sm whitespace-nowrap">
      <Clock className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
      <span className="font-semibold text-zinc-900 dark:text-zinc-50">
        {time}
      </span>
      <span className="text-zinc-400 dark:text-zinc-500">//</span>
      <span className="text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
        {timeDiff}
      </span>
    </span>
  );
}
