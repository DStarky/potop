
import { RequestFormSchema } from '@/lib/requestFormSchema';
import { cn } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
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
        name='документ_паспорт'
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
        name='документ_копия'
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
        name='документ_расчет'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Справка-расчет работодателя*</FormLabel>
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
        name='документ_сведения'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Форма налоговой отчетности ”Персонифицированные сведения о
              физических лицах”*
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
        name='документ_персональные_данные'
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Согласие на предоставление персональных данных третьим лицам (по
              работникам)
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
