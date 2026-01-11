import { GoogleGenAI } from "@google/genai";
import { ENV } from "../../config/env.js";

if (!ENV.GEMINI_API_KEY) throw new Error("Missing Gemini API key");
const ai = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export async function generateResponse(systemPrompt, messages) {
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    config: {
      systemInstruction: { parts: [{ text: systemPrompt }] },
    },
  });

  return response.text;
}
