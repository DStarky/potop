import { RequestFormSchema } from '@/lib/requestFromSchema';

export const defaultValues = {
  firstname: '',
  lastname: '',
  middlename: '',

  phone: '',
  fax: '',
  email: '',

  entity_form: 'self-employed' as const,

  name: '',
  inn: '',
  ogrn: '',
  kpp: '',
  oktmo: '',
  okato: '',

  address_municipality: '',
  address_city: '',
  address_district: '',
  address_street: '',
  address_building: '',
  address_block: '',
  address_apartment: '',

  damaged_address: '',
  damaged_building: '',
  damaged_apartment: '',

  subsidy: '',

  bank_name: '',
  bank_inn: '',
  bank_kpp: '',
  bank_correspondent_account: '',
  bank_account: '',

  agreement_foreign: false,
  agreement_terror: false,
  agreement_oon: false,
  agreement_orenburg: false,
  agreement_control: false,
  agreement_nalog: false,
  agreement_debt: false,
  agreement_reorganization: false,
  agreement_disqualification: false,
  agreement_check: false,
  agreement_personal: false,
} satisfies RequestFormSchema;

export const testDefaultValues = {
  firstname: 'Тест',
  lastname: 'Тестов',
  middlename: '',

  phone: '+7 (900) 900-99-69',
  fax: '',
  email: 'test@vt2b.ru',

  entity_form: 'self-employed' as const,

  name: 'Тестовое',
  inn: '7725330506',
  ogrn: '1167746840073',
  kpp: '561201001',
  oktmo: '53701000001',
  okato: '53401373000',

  address_municipality: 'г Оренбург',
  address_city: 'Оренбург',
  address_district: '',
  address_street: 'Томилинская',
  address_building: '238',
  address_block: '',
  address_apartment: '',

  damaged_address: 'советская',
  damaged_building: '69',
  damaged_apartment: '',

  subsidy: '69420',

  bank_name: 'ОРЕНБУРГСКОЕ ОТДЕЛЕНИЕ N8623 ПАО СБЕРБАНК',
  bank_inn: '7707083893',
  bank_kpp: '561202001',
  bank_correspondent_account: '30101810600000000601',
  bank_account: 'Мой расчётный счёт',

  agreement_foreign: true,
  agreement_terror: true,
  agreement_oon: true,
  agreement_orenburg: true,
  agreement_control: true,
  agreement_nalog: true,
  agreement_debt: true,
  agreement_reorganization: true,
  agreement_disqualification: true,
  agreement_check: true,
  agreement_personal: false,
} satisfies RequestFormSchema;
