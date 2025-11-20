import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabaseServerClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a mock client in development to prevent crashes
    // In production, you should set these environment variables
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️  Supabase environment variables are not set. Form submissions will fail."
      );
      // Return a client with dummy values that will fail gracefully
      return createClient(
        supabaseUrl || "https://placeholder.supabase.co",
        supabaseAnonKey || "placeholder-key",
        {
          auth: {
            persistSession: false,
          },
        }
      );
    }
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable"
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
};

