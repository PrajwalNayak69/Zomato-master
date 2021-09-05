import React from 'react';

import Slider from "react-slick";

//components
import { NextArrow, PrevArrow } from '../CarousalArrow';

const Brand = (props) => {
const logos = [
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/759px-Burger_King_logo_%281999%29.svg.png"
    },
    {
        image:"https://www.logotaglines.com/wp-content/uploads/2019/06/KFC-Logo-Tagline.jpg"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Subway_restaurant.svg/1200px-Subway_restaurant.svg.png"
    },
    {
        image:"https://lh3.googleusercontent.com/proxy/75OlOCnY_byfzLq5Kl4Pw8yTv_5KSzoHeda8TH4Kj8SauQuvCqD7dfNl83YEOZZ4B1BU4tjRkfblOosPofXRh9NI8ydPICQhUfoGYF8OBCjDEUIkaD6gUGQ93mvIUimUlDWvP70BsDCnVlbPXW5U"
    },
    {
        image:"https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-Logo-1999.jpg"
    },
    {
        image:"https://pbs.twimg.com/profile_images/378800000855766973/287b770f3b78314b0579db03399170a5.jpeg"
    },
    
]

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll:1,
                    infinte: true,
                },
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll:1,
                    infinte: true,
                },
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinte: true,
                },
            },
        ]
      };


    return (
        <>

            <Slider {...settings}>
                {
                    logos.map((logo) => (
                        <div className="w-24 h-24 mb-13">
                        <img src={logo.image}
                        alt="brand"
                        className="w-full h-full object-stretch" />
                    </div>
                    ))
                }

            </Slider>
        </>
    )
}

export default Brand
