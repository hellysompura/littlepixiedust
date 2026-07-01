import React from "react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = ({ slides = [] }) => {
  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        navigation={true}
        autoplay={true}
        pauseOnMouseEnter={false}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-175 overflow-hidden rounded-3xl">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className={`absolute inset-0 ${index % 2 === 0 ? "bg-(--opacity-blue-60)" : "bg-(--opacity-soft-pink-50)"}`}
              ></div>

              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10 p-10 text-white">
                <h2 className="text-6xl font-bold">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>

                <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-(--opacity-mauve-30) transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default CarouselSection;
