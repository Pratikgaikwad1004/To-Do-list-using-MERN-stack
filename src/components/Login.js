import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
  const [credentials, setCredentials] = useState({email: "", password: ""});
  let history = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    if(json.authtoken) {
      localStorage.setItem('token', json.authtoken)
      history('/');
      props.showAlert("Loggedin successfully", "success")
    } else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <>
      <form className="login-form" method="POST" onSubmit={submitForm}>
        <div className="login-container">
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Email</label>
            <br />
            <input
              type="email"
              value={credentials.email}
              name="email"
              id="login-email-input"
              onChange={onChange}
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Password</label>
            <br />
            <input
              type="password"
              value={credentials.password}
              name="password"
              id="login-password-input"
              onChange={onChange}
            />
          </div>
          <div className="login-button login-div">
            <span><Link to="/signup" className="create-acc-btn">Signup</Link></span><br /><br />
            <button className="login-btn">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
