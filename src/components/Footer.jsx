import React from 'react';
import CountryLookup from './CountryLookup';

export default function Footer() {
  return (
    <footer className=''>
      <div className=''>
        <CountryLookup />
      </div>

      <div className=''>
        <ul className=''>
          <li className=''>About</li>
          <li className=''>Advertising</li>
          <li className=''>Business</li>
          <li className=''>How Search Works</li>
        </ul>

        <ul className=''>
          <li className=''>Privacy</li>
          <li className=''>Terms</li>
          <li className=''>Settings</li>
        </ul>
      </div>
    </footer>
  );
};
