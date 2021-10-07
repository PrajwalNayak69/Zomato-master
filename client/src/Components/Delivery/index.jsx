import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import DeliveryCarousal from './DeliveryCarousal';

import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {

   const [restaurantList, setrestaurantList] = useState([]);
        const reduxState = useSelector((globalStore) => globalStore.restaurant);

        useEffect(() => {
            setrestaurantList(reduxState.restaurant);
        }, [reduxState.restaurant])
    return (
        <>
            <DeliveryCarousal />
            <Brand />
          <div className="flex justify-between flex-wrap">
         {
             restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant}  key={restaurant._id}/>
             ))
         }   
         
          </div>
        </>
    )
};

export default Delivery;
