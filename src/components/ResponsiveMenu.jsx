import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLunchDining } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuHotel } from "react-icons/lu";
import { FaTheaterMasks } from "react-icons/fa";


const ResponsiveMenu = ({ showMenu }) => {
    return (

        <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-full w-[60%] bg-[#DEA02E] px-8px pt-24 text-white transition-all duration-200 ease-in backdrop-filter backdrop-blur-xl bg-opacity-50 border`}>
            <div className="container flex flex-col gap-10  mx-10 text-2xl">
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
        </div>

    )
}

export default ResponsiveMenu
