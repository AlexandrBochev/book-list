import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const actionsStyle = (isActive: boolean) => {
  return isActive ? "opacity-100" : "opacity-30";
}

export const formatDate = (date: string) => {
  return moment(date).format("D MMMM YYYY, h:mmA");
}