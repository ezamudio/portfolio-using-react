import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
};

const Footer = () => (
  <div style={styles.footer}>
    <p> Francisco Monteon</p>
  </div>
);

export default Footer;
