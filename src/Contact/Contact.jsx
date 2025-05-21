import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FiLinkedin } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';

const Contact = () => {
    return (
        <div id='contact' class="scroll-mt-24 p-4 flex flex-col justify-center items-center pb-24">
            <div className='pb-12'>
                <h1 className='text-5xl font-bold text-[#3C3E41] dark:text-[#c4cfde]'>Contact With Me</h1>
            </div>
            <div class="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline">
                <div>
                    <h1 class="text-slate-900 dark:text-[#C4CFDE] text-3xl font-semibold">Let's Talk</h1>
                    <p class="text-sm text-slate-500 dark:text-[#c4cfde] mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                    <div class="mt-12">
                        <h2 class="text-slate-900 dark:text-[#C4CFDE] text-base font-semibold">Email</h2>
                        <ul class="mt-4">
                            <li class="flex items-center">
                                <div class="bg-[#e6e6e6cf] h-10 w-10  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                                    <CiMail></CiMail>
                                </div>
                                <a href="javascript:void(0)" class="text-sm ml-4">
                                    <small class="block text-slate-900 dark:text-[#C4CFDE]">Mail</small>
                                    <span class="text-blue-600 font-medium">md.zahid.hasan.topu@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-12">
                        <h2 class="text-slate-900 dark:text-[#C4CFDE] text-base font-semibold">Socials</h2>

                        <ul class="flex mt-4 space-x-4">
                            <li class="bg-[#e6e6e6cf] h-10 w-10  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                                <a href="https://www.facebook.com/zahid.hasan2797/">
                                    <SlSocialFacebook />
                                </a>
                            </li>
                            <li class="bg-[#e6e6e6cf] h-10 w-10  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                                <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/">
                                    <FiLinkedin />
                                </a>
                            </li>
                            {/* <li class="bg-[#e6e6e6cf] h-10 w-10  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline">
                                <a href="javascript:void(0)">

                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <form class="space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 bg-[#FDFEFE] dark:bg-[#191b1e]  border-solid
                         border-[#191b1e] text-sm shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)]" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4  bg-[#FDFEFE] dark:bg-[#191b1e]  border-solid
                         border-[#191b1e] text-sm shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)]" />
                    <input type='text' placeholder='Subject'
                        class="w-full rounded-md py-2.5 px-4 bg-[#FDFEFE] dark:bg-[#191b1e]  border-solid
                         border-[#191b1e] text-sm shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)]" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full rounded-md py-2.5 px-4 bg-[#FDFEFE] dark:bg-[#191b1e]  border-solid
                         border-[#191b1e] text-sm shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)]"></textarea>
                    <button type='button'
                        className="w-full text-center text-blue-500 box-border 
    bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] 
    shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] 
    dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] 
    dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] 
    transition-all duration-[400ms] ease-in-out 
    flex justify-center items-center 
    rounded-md py-2">Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;