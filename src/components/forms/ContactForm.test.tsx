import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { saveContact } from "@/services/contact";
import { ContactForm } from "./ContactForm";

vi.mock("@/services/contact");

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

import { toast } from "sonner";

const mockedSaveContact = vi.mocked(saveContact);

function renderContactForm() {
  return render(
    <LanguageProvider>
      <ContactForm />
    </LanguageProvider>,
  );
}

let previousLocalStorage: Storage;

function installLocalStorageMock() {
  let store: Record<string, string> = {};
  previousLocalStorage = globalThis.localStorage;
  globalThis.localStorage = {
    getItem(key: string) {
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key(i: number) {
      return Object.keys(store)[i] ?? null;
    },
  } as Storage;
  globalThis.localStorage.setItem("language", "en");
}

describe("ContactForm", () => {
  beforeEach(() => {
    installLocalStorageMock();
    vi.clearAllMocks();
  });

  afterEach(() => {
    globalThis.localStorage = previousLocalStorage;
  });

  it("calls saveContact with form values and resets on success", async () => {
    const user = userEvent.setup();
    mockedSaveContact.mockResolvedValue({ success: true });

    renderContactForm();

    await user.type(screen.getByLabelText("Name"), "  Ana  ");
    await user.type(screen.getByLabelText("Email"), "ana@farm.com");
    await user.type(screen.getByLabelText("Company"), "Los Alamos");
    await user.type(
      screen.getByLabelText("Message"),
      "Interested in pricing",
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockedSaveContact).toHaveBeenCalledWith({
        name: "  Ana  ",
        email: "ana@farm.com",
        company: "Los Alamos",
        message: "Interested in pricing",
      });
    });

    expect(toast.success).toHaveBeenCalledWith(
      "Message sent! We'll get back to you soon.",
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Name")).toHaveValue("");
      expect(screen.getByLabelText("Email")).toHaveValue("");
    });
  });

  it("shows error toast when saveContact fails", async () => {
    const user = userEvent.setup();
    mockedSaveContact.mockResolvedValue({
      success: false,
      error: "Server busy",
    });

    renderContactForm();

    await user.type(screen.getByLabelText("Name"), "Ana");
    await user.type(screen.getByLabelText("Email"), "ana@farm.com");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Server busy");
    });
  });
});
