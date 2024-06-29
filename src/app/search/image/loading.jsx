import React from 'react';

export default function loading() {
  return (
    <div className='pt-10 mx-2 lg:pl-52 max-w-6xl d-flex flex-wrap flex-column sm:flex-row pb-42'>
      <div className='animate__animated animate__pulse'>
        <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
      </div>

      <div className='d-none d-sm-inline-flex d-sm-space-x-4'>
        <div className='animate__animated animate__pulse'>
          <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
          <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
          <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        </div>

        <div className='animate__animated animate__pulse'>
          <div className='h-48 w-48 mb-4 bg-gray-200 rounded-md'></div>
          <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
          <div className='h-2 w-48 mb-2.5 bg-gray-200 rounded-md'></div>
        </div>
      </div>
    </div>
  );
};


