import { NextRequest, NextResponse } from 'next/server';
import { BASE_URL } from '@components/constants';
import { extractErrorMessage } from '@components/helpers/extractErrorMessage';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  try {
    const response = await fetch(
      `${BASE_URL}/subscription/subscribe?email=${email}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
      }
    );

    if (String(response.status).includes('400')) {
      return NextResponse.json(
        { message: 'Already subscribed', success: false },
        { status: 400 }
      );
    }

    if (String(response.status).includes('404')) {
      return NextResponse.json(
        { message: 'Not Found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'The email was sent', success: true });
  } catch (error: unknown) {
    return NextResponse.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
