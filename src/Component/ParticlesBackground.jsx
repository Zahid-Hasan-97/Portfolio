import { useEffect } from "react";

const ParticlesBackground = ({ darkMode }) => {
    useEffect(() => {
        if (window.particlesJS) {
            const config = {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: darkMode ? "#ffffff" : "#000000"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.3
                    },
                    size: {
                        value: 2
                    },
                    line_linked: {
                        enable: false,
                        distance: 150,
                        color: darkMode ? "#ffffff" : "#000000",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        repulse: {
                            distance: 100
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            };

            window.particlesJS("particles-js", config);
        }
    }, [darkMode]);

    return (
        <div
            id="particles-js"
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: "none"
            }}
        />
    );
};

export default ParticlesBackground;
