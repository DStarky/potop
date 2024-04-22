'use server';

const map = {
  recipient_first_name: 'firstname',
  recipient_last_name: 'lastname',
  recipient_middle_name: 'middlename',
  recipient_email: 'email',
  recipient_fax: 'fax',
  recipient_phone: 'phone',
  subsidy_amount: 'subsidy',
};

export async function createSubmission(formData: FormData) {
  ('use server');

  // Сорри, потом как нибудь перепишу кодирование это

  const passport: File | null = formData.get(
    'document_passport',
  ) as unknown as File;
  const bytesPassport = await passport.arrayBuffer();
  const sendPassport = Buffer.from(bytesPassport).toString('base64');

  const copy: File | null = formData.get('document_copy') as unknown as File;
  const bytesCopy = await copy.arrayBuffer();
  const sendCopy = Buffer.from(bytesCopy).toString('base64');

  const calc: File | null = formData.get('document_calc') as unknown as File;
  const bytesCalc = await calc.arrayBuffer();
  const sendCalc = Buffer.from(bytesCalc).toString('base64');

  const info: File | null = formData.get('document_info') as unknown as File;
  const bytesInfo = await info.arrayBuffer();
  const sendInfo = Buffer.from(bytesInfo).toString('base64');

  const personal: File | null = formData.get(
    'document_personal',
  ) as unknown as File;
  const bytesPersonal = await personal.arrayBuffer();
  const sendPersonal = Buffer.from(bytesPersonal).toString('base64');

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

  // const data = {
  //   // status: ApplicationsStatusOptions['NEW'], // дефолт не ставится в БД
  //   recipient_first_name: formData.get('firstname'),
  //   recipient_last_name: formData.get('lastname'),
  //   recipient_middle_name: formData.get('middlename'),
  //   recipient_email: formData.get('email'),
  //   recipient_fax: formData.get('fax'),
  //   recipient_phone: formData.get('phone'),
  //   subsidy_amount: formData.get('subsidy'),
  //   back_account: formData.get('bank_account'),
  //   doc_id: buffer,
  //   doc_criteria: formData.get('document_selection'),
  //   doc_report: formData.get('document_report'),
  //   doc_owner_proof: formData.get('document_own'),
  //   doc_damage_proof: formData.get('document_flooding'),
  // }; //satisfies Partial<ApplicationsRecord>;
  // // console.log(data);

  return;
}
