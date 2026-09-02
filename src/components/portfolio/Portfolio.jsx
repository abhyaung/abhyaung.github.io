import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './portfolio.css';
import Menu from './projectsData';
import Reveal from '../shared/Reveal';
import { Arrow } from '../shared/Icons';

const categories = ['All', 'AI & ML', 'Full-Stack', 'Backend', 'Front-End', 'Android'];

const tone = { 'AI & ML': 'ai', 'Full-Stack': 'full', Backend: 'back', 'Front-End': 'front', Android: 'android' };

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const items = active === 'All' ? Menu : Menu.filter((p) => p.category === active);

  return (
    <section className="work section" id="work">
      <div className="container">
        <Reveal className="section_head">
          <h2 className="section_title">Selected work</h2>
          <p className="section_lead">
            Thirteen projects across AI, full-stack and backend work. Where there is a live demo it is linked;
            every project links to its source on GitHub.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="work_filters" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`work_filter ${active === c ? 'work_filter--on' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div className="work_grid" layout>
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="work_card"
              >
                <a
                  href={p.demo || p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work_thumb work_thumb--${tone[p.category] || 'ai'}`}
                  aria-label={`${p.title}: open ${p.demo ? 'live demo' : 'source code'}`}
                >
                  <img src={p.image} alt="" loading="lazy" />
                </a>
                <div className="work_body">
                  <div className="work_titles">
                    <h3 className="work_title">{p.title}</h3>
                    <span className="work_cat">{p.category}</span>
                  </div>
                  <p className="work_desc">{p.description}</p>
                  <p className="work_links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo <Arrow /></a>
                    )}
                    <a href={p.link} target="_blank" rel="noopener noreferrer">Source <Arrow /></a>
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
