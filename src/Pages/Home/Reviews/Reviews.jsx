import React, { use } from 'react';
import Customer from '../../../assets/customer-top.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Card from './Card';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <div className='  my-20 '>
            <div className="text-center mb-5">
                <img
                    src={Customer}
                    alt=""
                    className="my-6 mx-auto"
                />

                <h3 className="font-bold text-3xl mb-3 text-gray-900">
                    What our customers are saying
                </h3>

                <p className="my-6 ">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </p>
            </div>

            <div className="reviews-data ">

                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        scale: 0.75,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination,Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map(reviews =>
                            <SwiperSlide key={reviews.id}>
                                <Card reviews={reviews} ></Card>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>

        </div>
    );
};

export default Reviews;