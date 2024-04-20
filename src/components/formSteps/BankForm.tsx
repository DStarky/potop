import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface BankFormI {
  form: any;
}

const BankForm = ({ form }: BankFormI) => {
  return (
    <>
      <FormField
        control={form.control}
        name='наименование_банка'
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
        name='инн_банка'
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
        name='кпп_банка'
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
        name='корреспондирующий_счет'
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
        name='расчетный_счет'
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
    </>
  );
};
export default BankForm;
