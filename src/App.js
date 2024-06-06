import React  from 'react';
import logo from './Homepage.jpg';
import {BrowserRouter} from 'react-router-dom'; 
import NavigationMenu from './Navigation'; 
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
       <center><p className="styled-paragraph">BACHELOR OF COMPUTER SCIENCE MAJOR IN ARTIFICIAL INTELLIGENCE</p></center>
       <div class="header"></div>
       <img className="img-responsive" src={logo} alt="logo" style={mystyle}/>
      <NavigationMenu />
    </div>
      <div className="footer"><p>@COPYRIGHT 2020.All rights reserved. Created by En Ting using React Framework.</p></div>
      </BrowserRouter>
  );
}

export default App;
