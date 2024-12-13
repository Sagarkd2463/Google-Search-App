"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to search.");
      return;
    }
    if (!input.trim()) return;
    const userIdParam = user ? `&userId=${user.uid}` : "";
    router.push(`/search/web?searchTerm=${input}${userIdParam}`);
  };

  const handleMicClick = () => {
    if (!user) {
      toast.error("Please sign in to use voice search.");
      return;
    }
    if (!("webkitSpeechRecognition" in window)) {
      toast.error("Speech recognition is not supported in this browser.");
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
      setInput(transcript);

      if (transcript.trim()) {
        const userIdParam = user ? `&userId=${user.uid}` : "";
        router.push(`/search/web?searchTerm=${transcript}${userIdParam}`);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error.message);
      toast.error("Error during speech recognition. Please try again.");
    };

    recognition.start();
  };

  const handleRandomSearch = async () => {
    if (!user) {
      toast.error("Please sign in to perform a random search.");
      return;
    }
    setRandomSearchLoading(true);

    try {
      const response = await fetch("https://random-word-api.herokuapp.com/word");
      const [randomWord] = await response.json();

      if (randomWord) {
        const userIdParam = user ? `&userId=${user.uid}` : "";
        router.push(`/search/web?searchTerm=${randomWord}${userIdParam}`);
      }
    } catch (error) {
      console.error("Error fetching random word:", error);
      toast.error("Unable to fetch a random word. Please try again.");
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or Type a URL"
        />

        <BsFillMicFill
          className={`text-normal mt-1 ml-1 cursor-pointer ${isListening ? "text-red-500 animate-pulse" : ""}`}
          onClick={handleMicClick}
        />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-blue-400 text-white rounded-full text-sm hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSubmit}
        >
          Google Search
        </button>

        <button
          className="bg-blue-400 text-white rounded-full text-sm hover:ring-gray-200 focus:outline-none 
          active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
          onClick={handleRandomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
};
