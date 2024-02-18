//import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import 'tailwindcss/tailwind.css'
//import Home from './components/Home';
//import LogIn from './components/Login';
//import Themes from './components/Themes';
//import ThemeToggle from './components/ThemeToggle';
//import Navbar from './components/NavBar';


//const App = () => {
  //return (
    //<Router>
     // <div className="min-h-screen flex flex-col">
        //<Navbar/>
       // <ThemeToggle />
       // <Routes>
          
         // <Route path="/" element={<LogIn />} />
         // <Route path="/home" element={<Home />} />
          //<Route path="/themes" element={<Themes />} />
          //<Route path="/register" element={<Register />} />

       // </Routes>
     // </div>
    //</Router>
  //);
//};

//export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  RegisterAndLogin  from './components/RegisterAndLogin';
import Home from "./components/Home"
import ForgotPassword from "./components/ForgotPassword";
import Lyrics from "./components/Lyrics";
import "./App.css";

function App(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                    <Route path="/lyrics" element={<Lyrics/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;
