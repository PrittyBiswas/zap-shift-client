import React from "react";
import servicesimg from '../../../assets/service.png';


const services = [
    {
        title: "Express & Standard Delivery",
        desc: `We deliver parcels within 24–72 hours in Dhaka,
Chittagong, Sylhet, Khulna, and Rajshahi.
Express delivery available in Dhaka within 4–6 hours
from pick-up to drop-off.`,
    },
    {
        title: "Nationwide Delivery",
        desc: `We deliver parcels nationwide with home delivery
in every district, ensuring your products reach
customers within 48–72 hours.`,
        highlight: true,
    },
    {
        title: "Fulfillment Solution",
        desc: `We also offer customized service with inventory
management support, online order processing,
packaging, and after sales support.`,
    },
    {
        title: "Cash on Home Delivery",
        desc: `100% cash on delivery anywhere in Bangladesh
with guaranteed safety of your product.`,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        desc: `Customized corporate services which includes
warehouse and inventory management support.`,
    },
    {
        title: "Parcel Return",
        desc: `Through our reverse logistics facility we allow end
customers to return or exchange their products
with online business merchants.`,
    },
];

const OurServices = () => {
    return (
        <section className="py-16 bg-[#063D3B] rounded-3xl max-w-7xl mx-auto px-6 my-10">

            {/* Heading */}
            <h2 className="text-center text-white text-3xl font-bold">
                Our Services
            </h2>

            <p className="text-center text-gray-200 max-w-2xl mx-auto mt-2 text-sm leading-relaxed">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal packages to business shipments — we deliver on time, every time.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className={`p-6 rounded-2xl shadow-md text-center transition
              ${s.highlight ? "bg-primary" : "bg-white"}`}
                    >
                        <div className="flex justify-center mb-4">
                            <img src={servicesimg} alt="" className="w-14 h-14" />
                        </div>

                        <h3 className="font-semibold text-lg text-gray-900 mb-3">
                            {s.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default OurServices;
