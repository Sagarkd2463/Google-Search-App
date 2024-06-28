import React from 'react';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
  return (
    <header className='d-flex justify-content-end p-5 text-sm'>
      <div className='d-flex justify-content-between align-items-center'>
        <Link href={"https://mail.google.com"}
          className='text-blue-500 hover:underline'>
          Gmail
        </Link>

        <Link href={"https://image.google.com"}
          className='text-blue-500 hover:underline'>
          Images
        </Link>

        <TbGridDots className='btn btn-outline-secondary bg-transparent hover:bg-gray-200 rounded-circle fs-1 p-2' />

        <button className='btn btn-primary px-4 py-2 font-weight-bold rounded-md hover-brightness-105 hover-shadow transition-shadow'>Sign in</button>
      </div>
    </header>
  );
};


