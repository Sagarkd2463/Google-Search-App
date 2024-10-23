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
      <form
        className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full shadow
        hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl'
        onSubmit={handleSubmit}>
        <AiOutlineSearch
          className='text-lg my-1 text-gray-500 -ml-0 -mr-0'
        />

        <input
          type="text"
          className='flex-grow focus:outline-none -ml-0'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search Google or Type a url'
        />

        <BsFillMicFill
          className='text-normal mt-1 -mr-1'
        />
      </form>

      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
        <button
          className='bg-blue-400 text-white rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className='bg-blue-400 text-white rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm'
          onClick={randomSearch}
          disabled={randomSearchLoading}>
          {randomSearchLoading ? 'Loading' : 'I am feeling Lucky'};
        </button>
      </div>
    </>
  );
};
