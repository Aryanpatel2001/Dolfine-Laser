import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// This is an alternative API route approach if you prefer using API routes instead of server actions

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.date || !data.time) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create a JWT client using service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize the Google Spreadsheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID,
      serviceAccountAuth
    );
    await doc.loadInfo();

    // Get the first sheet (or create one if it doesn't exist)
    let sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      sheet = await doc.addSheet({
        title: "Demo Requests",
        headerValues: [
          "Name",
          "Email",
          "Phone",
          "Company",
          "Product",
          "Date",
          "Time",
        ],
      });
    }

    // Add the row to the sheet
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Phone: data.phone || "N/A",
      Company: data.company || "N/A",
      Product: data.product || "N/A",
      Date: data.date,
      Time: data.time,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding to Google Sheet:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
