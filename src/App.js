import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';


const App = () => {
  return (
    <div>
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
}

export default App
