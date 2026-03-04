import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import { connectDatabase } from "./config/database.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { appointmentsRouter } from "./routes/appointments.js";
import { healthRouter } from "./routes/health.js";

const app = express();
const port = Number(process.env.PORT || 5000);
const databaseRetryMs = Number(process.env.DB_RETRY_MS || 15000);

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "SmileCare API is running",
    health: "/api/health",
  });
});

app.use("/api/health", healthRouter);
app.use("/api/appointments", appointmentsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

async function connectDatabaseWithRetry() {
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    return;
  }

  try {
    await connectDatabase();
  } catch (error) {
    console.error(
      `MongoDB connection failed. Retrying in ${databaseRetryMs / 1000}s...`,
      error?.message || error,
    );
    setTimeout(connectDatabaseWithRetry, databaseRetryMs);
  }
}

const httpServer = app.listen(port, "0.0.0.0", () => {
  console.log(`API server listening on port ${port}`);
});

httpServer.on("error", (error) => {
  if (error && error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Stop the process using that port or set a different PORT in server/.env.`,
    );
    process.exit(1);
  }

  console.error("Server failed to start", error);
  process.exit(1);
});

connectDatabaseWithRetry();
