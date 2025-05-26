import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';

const Education = () => {
    return (
        <div
            id='education'
            className="scroll-mt-20 px-4 flex flex-col justify-center items-center my-12  transition-colors duration-300"
        >
            <div className='pb-12 text-center'>
                <h1 className='text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-300'>
                    My Education
                </h1>
            </div>

            <div className="
                w-full max-w-3xl
                p-8 md:p-10
                rounded-3xl
                bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] dark:bg-slate-900
                shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff]
                dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]
                dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)]
                transition-all duration-400 ease-in-out
                flex flex-col items-center gap-8 
            ">
                <div className="flex flex-col md:flex-row items-center gap-8 w-full">

                    <div className="
                        flex-shrink-0
                        w-28 h-28 md:w-32 md:h-32
                        rounded-full
                        bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] dark:bg-slate-900
                        shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff]
                        dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)]
                        dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]
                        flex items-center justify-center
                        p-2
                        ">
                        <GiGraduateCap className='w-16 h-16 md:w-20 md:h-20 text-sky-600 dark:text-sky-500' />
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                        <h2 className='text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300'>Bachelor of Science in Computer Science & Engineering
                        </h2>
                        <h3 className='text-xl sm:text-2xl text-sky-700 dark:text-sky-600 font-medium'>
                            BRAC University
                        </h3>
                        <p className='text-md sm:text-lg text-slate-600 dark:text-slate-400'>
                            2017 - 2023
                        </p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Education;