import React from 'react';
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";



const Navbar = () => {
    return (
        <>
        <nav className="p-4 bg-color-white shadow-md lg:shadow-none -px-4">
        <div className="conatiner px-4 md:px-20 mx-auto">
        <div className="flex items-center justify-between">
        <AiOutlineArrowLeft />
            <div className="w-28">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
                className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 border p-2 border-gray-300 text-zomato-400 rounded-full">
                <FaUserAlt /> 
            </span>
            Prajwal
            </div>
</div>
        </div>
        </nav>
       
        </>
    );
};
export default Navbar;