import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUniqueId = (prefix: string = "id") =>
  `${prefix}-${Math.random().toString(36).substring(2, 9)}`;

export const formatDate = (date: string | Date, format?: string) => {
  const result = dayjs(date).format(format);
  return result;
};

// Function to calculate days between two dates
export function calculateDaysBetweenDates(
  date1: string | Date = new Date(),
  date2: string | Date = new Date()
) {
  // Ensure both dates are Date objects
  const date1Object = new Date(date1);
  const date2Object = new Date(date2);

  // Convert both dates to milliseconds
  const date1InMilliseconds = date1Object.getTime();
  const date2InMilliseconds = date2Object.getTime();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(
    date2InMilliseconds - date1InMilliseconds
  );

  // Convert the difference back to days
  const daysDifference = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return daysDifference || 0;
}