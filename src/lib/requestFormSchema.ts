import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { z } from 'zod';

import { ENTITY_FORM } from '@/types';

const MAX_FILE_SIZE = 5000000;

export const zPhone = z.string().transform((arg, ctx) => {
  const phone = parsePhoneNumberFromString(arg, {
    defaultCountry: 'RU',
    extract: false,
  });

  // when it's good
  if (phone && phone.isValid()) {
    return phone.number;
  }

  // when it's not
  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: 'Неправильный формат телефона',
  });
  return z.NEVER;
});

const requiredMessage = 'Обязательное поле';
const agreementMessage = 'Необходимо оставить согласие';

export const requestFormSchema = z.object({
  имя_заявителя: z.string().min(1, {
    message: requiredMessage,
  }),
  фамилия_заявителя: z.string().min(1, {
    message: requiredMessage,
  }),
  отчество_заявителя: z.string().optional(),
  телефон: zPhone,
  электронный_адрес: z
    .string()
    .min(1, { message: requiredMessage })
    .email('Неправильный адрес электронной почты')
    .refine((email) => email.endsWith('.ru'), 'Email должен быть в зоне .ru'),

  инн: z.string().min(10, { message: 'Минимум 10 цифр' }), // пока так

  субсидия_возобновление: z.boolean().optional(),
  субсидия_финансовая: z.boolean().optional(),
  субсидия_льгота: z.boolean().optional(),

  наименование_юл: z.string().min(1, { message: requiredMessage }),
  огрн: z.string().min(1, { message: requiredMessage }),
  кпп: z.string().min(1, { message: requiredMessage }),

  юридический_адрес_муниципалитет: z
    .string()
    .min(1, { message: requiredMessage }),
  юридический_адрес_населенный_пункт: z
    .string()
    .min(1, { message: requiredMessage }),
  юридический_адрес_улица: z.string().min(1, { message: requiredMessage }),
  юридический_адрес_номер_дома: z.string().min(1, { message: requiredMessage }),
  юридический_адрес_номер_квартиры: z.string().optional(),

  фактический_адрес: z
    .string({
      required_error: requiredMessage,
    })
    .refine(
      (val) => val !== 'отсутствует' && val !== '',
      'Адрес должен находиться в реестре',
    ),

  наименование_банка: z.string().min(1, { message: requiredMessage }),
  инн_банка: z.string().min(1, { message: requiredMessage }),
  кпп_банка: z.string().min(1, { message: requiredMessage }),
  корреспондирующий_счет: z.string().min(1, { message: requiredMessage }),
  расчетный_счет: z.string().min(1, { message: requiredMessage }),

  согласие_офшоры: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_терроризм: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_оон: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_бюджет: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_иноагент: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_задолженность: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_реорганизация: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_дисквалификация: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),

  согласие_проверки: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_данные: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_налоговая: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_интернет: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),

  документ_паспорт: z.any().optional(),
  документ_копия: z.any().optional(),
  документ_расчет: z.any().optional(),
  документ_сведения: z.any().optional(),
  документ_персональные_данные: z.any().optional(),

  согласие_сведения: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_порядок: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  согласие_условие: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
