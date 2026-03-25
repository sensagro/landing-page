import type { ContactInsertPayload, ContactSaveResult } from "./types";

const DEFAULT_API_URL = "http://localhost:3000";

function apiBaseUrl(): string {
  const base = import.meta.env.VITE_API_URL as string | undefined;
  return (base?.replace(/\/$/, "") || DEFAULT_API_URL);
}

const MISSING_API_MESSAGE =
  "API URL is not configured. Set VITE_API_URL in your environment (e.g. in .env).";

export async function saveContact(
  payload: ContactInsertPayload,
): Promise<ContactSaveResult> {
  const url = import.meta.env.VITE_API_URL;
  if (url !== undefined && typeof url === "string" && url.trim() === "") {
    return { success: false, error: MISSING_API_MESSAGE };
  }

  try {
    const res = await fetch(`${apiBaseUrl()}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        farm: payload.farm.trim() || undefined,
        message: payload.message.trim() || undefined,
      }),
    });

    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as {
        message?: string | string[];
      } | null;
      const message = Array.isArray(body?.message)
        ? body.message.join(", ")
        : body?.message;
      return {
        success: false,
        error: message || `Request failed (${res.status})`,
      };
    }

    return { success: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error";
    return { success: false, error: message };
  }
}
