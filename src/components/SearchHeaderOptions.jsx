"use client";

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';

export default function SearchHeaderOptions() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const pathname = usePathname();

  const selectTab = (tab) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  };

  return (
    <div className=''>
      <div className='' onClick={() => selectTab("All")}>
        <AiOutlineSearch className='' />
        <p>All</p>
      </div>

      <div className='' onClick={() => selectTab("Images")}>
        <AiOutlineCamera className='' />
        <p>Images</p>
      </div>
    </div>
  );
};

