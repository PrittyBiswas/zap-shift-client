import React from 'react';
import location from "../../../assets/location-merchant.png"

const Satisfaction = () => {
    return (
        <div className="bg-[#03373D] flex flex-col md:flex-row items-center justify-between rounded-2xl p-10 mt-10 pl-20 pr-20 gap-10">


            <div className="flex flex-col  gap-5 max-w-xl">
                <h1 className="text-white font-bold text-3xl leading-snug">
                    Merchant and Customer Satisfaction is Our First Priority
                </h1>

                <p className="text-gray-300 text-base leading-relaxed">
                    We offer the lowest delivery charge with the highest value along with
                    100% safety of your product. ZapShift courier delivers your parcels
                    to every corner of Bangladesh right on time.
                </p>


                <div className="flex gap-4 mt-3">
                    <button className="bg-primary text-black px-6 py-3 rounded-lg  font-bold hover:opacity-90 transition">
                        Become a Merchant
                    </button>

                    <button className=" px-6 py-3 rounded-lg text-primary  font-bold hover:bg-primary hover:text-white border border-primary transition">
                        Earn with ZapShift Courier
                    </button>
                </div>
            </div>


            <div className="w-full md:w-auto flex justify-center">
                <img src={location} alt="Location Map" className="w-80 md:w-96 h-auto" />

            </div>
        </div>

    );
};

export default Satisfaction;