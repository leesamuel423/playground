import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Allows use of conditional classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
