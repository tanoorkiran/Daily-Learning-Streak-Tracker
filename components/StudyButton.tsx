"use client";

export default function StudyButton() {

  const handleStudy = async () => {
    const res = await fetch("/api/study", {
      method: "POST",
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <button
      onClick={handleStudy}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
    >
      I Studied Today
    </button>
  );
}