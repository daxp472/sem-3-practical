import { NextResponse } from "next/server";

global.__BOOKINGS__ = global.__BOOKINGS__ || [];
const bookings = global.__BOOKINGS__;

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.hotelId || !body.userName || !body.from || !body.to) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }
    const newBooking = {
      id: Date.now().toString(),
      hotelId: String(body.hotelId),
      userName: String(body.userName),
      from: String(body.from),
      to: String(body.to),
      price: Number(body.price ?? 0),
    };
    bookings.push(newBooking);
    return NextResponse.json(newBooking, { status: 201 });
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
}