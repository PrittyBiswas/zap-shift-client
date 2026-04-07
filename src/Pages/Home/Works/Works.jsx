import React from "react";
import bookingIcon from '../../../assets/bookingIcon.png';

const steps = [
    {
        title: "Booking Pick & Drop",
        desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        title: "Cash On Delivery",
        desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        title: "Delivery Hub",
        desc: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
        title: "Booking SME & Corporate",
        desc: "From personal packages to business shipments — we deliver on time, every time."
    },
];

const Works = () => {
    return (
        <section className="py-16 rounded-3xl text-left">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold mb-10 text-left">How it Works</h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-left"
                        >
                            {/* Icon */}
                            <div className="mb-4 text-primary text-left">
                                <img src={bookingIcon} alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-lg mb-3 text-gray-900 text-left">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-secondary text-sm leading-relaxed text-left">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Works;
