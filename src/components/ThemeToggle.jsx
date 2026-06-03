import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    className="theme_toggle"
    onClick={toggleTheme}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
  </button>
);

export default ThemeToggle;
