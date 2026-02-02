import React from 'react';
import '../../App.css'
function Header() {
    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl px-8 py-4 flex justify-between items-center z-50">
            <div className="flex items-center bg-gray-100 p-3 h-full rounded-2xl">
                <ul className="flex list-none m-0 p-0 gap-8 items-center">
                    <li>
                        <a href="#services" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300 relative group">
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300 relative group">
                            Pricing
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#insights" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300 relative group">
                            Insights
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300 relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center">
                <ul className="flex list-none m-0 p-0 gap-8 items-center">
                    <li>
                        <a href="#login" className="text-gray-800 font-bold text-sm hover:text-gray-500 transition-colors duration-300">
                            Login
                        </a>
                    </li>
                    <li>
                        <button className="px-6 py-3 bg-gray-100 text-black rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300 shadow-lg shadow-gray-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-500/40 active:translate-y-0">
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;