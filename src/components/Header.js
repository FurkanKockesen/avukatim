import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';
import NotificationBell from './NotificationBell';

function Header() {
  return (
    <header className='bg-white shadowLight text-avukatimKirmizi font-semibold body-font border-solid border-b-2 border-gray-300 rounded-b-2xl'>
      <div className='container max-w-6xl mx-auto flex flex-wrap px-10 flex-col md:flex-row items-center justify-between'>
        <div className='my-2 md:my-0 md:mt-1'>
          <Link href='/'>
            <a>
              <Image
                src='/Logo-Kırmızı.png'
                height={55}
                width={240}
                objectFit='contain'
              />
            </a>
          </Link>
        </div>

        {/* Search Bar Area */}

        {/* Buttons */}
        <div className='my-2 mb-5 md:my-0  flex flex-row font-light text-sm md:text-md'>
          <NotificationBell />

          <ButtonPrimary Icon='PencilAltIcon' text='Kayıt Ol' />
          <ButtonPrimary Icon='UserIcon' text='Giriş Yap' />
        </div>
      </div>
    </header>
  );
}

export default Header;
