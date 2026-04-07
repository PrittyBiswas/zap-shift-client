import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from '../../../assets/banner/banner1.png';
import Banner2 from '../../../assets/banner/banner2.png';
import Banner3 from '../../../assets/banner/banner3.png';
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} >
            <div className="relative py-10 ">
                <img src={Banner1} className="w-full pb-7 bg-primary rounded-3xl" />
                {/* Banner-Text */}
                <div className="absolute bottom-20 left-10 banner-text max-w-xl">
                    <p className="text-secondary ">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    <div className="flex items-center font-bold gap-4 mt-4">
                        <button className="flex items-center gap-2 px-5 py-2 bg-primary border cursor-pointer hover:bg-gray-100 rounded-xl font-bold">
                            Track Your Parcel
                        </button>

                        <div className="w-10 h-10 rounded-full bg-black flex items-center cursor-pointer justify-center text-primary">
                            <ArrowUpRight size={20} />
                        </div>

                        <button className="px-5 py-2 border rounded-xl text-secondary cursor-pointer hover:bg-gray-300 font-bold">
                            Be a rider
                        </button>
                    </div>
                </div>
            </div>


            <div className="relative py-10 ">
                <img src={Banner2} className="w-full pb-7 bg-primary rounded-3xl" />
                {/* Banner-Text */}
                <div className="absolute bottom-20 left-10 banner-text max-w-xl">
                    <p className="text-secondary ">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    <div className="flex items-center font-bold gap-4 mt-4">
                        <button className="flex items-center gap-2 px-5 py-2 bg-primary border cursor-pointer hover:bg-gray-100 rounded-xl font-bold">
                            Track Your Parcel
                        </button>

                        <div className="w-10 h-10 rounded-full bg-black flex items-center cursor-pointer justify-center text-primary">
                            <ArrowUpRight size={20} />
                        </div>

                        <button className="px-5 py-2 border rounded-xl text-secondary cursor-pointer hover:bg-gray-300 font-bold">
                            Be a rider
                        </button>
                    </div>
                </div>
            </div>



            <div className="relative py-10 ">
                <img src={Banner2} className="w-full pb-7 bg-primary rounded-3xl" />
                {/* Banner-Text */}
                <div className="absolute bottom-20 left-10 banner-text max-w-xl">
                    <p className="text-secondary ">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    <div className="flex items-center font-bold gap-4 mt-4">
                        <button className="flex items-center gap-2 px-5 py-2 bg-primary border cursor-pointer hover:bg-gray-100 rounded-xl font-bold">
                            Track Your Parcel
                        </button>

                        <div className="w-10 h-10 rounded-full bg-black flex items-center cursor-pointer justify-center text-primary">
                            <ArrowUpRight size={20} />
                        </div>

                        <button className="px-5 py-2 border rounded-xl text-secondary cursor-pointer hover:bg-gray-300 font-bold">
                            Be a rider
                        </button>
                    </div>
                </div>
            </div>


        </Carousel>
    );
};

export default Banner;