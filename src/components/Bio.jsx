import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Bio() {
  const { t } = useTranslation();

  // Centralizei os dados para facilitar a manutenção, mas a estrutura do JSX segue a sua
  const socialLinks = [
    { href: "https://discord.com/users/n1njii", icon: <FaDiscord size={28} />, color: "#5865F2" },
    { href: "https://www.linkedin.com/in/pedrofelipe-n1", icon: <FaLinkedin size={28} />, color: "#0A66C2" },
    { href: "https://x.com/n1njimilanesa", icon: <FaXTwitter size={28} />, color: "#d1d5db" },
    { href: "https://github.com/N1nji", icon: <FaGithub size={28} />, color: "#ffffff" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-midnightBlue to-deepNavy text-white overflow-hidden"
    >
      {/* Efeito de luz de fundo (Glow) para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center space-y-8" data-aos="fade-up">
        {/* Título com leve gradiente para destaque */}
        <h2 className="text-4xl md:text-5xl font-lobster mb-6 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
          {t("bio.title")}
        </h2>

        <p
          className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("bio.description") }}
        />

        {/* Redes sociais com Glassmorphism no hover */}
        <div className="flex gap-5 mt-8 justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all shadow-xl text-moonlightGray"
              style={{ '--hover-color': link.color }} // Variável CSS para o hover
            >
              <div className="hover:text-[var(--hover-color)] transition-colors duration-300">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 🐾 Container Mister Kitty com efeito de elevação */}
      <div className="mt-16 flex justify-center relative z-10" data-aos="fade-up">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          {/* Brilho externo na imagem */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-[280px] h-[280px] md:w-[600px] md:h-[350px] bg-deepNavy/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
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