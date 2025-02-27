import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { spaceGrotesk } from "./fonts";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h2 className={`${spaceGrotesk.className} text-2xl`}>Cineo</h2>
      <div className="flex items-center space-x-2">
          <IoSearchOutline className="text-2xl" />
          <button className="bg-[#ff6c37] py-2 px-3 rounded">Filter</button>
      </div>
    </nav>
  );
};

export default NavBar;
