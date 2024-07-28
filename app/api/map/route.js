// api > hello > route.ts
import {NextResponse} from "next/server";

export async function POST(request) {
  try {
      const { searchQuery } = await request.json();  // Parse the request body
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      return NextResponse.json(data.results);
  } catch (error) {
      return NextResponse.json({ error: "Failed to parse request body" }, { status: 400 });
  }
}