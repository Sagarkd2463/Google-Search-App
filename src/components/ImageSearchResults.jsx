import React from 'react';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';
import '../styles/imageSearch.css';

export default function ImageSearchResults({ results }) {
  return (
    <div className='image-main'>
      <div className='image-sub'>
        {results.items.map((result) => (
          <div className='results' key={result.link}>
            <div className='results-sub'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.image.thumbnailLink}
                  alt={result.title}
                  className='result-img'
                />
              </Link>

              <Link href={result.image.contextLink}>
                <h2 className='result-title'>
                  {result.title}
                </h2>
              </Link>

              <Link href={result.image.contextLink}>
                <p className='result-link'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        <PaginationButtons />
      </div>
    </div>
  );
}


