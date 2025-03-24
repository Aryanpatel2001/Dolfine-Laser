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

Key Products:
1. Fiber Laser Marking Machine - High-precision marking for metals and plastics with power options from 20W to 200W
2. Fiber Laser Cutting Machine - High-power cutting for metal sheets with power options from 1500W to 20000W
3. Fiber Laser Welding Machine - Precision welding with minimal heat distortion for metals
4. Online Laser Marking Machine - Integrated marking solution for production lines
5. CO2 Laser Cutting & Engraving Machine - Versatile solution for non-metal materials
6. UV Laser Marking Machine - Cold marking for sensitive materials and plastics
7. 3D Laser Marking Machine - Advanced marking on curved and irregular surfaces
8. Die Mould Laser Welding Machine - Specialized for mold repair and modification
9. Jewellery Laser Cutting Machine - Precision cutting for precious metals
10. Jewellery Laser Soldering Machine - Contactless precision joining for jewelry

Applications:
- Industrial part marking and traceability
- Metal fabrication and sheet metal processing
- Jewelry manufacturing and repair
- Signage and acrylic fabrication
- Automotive component manufacturing
- Electronics marking and cutting
- Medical device manufacturing
- Mold and die repair
- Packaging and labeling

Customer Support:
- Comprehensive training provided
- Technical support available via phone, email, and WhatsApp
- Spare parts readily available
- Preventive maintenance programs
- Extended warranty options

Contact Information:
- Email: info@dolphinlaser.com
- Phone: +91-9723738044 (replace with actual number)
- Website: www.dolphinlasermachine.com
- Address: Ahmedabad, Gujarat, India
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
      
      Guidelines for your responses:
      1. Be concise, professional, and focused on helping potential customers.
      2. Highlight the company's strengths: India's largest laser machine manufacturer, in-house R&D, global presence, and quality standards.
      3. When discussing products, mention their key features, applications, and available specifications.
      4. For technical questions, provide accurate information based on the product specifications.
      5. For pricing inquiries, suggest contacting the sales team for a customized quote.
      6. If you don't know the answer to a specific question, suggest they contact the company directly.
      7. Always maintain a helpful and professional tone.
      8. End your responses with a call to action when appropriate, such as inviting them to request a demo or contact for more information.
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
