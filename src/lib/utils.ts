import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const generateUniqueId = (prefix: string = "id") =>
  `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
