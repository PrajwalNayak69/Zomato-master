import React from 'react';
//componet


import {TiStar} from "react-icons/ti"

const Reviewcard = () => {
 
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://b.zmtcdn.com/data/user_profile_pictures/015/6e07eae05dbcbd9b6f8dbf2b0c837015.jpg"
                        alt="somebody"
                        className="w-full h-full rounded-full object-cover"
                         />
                     </div>
                     <div className="flex flex-col">
                         <h3 className="font-lg font-semibold"> Name</h3>
                         <small className="text-gray-500">5 Reviews &#8226; 3 followers</small>
                     </div>
                    </div>
                     <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg"> Follow</button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center"> 4 <TiStar/></span>
                    <h5 className="font-regular uppercase">  Delivery</h5>
                    <small className="text-gray-500"> 3 days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">Chutney missing and the chicken over cooked till some pieces are burnt.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviewcard;
