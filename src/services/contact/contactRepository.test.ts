import { afterEach, describe, expect, it, vi } from "vitest";
import { saveContact } from "./contactRepository";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("saveContact", () => {
  it("POSTs JSON with trimmed fields and drops empty optional strings", async () => {
    vi.stubEnv("VITE_API_URL", "https://api.example.com/");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn(),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await saveContact({
      name: "  Ana  ",
      email: " ana@farm.com ",
      farm: "   ",
      message: "",
    });

    expect(result).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Ana",
        email: "ana@farm.com",
        farm: undefined,
        message: undefined,
      }),
    });
  });

  it("uses localhost when VITE_API_URL is unset", async () => {
    vi.unstubAllEnvs();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn(),
    });
    vi.stubGlobal("fetch", fetchMock);

    await saveContact({
      name: "x",
      email: "y@z.com",
      farm: "",
      message: "",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:3000/contacts",
      expect.any(Object),
    );
  });

  it("returns a clear error when VITE_API_URL is an empty string", async () => {
    vi.stubEnv("VITE_API_URL", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const result = await saveContact({
      name: "x",
      email: "y@z.com",
      farm: "",
      message: "",
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain("VITE_API_URL");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("maps API string message on non-OK response", async () => {
    vi.stubEnv("VITE_API_URL", "https://api.example.com");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        json: () => Promise.resolve({ message: "Invalid email" }),
      }),
    );

    const result = await saveContact({
      name: "x",
      email: "bad",
      farm: "",
      message: "",
    });

    expect(result).toEqual({ success: false, error: "Invalid email" });
  });

  it("joins API message array on non-OK response", async () => {
    vi.stubEnv("VITE_API_URL", "https://api.example.com");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 422,
        json: () => Promise.resolve({ message: ["a", "b"] }),
      }),
    );

    const result = await saveContact({
      name: "x",
      email: "y@z.com",
      farm: "",
      message: "",
    });

    expect(result).toEqual({ success: false, error: "a, b" });
  });

  it("returns network error when fetch throws", async () => {
    vi.stubEnv("VITE_API_URL", "https://api.example.com");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));

    const result = await saveContact({
      name: "x",
      email: "y@z.com",
      farm: "",
      message: "",
    });

    expect(result).toEqual({ success: false, error: "offline" });
  });
});
