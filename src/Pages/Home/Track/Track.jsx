import React from "react";
import LiveTrack from "../../../assets/live-tracking.png";
import SafeDelivery from "../../../assets/safe-delivery.png";


const Track = () => {
    return (
        <div className="flex flex-col pt-10 pb-10 gap-6 items-start border-t-2 border-b-2 border-dashed border-gray-400">

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-stretch gap-6">

                <img src={LiveTrack} alt="Live Tracking" className="w-32 h-auto " />


                <div className="border-l border-dashed border-gray-400 pl-5 w-full">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">
                        Live Parcel Tracking
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        Stay updated in real-time with our live parcel tracking feature. From
                        pick-up to delivery, monitor your shipment's journey and get instant
                        status updates for complete peace of mind.
                    </p>
                </div>
            </div>


            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-stretch gap-6">

                <img src={SafeDelivery} alt="Live Tracking" className="w-32 h-auto " />


                <div className="border-l border-dashed border-gray-400 pl-5 w-full">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">
                        100% Safe Delivery
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                    </p>
                </div>
            </div>


            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex items-stretch gap-6">

                <img src={SafeDelivery} alt="Live Tracking" className="w-32 h-auto " />

                <div className="border-l border-dashed border-gray-400 pl-5 w-full flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">
                        24/7 Call Center Support
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed">
                        Our dedicated support team is available around the clock to assist you
                        with any questions, updates, or delivery <br /> concerns—anytime you need us
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Track;
