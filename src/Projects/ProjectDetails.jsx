// ProjectDetails.jsx
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

const projectData = {
    chillgamer: {
        name: "Chill Gamer: A Game Review Application",
        image: "https://i.ibb.co/cc4gqm6z/Vite-React-Google-Chrome-5-13-2025-2-41-59-AM.png",
        techStack: ["React", "Tailwind CSS", "Firebase", "Node.js"],
        description: "A platform to post and review games, share feedback, and connect with other gamers.",
        liveLink: "https://your-live-project.com",
        githubLink: "https://github.com/your-username/chillgamer-client",
        challenges: "Managing user authentication and dynamic routing.",
        futurePlans: "Add multiplayer integration, mobile app, and advanced search filters."
    },
    // Add more projects here...
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];
    const navigate = useNavigate()

    if (!project) return <div className="p-8 text-center text-red-500">Project not found!</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
                <IoMdArrowBack></IoMdArrowBack>    Back to Projects
            </button>
            <img src={project.image} alt={project.name} className="w-full box-border bg-[linear-gradient(145deg,_#e2e8ec,_#ffffff)] shadow-[5px_5px_15px_#D1D9E6,_-5px_-5px_15px_#ffffff] dark:bg-[linear-gradient(145deg,_#1e2024,_#23272b)] dark:shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] transition-all duration-[400ms] ease-in-out rounded-xl justify-center align-baseline" />
            <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
            <p className="text-gray-600">{project.description}</p>

            <div>
                <h2 className="text-xl font-semibold">🛠 Tech Stack</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {project.techStack.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold">💡 Challenges Faced</h2>
                <p className="text-gray-700">{project.challenges}</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold">🚀 Future Plans</h2>
                <p className="text-gray-700">{project.futurePlans}</p>
            </div>

            <div className="flex gap-4 mt-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    🔗 Live Site
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                    💻 GitHub Repo
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
