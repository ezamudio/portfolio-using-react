import React from 'react';
import githublogo from "./pages/images/githublogo.jpeg";
import linkedinlogo from "./pages/images/linkedinlogo.jpeg";

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    marginTop: '200px',
  },
  logo: {
    width: '40px',
    height: '40px',
    margin: '0 10px',
  },
};

const Footer = () => (
  <div style={styles.footer}>
    <p> Francisco Monteon</p>
    <a href="https://github.com/MonteonFrank?tab=repositories">
      <img src={githublogo} alt="Github" style={styles.logo} />
    </a>
    <a href="https://www.linkedin.com/in/francisco-javier-monteon-avila-25898a99/">
      <img src={linkedinlogo} alt="LinkedIn" style={styles.logo} />
    </a>
  </div>
);

export default Footer;

