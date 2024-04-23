import { serverEnv } from '@/utils/serverEnv';
import { submissions } from './data';

export async function createSubmission(data: any) {
  const body = data;
  const res = await fetch(serverEnv.BITRIX_BASE_URL, { method: 'POST', body });

  return res;
}

export async function getSubmissionListByUserId(userId: string) {
  return submissions;
}

export const formKeysMap = {
  firstname: 'имя_заявителя',
  lastname: 'фамилия_заявителя',
  middlename: 'отчество_заявителя',

  phone: 'телефон',
  email: 'электронный_адрес',

  inn: 'инн',

  subsidy_recovery: 'субсидия_возобновление',
  subsidy_finance: 'субсидия_финансовая',
  subsidy_benefits: 'субсидия_льгота',

  entity_name: 'наименование_юрлица',
  ogrn: 'огрн',
  kpp: 'кпп',

  address_municipality: 'юридический_адрес_муниципалитет',
  address_city: 'юридический_адрес_населенный_пункт',
  address_street: 'юридический_адрес_улица',
  address_building: 'юридический_адрес_номер_дома',
  address_apartment: 'юридический_адрес_номер_квартиры',

  fact_address: 'фактический_адрес',

  bank_name: 'наименование_банка',
  bank_inn: 'инн_банка',
  bank_kpp: 'кпп_банка',
  bank_bik: 'бик_банка',
  corresponding_account: 'корреспондирующий_счет',
  settlement_account: 'расчетный_счет',

  agreement_offshore: 'согласие_офшоры',
  agreement_terror: 'согласие_терроризм',
  agreement_oon: 'согласие_оон',
  agreement_budget: 'согласие_бюджет',
  agreement_agent: 'согласие_иноагент',
  agreement_debt: 'согласие_задолженность',
  agreement_reorganization: 'согласие_реорганизация',
  agreement_disqualification: 'согласие_дисквалификация',

  agreement_check: 'согласие_проверки',
  agreement_data: 'согласие_данные',
  agreement_taxation: 'согласие_налоговая',
  agreement_internet: 'согласие_интернет',

  sendPassport: 'документ_паспорт',
  sendCopy: 'документ_копия',
  sendCalc: 'документ_расчет',
  sendInfo: 'документ_сведения',
  sendPersonal: 'документ_персональные_данные',

  agreement_info: 'согласие_сведения',
  agreement_procedure: 'согласие_порядок',
  agreement_condition: 'согласие_условие',
};

export const formKeysReverseMap = Object.fromEntries(
  Object.entries(formKeysMap).map(([k, v]) => [v, k]),
);
