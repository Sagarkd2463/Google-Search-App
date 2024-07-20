import React from 'react';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import '../styles/homeHeader.css';

export default function HomeHeader() {
  return (
    <header className='header-main'>
      <div className='header-sub'>
        <Link href={"https://mail.google.com"}
          className='sub-one'>
          Gmail
        </Link>

        <Link href={"https://image.google.com"}
          className='sub-two'>
          Images
        </Link>

        <Link href={"https://labs.google.com"}
          className='sub-three'>
          Search Labs
        </Link>

        <TbGridDots className='sub-four' />

        <button className='sub-five'>Sign in</button>
      </div>
    </header>
  );
};


