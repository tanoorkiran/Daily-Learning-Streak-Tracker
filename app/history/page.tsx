"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HistoryPage() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          📅 Study History
        </h1>

        {history.length === 0 ? (
          <p className="text-center text-gray-500 mb-6">
            No study records yet.
          </p>
        ) : (
          <ul className="space-y-2 mb-6">
            {history.map((date, index) => (
              <li
                key={index}
                className="bg-gray-50 p-3 rounded-lg text-center"
              >
                {date}
              </li>
            ))}
          </ul>
        )}

        <Link href="/">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
            Back to Dashboard
          </button>
        </Link>

      </div>

    </main>
  );
}