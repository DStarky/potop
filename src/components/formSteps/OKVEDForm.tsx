import { okveds } from '@/constants/options';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
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
import Link from 'next/link';

interface OKVEDFormI {
  form: any;
}

const OKVEDForm = ({ form }: OKVEDFormI) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FormField
        control={form.control}
        name='okved'
        render={({ field }) => (
          <FormItem className='flex flex-col'>
            {/* <FormLabel>Организации присвоен один из следующих ОКВЭД</FormLabel> */}
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
                      ? okveds.find((okved) => okved.value === field.value)
                          ?.label
                      : 'ОКВЭД'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='max-h-[150px] overflow-y-scroll w-[200px] p-0'>
                <Command>
                  <CommandInput placeholder='Найдите ОКВЭД...' />
                  <CommandEmpty>ОКВЭД не входит в перечень</CommandEmpty>
                  <CommandGroup>
                    {okveds.map((okved) => (
                      <CommandItem
                        value={okved.label}
                        key={okved.value}
                        onSelect={() => {
                          form.setValue('okved', okved.value);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            okved.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                        {okved.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
      <p>
        <Link href='/okved-file.pdf' target='_blank' className='underline'>
          Как узнать свой ОКВЭД за 5 минут
        </Link>
      </p>
      <FormField
        control={form.control}
        name='without_okved'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md py-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Нет
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
export default OKVEDForm;
