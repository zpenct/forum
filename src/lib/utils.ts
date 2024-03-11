import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function postedDate(date: string | Date): string {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const dateDifferent = dateNow.getTime() - datePosted.getTime();
  const dateDifferentInSeconds = Math.floor(dateDifferent / 1000);
  const dateDifferentInMinutes = Math.floor(dateDifferentInSeconds / 60);
  const dateDifferentInHours = Math.floor(dateDifferentInMinutes / 60);
  const dateDifferentInDays = Math.floor(dateDifferentInHours / 24);

  if (dateDifferentInDays > 0) {
    return `${dateDifferentInDays} hari lalu`;
  }
  if (dateDifferentInHours > 0) {
    return `${dateDifferentInHours} jam lalu`;
  }
  if (dateDifferentInMinutes > 0) {
    return `${dateDifferentInMinutes} menit lalu`;
  }
  if (dateDifferentInSeconds > 0) {
    return `${dateDifferentInSeconds} detik lalu`;
  }
  return 'baru saja';
}
