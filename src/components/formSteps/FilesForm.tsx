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
    <div className={cn('space-y-8', hidden && 'hidden')}>
      <FormField
        control={form.control}
        name='document_passport'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Копия паспорта*</FormLabel>
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
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='document_copy'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Копия документа, подтверждающего полномочия лица, подписавшего
              заявку (в случае, если заявка подается не руководителем)*
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
            </FormControl>{' '}
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='document_calc'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Справка-расчет работодателя (форму скачать можно{' '}
              <Link href='#' className='underline'>
                тут
              </Link>
              )*
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
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='document_info'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Форма налоговой отчетности ”Персонифицированные сведения о
              физических лицах” <br />(
              <Link href='#' className='underline'>
                Как получить форму за 5 минут
              </Link>
              )*
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
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='document_personal'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Согласие на предоставление персональных данных третьим лицам (по
              работникам) <br /> (форму скачать можно{' '}
              <Link href='#' className='underline'>
                тут
              </Link>
              )
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

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
export default FilesForm;
