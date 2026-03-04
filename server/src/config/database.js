import mongoose from "mongoose";

export async function connectDatabase() {
  const connectionUri = process.env.MONGODB_URI;

  if (!connectionUri) {
    throw new Error("MONGODB_URI is not set. Add it in server/.env.");
  }

  await mongoose.connect(connectionUri);
  console.log("MongoDB connected");
}
