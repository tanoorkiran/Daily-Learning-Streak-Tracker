"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  alreadyStudied: boolean;
}

export default function StudyButton({ alreadyStudied }: Props) {

  const [loading, setLoading] = useState(false);

  const handleStudy = async () => {

    if (alreadyStudied) {
      toast.error("You already studied today!");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/study", {
      method: "POST",
    });

    const data = await res.json();

    if (data.message.includes("already")) {
      toast.error(data.message);
    } else {
      toast.success("Study recorded! Keep your streak 🔥");
      setTimeout(() => location.reload(), 800);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleStudy}
      disabled={alreadyStudied}
      className={`w-full py-3 rounded-lg font-semibold transition
      ${
        alreadyStudied
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
    >
      {loading ? "Saving..." : alreadyStudied ? "Studied Today ✓" : "I Studied Today"}
    </button>
  );
}