import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import Img from "../assets/authImage.png"


const AuthLayout = () => {
    return (
        <div className='w-full mx-auto pl-20 bg-white'>

            <div className="flex h-screen ">
                <div className="flex-1  pt-10  ">
                    <Logo></Logo>
                    <Outlet></Outlet>
                </div>
                <div className="hidden md:flex flex-1 items-center justify-center bg-[#FAFDF0]">
                    <img src={Img} alt="Illustration" className=" mx-auto max-w-sm w-full" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;