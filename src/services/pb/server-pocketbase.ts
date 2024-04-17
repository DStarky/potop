// Сервис для работы с SDK Pocketbase для серверной части Next.js приложения
// документация по пользованию SDK:
// https://github.com/pocketbase/js-sdk
// https://pocketbase.io/docs/client-side-sdks/

import { TypedPocketBase } from '@/types/pocketbase-types';
import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';
import { POCKETBASE_COOKIE_KEY } from './constants';
import { env } from '@/lib/env';

// Pocketbase SDK for server side
/**
 * Возвращает Pocketbase SDK для серверной части
 */
export function getServerPocketbase() {
  if (!env.POCKETBASE_API_URL) {
    throw new Error('Pocketbase API url not defined !');
  }

  if (typeof window !== 'undefined') {
    throw new Error(
      'This method is only supposed to call from the Server environment',
    );
  }

  const cookieStore = cookies();
  const client = new PocketBase(env.POCKETBASE_API_URL) as TypedPocketBase;

  if (cookieStore) {
    const authCookie = cookieStore.get(POCKETBASE_COOKIE_KEY);

    if (authCookie) {
      client.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);
    }
  }

  return client;
}
