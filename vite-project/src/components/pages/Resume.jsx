const styles = {
  h1: {
    margin: 20,
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    textAlign: 'center',
  },
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
      <h1 style={styles.h1}>Resume</h1>
      <div style={styles.content}>
        <div style={styles.paragraph}>
          <p>
            These are the technologies that I have learned during the bootcamp:
          </p>
          <div style={styles.paragraphWithBackground}>
            <h5>Frontend:</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
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
