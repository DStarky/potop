import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { getSubmissionListByUserId } from '@/services/submissions/lib';
import { SubmissionTableRow } from './SubmissionTableRow';

export async function SubmissionsTable() {
  const submissions = await getSubmissionListByUserId('1');

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Наименование Юридического Лица / ФИО</TableHead>
            <TableHead>ИНН</TableHead>
            <TableHead>Дата подачи</TableHead>
            <TableHead>Редактировать заявление</TableHead>
            <TableHead className='text-right'>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((sub) => (
            <SubmissionTableRow key={sub.id} data={sub} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
