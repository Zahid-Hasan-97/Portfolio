import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const AboutMe = () => {
    return (
        <div id='aboutMe' className=' scroll-mt-24 md:scroll-mt-28 max-w-screen-xl flex flex-col items-center justify-center md:mt-28 mx-auto'>
            <h1 className='text-5xl text-[#3C3E41] dark:text-[#c4cfde] font-bold pb-12 md:pb-14'>About Me</h1>

            <div className=' flex flex-col md:flex-row items-center justify-center gap-5'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='w-full md:w-1/2'>
                    <img src="https://i.ibb.co.com/p7Vz4Ck/Edited.png" alt="" />

                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className='mx-3 md:mx-0 md:w-1/2 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex flex-col rounded-xl items-start gap-8 align-baseline p-3.5'>
                    <p className='text-[#3c3e41] dark:text-[#c4cfde]'>Hello there, I'm a front-end developer, and I love creating things that live on the internet. When I was in university, I became familiar with JAVA. Later, I learned Python, my favourite programming language. My interest in web development began when I worked on an academic project—a Hospital Management System using HTML, CSS, and JS—which inspired me to bring human ideas to life.</p>

                    <p className='text-[#3c3e41] dark:text-[#c4cfde]'>In my development journey, I always strive to update myself daily and learn new technologies. In frontend UI, neumorphism, glassmorphism, and claymorphism etc. are my favourites. Besides frontend, I am enhancing my skills in database management and server-side programming. Moreover, I enjoy every step of the development process, from discussion to collaboration.</p>

                    <p className='text-[#3c3e41] dark:text-[#c4cfde]'>Outside of my professional life, I love fishing, playing cricket, and travelling.</p>

                </div>
            </div>

        </div>
    );
};

export default AboutMe;