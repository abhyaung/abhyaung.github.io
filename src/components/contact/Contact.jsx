import React, { useState } from 'react';
import './contact.css';
import Reveal from '../shared/Reveal';
import { Arrow, Copy, Check, Github, Linkedin, Mail } from '../shared/Icons';

const EMAIL = 'abhyaung@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact_grid">
        <div>
          <Reveal>
            <h2 className="section_title contact_title">Get in touch</h2>
            <p className="section_lead">
              Open to full-time roles and contract work. Email is the quickest way to reach me; I usually reply
              within a day.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="contact_links">
            <button type="button" className="contact_link" onClick={copy}>
              <Mail /> {EMAIL} {copied ? <Check /> : <Copy />}
            </button>
            <a href="https://github.com/abhyaung" target="_blank" rel="noopener noreferrer" className="contact_link">
              <Github /> github.com/abhyaung <Arrow />
            </a>
            <a href="https://linkedin.com/in/abhyaunghavale" target="_blank" rel="noopener noreferrer" className="contact_link">
              <Linkedin /> linkedin.com/in/abhyaunghavale <Arrow />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form action="https://formspree.io/f/mblowqqb" method="POST" className="contact_form">
            <div className="contact_row">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
            </div>
            <label className="field">
              <span>Subject</span>
              <input type="text" name="subject" required />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit" className="btn contact_submit">Send message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
