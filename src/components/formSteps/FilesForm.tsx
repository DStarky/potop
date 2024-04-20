import Link from 'next/link';

import { RequestFormSchema } from '@/lib/requestFormSchema';
import { cn } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface FilesFormI {
  form: UseFormReturn<RequestFormSchema>;
  hidden: boolean;
}

const FilesForm = ({ form, hidden }: FilesFormI) => {
  return (
    <div className={cn('space-y-8n', hidden && 'hidden')}>
      <FormField
        control={form.control}
        name='документ_паспорт'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Документ, удостоверяющий личность/подтверждающий полномочия*
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value?.fileName}
                onChange={(event) => {
                  field.onChange(event?.target?.files?.[0]);
                }}
                type='file'
                placeholder='Документ, удостоверяющий личность'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='документ_копия'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Справка о соответсвии условиями отбора*</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value?.fileName}
                onChange={(event) => {
                  field.onChange(event?.target?.files?.[0]);
                }}
                type='file'
              />
            </FormControl>{' '}
            <FormDescription>
              Форма справки -{' '}
              <Link href='#' className='underline'>
                скачать
              </Link>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='документ_расчет'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Отчетные документы*</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value?.fileName}
                onChange={(event) => {
                  field.onChange(event?.target?.files?.[0]);
                }}
                type='file'
              />
            </FormControl>
            <FormDescription>
              СФР (форма-4 ФСС РФ) или ФНС (форма по КНД 1151111)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='документ_сведения'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Документы, подтверждающие право собственности или пользования*
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value?.fileName}
                onChange={(event) => {
                  field.onChange(event?.target?.files?.[0]);
                }}
                type='file'
              />
            </FormControl>
            <FormDescription>
              Договор купли/продажи, аренды, ПТС, доверенность, выписка из ОГРН
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='документ_персональные_данные'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Материалы, подтверждающие факт затопления</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value?.fileName}
                onChange={(event) => {
                  field.onChange(event?.target?.files?.[0]);
                }}
                type='file'
              />
            </FormControl>
            <FormDescription>
              Фото/видео материалы в едином архиве
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default FilesForm;
