import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        
<footer className=" basic w-full shadow bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://i.ibb.co/GCCPDRF/lll-1.png" className="w-16 h-18 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Service Delivery</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-400">
                <li >
                    <Link className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link  className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                
                <li>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-300 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">© 2020 <Link href="https://flowbite.com/" className="hover:underline">Zahan`s Service™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    );
};

export default Footer;