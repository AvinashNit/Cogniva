import mongoose from "mongoose";

const ConversationSummarySchema = new mongoose.Schema({
  userId: String,
  summary: String
}, { timestamps: true });

export default mongoose.model("ConversationSummary", ConversationSummarySchema);
