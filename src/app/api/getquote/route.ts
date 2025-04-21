// app/api/getquote/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Google API Key" },
      { status: 500 }
    );
  }

  const genAI = new GoogleGenAI({ apiKey });

  try {
    const prompt = `
      Write a short, clever quote about software developers or software engineering.

      Make it:
      - Funny, but still true.
      - Something suitable for a sticker, tweet, or T-shirt.
      - A bit cheeky but relatable to developers.

      Ensure the response is in the following exact JSON format:

      {
        "quote": "Your quote goes here",
        "author": "Author's name goes here"
      }

      Do NOT include any extra explanation, markdown, or additional text — only the quote and author in the exact JSON format shown above.
      `;

    const response = await genAI.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    if (response.text) {
      const cleanedResponse = response.text
        .replace(/^```json\s*|\s*```$/g, "")
        .trim()
        .replace(/`{3}$/g, "")
        .trim();

      const aiResponse = JSON.parse(cleanedResponse);
      // Check if the response has the expected structure
      if (!aiResponse.quote || !aiResponse.author) {
        throw new Error("Invalid response structure from AI");
      }

      // Return the quote and author
      return NextResponse.json(aiResponse);
    }

    throw new Error();
  } catch {
    return NextResponse.json(
      {
        quote: "In code we trust, but tests we must.",
        author: "Alex Debugsson",
      },
      { status: 500 }
    );
  }
}
