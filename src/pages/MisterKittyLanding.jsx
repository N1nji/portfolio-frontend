import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

const MisterKittyLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-midnightBlue to-deepNavy text-white overflow-hidden">
      {/* 🐱 HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.img
          src="/assets/misterkitty/logo.png"
          alt="Mister Kitty Logo"
          className="w-64 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Uma Aventura Gatotástica
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Explore, descubra e encontre o caminho de volta para casa em uma
          aventura emocionante e cheia de surpresas!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://seu-link-aqui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-3 px-8 rounded-full transition"
          >
            Jogar Agora
          </a>
        </motion.div>
      </section>

      {/* 🎮 TRAILER / GAMEPLAY */}
      <section className="flex flex-col items-center py-16 px-4 bg-gradient-to-r from-midnightBlue to-deepNavy backdrop-blur-sm">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-500">
          Gameplay
        </h2>
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-cyan-700/40">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EM_BREVE"
            title="Mister Kitty Gameplay"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 🌎 SOBRE O JOGO */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-400">
          Sobre o Jogo
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Mister Kitty é um jogo Metroidvania que acompanha um pequeno gato
          perdido em busca do caminho de volta para casa. Cada fase revela novos
          desafios, segredos e momentos emocionantes que colocam à prova a
          coragem e determinação do nosso herói felino.
        </p>
      </section>

      {/* 📸 GALERIA */}
      <section className="py-20 px-6 bg-gradient-to-r from-midnightBlue to-deepNavy text-center">
        <h2 className="text-3xl font-semibold mb-10 text-indigo-400">
          Galeria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"].map(
            (img, i) => (
              <motion.img
                key={i}
                src={`/assets/misterkitty/gallery/${img}`}
                alt={`Screenshot ${i + 1}`}
                className="rounded-xl shadow-lg border border-cyan-800/30 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default MisterKittyLanding;
