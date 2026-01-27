import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "../hooks/useTranslation";
import StarsBackground from "./StarsBackground";

export default function TechSection() {
    const { t } = useTranslation();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    useEffect(() => {
        if (!isMobile) {
            const elements = document.querySelectorAll(".tilt-card");
            VanillaTilt.init(elements, {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.3,
                scale: 1.05,
            });
        }
    }, [isMobile]);

    const settings = {
        dots: false,
        infinite: true,
        speed: isMobile ? 800 : 4000,
        autoplay: true,
        autoplaySpeed: isMobile ? 2000 : 0,
        cssEase: isMobile ? "ease-out" : "linear",
        pauseOnHover: true,
        draggable: true,
        arrows: false,
        slidesToShow: 5,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { 
                breakpoint: 768, 
                settings: { 
                    slidesToShow: 2,
                    speed: 1000,
                    autoplaySpeed: 3000,
                    cssEase: "ease" 
                } 
            },
            { breakpoint: 480, settings: { slidesToShow: 1.2, centerMode: true } }
        ]
    };

    const techs = t("tech.items") || [];

    return (
        <section id="tech" className="relative min-h-[60vh] bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 overflow-hidden">
            <StarsBackground id="particles-tech" count={isMobile ? 15 : 30} />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="flex flex-col items-center px-6 mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-lobster text-indigo-400 text-center">
                        {t("tech.title")}
                    </h2>
                </div>

                <div className="relative w-full max-w-[100vw]">
                    <Slider {...settings} className="tech-slider">
                        {techs.map((tech, index) => (
                            <div key={index} className="px-4 py-8">
                                {/* REMOVIDO: backdrop-blur no mobile e adicionado bg sólido/transparente */}
                                <div className={`tilt-card group relative ${isMobile ? 'bg-white/10' : 'bg-white/5 backdrop-blur-md'} p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col items-center text-center h-64 justify-center shadow-xl`}>
                                    
                                    <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                                        {/* Reduzido o blur do brilho interno no mobile */}
                                        <div className={`absolute inset-0 bg-indigo-500/20 ${isMobile ? 'blur-md' : 'blur-xl'} rounded-full group-hover:bg-indigo-500/40 transition-all`} />
                                        
                                        <img 
                                            src={`/assets/techs/${tech.name.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                                            alt={tech.name}
                                            // No mobile, removemos filtros de grayscale constante para aliviar a GPU
                                            className={`w-14 h-14 object-contain z-10 transition-all duration-500 ${isMobile ? '' : 'filter grayscale group-hover:grayscale-0'}`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-indigo-300">
                                        {tech.name === "CSharp" ? "C#" : tech.name}
                                    </h3>
                                    
                                    {/* No mobile, a descrição aparece sempre ou fica escondida (melhor esconder se for muito texto) */}
                                    <p className="text-gray-400 text-xs mt-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
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