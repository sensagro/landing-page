export interface ContactInsertPayload {
  name: string;
  email: string;
  farm: string;
  message: string;
}

export type ContactSaveResult =
  | { success: true }
  | { success: false; error: string };
