import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, city, requirements, productName } = data;

    console.log("Email", email);
    // Email content
    const mailOptions = {
      from: email,
      to: "patelaryan2707@gmail.com",
      subject: `Quote Request for ${productName || "Products"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">New Quote Request</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #3498db;">Customer Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>City:</strong></td>
                  <td>${city}</td>
                </tr>
              </table>

              <h3 style="color: #3498db; margin-top: 20px;">Product Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Product Name:</strong></td>
                  <td>${productName || "Not specified"}</td>
                </tr>
              </table>

              <h3 style="color: #3498db; margin-top: 20px;">Requirements</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                ${requirements}
              </div>

              <div style="margin-top: 20px; font-size: 12px; color: #666;">
                <p>Request received on: ${new Date().toLocaleString()}</p>
                <p>Reference ID: REQ-${Date.now()}</p>
              </div>
            </div>

            <div style="margin-top: 20px; font-size: 12px; text-align: center; color: #666;">
              <p>This is an automated email notification. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
