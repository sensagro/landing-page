import { supabase } from "@/lib/supabase/client";
import type { ContactInsertPayload, ContactSaveResult } from "./types";

const TABLE_NAME = "Contacts";

const CREDENTIALS_MESSAGE =
  "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to your .env file.";

export async function saveContact(
  payload: ContactInsertPayload
): Promise<ContactSaveResult> {
  if (!supabase) {
    return { success: false, error: CREDENTIALS_MESSAGE };
  }

  const { error } = await supabase.from(TABLE_NAME).insert(payload);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
