import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('portfolio-theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div>
      <ThemeToggle
        theme={theme}
        toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      <main className='main'>
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
