export const env = (() => ({
  POCKETBASE_API_URL:
    process.env.NEXT_PUBLIC_POCKETBASE_API_URL ?? 'http://127.0.0.1:8090',
}))();
