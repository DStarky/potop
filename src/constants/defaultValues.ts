import { RequestFormSchema } from '@/lib/requestFormSchema';

// export const defaultValues = {
//   firstname: '',
//   lastname: '',
//   middlename: '',

//   phone: '',
//   fax: '',
//   email: '',

//   entity_form: 'self-employed' as const,

//   name: '',
//   inn: '',
//   ogrn: '',
//   kpp: '',
//   oktmo: '',
//   okato: '',

//   address_municipality: '',
//   address_city: '',
//   address_district: '',
//   address_street: '',
//   address_building: '',
//   address_block: '',
//   address_apartment: '',

//   damaged_address: '',
//   damaged_building: '',
//   damaged_apartment: '',

//   subsidy: '',

//   bank_name: '',
//   bank_inn: '',
//   bank_kpp: '',
//   bank_correspondent_account: '',
//   bank_account: '',

//   agreement_foreign: false,
//   agreement_terror: false,
//   agreement_oon: false,
//   agreement_orenburg: false,
//   agreement_control: false,
//   agreement_nalog: false,
//   agreement_debt: false,
//   agreement_reorganization: false,
//   agreement_disqualification: false,
//   agreement_check: false,
//   agreement_personal: false,
// } satisfies RequestFormSchema;

export const testDefaultValues = {
  имя_заявителя: 'Тест',
  фамилия_заявителя: 'Тестов',
  отчество_заявителя: 'Тестович',

  телефон: '+7 (900) 900-99-69',
  электронный_адрес: 'test@test.ru',

  инн: '7725330506',

  субсидия_возобновление: true,
  субсидия_финансовая: true,
  субсидия_льгота: true,

  наименование_юл: 'ООО "Рога и копыта"',
  огрн: '1167746840073',
  кпп: '561201001',

  юридический_адрес_муниципалитет: 'г Оренбург',
  юридический_адрес_населенный_пункт: 'Оренбург',
  юридический_адрес_улица: 'Томилинская',
  юридический_адрес_номер_дома: '238',
  юридический_адрес_номер_квартиры: '',

  фактический_адрес: '',

  наименование_банка: 'ОРЕНБУРГСКОЕ ОТДЕЛЕНИЕ N8623 ПАО СБЕРБАНК',
  инн_банка: '7707083893',
  кпп_банка: '561202001',
  корреспондирующий_счет: '30101810600000000601',
  расчетный_счет: 'Мой расчётный счёт',

  согласие_офшоры: true,
  согласие_терроризм: true,
  согласие_оон: true,
  согласие_бюджет: true,
  согласие_иноагент: true,
  согласие_задолженность: true,
  согласие_реорганизация: true,
  согласие_дисквалификация: true,
  согласие_проверки: true,
  согласие_данные: true,
  согласие_налоговая: true,
  согласие_интернет: true,

  документ_паспорт: null,
  документ_копия: null,
  документ_расчет: null,
  документ_сведения: null,
  документ_персональные_данные: null,

  согласие_сведения: true,
  согласие_порядок: true,
  согласие_условие: true,
} satisfies RequestFormSchema;
