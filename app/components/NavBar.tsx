"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [searchBar, setSearchBar] = useState(false);
  const [search, setSearch] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

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
          <ThemeSwitch />
          <Link
            href={`/filter`}
            className="bg-[#ff6c37] py-2 px-5 rounded text-[#ededed] hover:opacity-90 transition-opacity duration-300"
          >
            Filter
          </Link>
        </div>
      </div>
      {searchBar && (
        <form className="mt-2 flex items-center space-x-2 w-full rounded p-3 lg:hidden" onSubmit={handleSubmit}>
          <button className="disabled:text-gray-500" disabled={search === ""}><IoSearchOutline className="text-2xl cursor-pointer" /></button>
          <input
            type="text"
            placeholder="Find something great"
            className="w-full focus-none outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      )}

      {/* desktop view */}
      <div className="hidden lg:flex justify-between items-center">
        <Link href={"/"} className={`${spaceGrotesk.className} text-2xl`}>
          Cineo
        </Link>
        <form
          className="flex items-center justify-between w-1/2  rounded p-3 bg-[#1e1e1e] text-[#ededed]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Find something great"
            className="w-full focus-none outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="disabled:text-gray-500" disabled={search === ""}><IoSearchOutline className="text-2xl cursor-pointer" /></button>
        </form>
        <div className="flex items-center space-x-3">
          <ThemeSwitch />
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
