import React from 'react';

import RestaurantInfo from '../Components/restaurant/RestaurantInfo';

//navbar component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";

//image Grid
import ImageGrid from '../Components/restaurant/ImageGrid';

//infobuttons
import InfoButtons from '../Components/restaurant/InfoButtons';

//Tabs
import TabContainer from '../Components/restaurant/Tabs';


import {TiStarFullOutline} from "react-icons/ti";
import {RiDirectionFill, RiShareForwardFill} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi"

const RestaurantLayout = () => {
    return (
        <>
        {" "}
            <RestaurantNavbar />
           <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid images={["https://b.zmtcdn.com/data/pictures/4/18698854/21b575f0e0e6a81918e19204e9df1f3f.jpg",
                                "https://b.zmtcdn.com/data/pictures/4/18698854/5d6628fa88cf8a5407088a597fcbf9a0.jpg",
                                "https://b.zmtcdn.com/data/pictures/4/18698854/31bf37d8173e929ad8a35dd8013f0c49.jpg",
                                "https://b.zmtcdn.com/data/pictures/4/18698854/a5b44a0b182766f3b2255465a65cea82.jpg",
                                "https://b.zmtcdn.com/data/reviews_photos/98e/625cade6bfb1e522cf3c87f1a608398e_1544953393.jpg",
                                ]}/>
                
                    <RestaurantInfo 
                    name="Sai's" 
                    restaurantRating="3.5" 
                    deliveryRating="4" 
                    cuisine="Biryani, North Indian, Chinese, Seafood, Desserts" 
                    address="Eshwar Nagar, Manipal" />

                    <div className="my-4 flex flex-wrap gap-3">
                        <InfoButtons isActive>
                            <TiStarFullOutline /> Add Review
                            </InfoButtons>
                            <InfoButtons>
                            <RiDirectionFill /> Directions
                            </InfoButtons>
                            <InfoButtons>
                            <BiBookmarkPlus /> BookMarks
                            </InfoButtons>
                            <InfoButtons>
                            <RiShareForwardFill /> Share
                            </InfoButtons>
                        </div>
                        <TabContainer />
           </div>
        </>
    )
}

export default RestaurantLayout;
