import React from 'react';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {
  return (
    <div className='pb-5 pb-md-8 mt-4'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 px-3 gx-4'>
        {results.items.map((result) => (
          <div className='mb-5' key={result.link}>
            <div className='group'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='h-60 w-full object-contain transition-shadow duration-300'
                />
              </Link>

              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline text-truncate display-3'>
                  {result.title}
                </h2>
              </Link>

              <Link href={result.image.contextLink}>
                <p className='group-hover:underline text-truncate text-secondary'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='ml-4'>
        <PaginationButtons />
      </div>
    </div>
  );
};


