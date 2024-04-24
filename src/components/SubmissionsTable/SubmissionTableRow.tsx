'use client';

import { Submission } from '@/services/submissions/types';
import { useState } from 'react';
import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';
import StatusTable from '../StatusTable';

type Props = {
  data: Submission;
};

export function SubmissionTableRow({ data }: Props) {
  const [expanded, setExpanded] = useState(false);
  const expandBtnText = expanded ? 'Скрыть' : 'Посмотреть';

  return (
    <>
      <TableRow key={data.inn}>
        <TableCell className='font-medium'>{data.name}</TableCell>
        <TableCell>{data.inn}</TableCell>
        <TableCell>{data.date}</TableCell>
        <TableCell>
          <Button variant={'outline'}>Редактировать</Button>
        </TableCell>
        <TableCell className='text-right'>
          <Button onClick={() => setExpanded(!expanded)}>
            {expandBtnText}
          </Button>
        </TableCell>
      </TableRow>
      {expanded && (
        <TableRow>
          <TableCell colSpan={5}>
            <StatusTable statuses={data.statuses} />
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
