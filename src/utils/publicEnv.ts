/**
 * Параметры окружения, досупные как на сервере, так и на клиенте (NEXT_PUBLIC)
 */
export const publicEnv = (() => {
  // const getEnv = (name: string) => process.env[`$`]

  return {
    POCKETBASE_API_URL:
      process.env.NEXT_PUBLIC_POCKETBASE_API_URL ?? 'http://127.0.0.1:8090',

    HOST_URL: process.env.NEXT_PUBLIC_HOST_URL ?? 'http://localhost:3000',
    // настройки РСААГ
    RSAAG_URL: process.env.NEXT_PUBLIC_RSAAG_URL,
    RSAAG_REDIRECT_URL:
      process.env.NEXT_PUBLIC_RSAAG_REDIRECT_URL ??
      'http://localhost:3000/login',
    // client_id = 7 в дев окружении РСААГ, поэтому эта цифра дефолт
    RSAAG_CLIENT_ID: process.env.NEXT_PUBLIC_RSAAG_CLIENT_ID ?? '7',
  };
})();
