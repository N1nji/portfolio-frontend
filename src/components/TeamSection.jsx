import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "../hooks/useTranslation";
import StarsBackground from "./StarsBackground";
import { FiExternalLink } from "react-icons/fi";

export default function TeamSection() {
  const { t, lang } = useTranslation();
  const team = t("team.members");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const elements = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(elements, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
    
    return () => {
      elements.forEach(el => {
        if (el.vanillaTilt) el.vanillaTilt.destroy();
      });
    };
  }, [team]);

  return (
    <section
      id="team"
      className="relative py-24 bg-gradient-to-b from-midnightBlue via-deepNavy to-deepNavy text-white overflow-hidden"
    >
      <StarsBackground id="particles-team" count={15} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-lobster mb-4 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
            {t("team.title")}
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t("team.subtitle") }}
          />
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            // Formata o nome para o arquivo da imagem (minúsculo e sem espaços)
            const imageName = member.name.toLowerCase().replace(/\s+/g, "-");
            
            return (
              <div
                key={index}
                className="tilt-card relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 transition-all duration-500 shadow-xl group flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Brilho de fundo no Card */}
                <div className="absolute inset-0 rounded-3xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Imagem com efeito 3D (translateZ) */}
                <div 
                  className="relative w-32 h-32 mb-6"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div className="absolute inset-0 rounded-full bg-indigo-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={member.image || `assets/team/${imageName}.jpg`}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-indigo-400/50 shadow-2xl"
                  />
                </div>

                {/* Info */}
                <div style={{ transform: "translateZ(30px)" }} className="text-center w-full">
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 font-medium mb-4 uppercase text-xs tracking-tighter">
                    {member.role}
                  </p>
                  
                  {/* Texto principal - visível sempre */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Texto Extra - Aparece suavemente em vez de um overlay preto */}
                  <p className="text-indigo-200/70 text-xs italic mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    "{member.extra}"
                  </p>
                </div>

                {/* Botão de Portfólio - Agora clicável e estilizado */}
                {member.link ? (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-95 z-20"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <FiExternalLink />
                    {lang === "pt" ? "Portfólio" : "Portfolio"}
                  </a>
                ) : (
                    <div className="h-[36px]" /> // Spacer para manter o alinhamento
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}