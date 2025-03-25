"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Define the shape of the data we'll be sending to Google Sheets
interface SheetData {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: string; // Formatted as YYYY-MM-DD
  time: string;
  product: string;
  timestamp: string;
}

// Define the response type
interface SheetResponse {
  success: boolean;
  error?: string;
}

export async function testGoogleSheetConnection(
  data: SheetData
): Promise<SheetResponse> {
  try {
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      throw new Error("Google Sheets credentials are not properly configured");
    }

    // Format the private key correctly
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

    console.log("Attempting to connect with:", {
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      sheetId: process.env.GOOGLE_SHEET_ID,
      hasKey: !!privateKey,
    });

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID,
      serviceAccountAuth
    );

    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];
    console.log("sheet", sheet);
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

    console.log(
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.company,
      data.product,
      data.date,
      data.time
    );

    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Product: data.product,
      Date: data.date,
      Time: data.time,
    });

    console.log("Successfully connected to sheet:", doc.title);
    return { success: true };
  } catch (error) {
    console.error("Connection test failed:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      response:
        error && typeof error === "object" && "response" in error
          ? (error.response as any)?.data
          : undefined,
    });
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
