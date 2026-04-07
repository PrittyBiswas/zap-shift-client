import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Payment = () => {

    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        enabled: !!parcelId, // ✅ important
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId}`); // ✅ FIXED
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <div className="text-center mt-10">
                <span className='loading loading-infinity loading-xl'></span>
            </div>
        );
    }

    if (!parcel) {
        return <p className="text-center mt-10 text-red-500">Parcel not found</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
                Please Pay for: {parcel.parcelName}
            </h2>

            <button className='btn btn-primary text-black'>
                Pay
            </button>
        </div>
    );
};

export default Payment;