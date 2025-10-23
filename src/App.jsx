import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import { useEffect } from "react";
import AOS from "aos";
import StartupSection from "./components/StartupSection";
import TeamSection from "./components/TeamSection";
import TechSection from "./components/TechSection";
import ProjectsSection from "./components/ProjectsSection";
import MisterKittyLanding from "./pages/MisterKittyLanding";
import ContactSection from "./components/ContactSection";
import LanguageSwitcher from "./components/LanguageSwitcher";
import StarsBackground from "./components/StarsBackground";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <>
      <Routes>
        {/* Rota principal (Home) */}
        <Route
          path="/"
          element={
            <div className="bg-deepNavy min-h-screen text-white">
              <StarsBackground />
              <Header />
              <Hero />
              <Bio />
              <StartupSection />
              <TeamSection />
              <TechSection />
              <ProjectsSection />
              <ContactSection />
              <Footer />
            </div>
          }
        />
          {/* Rota da landing do Mister Kitty */}
          <Route path="/misterkitty" element={<MisterKittyLanding />} />
        </Routes>
      </>
  );
}
