import { NextRequest } from "next/server"
import { BASE_URL } from '@components/constants';


export async function POST(request: NextRequest) {
  
  const data = await request.json()
  const response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response

};

