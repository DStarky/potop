import Link from 'next/link';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import {
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormField,
} from '../ui/form';

interface FinishFormI {
  finishFn: () => void;
  form: any;
}

const FinishForm = ({ finishFn, form }: FinishFormI) => {
  return (
    <>
      <h3 className='text-xl font-bold pt-6'>Выражаю согласие</h3>

      <FormField
        control={form.control}
        name='agreement_info'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Подтверждаю, что все изложенные в заявке и прилагаемых
                документах сведения полные и достоверные
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_procedure'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                С порядком и условиями предоставления субсидии ознакомлен и
                согласен
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='agreement_condition'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Нажимая ”Отправить заявление” я принимаю условия{' '}
                <Link href='#' className='underline'>
                  соглашения о признании простой электронной подписи
                </Link>
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <div className='flex justify-center'>
        <Button type='submit' onClick={() => finishFn()}>
          Отправить заявление
        </Button>
      </div>
    </>
  );
};
export default FinishForm;
