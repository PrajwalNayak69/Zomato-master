import React, {useState} from 'react';
import {IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5"

//components
import FoodItem from './FoodItem';

const CartSM = ({toggle}) => {
    return <>
    <div className="flex items-center justify-between md:hidden">
    
                <div className="flex items-start flex-col gap-1">
                    <small className="flex items-center" onClick={toggle}>
                         1 Item <IoMdArrowDropup /></small>
                    <h4> ₹300 <sub>(Plus Tax)</sub></h4>
            </div>
            <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"> 
                Continue <IoMdArrowDropright /></button>
    </div>
    </>
}
const CartLG = ({toggle}) => {
    return <>
    <div className="hidden md:flex items-center justify-between container px-3 mx-auto">
    
                <div className="flex items-start text-xl gap-2">
                <span>
                <button
            className="border bg-white border-gray-300 p-1 rounded"
            onClick={toggle}
          >
            <IoMdArrowDropup />
          </button>
                </span>
                    <h4 className="text-xl font-semibold"> Your Orders ( 1 )</h4>
            </div>
            <hr className="my-2"/>
            <div className="flex flex-col gap-2">
                <div className="">
                    <h5>Chesse Tomato</h5>
                    <div className="">
                        <small></small>
                    </div>
                </div>
            </div>
           <div className="flex items-center gap-2">
                    <h4 className="text-xl"> SubTotal: ₹300 <sub>(Plus Tax)</sub></h4>
                <button className="flex items-center text-lg h-10 font-light  gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"> 
                Continue <IoMdArrowDropright /></button>
           </div>
    </div>
    </>
}



const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
        {isOpen && (
            <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-16 px-3">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">YourOrders</h3>
                <IoCloseSharp onClick={closeCart} />
            </div>
            <hr  className="my-2" />
            <div className="flex flex-col gap-2">
                <FoodItem name="pizza" quantity="3" price="90"/>
                <FoodItem name="pizza" quantity="3" price="90"/>
                <FoodItem name="pizza" quantity="3" price="90"/>
                <FoodItem name="pizza" quantity="3" price="90"/>
                <FoodItem name="pizza" quantity="3" price="90"/>
                <FoodItem name="pizza" quantity="3" price="90"/>
            </div>
            </div>
        )}
            <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0">
                <CartSM toggle={toggleCart}/>
                <CartLG toggle={toggleCart}/>
                </div>
        </>
    )
}

export default CartContainer
