import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Amazon from "../../../assets/brands/amazon.png";
import AmazonVector from "../../../assets/brands/amazon_vector.png";
import Casio from "../../../assets/brands/casio.png";
import Moonstar from "../../../assets/brands/moonstar.png";
import Randstand from "../../../assets/brands/randstad.png";
import StarPeople from "../../../assets/brands/start_people.png";
import Star from "../../../assets/brands/star.png";

const brandLogos = [Amazon, Casio, Moonstar, Randstand, StarPeople, AmazonVector, Star];

const Brands = () => {
    return (
        <div className="mt-10 mb-10 ">


            <h3 className=" text-center font-semibold text-lg mb-6 text-gray-900">
                We've helped thousands of sales teams
            </h3>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img src={logo} alt="Brand Logo" className="h-5 object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
