import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "../hooks/useTranslation";
import StarsBackground from "./StarsBackground";

export default function TechSection() {
    const { t } = useTranslation();

    useEffect(() => {
        const elements = document.querySelectorAll(".tilt-card");
        VanillaTilt.init(elements, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            gyroscope: true, 
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        draggable: true,
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1.5, centerMode: true }
            }
        ]
    };

    const techs = t("tech.items");

    return (
        <section id="tech" className="relative min-h-[60vh] bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 overflow-hidden">
            {/* 1. O Background de Estrelas entra aqui como primeiro filho */}
            <StarsBackground id="particles-tech" />
            {/* 2. Envolva TODO o conteúdo nesta div para garantir a hierarquia visual */}
            <div className="relative z-10 w-full flex flex-col items-center">

            <div className="flex flex-col items-center px-6 mb-12">
                <h2 className="text-4xl font-lobster text-indigo-400 text-center" data-aos="fade-up">
                    {t("tech.title")}
                </h2>
            </div>

            {/* Container Relativo para as Máscaras de Gradiente */}
            <div className="relative w-full max-w-[100vw]">
                {/* Máscara Esquerda */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-deepNavy to-transparent hidden md:block" />
                
                {/* Máscara Direita */}
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-deepNavy to-transparent hidden md:block" />

                <Slider {...settings} className="tech-slider">
                    {techs.map((tech, index) => (
                        <div key={index} className="px-4 py-8"> {/* Padding extra para o Tilt não cortar */}
                            <div className="tilt-card group relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors flex flex-col items-center text-center h-64 justify-center">
                                
                                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                                    {/* Brilho atrás do ícone */}
                                    <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-all" />
                                    
                                    <img 
                                        src={`/assets/techs/${tech.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                                        alt={tech.name}
                                        className="w-14 h-14 object-contain z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-indigo-300">
                                    {tech.name === "CSharp" ? "C#" : tech.name}
                                </h3>
                                <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {tech.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            </div>
        </section>
    );
}