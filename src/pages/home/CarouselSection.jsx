
import React from 'react'
import { Navigation, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = ({ slides = [] }) => {
  return (
    <React.Fragment>
      <Swiper slidesPerView={1} modules={[Parallax, Pagination, Navigation]} navigation={true} className='w-full h-full bg-[#FFFFFF]'>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[700px] overflow-hidden rounded-3xl">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-(--opacity-blue-60)' : 'bg-(--opacity-soft-pink-50)'}`}></div>

              <div className="relative z-10 p-10 text-white">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default CarouselSection