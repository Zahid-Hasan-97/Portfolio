import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import { Typewriter } from 'react-simple-typewriter';

const social = `bg-[#e6e6e6cf] w-[60px] h-[60px]  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline`

const btn = `box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5`

const Banner = () => {
    return (
        <section className='w-full md:max-w-screen-xl flex flex-col md:flex-row  mx-auto py-14 gap-y-80'>
            <div className=' order-last md:order-first w-full h-full md:w-1/2 md:h-11/12 flex flex-col items-center justify-center pb-10'>
                <div className='flex flex-col mx-3 md:mx-0'>
                    <p className='text-2xl pb-5'>Hello, I'm </p>
                    <p className='text-5xl md:text-7xl font-bold text-blue-500 pb-3'>Zahid Hasan</p>
                    <div className='text-blue-500 text-3xl pb-3'>
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

                <div className=' flex md:self-start md:ml-22 gap-10 pt-12 '>
                    <a href='#contact' className={btn} >Get in touch</a>
                    <button className={btn}>Download Resume</button>
                </div>

                <div className='w-full'>
                    <ul class="flex pt-12 space-x-7 justify-center md:justify-self-start md:ml-22">
                        <li className={social}>
                            <a href="https://www.facebook.com/zahid.hasan2797/"><SlSocialFacebook className='text-2xl' /></a>
                        </li>

                        <li className={social}>
                            <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/"><FiLinkedin className='text-2xl' />
                            </a>
                        </li>

                        <li className={social}>
                            <a href="https://github.com/Zahid-Hasan-97"><FiGithub className='text-2xl'></FiGithub></a>
                        </li>
                        <li className={social}>
                            <a href="https://x.com/z_hasan555"><FaXTwitter className='text-2xl'></FaXTwitter></a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='order-first md:order-last relative w-full md:w-1/2  flex items-center justify-center top-30 md:top-0'>
                <div className='transform rotate-45 absolute w-60 h-60 md:w-96 md:h-96 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl '>
                </div>
                <img data-aos="zoom-out" data-aos-duration='1500' className='absolute -top-46 md:-top-8 w-3/5 mx-auto' src='https://i.ibb.co.com/xqrLq0yK/Adobe-Express-file.png' alt='Photo'
                />
            </div>
        </section>


    );
};

export default Banner;
