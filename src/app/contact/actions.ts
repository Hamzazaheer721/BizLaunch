"use server";

import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { EMAIL, COMPANY_NAME } from "@/lib/utils";
import { headers } from "next/headers";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export interface ContactFormState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

let ratelimit: Ratelimit | null = null;

function getRatelimit(): Ratelimit | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  if (!ratelimit) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      analytics: false,
    });
  }
  return ratelimit;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    service: formData.get("service") || undefined,
    message: formData.get("message"),
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  // Rate limiting per IP — gracefully skip if Upstash is not configured
  const rl = getRatelimit();
  if (rl) {
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0].trim() ??
      headersList.get("x-real-ip") ??
      "anonymous";
    const { success } = await rl.limit(`contact:${ip}`);
    if (!success) {
      return { error: "Too many submissions. Please try again in an hour." };
    }
  }

  // Send email via Resend
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? `${COMPANY_NAME} Website <noreply@bizlaunchcsp.com>`,
      to: [EMAIL],
      replyTo: parsed.data.email,
      subject: `New Contact: ${parsed.data.name} — ${parsed.data.service ?? "General Enquiry"}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        `Phone: ${parsed.data.phone ?? "—"}`,
        `Service: ${parsed.data.service ?? "—"}`,
        "",
        `Message:`,
        parsed.data.message,
      ].join("\n"),
    });
    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to send your message. Please try again or contact us directly." };
    }
  }

  return { success: true };
}
