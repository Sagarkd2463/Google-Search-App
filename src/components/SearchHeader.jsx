"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export default function SearchHeader() {
  const { user, setUser } = useAuth();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in -> ", error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out -> ", error.message);
    }
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm transition-shadow duration-300 overflow-hidden max-w-full">
      <div className="flex w-full p-4 md:p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="Google Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={120}
            height={40}
            priority
            className="h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-16 w-auto"
          />
        </Link>

        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden md:inline-flex lg:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl rounded-full cursor-pointer" />
        </div>

        {user ? (
          <button
            onClick={handleSignOut}
            className="bg-red-400 text-white px-3 py-1 ml-4 md:px-3 md:py-1 lg:px-5 lg:py-2 xl:px-6 xl:py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-3 py-1 ml-4 md:px-3 md:py-1 lg:px-5 lg:py-2 xl:px-6 xl:py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow"
          >
            Sign in
          </button>
        )}
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

