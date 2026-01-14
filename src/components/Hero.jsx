import { ReactTyped } from "react-typed";
import { useTranslation } from "../hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-deepNavy to-midnightBlue overflow-hidden px-4"
    >
      <div
        className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-deepNavy mb-6 flex items-center justify-center"
        data-aos="zoom-in"
      >
        <img
          src="assets/team/photo temp2.jpeg"
          className="w-full h-full object-cover rounded-full border-4 border-indigo-400 shadow-md select-none pointer-events-none"
        />
      </div>

      <h1
        className="text-4xl sm:text-5xl font-lobster text-white mb-3"
        data-aos="fade-up"
      >
        {t("hero.name")}
      </h1>

      <p
        className="text-lg sm:text-xl text-gray-300 max-w-sm sm:max-w-xl px-2"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <ReactTyped
          strings={t("hero.titles")}
          typeSpeed={60}
          backSpeed={40}
          loop
        />{" "}
        {t("hero.role")}{" "}
        <span className="text-indigo-400 font-poppins">
          {t("hero.company")}
        </span>.
      </p>
    </section>
  );
}
