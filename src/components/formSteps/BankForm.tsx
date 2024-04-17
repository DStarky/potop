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
        name='subsidy'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Размер ожидаемой субсидии</FormLabel>
            <FormControl>
              <Input placeholder='Размер ожидаемой субсидии...' {...field} />
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
        name='bank_correspondent_account'
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
        name='bank_account'
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
