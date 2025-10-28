import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header className="fixed top-0 left-0 w-full bg-deepNavy/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* LOGO + TEXTO */}
            <section id="home">
                <div 
                    className="flex items-center gap-3 cursos-pointer"
                    >
                        <img
                            src="assets/Logo-N1S1Games.png"
                            alt="N1S1 Games Logo"
                            className="w-14 h-14 cursor-pointer transition-transform duration-300 hover:scale-110"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            
                        />
                        <span className="text-xl font-poppins text-white">
                            Pedro Felipe | N1S1 Games
                        </span>
                    </div>
                </section>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8 text-white font-lobster">
                    <a href="#home" className="hover:text-cyan-400 transition">{t("header.home")}</a>
                    <a href="#about" className="hover:text-cyan-400 transition">{t("header.about")}</a>
                    <a href="#startup" className="hover:text-cyan-400 transition">{t("header.startup")}</a>
                    <a href="#team" className="hover:text-cyan-400 transition">{t("header.team")}</a>
                    <a href="#tech" className="hover:text-cyan-400 transition">{t("header.tech")}</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">{t("header.projects")}</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">{t("header.contact")}</a>

                    {/* DROPDOWN DE IDIOMA */}
                    <LanguageSwitcher />
                </nav>

                {/* BOTÃO MOBILE */}
                <motion.button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {isOpen ? "✖" : "☰"}
                </motion.button>
            </div> {/* ← aqui tava faltando fechar o div */}

            {/* MENU MOBILE */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden bg-deepNavy/90 px-6 py-4 flex flex-col gap-4 text-white shadow-lg"
                    >
                        <a href="#home" className="hover:text-cyan-400 transition">{t("header.home")}</a>
                        <a href="#about" className="hover:text-cyan-400 transition">{t("header.about")}</a>
                        <a href="#startup" className="hover:text-cyan-400 transition">{t("header.startup")}</a>
                        <a href="#team" className="hover:text-cyan-400 transition">{t("header.team")}</a>
                        <a href="#tech" className="hover:text-cyan-400 transition">{t("header.tech")}</a>
                        <a href="#projects" className="hover:text-cyan-400 transition">{t("header.projects")}</a>
                        <a href="#contact" className="hover:text-cyan-400 transition">{t("header.contact")}</a>

                        {/* OPÇÃO DE IDIOMA NO MOBILE */}
                        <LanguageSwitcher />
                    </motion.nav>
                )}
            </AnimatePresence> {/* ← e esse fechamento também */}
        </header>
    );
}
