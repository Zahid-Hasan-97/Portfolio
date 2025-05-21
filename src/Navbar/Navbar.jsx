import React from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="sticky top-0 z-50 lg:px-16 px-4 flex items-center py-4  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out   justify-center gap-2 align-baseline p-3.5">
            <div className="flex-1 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Zahid Hasan</h1>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
                        <li><a className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500" href="#home">Home</a></li>
                        <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#aboutMe">About Me</a></li>
                        <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#education">Education</a></li>
                        <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#skill">Skills</a></li>
                        <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#projects">Projects</a></li>
                        <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <label className="toggle text-base-content ml-4 cursor-pointer">
                    <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                    {darkMode ? (
                        <IoMoonOutline></IoMoonOutline>
                    ) : (
                        <IoSunnyOutline></IoSunnyOutline>
                    )}
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
