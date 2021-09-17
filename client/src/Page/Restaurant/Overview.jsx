import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {IoMdArrowDropright} from "react-icons/io";
import ReactStars from "react-rating-stars-component";


//component

import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuRestaurantSimilarCard from '../../Components/restaurant/MenuRestaurantSimilarCard';
import Reviewcard from '../../Components/restaurant/reviews/reviewcard';
import MapView from '../../Components/restaurant/MapView';


//slider carousal
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

const Overview = () => {
    const {id} = useParams();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
      

    return (
        <>
           <div className="flex flex-col md:flex-row relative">
               <div className="w-full md:w-8/12">
                   <h2 className="font-semibold text-lg md:text-xl my-4 ">About this place</h2>
                   <div className="flex justify-between items-center">
                       <h4 className="text-lg font-medium">Menu</h4>
                       <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright /></span>
                       </Link>
                           </div>
                       <div className="flex flex-wrap gap-3">
                           <MenuCollection menutitle="menu" pages="3" image ="https://b.zmtcdn.com/data/menus/854/18698854/e9ee84cccb3208b9d4b032f4d5e7c879.jpg"
                           /> 
                   </div>
                   <h4 className="text-lg font-medium">Cuisine</h4>
                   <div className="flex flex-wrap gap-2 ">
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Biryani</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">North Indian</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Seafood</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Chinese</span>
                       <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">Desert</span>
                   </div>
               <div className="my-4">
               <h4 className="text-lg font-medium">Average Cost</h4>
               <h4>₹500 for two people (approx.)</h4>
               <small className="text-gray-500">Exclusive of applicable taxes and charges, if any

                How do we calculate cost for two?

                </small>
               </div>
               <div className="my-4">
               <h4 className="text-lg font-medium">Similar Restaurants</h4>
               <Slider {...settings}>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                <MenuRestaurantSimilarCard image="https://b.zmtcdn.com/data/pictures/chains/4/18698614/f325f5c3e4761fc65ae04435f70c816c_featured_v2.jpg" title="McDonald's"/>
                </Slider>
               </div>
               <div className="">
               <h4 className="text-lg font-medium">
                   Rate your experience for</h4>
                   <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />,
               
               </div>
               <div className="my-4 md:hidden flex-col gap-4 w-full">
               <MapView title="sai's" phone="+918202570177" maplocation={[13.350726986617875, 74.7868899618099]} address="Opposite Syndicate Bank Head Office, Tiger Circle, Manipal, Eshwar Nagar, Manipal"/>
               </div>
                <div className="my-4 flex flex-col gap-4">
                <Reviewcard />
                <Reviewcard />
                <Reviewcard />
                <Reviewcard />
                </div>
               </div>
               
               <aside 
               style={{ height: "fit-content "}}
               className="hidden  md:flex md:w-2/5 sticky bg-white p-3 top-2 shadow-md rounded-xl  flex-col gap-4" >
                    <MapView title="sai's" phone="+918202570177" maplocation={[13.350726986617875, 74.7868899618099]} address="Opposite Syndicate Bank Head Office, Tiger Circle, Manipal, Eshwar Nagar, Manipal"/>
               </aside>
               </div> 
        </>
    );
};

export default Overview;
