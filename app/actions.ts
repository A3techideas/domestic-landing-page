'use server';

import { supabaseServerClient } from "@/lib/supabase";

export type LeadFormPayload = {
  name: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  company: string;
  service: string;
};

const isValidPayload = (payload: LeadFormPayload) => {
  if (!payload.name?.trim()) return false;
  if (!payload.email?.trim()) return false;
  if (!payload.phoneNumber?.trim()) return false;
  if (!payload.phoneCountryCode?.trim()) return false;
  return true;
};

export async function submitLead(payload: LeadFormPayload) {
  if (!isValidPayload(payload)) {
    throw new Error("Invalid lead data. Please check the required fields.");
  }

  const supabase = supabaseServerClient();
  const trimmedService = payload.service?.trim();
  const trimmedCompany = payload.company?.trim();
  const subject =
    trimmedService ||
    "Strategy Call Request — Hub Domestic Landing Page Submission";

  const message = [
    `Phone: ${payload.phoneCountryCode.trim()} ${payload.phoneNumber.trim()}`,
    trimmedCompany ? `Company: ${trimmedCompany}` : null,
    trimmedService ? `Service Interest: ${trimmedService}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await supabase.from("Contacts").insert({
    name: payload.name.trim(),
    email: payload.email.trim(),
    subject,
    message,
  });

  if (error) {
    console.error("Error inserting lead", error);
    throw new Error("Unable to submit the form right now. Please try again later.");
  }

  return { success: true } as const;
}

