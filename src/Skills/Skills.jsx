import React from 'react';

const Skills = () => {
    return (
        <div id='skill' className='scroll-mt-28 max-w-screen-xl mx-auto flex flex-col my-20'>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <h1 className='text-5xl font-bold text-[#3C3E41] dark:text-[#c4cfde]'>My Skills</h1>
                <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold '>Frontend Development</h1>
            </div>

            <div className='flex items-center '>
                <div className='grid [grid-template-columns:repeat(1,60px)] [grid-auto-rows:60px] gap-10 my-10 ml-22'>

                    <div className=' box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/yF0QTyDQ/HTML5.png" alt="" />
                        {/* <h1>HTML5</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/d0rQwsBh/CSS3.png" alt="" />
                        {/* <h1>CSS3</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/kgTgJkP9/Tailwind-CSS.png" alt="" />
                        {/* <h1> Tailwind CSS</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/nvFXjS6/Java-Script.png" alt="" />
                        {/* <h1>JavaScript</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/DgDBT13L/React.png" alt="" />
                        {/* <h1>React</h1> */}
                    </div>
                </div>
                <div className="ml-3 flex flex-col w-4/5 space-y-22">
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4]  dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '75%' }}
                        ></div>
                        <span
                            className="absolute right-[26%]   text-white text-xs font-semibold"
                        >
                            75%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '80%' }}
                        ></div>
                        <span
                            className="absolute right-[21%]  text-white text-xs font-semibold"
                        >
                            80%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '80%' }}
                        ></div>
                        <span
                            className="absolute right-[21%]  text-white text-xs font-semibold"
                        >
                            80%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '65%' }}
                        ></div>
                        <span
                            className="absolute right-[36%]  text-white text-xs font-semibold"
                        >
                            65%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
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

            <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold mx-auto'>Backend Development</h1>

            <div className='flex items-center'>
                <section className='grid [grid-template-columns:repeat(1,60px)] [grid-auto-rows:60px] gap-10 my-10 ml-22'>

                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/0yb5rTZt/MongoDB.png" alt="" />
                        {/* <h1> MongoDB</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/xKKQNkmY/Express.png" alt="" />
                        {/* <h1>Express.js</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/3yCYTFxb/Node-js.png" alt="" />
                        {/* <h1>Node.js</h1> */}
                    </div>
                    <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                        <img className='w-auto h-auto' src="https://i.ibb.co.com/tMt9nHJR/Firebase.png" alt="" />
                        {/* <h1>Firebase</h1> */}
                    </div>
                    {/* <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
    <img className='w-auto h-auto' src="https://i.ibb.co.com/8n4TR0v5/Python.png" alt="" />
    <h1>Python</h1>
</div> */}
                </section>
                <div className="ml-3 flex flex-col w-4/5 space-y-22">
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4]  dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '75%' }}
                        ></div>
                        <span
                            className="absolute right-[26%]   text-white text-xs font-semibold"
                        >
                            75%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '80%' }}
                        ></div>
                        <span
                            className="absolute right-[21%]  text-white text-xs font-semibold"
                        >
                            80%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '80%' }}
                        ></div>
                        <span
                            className="absolute right-[21%]  text-white text-xs font-semibold"
                        >
                            80%
                        </span>
                    </div>
                    <div className="h-3.5 overflow-hidden rounded-full bg-[#DCE1E4] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.46),_inset_-8px_-8px_16px_rgba(56,62,69,0.46)] flex items-center px-0.5 relative">
                        <div
                            className="h-2.5 rounded-full bg-[#DCE1E4] bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-500 ease-in-out"
                            style={{ width: '65%' }}
                        ></div>
                        <span
                            className="absolute right-[36%]  text-white text-xs font-semibold"
                        >
                            65%
                        </span>
                    </div>
                </div>

            </div>

            <h1 className='text-2xl text-[#3C3E41] dark:text-[#c4cfde] font-bold mx-auto my-12'>Tools & Technologies</h1>

            <section className='grid [grid-template-columns:repeat(4,60px)] [grid-auto-rows:60px] gap-10 my-10'>

                <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                    <img className='w-auto h-auto' src="https://i.ibb.co.com/0yb5rTZt/MongoDB.png" alt="" />
                    {/* <h1> MongoDB</h1> */}
                </div>
                <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                    <img className='w-auto h-auto' src="https://i.ibb.co.com/xKKQNkmY/Express.png" alt="" />
                    {/* <h1>Express.js</h1> */}
                </div>
                <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                    <img className='w-auto h-auto' src="https://i.ibb.co.com/3yCYTFxb/Node-js.png" alt="" />
                    {/* <h1>Node.js</h1> */}
                </div>
                <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5'>
                    <img className='w-auto h-auto' src="https://i.ibb.co.com/tMt9nHJR/Firebase.png" alt="" />
                    {/* <h1>Firebase</h1> */}
                </div>
                {/* <div className='box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline p-3.5 '>
                    <img className='w-auto h-auto' src="https://i.ibb.co.com/8n4TR0v5/Python.png" alt="" />
                    <h1>Python</h1>
                </div> */}
            </section>
        </div>
    );
};

export default Skills;