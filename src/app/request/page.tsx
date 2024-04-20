'use client';

import { useState } from 'react';

import { RequestForm } from '@/components/RequestForm';
import StepsProgress from '@/components/StepsProgress';

import { StepI } from '@/types';

const steps: StepI[] = [
  {
    id: 1,
    title: 'Данные о получателе',
    fields: [
      'имя_заявителя',
      'фамилия_заявителя',
      'отчество_заявителя',
      'телефон',
      'электронный_адрес',
    ],
  },
  {
    id: 2,
    title: 'Данные о юридическом лице',
    fields: [
      'инн',
      'субсидия_возобновление',
      'субсидия_финансовая',
      'субсидия_льгота',
    ],
  },
  {
    id: 3,
    title: 'Данные о юридическом лице',

    fields: [
      'наименование_юл',
      'огрн',
      'кпп',
      'юридический_адрес_муниципалитет',
      'юридический_адрес_населенный_пункт',
      'юридический_адрес_улица',
      'юридический_адрес_номер_дома',
      'юридический_адрес_номер_квартиры',
      'фактический_адрес',
    ],
  },
  {
    id: 4,
    title: 'Банковские реквизиты',

    fields: [
      'наименование_банка',
      'инн_банка',
      'кпп_банка',
      'корреспондирующий_счет',
      'расчетный_счет',
    ],
  },
  {
    id: 5,
    title: 'Подтверждение согласия',
    fields: [
      'согласие_офшоры',
      'согласие_терроризм',
      'согласие_оон',
      'согласие_бюджет',
      'согласие_иноагент',
      'согласие_задолженность',
      'согласие_реорганизация',
      'согласие_дисквалификация',
      'согласие_проверки',
      'согласие_данные',
      'согласие_налоговая',
      'согласие_интернет',
    ],
  },
  {
    id: 6,
    title: 'Загрузка файлов',
    fields: [
      'документ_паспорт',
      'документ_копия',
      'документ_расчет',
      'документ_сведения',
      'документ_персональные_данные',
    ],
  },
  {
    id: 7,
    title: 'Подтвердите отправку ',
    fields: ['согласие_сведения', 'согласие_порядок', 'согласие_условие'],
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
