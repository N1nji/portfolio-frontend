import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Bio() {
  const { t } = useTranslation();

  const socialLinks = [
    { href: "https://discord.com/users/n1njii", icon: <FaDiscord size={28} />, color: "#5865F2" },
    { href: "https://www.linkedin.com/in/pedrofelipe-n1", icon: <FaLinkedin size={28} />, color: "#0A66C2" },
    { href: "https://x.com/n1njimilanesa", icon: <FaXTwitter size={28} />, color: "#d1d5db" },
    { href: "https://github.com/N1nji", icon: <FaGithub size={28} />, color: "#ffffff" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent text-white overflow-hidden"
    >
      {/* Luz de fundo sutil (opcional): 
          Ela é azul com muita transparência (10%), então vai criar uma "aura" 
          sobre as suas estrelas sem escondê-las.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-midnightBlue to-deepNavy rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center space-y-8" data-aos="fade-up">
        {/* Título com brilho sutil */}
        <h2 className="text-4xl md:text-5xl font-lobster mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {t("bio.title")}
        </h2>

        <p
          className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("bio.description") }}
        />

        {/* Redes sociais com efeito de vidro (combina muito com espaço/estrelas) */}
        <div className="flex gap-5 mt-8 justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-white/20 hover:bg-white/10 transition-all shadow-xl text-moonlightGray"
              style={{ '--hover-color': link.color }}
            >
              <div className="hover:text-[var(--hover-color)] transition-colors duration-300">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 🐾 Container Mister Kitty com animação de flutuação */}
      <div className="mt-16 flex justify-center relative z-10" data-aos="fade-up">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          {/* Brilho tipo "névoa espacial" atrás do gatinho */}
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
          
          <div className="relative w-[280px] h-[280px] md:w-[600px] md:h-[350px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              src="assets/misterkitty.png"
              alt="Mister Kitty"
              className="object-contain w-full h-full p-4 transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}