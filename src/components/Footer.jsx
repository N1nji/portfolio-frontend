import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setStatus("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
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

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                console.error("newsletter err:", err);
                setStatus("error");
                return;
            }

            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setTimeout(() => {
                setStatus("");
            }, 4500);
        }
    };

    return (
        <footer className="relative z-10 text-white text-center overflow-hidden py-24 px-6 -mt-20">
            {/* FUNDO AZUL INCLINADO - O 'clipPath' cria o corte e o '-mt-20' acima puxa ele para cima do azul vazio */}
            <div 
                className="absolute inset-0 bg-[#0024ff] z-0" 
                style={{
                    clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-md mx-auto"
            >
                <h2
                    className="text-3xl font-black mb-2 uppercase tracking-tighter"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_title") }}
                />
                <p
                    className="text-sm font-bold opacity-90 mb-6 uppercase"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_desc") }}
                />

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 justify-center mb-8"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("footer.newsletter_placeholder")}
                        className="px-4 py-3 text-black w-full focus:outline-none border-none"
                        aria-label={t("footer.newsletter_placeholder")}
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-white text-black px-6 py-2 font-black transition flex items-center justify-center uppercase border-none"
                        disabled={status === "loading"}
                        aria-busy={status === "loading"}
                    >
                        {status === "loading" ? "..." : "Submit"}
                    </motion.button>
                </form>

                {status === "success" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-sm mt-3 font-bold bg-black/20 p-2">
                        {t("footer.success_message")}
                    </motion.p>
                )}
                {status === "error" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white text-sm mt-3 font-bold bg-black/20 p-2">
                        {t("footer.error_message")}
                    </motion.p>
                )}

                <div className="flex flex-col items-center gap-4 mt-10">
                    <div className="flex gap-6 text-2xl">
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
                                whileHover={{ scale: 1.2 }}
                                className="hover:text-black transition-all"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    <p
                        className="text-[10px] font-bold opacity-60 mt-2 uppercase tracking-widest"
                        dangerouslySetInnerHTML= {{
                            __html: t("footer.rights").replace("{year}", new Date().getFullYear()),
                        }}
                    />
                </div>
            </motion.div>
        </footer>
    );
}