"use client";

import { useEffect, useState } from "react";
import StudyButton from "@/components/StudyButton";

export default function Home() {
  const [stats, setStats] = useState({
    currentStreak: 0,
    totalDays: 0,
    lastStudyDate: ""
  });

  const fetchStats = async () => {
    const res = await fetch("/api/streak");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        Daily Learning Streak Tracker
      </h1>

      <div className="bg-white shadow-lg p-6 rounded-xl">
        <p>Current Streak: {stats.currentStreak} days</p>
        <p>Total Study Days: {stats.totalDays}</p>
        <p>Last Studied: {stats.lastStudyDate}</p>

        <StudyButton />
      </div>
    </main>
  );
}