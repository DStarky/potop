import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Бросает ошибку, если вызывается в браузере */
export function throwIfInBrowser(
  message = 'Этот функционал только для серверной части, нельзя использовать в браузере.',
) {
  if (typeof window !== 'undefined') throw new Error(message);
}
