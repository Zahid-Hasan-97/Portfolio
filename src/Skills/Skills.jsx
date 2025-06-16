import React from 'react';
import Marquee from 'react-fast-marquee';

const skill = `box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5`

const skill_border = `h-3.5 overflow-hidden rounded-full bg-[#DCE1E4]  dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative`

const skill_blue_gradiant = `h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out`

const Skills = () => {
    return (
        <div id='skill' className='scroll-mt-28 max-w-screen-xl mx-auto flex flex-col my-6 min-h-screen  pb-24 md:pb-0'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <h1 className=' text-4xl md:text-5xl font-bold text-[#3C3E41] dark:text-[#c4cfde]'>My Skills</h1>
            </div>

            <div className=' w-full flex flex-col md:flex-row mt-10'>

                <div className=' md:w-1/2 ' >
                    <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold text-center'>Frontend Development</h1>
                    <div className=' flex items-center '>
                        <div data-aos="fade-right"
                            data-aos-duration="1500" className='grid [grid-template-columns:repeat(1,60px)] [grid-auto-rows:60px] gap-5 my-10'>

                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/yF0QTyDQ/HTML5.png" alt="" />
                                {/* <h1>HTML5</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/d0rQwsBh/CSS3.png" alt="" />
                                {/* <h1>CSS3</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/kgTgJkP9/Tailwind-CSS.png" alt="" />
                                {/* <h1> Tailwind CSS</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/nvFXjS6/Java-Script.png" alt="" />
                                {/* <h1>JavaScript</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/DgDBT13L/React.png" alt="" />
                                {/* <h1>React</h1> */}
                            </div>
                        </div>
                        <div className="ml-3 flex flex-col w-4/5 space-y-16">
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500" className={skill_blue_gradiant}
                                    style={{ width: '75%' }}
                                ></div>
                                <span className="absolute right-[26%]   text-white text-xs font-semibold"> 75%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '80%' }}
                                ></div>
                                <span
                                    className="absolute right-[21%]  text-white text-xs font-semibold"
                                >
                                    80%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '80%' }}
                                ></div>
                                <span
                                    className="absolute right-[21%]  text-white text-xs font-semibold"
                                >
                                    80%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '65%' }}
                                ></div>
                                <span
                                    className="absolute right-[36%]  text-white text-xs font-semibold"
                                >
                                    65%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '60%' }}
                                ></div>
                                <span
                                    className="absolute right-[41%]  text-white text-xs font-semibold"
                                >
                                    60%
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=' md:w-1/2'>
                    <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold mx-auto text-center'>Backend Development</h1>

                    <div className=' flex items-center'>
                        <section className='grid [grid-template-columns:repeat(1,60px)] [grid-auto-rows:60px] gap-5 my-10'>

                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/0yb5rTZt/MongoDB.png" alt="" />
                                {/* <h1> MongoDB</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/xKKQNkmY/Express.png" alt="" />
                                {/* <h1>Express.js</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/3yCYTFxb/Node-js.png" alt="" />
                                {/* <h1>Node.js</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/tMt9nHJR/Firebase.png" alt="" />
                                {/* <h1>Firebase</h1> */}
                            </div>
                            <div className={skill}>
                                <img className='w-auto h-auto' src="https://i.ibb.co.com/bjtZvNWj/Next-js.png" alt="" />
                                {/* <h1>Python</h1> */}
                            </div>
                        </section>
                        <div className="ml-3 flex flex-col w-4/5 space-y-16">
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant} style={{ width: '50%' }}
                                >

                                </div>
                                <span
                                    className="absolute right-[51%]   text-white text-xs font-semibold"
                                >
                                    50%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '55%' }}
                                ></div>
                                <span
                                    className="absolute right-[46%]  text-white text-xs font-semibold"
                                >
                                    55%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '80%' }}
                                ></div>
                                <span
                                    className="absolute right-[21%]  text-white text-xs font-semibold"
                                >
                                    80%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '75%' }}
                                ></div>
                                <span
                                    className="absolute right-[26%]  text-white text-xs font-semibold"
                                >
                                    75%
                                </span>
                            </div>
                            <div className={skill_border}>
                                <div data-aos="fade-right"
                                    data-aos-duration="1500"
                                    className={skill_blue_gradiant}
                                    style={{ width: '25%' }}
                                ></div>
                                <span
                                    className="absolute right-[76%]  text-white text-xs font-semibold"
                                >
                                    25%
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div >

            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold'>Dev Tools & Others</h1>
                <Marquee>
                    <div className='flex w-12 gap-2 md:gap-17' >
                        <img src="https://i.ibb.co.com/gLKxpt3V/Vercel.png" alt="" />
                        <img src="https://i.ibb.co.com/nqBfMPyX/Surge-Photoroom.png" alt="" />
                        <img src="https://i.ibb.co.com/hxYhcTWq/Netlify.png" alt="" />
                        <img src="https://i.ibb.co.com/HpPkk0QJ/Visual-Studio-Code-VS-Code.png" alt="" />
                        <img src="https://i.ibb.co.com/ch7RkjRn/Figma.png" alt="" />
                        <img src="https://i.ibb.co.com/tMbzR7qH/Pixso.png" alt="" />
                        <img src="https://i.ibb.co.com/7df4h664/Py-Charm-3.png" alt="" />
                        <img src="https://i.ibb.co.com/cSm6rW8r/JWT.png" alt="" />
                    </div>
                </Marquee>


            </div>


        </div >
    );
};

export default Skills;