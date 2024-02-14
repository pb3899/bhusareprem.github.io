import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Premkumar Bhusare</h1>
        <h2>Cybersecurity Engineer</h2>
      </header>
      <section className="projects">
        <h3>Projects</h3>
        <div className="project">
          <h4>Decentralized Social Media</h4>
          <p>A twitter like platform made completely using decentralized server.</p>
        </div>
        <div className="project">
          <h4>Digitization of Gold Finance Using Block Chain Technology</h4>
          <p>Consortium Blockchain, Cryptography.</p>
        </div>
        <div className="project">
          <h4>Diabetes Prediction Using Machine Learning Algorithms</h4>
          <p>The project predicts the onset of diabetes in a person based on the relevant medical details collected.</p>
        </00>
      </section>
      <section className="publications">
        <h3>Publications</h3>
        <div className="publication">
          <h4>Decentralized Social Media</h4>
          <p>Authors:PremKumar Bhusare (first); Bhanu Maneesh Reddy Mannem; Annapurani Panaiyappan K</p>
          <p>June 2023</p>
          <p>IEEE 2nd International Conference on Vision Towards Emerging Trends in Communication and Networking Tech-nologies</p>
          <p>DOI: 10.1109/ViTECoN58111.2023.10157136</p>
        </div>
      </section>
      <section className="work-experience">
        <h3>Work Experience</h3>
        <div className="experience">
          <h4>Teaching Assistant</h4>
          <p>Supervised by Dr. V. Hemamalini</p>
          <p>Course:Security Governance Risk and Compliance</p>
          <p>July 2022-Dec 2022</p>
        </div>
      </section>
      <section className="certifications">
        <h3>Certifications</h3>
        <div className="certification">
          <h4>Cybersecurity Awareness training by Amazon Amazon</h4>
          <p>This training helps to find and act on common security risks.</p>
        </div>
        <div className="certification">
          <h4>Web Security Bug Bounty Udemy</h4>
          <p>Fundamentals of Red Hat Enterprise Linux Coursera</p>
        </div>
        <div className="certification">
          <h4>Introduction to Cybersecurity Tools Cyber Attacks by IBM Coursera</h4>
          <p>Introduction to Cyber Attacks by New York University Coursera</p>
        </div>
      </section>
      <section className="achievements">
        <h3>Achievements</h3>
        <div className="achievement">
          <h4>Merit-based Scholarship</h4>
          <p>Gained a Merit-based Scholarship for one year in my undergraduate program.</p>
        </div>
        <div className="achievement">
          <h4>Committee Member in MILAN(University festival) Organization</h4>
          <p>Appointed as a committee member in MILAN(University festival) Organization.</p>
        </div>
      </section>
    </div>
  );
}

export default App;