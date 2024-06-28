"use client";

import React, { useEffect } from 'react';

export default function Error({ error, reset }) {

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
      <h1 className='display-4 mb-4'>Something went wrong!</h1>
      <button className='text-primary'>Try again</button>
    </div>
  );
};

