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

const additionalAddressObj = z.object({
  apartment: z.string().optional(),
  building: z.string().min(1, {
    message: requiredMessage,
  }),
  street: z.string().min(1, {
    message: requiredMessage,
  }),
  city: z.string().min(1, {
    message: requiredMessage,
  }),
  municipality: z.string().min(1, {
    message: requiredMessage,
  }),
});

export const requestFormSchema = z.object({
  firstname: z.string().min(1, {
    message: requiredMessage,
  }),
  lastname: z.string().min(1, {
    message: requiredMessage,
  }),
  middlename: z.string().optional(),
  phone: zPhone,
  email: z
    .string()
    .min(1, { message: requiredMessage })
    .email('Неправильный адрес электронной почты')
    .refine((email) => email.endsWith('.ru'), 'Email должен быть в зоне .ru'),

  inn: z.string().min(10, { message: 'Минимум 10 цифр' }), 
  secret_key: z.string().min(1, { message: requiredMessage }), 

  subsidy_recovery: z.boolean().optional(),
  subsidy_finance: z.boolean().optional(),
  subsidy_industry: z.boolean().optional(),
  subsidy_special: z.boolean().optional(),
  subsidy_tax: z.boolean().optional(),
  subsidy_holidays: z.boolean().optional(),

  entity_name: z.string().min(1, { message: requiredMessage }),
  ogrn: z.string().min(1, { message: requiredMessage }),
  kpp: z.string().min(1, { message: requiredMessage }),

  address_municipality: z.string().min(1, { message: requiredMessage }),
  address_city: z.string().min(1, { message: requiredMessage }),
  address_street: z.string().min(1, { message: requiredMessage }),
  address_building: z.string().min(1, { message: requiredMessage }),
  address_apartment: z.string().optional(),

  fact_address: z
    .string({
      required_error: requiredMessage,
    })
    .refine(
      (val) => val !== 'отсутствует' && val !== '',
      'Адрес должен находиться в реестре',
    ),

  additional_addresses: z.array(additionalAddressObj),
  eployees_count: z.string().min(1, { message: requiredMessage }),

  okved: z.string().optional(),
  without_okved: z.boolean().optional(),

  bank_name: z.string().min(1, { message: requiredMessage }),
  bank_inn: z.string().min(1, { message: requiredMessage }),
  bank_kpp: z.string().min(1, { message: requiredMessage }),
  bank_bik: z.string().min(1, { message: requiredMessage }),
  corresponding_account: z.string().min(1, { message: requiredMessage }),
  settlement_account: z
    .string()
    .min(20, { message: 'Укажите не менее 20 цифр' }),

  bank_names: z.string().min(1, { message: requiredMessage }).array(),

  agreement_offshore: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_terror: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_oon: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_budget: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_agent: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_debt: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_reorganization: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_disqualification: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),

  agreement_check: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_data: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_taxation: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_internet: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),

  document_passport: z.any().optional(),
  document_copy: z.any().optional(),
  document_calc: z.any().optional(),
  document_info: z.any().optional(),
  document_personal: z.any().optional(),

  agreement_info: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_procedure: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_condition: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
