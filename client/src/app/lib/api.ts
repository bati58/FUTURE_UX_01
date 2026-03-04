export type AppointmentPayload = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message?: string;
};

type ApiFieldError = {
  field?: string;
  message: string;
};

type ApiErrorResponse = {
  message?: string;
  errors?: ApiFieldError[];
};

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const API_BASE_URL = configuredApiUrl
  ? configuredApiUrl.replace(/\/$/, "")
  : "/api";

export async function createAppointment(payload: AppointmentPayload) {
  const response = await fetch(`${API_BASE_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as ApiErrorResponse;

  if (!response.ok) {
    const firstFieldError = data.errors?.[0]?.message;
    throw new Error(
      firstFieldError || data.message || "Could not submit appointment request",
    );
  }

  return data;
}
