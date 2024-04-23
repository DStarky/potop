import { SubmissionsTable } from '@/components/SubmissionsTable/SubmissionsTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LKPage = () => {
  return (
    <section className='p-6'>
      <h2 className='text-2xl font-bold mb-12'>
        Личный кабинет Юридического лица
      </h2>
      <h3 className='text-xl font-bold mb-6'>Мои заявки</h3>
      <SubmissionsTable />
      <Link href='/request'>
        <Button className='mt-12'>Создать заявку</Button>
      </Link>
    </section>
  );
};
export default LKPage;
