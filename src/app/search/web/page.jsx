import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react';
import './style.css';

export default async function WebSearchPage({ searchParams }) {

  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}
    &q=${searchParams.searchTerm}&start=${startIndex}`);

  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='no-result'>
        <h1 className='no-result-title'>
          No results found for {searchParams.searchTerm}
        </h1>

        <p className='searching'>
          Try searching the web or images for something else{' '}
          <Link href={'/'} className='home'>
            Home
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div>
      {results && <WebSearchResults result={data} />};
    </div>
  );
};

