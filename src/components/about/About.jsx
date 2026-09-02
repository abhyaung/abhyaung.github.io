import React from 'react';
import './about.css';
import Reveal from '../shared/Reveal';
import Grad from '../../assets/me-image-2.jpg';
import { Github } from '../shared/Icons';

const facts = [
  ['Currently', 'Software Developer, Built By The Trades (since June 2026)'],
  ['Owns', 'Goose, an AI call-intelligence product for field technicians'],
  ['Education', 'M.S. Computer Science, Pace University, 2025'],
  ['Based in', 'Jersey City, New Jersey. Fully remote.'],
];

const credentials = [
  {
    label: 'AWS Certified Cloud Practitioner',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/6a887880bc9a490c8d44d8a1926b19d0',
    img: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
  },
  {
    label: 'AWS Certified Solutions Architect, Associate',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/SWZGVR3CSBBEQ1WG',
    img: 'https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
  },
];

const About = () => (
  <section className="about section" id="about">
    <div className="container about_grid">
      <div className="about_left">
        <Reveal>
          <h2 className="section_title">About</h2>
        </Reveal>
        <Reveal delay={0.1} className="about_photo">
          <img src={Grad} alt="Abhyaung Havale at Pace University graduation, class of 2025" loading="lazy" />
        </Reveal>
        <p className="about_caption">Pace University commencement, May 2025.</p>
      </div>

      <div className="about_right">
        <Reveal>
          <p className="about_text about_text--lead">
            I’m a software developer at <strong>Built By The Trades</strong>, a product company building software for
            home-services businesses: HVAC, plumbing, roofing, garage doors, electrical.
          </p>
          <p className="about_text">
            I own Goose, our AI sales-coaching and call-intelligence product for field technicians, and work across the
            rest of the suite: ServiceDash (booking, dispatch and live technician tracking), TradeGames (technician
            leaderboards and leagues) and the internal tooling around them. In my first month I shipped the ServiceDash
            QA wave, twenty-four pull requests, and Goose passed external QA certification in August.
          </p>
          <p className="about_text">
            Before this I spent a year on trade-processing microservices for Northern Trust through Insight Nova
            Solutions, and two and a half years at Persistent Systems in Pune on a digital lending and payments
            platform. I finished an M.S. in Computer Science at Pace University in 2025; the capstone work was on
            local LLM inference and retrieval-augmented generation. I like systems that stay boring in production:
            clear APIs, sensible data models, good observability.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="about_facts">
            {facts.map(([k, v]) => (
              <div className="about_fact" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="about_creds">
            {credentials.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="about_cred">
                  <img src={c.img} alt="" loading="lazy" />
                  <span>{c.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`${process.env.PUBLIC_URL}/Abhyaung-MastersDegree.pdf`} target="_blank" rel="noopener noreferrer" className="about_cred">
                <span className="about_cred-mark">M.S.</span>
                <span>Master’s degree, Pace University</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/abhyaung" target="_blank" rel="noopener noreferrer" className="about_cred">
                <span className="about_cred-mark"><Github width={18} height={18} /></span>
                <span>github.com/abhyaung</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/abhyaunghavale" target="_blank" rel="noopener noreferrer" className="about_cred">
                <span className="about_cred-mark">in</span>
                <span>linkedin.com/in/abhyaunghavale</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
