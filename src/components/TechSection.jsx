import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VanillaTilt from "vanilla-tilt";
import { useTranslation } from "../hooks/useTranslation";

export default function TechSection() {
    const { t } = useTranslation();

    useEffect(() => {
        const elements = document.querySelectorAll(".tilt-card");
        VanillaTilt.init(elements, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.4,
            scale: 1.05,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        draggable: true,
        arrows: false,
    };

    const techs = t("tech.items");

    return (
        <section
            id="tech"
            className="min-h-screen bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 px-6 flex flex-col items-center"
        >
            <h2
            className="text-4xl font-lobster mb-10 text-indigo-400"
            data-aos="fade-up"
        >
            {t("tech.title")}
        </h2>

            <Slider {...settings} className="max-w-6xl w-full">
                {techs.map((tech, index) => (
                    <div
                    key={index}
                    className="tilt-card relative bg-deepNavy p-6 rounded-2xl shadow-md border border-indigo-800 hover:border-indigo-400 transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from indigo-800 to indigo-400 flex items-center justify-center shadow-lg overflow-hidden">
                            <img 
                                src={`/assets/techs/${tech.name.toLowerCase()
                                    .replace(/[^a-z0-9]/g, "")}.png`}
                                alt={tech.name}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-indigo-300 mb-2">{tech.name === "CSharp" ? "C#" : tech.name}</h3>
                        <p className="text-gray-400 text-sm">{tech.desc}</p>
                    </div>

                    {/* Efeito de brilho */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-tr from-indigo-500/20 to transparent blur-md"></div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}