import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const WHATSAPP_NUMBER = "971567012245";
export const PHONE_NUMBER = "+971 56 701 2245";
export const EMAIL = process.env.CONTACT_TO_EMAIL ?? "md@weknowbuis.com";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bizlaunchcsp.com";
export const COMPANY_NAME = "BizLaunch Corporate Services";
