import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { streets } from '@/constants/options';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Input } from '../ui/input';
import { useState } from 'react';

interface AddressFormI {
  form: any;
}

const AddressForm = ({ form }: AddressFormI) => {
  const [open, setOpen] = useState(false);  

  return (
    <>
      <FormField
        control={form.control}
        name='damaged_address'
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
                          form.setValue('damaged_address', street.value);
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
      <div className='flex gap-4'>
        <FormField
          control={form.control}
          name='damaged_building'
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
          name='damaged_apartment'
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
export default AddressForm;
