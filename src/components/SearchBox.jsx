"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  const handleMicClick = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTerm(transcript);

      // Automatically submit the search
      if (transcript.trim()) {
        router.push(`/search/web?searchTerm=${transcript}`);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error.message);
      alert("Error occurred during speech recognition. Please try again.");
    };

    recognition.start();
  };

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-4 py-1 max-w-3xl flex-grow md:px-5 md:py-0.5 
      md:ml-5 md:mr-5 lg:px-6 lg:py-0.5 lg:ml-6 lg:mr-6 md:max-w-3xl items-center lg:max-w-4xl xl:max-w-5xl xl:py-1.5
      2xl:max-w-6xl 2xl:py-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <RxCross2
        className="md:text-xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />

      <BsFillMicFill
        className={`hidden sm:inline-flex md:text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4 cursor-pointer 
          ${isListening ? "animate-pulse text-red-500" : ""}`}
        onClick={handleMicClick}
      />

      <AiOutlineSearch
        className="md:text-xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};
