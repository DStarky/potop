import { RequestFormSchema } from '@/lib/requestFormSchema';

export function mapFormValuesToFormData(
  values: RequestFormSchema,
  formData: FormData,
) {
  Object.entries(values).map(([k, v]) => {
    if (k.includes('document')) return;
    formData.append(k, v);
  });

  return formData;
}
