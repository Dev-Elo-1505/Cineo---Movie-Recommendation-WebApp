import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";

const NavBar = () => {
  return (
    // mobile view
    <nav>
      <div className="flex justify-between items-center p-5 lg:hidden">
          <h2 className={`${spaceGrotesk.className} text-2xl`}>Cineo</h2>
          <div className="flex items-center space-x-3">
              <IoSearchOutline className="text-2xl" />
              <button className="bg-[#ff6c37] py-2 px-5 rounded">Filter</button>
          </div>
      </div>

      {/* dexktop view */}
      <div className="hidden lg:flex justify-between items-center px-20 py-5">
      <h2 className={`${spaceGrotesk.className} text-2xl`}>Cineo</h2>
      <div className="flex items-center justify-between w-1/2 bg-[#1e1e1e] rounded p-3">
        <input type="text" placeholder="Find something great" className="w-full focus-none outline-none" />
        <IoSearchOutline className="text-2xl" />
      </div>
      <button className="bg-[#ff6c37] px-8 py-2 rounded">Filter</button>
      </div>
    </nav>
  );
};

export default NavBar;
