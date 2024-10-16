import React from 'react';
import CountryLookup from './CountryLookup';
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryLookup />
      </div>

      <div className='flex flex-col sm:flex-col justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
          <li className='hover:underline cursor-pointer'>How Search Works</li>
        </ul>

        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Settings</li>
          <li className='hover:underline cursor-pointer'>News</li>
        </ul>

        <p className="text-1xl">Follow us on</p>
        <ul className='flex items-end space-x-6'>
          <li className='text-xl'>
            <FaInstagram />
          </li>
          <li className='text-xl ml-1 '>
            <FaFacebook />
          </li>
          <li className='text-xl ml-1'>
            <FaXTwitter />
          </li>
        </ul>
      </div>
    </footer>
  );
};
