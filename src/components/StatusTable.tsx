import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface StatusTableI {
  statuses: Status[];
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Status {
  subsidy: string;
  status: string;
}

const StatusTable = ({ statuses }: StatusTableI) => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Мера</TableHead>
            <TableHead className='text-right'>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statuses.map((status) => (
            <TableRow key={status.subsidy}>
              <TableCell className='font-medium'>{status.subsidy}</TableCell>
              <TableCell className='text-right'>
                <Badge
                  className={`text-xs ${status.status === 'одобрено' ? 'bg-green-500' : status.status === 'рассматривается' ? 'bg-yellow-500' : 'bg-red-500'}`}
                >
                  {status.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default StatusTable;
