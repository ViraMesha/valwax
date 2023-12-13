import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const response = await fetch(
    `https://candle-store-backend-06135d73f38e.herokuapp.com/search?q=${query}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
