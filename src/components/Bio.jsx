import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import StarsBackground from "./StarsBackground";

export default function Bio() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-midnightBlue to-deepNavy text-white overflow-hidden"
    >
      {/* 1. Background com ID único */}
      <StarsBackground id="particles-bio" />

      {/* 2. Brilho decorativo de fundo */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 3. Conteúdo Envelopado (Z-10) */}
      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
        
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-lobster mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
            {t("bio.title")}
          </h2>

          <p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t("bio.description") }}
          />

          {/* 🔗 Redes sociais */}
          <div className="flex gap-8 mt-8 justify-center items-center">
            <motion.a
              href="https://discord.com/users/n1njii"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-[#5865F2] transition-colors"
              title="Discord"
            >
              <FaDiscord size={32} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pedrofelipe-n1"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-[#0A66C2] transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={32} />
            </motion.a>

            <motion.a
              href="https://x.com/n1njimilanesa"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
              title="X (Twitter)"
            >
              <FaXTwitter size={30} />
            </motion.a>

            <motion.a
              href="https://github.com/N1nji"
              target="_blank"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub size={32} />
            </motion.a>
          </div>
        </div>

        {/* 🐾 Imagem Mister Kitty */}
        <div 
          className="mt-16 relative group" 
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {/* Brilho atrás do Kitty */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
          
          <div className="relative w-[280px] h-[160px] sm:w-[400px] sm:h-[230px] md:w-[600px] md:h-[340px] bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden">
            <img
              src="assets/misterkitty.png"
              alt="Mister Kitty"
              className="object-contain w-full h-full p-4 transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Legenda sutil para o Mister Kitty */}
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-poppins">
            Partner in crime: Mister Kitty
          </p>
        </div>
      </div>
    </section>
  );
}