"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (user) {
      router.push(`/search/web?searchTerm=${input}&userId=${user.uid}`);
    } else {
      router.push(`/search/web?searchTerm=${input}`);
    }
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;

    if (user) {
      router.push(`/search/web?searchTerm=${response}&userId=${user.uid}`);
    } else {
      router.push(`/search/web?searchTerm=${response}`);
    }
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 rounded-full shadow px-4 py-1.5
        hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-lg my-1 text-gray-500 mr-1" />

        <input
          type="text"
          className="flex-grow text-lg focus:outline-none -ml-0"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or Type a url"
        />

        <BsFillMicFill className="text-normal mt-1 ml-1" />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-blue-400 text-white rounded-full text-sm text-gray-800 hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          className="bg-blue-400 text-white rounded-full text-sm text-gray-800 hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={randomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? "Loading" : "I am feeling Lucky"};
        </button>
      </div>
    </>
  );
};
