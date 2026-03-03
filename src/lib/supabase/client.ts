import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as
  | string
  | undefined;

function createSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabasePublishableKey) {
    return null;
  }
  return createClient(supabaseUrl, supabasePublishableKey);
}

export const supabase = createSupabaseClient();
