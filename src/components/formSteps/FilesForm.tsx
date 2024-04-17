import Link from 'next/link';

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
  form: any;
}

const FilesForm = ({ form }: FilesFormI) => {
  return (
    <div className='space-y-8'>
      <FormField
        control={form.control}
        name='document_identity'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Документ, удостоверяющий личность/подтверждающий полномочия*
            </FormLabel>
            <FormControl>
              <Input
                type='file'
                placeholder='Документ, удостоверяющий личность'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='document_selection'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Справка о соответсвии условиями отбора*</FormLabel>
            <FormControl>
              <Input type='file' {...field} />
            </FormControl>{' '}
            <FormDescription>
              Форма справки - <Link href='#'>скачать</Link>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='document_report'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Отчетные документы*</FormLabel>
            <FormControl>
              <Input type='file' {...field} />
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
        name='document_own'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Документы, подтверждающие право собственности или пользования*
            </FormLabel>
            <FormControl>
              <Input type='file' {...field} />
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
        name='document_flooding'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Материалы, подтверждающие факт затопления</FormLabel>
            <FormControl>
              <Input type='file' {...field} />
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
