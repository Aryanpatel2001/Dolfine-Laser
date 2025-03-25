import { google } from "googleapis";
import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";

export async function POST(request: Request) {
  try {
    // Validate request body
    if (!request.body) {
      return NextResponse.json(
        { success: false, error: "Request body is missing" },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.company) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const jwt = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth: jwt,
    });

    const values = [
      [
        body.name,
        body.email,
        body.phone,
        body.company,
        body.product || "",
        body.date || "",
        body.time || "",
        body.requestedOn || new Date().toISOString(),
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Error adding to sheet:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add data to Google Sheet" },
      { status: 500 }
    );
  }
}
