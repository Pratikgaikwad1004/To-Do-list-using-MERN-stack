import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <form className="login-form" method="POST">
        <div className="login-container">
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Email</label>
            <br />
            <input
              type="email"
              name="login-email-name"
              id="login-email-input"
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Password</label>
            <br />
            <input
              type="textbox"
              name="login-password-name"
              id="login-password-input"
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
