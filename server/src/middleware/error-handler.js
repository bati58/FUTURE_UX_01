import { ZodError } from "zod";

export function notFoundHandler(req, res) {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

export function errorHandler(err, _req, res, _next) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (err?.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: Object.values(err.errors).map((fieldError) => ({
        field: fieldError.path,
        message: fieldError.message,
      })),
    });
  }

  if (err?.message === "Not allowed by CORS") {
    return res.status(403).json({
      message: "Request origin is not allowed",
    });
  }

  const statusCode = err?.statusCode ?? 500;
  const message =
    statusCode >= 500
      ? "Internal server error"
      : err?.message || "Request failed";

  if (statusCode >= 500) {
    console.error(err);
  }

  return res.status(statusCode).json({ message });
}
