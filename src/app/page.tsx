import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h1 className='mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-4xl'>
              Помощь бизнесу, пострадавшему от паводка
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Сервис для юридических лиц, индивидуальных предпринимателей и
              самозанятых, постарадавшим от паводка в Оренбургской области, для
              подачи заявлений на получение субсидий.
            </p>
            <p>
              <Link
                href='/documents'
                className='underline text-blue-500 italic'
              >
                Какие документы понадобятся
              </Link>
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <Link
                href='/dashboard'
                className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <Image
            className='aspect-[3/2] w-full  object-contain lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-lg '
            src='/hero-min.jpg'
            width={1080}
            height={1920}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
