import { EntityForm } from '@/types';
import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

interface SubsidyFormI {
  form: any;
  entityForm: EntityForm;
}

const SubsidyForm = ({ form, entityForm }: SubsidyFormI) => {
  const countEmployees = form.getValues('employees_count');
  const inn = form.getValues('inn');
  const allowFinance = entityForm === 'smb' && countEmployees > 0;
  const allowIndustrty = entityForm === 'smb';
  const allowSpecial = inn.startsWith('56');

  return (
    <>
      <FormField
        control={form.control}
        name='subsidy_recovery'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground '>
                Субсидия на возобновление предпринимательской деятельности
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='subsidy_finance'
        render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
              <FormControl className='mt-1'>
                <Checkbox
                  disabled={!allowFinance}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel
                  className={`text-sm  ${allowFinance ? 'text-muted-foreground' : 'text-gray-300'}`}
                >
                  Финансовая поддержка трудовой занятости
                  {!allowFinance && (
                    <span className='italic'>
                      {' '}
                      (к сожалению, данная мера поддержки Вам недоступна)
                    </span>
                  )}
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='subsidy_industry'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                disabled={!allowIndustrty}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel
                className={`text-sm  ${allowIndustrty ? 'text-muted-foreground' : 'text-gray-300'}`}
              >
                Льготные займы Фонда развития промышленности{' '}
                {!allowIndustrty && (
                  <span className='italic'>
                    (к сожалению, данная мера поддержки Вам недоступна)
                  </span>
                )}
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='subsidy_special'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                disabled={!allowSpecial}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel
                className={`text-sm  ${allowSpecial ? 'text-muted-foreground' : 'text-gray-300'}`}
              >
                Льготные займы ”Специальный ЧС” по ставке 1% на сумма до 5 млн
                рублей для МСП
                {!allowSpecial && (
                  <span className='italic'>
                    (к сожалению, данная мера поддержки Вам недоступна)
                  </span>
                )}
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='subsidy_tax'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground '>
                Налоговые льготы
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='subsidy_holidays'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground '>
                Кредитные каникулы от 6 до 12 месяцев
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
export default SubsidyForm;
