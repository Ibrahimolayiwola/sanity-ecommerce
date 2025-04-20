import React, { useState } from "react";
// import faviconLogo from "/assets/logo/logo.png";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };
  return (
    <div className="sticky left-0 top-0 bg-white h-20 w-full z-10 px-4 max-sm:hidden">
      <div className="flex justify-between max-w-7xl mx-auto items-center gap-10">
        <div>
          <Image
            className=""
            src="/assets/logo/logo_2.png"
            width={150}
            height={60}
            alt="logo"
          />
        </div>
        <div className="flex-1 flex justify-center items-center gap-3">
          <div className="flex-1 flex justify-center items-center gap-2 relative">
            <input
              type="text"
              value={searchBar}
              onChange={handleChange}
              className="flex-1 px-10 border border-slate-400 focus:outline-0 h-10 rounded-[4px]"
              placeholder="Search products"
            />
            <button className="uppercase bg-red-500 px-4 py-2 rounded-[4px] text-slate-100 font-medium cursor-pointer">
              search
            </button>
            <TbSearch className="absolute text-slate-400 top-3 left-3 text-xl" />
            <MdOutlineClear
              className={`absolute top-3 right-[15%] text-xl text-slate-400 ${searchBar == "" ? "hidden" : ""}`}
              onClick={() => setSearchBar("")}
            />
          </div>
          <div className="flex gap-1 justify-center items-center font-semibold hover:text-red-500 cursor-pointer">
            <FaRegUser />
            <p>Account</p>
            <RiArrowDropDownLine />
          </div>
          <div className="flex gap-1 justify-center items-center font-semibold hover:text-red-500 cursor-pointer">
            <IoMdHelpCircleOutline />
            <p>Help</p>
            <RiArrowDropDownLine />
          </div>
          <div className=" flex gap-1 justify-center items-center font-semibold hover:text-red-500 cursor-pointer">
            <MdOutlineShoppingCart />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
