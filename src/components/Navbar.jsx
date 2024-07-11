import React, { useState } from 'react'
import { MdOutlineLunchDining } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuHotel } from "react-icons/lu";
import { FaTheaterMasks } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';
import { IoMenu } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-[#DEAB4D] text-white flex flex-row justify-between items-center p-8'>
      <nav className='container flex flex-row justify-between items-center mx-auto text-lg'>
        <Link to={'/'}>
          <div className="w-16 sm:w-26 md:w-46 lg:w-18 xl:w-20">
            <img src={Logo} alt="logo png" />
          </div>
        </Link>
        <div className="hidden md:flex md:flex-row md:gap-4">
          <Link to={'/'}>
            <div className="flex flex-row items-center gap-2">
              <TiWeatherPartlySunny />
              weather
            </div>
          </Link>

          <Link to={'/explore'}>
            <div className="flex flex-row items-center gap-2">
              <IoCompassOutline />
              explore
            </div>
          </Link>

          <Link to={'/eat'}>
            <div className="flex flex-row items-center gap-2"><MdOutlineLunchDining />
              eat</div>
          </Link>

          <Link to={'/hotels'}>
            <div className="flex flex-row items-center gap-2"><LuHotel />
              hotels</div>
          </Link>

          <Link to={'/events'}>
            <div className="flex flex-row items-center gap-2"><FaTheaterMasks />
              events</div>
          </Link>
        </div>
      </nav>
        <div className="flex items-center gap-5">
          {
            showMenu ? (
              <RxCross1 className='text-3xl md:hidden cursor-pointer transition-all duration-200 ease-in' onClick={() => toggleMenu()} />
            ) : (
              <IoMenu className='text-3xl md:hidden cursor-pointer transition-all duration-200 ease-in' onClick={() => toggleMenu()} />

            )
          }
        </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>

  )
}

export default Navbar
