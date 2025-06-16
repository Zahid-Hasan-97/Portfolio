import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import ParticlesBackground from '../Component/ParticlesBackground';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import AboutMe from '../About Me/AboutMe';
import Skill_Education from '../Skill_Education/Skill_Education';
import Education from '../Education/Education';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div id='home' className="relative min-h-screen bg-[#ECF0F3] dark:bg-[#212428] text-black dark:text-white transition-colors duration-300">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <ParticlesBackground darkMode={darkMode} />
                <Banner />
                <AboutMe></AboutMe>
                <Skill_Education></Skill_Education>
                <Projects />
                <Contact></Contact>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
