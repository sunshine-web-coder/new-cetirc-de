// api > hello > route.ts
import {NextResponse} from "next/server";

export async function POST(request) {
  try {
      const requestBody = await request.text();  // Read the raw body text
      const { latitude, longitude } = JSON.parse(requestBody);  // Parse the JSON
      const response = await fetch(process.env.NEXT_PUBLIC_STORES_API_URL, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "user_location": {
                latitude,
                longitude
              }
          })
      });
      const data = await response.json();
      return NextResponse.json(data);
  } catch (error) {
      return NextResponse.json({ error: "Failed to parse request body" }, { status: 400 });
  }
}