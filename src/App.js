import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/shared/Footer';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      <Nav theme={theme} toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
