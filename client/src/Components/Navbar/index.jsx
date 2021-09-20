import React, {useState} from 'react';
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

//component

import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';

const MobileNav = ({SignIn, SignUp }) => {
   const [isDropdownOpen, setisDropdownOpen] = useState(false)
return (
    
    <div className="flex items-center justify-between lg:hidden">
            <div className="w-28">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-zomato-400 text-white px-4 py-3 rounded-full">Use App</button>
            <span
            onClick={() => setisDropdownOpen((prev) => !prev)}
             className="border p-2 border-gray-300 text-zomato-400 rounded-full">
            <FaUserAlt />
            </span>
         
              {
                  isDropdownOpen && (
                    <div className="absolute py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2 shadow-lg">
                    <button onClick={SignIn}>Sign In</button>
                    <button onClick={SignUp}>Sign Up</button>
                  </div>
                  )
              }
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
                <button className="text-gray-500 text-xl hover:text-gray-800" onClick={SignIn}>SignIn</button>
                <button className="text-gray-500 text-xl hover:text-gray-800">SignUp</button>
            </div>
            </div>
        </div>
        </>
)};

const Navbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
  
    const openSignInmodal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);
    return (
      <>
        <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
        <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
  
        <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
          <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
          <LgNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
        </nav>
      </>
    );
  };
export default Navbar;
