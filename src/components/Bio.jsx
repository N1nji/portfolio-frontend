import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6"; // 👈 Import dos ícones

export default function Bio() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-midnightBlue to-deepNavy text-white"
    >
      <div className="max-w-4xl text-center space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-lobster mb-6">{t("bio.title")}</h2>

        <p
          className="text-lg text-gray-300"
          dangerouslySetInnerHTML={{ __html: t("bio.description") }}
        />

        {/* 🔗 Redes sociais */}
        <div className="flex gap-6 mt-6 justify-center">
          <motion.a
            href="https://discord.com/users/n1njii"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#5865F2" }}
            transition={{ duration: 0.3 }}
            className="text-moonlightGray hover:text-[#5865F2] transition"
          >
            <FaDiscord size={28} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/pedrofelipe-n1"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            transition={{ duration: 0.3 }}
            className="text-moonlightGray hover:text-[#0A66C2] transition"
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="https://x.com/n1njimilanesa"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#d1d5db" }}
            transition={{ duration: 0.3 }}
            className="text-moonlightGray hover:text-gray-200 transition"
          >
            <FaXTwitter size={28} />
          </motion.a>

          <motion.a
            href="https://github.com/N1nji"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            transition={{ duration: 0.3 }}
            className="text-moonlightGray hover:text-white transition"
          >
            <FaGithub size={28} />
          </motion.a>
        </div>
      </div>

      {/* 🐾 Imagem Mister Kitty */}
      <div className="mt-12 flex justify-center" data-aos="fade-up">
        <div className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[650px] md:h-[370px] bg-deepNavy/60 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
          <img
            src="assets/misterkitty.png"
            alt="Mister Kitty"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

    </section>
  );
}
