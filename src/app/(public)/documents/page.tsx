import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className='max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>
        Какие документы Вам понадобятся
      </h2>

      <div className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>
          Для возобновления предпринимательской деятельности:
        </h3>
        <ul className='list-disc ml-6'>
          <li>Фото паспорта</li>
          <li>
            Фото документа, подтверждающего право подачи заявления
            (доверенность)
          </li>
        </ul>
      </div>

      <div className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>
          Для финансовой поддержки трудовой занятости:
        </h3>
        <ul className='list-disc ml-6'>
          <li>Фото паспорта</li>
          <li>
            Фото документа, подтверждающего право подачи заявления
            (доверенность)
          </li>
          <li>
            Справка-расчет работодателя (
            <Link href='#' className='underline italic text-blue-500'>
              форму можно скачать тут
            </Link>
            )
          </li>
          <li>
            Форма налоговой отчетности «Персонифицированные сведения о
            физических лицах» (
            <Link href='#' className='underline italic text-blue-500'>
              Как получить форму за 5 минут
            </Link>
            )
          </li>
          <li>
            Согласие на предоставление персональных данных третьим лицам (по
            работникам) 
            {/* (
            <Link href='#' className='underline italic text-blue-500'>
              форму можно скачать тут
            </Link>
            ) */}
          </li>
        </ul>
      </div>

      <p className=' text-gray-600'>
        Больше никаких документов не потребуется!
      </p>

      <div className='text-center mt-4'>
        <Link href='/'>
          <Button>Вернуться назад</Button>
        </Link>
      </div>
    </div>
  );
};
export default page;
