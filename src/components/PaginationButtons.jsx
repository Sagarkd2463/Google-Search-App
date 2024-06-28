"use client";

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;

  return (
    <div className='text-primary d-flex px-5 pb-3 justify-content-between justify-content-sm-start gap-3 gap-sm-5'>
      {
        startIndex >= 10 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div className='d-flex flex-column align-items-center hover-text-underline'>
              <BsChevronLeft className='h-5' />
              <p>Previous</p>
            </div>
          </Link>
        )}

      {
        startIndex <= 90 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
            <div className='d-flex flex-column align-items-center hover-text-underline'>
              <BsChevronRight className='h-5' />
              <p>Next</p>
            </div>
          </Link>
        )}
    </div>
  );
};

