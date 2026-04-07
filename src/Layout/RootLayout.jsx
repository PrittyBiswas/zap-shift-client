import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Chatbot from "../Pages/ChatBot/Chatbot";

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <Navbar />

            <Outlet />

            <Footer />

            {/* 🔥 GLOBAL CHATBOT */}
            <Chatbot />

        </div>
    );
};

export default RootLayout;