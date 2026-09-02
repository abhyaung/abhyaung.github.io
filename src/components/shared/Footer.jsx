import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer_inner">
      <span>© {new Date().getFullYear()} Abhyaung Havale</span>
      <a href="#top" className="footer_top">Back to top</a>
    </div>
  </footer>
);

export default Footer;
