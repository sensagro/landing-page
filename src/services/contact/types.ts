export interface ContactInsertPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type ContactSaveResult =
  | { success: true }
  | { success: false; error: string };
