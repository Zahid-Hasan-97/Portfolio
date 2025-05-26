import React from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = ({ darkMode, setDarkMode, setShowEducation }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="max-w-screen-xl mx-auto sticky top-0 z-50 lg:px-16 px-4 flex items-center py-4  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out   justify-center gap-2 align-baseline p-3.5 rounded-xl">
            <div className="flex-1 flex justify-between items-center">
                <img className='w-[59px] animate-' src="https://i.ibb.co.com/RpkGdM6c/Untitled-design.png" alt="" />
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
                        <li><a className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c]" href="#home">Home</a></li>
                        <li><a className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c]" href="#aboutMe">About Me</a></li>
                        {/* <li><button
                            onClick={() => {
                                setShowEducation(true);
                                setTimeout(() => {
                                    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c]"
                        >
                            Education
                        </button></li> */}
                        <li><a className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c]" href="#skill&Edu">Skills & Edu</a></li>
                        <li><a className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c]" href="#projects">Projects</a></li>
                        <li><a className="md:p-4 py-3 px-0 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c] md:mb-0 mb-2" href="#contact">Contact</a></li>
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
