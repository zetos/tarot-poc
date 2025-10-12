import type { ReadingResponse } from "@/types/tarot";

const STORAGE_KEY = "currentReading";

export function saveReading(reading: ReadingResponse): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(reading));
  }
}

export function getReading(): ReadingResponse | null {
  if (typeof window !== "undefined") {
    const data = sessionStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        return JSON.parse(data) as ReadingResponse;
      } catch (error) {
        console.error("Failed to parse reading data:", error);
        return null;
      }
    }
  }
  return null;
}

export function clearReading(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}
