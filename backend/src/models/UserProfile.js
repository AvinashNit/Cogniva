import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  tonePreference: { type: String, default: "informal" },
  emotionalTrend: { type: String, default: "neutral" },
  preferences: { type: Object, default: {} }
}, { timestamps: true });

export default mongoose.model("UserProfile", UserProfileSchema);
