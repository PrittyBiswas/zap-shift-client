import React from 'react';

const About = () => {
    return (
        <div className='p-10 my-10 rounded-2xl bg-white '>

            <div className="">
                <h1 className='font-bold text-4xl pb-5 '>About Us</h1>
                <p className='text-gray-500'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="">
                <div className='flex gap-4 font-bold text-xl mb-5'>
                    <ul className=' space-y-2 mt-5 text-lg flex gap-5'>
                        <li> Story</li>
                        <li>Mission</li>
                        <li>Success</li>
                        <li>Team & Others</li>
                    </ul>
                </div>
                <div className=" text-gray-500">
                    <p className='mb-4'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className='mb-4'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className='mb-4'>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;