import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://cyrano-pamphlet-backend-s8as.onrender.com';
  return `${baseUrl}${path}`;
}

export function getApiUrl(endpoint: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://cyrano-pamphlet-backend-s8as.onrender.com';
  return `${baseUrl}/api${endpoint}`;
}
