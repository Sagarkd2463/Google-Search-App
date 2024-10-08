"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import '../styles/homeSearch.css';

export default function HomeSearch() {

  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form className='form-main'
        onSubmit={handleSubmit}>
        <AiOutlineSearch className='search-icon' />
        <input type="text" className='text-input' onChange={(e) => setInput(e.target.value)} placeholder='Search Google or Type a url' />
        <BsFillMicFill className='voice-icon' />
      </form>
      <div className='search-sub'>
        <button className='search-btn'
          onClick={handleSubmit}>Google Search</button>
        <button className='random-btn'
          onClick={randomSearch} disabled={randomSearchLoading}>
          {randomSearchLoading ? 'Loading' : 'I am feeling Lucky'};
        </button>
      </div>
    </>
  );
};
