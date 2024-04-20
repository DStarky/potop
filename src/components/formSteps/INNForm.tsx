import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface EntityDataFormI {
  form: any;
}

const INNForm = ({ form }: EntityDataFormI) => {
  return (
    <>
      <div className='flex flex-col gap-4 items-start'>
        <FormField
          control={form.control}
          name='инн'
          render={({ field }) => (
            <FormItem>
              <FormLabel>ИНН*</FormLabel>
              <FormControl>
                <Input placeholder='ИНН организации' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='bg-blue-500 hover:bg-blue-400'>Проверить</Button>
      </div>
      
      <h3 className='text-xl font-bold pt-6'>Запрашиваемая субсидия</h3>

      <FormField
        control={form.control}
        name='субсидия_возобновление'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Субсидия на возобновление предпринимательской деятельности
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='субсидия_финансовая'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Финансовая поддержка трудовой занятости
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='субсидия_льгота'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
            <FormControl className='mt-1'>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel className='text-sm text-muted-foreground'>
                Заявка на льготный займ по программе ”Инвестиционные проекты в
                условиях чрезвычайных ситуаций”
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};
export default INNForm;
