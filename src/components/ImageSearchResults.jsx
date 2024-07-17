import React from 'react';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';
import '../styles/imageSearch.css';

export default function ImageSearchResults({ results }) {
  return (
    <div className=''>
      <div className=''>
        {results.items.map((result) => (
          <div className='' key={result.link}>
            <div className=''>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className=''
                />
              </Link>

              <Link href={result.image.contextLink}>
                <h2 className=''>
                  {result.title}
                </h2>
              </Link>

              <Link href={result.image.contextLink}>
                <p className=''>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=''>
        <PaginationButtons />
      </div>
    </div>
  );
};


