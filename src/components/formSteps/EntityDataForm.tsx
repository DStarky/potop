import { Plus } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import AdditionalAddress from './AdditionalAddress';
import FactAdress from './FactAdress';
import OKVEDForm from './OKVEDForm';

interface EntityDataFormI {
  form: any;
}

const EntityDataForm = ({ form }: EntityDataFormI) => {
  const { control, register } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'additional_addresses', // имя вашего массива дополнительных адресов
  });

  const addButtonHandler = async () => {
    const output = await form.trigger('additional_addresses', {
      shouldFocus: true,
    }); // Провалидирует уже введенные адреса
    if (!output) return; // Если провалидация не прошла то дальше не идем
    append({});
  };

  return (
    <>
      <FormField
        control={form.control}
        name='entity_name'
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
      <div className='flex gap-4 items-end'>
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
      <h3 className='text-xl font-bold pt-6'>
        Адрес(а) фактического осуществления деятельности в зоне ЧС
      </h3>

      <FactAdress form={form} />

      {fields.map((item, index) => (
        <AdditionalAddress
          key={item.id}
          form={form}
          index={index}
          remove={remove}
        />
      ))}

      <div className='flex gap-4 items-center'>
        <Button
          variant='outline'
          size='icon'
          onClick={addButtonHandler}
          type='button'
        >
          <Plus className='h-4 w-4' />
        </Button>
        <p>Указать дополнительный адрес</p>
      </div>

      <FormField
        control={form.control}
        name='eployees_count'
        render={({ field }) => (
          <FormItem className='flex-grow'>
            <FormLabel>Численность работников*</FormLabel>
            <FormControl>
              <Input placeholder='Численность работников' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <p>
        Для проверки условий для получения льготного займа по программе
        ”Инвестиционные проекты в условиях чрезвычайной ситуации” заполните поля
        ниже:
      </p>

      <OKVEDForm form={form} />
    </>
  );
};
export default EntityDataForm;
