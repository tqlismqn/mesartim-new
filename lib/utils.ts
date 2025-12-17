import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * Combines clsx for conditional class names with tailwind-merge for deduplication.
 *
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged class string with resolved Tailwind conflicts
 *
 * @example
 * cn("px-4 py-2", "px-6") // "py-2 px-6"
 * cn("text-red-500", { "text-blue-500": true }) // "text-blue-500"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
