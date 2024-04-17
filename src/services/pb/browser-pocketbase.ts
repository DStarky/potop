// Сервис для работы с SDK Pocketbase для клиенской части Next.js приложения
// документация по пользованию SDK:
// https://github.com/pocketbase/js-sdk
// https://pocketbase.io/docs/client-side-sdks/

import { TypedPocketBase } from '@/types/pocketbase-types';
import PocketBase from 'pocketbase';

// Pocketbase SDK for client side
let singletonClient: TypedPocketBase | null = null;

/**
 * Возвращает Pocketbase SDK для клиетской части
 */
export function getBrowserPocketbase() {
  if (!process.env.NEXT_PUBLIC_POCKETBASE_API_URL) {
    throw new Error('Pocketbase API url not defined !');
  }

  const createNewClient = () => {
    return new PocketBase(
      process.env.NEXT_PUBLIC_POCKETBASE_API_URL,
    ) as TypedPocketBase;
  };

  const _singletonClient = singletonClient ?? createNewClient();

  if (typeof window === 'undefined') return _singletonClient;

  if (!singletonClient) singletonClient = _singletonClient;

  singletonClient.authStore.onChange(() => {
    document.cookie = singletonClient!.authStore.exportToCookie({
      httpOnly: false,
    });
  });

  return singletonClient;
}
