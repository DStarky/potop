import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '../ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';
import { streets } from '@/constants/options';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

interface FactAdressI {
  form: any;
}

const FactAdress = ({ form }: FactAdressI) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name='fact_address'
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
                  <ScrollArea className='h-32'>
                    {streets.map((street) => (
                      <CommandItem
                        value={street.label}
                        key={street.value}
                        onSelect={() => {
                          form.setValue('fact_address', street.value);
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
                  </ScrollArea>
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
  );
};
export default FactAdress;
