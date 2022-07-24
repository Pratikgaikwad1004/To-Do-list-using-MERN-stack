import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
