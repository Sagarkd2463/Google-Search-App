import React from 'react';
import CountryLookup from './CountryLookup';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='country'>
        <CountryLookup />
      </div>

      <div className='main'>
        <ul className='footer-one'>
          <li className='list'>About</li>
          <li className='list'>Advertising</li>
          <li className='list'>Business</li>
          <li className=''>How Search Works</li>
        </ul>

        <ul className='footer-two'>
          <li className='list'>Privacy</li>
          <li className='list'>Terms</li>
          <li className='list'>Settings</li>
        </ul>
      </div>
    </footer>
  );
};
