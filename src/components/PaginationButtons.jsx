"use client";

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../styles/pagination.css';

export default function PaginationButtons() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;

  return (
    <div className='page-main'>
      {
        startIndex >= 10 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div className='page-one'>
              <BsChevronLeft className='previous' />
              <p>Previous</p>
            </div>
          </Link>
        )}

      {
        startIndex <= 90 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
            <div className='page-two'>
              <BsChevronRight className='next' />
              <p>Next</p>
            </div>
          </Link>
        )}
    </div>
  );
};

