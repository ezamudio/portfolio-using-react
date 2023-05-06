  import React from 'react';
  import PortfolioImage from '../pages/images/PortfolioImage.png'
  import PasswordGeneratorImage from '../pages/images/PasswordGenerator.png'
  import DynamicQuizImage from '../pages/images/DynamicQuiz.png'
  import NoteTakerImage from '../pages/images/NoteTaker.png'
  import BlogEditorImage from '../pages/images/BlogEditor.png'
  import PWAImage from '../pages/images/PWA.png'

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    card: {
      width: '30%',
      height: '500px',
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    content: {
      padding: '20px',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    link: {
      alignSelf: 'flex-end',
      marginBottom: '10px',
      marginLeft: "10px",
    },
    github: {
      alignSelf: 'flex-end',
      marginBottom: '10px',
      marginLeft: "10px",
    }
  };
  
  

  const Portfolio = () => {

    const projects = [
      {
        title: "Project Portfolio",
        description: "First project using HTML, CSS and Flexbox",
        image: PortfolioImage,
        link: "https://monteonfrank.github.io/Portfolio-Challenge-2/",
        github: "https://github.com/MonteonFrank/Portfolio-Challenge-2",
      },
      {
        title: "Password Generator",
        description: "Password generator using only javascript",
        image: PasswordGeneratorImage,
        link: "https://monteonfrank.github.io/Module-3-Password-Generator/",
        github: "https://github.com/MonteonFrank/Module-3-Password-Generator",
      },  
      {
        title: "Dynamic Quiz",
        description: "A dynamic quiz using only Javascript and using DOM elements",
        image: DynamicQuizImage,
        link: "https://monteonfrank.github.io/Module-3-Password-Generator/",
        github: "https://github.com/MonteonFrank/Test-your-knowledge-on-Basic-JavaScript---Bootcamp-Challente-4",
      },      
      {
        title: "Note Taker",
        description: "Note taker API (GET, POST, DELETE) and data storage",
        image: NoteTakerImage,
        link: "https://notetaker-fm1234.herokuapp.com/",
        github: "https://github.com/MonteonFrank/Challenge-11---Note-taker",
      },  
      {
        title: "Blog Editor",
        description: "Blog editor using authentication and MVC model",
        image: BlogEditorImage,
        link: "https://powerful-fjord-92631.herokuapp.com/",
        github: "https://github.com/MonteonFrank/Challege-14-CMS",
      },    
      {
        title: "Text Editor",
        description: "Text editor using PWA, Service Worker and Manifest",
        image: PWAImage,
        link: "https://aqueous-beyond-78963.herokuapp.com/",
        github: "https://github.com/MonteonFrank/PWA-Text-Editor",
      },    

    ];

    return (
<div className="container">
  <div className="row">
    {projects.map((project, index) => (
      <div className="col-sm-6 mb-4" key={index}>
        <div className="card">
          <img src={project.image} alt={project.title} style={styles.image} />  
          <div className="card-body text-center">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.link} className="btn btn-primary">View Project</a>
            <a href={project.github} className="btn btn-secondary">GitHub Repo</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    );
  };

  export default Portfolio;







