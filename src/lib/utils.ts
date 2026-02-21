import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages deployment
export const BASE_PATH = ""

// Helper function to get full image path
export function getImagePath(imagePath: string): string {
  return `${BASE_PATH}${imagePath}`
}
