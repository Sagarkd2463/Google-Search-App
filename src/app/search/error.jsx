"use client";

import React, { useEffect } from 'react';

export default function Error({ error, reset }) {

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className=''>
      <h1 className=''>Something went wrong!</h1>
      <button className=''>Try again</button>
    </div>
  );
};

