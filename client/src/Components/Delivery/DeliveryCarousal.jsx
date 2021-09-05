import React from 'react';
import Slider from "react-slick";
import { NextArrow, PrevArrow } from '../CarousalArrow';

//components
import DeliveryCategory from './DeliveryCategory';



const DeliveryCarousal = () => {

   

    const categories =  [
    {
        image:"https://b.zmtcdn.com/data/pictures/0/18700550/9664c716252a45f7ab63649c0c345c64_o2_featured_v2.jpg?output-format=webp",
        title: "Biryani idk which",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/18699709/48f4c7e62dbcdfc7ff5f3272878c8717_o2_featured_v2.jpg?output-format=webp",
        title: "Chikken Tikka/Tandoor",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/7/18699707/ea43cf92e183466122a217b639d844f9_o2_featured_v2.jpg?output-format=webp",
        title: "Sasta Burgernp",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/19336209/d32a4759ef89957f555c8453dd8fc49b_o2_featured_v2.jpg?output-format=webp",
        title: "idiot sandwich",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/0/18700460/cb750a4f8992447105d731a3cfe3cdff_o2_featured_v2.jpg?output-format=webp",
        title: "chicken curry i guess",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/5/18700235/9fb9a008799d2e1b472324cb828fc4aa_o2_featured_v2.jpg?output-format=webp",
        title: "masala ofcourse",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/2/18699452/1251fb8bbdaba91d7234f0b238ffc97b_o2_featured_v2.jpg",
        title: "stupid burger",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/18812329/20490f8d3a228ec64c5547e00c03b404_o2_featured_v2.jpg",
        title: "diabeties",
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/3/18811773/ebf6416b30140663830fdfb3051a6225_o2_featured_v2.jpg",
        title: "bangude",
    },
    
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
        <>
            <h1 className="text-xl font-semibold mb-4">Inspiration for your First order</h1>
            <div className=" lg:hidden flex flex-wrap gap-3 lg:gap-0 justify-between"> 
            {
                categories.map((food) => 
                (<DeliveryCategory  {...food}  />
                    ))}
           
            </div>

            <div className="hidden lg:block">
                    <Slider {...settings}>
                    {
                categories.map((food) => 
                (<DeliveryCategory  {...food}  />
                    ))}
           

                    </Slider>
            </div>
        </>
    )
};

export default DeliveryCarousal;
