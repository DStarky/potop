import { banksOptions } from '@/constants/options';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ScrollArea } from '../ui/scroll-area';

interface BankNameFormI {
  form: any;
  index: number;
  remove: any;
}

const BankNameForm = ({ form, index, remove }: BankNameFormI) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex gap-4 items-end'>
      <FormField
        control={form.control}
        name={`bank_names.${index}`}
        defaultValue={banksOptions[0].value}
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            <FormLabel>Наименование банка № {index + 1} *</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
<div className='flex gap-2 items-center'>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-[320px] justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value
                        ? banksOptions.find((bank) => bank.value === field.value)
                            ?.label
                        : 'Банк...'}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <Button variant='destructive' onClick={() => remove(index)}>
                  Удалить
                </Button>
</div>
              <PopoverContent className='w-[320px] p-0'>
                <Command
                  filter={(value, search) => {
                    if (value.includes(search.toLowerCase())) return 1;
                    return 0;
                  }}
                >
                  <CommandInput placeholder='Найдите Банк...' />
                  <CommandEmpty>Банк отсутствует в списке</CommandEmpty>
                  <CommandGroup>
                    <ScrollArea className='h-32'>
                      {banksOptions.map((bank) => (
                        <CommandItem
                          value={bank.label}
                          key={bank.value}
                          onSelect={() => {
                            form.setValue(`bank_names.${index}`, bank.value);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              bank.value === field.value
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                          {bank.label}
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default BankNameForm;
