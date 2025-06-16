import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='footer' className="text-center  py-20">

            <img data-aos='fade-right' className='mx-auto w-[59px] font-bold filter dark:invert' src="https://i.ibb.co/B20J0cRf/Name-Logo.png" alt="Logo" />

            <a href="#" data-aos='fade-left' className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-[#C4CFDE]">
                <img src="" className="h-12 mr-3 sm:h-9" alt="" />
                Zahid Hasan
            </a>

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="#aboutMe">About</a>
                <a className="hover:text-gray-900" href="#">Resume</a>
                <a className="hover:text-gray-900" href="#contact">Contact</a>
            </nav>


            <ul className="flex justify-center mt-5 space-x-5 pb-5 gap-5">
                <li>
                    <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/" className="text-gray-500 hover:text-gray-900">
                        <FaLinkedin className='text-2xl'></FaLinkedin>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Zahid-Hasan-97" className="text-gray-500 hover:text-gray-900"><FaGithub className='text-2xl'></FaGithub></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/zahid.hasan2797/" className="text-gray-500 hover:text-gray-900">
                        <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                </li>
            </ul>


            <span className="block text-sm text-center text-gray-500">© 2025 Zahid Hasan. All Rights Reserved.
            </span>
        </div>
    );
};

export default Footer;