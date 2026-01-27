import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

export default function StarsBackground({ id = "tsparticles", count = 20 }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Detecta se é mobile para simplificar o efeito
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: isMobile ? 30 : 60, // Corta o FPS no mobile para economizar bateria
    interactivity: {
      events: {
        // Desabilita hover no mobile (não existe mouse)
        onHover: { enable: !isMobile, mode: "repulse" },
        resize: true,
      },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#00bfff",
        distance: 150,
        // DESABILITA links no mobile (isso aqui é o que mais pesa!)
        enable: !isMobile, 
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.2 : 0.4, // Mais devagar no mobile = menos processamento
        direction: "none",
        outModes: "bounce",
      },
      number: {
        value: isMobile ? 15 : count, // Menos partículas no mobile
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: false, // Desabilitar em mobile ajuda na performance de pintura
  }), [isMobile, count]);

  return (
    <Particles
      id={id}
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none"
      options={options}
    />
  );
}