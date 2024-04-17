'use client';

import { useState } from 'react';

import { RequestForm } from '@/components/RequestForm';
import StepsProgress from '@/components/StepsProgress';

import { StepI } from '@/types';

const steps: StepI[] = [
  {
    id: 1,
    title: 'Данные о получателе',
    fields: ['firstname', 'lastname', 'middlename', 'phone', 'fax', 'email'],
  },
  { id: 2, title: 'Форма юридического лица', fields: ['entity_form'] },
  {
    id: 3,
    title: 'Данные о юридическом лице',
    fields: [
      'name',
      'inn',
      'ogrn',
      'kpp',
      'oktmo',
      'okato',
      'address_municipality',
      'address_city',
      'address_district',
      'address_street',
      'address_building',
      'address_block',
      'address_apartment',
    ],
  },
  {
    id: 4,
    title: 'Адрес поврежденного объекта',

    fields: ['damaged_address', 'damaged_building', 'damaged_apartment'],
  },
  {
    id: 5,
    title: 'Банковские реквизиты',

    fields: [
      'subsidy',
      'bank_name',
      'bank_inn',
      'bank_kpp',
      'bank_correspondent_account',
      'bank_account',
    ],
  },
  { id: 6, title: 'Загрузка файлов', fields: [] },
  {
    id: 7,
    title: 'Подтверждение согласия',
    fields: [
      'agreement_foreign',
      'agreement_terror',
      'agreement_oon',
      'agreement_orenburg',
      'agreement_control',
      'agreement_nalog',
      'agreement_debt',
      'agreement_reorganization',
      'agreement_disqualification',
      'agreement_check',
      'agreement_personal',
    ],
  },
  { id: 8, title: 'Подтвердите отправку ', fields: [] },
];

const RequestPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <>
      <div className='mb-12 flex justify-center'>
        <StepsProgress
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
      <div className='m-auto flex max-w-7xl justify-center'>
        <RequestForm
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </>
  );
};
export default RequestPage;
