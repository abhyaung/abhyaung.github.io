import React from 'react';
import './resume.css';
import Reveal from '../shared/Reveal';
import { experience, education } from './resumeData';
import { Download } from '../shared/Icons';

const Group = ({ label, items }) => (
  <div className="cv_group">
    <h3 className="cv_label">{label}</h3>
    <ol className="cv_list">
      {items.map((it) => (
        <li key={it.id} className="cv_item">
          <span className="cv_year">{it.year}</span>
          <div className="cv_main">
            <h4 className="cv_title">{it.title}</h4>
            <p className="cv_org">{it.org}</p>
            <ul className="cv_desc">
              {it.desc.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const Resume = () => (
  <section className="cv section" id="experience">
    <div className="container cv_grid">
      <div className="cv_side">
        <Reveal>
          <h2 className="section_title">Experience</h2>
          <p className="section_lead cv_lead">
            Four years across banking, fintech and SaaS, plus a graduate degree focused on AI and distributed systems.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/Abhyaung_Havale_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Full resume (PDF) <Download />
          </a>
        </Reveal>
      </div>
      <Reveal className="cv_body">
        <Group label="Work" items={experience} />
        <Group label="Education" items={education} />
      </Reveal>
    </div>
  </section>
);

export default Resume;
