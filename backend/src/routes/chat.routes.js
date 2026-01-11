import express from "express";
import { handleChat } from "../services/ChatService.js";

const router = express.Router();
router.get("/",(req,res)=>{
  console.log("Chat route is working");
  res.send("Chat route is working");
})
router.post("/", async (req, res) => {
  console.log("Chat route is working");
  try {
    const { userId, message, platform } = req.body;
    if (!userId || !message) {
      return res.status(400).json({ error: "Invalid request" });
    }
    const result = await handleChat({ userId, message, platform });
    res.json(result);
  } catch (err) {
    console.error("Error in chat route:", err);
    res.status(500).json({ error: "Service unavailable" });
  }
});

export default router;
