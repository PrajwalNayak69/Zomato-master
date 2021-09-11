import React from 'react';
import FloatMenu from '../../Components/restaurant/OrderOnline/FloatMenu';
import MenuListContainer from '../../Components/restaurant/OrderOnline/MenuListContainer';
import FoodItem from '../../Components/restaurant/OrderOnline/FoodItem';

import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

const OrderOnline = () => {
    return (
        <>
              <div className="w-full flex">
                  <aside className="hidden md:flex flex-col border-r border-gray-200 overflow-y-scroll  gap-3 w-1/4">

                        <MenuListContainer />
                        <MenuListContainer />
                        
                  </aside>
                  <div className="w-full md:w-3/4">
                      <h2 className="text-xl font-semibold">Order Online</h2>
                      <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live track your order  |  <BiTimeFive /> 45 min
                      </h4>
                      <section>
                      <FoodItem image="https://b.zmtcdn.com/data/dish_photos/67f/e7f902d2630b4d999406f2239433067f.jpg"
                                    title="Chicken Tandoori Full"
                                    price="1000"
                                    rating={3}
                                    decription="lorem     n"
                                    />
                      </section>
                  </div>
               </div>
              <FloatMenu />
        </>
    )
}

export default OrderOnline
