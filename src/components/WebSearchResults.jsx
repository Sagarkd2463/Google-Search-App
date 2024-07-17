import Link from 'next/link';
import Parser from 'html-react-parser';
import React from 'react';
import PaginationButtons from './PaginationButtons';
import '../styles/webSearch.css';

export default function WebSearchResults({ results }) {
  return (
    <div className=''>
      <p className=''>
        About {results.searchInformation?.formattedTotalResults} results
        ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {
        results.items?.map((result) => (
          <div className='' key={result.link}>
            <div className=''>
              <Link href={result.link}>
                {result.formattedUrl}
              </Link>

              <Link href={result.link} className=''>
                {result.title}
              </Link>
            </div>
            <p className=''>{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      <PaginationButtons />
    </div>
  );
};

