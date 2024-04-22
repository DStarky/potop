import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { DialogTrigger } from '@radix-ui/react-dialog';
import StatusTable from './StatusTable';
import { Button } from './ui/button';
import { Dialog } from './ui/dialog';
import { useState } from 'react';

const requests = [
  {
    name: 'ООО "Рога и копыта"',
    inn: '1234567890',
    date: '13-04-2024',
  },
  {
    name: 'ООО "Какие люди"',
    inn: '0987654321',
    date: '12-04-2024',
  },
];

const statuses = [
  [
    {
      subsidy: 'Статус субсидия минтруд',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус субсидия минэк',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус микрозайм',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус ФРП',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус УФНС',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус кредитные каникулы',
      status: 'отклонено',
    },
  ],
  [
    {
      subsidy: 'Статус субсидия минтруд',
      status: 'одобрено',
    },
    {
      subsidy: 'Статус субсидия минэк',
      status: 'рассматривается',
    },
    {
      subsidy: 'Статус микрозайм',
      status: 'отклонено',
    },
    {
      subsidy: 'Статус ФРП',
      status: 'рассматривается',
    },
    {
      subsidy: 'Статус УФНС',
      status: 'одобрено',
    },
    {
      subsidy: 'Статус кредитные каникулы',
      status: 'отклонено',
    },
  ],
];

export function RequestsTable() {
  const [indexStatuses, setIndexStatuses] = useState(0);
  const [open, setOpen] = useState(false);

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
          {requests.map((request, index) => (
            <TableRow key={request.inn}>
              <TableCell className='font-medium'>{request.name}</TableCell>
              <TableCell>{request.inn}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>
                <Button variant={'outline'}>Редактировать</Button>
              </TableCell>
              <TableCell className='text-right'>
                <Button
                  onClick={() => {
                    setIndexStatuses(index);
                    setOpen(true);
                  }}
                >
                  Посмотреть
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {open && (
        <StatusTable statuses={statuses[indexStatuses]} setOpen={setOpen} />
      )}
    </>
  );
}
