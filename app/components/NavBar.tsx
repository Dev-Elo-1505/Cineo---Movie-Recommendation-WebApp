"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";
import Link from "next/link";
import SearchBar from "./searchBar";

const NavBar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };
  return (
    // mobile view
    <nav className="mb-10">
      <div className="flex justify-between items-center lg:hidden">
        <Link href={"/"} className={`${spaceGrotesk.className} text-2xl`}>
          Cineo
        </Link>
        <div className="flex items-center space-x-3">
          <IoSearchOutline className="text-2xl" onClick={handleSearch} />
          
          <Link
            href={`/filter`}
            className="bg-[#ff6c37] py-2 px-5 rounded text-[#ededed] hover:opacity-90 transition-opacity duration-300"
          >
            Filter
          </Link>
        </div>
      </div>
      {searchBar && <SearchBar isMobile={true} />}

      {/* desktop view */}
      <div className="hidden lg:flex justify-between items-center">
        <Link href={"/"} className={`${spaceGrotesk.className} text-2xl`}>
          Cineo
        </Link>
        <SearchBar />
        <div className="flex items-center space-x-3">
         
          <Link
            href={`/filter`}
            className="bg-[#ff6c37] px-8 py-2 rounded text-[#ededed] hover:opacity-90 transition-opacity duration-300"
          >
            Filter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
