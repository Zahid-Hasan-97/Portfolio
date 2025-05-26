import React, { useState } from 'react';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';

const Skill_Education = () => {

    const [skill, setSkill] = useState('skills')
    return (
        <div id='skill&Edu' className='max-w-screen-xl mx-auto pt-28'>
            <div className='w-full box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]  transition-all duration-[400ms] ease-in-out flex  rounded-xl items-start  align-baseline '>
                <button onClick={() => setSkill('skills')} className={`w-1/2 p-3 text-xl hover:box-border hover:bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] hover:dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] hover:flex items-center justify-center hover:rounded-xl hover:gap-8 align-baseline  font-semibold 
                hover:text-blue-500 transition-all duration-[400ms] ease-in-out  ${skill === 'skills' ? 'text-blue-500 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff]  dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]  transition-all duration-[400ms] ease-in-out flex  rounded-xl items-center  align-baseline' : ''}`}>Skills</button>
                <button onClick={() => setSkill('education')} className={`w-1/2 p-3 text-xl hover:box-border hover:bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] hover:dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] hover:flex items-center justify-center hover:rounded-xl hover:gap-8   font-semibold 
                hover:text-blue-500 transition-all duration-[400ms] ease-in-out ${skill === 'education' ? 'text-blue-500 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]  transition-all duration-[400ms] ease-in-out flex  rounded-xl items-center  align-baseline' : ""}`}>Education</button>

            </div>
            {skill === 'skills' && (<Skills></Skills>)}
            {skill === 'education' && (<Education></Education>)}

            <div>

            </div>

        </div>
    );
};

export default Skill_Education;