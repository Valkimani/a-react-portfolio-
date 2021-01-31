import React from 'react';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Hotelier to a Developer." subtitle="The story of my transition from serving clients to creating Clients as a software development" />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/DSC_6082.jpg" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
       <div class="col-sm-12">
  <div class="pull-left"><img src="Images/VAL.png" alt="sunset"></div>
  <div class="pull-left">
</div>
<div>
</div>

  <h4 className="bio bio1">
        Before transitioning into web and software development, I diligently worked in the Food and Beverage industry as an Intern in downtown Atlanta area. While in the hotel industry, I found myself enjoying the technical and computer driven aspects of the restaurant operations which lead me to pursue a career in tech. The same interest has lead me to pursue a Full stack Web Development certification at Georgia Tech.
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
            <IconImage source="../static/pics/html.png" alt="html" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" />
            <IconImage source="../static/pics/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/githubIcon.png" alt="github" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/jquery.png" alt="jquery" />
            <IconImage source="../static/pics/mern.jpg" alt="mern" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/mysql.png" alt="mysql" />
            <IconImage source="../static/pics/nodejs.png" alt="node" />
            <IconImage source="../static/pics/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default App;
