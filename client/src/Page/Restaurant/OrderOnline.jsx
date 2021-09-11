import React from 'react';
import FloatMenu from '../../Components/restaurant/OrderOnline/FloatMenu';
import MenuListContainer from '../../Components/restaurant/OrderOnline/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
              <div className="w-full ">
                  <aside className="hidden md:flex flex-col border-r border-gray-200 overflow-y-scroll h-screen gap-3 w-1/4">

                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                  </aside>
                  <div className="w-full md:w-3/4">
                  </div>
               </div>
              <FloatMenu />
        </>
    )
}

export default OrderOnline
