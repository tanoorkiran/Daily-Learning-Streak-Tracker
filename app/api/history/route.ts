import { NextResponse } from "next/server";

let studyDates: string[] = [];

export async function GET() {
  const history = [...studyDates].reverse();

  return NextResponse.json(history);
}