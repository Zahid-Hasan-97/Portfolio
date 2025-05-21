import React from 'react';
import { GiGraduateCap } from 'react-icons/gi';

const Education = () => {
    return (
        <div id='education' class="scroll-mt-24 p-4 flex flex-col justify-center items-center">
            <div className='pb-12'>
                <h1 className='text-5xl font-bold text-[#3C3E41] dark:text-[#c4cfde]'>My Education</h1>
            </div>
            <div class="flex flex-col items-start gap-12 p-8 mx-auto max-w-4xl box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline">

                <GiGraduateCap className='w-16 h-16'></GiGraduateCap>
                <h1 className='text-5xl font-semibold'>Bachelor of Science in Computer Science & Engineering</h1>
                <h1 className='text-3xl text-blue-500'>BRAC University</h1>
            </div>
        </div>
    );
};

export default Education;