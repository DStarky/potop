import { throwIfInBrowser } from '../lib/utils';

/**
 * Собирает параметры окружения для серверной части приложения
 *
 * При вызове в браузерном окружении выкинет ошибку.
 */
export const serverEnv = (() => {
  throwIfInBrowser('Server ENV should not be accessed from browser.');

  const RSAAG_SECRET_KEY = process.env.RSAAG_SECRET_KEY;
  const BITRIX_BASE_URL =
    process.env.BITRIX_BASE_URL ??
    'https://sell-us.pro/clients/bitrix.orb.ru/26937/';

  // if (!RSAAG_SECRET_KEY) throw new Error('RSAAG_SECRET_KEY not set');

  return {
    RSAAG_SECRET_KEY,
    BITRIX_BASE_URL,
  };
})();
