import React from 'react'
import Logo from '../../assets/logo.png'
import {NavLink, Link} from 'react-router-dom'

// const menu = [
//   {
//       id: 1,
//       name: "Home",
//       link: "/",
//   },
//   {
//       id: 2,
//       name: "Bussiness",
//       link: "/bussiness",
//   },
//   {
//       id: 3,
//       name: "Entertainment",
//       link: "/entertainment",
//   },
//   {
//       id: 4,
//       name: "General",
//       link: "/general",
//   },
//   {
//     id: 5,
//     name: "Health",
//     link: "/health",
//   },
//   {
//     id: 6,
//     name: "Sports",
//     link: "/sports",
//   },
//   {
//     id: 7,
//     name: "Technology",
//     link: "/technology",
//   },
//   ]

function Navbar() {
  return (
    <div className='w-screen h-auto flex-col justify-between bg-black'>
        {/* logo section */}
            <Link to="/" className='' >
              <img src={Logo} alt="logo" className='h-auto m-auto w-36'/>
            </Link>
        {/* navigation bar */}
        <div className='w-full h-auto bg-black py-2'>
            <ul className='flex justify-evenly items-center my-2 '>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`hover:bg-black hover:text-white rounded-sm px-5 py-2 font-semibold bg-[#FFCA2A] text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                to="general"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  General
                </NavLink>
              </li>
              <li>
                <NavLink
                to="bussiness"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/"
                className={({isActive})=>`bg-black text-white rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-[#FFCA2A] " : "text-white"}`}
                >
                  Technology
                </NavLink>
              </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar