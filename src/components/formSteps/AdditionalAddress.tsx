import { Button } from '../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface AdditionalAddressI {
  form: any;
  index: number;
  remove: any;
}

const AdditionalAddress = ({ form, index, remove }: AdditionalAddressI) => {
  const { register } = form;
  return (
    <>
      <h3 className='text-xl font-bold mb-6'>
        Дополнительный адрес №{index + 1}
      </h3>
      <FormField
        control={form.control}
        name={`additional_addresses.${index}.municipality`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Муниципальное образование*</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder='Муниципальное образование...'
                value={field.value || ''}
                {...register(`additional_addresses.${index}.municipality`)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`additional_addresses.${index}.city`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Населенный пункт*</FormLabel>
            <FormControl>
              <Input
                placeholder='Населенный пункт'
                {...field}
                value={field.value || ''}
                {...register(`additional_addresses.${index}.city`)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`additional_addresses.${index}.street`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Улица*</FormLabel>
            <FormControl>
              <Input
                placeholder='Улица'
                {...field}
                value={field.value || ''}
                {...register(`additional_addresses.${index}.street`)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name={`additional_addresses.${index}.building`}
          render={({ field }) => (
            <FormItem className='flex-grow'>
              <FormLabel>Номер дома*</FormLabel>
              <FormControl>
                <Input
                  placeholder='Номер дома'
                  {...field}
                  value={field.value || ''}
                  {...register(`additional_addresses.${index}.building`)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`additional_addresses.${index}.apartment`}
          render={({ field }) => (
            <FormItem className='flex-grow'>
              <FormLabel>Номер квартиры</FormLabel>
              <FormControl>
                <Input
                  placeholder='Номер квартиры'
                  {...field}
                  value={field.value || ''}
                  {...register(`additional_addresses.${index}.apartment`)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Button variant='destructive' onClick={() => remove(index)}>
        Удалить адрес
      </Button>

      <hr />
    </>
  );
};
export default AdditionalAddress;
