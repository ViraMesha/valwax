import { NextRequest,NextResponse } from "next/server"

const urlUkrPoshta = process.env.NEXT_PUBLIC_API_URL
const methodCity = '/get_city_by_region_id_and_district_id_and_city_ua'

const ApiKeyUP = process.env.UKRPOSHTA_KEY

export async function GET(request: NextRequest) {
  const RegionId= request.nextUrl.searchParams.get("region_id");
  const response = await fetch(`${urlUkrPoshta}${methodCity}?region_id=${RegionId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ApiKeyUP}`,
    },
  });
  const data = await response.json();
  return NextResponse.json(data.Entries.Entry)
}