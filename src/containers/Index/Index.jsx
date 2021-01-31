import React from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Picture from './components/picture';
import Footer from './components/footer';



const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on" />
    <h3>Full Stack Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="" alt="" deployed="https://github.com/Valkimani/Easy-to-use-budget-app" />
      </div>
      <div className="col-md-6">
        <Picture source="." alt="" deployed="https://github.com/Valkimani/Hamburger-logger" />
      </div>
    </div>
    <h3 className="frontend">Front End Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="." alt="" github="https://github.com/Valkimani/Responsive-interaction" />
      </div>
      <div className="col-md-6">
        <Picture source="" alt="" github="" />
      </div>
    </div>
    <h3 className="backend">CLI Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source="" alt="" github="" />
      </div>
      <div className="col-md-4">
        <Picture source="" alt="" github="" />
      </div>
      <div className="col-md-4">
        <Picture source="" alt="" github="h" />
      </div>
    </div>
    <Footer />
  </div>
);
export default Home;
