import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "../../styles/carousel.css"

const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
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
