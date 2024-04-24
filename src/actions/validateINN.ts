'use server';

export const validateINN = async (inn: string, code: string) => {
  const res = await fetch(
    `https://sell-us.pro/clients/bitrix.orb.ru/26937/validate/?inn=${inn}&code=${code}`,
  );
  const json = await res.json();
  return json;
};
