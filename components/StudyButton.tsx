"use client";

import { useState } from "react";

export default function StudyButton() {

  const [loading, setLoading] = useState(false);

  const handleStudy = async () => {
    setLoading(true);

    const res = await fetch("/api/study", {
      method: "POST"
    });

    const data = await res.json();

    alert(data.message);

    setLoading(false);
  };

  return (
    <button
      onClick={handleStudy}
      className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
    >
      {loading ? "Marking..." : "I Studied Today"}
    </button>
  );
}