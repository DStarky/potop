import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface RecipientFormI {
  form: any;
}

const RecipientForm = ({ form }: RecipientFormI) => {
  return (
    <>
      <div className='flex w-full justify-between gap-4'>
        <FormField
          control={form.control}
          name='имя_заявителя'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя*</FormLabel>
              <FormControl>
                <Input placeholder='Имя' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='фамилия_заявителя'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия*</FormLabel>
              <FormControl>
                <Input placeholder='Фамилия' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='отчество_заявителя'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
              <FormControl>
                <Input placeholder='Отчество' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name='телефон'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Телефон*</FormLabel>
            <FormControl>
              <Input placeholder='Телефон' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='электронный_адрес'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email*</FormLabel>
            <FormControl>
              <Input placeholder='Email' {...field} />
            </FormControl>
            <FormDescription>
              <strong>Внимание!</strong> Обязательно указание адреса в зоне{' '}
              <strong>.ru</strong>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
export default RecipientForm;
