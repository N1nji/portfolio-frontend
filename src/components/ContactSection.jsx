import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";
import { FiSend } from "react-icons/fi";

export default function ContactSection() {
  const { t } = useTranslation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(`${BASE_URL}/api/contact`, formData);
      setStatus({ type: "success", message: t("contact.success") || res.data.message });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setStatus({ 
        type: "error", 
        message: err.response?.data?.error || t("contact.error") || "Erro ao enviar." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Estrelas de fundo */}
      <StarsBackground id="particles-contact" count={20} />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl font-lobster mb-4 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Card do Formulário */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <label className="text-sm font-medium text-gray-400 mb-2 ml-1">
                  {t("contact.firstName")}
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-sm font-medium text-gray-400 mb-2 ml-1">
                  {t("contact.lastName")}
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2 ml-1">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-400 mb-2 ml-1">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="..."
                className="p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
            </div>

            {/* Botão de Envio Animado */}
            <button
              type="submit"
              disabled={loading}
              className={`group relative flex items-center justify-center gap-2 py-4 px-8 rounded-full font-bold transition-all duration-300 ${
                loading 
                ? "bg-gray-600 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
              }`}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {t("contact.button")}
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Mensagens de Feedback */}
          {status.message && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-6 text-center text-sm font-medium ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}