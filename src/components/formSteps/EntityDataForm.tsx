import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface EntityDataFormI {
  form: any;
}

const EntityDataForm = ({ form }: EntityDataFormI) => {
  return (
    <>
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Наименование ЮЛ/ФИО*</FormLabel>
            <FormControl>
              <Input placeholder='Наименование ЮЛ/ФИО...' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='inn'
        render={({ field }) => (
          <FormItem>
            <FormLabel>ИНН*</FormLabel>
            <FormControl>
              <Input placeholder='ИНН' type='number' {...field} />
            </FormControl>
            <FormDescription>
              10 цифр для субъектов МСП, 12 цифр для для ИП и самозанятых
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='ogrn'
        render={({ field }) => (
          <FormItem>
            <FormLabel>ОГРН (ОГРНИП)*</FormLabel>
            <FormControl>
              <Input placeholder='ОГРН (ОГРНИП)' type='number' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='kpp'
        render={({ field }) => (
          <FormItem>
            <FormLabel>КПП*</FormLabel>
            <FormControl>
              <Input placeholder='КПП' type='number' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='oktmo'
        render={({ field }) => (
          <FormItem>
            <FormLabel>ОКТМО*</FormLabel>
            <FormControl>
              <Input placeholder='ОКТМО' type='number' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='okato'
        render={({ field }) => (
          <FormItem>
            <FormLabel>ОКАТО*</FormLabel>
            <FormControl>
              <Input placeholder='ОКАТО' type='number' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <h3 className='text-xl font-bold pt-6'>Юридический адрес</h3>
      <FormField
        control={form.control}
        name='address_municipality'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Муниципальное образование*</FormLabel>
            <FormControl>
              <Input placeholder='Муниципальное образование...' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='address_city'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Населенный пункт*</FormLabel>
            <FormControl>
              <Input placeholder='Населенный пункт' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='address_street'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Улица*</FormLabel>
            <FormControl>
              <Input placeholder='Улица' {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name='address_building'
          render={({ field }) => (
            <FormItem className='flex-grow'>
              <FormLabel>Номер дома*</FormLabel>
              <FormControl>
                <Input placeholder='Номер дома' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address_apartment'
          render={({ field }) => (
            <FormItem className='flex-grow'>
              <FormLabel>Номер квартиры</FormLabel>
              <FormControl>
                <Input placeholder='Номер квартиры' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
export default EntityDataForm;
