import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// Adicionamos a prop "id" para cada seção ter a sua instância única
export default function StarsBackground({ id = "tsparticles" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={id} // ID único aqui
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none" // pointer-events-none garante que não bloqueie cliques
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#00bfff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: "bounce",
          },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}