import React from 'react';



//navbar component
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";

//image Grid
import ImageGrid from '../Components/restaurant/ImageGrid';

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
           </div>
        </>
    )
}

export default RestaurantLayout;
