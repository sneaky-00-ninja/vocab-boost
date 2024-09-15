import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import Central from "./components/central";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Lesson from "./components/pages/lesson";
import Edit from "./components/pages/edit";
import NoPage from "./components/pages/no-page";

import './App.css';
import "./styles/main.scss";





function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <div className="header-test">hedda testing ... 15 px high</div>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Routes>




{/* 
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
              </a>
            </header>
          </div> 
*/}


          <div className="footer-test">
            Foota DIV test    (40 px high)
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
