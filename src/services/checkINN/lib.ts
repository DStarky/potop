export const checkINN = async (inn: string, code: string) => {
  const res = await fetch(`/api/check-inn?inn=${inn}&code=${code}`);
  const json = await res.json();
  return json;
}