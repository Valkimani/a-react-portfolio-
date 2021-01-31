import React from 'react';
import Navbar from './components/navbar'


const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From a Hotelier to a Developer." subtitle="Transitioning from serving clients to creating Clients as a software developer." />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="./Images/Val.png" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
       <div className="col-sm-12">
  <div className="pull-left"><img src="Images/VAL.png" alt="sunset">

  </img>
  <div className="pull-left">
</div>
<div>
</div>

  <h4 className="bio bio1">
        Before transitioning into web and software development, I worked in the Food and Beverage industry as an Intern in downtown Atlanta area. While in the hotel industry, I found myself enjoying the technical and computer driven aspects of the restaurant operations which lead me to pursue a career in tech. The same interest has lead me to pursue a Full stack Web Development certification at Georgia Tech.
        My customer service, hotel experience and tech support positions bring a fresh prospective to technical roles as it showcases my detailed oriented, organizational and problem solving while creating quality products through collaborative teamwork.
        in any job I perform. When I'm not helping clients out with issues over the phone and answering their emails, I spend time taking Latin dance classes, exercising and going for hikes. Valentine Kimani is a CRM technical support of a Real Estate company with experience troubleshooting
        platform issues, using different software’s. I specialize in HTML, CSS, JavaScript, and React on the front-end as well as Node
        and MySQL/Mongo on the back-end to create beautiful and secure applications. My priority is developing clear, high-quality code while cultivating
        a fun and encouraging workplace culture. I interested in a new challenge. 

        </h4>
      
    </div>
    </div>
    </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="" alt="html" />
            <IconImage source="" alt="bootstrap" />
            <IconImage source="" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="" alt="github" />
            <IconImage source="" alt="handlebars" />
            <IconImage source="." alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="" alt="jquery" />
            <IconImage source="" alt="mern" />
            <IconImage source="." alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="." alt="mysql" />
            <IconImage source="." alt="node" />
            <IconImage source="." alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default App;
