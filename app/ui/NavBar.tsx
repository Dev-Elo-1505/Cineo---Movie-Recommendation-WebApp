import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";
import { DiVim } from "react-icons/di";

const NavBar = () => {
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };
  return (
    // mobile view
    <nav className="p-5 lg:px-20 lg:py-5">
      <div className="flex justify-between items-center lg:hidden">
        <h2 className={`${spaceGrotesk.className} text-2xl`}>Cineo</h2>
        <div className="flex items-center space-x-3">
          <IoSearchOutline className="text-2xl" onClick={handleSearch} />
          <button className="bg-[#ff6c37] py-2 px-5 rounded">Filter</button>
        </div>
      </div>
      {searchBar && (
            <div className="mt-2 flex items-center space-x-2 w-full bg-[#1e1e1e] rounded p-3 lg:hidden">
              <IoSearchOutline className="text-2xl" />
              <input
                type="text"
                placeholder="Find something great"
                className="w-full focus-none outline-none"
              />
            </div>
          )}

      {/* dexktop view */}
      <div className="hidden lg:flex justify-between items-center">
        <h2 className={`${spaceGrotesk.className} text-2xl`}>Cineo</h2>
        <div className="flex items-center justify-between w-1/2 bg-[#1e1e1e] rounded p-3">
          <input
            type="text"
            placeholder="Find something great"
            className="w-full focus-none outline-none"
          />
          <IoSearchOutline className="text-2xl" />
        </div>
        <button className="bg-[#ff6c37] px-8 py-2 rounded">Filter</button>
      </div>
    </nav>
  );
};

export default NavBar;
