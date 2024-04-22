import { RequestFormSchema } from '@/lib/requestFormSchema';

// export const defaultValues = {
//   firstname: '',
//   lastname: '',
//   middlename: '',

//   phone: '',
//   email: '',

//   inn: '',

//   subsidy_recovery: true,
//   subsidy_finance: true,
//   subsidy_benefits: true,

//   entity_name: '',
//   ogrn: '',
//   kpp: '',

//   address_municipality: '',
//   address_city: '',
//   address_street: '',
//   address_building: '',
//   address_apartment: '',

//   fact_address: '',

//   bank_name: '',
//   bank_inn: '',
//   bank_kpp: '',
//   bank_bik: '',
//   corresponding_account: '',
//   settlement_account: '',

//   agreement_offshore: false,
//   agreement_terror: false,
//   agreement_oon: false,
//   agreement_budget: false,
//   agreement_agent: false,
//   agreement_debt: false,
//   agreement_reorganization: false,
//   agreement_disqualification: false,
//   agreement_check: false,
//   agreement_data: false,
//   agreement_taxation: false,
//   agreement_internet: false,

//   document_passport: undefined,
//   document_copy: undefined,
//   document_calc: undefined,
//   document_info: undefined,
//   document_personal: undefined,

//   agreement_info: false,
//   agreement_procedure: false,
//   agreement_condition: false,
// } satisfies RequestFormSchema;

export const testDefaultValues = {
  firstname: 'Тест',
  lastname: 'Тестов',
  middlename: 'Тестович',

  phone: '+7 (900) 900-99-69',
  email: 'test@test.ru',

  inn: '7725330506',
  secret_key: '88005553535',

  subsidy_recovery: true,
  subsidy_finance: true,
  subsidy_industry: true,
  subsidy_special: true,
  subsidy_tax: true,
  subsidy_holidays: true,

  entity_name: 'ООО "Рога и копыта"',
  ogrn: '1167746840073',
  kpp: '561201001',

  address_municipality: 'г Оренбург',
  address_city: 'Оренбург',
  address_street: 'Томилинская',
  address_building: '238',
  address_apartment: '',

  fact_address: '',

  additional_addresses: [],
  eployees_count: '42',

  okved: '',
  without_okved: false,

  bank_name: 'ОРЕНБУРГСКОЕ ОТДЕЛЕНИЕ N8623 ПАО СБЕРБАНК',
  bank_inn: '7707083893',
  bank_kpp: '561202001',
  bank_bik: '561123123',
  corresponding_account: '30101810600000000601',
  settlement_account: '11122333455556666666',

  bank_names: [],

  agreement_offshore: true,
  agreement_terror: true,
  agreement_oon: true,
  agreement_budget: true,
  agreement_agent: true,
  agreement_debt: true,
  agreement_reorganization: true,
  agreement_disqualification: true,
  agreement_check: true,
  agreement_data: true,
  agreement_taxation: true,
  agreement_internet: true,

  document_passport: undefined,
  document_copy: undefined,
  document_calc: undefined,
  document_info: undefined,
  document_personal: undefined,

  agreement_info: true,
  agreement_procedure: true,
  agreement_condition: true,
} satisfies RequestFormSchema;
