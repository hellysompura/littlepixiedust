import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../../styles/carousel.css"

const settings = {
    customPaging: function (i) {
        return (
            <div className='customarrow'>
               
            </div>
        )
    },
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
};

export default function Carousel({ images }) {
    return (
        <div>
            <Slider {...settings}>
                {images?.map((img, i) => (
                    <div key={i}>
                        <img
                            src={img}
                            alt={`slide-${i}`}
                            className='carousel-img'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
