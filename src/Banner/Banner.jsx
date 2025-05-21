import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <section className='max-w-screen-xl flex  mx-auto py-14'>
            <div className=' w-1/2 h-11/12 flex flex-col items-center justify-center pb-10'>
                <div className='flex flex-col'>
                    <p className='text-2xl pb-5'>Hello, I'm </p>
                    <p className='text-7xl font-bold text-blue-500 pb-5'>Zahid Hasan</p>
                    <div className='text-blue-500 text-3xl'>
                        <Typewriter
                            words={['Frontend Developer', 'Web Developer']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </div>
                    <p>with a passion for creating beautiful and responsive websites.</p>

                </div>

                <div className=' flex self-start ml-22 gap-10 pt-12 '>
                    <button className=' box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5 '>Get in touch</button>
                    <button className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>Download Resume</button>


                </div>

                <div className='w-full'>
                    <ul class="flex pt-12 space-x-7 self-start ml-22">
                        <li class="bg-[#e6e6e6cf] w-[60px] h-[60px]  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                            <a href="https://www.facebook.com/zahid.hasan2797/"><SlSocialFacebook className='text-2xl' /></a>
                        </li>

                        <li class="bg-[#e6e6e6cf] w-[60px] h-[60px]  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                            <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/"><FiLinkedin className='text-2xl' />
                            </a>
                        </li>

                        <li class="bg-[#e6e6e6cf] w-[60px] h-[60px]  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                            <a href="https://github.com/Zahid-Hasan-97"><FiGithub className='text-2xl'></FiGithub></a>
                        </li>
                        <li class="bg-[#e6e6e6cf] w-[60px] h-[60px]  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                            <a href="https://x.com/z_hasan555"><FaXTwitter className='text-2xl'></FaXTwitter></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='relative w-1/2  flex items-center justify-center '>
                <div className='transform rotate-45 absolute w-96 h-96 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl '>
                </div>
                <img className='absolute -top-8 w-3/5 mx-auto' src='https://i.ibb.co.com/xqrLq0yK/Adobe-Express-file.png' alt='Photo'
                />
            </div>
        </section>


    );
};

export default Banner;
