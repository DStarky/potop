'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';

const navigation = [
  { name: 'Публичный реестр', href: '/public-registry' },
  { name: 'О приложении', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className=''>
            <Image
              src='/orenburg.png'
              alt='Логотип'
              width={40}
              height={40}
              className='mr-2'
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className=' inline-flex items-center justify-center rounded-md text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link href='/login'>
            <Button>Вход для организаторов</Button>
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className=''>
              <Image
                src='/orenburg.png'
                alt='Логотип'
                width={40}
                height={40}
                className='mr-2'
              />
            </a>
            <button
              type='button'
              className='rounded-md  text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link href='/login'>
                  <Button>Вход для организаторов</Button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
