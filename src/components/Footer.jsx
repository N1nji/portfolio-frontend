import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setStatus("error");
            return;
        }

        //VALIDAÇÃO SIMPLES
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setStatus("error");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch("/api/newsletter", {
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
        <footer
            className="relative z-10 text-white text-center overflow-hidden backdrop-blur-sm bg-black/40 border-t border-white/10 py-14 px-6"
            style={{
                clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
            }}
        >
            <div className="absolute -top-10 left-0 w-full h-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0,8)_0%,transparent_70%)]" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-md mx-auto"
            >
                <h2
                    className="text-2xl font-bold mb-2"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_title") }}
                />
                <p
                    className="text-sm opacity-80 mb-6"
                    dangerouslySetInnerHTML={{ __html: t("footer.newsletter_desc") }}
                />

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("footer.newsletter_placeholder")}
                        className="px-4 py-2 rounded-md text-black w-full sm:2-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        aria-label={t("footer.newsletter_placeholder")}
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md font-semibold transition flex items-center justify-center"
                        disabled={status === "loading"}
                        aria-busy={status === "loading"}
                    >
                        {status === "loading" ? "..." : "OK"}
                    </motion.button>
                </form>

                {status === "success" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm mt-3">
                        {t("footer.success_message")}
                    </motion.p>
                )}
                {status === "error" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-3">
                        {t("footer.error_message")}
                    </motion.p>
                )}

                <div className="flex flex-col items-center gap-4 mt-10">
                    <p className="text-sm opacity-80" dangerouslySetInnerHTML={{ __html: t("footer.title") }} />

                    <div className="flex gap-6 text-xl">
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
                                className="hover:text-indigo-400 transition-all"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    <p
                        className="text-xs opacity-50 mt-2"
                        dangerouslySetInnerHTML= {{
                            __html: t("footer.rights").replace("{year}", new Date().getFullYear()),
                        }}
                    />
                </div>
            </motion.div>
        </footer>
    );
}


                    
