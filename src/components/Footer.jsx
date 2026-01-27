import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const { t, lang } = useTranslation();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            setStatus("error");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch(`${BASE_URL}/api/newsletter`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim() }),
            });

            if (!res.ok) throw new Error();

            setStatus("success");
            setEmail("");
        } catch (err) {
            setStatus("error");
        } finally {
            setTimeout(() => setStatus(""), 4500);
        }
    };

    return (
        <footer className="relative z-10 text-white text-center overflow-hidden py-20 px-6 -mt-20">
            {/* FUNDO COM GRADIENTE E CLIPPATH */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-midnightNavy to-black z-0" 
                style={{
                    clipPath: "polygon(0 17%, 100% 0, 100% 100%, 0 100%)",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-md mx-auto"
            >
                {/* BRANDING */}
                <div className="mb-8 opacity-50 hover:opacity-100 transition-opacity">
                     <span className="text-2xl font-lobster tracking-widest uppercase">N1S1 Games</span>
                </div>

                <h2
                    className="text-3xl md:text-4xl font-black mb-3 uppercase tracking-tighter"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_title") }}
                />
                <p
                    className="text-xs md:text-sm font-bold opacity-70 mb-8 uppercase tracking-[0.2em]"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_desc") }}
                />

                {/* FORMULÁRIO ESTILIZADO */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto mb-8 border border-white/20 rounded-xl overflow-hidden focus-within:border-indigo-400 transition-colors shadow-2xl"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("footer.newsletter_placeholder")}
                        className="px-6 py-4 text-white bg-white/5 w-full focus:outline-none placeholder:text-white/30 text-sm"
                        aria-label={t("footer.newsletter_placeholder")}
                    />

                    <button
                        type="submit"
                        className="bg-white text-black px-8 py-4 font-black transition-all hover:bg-indigo-400 active:scale-95 disabled:opacity-50 uppercase text-sm min-w-[140px]"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "..." : (lang === "pt" ? "Enviar" : "Submit")}
                    </button>
                </form>

                {/* FEEDBACK STATUS */}
                <div className="h-6 mb-8">
                    {status === "success" && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
                            {t("footer.success_message")}
                        </motion.p>
                    )}
                    {status === "error" && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-400 text-xs font-bold uppercase tracking-widest">
                            {t("footer.error_message")}
                        </motion.p>
                    )}
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex flex-col items-center gap-6 mt-4">
                    <div className="flex gap-8 text-2xl">
                        {[
                            { icon: <FaGithub />, link: "https://github.com/N1nji" },
                            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/pedrofelipe-n1" },
                            { icon: <FaDiscord />, link: "https://discord.com/users/n1njii" },
                            { icon: <FaXTwitter />, link: "https://x.com/n1njimilanesa" },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="text-white/60 hover:text-white transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 w-full">
                        <p
                            className="text-[9px] font-bold opacity-40 uppercase tracking-[0.3em]"
                            dangerouslySetInnerHTML= {{
                                __html: t("footer.rights").replace("{year}", new Date().getFullYear()),
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}