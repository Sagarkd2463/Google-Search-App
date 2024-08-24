import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';
import "../styles/searchHeader.css";

export default function SearchHeader() {
  return (
    <header className='search-header'>
      <div className='search-sub'>
        <Link href={'/'}>
          <Image
            alt="Google Logo"
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}
            width={120}
            height={40}
            priority
            style={{ width: 'auto' }}
            className='img-google'
          />
        </Link>

        <div className='searchBox'>
          <SearchBox />
        </div>

        <div className='search-items'>
          <RiSettings3Line className='settings' />
          <TbGridDots className='dots' />
        </div>

        <button className='sign-in-btn'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

