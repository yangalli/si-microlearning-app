import Particles from "react-tsparticles";
import "./styles.css";

function ParticlesWhite() {
  return (
    <Particles
      id="tsparticles2"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#FFFFFF",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          move: {
            direction: "none",
            enable: true,
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 25,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesWhite;
