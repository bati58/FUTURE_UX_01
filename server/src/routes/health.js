import { Router } from "express";
import mongoose from "mongoose";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  const readyState = mongoose.connection.readyState;
  const statusByState = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  res.status(200).json({
    status: "ok",
    service: "smilecare-api",
    database: statusByState[readyState] || "unknown",
    databaseReadyState: readyState,
    timestamp: new Date().toISOString(),
  });
});
