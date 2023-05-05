import React  from 'react';
import logo from './Homepage.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './About.js'; 
import Educational_Background from './Educational_Background.js';
import Working_Experience from './Working_Experience.js';
import Skills from './Skills.js';
import Achievement from './Achievement.js';
import ContactMe from './ContactMe.js';
import './App.css';

function App() {
  //Responsive Image
  const mystyle = {
      width: "100%",
      height: "auto",
      padding : "0", 
    };
  return (
    <BrowserRouter>
    <div className="App"> 
       <center><h1>WONG EN TING</h1></center>
       <center><p>BACHELOR OF COMPUTER SCIENCE MAJOR IN ARTIFICIAL INTELLIGENCE</p></center>
       <div class="header"></div>

      <div className="navigation">
        <img className="img-responsive" src={logo} alt="logo" style={mystyle}/>
        <div className="nav1" style={mystyle}>
            <Link to="/about" className="item">About</Link> 
            <Link to="/educational-background" className="item">Educational Background</Link> 
            <Link to="/working-experience" className="item">Working Experience</Link>
            <Link to="/skills" className="item">Skills</Link>
            <Link to="/achievement-and-involvement" className="item">Achievement and Involvement</Link>
            <Link to="/contact-me" className="item">Contact Me</Link>
        </div>

         <div className="navigation-sub-2">
            <Route path="/about" component={About} />
            <Route exact path="/educational-background" component={Educational_Background} />
            <Route exact path="/working-experience" component={Working_Experience} />
            <Route path="/skills" component={Skills} />
            <Route exact path="/achievement-and-involvement" component={Achievement} />
            <Route exact path="/contact-me" component={ContactMe} />
        </div>
      </div>

    </div>
      <div className="footer"><p>@COPYRIGHT 2020.All rights reserved. Created by En Ting using React Framework.</p></div>
      </BrowserRouter>
  );
}

export default App;
