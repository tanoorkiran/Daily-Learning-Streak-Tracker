"use client";

interface Props {
  dates: string[];
}

export default function StreakCalendar({ dates }: Props) {
  const today = new Date();
  const days = [];

  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];

    const studied = dates.includes(dateStr);

    days.push(
      <div
        key={i}
        className={`w-6 h-6 rounded-sm ${
          studied ? "bg-green-500" : "bg-gray-200"
        }`}
      />
    );
  }

  return (
    <div className="mt-6">

      <h2 className="text-center font-semibold mb-3">
        🔥 Study Streak Calendar
      </h2>

      <div className="grid grid-cols-10 gap-2 justify-center">
        {days}
      </div>

    </div>
  );
}