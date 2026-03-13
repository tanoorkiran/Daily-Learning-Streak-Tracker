export function calculateStreak(dates: string[]) {
  if (dates.length === 0) return 0;

  const sorted = dates
    .map((d) => new Date(d))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const diff =
      (sorted[i].getTime() - sorted[i + 1].getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}