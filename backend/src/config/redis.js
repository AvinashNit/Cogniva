import Redis from "ioredis";
import { ENV } from "./env.js";
// Configuration adapted from the provided documentation example
const redisOptions = {
  host: ENV.REDIS_HOST,
  port: ENV.REDIS_PORT ,
  username: ENV.REDIS_USERNAME,
  password: ENV.REDIS_PASSWORD,
    db: 0,
};

export const redis = new Redis(redisOptions);

redis.on("error", (err) => console.log("Redis Client Error", err));
redis.on("connect", () => {
  console.log(`Redis Client Connected to ${redisOptions.host}:${redisOptions.port}`);
  console.log(`> Selected DB Index: ${redis.options.db || 0}`);
});
redis.on("ready", () => console.log("Redis Client Ready"));