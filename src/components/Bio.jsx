import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { FaDiscord, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
// 👇 NOVOS IMPORTS NECESSÁRIOS PARA O 3D RPG
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, ContactShadows, Float } from "@react-three/drei";

export default function Bio() {
  const { t } = useTranslation();

  // Mantive sua estrutura exata, apenas a envolvi nos componentes 3D
  return (
    <section
      id="about"
      // 👇 Mudei o bg para transparent e h-screen para o Canvas ocupar tudo
      className="h-screen w-full bg-transparent overflow-hidden"
    >
      {/* 👇 O MUNDO 3D COMEÇA AQUI */}
      <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
        {/* Luzes do ambiente RPG */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        {/* Controles para o usuário girar levemente a cena (sensação de jogo) */}
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />

        {/* 🛡️ O "PALCO" DO RPG (Chão Místico) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <cylinderGeometry args={[4, 3.5, 0.2, 64]} />
          <meshStandardMaterial
            color="#0f172a" // Azul bem escuro (Deep Navy)
            roughness={0.7}
            metalness={0.5}
          />
        </mesh>
        {/* Sombra de contato no chão para dar realismo */}
        <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={8} blur={2} />

        {/* 📜 O PAINEL DE UI FLUTUANTE (Seu Texto e Links) */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Placa escura atrás do texto (estilo "Stone Tablet") */}
          <mesh position={[0, 1.5, -0.5]}>
            <boxGeometry args={[5.5, 3.5, 0.1]} />
            <meshStandardMaterial color="#1e293b" transparent opacity={0.95} />

            {/* 👇 AQUI ESTÁ O SEU CONTEÚDO ORIGINAL SENDO RENDERIZADO DENTRO DO 3D */}
            <Html
              transform
              distanceFactor={2.5}
              position={[0, 0, 0.06]} // Levemente a frente da placa 3D
              className="w-[600px] p-4 text-center select-none pointer-events-auto"
            >
              {/* SUA DIV ORIGINAL DO TEXTO */}
              <div className="space-y-6 text-white">
                <h2 className="text-5xl font-lobster mb-6 drop-shadow-lg">{t("bio.title")}</h2>

                <p
                  className="text-xl text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t("bio.description") }}
                />

                {/* 🔗 Redes sociais (Funcionam normal dentro do 3D) */}
                <div className="flex gap-6 mt-6 justify-center">
                  <motion.a href="https://discord.com/users/n1njii" target="_blank" whileHover={{ scale: 1.2, color: "#5865F2" }} className="text-moonlightGray hover:text-[#5865F2] transition"><FaDiscord size={32} /></motion.a>
                  <motion.a href="https://www.linkedin.com/in/pedrofelipe-n1" target="_blank" whileHover={{ scale: 1.2, color: "#0A66C2" }} className="text-moonlightGray hover:text-[#0A66C2] transition"><FaLinkedin size={32} /></motion.a>
                  <motion.a href="https://x.com/n1njimilanesa" target="_blank" whileHover={{ scale: 1.2, color: "#d1d5db" }} className="text-moonlightGray hover:text-gray-200 transition"><FaXTwitter size={32} /></motion.a>
                  <motion.a href="https://github.com/N1nji" target="_blank" whileHover={{ scale: 1.2, color: "#ffffff" }} className="text-moonlightGray hover:text-white transition"><FaGithub size={32} /></motion.a>
                </div>
              </div>
            </Html>
          </mesh>
        </Float>

        {/* 🐾 O AVATAR DO MISTER KITTY (Como um Sprite 2D no mundo 3D) */}
        {/* Posicionado mais à frente e abaixo, como se estivesse no chão */}
        <Html
          transform
          distanceFactor={3.5}
          position={[0, -0.8, 2]}
          center
          className="pointer-events-none" // Para não atrapalhar o giro da câmera
        >
          {/* SUA DIV ORIGINAL DA IMAGEM (Removi a sombra e bg pois agora ele está no mundo 3D) */}
          <div className="w-[300px] h-[300px] flex items-center justify-center filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <img
              src="assets/misterkitty.png"
              alt="Mister Kitty"
              // Adicionei uma classe para ele parecer um "Paper Mario" em pé
              className="object-contain w-full h-full transform -rotate-x-12"
            />
          </div>
        </Html>

      </Canvas>
    </section>
  );
}