import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LatestProjects from './components/LatestProjects';
import AnimatedBackground from './components/AnimatedBackground';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans transition-colors duration-300 relative">
      <AnimatedBackground theme={theme} />
      <div className="relative z-10"> {/* <-- WRAP CONTENT */}
      <Navbar />
      <main  className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LatestProjects />
        <Contact />
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;