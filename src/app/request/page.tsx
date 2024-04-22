'use client';

import { useState } from 'react';

import { RequestForm } from '@/components/RequestForm';
import StepsProgress from '@/components/StepsProgress';

import { StepI } from '@/types';

const steps: StepI[] = [
  {
    id: 1,
    title: 'Данные о получателе',
    fields: ['firstname', 'lastname', 'middlename', 'phone', 'email'],
  },
  {
    id: 2,
    title: 'Данные о юридическом лице',
    fields: ['inn', 'secret_key'],
  },
  {
    id: 3,
    title: 'Данные о юридическом лице',

    fields: [
      'entity_name',
      'ogrn',
      'kpp',
      'address_municipality',
      'address_city',
      'address_street',
      'address_building',
      'address_apartment',
      'fact_address',
      'additional_addresses',
      'eployees_count',
      'okved',
      'without_okved',
    ],
  },
  {
    id: 4,
    title: 'Запрашиваемые меры поддержки',

    fields: [
      'subsidy_recovery',
      'subsidy_finance',
      'subsidy_industry',
      'subsidy_special',
      'subsidy_tax',
      'subsidy_holidays',
    ],
  },
  {
    id: 5,
    title: 'Банковские реквизиты',

    fields: [
      'bank_bik',
      'bank_name',
      'bank_inn',
      'bank_kpp',
      'bank_bik',
      'corresponding_account',
      'settlement_account',
      'bank_names',
    ],
  },
  {
    id: 6,
    title: 'Подтверждение согласия',
    fields: [
      'agreement_offshore',
      'agreement_terror',
      'agreement_oon',
      'agreement_budget',
      'agreement_agent',
      'agreement_debt',
      'agreement_reorganization',
      'agreement_disqualification',
      'agreement_check',
      'agreement_data',
      'agreement_taxation',
      'agreement_internet',
    ],
  },
  {
    id: 7,
    title: 'Загрузка файлов',
    fields: [
      // 'document_passport',
      // 'document_copy',
      // 'document_calc',
      // 'document_info',
      // 'document_personal',
    ],
  },
  {
    id: 8,
    title: 'Подтвердите отправку ',
    fields: ['agreement_info', 'agreement_procedure', 'agreement_condition'],
  },
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
