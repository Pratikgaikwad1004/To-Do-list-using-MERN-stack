import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EventState from "./context/Events/EventState";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <EventState>
        <Router>
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          </Routes>
        </Router>
      </EventState>
    </>
  );
}

export default App;
