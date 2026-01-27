import React, { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import VanillaTilt from "vanilla-tilt";
import StarsBackground from "./StarsBackground";

export default function StartupSection() {
  const { t } = useTranslation();
  const startup = t("startup");

  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(cards, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <section
      id="startup"
      className="relative min-h-screen bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* 1. O Background de Estrelas entra aqui como primeiro filho */}
      <StarsBackground id="particles-startup" />
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* 2. CONTEÚDO ENVELOPADO (Camada 10) */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">

      {/* Logo com Animação de Flutuar */}
      <div
        className="relative w-48 h-48 mb-12 flex items-center justify-center group"
        data-aos="zoom-in"
      >
        {/* Brilho pulsante atrás do logo */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full animate-pulse group-hover:bg-indigo-500/40 transition-all" />
        
        <img 
          src="assets/Logo-N1S1Games.png" 
          alt="Logo N1S1 Games" 
          className="relative z-10 w-full h-full object-contain animate-float" 
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
      </div>

      {/* Título com Gradiente */}
      <h2
        className="text-4xl md:text-5xl font-lobster mb-8 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        {startup.title}
      </h2>

      {/* Missão com Estilização de Citação */}
      <div 
        className="relative max-w-3xl text-center mb-20 px-4"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <span className="absolute -top-6 left-0 text-6xl text-indigo-500/20 font-serif">"</span>
        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed italic"
          dangerouslySetInnerHTML={{ __html: startup.mission }}
        />
        <span className="absolute -bottom-10 right-0 text-6xl text-indigo-500/20 font-serif">"</span>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full relative">
        {/* Linha conectora (visível apenas em Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2 pointer-events-none" />

        {startup.timeline.map((item, index) => (
          <div
            key={index}
            className="tilt-card z-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Marcador de Ano */}
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              {item.year}
            </div>
            
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* CSS Inline para a animação do Logo (ou coloque no seu index.css) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      </div>
    </section>
  );
}