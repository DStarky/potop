import { Button } from '@/components/ui/button';

export default async function UserDashboard() {
  return (
    <>
      <h1 className='text-5xl'>Личный кабинет члена Комитета</h1>
      <h2 className='text-3xl'>Реестр заявок</h2>
      <ul>
        <li>Заявка 1 - на рассмотрении</li>
        <li>Заявка 2 - отколнена</li>
      </ul>
      <div>
        <Button>Выгрузить реестр</Button>
      </div>
    </>
  );
}
