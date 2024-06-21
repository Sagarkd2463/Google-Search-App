import React from 'react';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className=''>
      <div className=''>
        <Link href={"https://mail.google.com"}
        className=''>
          Gmail
        </Link>

        <Link href={"https://image.google.com"}
        className=''>
          Images
        </Link>

        <TbGridDots className=''/>

        <button className=''>Sign in</button>
      </div>
    </header>
  );
};


