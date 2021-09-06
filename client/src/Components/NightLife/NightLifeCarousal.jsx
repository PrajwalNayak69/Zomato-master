
import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CarousalArrow';

//componrnts
import PictureCarousalCard from '../PictureCarousal';

const NightLifeCarousal = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div className="w-full">
            {
                <Slider {...settings}>

                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />
                    <PictureCarousalCard />

                </Slider>
            }
        </div>
    )
}

export default NightLifeCarousal;
