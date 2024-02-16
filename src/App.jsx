import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import Home from './components/Home';
import LogIn from './components/Login';
import Themes from './components/Themes';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/NavBar';
import SignUp from './components/Auth/signup';
import SignIn from './components/Auth/signin';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <ThemeToggle />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
