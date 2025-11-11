import { NextResponse } from "next/server";

global.__BOOKINGS__ = global.__BOOKINGS__ || [];
const bookings = global.__BOOKINGS__;

export async function GET(_req, { params }) {
  const resolvedParams = await params;
  const b = bookings.find(x => x.id === resolvedParams.bookingid);
  if (!b) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(b);
}

export async function DELETE(_req, { params }) {
  const resolvedParams = await params;
  const idx = bookings.findIndex(x => x.id === resolvedParams.bookingid);
  if (idx === -1) return NextResponse.json({ error: "not found" }, { status: 404 });
  const removed = bookings.splice(idx, 1)[0];
  return NextResponse.json({ success: true, removed });
}