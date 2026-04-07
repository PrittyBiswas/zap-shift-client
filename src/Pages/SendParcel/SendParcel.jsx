import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        reset,
        control,
        // formState: { errors },
    } = useForm();


    const axiosSecure = useAxiosSecure();

    const servicesCenter = useLoaderData();

    // Unique regions
    const regions = [...new Set(servicesCenter.map(c => c.region))];

    // Get districts by region
    const getDistricts = (region) => {
        if (!region) return [];
        return [
            ...new Set(
                servicesCenter
                    .filter(c => c.region === region)
                    .map(c => c.district)
            ),
        ];
    };

    const senderRegion = useWatch({ control, name: "senderRegion" });
    const receiverRegion = useWatch({ control, name: "receiverRegion" });

    const [showToast, setShowToast] = useState(false);
    const [price, setPrice] = useState(0);

    const handleSendParcel = (data) => {
        const isSameDistrict =
            data.senderDistrict === data.receiverDistrict;

        const weight = parseFloat(data.parcelWeight);
        let cost = 0;

        if (data.parcelType === "Document") {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (weight <= 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const base = isSameDistrict ? 110 : 150;
                const extra = (weight - 3) * 40;
                cost = base + extra;
            }
        }
        console.log("Parcel Data:", cost, data);

        // alert button
        Swal.fire({
            title: "Place Confirm the Cost",
            text: "You will be charged",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post('/parcels', { data, cost })
                    .then(res => {
                        console.log('Parcel booked:', res.data);
                        if (res.data.insertedId) {
                            Swal.fire(
                                'Booked!',
                                'Your parcel has been booked.',
                                'success'
                            );
                        }

                    })
                    .catch(err => {
                        console.error('Error booking parcel:', err);
                        Swal.fire(
                            'Error!',
                            'There was an issue booking your parcel.',
                            'error'
                        );
                    });

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });



        setPrice(cost);
        setShowToast(true);
        reset();
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="p-10 my-10 rounded-2xl bg-white relative">
            {showToast && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow">
                        Parcel sent successfully! <br />
                        <b>Total Cost: ৳{price}</b>
                    </div>
                </div>
            )}

            <h1 className="font-bold text-4xl mb-6">Send Parcel</h1>

            <form onSubmit={handleSubmit(handleSendParcel)}>

                {/* Parcel Info */}
                <div className="mb-6">
                    <p className="font-semibold mb-2">Parcel Type</p>
                    <div className="flex gap-6">
                        <label>
                            <input type="radio" value="Document" {...register("parcelType", { required: true })} /> Document
                        </label>
                        <label>
                            <input type="radio" value="Non-Document" {...register("parcelType", { required: true })} /> Non-Document
                        </label>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <input
                            {...register("parcelName", { required: true })}
                            placeholder="Parcel Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="number"
                            {...register("parcelWeight", { required: true })}
                            placeholder="Weight (kg)"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Sender */}
                    <div className="p-6 shadow rounded-xl">
                        <h3 className="font-bold mb-4">Sender Details</h3>
                        <input {...register("senderName" , { required: true })} placeholder="Name" className="input input-bordered w-full mb-3" />
                        <input {...register("senderPhone",{ required: true })} placeholder="Phone" className="input input-bordered w-full mb-3" />

                        <select {...register("senderRegion",{ required: true })} className="select select-bordered w-full mb-3">
                            <option value="">Sender Region</option>
                            {regions.map(r => <option key={r}>{r}</option>)}
                        </select>

                        <select {...register("senderDistrict",{ required: true })} className="select select-bordered w-full">
                            <option value="">Sender District</option>
                            {getDistricts(senderRegion).map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Receiver */}
                    <div className="p-6 shadow rounded-xl">
                        <h3 className="font-bold mb-4">Receiver Details</h3>
                        <input {...register("senderName",{ required: true })} placeholder="Name" className="input input-bordered w-full mb-3" />
                        <input {...register("senderPhone",{ required: true })} placeholder="Phone" className="input input-bordered w-full mb-3" />

                        <select {...register("receiverRegion",{ required: true })} className="select select-bordered w-full mb-3">
                            <option value="">Receiver Region</option>
                            {regions.map(r => <option key={r}>{r}</option>)}
                        </select>

                        <select {...register("receiverDistrict",)} className="select select-bordered w-full">
                            <option value="">Receiver District</option>
                            {getDistricts(receiverRegion).map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>
                </div>

                <button className="btn bg-primary text-white mt-6 px-10">
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default SendParcel;
