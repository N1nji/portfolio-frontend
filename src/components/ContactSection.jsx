import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "../hooks/useTranslation";

export default function ContactSection() {
  const { t } = useTranslation();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/contact`, formData);
      setStatus(res.data.message);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.response?.data?.error || "Erro ao enviar a mensagem!");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-deepNavy to-midnightBlue text-white py-20 px-6 flex flex-col items-center"
    >
      <h2
        className="text-4xl font-lobster mb-8 text-indigo-400 text-center"
        data-aos="fade-up"
      >
        {t("contact.title")}
      </h2>

      <form
        className="w-full max-w-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        {/* 🔹 Nome e Sobrenome */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="firstName" className="mb-2 font-semibold">
              {t("contact.firstName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 rounded-lg bg-deepNavy border border-gray-600 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label htmlFor="lastName" className="mb-2 font-semibold">
              {t("contact.lastName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 rounded-lg bg-deepNavy border border-gray-600 focus:outline-none focus:border-indigo-400"
            />
          </div>
        </div>

        {/* 🔹 Email */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="email">
            {t("contact.email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-deepNavy border border-gray-600 focus:outline-none focus:border-indigo-400"
          />
        </div>

        {/* 🔹 Mensagem */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold" htmlFor="message">
            {t("contact.message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-deepNavy border border-gray-600 focus:outline-none focus:border-indigo-400 resize-none"
          />
        </div>

        {/* 🔹 Botão */}
        <button
          type="submit"
          className="bg-indigo-400 hover:bg-indigo-500 text-black font-semibold py-3 px-6 rounded-full transition w-full sm:w-auto self-center"
        >
          {t("contact.button")}
        </button>
      </form>

      {status && <p className="mt-4 text-indigo-300 text-center">{status}</p>}
    </section>
  );
}
