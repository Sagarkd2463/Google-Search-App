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
    <div className='flex justify-between -mb-16 items-center mt-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32'>
      {startIndex >= 10 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className='flex items-center space-x-2 group'>
            <BsChevronLeft className='h-5 text-gray-600 group-hover:text-blue-600 transition duration-200' />
            <p className='text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition duration-200'>
              Previous
            </p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className='flex items-center space-x-2 group'>
            <p className='text-sm sm:text-base text-gray-700 group-hover:text-blue-600 transition duration-200'>
              Next
            </p>
            <BsChevronRight className='h-5 text-gray-600 group-hover:text-blue-600 transition duration-200' />
          </div>
        </Link>
      )}
    </div>
  );
};
