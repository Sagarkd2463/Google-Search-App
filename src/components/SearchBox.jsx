"use client";

import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import '../styles/searchBox.css';

export default function SearchBox() {
  const router = useRouter();
  const { searchTerm } = router.query;
  const [term, setTerm] = useState(searchTerm || '');

  useEffect(() => {
    // Update the term when the search term from the query changes
    setTerm(searchTerm || '');
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form className='searchbox' onSubmit={handleSubmit}>
      <input
        type="text"
        className='search-term'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2 className='cross-icon-searchbox'
        onClick={() => setTerm('')}
      />
      <BsFillMicFill className='voice-icon-searchbox' />
      <AiOutlineSearch className='search-icon-searchbox'
        onClick={handleSubmit}
      />
    </form>
  );
};

