"use client";

import { useEffect, useState } from "react";
import StudyButton from "@/components/StudyButton";
import Link from "next/link";

export default function Home() {
  const [stats, setStats] = useState({
    currentStreak: 0,
    totalDays: 0,
    lastStudyDate: "",
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
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          📚 Daily Learning Tracker
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Stay consistent. Build your learning streak.
        </p>

        {/* Stats Box */}
        <div className="space-y-3">

          <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
            <span>🔥 Current Streak</span>
            <span className="font-semibold">{stats.currentStreak}</span>
          </div>

          <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
            <span>📚 Total Study Days</span>
            <span className="font-semibold">{stats.totalDays}</span>
          </div>

          <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
            <span>📅 Last Studied</span>
            <span className="font-semibold">
              {stats.lastStudyDate || "None"}
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">

          <StudyButton />

          <Link href="/history">
            <button className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-lg transition">
              View Study History
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}