import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: "chillgamer",
            name: "Chill Gamer: A Game Review Application",
            image: "https://i.ibb.co/cc4gqm6z/Vite-React-Google-Chrome-5-13-2025-2-41-59-AM.png",
            summary: "A modern app for game reviews and feedback."
        },
        // Add more project summaries here...
    ];

    return (
        <section id='projects' className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-5xl font-extrabold text-[#3C3E41] dark:text-[#c4cfde] ">My Projects</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <div key={project.id} className="box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline hover:scale-105 ">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                                <p className="mt-2 text-gray-600">{project.summary}</p>
                                <Link to={`/projects/${project.id}`} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 border rounded-4xl px-4 py-2">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
