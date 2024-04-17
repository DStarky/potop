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
  firstname: z.string().min(1, {
    message: requiredMessage,
  }),
  lastname: z.string().min(1, {
    message: requiredMessage,
  }),
  middlename: z.string().optional(),

  phone: zPhone,
  fax: z.string().optional(),
  email: z
    .string()
    .min(1, { message: requiredMessage })
    .email('Неправильный адрес электронной почты')
    .refine((email) => email.endsWith('.ru'), 'Email должен быть в зоне .ru'),

  entity_form: z.enum(ENTITY_FORM),

  name: z.string().min(1, { message: requiredMessage }),
  inn: z.string().min(10, { message: 'Минимум 10 цифр' }), // пока так
  ogrn: z.string().min(1, { message: requiredMessage }),
  kpp: z.string().min(1, { message: requiredMessage }),
  oktmo: z.string().min(1, { message: requiredMessage }),
  okato: z.string().min(1, { message: requiredMessage }),

  address_municipality: z.string().min(1, { message: requiredMessage }),
  address_city: z.string().min(1, { message: requiredMessage }),
  address_district: z.string().optional(),
  address_street: z.string().min(1, { message: requiredMessage }),
  address_building: z.string().min(1, { message: requiredMessage }),
  address_block: z.string().optional(),
  address_apartment: z.string().optional(),

  damaged_address: z
    .string({
      required_error: requiredMessage,
    })
    .refine(
      (val) => val !== 'отсутствует',
      'Адрес должен находиться в реестре',
    ),
  damaged_building: z.string({
    required_error: requiredMessage,
  }),
  damaged_apartment: z.string().optional(),

  subsidy: z.string().optional(),
  bank_name: z.string().min(1, { message: requiredMessage }),
  bank_inn: z.string().min(1, { message: requiredMessage }),
  bank_kpp: z.string().min(1, { message: requiredMessage }),
  bank_correspondent_account: z.string().min(1, { message: requiredMessage }),
  bank_account: z.string().min(1, { message: requiredMessage }),

  document_identity: z.any().optional(),
  document_selection: z.any().optional(),
  document_report: z.any().optional(),
  document_own: z.any().optional(),
  document_flooding: z.any().optional(),

  agreement_foreign: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_terror: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_oon: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_orenburg: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_control: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
  agreement_nalog: z.boolean().refine((value) => value === true, {
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
  agreement_personal: z.boolean().refine((value) => value === true, {
    message: agreementMessage,
  }),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
