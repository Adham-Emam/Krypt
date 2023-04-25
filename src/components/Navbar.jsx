import { useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logo.png";

const NavbarItem = ({ title, classProps, url }) => {
  return (
    <li
      className={`mx-4  list-none hover:opacity-80 duration-500 ${classProps}`}
    >
      <a href={url} className="cursor-pointer">
        {" "}
        {title}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center items-center p-8">
      <div className="md:flex[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div className="ms-auto flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10  fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl list-none md:hidden flex flex-col item-end text-right rounded-md blue-glassmorphism text-white bg-gray-gradient animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <NavbarItem title="Market" classProps="my-2 text-lg" />
            <NavbarItem title="Exchange" classProps="my-2 text-lg" />
            <NavbarItem title="Tutorials" classProps="my-2 text-lg" />
            <NavbarItem title="Wallets" classProps="my-2 text-lg" />
            <NavbarItem
              title="Login"
              classProps="bg-[#2952e3] py-2 px-7 rounded-full mx-4 duration-500 hover:bg-[#2546bd] text-lg my-2 w-fit ms-auto"
            />
          </ul>
        )}
      </div>
      <ul className="text-white ml-auto md:flex hidden flex-row justify-between items-center flex-initial">
        <NavbarItem title="Market" />
        <NavbarItem title="Exchange" />
        <NavbarItem title="Tutorials" />
        <NavbarItem title="Wallets" />
        <NavbarItem
          title="Login"
          classProps="bg-[#2952e3] py-2 px-7 rounded-full mx-4 duration-500 hover:bg-[#2546bd]"
        />
      </ul>
    </nav>
  );
};
export default Navbar;
