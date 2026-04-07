import React from 'react';
import RideImg from "../../assets/agent-pending.png"

const Rider = () => {
    return (
        <div className="p-20 my-10 rounded-2xl bg-white ">
            <div className="">
                <h1 className='font-bold text-4xl pb-5 '>Be a Rider Page</h1>
                <p className=''>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="rider-page flex mt-10 gap-10 md:flex-row flex-col">
                <div className="rider-left flex-1 flex-col md:flex-row gap-10">

                    <div className=" mt-5">
                        <h2 className='font-bold text-2xl'>Tell us about yourself</h2>
                        <form className='mt-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className="label">Full Name</label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">Your Age</label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">Email Address</label>
                                    <input type="email" className="input input-bordered w-full" />
                                </div>

                                <div>
                                    <label className="label">City</label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">NID Number</label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">Phone Number</label>
                                    <input type="text" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <label className="label mt-5">Which wire-house you want to work?</label>
                        <input type="text" className="input input-bordered w-full" />
                        <button className="btn bg-primary text-white px-10 w-full mt-5">
                            Submit
                        </button>
                    </div>


                </div>
                <div className="rider-right ml-10">
                    <img src={RideImg} alt="Rider" />
                </div>
            </div>


        </div>
    );
};

export default Rider;