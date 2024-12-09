"use client";

import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuth } from "../context/AuthContext";


export default function HomeHeader() {
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
    <header className="flex justify-end p-3 mr-3">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline text-sm">
          Gmail
        </Link>

        <Link href={"https://image.google.com"} className="hover:underline text-sm">
          Images
        </Link>

        <Link href={"https://labs.google.com"}>
          <SlChemistry
            className="bg-transparent hover:bg-gray-200 rounded-full text-3xl p-2 lg:text-4xl xl:text-4xl 2xl:text-3xl"
          />
        </Link>

        <TbGridDots
          className="bg-transparent hover:bg-gray-200 rounded-full text-3xl p-2 lg:text-4xl xl:text-4xl 2xl:text-3xl"
        />

        {user ? (
          <>
            <p className="text-sm">{user.displayName}</p>
            <button
              onClick={handleSignOut}
              className="bg-red-400 text-white text-sm px-3 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow
                md:px-4 md:py-2 lg:px-5 lg:py-3 xl:px-4 xl:py-2 2xl:px-3 2xl:py-2"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-blue-400 text-white text-sm px-3 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow
              md:px-4 md:py-2 lg:px-5 lg:py-3 xl:px-4 xl:py-2 2xl:px-3 2xl:py-2"
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

