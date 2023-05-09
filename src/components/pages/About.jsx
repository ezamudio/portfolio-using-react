import React from 'react';
import SnoopyImage from '../pages/images/MeandSnoopy.jpeg'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    maxWidth: '25%',
    height: 'auto',
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
  },
  
  paragraph: {
    background: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
  },
};

export default function About() {
  return (
    <div>
      <div style={styles.content}>
        <img src= {SnoopyImage} alt="Profile Picture" style={styles.image} />
        <div style={styles.paragraph}>
          <p>
          Hello there! My name is Francisco Monteon, and I am a Scrum Master with a passion for learning programming. 
          I have always been interested in technology, and I believe that programming is the perfect combination of logic and creativity. 
          Outside of work, I love to stay active by going to the gym to do weights or taking long walks with my dog Snoopy. 
          I also enjoy reading and keeping up with the latest trends in technology.
          </p>
          <p>
          One of the things that motivates me the most is the constant challenge of learning new things. 
          I believe that continuous learning is key to success, and I am always looking for opportunities to expand my knowledge and skills. 
          As a result, I am constantly exploring new programming languages and frameworks, as well as new tools and techniques.
          </p>
          <p>
          Thank you for taking the time to learn a little bit about me. 
          I am always looking to expand my network and meet new people who share my passion for technology and programming. 
          Please don't hesitate to reach out if you would like to connect!  
          </p>
        </div>
      </div>
    </div>
  );
}

