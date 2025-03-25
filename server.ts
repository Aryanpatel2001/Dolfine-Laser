// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST || "smtp.gmail.com",
//   port: parseInt(process.env.SMTP_PORT || "587"),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// app.post("/api/send-quote", async (req, res) => {
//   try {
//     const { name, email, phone, city, requirements, productName } = req.body;

//     // Email content
//     const mailOptions = {
//       from: process.env.SMTP_USER,
//       to: "inquiry@dolphinlasermachine.com",
//       subject: `Quote Request for ${productName || "Products"}`,
//       html: `
//         <h2>New Quote Request</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Product:</strong> ${productName || "Not specified"}</p>
//         <h3>Requirements:</h3>
//         <p>${requirements}</p>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Quote request sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send quote request" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
