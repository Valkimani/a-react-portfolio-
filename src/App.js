import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "src/components/Navbar/navbar";
import About from "src/containers/About/about";
import Contacts from "src/containers/Contacts/contacts";
import Portfolio from "src/containers/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route path="/about" component={About} />
         <Route path="/contacts" component={Portfolio} />
         <Route path="/portfolio" component={Contacts} />         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
