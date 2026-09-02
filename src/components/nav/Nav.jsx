import React, { useEffect, useState } from 'react';
import './nav.css';
import { Sun, Moon } from '../shared/Icons';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
];

const Nav = ({ theme, toggleTheme }) => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    const onScroll = () => {
      const bottom = hero ? hero.getBoundingClientRect().bottom : -1;
      setSolid(bottom < 72);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav_inner container">
        <a href="#top" className="nav_brand" aria-label="Abhyaung Havale, back to top">
          Abhyaung<span className="nav_star" aria-hidden="true">✳</span>
        </a>

        <nav className="nav_links" aria-label="Primary">
          {links.map((l, i) => (
            <a key={l.href} href={l.href}>
              {l.label}
              {i < links.length - 1 && <span className="nav_comma" aria-hidden="true">,</span>}
            </a>
          ))}
        </nav>

        <div className="nav_actions">
          <a href="#contact" className="nav_cta">Get in touch</a>
          <button
            type="button"
            className="nav_theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
