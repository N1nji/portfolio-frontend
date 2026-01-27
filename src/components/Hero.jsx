import { ReactTyped } from "react-typed";
import { useTranslation } from "../hooks/useTranslation";
import StarsBackground from "./StarsBackground";
import { FiArrowRight, FiMessageCircle, FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-deepNavy to-midnightBlue overflow-hidden px-4"
    >
      {/* 1. Estrelas de fundo com ID único para evitar conflitos */}
      <StarsBackground id="particles-hero" />

      {/* 2. Brilho central (Glow) para dar profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* 3. Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Avatar com efeito de Glow e Hover */}
        <div
          className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8 group"
          data-aos="zoom-in"
        >
          {/* Brilho externo pulsante */}
          <div className="absolute inset-0 rounded-full bg-indigo-400 blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
          
          <img
            src="assets/team/pedro felipe.jpg"
            alt={t("hero.name")}
            className="relative w-full h-full object-cover rounded-full border-4 border-indigo-400/30 shadow-2xl select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:border-indigo-400"
          />
        </div>

        {/* Nome com Gradiente de Alta Qualidade */}
        <h1
          className="text-5xl sm:text-7xl font-lobster mb-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          {t("hero.name")}
        </h1>

        {/* Texto Digitado com Altura Fixa para evitar Layout Shift */}
        <div 
            className="text-xl sm:text-2xl text-gray-300 max-w-sm sm:max-w-2xl min-h-[80px] sm:min-h-[60px]"
            data-aos="fade-up"
            data-aos-delay={300}
        >
          <ReactTyped
            strings={t("hero.titles")}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="font-bold text-white border-b-2 border-indigo-500/50"
          />
          <p className="mt-3 text-gray-400 font-poppins tracking-wide">
            {t("hero.role")}{" "}
            <span className="text-indigo-400 font-semibold uppercase tracking-tighter">
              {t("hero.company")}
            </span>
          </p>
        </div>

        {/* 4. Botões de Ação (CTA) com Ícones */}
        <div 
            className="flex flex-col sm:flex-row gap-4 mt-10"
            data-aos="fade-up"
            data-aos-delay={600}
        >
          <a 
            href="#projects" 
            className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            {t("hero.view_work") || "Ver Projetos"}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href="#contact" 
            className="group px-8 py-3 bg-transparent border-2 border-indigo-400/40 hover:border-indigo-400 text-white font-bold rounded-full transition-all hover:bg-indigo-400/10 flex items-center justify-center gap-2 hover:scale-105"
          >
            <FiMessageCircle className="text-indigo-400 group-hover:animate-pulse" />
            {t("hero.contact") || "Falar Comigo"}
          </a>
        </div>
      </div>

      {/* 5. Indicador de Scroll Animado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Explore</span>
          <div className="w-6 h-10 border-2 border-indigo-400/30 rounded-full relative">
              <div className="w-1 h-2 bg-indigo-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
          <FiChevronDown className="text-indigo-400 animate-pulse" />
      </div>
    </section>
  );
}