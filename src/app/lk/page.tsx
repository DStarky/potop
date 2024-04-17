'use client';
import { RequestsTable } from '@/components/RequestsTable';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const LKPage = () => {
  const router = useRouter();
  return (
    <section className='p-12'>
      <h2 className='text-2xl font-bold mb-12'>
        Личный кабинет Юридического лица
      </h2>
      <h3 className='text-xl font-bold mb-6'>Мои заявки</h3>
      <RequestsTable />
      <Button className='mt-12' onClick={() => router.push('/request')}>
        Создать заявку
      </Button>
    </section>
  );
};
export default LKPage;
