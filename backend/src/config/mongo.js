import mongoose from "mongoose";
import { ENV } from "./env.js";

export async function connectMongo() {
  await mongoose.connect(ENV.MONGO_URI);
}

export async function disconnectMongo() {
  await mongoose.disconnect();
}