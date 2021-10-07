import React from 'react';
import {BsFillShieldLockFill} from "react-icons/bs";

//components
import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/Checkout/AddressList';

const Checkout = () => {
    const address = [{
        name:"home",
        address:"india"
    },
    {
        name:"gym",
        address:"india"
    },
    {
        name:"school",
        address:"india"
    }]
    return (
        <>
            <div className="flex flex-col  w-full md:w-3/5 gap-3 my-3 items-center justify-center">
            <h1 className="text-xl text-center md:text-2xl font-bold">CheckOut</h1>

            <div className="w-full  rounded-lg shadow-lg bg-white py-3 flex flex-col items-center">
            <h3 className="text-lg font-semibold">Summary</h3>
            <div className="w-full flex flex-col  gap-2 items-center">
                <h4 className="text-base tracking-wider">ORDER FROM</h4>
           <div className="w-full flex flex-col items-center text-gray-400">
           <h4>Domino's Pizza</h4>
           <small>GT World Mall, Malgudi Road, Bangloare</small>
           </div>
           <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
               <FoodItem name="pizza" quantity={3} price={300} />
               <FoodItem name="pizza" quantity={3} price={300} />
               <FoodItem name="pizza" quantity={3} price={300} />
               <FoodItem name="pizza" quantity={3} price={300} />
           </div>
          <div className="px-4 flex flex-col gap-3 w-full md:w-3/5">
          <h4 className="text-xl font-semibold">Choose address</h4>
              <AddressList address={address}/>
       
          </div>
            </div>
            <button className=" flex items-center gap-2 justify-center w-full px=4 md:w-4/5 my-4 md:my-8 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
                Pay Securely <BsFillShieldLockFill/>
            </button>
            </div>
            </div>
        </>
    )
}

export default Checkout
