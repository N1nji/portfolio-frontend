import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function LanguageSwitcher() {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { lang, setLang } = useTranslation();

    useEffect(() => {
        // Detecta se é mobile
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const changeLanguage = (selectedLang) => {
        if (lang !== selectedLang) {
            setLang(selectedLang);
            localStorage.setItem("lang", selectedLang);
            window.location.reload();
        }
        setIsLangOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center justify-center gap-2 
                    ${isMobile ? "w-full text-sm py-2" : "px-3 py-2"}
                    bg-indigo-500 hover:bg-indigo-600 text-white 
                    rounded-full shadow-md transition`}
            >
                <Globe size={18} />
                {lang === "pt" ? "Português" : "English"}
            </button>

            {isLangOpen && (
                <div
                    className={`absolute ${isMobile ? "left-0 w-full mt-2" : "right-0 w-32 mt-2"}
                        bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-50`}
                >
                    <button
                        onClick={() => changeLanguage("pt")}
                        className="w-full text-left px-4 py-2 hover:bg-indigo-100 transition flex items-center gap-2"
                    >
                        🇧🇷 Português
                    </button>
                    <button
                        onClick={() => changeLanguage("en")}
                        className="w-full text-left px-4 py-2 hover:bg-indigo-100 transition flex items-center gap-2"
                    >
                        🇺🇸 English
                    </button>
                </div>
            )}
        </div>
    );
}
