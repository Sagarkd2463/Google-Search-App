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
          <i className="ri-instagram-line"></i>
        </div>

        <div className="facebook-icon">
          <i className="ri-facebook-circle-line"></i>
        </div>

        <div className="twiiter-icon">
          <i className="ri-twitter-x-line"></i>
        </div>
      </div>
    </footer>
  );
};
