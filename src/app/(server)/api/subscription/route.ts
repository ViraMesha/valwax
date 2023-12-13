import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  try {
    const res = await fetch(
      `https://candle-store-backend-06135d73f38e.herokuapp.com/subscription/subscribe?email=${email}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
      }
    );
    return NextResponse.json({ message: 'The email was sent', success: true });
  } catch (error: unknown) {
    return NextResponse.json({ message: error, success: false });
  }
}
