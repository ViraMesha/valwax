import { NextRequest,NextResponse } from "next/server"
import { BASE_URL } from '@components/constants';


export async function POST(request: NextRequest) {

  const data = await request.json()
  
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.status !== 200 ) {
      throw new Error('The response status is not 200');
    };
    
    return NextResponse.json({message: 'The order has been sent', success: true})
  } catch (error: any) {
    return NextResponse.json({message: error.message, success: false});
  }
};

