import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateTimeFormatter(dateStr:string ) {
  const formattedDate = dayjs(dateStr).format('DD/MM/YYYY, hh:mm:ss A');

  return formattedDate
}
export function dateFormatter(dateStr:string ) {
  const formattedDate = dayjs(dateStr).format('DD/MM/YYYY');

  return formattedDate
}

export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}