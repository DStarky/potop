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
          name='firstname'
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
          name='lastname'
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
          name='middlename'
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
        name='phone'
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
        name='fax'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Факс</FormLabel>
            <FormControl>
              <Input placeholder='Факс' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
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
