import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
// import jumbotron
// import card
// import footer
// import css for images


const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Connect with Me" subtitle="Contact and links" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../public/images/email.png" text="" />
        <Card source="../public/images/github.png" text={<a href="https://github.com/Valkimani" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../public/images/linkedin.png" text={<a href="https://www.linkedin.com/in/val-kimani-/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
        //   source="resume.png"
          text={
            <React.Fragment>
              <a href="#resumepdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>
              <a href="#resumepdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faDownload} /></button></a>
            </React.Fragment>
          }
        />
        <Card source="../public/images/cellphone.png" text="470 839 5079" />
      </div>
    </div>
    <Footer />
  </div>
);
export default App;
