import { ReactTyped } from "react-typed";
import { useTranslation } from "../hooks/useTranslation";
import StarsBackground from "./StarsBackground";
import { FiArrowRight, FiMessageCircle, FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const { t } = useTranslation();
  
  // Detecta se é mobile para reduzir carga
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-deepNavy to-midnightBlue overflow-hidden px-6"
    >
      {/* 1. Estrelas reduzidas no mobile */}
      <StarsBackground id="particles-hero" count={isMobile ? 40 : 100} />

      {/* 2. Glow Central Otimizado - Menos blur no mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] 
                      bg-indigo-500/10 blur-[60px] sm:blur-[100px] 
                      rounded-full pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Avatar Otimizado: Removi o animate-pulse constante no mobile (consome CPU) */}
        <div
          className="relative w-32 h-32 sm:w-44 sm:h-44 mb-6 group"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-400 blur-md opacity-20 sm:group-hover:opacity-60 transition-opacity duration-500" />
          
          <img
            src="assets/team/pedro-felipe.jpg"
            alt={t("hero.name")}
            className="relative w-full h-full object-cover rounded-full border-4 border-indigo-400/30 shadow-2xl transition-transform duration-500 sm:group-hover:scale-105"
          />
        </div>

        {/* Nome: Removi o gradiente "via-indigo-100" que exige mais cores de interpolação */}
        <h1
          className="text-4xl sm:text-7xl font-lobster mb-4 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          {t("hero.name")}
        </h1>

        {/* Typed Texto: Aumentei o min-h no mobile para o botão não pular quando o texto quebra linha */}
        <div 
            className="text-lg sm:text-2xl text-gray-300 max-w-[280px] sm:max-w-2xl min-h-[100px] sm:min-h-[60px]"
            data-aos="fade-up"
            data-aos-delay={200}
        >
          <ReactTyped
            strings={t("hero.titles")}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="font-bold text-white border-b-2 border-indigo-500/50"
          />
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-poppins tracking-wide">
            {t("hero.role")}{" "}
            <span className="text-indigo-400 font-semibold uppercase tracking-tighter">
              {t("hero.company")}
            </span>
          </p>
        </div>

        {/* Botões: Layout em coluna no mobile para facilitar o clique com o polegar */}
        <div 
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay={400}
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            {t("hero.view_work")}
            <FiArrowRight />
          </a>

          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <FiMessageCircle className="text-indigo-400" />
            {t("hero.contact")}
          </a>
        </div>
      </div>

      {/* Indicador de Scroll: Escondido em telas muito pequenas para limpar o visual */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-6 h-10 border-2 border-indigo-400/30 rounded-full relative">
              <div className="w-1 h-2 bg-indigo-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
          </div>
          <FiChevronDown size={isMobile ? 16 : 20} className="text-indigo-400 animate-pulse" />
      </div>
    </section>
  );
}