import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react';

export default async function ImageSearchPage({ searchParams }) {

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}
    &q=${searchParams.searchTerm}&searchType=image`);

  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className=''>
        <h1 className=''>
          No results found for {searchParams.searchTerm}
        </h1>

        <p className=''>
          Try searching the web or images for something else{' '}
          <Link href={'/'} className=''> Home </Link>
        </p>
      </div>
    );
  };

  return (
    <div>
      {results && <ImageSearchResults result={data} />};
    </div>
  );
};

