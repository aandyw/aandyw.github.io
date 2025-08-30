import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Render a markdown title with basic markdown support
 * Supports: **bold**, *italic*, ~~strikethrough~~
 */
export function renderMarkdownTitle(title: string): React.ReactElement {
  // Simple markdown parsing for titles
  let processedTitle = title
  
  // Handle strikethrough ~~text~~
  processedTitle = processedTitle.replace(/~~(.*?)~~/g, '<del>$1</del>')
  
  // Handle bold **text**
  processedTitle = processedTitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  
  // Handle italic *text*
  processedTitle = processedTitle.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  return React.createElement('span', { dangerouslySetInnerHTML: { __html: processedTitle } })
}

/**
 * Format a date string in a short readable format (e.g., "May 28, 2024")
 * This provides a consistent format across server and client
 */
export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);
  
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}
