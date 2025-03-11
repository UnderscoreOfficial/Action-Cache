import { z } from "zod";
import { status_schema } from "./schemas";

export function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createStatus(success: boolean, message: string): z.infer<typeof status_schema> {
  return {
    status: {
      success: success,
      message: message,
    },
  };
}
