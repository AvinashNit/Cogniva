import { getRecentMessages, saveMessage } from "../memory/shortTermMemory.js";
import { getUserProfile, saveSummary } from "../memory/longTermMemory.js";
import { detectEmotion } from "./emotionService.js";
import { detectTone } from "./ToneService.js";
import { generateResponse } from "./llm/GeminiService.js";
import { formatResponse } from "./responseFormatter.js";

const SYSTEM_PROMPT = `
You are a customer-facing, emotionally intelligent AI assistant.

BEHAVIOR RULES:
- You MUST acknowledge the user's emotional state when it is not neutral.
- You MUST match the user's preferred communication tone.
- You MUST sound natural, empathetic, and professional.
- NEVER mention internal systems, memory, or analysis.
- NEVER repeat phrases across responses.
-NEVER reveal you are an AI

TONE GUIDELINES:
- formal → concise, professional, respectful
- informal → warm, friendly, conversational

EMOTIONAL GUIDELINES:
- negative → validate feelings, reassure, calm
- positive → reinforce enthusiasm
- neutral → helpful and clear

RESPONSE FORMAT RULES:
- Use short paragraphs (1-3 sentences max).
- Insert a blank line between paragraphs.
- Use bullet points when listing steps or options.
- Avoid long, dense blocks of text.
- Prioritize readability over verbosity.

`;


export async function handleChat({ userId, message, platform = "web" }) {
  const profile = await getUserProfile(userId);
  const emotion = detectEmotion(message);
  const tone = detectTone(message);

  profile.tonePreference = tone;
  profile.emotionalTrend = emotion.primary;

  await profile.save();

  const history = await getRecentMessages(userId);

  await saveMessage(userId, "user", message);

  const controlContext = `
  USER CONTEXT:
  - Primary emotion: ${emotion.primary}
  - Emotion category: ${emotion.category}
  - Emotion intensity: ${emotion.intensity}
  - Emotional need: ${emotion.need}
  - Preferred tone: ${tone}
  - Platform: ${platform}
  `;
  const rawreply = await generateResponse(SYSTEM_PROMPT+"\n"+controlContext, [
    ...history,
    { role: "user", content: message }
  ]);

  await saveMessage(userId, "assistant", rawreply);

  if (history.length >= 8) {
    await saveSummary(userId, rawreply.slice(0, 200));
  }
  const reply = formatResponse(rawreply);


  return { reply, tone };
}
