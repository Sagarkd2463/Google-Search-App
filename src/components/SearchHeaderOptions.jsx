"use client";

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import '../styles/searchHeaderOptions.css';

export default function SearchHeaderOptions() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const pathname = usePathname();

  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  };

  return (
    <div className='search-options'>
      <div className={`search-tab-one ${pathname === '/search/web' && ''}`}
        onClick={() => selectTab("All")}>
        <AiOutlineSearch className='search-icon' />
        <p>All</p>
      </div>

      <div className={`search-tab-two ${pathname === '/search/image' && ''}`}
        onClick={() => selectTab("Images")}>
        <AiOutlineCamera className='camera-icon' />
        <p>Images</p>
      </div>
    </div>
  );
};

