// src/components/Contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => (
  <section className="contact container section" id="contact">
    <h2 className="section_title">Get In Touch</h2>
    <div className="contact_container grid">
      <div className="contact_info">
        <h3 className="contact_title">Let's talk about everything!</h3>
        <p className="contact_details">
          Don't like forms? Email me at{' '}
          <a href="mailto:abhyaungdeepak.havale@pace.edu">
            abhyaungdeepak.havale@pace.edu
          </a>
        </p>
      </div>

      {/* point action to your Formspree endpoint */}
      <form
        action="https://formspree.io/f/mblowqqb"
        method="POST"
        className="contact_form"
      >
        <div className="contact_form-group">
          <div className="contact_form-div">
            <input
              type="text"
              name="name"
              className="contact_form-input"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contact_form-div">
            <input
              type="email"
              name="email"
              className="contact_form-input"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="contact_form-div">
          <input
            type="text"
            name="subject"
            className="contact_form-input"
            placeholder="Enter your subject"
            required
          />
        </div>

        <div className="contact_form-div contact_form-area">
          <textarea
            name="message"
            className="contact_form-input"
            placeholder="Enter your message"
            rows="6"
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
