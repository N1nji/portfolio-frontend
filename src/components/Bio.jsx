import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

const socialLinks = [
  { href: "https://discord.com/users/n1njii", icon: <FaDiscord size={28} />, color: "#5865F2" },
  { href: "https://www.linkedin.com/in/pedrofelipe-n1", icon: <FaLinkedin size={28} />, color: "#0A66C2" },
  { href: "https://x.com/n1njimilanesa", icon: <FaXTwitter size={28} />, color: "#d1d5db" },
  { href: "https://github.com/N1nji", icon: <FaGithub size={28} />, color: "#ffffff" },
];

export default function Bio() {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-midnightBlue to-deepNavy text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl font-lobster mb-6">{t("bio.title")}</h2>
        <p className="text-lg text-gray-300">{t("bio.description")}</p>

        <div className="flex gap-6 mt-6 justify-center">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: link.color }}
              className="text-moonlightGray transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1 } }}
        className="mt-12 flex justify-center"
      >
        <div className="w-[250px] h-[250px] md:w-[500px] md:h-[300px] bg-deepNavy/60 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden border border-white/5">
          <img src="assets/misterkitty.png" alt="Mister Kitty" className="object-contain w-full h-full" />
        </div>
      </motion.div>
    </section>
  );
}