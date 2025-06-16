import { useRef, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FiLinkedin } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import emailjs from 'emailjs-com';

const contact = `bg-[#e6e6e6cf] h-10 w-10  box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex rounded-xl  hover:-translate-y-2.5 items-center justify-center gap-2 align-baseline`

const box = `w-full rounded-md py-2.5 px-4 bg-[#FDFEFE] dark:bg-[#191b1e]  border-solid border-[#191b1e] text-sm shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)]`



const Contact = () => {

    const form = useRef();
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_7ywddtq',
            'template_ca3aasj',
            form.current,
            '6VygTIUvXRVStHcZO'
        ).then(
            (result) => {
                console.log(result.text);
                setSuccess(true);
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                setSuccess(false);
            }
        );
    };

    return (
        <div id='contact' data-aos="zoom-in" data-aos-duration="1500" className="md:mt-26 scroll-mt-30 md:scroll-mt-56 p-3 md:p-4 flex flex-col justify-center items-center pb-6 md:pb-24">
            <div className='pb-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-[#3C3E41] dark:text-[#c4cfde]'>Contact With Me</h1>
            </div>
            <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline">
                <div>
                    <h1 className="text-slate-900 dark:text-[#C4CFDE] text-2xl md:text-3xl font-semibold">Let's Talk</h1>
                    <p className="text-sm text-slate-500 dark:text-[#c4cfde] mt-4 leading-relaxed">I’m available for freelance work, contract roles, or full-time opportunities in frontend development. If you're looking for someone who’s detail-oriented, responsive, and passionate about clean UI, let’s connect!</p>

                    <div className="mt-6 md:mt-12">
                        <h2 className="text-slate-900 dark:text-[#C4CFDE] text-base font-semibold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className={contact}>
                                    <CiMail></CiMail>
                                </div>
                                <a href="javascript:void(0)" className="text-sm ml-4">
                                    <small className="block text-slate-900 dark:text-[#C4CFDE]">Mail</small>
                                    <span className="text-blue-600 font-medium">md.zahid.hasan.topu@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=" mt-6 md:mt-12">
                        <h2 className="text-slate-900 dark:text-[#C4CFDE] text-base font-semibold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className={contact}>
                                <a href="https://www.facebook.com/zahid.hasan2797/">
                                    <SlSocialFacebook />
                                </a>
                            </li>
                            <li className={contact}>
                                <a href="https://www.linkedin.com/in/zahid-hasan-ab3b9418a/">
                                    <FiLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input type='text' placeholder='Name'
                        className={box} />
                    <input type='email' placeholder='Email'
                        className={box} />
                    <input type='text' placeholder='Subject'
                        className={box} />
                    <textarea placeholder='Message' rows="6"
                        className={box}></textarea>
                    <button type='submit'
                        className="w-full text-center text-blue-500 box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out flex justify-center items-center rounded-md py-2">Send Message
                    </button>
                    {success && <p className='text-green-600'>Message sent successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;