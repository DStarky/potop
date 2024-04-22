import { useFieldArray } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import BankNameForm from './BankNameForm';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface BankFormI {
  form: any;
}

const BankForm = ({ form }: BankFormI) => {
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'bank_names',
  });

  return (
    <>
      <FormField
        control={form.control}
        name='bank_bik'
        render={({ field }) => (
          <FormItem>
            <FormLabel>БИК банка*</FormLabel>
            <FormControl>
              <Input placeholder='БИК банка' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='bank_name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Наименование банка*</FormLabel>
            <FormControl>
              <Input placeholder='Наименование банка...' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='bank_inn'
        render={({ field }) => (
          <FormItem>
            <FormLabel>ИНН банка*</FormLabel>
            <FormControl>
              <Input placeholder='ИНН банка' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='bank_kpp'
        render={({ field }) => (
          <FormItem>
            <FormLabel>КПП банка*</FormLabel>
            <FormControl>
              <Input placeholder='КПП банка' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='corresponding_account'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Корреспондирующий счет банка*</FormLabel>
            <FormControl>
              <Input placeholder='Корреспондирующий счет банка' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='settlement_account'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Расчетный счет</FormLabel>
            <FormControl>
              <Input placeholder='Расчетный счет' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <p>
        Для подачи заявления на предоставление кредитных каникул укажите
        наименование/я банков, в которых у Вас заключен договор
      </p>

      {fields.map((field, index) => (
        <BankNameForm
          key={field.id}
          form={form}
          index={index}
          remove={remove}
        />
      ))}

      <div className='flex gap-4 items-center'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => append('')}
          type='button'
        >
          <Plus className='h-4 w-4' />
        </Button>
        <p>Указать дополнительный банк</p>
      </div>
    </>
  );
};
export default BankForm;
