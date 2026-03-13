"use client";

export default function StudyButton() {
  const handleStudy = async () => {
    const res = await fetch("/api/study", {
      method: "POST"
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <button
      onClick={handleStudy}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4"
    >
      I Studied Today
    </button>
  );
}