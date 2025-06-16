import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: "chillgamer",
            name: "Chill Gamer: A Game Review Application",
            // image: "https://i.ibb.co.com/rJGsdsk/Chill-Gamer-2.png",
            image: "https://i.ibb.co.com/4gF8dSsY/Chill-Gamer.png",
            summary: "A modern app for game reviews and feedback."
        },
        {
            id: "carrental",
            name: "Car Rental ",
            image: "",
            summary: "A sleek platform to browse, book, and manage rental cars with real - time updates."
        },
        {
            id: "csp",
            name: "Collaborative Study Platform",
            image: "",
            summary: "A smart learning app connecting students and tutors for sessions, notes, and materials."
        }

    ];

    return (
        <section id='projects' className=" scroll-mt-26 md:scroll-mt-28 pb-32 md:pb-12 max-w-screen-xl mx-auto md:pt-0">
            <div className="mb-12 text-center">
                <h2 className="text-5xl font-extrabold text-[#3C3E41] dark:text-[#c4cfde] ">My Projects</h2>
            </div>

            <div className="w-full grid grid-cols-1 gap-6 md:gap-8">
                {projects.map(project => (
                    <div data-aos="zoom-in-up" data-aos-duration="1500"
                        key={project.id} className=" box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline hover:scale-105 flex flex-col md:flex-row mx-3 md:mx-0 pb-5">
                        <div className="overflow-hidden md:pl-5 py-5 w-full">
                            <img src={project.image} alt={project.name} className="w-11/12 md:w-4/5 md:h-full mx-auto md:mx-0  object-cover rounded-l-xl border border-none rounded-xl overflow-hidden" />
                        </div>
                        <div className=" md:w-3/5 flex flex-col items-center justify-center gap-5 md:gap-10">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-300">{project.name}</h3>
                            <p className="text-[#6f7174]">{project.summary}</p>
                            <Link to={`/projects/${project.id}`} className=" box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline flex p-3 gap-x-5 text-lg font-semibold">
                                View Details <FaArrowRight className='my-auto'></FaArrowRight>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
