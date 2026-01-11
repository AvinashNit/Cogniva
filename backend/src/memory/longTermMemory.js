import UserProfile from "../models/UserProfile.js";
import ConversationSummary from "../models/ConversationSummary.js";

export async function getUserProfile(userId) {
  return UserProfile.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
}

export async function saveSummary(userId, summary) {
  await ConversationSummary.create({ userId, summary });
}
