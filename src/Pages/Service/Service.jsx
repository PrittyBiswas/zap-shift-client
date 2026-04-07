import React from "react";
import { FaBoxOpen, FaHouseUser } from "react-icons/fa";
import { FaBoxArchive, FaEarthAmericas, FaHouseCrack, FaMagnifyingGlassLocation, FaMapLocationDot, FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Service = () => {
    return (
        <div className='p-10 my-10 rounded-2xl bg-white '>

            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Zap Shift provides fast, secure, and reliable parcel delivery services
                    across the country with real-time tracking and transparent pricing.
                </p>
            </div>

            {/* Features */}
            <div className="pt-10">
                <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-6">

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <FaBoxOpen />
                            Parcel Booking
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Easily book parcels with automated pricing calculation.
                        </p>
                    </div>

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <FaMapLocationDot />
                            Real-time Tracking
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Track your parcel status live from pickup to delivery.
                        </p>
                    </div>

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <MdOutlineSecurity />
                            Secure Delivery
                        </h3>
                        <p className="text-gray-600 mt-2">
                            OTP-based delivery confirmation ensures security.
                        </p>
                    </div>

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <FaMagnifyingGlassLocation />
                            Role-based System
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Dedicated dashboards for Users, Admins, and Riders.
                        </p>
                    </div>

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <FaHouseCrack />
                            Warehouse Support
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Efficient parcel handling with warehouse management.
                        </p>
                    </div>

                    <div className="p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl">
                        <h3 className="flex items-center  gap-2 font-bold text-lg">
                            <FaEarthAmericas />
                            Nationwide Delivery
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Deliver parcels across all 64 districts.
                        </p>
                    </div>

                </div>
            </div>

            {/* Pricing Section */}
            <div className="pt-15 pb-15 bg-gray-100 mt-10 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Pricing Structure
                </h2>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full border text-center">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">Parcel Type</th>
                                <th className="p-3 border">Weight</th>
                                <th className="p-3 border">Within City</th>
                                <th className="p-3 border">Outside City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border">Document</td>
                                <td className="p-3 border">Any</td>
                                <td className="p-3 border">৳60</td>
                                <td className="p-3 border">৳80</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Non-Document</td>
                                <td className="p-3 border">Up to 3kg</td>
                                <td className="p-3 border">৳110</td>
                                <td className="p-3 border">৳150</td>
                            </tr>
                            <tr>
                                <td className="p-3 border">Non-Document</td>
                                <td className="p-3 border">&gt; 3kg</td>
                                <td className="p-3 border">+৳40/kg</td>
                                <td className="p-3 border">+৳40/kg + ৳40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Workflow */}
            <div className="pt-10 pb-15">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Delivery Workflow
                </h2>

                <div className="grid md:grid-cols-4 pt-2 gap-4 text-center">
                    <button className="btn font-bold hover:bg-primary p-6.5 shadow rounded-xl"> <FaBoxArchive /> Order Placed</button>
                    <button className="btn font-bold hover:bg-primary p-6.5 shadow rounded-xl"><FaMapLocationDot /> Pickup</button>
                    <button className="btn font-bold hover:bg-primary p-6.5 shadow rounded-xl"><FaHouseUser /> Warehouse</button>
                    <button className="btn font-bold hover:bg-primary p-6.5 shadow rounded-xl"> <FaPeopleCarryBox /> Delivered</button>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-black text-white p-10 rounded-2xl">
                <h2 className="text-2xl font-bold mb-3">
                    Ready to Send Your Parcel?
                </h2>
                <p className="mb-5">
                    Experience fast and secure delivery with Zap Shift.
                </p>
                <button className="btn hover:bg-primary bg-white text-black px-6 py-2 rounded-full font-semibold">
                    Book Now
                </button>
            </div>

        </div>
    );
};

export default Service;