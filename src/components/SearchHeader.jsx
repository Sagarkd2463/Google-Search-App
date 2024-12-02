import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header
      className="sticky top-0 bg-white z-50 shadow-sm transition-shadow duration-300"
    >
      <div className="flex w-full p-4 md:p-6 items-center justify-between">
        <Link href={'/'}>
          <Image
            alt="Google Logo"
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
            }
            width={120}
            height={40}
            priority
            style={{ width: 'auto' }}
            className="h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-16"
          />
        </Link>

        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden md:inline-flex lg:inline-flex space-x-2">
          <RiSettings3Line
            className="bg-transparent hover:bg-gray-200 p-2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl 
          rounded-full cursor-pointer"
          />

          <TbGridDots
            className="bg-transparent hover:bg-gray-200 p-2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl
          rounded-full cursor-pointer"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-3 py-1 ml-4 md:px-3 md:py-1 md:font-normal md:ml-1 lg:px-5 lg:py-2 lg:font-medium lg:ml-1
        xl:px-6 xl:py-2 xl:font-medium xl:ml-1 2xl:px-7 2xl:py-3 2xl:font-medium 2xl:ml-1 rounded-md hover:brightness-105 hover:shadow-md 
        transition-shadow"
        >
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

