import { useState } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { streets } from '@/constants/options';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';

interface EntityDataFormI {
  form: any;
}

const EntityDataForm = ({ form }: EntityDataFormI) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FormField
        control={form.control}
        name='наименование_юл'
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
        name='огрн'
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
        name='кпп'
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
        name='юридический_адрес_муниципалитет'
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
        name='юридический_адрес_населенный_пункт'
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
        name='юридический_адрес_улица'
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
          name='юридический_адрес_номер_дома'
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
          name='юридический_адрес_номер_квартиры'
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

      <FormField
        control={form.control}
        name='фактический_адрес'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Выберите адрес</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant='outline'
                    role='combobox'
                    className={cn(
                      'w-[200px] justify-between',
                      !field.value && 'text-muted-foreground',
                    )}
                  >
                    {field.value
                      ? streets.find((street) => street.value === field.value)
                          ?.label
                      : 'Выберите адрес'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput placeholder='Найдите адрес...' />
                  <CommandEmpty>
                    Улица не найдена. Обратитесь в контактный центр по телефону
                    112
                  </CommandEmpty>
                  <CommandGroup>
                    {streets.map((street) => (
                      <CommandItem
                        value={street.label}
                        key={street.value}
                        onSelect={() => {
                          form.setValue('фактический_адрес', street.value);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            street.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                        {street.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <FormDescription>
              Если вашего адреса нет. Позвоните по телефону 112.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
export default EntityDataForm;
