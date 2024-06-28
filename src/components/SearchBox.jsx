"use client";

import React, { useState } from 'react';
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
    <form className='d-flex border border-gray rounded-circle shadow-lg px-6 py-3 ms-10 me-5 flex-grow max-w-3xl align-items-center'
      onSubmit={handleSubmit}>
      <input
        type="text"
        className='form-control w-100'
        style="outline: none;"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2 className='display-4 text-muted cursor-pointer mr-2'
        onClick={() => setTerm('')}
      />
      <BsFillMicFill className='d-none d-sm-inline-flex fs-4 text-primary border-left border-secondary-300 mr-3 pl-4' />
      <AiOutlineSearch className='display-4 d-none d-sm-inline-flex text-primary cursor-pointer'
        onClick={handleSubmit}
      />
    </form>
  );
};

