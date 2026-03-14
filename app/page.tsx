"use client";

import { useEffect, useState } from "react";
import StudyButton from "@/components/StudyButton";
import StreakCalendar from "@/components/StreakCalendar";
import Link from "next/link";

export default function Home() {

  const [stats, setStats] = useState({
    currentStreak: 0,
    totalDays: 0,
    lastStudyDate: "",
  });

  const [history, setHistory] = useState<string[]>([]);
  const [alreadyStudied, setAlreadyStudied] = useState(false);

  const fetchData = async () => {

    const res = await fetch("/api/streak");
    const data = await res.json();

    setStats(data);

    const historyRes = await fetch("/api/history");
    const historyData = await historyRes.json();

    setHistory(historyData);

    const today = new Date().toISOString().split("T")[0];

    if (historyData.includes(today)) {
      setAlreadyStudied(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatDate = (date: string) => {
    if (!date) return "None";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="bg-white w-[450px] p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          📚 Daily Learning Tracker
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          🔥 Keep your learning streak alive!
        </p>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3 mb-6">

          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">🔥 Streak</p>
            <p className="text-xl font-bold text-blue-600">
              {stats.currentStreak}
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">📚 Days</p>
            <p className="text-xl font-bold text-purple-600">
              {stats.totalDays}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">📅 Last</p>
            <p className="text-sm font-bold text-green-600">
              {formatDate(stats.lastStudyDate)}
            </p>
          </div>

        </div>

        {/* Achievement Badge */}

        {stats.currentStreak >= 7 && (
          <p className="text-center text-green-600 font-bold mb-4">
            🏆 7 Day Streak Achievement!
          </p>
        )}

        {/* Calendar */}

        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <StreakCalendar dates={history} />
        </div>

        {/* Buttons */}

        <div className="space-y-3">

          <StudyButton alreadyStudied={alreadyStudied} />

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