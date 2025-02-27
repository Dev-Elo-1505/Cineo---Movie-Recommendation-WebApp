import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h2>Cineo</h2>
      <div className="flex items-center space-x-2">
          <IoSearchOutline />
          <button>Filter</button>
      </div>
    </nav>
  );
};

export default NavBar;
