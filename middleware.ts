import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware adds basic protection to the API routes
// You can expand this with more robust authentication as needed

export function middleware(request: NextRequest) {
  // Check if the request is for the sheets API
  if (request.nextUrl.pathname.startsWith("/api/sheets")) {
    // Get the API key from the request headers
    const apiKey = request.headers.get("x-api-key");

    // Check if the API key is valid (compare with your environment variable)
    if (!apiKey || apiKey !== process.env.API_KEY) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/sheets/:path*",
};
