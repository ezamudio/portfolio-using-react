    import React, { useState } from 'react';
    import Snoopy from '../pages/images/Snoopy.jpeg'

    const styles = {
      container: {
        textAlign: "center",
        margin: "auto",
        marginTop: "50px",
        background: '#f5f5f5',
      },
      form: {
        display: "inline-block",
        textAlign: "left",
      },
      inputGroup: {
        margin: "auto",
        width: "50%",
        textAlign: "center"
      },
      paragraph: {
        marginTop: "50px",
        textAlign: "justify",
        marginLeft: "100px",
        marginRight: "100px",
        background: '#f5f5f5',
      },
      image: {
        maxWidth: '25%',
        height: 'auto',
        marginBottom: 20,
        borderRadius: 10,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
        display: "block",
        margin: "auto",
        marginTop: "30px"
      },
      
    };

    function Contact() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      const handleInputChange = (event) => {
        if (event.target.name === "name") {
          setName(event.target.value);
        } else if (event.target.name === "email") {
          setEmail(event.target.value);
        }
          else if (event.target.name === "message"){
            setMessage(event.target.value);
          }
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message){
          alert("Please fill out all the fields");
          return;
        }
        alert("Please check the console");
        console.log(`Submitted Name: ${name} and email ${email} and ${message}` );
      };

      return (
        <div>
        <img src= {Snoopy} alt="Picture" style={styles.image} />
          <div style={styles.container}>
          <p>If you want to stay connected with me, please feel free to leave your contact information below. You can provide your name, email address, and a message, and I will get back to you as soon as possible. I'm always happy to hear from people who share my passion for technology and programming, and I'm open to discussing ideas, projects, and collaborations. So whether you have a question, a suggestion, or just want to say hello, don't hesitate to reach out. I look forward to hearing from you!</p>
          <p></p>
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <input value={name} name="name" onChange={handleInputChange} type="text" placeholder="Full Name" />
              <p></p>
              <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email"/>
              <p></p>
              <textarea value={message} name="message" onChange={handleInputChange} className="form-control" aria-label="With textarea" placeholder="Please write a message" rows="10" cols="100"></textarea>
              <p></p>
              <button type="button" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      );
    }

    export default Contact;
