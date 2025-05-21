import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load("particles-js", "/particles.json", () => {
                console.log("Particles config loaded");
            });
        }
    }, []);

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
