import Link from 'next/link';
import Parser from 'html-react-parser';
import React from 'react';
import PaginationButtons from './PaginationButtons';
import '../styles/webSearch.css';

export default function WebSearchResults({ results }) {
  if (!results || !results.searchInformation) {
    return <p>No results found.</p>;
  }

  return (
    <div className='result-main'>
      <p className='result-about'>
        About {results.searchInformation.formattedTotalResults} results
        ({results.searchInformation.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div className='result-sub' key={result.link}>
          <div className='result-link'>
            <Link href={result.link}>
              {result.formattedUrl}
            </Link>

            <Link href={result.link} className='result-title'>
              {result.title}
            </Link>
          </div>
          <p className='result-end'>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}