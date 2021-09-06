import React, {useState} from 'react';
import DeliveryCarousal from './DeliveryCarousal';

import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';


const Delivery = () => {

    const [restaurantList] = useState([
        {
            _id: "1",
            photos: [ "https://b.zmtcdn.com/data/pictures/6/18698876/8d59f9514a9680933c40d163d8ca0e4c_o2_featured_v2.jpg?output-format=webp"

            ],
            name: "Hangyo CTF",
            cuisine: ["Biryani", "Chinese", "North Indian" ],
            averageCost: 200,
            isPro: true,
            isOFF: true,
            OFF:80,
            durationOfdelivery: 47,
            RestaurantReviewValue: 4.1,

        },
        {
            _id: "2" ,
            photos: [ "https://b.zmtcdn.com/data/pictures/chains/8/18699328/da98167debc6a27ad8415e9f53bc7453_o2_featured_v2.jpg?output-format=webp",

            ],
            name:"Domino's Pizza",
            averageCost:250 ,
            cuisine: [ "Pizza", "Fast Food"],
            isPro: false,
            isOFF: false,
            durationOfdelivery: 30,
            RestaurantReviewValue: 4.3,
        },
        {
            _id: "3",
            photos: ["https://b.zmtcdn.com/data/pictures/5/18698755/c4babcfdcfc8c03fccdc06785541ece6_o2_featured_v2.jpg?output-format=webp", 

            ],
            name:"Dollops" ,
            averageCost: 300 ,
            cuisine: [ "North Indian", "Chinese", "Mangalorean", "Biryani", "Pizza"],
            isPro: false,
            isOFF: true,
            OFF: 75,
            durationOfdelivery: 47,
            RestaurantReviewValue: 4.5,
        },




    ]);
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
