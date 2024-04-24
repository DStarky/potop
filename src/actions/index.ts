'use server';

export async function createSubmission(formData: FormData) {
  'use server';

  async function fileToBase64(file: File | null): Promise<string | null> {
    if (!file) return null;
    const bytes = await file.arrayBuffer();
    return Buffer.from(bytes).toString('base64');
  }
  const passport: File | null = formData.get(
    'document_passport',
  ) as unknown as File;
  const sendPassport = await fileToBase64(passport);

  const copy: File | null = formData.get('document_copy') as unknown as File;
  const sendCopy = await fileToBase64(copy);

  const calc: File | null = formData.get('document_calc') as unknown as File;
  const sendCalc = await fileToBase64(calc);

  const info: File | null = formData.get('document_info') as unknown as File;
  const sendInfo = await fileToBase64(info);

  const personal: File | null = formData.get(
    'document_personal',
  ) as unknown as File;
  const sendPersonal = await fileToBase64(personal);

  const data = {
    имя_заявителя: formData.get('firstname'),
    фамилия_заявителя: formData.get('lastname'),
    отчество_заявителя: formData.get('middlename'),

    телефон: formData.get('phone'),
    электронный_адрес: formData.get('email'),

    инн: formData.get('inn'),

    субсидия_возобновление: formData.get('subsidy_recovery'),
    субсидия_финансовая: formData.get('subsidy_finance'),
    субсидия_льгота: formData.get('subsidy_benefits'),

    наименование_юрлица: formData.get('entity_name'),
    огрн: formData.get('ogrn'),
    кпп: formData.get('kpp'),

    юридический_адрес_муниципалитет: formData.get('address_municipality'),
    юридический_адрес_населенный_пункт: formData.get('address_city'),
    юридический_адрес_улица: formData.get('address_street'),
    юридический_адрес_номер_дома: formData.get('address_building'),
    юридический_адрес_номер_квартиры: formData.get('address_apartment'),

    фактический_адрес: formData.get('fact_address'),

    наименование_банка: formData.get('bank_name'),
    инн_банка: formData.get('bank_inn'),
    кпп_банка: formData.get('bank_kpp'),
    бик_банка: formData.get('bank_bik'),
    корреспондирующий_счет: formData.get('corresponding_account'),
    расчетный_счет: formData.get('settlement_account'),

    согласие_офшоры: formData.get('agreement_offshore'),
    согласие_терроризм: formData.get('agreement_terror'),
    согласие_оон: formData.get('agreement_oon'),
    согласие_бюджет: formData.get('agreement_budget'),
    согласие_иноагент: formData.get('agreement_agent'),
    согласие_задолженность: formData.get('agreement_debt'),
    согласие_реорганизация: formData.get('agreement_reorganization'),
    согласие_дисквалификация: formData.get('agreement_disqualification'),

    согласие_проверки: formData.get('agreement_check'),
    согласие_данные: formData.get('agreement_data'),
    согласие_налоговая: formData.get('agreement_taxation'),
    согласие_интернет: formData.get('agreement_internet'),

    документ_паспорт: sendPassport,
    документ_копия: sendCopy,
    документ_расчет: sendCalc,
    документ_сведения: sendInfo,
    документ_персональные_данные: sendPersonal,

    согласие_сведения: formData.get('agreement_info'),
    согласие_порядок: formData.get('agreement_procedure'),
    согласие_условие: formData.get('agreement_condition'),
  };

  console.log(data);

  return;
}
