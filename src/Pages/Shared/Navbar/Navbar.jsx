import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../Hooks/useAuth";
import { IoIosChatbubbles } from "react-icons/io";
import { RiRobot3Fill } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useAuth();


    const handleLogOut = () => {
        logOut().catch((error) => console.log(error));
    };

    // Active link styles
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "px-5 py-2 bg-primary rounded-xl font-bold text-center"
            : "hover:text-primary";

    const mobileNavLinkClass = ({ isActive }) =>
        isActive
            ? "px-5 py-2 bg-primary rounded-xl font-bold text-center"
            : "hover:text-primary";

    return (
        <div className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Logo */}
                <div className="flex items-center">
                    <Logo />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex font-bold items-center gap-8 text-secondary">
                    <li><NavLink to="/service" className={navLinkClass}>Services</NavLink></li>
                    <li><NavLink to="/coverage" className={navLinkClass}>Coverage</NavLink></li>
                    <li><NavLink to="/about-us" className={navLinkClass}>About Us</NavLink></li>
                    <li><NavLink to="/SendParcel" className={navLinkClass}>Send Parcel</NavLink></li>

                    {user && (
                        <li>
                            <NavLink to="/dashboard/my-parcels" className={navLinkClass}>
                                My Parcels
                            </NavLink>
                        </li>
                    )}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex font-bold items-center gap-4">
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="px-5 py-2 border rounded-xl text-secondary hover:bg-red-100"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-5 py-2 border rounded-xl text-secondary hover:bg-gray-100"
                        >
                            Sign In
                        </NavLink>
                    )}

                    <Link
                        to="/rider"
                        className="flex font-bold items-center gap-2 px-5 py-2 bg-primary rounded-xl"
                    >
                        Be a rider
                    </Link>
{/* 
                    <button
                        onClick={() => setOpen(true)}
                        className="flex items-center gap-2 px-1 py-1 bg-primary border-2 rounded-full text-black"
                    >
                        <RiRobot3Fill size={25}></RiRobot3Fill>
                    </button> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setOpen(true)}
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setOpen(false)}
                >
                    <X size={28} />
                </button>

                <ul className="flex flex-col gap-6 mt-10 text-secondary">
                    <NavLink to="/services" onClick={() => setOpen(false)} className={mobileNavLinkClass}>Services</NavLink>
                    <NavLink to="/coverage" onClick={() => setOpen(false)} className={mobileNavLinkClass}>Coverage</NavLink>
                    <NavLink to="/about-us" onClick={() => setOpen(false)} className={mobileNavLinkClass}>About Us</NavLink>
                    <NavLink to="/pricing" onClick={() => setOpen(false)} className={mobileNavLinkClass}>Pricing</NavLink>
                    <NavLink to="/be-a-rider" onClick={() => setOpen(false)} className={mobileNavLinkClass}>Be a Rider</NavLink>
                </ul>

                <div className="flex flex-col gap-3 mt-8">
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="px-5 py-2 border rounded-xl text-secondary hover:bg-red-100"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-5 py-2 border rounded-xl text-secondary hover:bg-gray-100"
                        >
                            Sign In
                        </NavLink>
                    )}

                    <Link
                        to="/rider"
                        className="px-5 py-2 bg-primary rounded-xl font-medium text-center"
                    >
                        Be a rider
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </div>
    );
};

export default Navbar;
