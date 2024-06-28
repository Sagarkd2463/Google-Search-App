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
    <div className='d-flex gap-2 user-select-none border-bottom w-100 justify-content-center justify-content-lg-start pl-52 text-muted text-sm'>
      <div className={`d-flex align-items-center space-x-1 border-bottom border-0 active text-primary cursor-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-primary !border border-primary'}`}
        onClick={() => selectTab("All")}>
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>

      <div className={`d-flex align-items-center space-x-1 border-bottom border-0 active text-primary cursor-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-primary !border border-primary'}`}
        onClick={() => selectTab("Images")}>
        <AiOutlineCamera className='text-md' />
        <p>Images</p>
      </div>
    </div>
  );
};

