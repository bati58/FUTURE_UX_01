import { Router } from "express";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import { z } from "zod";
import { Appointment } from "../models/Appointment.js";
import { allowedServiceSlugs } from "../constants/services.js";

const fullNamePattern = /^[A-Za-z][A-Za-z' -]{1,119}$/;
const internationalPhonePattern = /^\+?[1-9]\d{7,14}$/;
const ethiopianLocalPattern = /^09\d{8}$/;
const ethiopianIntlNoPlusPattern = /^2519\d{8}$/;

function normalizePhone(phone) {
  let cleaned = phone.trim().replace(/[^\d+]/g, "");

  if (cleaned.startsWith("00")) {
    cleaned = `+${cleaned.slice(2)}`;
  }

  if (ethiopianLocalPattern.test(cleaned)) {
    return `+251${cleaned.slice(1)}`;
  }

  if (ethiopianIntlNoPlusPattern.test(cleaned)) {
    return `+${cleaned}`;
  }

  return cleaned;
}

const appointmentRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(120, "Full name is too long")
    .refine((value) => fullNamePattern.test(value), {
      message: "Full name can only include letters, spaces, apostrophes, and hyphens",
    }),
  phone: z
    .string()
    .trim()
    .transform((value) => normalizePhone(value))
    .refine((value) => internationalPhonePattern.test(value), {
      message: "Enter a valid phone number (09..., +2519..., or international format)",
    }),
  email: z.string().trim().email("Enter a valid email address").toLowerCase(),
  service: z
    .string()
    .trim()
    .refine((value) => allowedServiceSlugs.includes(value), {
      message: "Please select a valid service option",
    }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Preferred date must be in YYYY-MM-DD format"),
  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional()
    .default(""),
});

const createAppointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many appointment requests. Please try again in a few minutes.",
  },
});

export const appointmentsRouter = Router();

appointmentsRouter.post("/", createAppointmentLimiter, async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: "Database is not connected yet. Please try again shortly.",
      });
    }

    const parsedRequest = appointmentRequestSchema.parse(req.body);

    const preferredDate = new Date(parsedRequest.preferredDate);
    if (Number.isNaN(preferredDate.getTime())) {
      return res.status(400).json({
        message: "Preferred date must be a valid calendar date",
      });
    }

    preferredDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (preferredDate < today) {
      return res.status(400).json({
        message: "Preferred date cannot be in the past",
      });
    }

    const createdAppointment = await Appointment.create({
      ...parsedRequest,
      preferredDate,
    });

    return res.status(201).json({
      message: "Appointment request received successfully",
      appointment: {
        id: createdAppointment.id,
        fullName: createdAppointment.fullName,
        phone: createdAppointment.phone,
        email: createdAppointment.email,
        service: createdAppointment.service,
        preferredDate: createdAppointment.preferredDate,
        status: createdAppointment.status,
        createdAt: createdAppointment.createdAt,
      },
    });
  } catch (error) {
    return next(error);
  }
});
