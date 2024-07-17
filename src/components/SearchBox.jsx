"use client";

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useSearchParams, useRouter } from 'next/navigation';
import '../styles/searchBox.css';

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
    <form className=''
      onSubmit={handleSubmit}>
      <input
        type="text"
        className=''
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2 className=''
        onClick={() => setTerm('')}
      />
      <BsFillMicFill className='' />
      <AiOutlineSearch className=''
        onClick={handleSubmit}
      />
    </form>
  );
};

