"use client";

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

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
      <form className='d-flex w-100 mt-5 mx-auto border border-gray-200 px-5 py-3 rounded-circle hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
        onSubmit={handleSubmit}>
        <AiOutlineSearch className='display-4 text-secondary mr-3' />
        <input type="text" className='flex-grow focus-outline-none' onChange={(e) => setInput(e.target.value)} />
        <BsFillMicFill className='text-lg' />
      </form>
      <div className='d-flex flex-column gap-2 justify-center flex-sm-row mt-8 gap-sm-4'>
        <button className='btn btn-secondary rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}>Google Search</button>
        <button className='btn btn-primary rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm'
          onClick={randomSearch} disabled={randomSearchLoading}>
          {randomSearchLoading ? 'Loading' : 'I am feeling Lucky'};
        </button>
      </div>
    </>
  );
};
