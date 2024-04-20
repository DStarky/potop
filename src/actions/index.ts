'use server';

import { RequestFormSchema } from '@/lib/requestFormSchema';

const map = {
  recipient_first_name: 'firstname',
  recipient_last_name: 'lastname',
  recipient_middle_name: 'middlename',
  recipient_email: 'email',
  recipient_fax: 'fax',
  recipient_phone: 'phone',
  subsidy_amount: 'subsidy',
};

export async function createSubmission(formData: FormData) {
  'use server';

  // const file: File | null = formData.get(
  //   'document_identity',
  // ) as unknown as File;

  // const bytes = await file.arrayBuffer();
  // const buffer = Buffer.from(bytes).toString('base64');

  console.log(formData);


  // const data = {
  //   // status: ApplicationsStatusOptions['NEW'], // дефолт не ставится в БД
  //   recipient_first_name: formData.get('firstname'),
  //   recipient_last_name: formData.get('lastname'),
  //   recipient_middle_name: formData.get('middlename'),
  //   recipient_email: formData.get('email'),
  //   recipient_fax: formData.get('fax'),
  //   recipient_phone: formData.get('phone'),
  //   subsidy_amount: formData.get('subsidy'),
  //   back_account: formData.get('bank_account'),
  //   doc_id: buffer,
  //   doc_criteria: formData.get('document_selection'),
  //   doc_report: formData.get('document_report'),
  //   doc_owner_proof: formData.get('document_own'),
  //   doc_damage_proof: formData.get('document_flooding'),
  // }; //satisfies Partial<ApplicationsRecord>;
  // // console.log(data);

  return;
}
