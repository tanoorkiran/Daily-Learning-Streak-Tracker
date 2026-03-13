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
    <main className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Study History
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

        {history.length === 0 ? (
          <p className="text-gray-500">No study records yet.</p>
        ) : (
          <ul className="space-y-3">
            {history.map((date, index) => (
              <li
                key={index}
                className="bg-gray-100 p-3 rounded-lg flex justify-between"
              >
                📅 <span>{date}</span>
              </li>
            ))}
          </ul>
        )}

        <Link href="/">
          <button className="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
            Back to Dashboard
          </button>
        </Link>

      </div>

    </main>
  );
}