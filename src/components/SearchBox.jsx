"use client";

import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useSearchParams, useRouter } from 'next/navigation';


export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      className='flex border border-gray-200 rounded-full shadow-lg md:px-5 md:py-1 
      md:ml-5 md:mr-5 lg:px-7 lg:py-2 lg:ml-6 lg:mr-6 flex-grow max-w-4xl items-center 
      2xl:max-w-6xl'
      onSubmit={handleSubmit}>
      <input
        type="text"
        className='w-full focus:outline-none'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <RxCross2
        className='md:text-xl text-gray-500 cursor-pointer sm:mr-2'
        onClick={() => setTerm('')}
      />

      <BsFillMicFill
        className='hidden sm:inline-flex md:text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4 cursor-pointer'
      />

      <AiOutlineSearch
        className='md:text-xl hidden sm:inline-flex text-blue-500 cursor-pointer'
        onClick={handleSubmit}
      />
    </form>
  );
};

