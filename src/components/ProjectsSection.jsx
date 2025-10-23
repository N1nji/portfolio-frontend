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
          className="relative bg-deepNavy p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          data-aos="zoom-in"
          data-aos-delay={index * 150}
  >
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="w-full h-64 mb-4 rounded-xl overflow-hidden shadow-lg">
        <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-bold text-indigo-300 mb-2">{project.name}</h3>
    <p className="text-gray-400 mb-4">{project.desc}</p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-2 rounded-xl font-semibold transition-all ${
        project.disabled
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-indigo-400 hover:bg-indigo-500"

      }`}
    >
      {project.buttonText}
    </a>
      
      {/* Botão Saber Mais (apenas para Mister Kitty) */}
      {project.name === "Mister Kitty" && (
      <a
        href="/misterkitty"
        className="px-6 py-2 rounded-xl font-semibold transition-all bg-indigo-500 hover:bg-indigo-600 opacity-50 pointer-events-none"
        
      >
        {t("projects.button_more")}
      </a>
      )}
  </div>
      {/* Brilho ao passar o mouse */}

      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-tr from-indigo-500/20 to transparent blur-md"></div>
      </div>
      ))}
    </div>
  </section>
  );
}