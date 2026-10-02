import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./commponents/layout/Navbar";
import Hero from "./commponents/sections/Hero";
import About from "./commponents/sections/About";
import Skills from "./commponents/sections/Skills";
import Projects from "./commponents/sections/Projects";
import Journey from "./commponents/sections/Journey";
import Contact from "./commponents/sections/Contact";
import Footer from "./commponents/layout/Footer";

import PortfolioIntro from "./commponents/intro/PortfolioIntro";

function App() {
  const [introDone, setIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!introDone && (
          <PortfolioIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        style={{
          pointerEvents: introDone ? "auto" : "none",
        }}
      >
        <Navbar />

        <main className="min-h-screen">
          <Hero introDone={introDone} />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}

export default App;