import { redis } from "../config/redis.js";

const WINDOW_SIZE = 10;

export async function getRecentMessages(userId) {
  const key = `chat:${userId}`;
  try {
    const raw = await redis.get(key);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error(`[Redis] Error fetching ${key}:`, error);
    return [];
  }
}


export async function saveMessage(userId, role, content) {
  const key = `chat:${userId}`;
  try {
    const messages = await getRecentMessages(userId);
    messages.push({ role, content });
    const trimmed = messages.slice(-WINDOW_SIZE);
    
    const result = await redis.set(key, JSON.stringify(trimmed), "EX", 86400);
    const ttl = await redis.ttl(key);
    
    console.log(`[Redis] Saved ${role} | Key: ${key} | Result: ${result} | TTL: ${ttl}s`);
  } catch (error) {
    console.error(`[Redis] Failed to save message for ${userId}:`, error);
  }
}
