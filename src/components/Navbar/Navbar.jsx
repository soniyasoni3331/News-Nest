import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='w-full h-auto py-2 flex-col justify-between bg-black'>
      {/* logo section */}
      <div className='flex justify-between items-center'>
        <Link to="/" className='p-4 md:m-auto'>
          <img src={Logo} alt="logo" className='md:h-auto md:w-44 w-96' />
        </Link>
        <div className='py-4 px-16 md:hidden' onClick={toggleMenu}>
          <FaBars className='text-white text-7xl' />
        </div>
      </div>
      {/* navigation bar */}
      <div className={`fixed bottom-0 top-44 z-20 flex h-[70%] w-[75%] flex-col justify-between bg-black px-8 pb-6 pt-16 text-white transition-all duration-200 md:hidden rounded-r-xl shadow-md ${showMenu ? "right-0" : "-right-[100%]"}`}>
        <ul className='flex flex-col justify-center items-center gap-y-28 my-5 py-2 text-8xl'>
          {['home', 'business', 'entertainment', 'health', 'general', 'science', 'sports', 'technology'].map((category) => (
            <li key={category}>
              <NavLink
                to={`/${category === 'home' ? '' : category}`}
                className={({ isActive }) => `rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)]" : "text-white"}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full h-auto bg-black py-2 hidden md:block text-xl'>
        <ul className='flex justify-evenly items-center my-2'>
          {['home', 'business', 'entertainment', 'health', 'general', 'science', 'sports', 'technology'].map((category) => (
            <li key={category}>
              <NavLink
                to={`/${category === 'home' ? '' : category}`}
                className={({ isActive }) => `rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)]" : "text-white"}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
