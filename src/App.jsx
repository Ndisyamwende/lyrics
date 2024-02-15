import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import Home from './components/Home';
import LogIn from './components/Login';
import Themes from './components/Themes';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
