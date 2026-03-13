"use client";

import { useEffect, useState } from "react";
import StudyButton from "@/components/StudyButton";
import Link from "next/link";

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
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">

      <h1 className="text-4xl font-bold mb-8 text-blue-600">
        Daily Learning Streak Tracker
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <div className="space-y-4 text-lg">

          <div className="flex justify-between">
            <span className="font-semibold">🔥 Current Streak</span>
            <span>{stats.currentStreak} days</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">📚 Total Study Days</span>
            <span>{stats.totalDays}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">📅 Last Studied</span>
            <span>{stats.lastStudyDate || "No record yet"}</span>
          </div>

        </div>

        <StudyButton />

        <Link href="/history">
          <button className="mt-4 w-full bg-gray-200 hover:bg-gray-300 p-3 rounded-lg">
            View Study History
          </button>
        </Link>

      </div>

    </main>
  );
}