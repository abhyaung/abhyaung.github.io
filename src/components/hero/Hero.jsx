import React, { useState } from 'react';
import './hero.css';
import Typewriter from './Typewriter';
import Me from '../../assets/hero-cutout.webp';
import { Copy, Check, Download, Arrow } from '../shared/Icons';

const EMAIL = 'abhyaung@gmail.com';

const phrases = [
  'I build software for home-services businesses at Built By The Trades.',
  'I own Goose, our AI call-intelligence product for field technicians.',
  'Before that: a year of trade-processing microservices for Northern Trust.',
  'On the side: local RAG engines, a BERT threat classifier, a Dunkin’ dashboard.',
];

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="hero" id="top">
      <div className="hero_inner container">
        <div className="hero_copy">
          <h1 className="hero_name">Hey there, I’m Abhyaung Havale.</h1>
          <p className="hero_meta">Software Developer &middot; M.S. Computer Science, Pace University</p>

          <p className="hero_line">
            <Typewriter phrases={phrases} />
          </p>

          <div className="hero_actions">
            <a href="#work" className="btn">See my work <Arrow /></a>
            <a
              href={`${process.env.PUBLIC_URL}/Abhyaung_Havale_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Resume (PDF) <Download />
            </a>
            <button type="button" className="btn btn--outline hero_email" onClick={copyEmail}>
              <span className="hero_email-addr">{EMAIL}</span>
              {copied ? <Check /> : <Copy />}
              <span className="hero_email-toast" aria-live="polite">{copied ? 'Copied' : ''}</span>
            </button>
          </div>
        </div>

        <div className="hero_figure">
          <img src={Me} alt="Abhyaung Havale" className="hero_img" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
