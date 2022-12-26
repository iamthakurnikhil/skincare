import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between m-7 ">
      <div className="flex items-center gap-4">
        <img className="w-10 h-10" src={Logo} alt=""></img>
        <span className="text-lg font-semibold">Beauty Care</span>
      </div>

      <div className="flex gap-8 items-center justify-center">
        <ul className="hidden md:flex gap-8 items-center  cursor-pointer">
          <li className="hover:text-orange-500">Collections</li>
          <li className="hover:text-orange-500">New</li>
          <li className="hover:text-orange-500">Sales</li>
          <li className="hover:text-orange-500">ENG</li>
          <li className="hover:text-orange-500">Brands</li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer  z-10  md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center gap-8 items-center absolute z-[99] mt-80 mr-40 p-4 text-lg max-w-content bg-white max-h-content cursor-pointer rounded-md ">
            <li className="hover:text-orange-500">Collections</li>
            <li className="hover:text-orange-500">New</li>
            <li className="hover:text-orange-500">Sales</li>
            <li className="hover:text-orange-500">ENG</li>
            <li className="hover:text-orange-500">Brands</li>
          </ul>
          
        )}

        <input
          type="text"
          className="hidden md:rounded-md w-24 h-8 p-2"
          placeholder="Search"
        />
        <CgShoppingBag className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
