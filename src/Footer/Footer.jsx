import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div class="text-center">
            <a href="#" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
                <img src="" class="h-12 mr-3 sm:h-9" alt="" />
                Zahid Hasan
            </a>

            <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a class="hover:text-gray-900" href="#">About</a>
                <a class="hover:text-gray-900" href="#">Resume</a>
                <a class="hover:text-gray-900" href="#">Contact</a>
            </nav>


            <ul class="flex justify-center mt-5 space-x-5 pb-5 gap-5">
                <li>
                    <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/" class="text-gray-500 hover:text-gray-900">
                        <FaLinkedin className='text-2xl'></FaLinkedin>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Zahid-Hasan-97" class="text-gray-500 hover:text-gray-900"><FaGithub className='text-2xl'></FaGithub></a>
                </li>

                <li>
                    <a href="https://www.facebook.com/zahid.hasan2797/" class="text-gray-500 hover:text-gray-900">
                        <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                </li>
            </ul>


            <span class="block text-sm text-center text-gray-500">© 2025 Zahid Hasan. All Rights Reserved.
            </span>
        </div>
    );
};

export default Footer;