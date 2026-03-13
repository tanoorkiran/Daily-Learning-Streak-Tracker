"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Study History
      </h1>

      <ul className="space-y-2">
        {history.map((date, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            {date}
          </li>
        ))}
      </ul>
    </main>
  );
}