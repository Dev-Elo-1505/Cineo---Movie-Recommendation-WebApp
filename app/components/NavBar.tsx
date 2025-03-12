"use client"

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const NavBar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };
  return (
    // mobile view
    <nav className="mb-10">
      <div className="flex justify-between items-center lg:hidden">
        <Link href={"/"} className={`${spaceGrotesk.className} text-2xl`}>Cineo</Link>
        <div className="flex items-center space-x-3">
          <IoSearchOutline className="text-2xl" onClick={handleSearch} />
          <ThemeSwitch />
          <button className="bg-[#ff6c37] py-2 px-5 rounded text-[#ededed]">Filter</button>
        </div>
      </div>
      {searchBar && (
        <div className="mt-2 flex items-center space-x-2 w-full rounded p-3 lg:hidden">
          <IoSearchOutline className="text-2xl" />
          <input
            type="text"
            placeholder="Find something great"
            className="w-full focus-none outline-none"
          />
        </div>
      )}

      {/* desktop view */}
      <div className="hidden lg:flex justify-between items-center">
        <Link href={"/"} className={`${spaceGrotesk.className} text-2xl`}>Cineo</Link>
        <div className="flex items-center justify-between w-1/2  rounded p-3 bg-[#1e1e1e] text-[#ededed]">
          <input
            type="text"
            placeholder="Find something great"
            className="w-full focus-none outline-none"
          />
          <IoSearchOutline className="text-2xl" />
        </div>
        <div className="flex items-center space-x-3">
          <ThemeSwitch />
          <button className="bg-[#ff6c37] px-8 py-2 rounded text-[#ededed]">Filter</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
