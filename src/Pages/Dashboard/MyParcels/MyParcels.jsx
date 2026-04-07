import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { MdOutlineDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {


    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();



    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })


    const handleParcelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed)

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Parcel has been deleted.",
                                icon: "success"
                            });
                        }
                    })

        });
    }

    return (
        <div className="p-6 bg-white">
            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 ">
                All Of My Parcels ({parcels.length})
            </h2>

            {/* Table Container */}
            <div className="overflow-x-auto  shadow-lg rounded-xl items-center ">

                <table className="table">
                    {/* head */}
                    <thead className="bg-base-400 text-base font-semibold">
                        <tr>
                            <th></th>
                            <th>Parcel Name</th>
                            <th>Cost</th>
                            <th>Type</th>
                            <th>Payment Status</th>
                            <th>Delivery Status</th>
                            <th>Action </th>
                        </tr>
                    </thead>

                    <tbody className='font-bold'>
                        {
                            parcels.map((parcel, index) => (
                                <tr key={parcel._id} className="hover">
                                    <th>{index + 1}</th>

                                    <td className="font-medium">
                                        {parcel.parcelName}
                                    </td>

                                    <td className="text-amber-600 font-semibold">
                                        ৳ {parcel.cost}
                                    </td>

                                    <td>
                                        <span className="">
                                            {parcel.parcelType}
                                        </span>
                                    </td>
                                    <td>

                                        {
                                            parcel.paymentStatus === 'paid' ?
                                                <span className='text-green-400'>
                                                    Paid
                                                </span> :
                                                <Link to={`/dashboard/payment/${parcel._id}`}>
                                                    <button className='btn btn-primary text-black font-bold'>
                                                        Pay
                                                    </button>
                                                </Link>
                                        }

                                    </td>

                                    <td>
                                        <span className="">
                                            {parcel.deliveryStatus}
                                        </span>
                                    </td>

                                    <td>
                                        <span className="flex items-center gap-2">
                                            <button className="btn btn-square hover:bg-warning">
                                                <FaPencil />
                                            </button>
                                            <button onClick={() => handleParcelDelete(parcel._id)}
                                                className="btn btn-square hover:bg-red-600">
                                                <MdOutlineDeleteForever />
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;