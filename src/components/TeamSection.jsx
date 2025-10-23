import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "../hooks/useTranslation";

export default function TeamSection() {
    const { t, language } = useTranslation();
    const team = t("team.members");

    useEffect(() => {
        AOS.init({ duration: 1000 });

        //Efeito tilt 3D nos cards
        const elements = document.querySelectorAll(".tilt-card");
        VanillaTilt.init(elements, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.4,
        });
    }, []);

    return (
        <section
            id = "team"
            className = "py-24 bg-gradient-to-b from-midnightBlue via-deepNavy to-deepNavy text-white"
        >
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-5xl font-lobster mb-2">
                    {t("team.title")}
                </h2>
                <p
                    className="text-gray-400 text-lg"
                    dangerouslySetInnerHTML={{ __html: t("team.subtitle") }}
                ></p>
                </div>

                <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
                    {team.map((member, index) => (
                        <div
                        key={index}
                        className="tilt-card relative bg-gradient-to-br from-gray-900/40 to-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:bg-gray-700 hover:border-indigo-400 transition-all duration-500 shadow-lg hover:shadow-indigo-500/30 group"
                        data-aos="zoom-in"
                    >
                        {/* Brilho sutil ao passar o mouse */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-xl pointer-events-none"></div>

                        {/* Imagem */}
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <img
                            src={member.image || `assets/team/${member.name.toLowerCase()}.jpg`}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full border-4 border-indigo-400 shadow-md"
                        />
                        </div>

                          {/* Informações */}
                          <h3 className="text-2xl font-semibold mb-2 text-center">
                            {member.name}
                        </h3>
                        <p className="text-indigo-300 text-center font-medium mb-3">
                            {member.role}
                        </p>
                        <p className="text-gray-300 text-center">{member.description}</p>

                        {/* Botão fixo embaixo do card */}
                        {member.link && (
                            <a
                            href={member.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 block text-center px-4 py-2 bg-indigo-400 hover:bg-indigo-500 rounded-full font-semibold transition-all duration-300"
                        >
                            {language === "pt" ? "Ver Portfólio" : "View Portfólio"}
                          </a>
                        )}
                        {/* Detalhes extras no hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/70 rounded-2xl backdrop-blur-md transition-all duration-500 p-6 text-center pointer-events-none">
                            <p className="text-gray-100 text-sm">{member.extra}</p>
                          </div>
                        </div>
                    ))}
                </div>
        </section>
    );
}