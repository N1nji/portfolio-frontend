import { Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { lang, setLang } = useTranslation();
    const dropdownRef = useRef(null);

    // Fechar o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (selectedLang) => {
        if (lang !== selectedLang) {
            localStorage.setItem("lang", selectedLang); // Salva primeiro
            window.location.reload(); // Recarrega tudo
        }
        setIsLangOpen(false);
    };
    

    const languages = [
        { code: "pt", label: "Português", flag: "🇧🇷" },
        { code: "en", label: "English", flag: "🇺🇸" }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Botão Principal */}
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
                <Globe size={18} className="text-indigo-400 group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-wider">
                    {lang}
                </span>
                <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} 
                />
            </button>

            {/* Menu Dropdown com Framer Motion */}
            <AnimatePresence>
                {isLangOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-40 bg-midnightBlue/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60]"
                    >
                        <div className="p-1">
                            {languages.map((item) => (
                                <button
                                    key={item.code}
                                    onClick={() => changeLanguage(item.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all rounded-xl ${
                                        lang === item.code 
                                        ? "bg-indigo-500/20 text-indigo-300" 
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    <span className="text-lg">{item.flag}</span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}