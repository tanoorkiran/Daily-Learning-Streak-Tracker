import { NextResponse } from "next/server";
import { studyDates } from "@/lib/storage";
import { calculateStreak } from "@/lib/streakLogic";

export async function GET() {

  const streak = calculateStreak(studyDates);

  return NextResponse.json({
    currentStreak: streak,
    totalDays: studyDates.length,
    lastStudyDate: studyDates[studyDates.length - 1] || null
  });
}