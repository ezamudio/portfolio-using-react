import React, { useState } from 'react';

const styles = {

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  paragraph: {
    borderRadius: 10,
    padding: 20,
  },
  paragraphWithBackground: {
    background: '#f5f5f5',
  },
};

export default function Resume() {
  return (
    <div>
      <div style={styles.content}>
        <div style={styles.paragraph}>
          <p>
            Here are the technologies I have used:
          </p>
          <div style={styles.paragraphWithBackground}>
            <h5>Frontend:</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React.js</li>
            </ul>
            <h5>Backend:</h5>
            <ul>
              <li>Express</li>
              <li>Database Theory</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Heroku</li>
              <li>Java</li>
              <li>Git</li>
              <li>MERN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
