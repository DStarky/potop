import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from './ui/badge';
import { Button } from './ui/button';

const requests = [
  {
    name: 'ООО "Рога и копыта"',
    inn: '1234567890',
    date: '13-04-2024',
    status: 'рассматривается',
  },
  {
    name: 'ООО "Какие люди"',
    inn: '0987654321',
    date: '12-04-2024',
    status: 'одобрено',
  },
];

export function RequestsTable() {
  return (
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
        {requests.map((request) => (
          <TableRow key={request.inn}>
            <TableCell className='font-medium'>{request.name}</TableCell>
            <TableCell>{request.inn}</TableCell>
            <TableCell>{request.date}</TableCell>
            <TableCell>
              <Button variant={'outline'}>Редактировать</Button>
            </TableCell>
            <TableCell className='text-right'>
              <Badge
                className={`${request.status === 'рассматривается' ? '' : 'text-nowrap bg-green-500 text-white hover:bg-green-400'}`}
              >
                {request.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
