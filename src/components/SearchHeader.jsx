import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className=''>
      <div className=''>
        <Link href={'/'}>
          <Image
            alt="Google Logo"
            src={''}
            width={120}
            height={40}
            priority
            style={{ width: 'auto' }}
          />
        </Link>

        <div className=''>
          <SearchBox />
        </div>

        <div className=''>
          <RiSettings3Line className='' />
          <TbGridDots className='' />
        </div>

        <button className=''>Sign in</button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

