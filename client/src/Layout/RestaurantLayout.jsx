import React, {useState} from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import { BiBookmarkPlus } from 'react-icons/bi';


//components
import RestaurantNavbar from "../Components/Navbar/RestaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButtons';
import TabConatiner from '../Components/restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

//redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';
import { getImage } from '../Redux/Reducer/Image/Image.action';
import { getCart } from '../Redux/Reducer/Cart/Cart.action';

const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        cuising: "",
        address: "",
      });    

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSpecificRestaurant(id)).then((data) => {
        setRestaurant((prev) => ({
          ...prev,
          ...data.payload.restaurant,
        }));
  
        dispatch(getImage(data.payload?.restaurant?.photos)).then((data) =>
          setRestaurant((prev) => ({ ...prev, ...data.payload?.image }))
          
          );
        
      });
  
      dispatch(getCart());
    
  }, []);


    return (
        <>
        <RestaurantNavbar/>
        <div className="container mx-auto px-4 lg:px-20 pb-16">
        <ImageGrid images={restaurant.images} />
            <RestaurantInfo 
            name={restaurant?.name}
            restaurantRating={restaurant?.rating || 0}
            deliveryRating={restaurant?.rating || 0}
            cuisine={restaurant?.cuising}
            address={restaurant?.address}  
            />
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive> 
                    <TiStarOutline/> Add Review 
                </InfoButtons>
                <InfoButtons > 
                    <RiDirectionLine/> Direction
                </InfoButtons>
                <InfoButtons > 
                    <BiBookmarkPlus/> Bookmark
                </InfoButtons>
                <InfoButtons > 
                    <RiShareForwardLine/> Share
                </InfoButtons>
            </div>
            <div className="my-10">
            <TabConatiner>
                
            </TabConatiner>
            </div>
            <div className="relative">
            {props.children}
            </div>
        </div>
        <CartContainer/>
        </>
    )
};

export default RestaurantLayout;