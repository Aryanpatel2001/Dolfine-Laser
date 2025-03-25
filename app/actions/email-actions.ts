"use server";

import nodemailer from "nodemailer";
import { format } from "date-fns";

// Define the type for the email data
interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: Date;
  formattedDate: string;
  time: string;
  product: string;
  timestamp: string;
}

// Create a transporter for sending emails
const createTransporter = () => {
  // For production, use your actual SMTP credentials
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "your-email@example.com",
      pass: process.env.SMTP_PASS || "your-password",
    },
  });
};

// Send confirmation email to the user
const sendUserEmail = async (data: EmailData) => {
  const transporter = createTransporter();

  const mailOptions = {
    to: data.email, //pateljainish1305@gmail.com
    from: process.env.SMTP_USER || "company@yourdomain.com",
    subject: `Your Demo for ${data.product} is Confirmed!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; text-align: center;">Demo Confirmation</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for scheduling a demo with us. Your request has been confirmed for:</p>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Product:</strong> ${data.product}</p>
          <p><strong>Date:</strong> ${data.formattedDate}</p>
          <p><strong>Time:</strong> ${data.time}</p>
        </div>

        <p>Our product specialist will contact you shortly to confirm the details and provide any additional information you might need.</p>

        <p>If you need to reschedule or have any questions, please contact us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a> or call us at +1 (555) 123-4567.</p>

        <p>We look forward to demonstrating how ${
          data.product
        } can benefit your business.</p>

        <p>Best regards,<br>The Demo Team</p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #777;">
          <p>This is an automated message. Please do not reply to this email.</p>
          <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};

// Send notification email to the company
const sendCompanyEmail = async (data: EmailData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: data.email, //pateljainish1305@gmail.com
    to: process.env.SMTP_USER || "company@yourdomain.com", //patelaryan2707@gmail.com
    subject: `New Demo Request: ${data.product}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; text-align: center;">New Demo Request</h2>
        <p>A new demo has been scheduled for ${data.product}.</p>
        
        <h3 style="margin-top: 20px;">Customer Details:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${
      data.email
    }</a></p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company}</p>
        </div>
        
        <h3 style="margin-top: 20px;">Demo Details:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <p><strong>Product:</strong> ${data.product}</p>
          <p><strong>Date:</strong> ${data.formattedDate}</p>
          <p><strong>Time:</strong> ${data.time}</p>
          <p><strong>Requested on:</strong> ${format(
            new Date(data.timestamp),
            "PPP 'at' p"
          )}</p>
        </div>
        
        <p style="margin-top: 20px;">Please ensure that a product specialist is assigned to this demo.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #777;">
          <p>This is an automated message from your demo scheduling system.</p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};

// Main function to send both emails
export async function sendConfirmationEmails(data: EmailData) {
  try {
    // Send email to the user
    await sendUserEmail(data);

    // Send notification to the company
    await sendCompanyEmail(data);

    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send emails",
    };
  }
}
