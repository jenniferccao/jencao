import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Homepage/Pages/Navbar';
import Home from './Homepage/Home';
import HomeBody from './Homepage/HomeBody';
import HomeFooter from './Homepage/HomeFooter';
import Portfolio from './Homepage/Pages/Portfolio';
import './App.css';

export default function MyApp() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="home-content">
              <Home />
              <HomeBody />
              <Portfolio />
              <HomeFooter />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
