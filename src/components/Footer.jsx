import React from 'react';
import CountryLookup from './CountryLookup';

export default function Footer() {
  return (
    <footer className='position-absolute bottom-0 text-sm text-gray-500 bg-light w-100'>
      <div className='border-bottom px-8 py-3'>
        <CountryLookup />
      </div>

      <div className='d-flex flex-column justify-content-between align-items-center px-8 py-3 space-y-7 flex-sm-row align-items-sm-center'>
        <ul className='d-flex align-items-center justify-content-center gx-6'>
          <li className='text-blue-500 hover:underline cursor-pointer'>About</li>
          <li className='text-blue-500 hover:underline cursor-pointer'>Advertising</li>
          <li className='text-blue-500 hover:underline cursor-pointer'>Business</li>
          <li className='text-blue-500 hover:underline cursor-pointer'>How Search Works</li>
        </ul>

        <ul className='d-flex align-items-center gx-5'>
          <li className='text-blue-500 hover:underline cursor-pointer'>Privacy</li>
          <li className='text-blue-500 hover:underline cursor-pointer'>Terms</li>
          <li className='text-blue-500 hover:underline cursor-pointer'>Settings</li>
        </ul>
      </div>
    </footer>
  );
};
