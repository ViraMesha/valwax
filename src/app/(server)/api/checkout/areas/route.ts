import { NextRequest,NextResponse } from "next/server"

const urlUkrPoshta = process.env.NEXT_PUBLIC_API_URL
const methodAreas = '/get_regions_by_region_ua'

const ApiKeyUP = process.env.UKRPOSHTA_KEY

export async function GET() {
  const response = await fetch(`${urlUkrPoshta}${methodAreas}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ApiKeyUP}`,
    },
  });
  const data = await response.json();
  return NextResponse.json(data.Entries.Entry)
}