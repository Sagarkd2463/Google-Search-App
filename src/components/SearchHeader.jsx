import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky-top bg-white'>
      <div className='d-flex w-100 p-6 align-items-center justify-content-between'>
        <Link href={'/'}>
          <Image
            alt="Google Logo"
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}
            width={120}
            height={40}
            priority
            style={{ width: 'auto' }}
          />
        </Link>

        <div className='d-flex flex-grow-1'>
          <SearchBox />
        </div>

        <div className='d-none d-md-inline-flex space-x-2'>
          <RiSettings3Line className='btn btn-outline-secondary bg-transparent hover:bg-gray-200 p-2 fs-4 rounded-circle cursor-pointer' />
          <TbGridDots className='btn btn-outline-secondary bg-transparent hover:bg-gray-200 p-2 fs-6 rounded-circle cursor-pointer' />
        </div>

        <button className='btn btn-primary px-6 py-2 font-weight-medium rounded-md hover-brightness-105 hover-shadow transition-shadow ml-2'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

