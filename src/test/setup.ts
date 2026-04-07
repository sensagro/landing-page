import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = (): IntersectionObserverEntry[] => [];
  unobserve = vi.fn();
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);
