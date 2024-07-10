import React from 'react'
import Logo from '../../assets/logo.png'
import {NavLink, Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-auto py-2 flex-col justify-between bg-black'>
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
                className={({isActive})=>` rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Home
                </NavLink>
              </li>
              
              <li>
                <NavLink
                to="/business"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Business
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/entertainment"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/health"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/general"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  General
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/science"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Science
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/sports"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/technology"
                className={({isActive})=>`rounded-sm px-5 py-2 font-semibold hover:bg-[#FFCA2A] hover:text-black hover:scale-110 duration-150 ${isActive ? "scale-105 text-black bg-[rgb(255,202,42)] " : "text-white"}`}
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