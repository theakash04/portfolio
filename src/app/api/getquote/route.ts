// app/api/getquote/route.ts
import { mistral } from "@ai-sdk/mistral";
import { generateText, Output } from "ai";
import { z } from "zod";
import { NextResponse } from "next/server";

const QuoteSchema = z.object({
  quote: z.string(),
  author: z.string(),
});

export async function GET() {
  try {
    const { output } = await generateText({
      model: mistral("mistral-small-latest"),

      output: Output.object({
        schema: QuoteSchema,
      }),

      prompt: `
Generate exactly one original quote about software engineering, programming, or developers.

Requirements:
- The quote must be completely original.
- Maximum 20 words.
- Make it insightful, memorable, and relatable.
- It may be humorous, thoughtful, motivational, or lightly sarcastic.
- Avoid clichés and overused programming jokes.
- Do not imitate or paraphrase famous quotes.
- Use a fictional but realistic author name.

Return only the structured object requested by the schema.
      `,
    });

    return NextResponse.json(output);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      quote: "Great software begins with clear thinking, not clever code.",
      author: "Ethan Brooks",
    });
  }
}
