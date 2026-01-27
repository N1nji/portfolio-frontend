import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
    };

    const handleNavLinkClick = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { name: t("header.home"), href: "#home", isHome: true },
        { name: t("header.about"), href: "#about" },
        { name: t("header.startup"), href: "#startup" },
        { name: t("header.team"), href: "#team" },
        { name: t("header.tech"), href: "#tech" },
        { name: t("header.projects"), href: "#projects" },
        { name: t("header.contact"), href: "#contact" },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-deepNavy/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* LOGO - Removido a tag <section> daqui de dentro */}
                <div 
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={scrollToTop}
                >
                    <img
                        src="assets/Logo-N1S1Games.png"
                        alt="N1S1 Games Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg font-bold font-poppins text-white leading-none">
                            Pedro Felipe
                        </span>
                        <span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">
                            N1S1 Games
                        </span>
                    </div>
                </div>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={link.isHome ? (e) => { e.preventDefault(); scrollToTop(); } : undefined}
                            className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 group"
                        >
                            {link.name}
                            {/* Linha animada no hover */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <div className="ml-4 pl-4 border-l border-white/10">
                        <LanguageSwitcher />
                    </div>
                </nav>

                {/* BOTÃO MOBILE */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            {/* MENU MOBILE */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-midnightBlue border-t border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={link.isHome ? (e) => { e.preventDefault(); scrollToTop(); } : handleNavLinkClick}
                                    className="text-xl font-lobster text-gray-300 hover:text-indigo-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}