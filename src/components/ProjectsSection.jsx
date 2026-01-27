import React from "react";
import { useTranslation } from "../hooks/useTranslation";


export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
  {
    name: "Mister Kitty",
    img: "/assets/projects/misterkitty.png",
    desc: t("projects.misterkitty_desc"),
    link: "https://n1nji.itch.io/mister-kitty",
    buttonText: t("projects.button_itch"),
  },
  {
    name: "Silent Dawn",
    img: "/assets/projects/Silent Dawn art.png",
    desc: t("projects.silentdawn_desc"),
    link: "#",
    buttonText: t("projects.button_soon"),
    disabled: true,
  },
];


  return (
    <section
    id="projects"
    className="min-h-screen bg-gradient-to-b from-midnightBlue to-deepNavy text-white py-20 px-6 flex flex-col items-center"
  >
    <h2 className="text-4xl font-lobster mb-10 text-indigo-400 text-center" data-aos="fade-up">
      {t("projects.title")}
    </h2>

    <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
    {projects.map((project, index) => (
  <div
    key={index}
    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl shadow-2xl transition-all duration-500 hover:border-indigo-500/50"
    data-aos="zoom-in"
    data-aos-delay={index * 150}
  >
    {/* Container da Imagem com Zoom Interno */}
    <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
      <img 
        src={project.img} 
        alt={project.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnightBlue/80 to-transparent opacity-60" />
    </div>

    <div className="flex flex-col items-start text-left">
      {/* Badge de Status (Opcional) */}
      {project.disabled && (
        <span className="text-[10px] uppercase tracking-widest bg-gray-700 text-gray-300 px-2 py-1 rounded mb-2">
          Em Breve
        </span>
      )}

      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
        {project.name}
      </h3>
      
      <p className="text-gray-400 text-sm my-4 line-clamp-3">
        {project.desc}
      </p>

      {/* Área de Botões */}
      <div className="flex gap-3 w-full mt-auto">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 text-center px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            project.disabled
              ? "bg-white/10 text-gray-500 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
          }`}
        >
          {project.buttonText}
        </a>

        {project.name === "Mister Kitty" && (
          <a
            href="/misterkitty"
            className="flex-1 text-center px-4 py-2 rounded-lg font-bold text-sm border border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 transition-all"
          >
            {t("projects.button_more")}
          </a>
        )}
      </div>
    </div>

    {/* Brilho sutil no fundo ao passar o mouse */}
    <div className="absolute -z-10 inset-0 bg-indigo-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
  ))}
    </div>
  </section>
  );
}