import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navLinkClass = `md:p-4 py-3 block text-[#3C3E41] hover:text-blue-500 dark:text-[#95989c] box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] rounded-xl items-center justify-center gap-2 align-baseline w-30 text-center`


    return (
        <nav className=" max-w-screen-xl mx-3 md:mx-auto sticky md:sticky top-0 z-50 lg:px-16 px-4 flex items-center py-4 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] md:bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] md:shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out   justify-center gap-2 align-baseline p-3.5 rounded-xl">
            <div className="flex-1 flex justify-between items-center">
                <img data-aos="fade-left"
                    data-aos-duration="3000"
                    data-aos-once="true"
                    className='w-[59px] filter dark:invert' src="https://i.ibb.co/B20J0cRf/Name-Logo.png" alt="" />
            </div>

            <label className="md:hidden toggle text-base-content ml-4 cursor-pointer">
                <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                {darkMode ? (
                    <IoMoonOutline></IoMoonOutline>
                ) : (
                    <IoSunnyOutline></IoSunnyOutline>
                )}
            </label>

            <div className="dropdown dropdown-end md:hidden block box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl   items-center justify-center gap-2 align-baseline p-3.5">

                <button tabIndex={0} role="button" className=" md:hidden block">
                    <FiMenu></FiMenu>
                </button>
                <ul tabIndex={0} className=" dropdown-content menu rounded-box z-1 w-36
                 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl items-center justify-center gap-2 align-baseline">
                    <li><a className={navLinkClass} href="#home">Home</a></li>
                    <li><a className={navLinkClass} href="#aboutMe">About Me</a></li>
                    <li><a className={navLinkClass} href="#skill&Edu">Skills & Edu</a></li>
                    <li><a className={navLinkClass} href="#projects">Projects</a></li>
                    <li><a className={navLinkClass} href="#contact">Contact</a></li>
                </ul>
            </div>


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
