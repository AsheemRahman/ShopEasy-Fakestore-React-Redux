import { useNavigate } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    ShopEasy
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-gray-200 transition">Home</a>
                    <a href="/" className="text-white hover:text-gray-200 transition">Products</a>
                    <a href="/" className="text-white hover:text-gray-200 transition">About</a>
                    <a href="/" className="text-white hover:text-gray-200 transition">Contact</a>
                </div>

                <div className="hidden md:flex space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
                        Login
                    </button>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition">
                        Sign Up
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-white text-2xl">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
