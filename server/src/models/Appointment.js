import mongoose from "mongoose";
import { allowedServiceSlugs } from "../constants/services.js";

const fullNamePattern = /^[A-Za-z][A-Za-z' -]{1,119}$/;
const phonePattern = /^\+?[1-9]\d{7,14}$/;

const appointmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
      match: [fullNamePattern, "Enter a valid full name"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
      match: [phonePattern, "Enter a valid phone number"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
    },
    service: {
      type: String,
      required: true,
      trim: true,
      enum: allowedServiceSlugs,
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);
