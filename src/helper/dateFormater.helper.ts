import { format } from "date-fns";

/**
 * Formats a given timestamp into a human-readable date string.
 *
 * @param date - The timestamp to format, represented as the number of milliseconds since the Unix epoch.
 * @returns The formatted date string in the format 'MMM dd, yyyy hh:mm a'.
 */
export const dateFormater = (date: number, formatType: string = 'MMM dd, yyyy hh:mm a'): string => {
  const dateObject = new Date(date);
  const formattedDate = format(dateObject, formatType);
  return formattedDate;
}