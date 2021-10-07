import React from 'react';
import Navbar from '../Components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
          <Navbar />  
          <div className="conatiner mx-auto px-2 lg:px-20">
              {props.children}
          </div>
        </>
    )
}

export default  CheckoutLayout;
