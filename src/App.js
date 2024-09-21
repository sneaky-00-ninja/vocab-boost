import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Lesson from "./components/pages/lesson";
import EditPage from "./components/pages/edit";
import NoPage from "./components/pages/no-page";

import './App.css';
import "./styles/main.scss";



// TODO NEXT... 
// Make sure that when you sign out from the EDIT page, you leave the edit page. 



function App() {



  const [admin, setAdmin] = useState(false);
  const [entryUsername, setEntryUsername] = useState("");
  const [entryPassword, setEntryPassword] = useState("");
  // const [userType, setUserType] = useState("");
  const [realUsername, setRealUsername] = useState("test");
  const [realPassword, setRealPassword] = useState("123456");
  // const [GETusername, setGETusername] = useState("abcd");
  // const [GETpassword, setGETpassword] = useState("xxxx");




  //This worked for testing with password set locally (not from backend)
// function handleLogin(entryUsername, entryPassword) {
//   if (entryUsername === realUsername && entryPassword === realPassword)  {
//     setAdmin(true);
//     console.log("Login successful");
//   } else {
//     console.log("Login failed");
//   }
// }

  function handleLogin(entryUsername, entryPassword) {
      setAdmin(true);
      console.log("Login successful");
    }
  





function handleLoginClick(){
  setAdmin(true)
}

function handleLogoutClick(){
  setAdmin(false)
}


const adminOnlyPages = () => {
  return (
    <Route
      path="/login"
      element={
        <Login
          admin={admin} 
          handleLogin={handleLogin}
          realUsername={realUsername}
          realPassword={realPassword}
          entryUsername={entryUsername}
          entryPassword={entryPassword}
        />
      }
    />
  );
};




  return (
    <div className="App">
        <Router>
          <Header 
            admin={admin} 
            handleLoginClick={handleLoginClick} 
            handleLogoutClick={handleLogoutClick} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" 
              element={
                <About 
                  realUsername={realUsername} 
                  realPassword={realPassword} 
                  entryUsername={entryUsername} 
                  entryPassword={entryPassword} 
              />} />   
            { adminOnlyPages() }
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="*" element={<NoPage />} />
        </Routes>


{/* <div> <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" /> 
  <p> Edit <code>src/App.js</code> and save to reload. </p>
  <a className="App-link" href="https://reactjs.org" target="_blank" 
  rel="noopener noreferrer" > Learn React </a> </header> 
</div>  */}

          <div className="footer-test">
            Foota DIV test    (40 px high)
          </div>
          <Footer />
      </Router>
    </div>
  );

}

export default App;
