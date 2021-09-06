import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

const MobileNav = () => {
return (
    <div className="flex items-center justify-between lg:hidden">
            <div className="w-28">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white px-4 py-3 rounded-full">Use App</button>
            <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                <FaUserAlt />
            </span>
            </div>
</div>
)};

const LgNav= () => {
    return (
        <>
        <div className="container px-20 mx-auto">
            <div className="hidden gap-4 items-center justify-between  lg:flex ">
            <div className="w-28">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
                className="w-full h-full" /> 
            </div>
            <div className="w-3/4 bg-white shadow-md px-3 py-3 flex items-center gap-3 border border-gray-200 rounded ">
                <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                    <span className="text-zomato-400">
                        <HiLocationMarker />
                    </span>
                    <input type="text" placeholder="Udupi"
                     className="w-full focus:outline-none" />
                    <IoMdArrowDropdown />
                </div>
                <div className="flex w-full items-center gap-4">
                    <RiSearch2Line />
                    <input type="search" placeholder="Search for Restuarant, Cuisine Or Dish" 
                    className="w-full focus:outline-none"/>
                </div>
            </div>
            <div className="ml-20 flex gap-3 ">
                <button className="text-gray-500 text-xl hover:text-gray-800">LogIn</button>
                <button className="text-gray-500 text-xl hover:text-gray-800">SignUp</button>
            </div>
            </div>
        </div>
        </>
)};

const Navbar = () => {
    return (
        <>
        <nav className="p-4 bg-color-white shadow-md lg:shadow-none -px-4">
        <MobileNav />
            <LgNav />
            
        </nav>
       
        </>
    );
};
export default Navbar;