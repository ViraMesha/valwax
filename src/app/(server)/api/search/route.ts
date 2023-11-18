export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const response = await fetch(`http://localhost:8082/search?pattern=${query}`);
  const data = await response.json();
  return Response.json({ data });
}
