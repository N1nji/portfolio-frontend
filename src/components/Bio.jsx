import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
// Importações do Three.js
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

export default function Bio() {
  const { t } = useTranslation();

  const socialLinks = [
    { href: "https://discord.com/users/n1njii", icon: <FaDiscord size={28} />, color: "#5865F2" },
    { href: "https://www.linkedin.com/in/pedrofelipe-n1", icon: <FaLinkedin size={28} />, color: "#0A66C2" },
    { href: "https://x.com/n1njimilanesa", icon: <FaXTwitter size={28} />, color: "#d1d5db" },
    { href: "https://github.com/N1nji", icon: <FaGithub size={28} />, color: "#ffffff" },
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent text-white overflow-hidden">
      
      {/* CONTEÚDO DE TEXTO (UI) */}
      <div className="relative z-10 max-w-4xl text-center space-y-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-lobster mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {t("bio.title")}
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: t("bio.description") }}
        />

        <div className="flex gap-5 mt-8 justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-white/20 transition-all text-moonlightGray"
              style={{ '--hover-color': link.color }}
            >
              <div className="hover:text-[var(--hover-color)] transition-colors duration-300">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 🐾 CONTAINER 3D (Substituindo a imagem do Mister Kitty) */}
      <div className="mt-12 w-full h-[350px] md:h-[500px] relative z-10 cursor-grab active:cursor-grabbing" data-aos="fade-up">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          {/* Luzes para o objeto 3D aparecer */}
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

          {/* O Objeto 3D - Uma esfera orgânica que distorce (Efeito Cyberpunk) */}
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1.4, 100, 100]} scale={1}>
              <MeshDistortMaterial
                color="#1e3a8a" // Cor que combina com Midnight Blue
                attach="material"
                distort={0.4} // Grau de distorção (parece uma gelatina/energia)
                speed={4}     // Velocidade da animação
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>

          {/* Se quiser que o usuário possa girar o objeto */}
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Legenda opcional flutuando sobre o 3D */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-50 text-xs uppercase tracking-widest">
           Interage com o 3D
        </div>
      </div>

    </section>
  );
}