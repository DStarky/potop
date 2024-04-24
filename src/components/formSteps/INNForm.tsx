import { useQuery } from '@tanstack/react-query';
import { Button } from '../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { checkINN } from '@/services/checkINN/lib';
import { useState } from 'react';
import { EntityForm } from '@/types';

interface EntityDataFormI {
  form: any;
  setIsINNValid: React.Dispatch<React.SetStateAction<boolean>>;
  setEntityForm: React.Dispatch<React.SetStateAction<EntityForm>>;
}

const INNForm = ({ form, setIsINNValid, setEntityForm }: EntityDataFormI) => {
  const [isError, setIsError] = useState(false);

  const checkFn = async () => {
    const inn = form.getValues('inn');
    const code = form.getValues('secret_key');
    const result = await checkINN(inn, code);

    if (result.ok === true) {
      setIsINNValid(true);
      setIsError(false);
      if (result.entity_type === 'SELF') setEntityForm('self-employed');
      if (result.entity_type === 'MSP') setEntityForm('smb');
    } else {
      setIsINNValid(false);
      setIsError(true);
    }
  };

  return (
    <>
      <div className='flex justify-center gap-4 items-end max-sm:flex-col max-sm:items-center'>
        <FormField
          control={form.control}
          name='inn'
          render={({ field }) => (
            <FormItem>
              <FormLabel>ИНН*</FormLabel>
              <FormControl>
                <Input placeholder='ИНН организации' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='secret_key'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Уникальный код*</FormLabel>
              <FormControl>
                <Input placeholder='Уникальный код' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={'outline'} onClick={checkFn} type='button'>
          Проверить
        </Button>
      </div>
      <div className='text-center text-sm text-gray-500'>
        <p>Тестовые данные:</p>
        <p>ИНН: 1234567890, код: 0987654321 - для самозанятых</p>
        <p>ИНН: 112233445566, код: 665544332211 - для МСП</p>
        <p>Все остальные вариации неверные</p>
      </div>
      {isError && (
        <p className='text-red-500 text-center'>Неверный код или ИНН</p>
      )}
    </>
  );
};
export default INNForm;
