import Link from 'next/link';
import Parser from 'html-react-parser';
import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function WebSearchResults({ results }) {
  return (
    <div className='w-100 mx-auto px-3 pb-24 sm-pb-40 sm-pl-5p md-pl-14p lg-pl-52'>
      <p className='text-muted small mb-3 mt-2'>
        About {results.searchInformation?.formattedTotalResults} results
        ({results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {
        results.items?.map((result) => (
          <div className='container mx-auto max-w-xl mb-5' key={result.link}>
            <div className='btn-group d-flex flex-column'>
              <Link href={result.link}>
                {result.formattedUrl}
              </Link>

              <Link href={result.link} className='group-hover:underline text-truncate text-primary font-weight-medium text-primary'>
                {result.title}
              </Link>
            </div>
            <p className='text-muted'>{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      <PaginationButtons />
    </div>
  );
};

