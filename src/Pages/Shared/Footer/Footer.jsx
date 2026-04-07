import React from 'react';

import { FaFacebook, FaLinkedin, } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import Logo from '../../../components/Logo/Logo';


const Footer = () => {
    return (

        <footer className="bg-neutral text-white p-10 rounded-2xl my-10 w-full flex flex-col items-center gap-10">

            {/* Logo + Description */}
            <aside className="flex flex-col items-center text-center max-w-2xl px-3">
                <Logo />

                <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </aside>

            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-6 
                    py-5 border-y-2 border-dashed border-gray-400 w-full max-w-xl text-sm md:text-base">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>

            {/* Social Icons */}
            <div className="flex flex-col items-center px-3">
                <div className="flex gap-6 text-2xl md:text-3xl pb-4">
                    <FaLinkedin />
                    <FaSquareXTwitter />
                    <FaFacebook />
                    <IoLogoYoutube />
                </div>

                <p className="text-gray-400 text-sm md:text-base">
                    Copyright © {new Date().getFullYear()} — All rights reserved by <i>Pritty</i>
                </p>
            </div>

        </footer>


    );
};

export default Footer;