import React from 'react';
import CountryLookup from './CountryLookup';
import '../styles/footer.css';
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

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
          <li className='list'>How Search Works</li>
        </ul>

        <ul className='footer-two'>
          <li className='list'>Privacy</li>
          <li className='list'>Terms</li>
          <li className='list'>Settings</li>
          <li className='list'>News</li>
        </ul>
      </div>

      <div className="social-icons">
        <div className='instagram-icon'>
          <FaInstagram />
        </div>

        <div className="facebook-icon">
          <FaFacebook />
        </div>

        <div className="twiiter-icon">
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
};
