import React, { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import VanillaTilt from "vanilla-tilt";

export default function StartupSection() {
  const { t } = useTranslation();
  const startup = t("startup");

  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");
    VanillaTilt.init(cards, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <section
      id="startup"
      className="min-h-screen bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 px-6 flex flex-col items-center"
    >
      {/* Logo Placeholder */}
      <div
        className="w-40 h-40 rounded-full bg-transparent mb-10 flex items-center justify-center shadow-lg"
        data-aos="zoom-in"
      >
        <img src="assets/Logo-N1S1Games.png" alt="Logo N1S1 Games" />
      </div>

      {/* Título */}
      <h2
        className="text-4xl font-lobster mb-6 text-white" data-aos="fade-up">
        {startup.title}
      </h2>

      {/* Missão / Visão */}
      <p
        className="text-lg text-gray-300 max-w-2xl text-center mb-12 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay={200}
        dangerouslySetInnerHTML={{ __html: startup.mission }}
        />

      {/* Timeline / Marcos */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        {startup.timeline.map((item, index) => (
          <div
            key={index}
            className="tilt-card bg-deepNavy p-6 rounded-2xl shadow-md hover:scale-105 transition"
            data-aos={
              index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"
            }
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-400">
              {item.year}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}