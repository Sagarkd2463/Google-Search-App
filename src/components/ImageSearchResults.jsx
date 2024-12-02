import React from 'react';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {

  if (!results || !results.items?.length) {
    return (
      <div className="ml-3 mt-2 md:ml-5 lg:ml-8">
        <p className="text-gray-600 text-lg">
          No image results found. Try searching for something else.
        </p>
      </div>
    );
  }

  return (
    <div className='sm:pb-24 pb-40 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items.map((result) => (
          <div className='mb-8' key={result.link}>
            <div className='group'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.image.thumbnailLink}
                  alt={result.title}
                  className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
                />
              </Link>

              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-normal'>
                  {result.title}
                </h2>
              </Link>

              <Link href={result.image.contextLink}>
                <p className='group-hover:underline truncate text-gray-600 text-sm'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <PaginationButtons />
    </div>
  );
};


