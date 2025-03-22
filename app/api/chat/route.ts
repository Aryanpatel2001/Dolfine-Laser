import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

// Company information for the AI to use
const COMPANY_INFO = `
Dolphin Laser Machine Pvt. Ltd. is India's largest and leading manufacturing company of laser machines.
- Founded in 2015 and based in Ahmedabad
- Manufacturer and Exporter of industrial laser machines including Marking, Cutting, Engraving, Welding, and Cleaning
- Has an in-house R&D team and follows ISO & CE standards
- Has installations in over 20 countries with more than 4000 machines deployed worldwide
- Has received the "Growth of Gujarat Make in India" award
- Products include various laser machines for different industrial applications
`;

export async function POST(req: Request) {
  try {
    // Parse the request body to get the user's message
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Create a system message with company information
    const systemMessage = `
      You are a helpful assistant for Dolphin Laser Machine Pvt. Ltd. 
      Use the following information to answer questions about the company and its products:
      ${COMPANY_INFO}
      
      Keep your answers concise, professional, and focused on helping potential customers.
      If you don't know the answer to a specific question, suggest they contact the company directly.
      Always maintain a helpful and professional tone.
    `;

    // Call the OpenAI API to generate a response
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // You can change this to a different model if needed
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: message },
      ],
      max_tokens: 500, // Limit the response length
    });
    console.log("response", completion);
    // Extract the assistant's response
    const response =
      completion.choices[0]?.message?.content ||
      "I apologize, but I couldn't generate a response. Please try again.";

    // Return the response as JSON
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in chat API:", error);

    // Return an error response
    return NextResponse.json(
      {
        error: "Failed to generate response",
        response:
          "I apologize, but I'm experiencing technical difficulties. Please email support@dolphinlaser.com or try again later.",
      },
      { status: 500 }
    );
  }
}
