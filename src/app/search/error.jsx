"use client";

import React, { useEffect } from 'react';
import '../globals.css';

export default function Error({ error, reset }) {

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className='error'>
      <h1 className='message'>Something went wrong!</h1>
      <button className='error-btn'>Try again</button>
    </div>
  );
};

