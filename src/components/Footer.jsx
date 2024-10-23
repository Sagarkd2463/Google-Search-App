import React from 'react';
import CountryLookup from './CountryLookup';
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-2'>
        <CountryLookup />
      </div>

      <div className='flex flex-col sm:flex-col items-center px-5 -py-2 space-y-6 sm:space-y-0 md:space-y-2 lg:space-y-3 
      xl:space-y-4 2xl:space-y-6'>
        <ul className='flex items-center space-x-4'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
          <li className='hover:underline cursor-pointer'>Stories</li>
        </ul>

        <ul className='flex items-center space-x-4'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Settings</li>
          <li className='hover:underline cursor-pointer'>News</li>
        </ul>
        <div className='flex flex-col items-center space-x-3 -mt-1 lg:space-y-2 lg:space-x-3 xl:space-y-3 xl:space-x-3 
        2xl:space-y-4 2xl:space-x-4 xl:py-0 2xl:py-5'>
          <p className="text-1xl">Follow us on</p>
          <ul className='flex items-center space-x-6'>
            <li className='text-lg'>
              <FaInstagram />
            </li>
            <li className='text-lg ml-1'>
              <FaFacebook />
            </li>
            <li className='text-lg ml-1'>
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
