'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import { defaultValues } from '@/constants/defaultValues';

import AddressForm from './formSteps/AddressForm';
import AgreementForm from './formSteps/AgreementForm';
import BankForm from './formSteps/BankForm';
import EntityDataForm from './formSteps/EntityDataForm';
import EntityForm from './formSteps/EntityForm';
import FilesForm from './formSteps/FilesForm';
import FinishForm from './formSteps/FinishForm';
import RecipientForm from './formSteps/RecipientForm';
import { Form } from './ui/form';
import { requestFormSchema } from '@/lib/requestFromSchema';
import { StepI } from '@/types';

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
    defaultValues: defaultValues,
  });

  function onSubmit(values: z.infer<typeof requestFormSchema>) {
    console.log(values);
  }

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
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-[768px] space-y-4'
      >
        <h2 className='form-title'>{steps[currentStep].title}</h2>

        {currentStep === 0 && <RecipientForm form={form} />}
        {currentStep === 1 && <EntityForm form={form} />}
        {currentStep === 2 && <EntityDataForm form={form} />}
        {currentStep === 3 && <AddressForm form={form} />}
        {currentStep === 4 && <BankForm form={form} />}
        {currentStep === 5 && <FilesForm form={form} />}
        {currentStep === 6 && <AgreementForm form={form} />}
        {currentStep === 7 && <FinishForm finishFn={submitStep} />}

        <div className='flex justify-between gap-4 pt-4'>
          <Button type='button' onClick={prevStep} disabled={currentStep === 0}>
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
