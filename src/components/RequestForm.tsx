'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import { testDefaultValues as defaultValues } from '@/constants/defaultValues';

import { createSubmission } from '@/actions';
import { requestFormSchema } from '@/lib/requestFormSchema';
import { StepI } from '@/types';
import { mapFormValuesToFormData } from '@/utils/mapFormValues';
import { useRef } from 'react';
import AgreementForm from './formSteps/AgreementForm';
import BankForm from './formSteps/BankForm';
import EntityDataForm from './formSteps/EntityDataForm';
import FilesForm from './formSteps/FilesForm';
import FinishForm from './formSteps/FinishForm';
import INNForm from './formSteps/INNForm';
import RecipientForm from './formSteps/RecipientForm';
import SubsidyForm from './formSteps/SubsidyForm';
import { Form } from './ui/form';

interface RequestFormProps {
  steps: StepI[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export function RequestForm({
  steps,
  currentStep,
  setCurrentStep,
}: RequestFormProps) {
  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof requestFormSchema>) {
    console.log(values);
  }

  const formRef = useRef<HTMLFormElement>(null);

  type FieldName = keyof z.infer<typeof requestFormSchema>;

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    }); // Провалидирует все поля в этом шаге

    if (!output) return; // Если провалидация не прошла то дальше не идем

    if (currentStep < steps.length - 1) {
      // if (currentStep === steps.length - 2) {
      //   await form.handleSubmit(onSubmit)();
      // }
      setCurrentStep((step) => step + 1);
    }
  };

  const submitStep = async () => {
    await form.handleSubmit(onSubmit)();
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  };

  return (
    <Form {...form}>
      <form
        action={createSubmission}
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit((values: any) => {
            const fd = new FormData(formRef.current!);
            mapFormValuesToFormData(values, fd);
            createSubmission(fd);
          })(e);
        }}
        className='w-[768px] space-y-4'
      >
        <h2 className='form-title'>{steps[currentStep].title}</h2>

        {currentStep === 0 && <RecipientForm form={form} />}
        {currentStep === 1 && <INNForm form={form} />}
        {currentStep === 2 && <EntityDataForm form={form} />}
        {currentStep === 3 && <SubsidyForm form={form} />}
        {currentStep === 4 && <BankForm form={form} />}
        {currentStep === 5 && <AgreementForm form={form} />}
        <FilesForm hidden={currentStep != 6} form={form} />
        {currentStep === 7 && <FinishForm form={form} finishFn={submitStep} />}

        <div className='flex justify-between gap-4 pt-4'>
          <Button
            type='button'
            onClick={prevStep}
            disabled={currentStep === 0}
            className='bg-gray-300 hover:bg-gray-500'
          >
            Вернуться
          </Button>
          <Button
            type='button'
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            Продолжить
          </Button>
        </div>
      </form>
    </Form>
  );
}
