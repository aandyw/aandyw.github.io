import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string consistently across server and client
 * This prevents hydration mismatches caused by locale differences
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  // Use a consistent format that doesn't depend on locale
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  
  // Format as YYYY-MM-DD for consistency
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

/**
 * Format a date string in a more readable format (e.g., "May 28, 2024")
 * This provides a consistent format across server and client
 */
export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}
