import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@components/constants';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  try {
    await fetch(`${BASE_URL}/subscription/subscribe?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    });
    return NextResponse.json({ message: 'The email was sent', success: true });
  } catch (error: unknown) {
    return NextResponse.json({ message: error, success: false });
  }
}
